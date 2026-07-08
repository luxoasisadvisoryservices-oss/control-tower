# Nest Match Freemium Contact Rule - 2026-07-08

## Decision

Keep Nest Match free to join, browse and make a small number of real contacts. Do not make the free tier browse-only.

The platform is still in liquidity-building mode. If new users cannot contact anyone on day one, the product feels empty and the marketplace loop dies before subscription intent can form.

## Recommended Free Contact Allowance

Use monthly contact credits by role:

- Service providers: 5 new contacts per month.
- Hosts / operators: 3 new contacts per month.
- Landlords / owners: 2 new contacts per month.
- Agents / agencies: 3 new contacts per month.

Existing conversations should remain open after the first contact credit is used. Do not charge again for replying inside an existing thread.

## Why This Is The Best Balance

Service providers need more free reach because they create supply-side activity and make the network feel alive. Hosts and operators should get enough contacts to test real value without treating the product as unlimited free lead generation. Landlords and owners are higher-value contacts, so the free allowance should be tighter. Agents sit in the middle because they may bring inventory, but they can also spam if unlimited.

## What Counts As A Contact

A contact credit is consumed when a user starts a new conversation, unlocks phone/email/WhatsApp, applies to a request, or sends an enquiry to a new profile.

No credit should be consumed for:

- replying in an existing thread;
- viewing public profiles;
- saving/favouriting users;
- browsing listings or services;
- completing profile/onboarding;
- reading inbound messages.

## Paid Upgrade Trigger

After the free allowance is used, show:

`You used your free monthly contacts. Upgrade to contact more hosts, landlords, operators and service providers.`

Paid plans should unlock higher monthly contact limits, boosted visibility, verified badges, saved search alerts, advanced filtering, contracts and priority placement.

## Anti-Spam Guardrails

- Require profile completion before using contact credits.
- Rate-limit first messages.
- Allow report/block.
- Keep admin review for suspicious accounts.
- Do not allow unlimited free phone/email reveal.

## Implementation Copy

On locked contact buttons:

`Free plan: [N] contacts left this month`

When allowed:

`Contact`

When used:

`Upgrade to contact more`

## Build Rule

Contact gating should be role-aware, not one global free limit. The goal is to create enough successful first conversations that users understand the network value, then monetise volume, trust and visibility.
