// ============================================================
// stripe-webhook — Supabase Edge Function
//
// Stripe calls THIS function directly (server-to-server, never from the
// browser) whenever something happens on a Checkout Session — we only
// care about "checkout.session.completed", meaning payment succeeded.
// This is the ONLY place that actually grants a skin, which is what
// makes it trustworthy: the browser can't be tricked or tampered with
// into unlocking a skin for free, because the browser never talks to
// this function at all.
//
// IMPORTANT (set this when you deploy this specific function): turn OFF
// "Enforce JWT Verification" for this function in the Supabase
// dashboard. Stripe doesn't send a Supabase login token — it sends its
// own "stripe-signature" header instead, which this code verifies by
// hand below. If JWT verification is left on, Supabase will reject
// every request from Stripe before this code ever runs.
// ============================================================

import { createClient } from 'npm:@supabase/supabase-js@2'
import Stripe from 'npm:stripe@17'

Deno.serve(async (req) => {
  const signature = req.headers.get('stripe-signature')
  const body = await req.text()

  const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
    apiVersion: '2024-06-20',
    httpClient: Stripe.createFetchHttpClient(),
  })

  let event
  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature!,
      Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
  } catch (err) {
    // Signature didn't check out — either a misconfigured secret, or
    // someone other than Stripe trying to fake a "payment succeeded"
    // call. Reject it rather than trust the request.
    console.error('Webhook signature verification failed:', err.message)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const teamId = session.metadata?.teamId
    const skinId = session.metadata?.skinId

    if (teamId && skinId) {
      // Uses the service-role key (full database access, bypasses RLS)
      // because this runs with no logged-in user — it's Stripe calling
      // us, not a person in a browser.
      const supabaseAdmin = createClient(
        Deno.env.get('SUPABASE_URL')!,
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
      )

      const { data: team } = await supabaseAdmin
        .from('teams').select('owned_skins').eq('id', teamId).single()
      const owned = team?.owned_skins || ['classic']
      if (!owned.includes(skinId)) {
        await supabaseAdmin
          .from('teams')
          .update({ owned_skins: [...owned, skinId] })
          .eq('id', teamId)
      }

      // Keep a receipt on file — useful for "did I actually get
      // charged for this" support questions and for your own records.
      await supabaseAdmin.from('skin_purchases').insert({
        team_id: teamId,
        skin_id: skinId,
        amount_cents: session.amount_total,
        stripe_session_id: session.id,
      })
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
})
