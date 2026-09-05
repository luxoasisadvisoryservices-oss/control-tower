# Nest Match / Luca Requirements Status - 2026-09-05

Source: Luca Ceschinelli's forwarded email and PDFs from 5 September 2026, the saved Luca action-plan review, the 3 September live Nest Match audit, live browser checks on `https://nest-match.com`, and public PriceLabs terms checked on 5 September 2026.

Memory recall note: OpenClaw memory search was unavailable because the embedding auth token is expired, so this checklist uses saved workspace files and live web checks.

## Executive View

For tomorrow, Damiano should send Luca the repo/demo direction and tell him the Nest Match requirement items are not all "done". The website has a real beta surface, public Terms, Privacy, pricing, and Contracts Preview pages, but the formal UAE/compliance side still needs confirmation before paid or broad launch.

PriceLabs is separate: Damiano is already a revenue manager / RM user with PriceLabs, so using PriceLabs for Damiano-led consultancy is aligned. The open question is whether Oasis Revenue Lab software may use, expose, summarise, or resell PriceLabs-derived data inside a product sold to other operators. That needs the actual partner/RM/API terms or written confirmation from PriceLabs.

## Where To Find PriceLabs Partner Terms

Look in this order:

1. PriceLabs account / partner or RM dashboard: account settings, partner programme, billing, legal, API/developer, or agreement area.
2. Old PriceLabs onboarding emails: search Gmail for `PriceLabs partner`, `RM Partner`, `Revenue Manager`, `agreement`, `terms`, `API`, `Eriel`, `partnership`, `Revenue Accelerator`.
3. Any signed PDF or click-through agreement connected to the RM / partner programme.
4. If not visible, email or WhatsApp the PriceLabs partner contact and ask for the current written terms for RM partner use, API/MCP access, client-data use, and product/white-label restrictions.

Public PriceLabs Terms and Conditions are not enough for Luca's analysis, but they explain the caution: PriceLabs grants a limited, non-exclusive, non-transferable, non-sublicensable, revocable right to use Services Content for internal business purposes, and restricts copying, resale, third-party distribution, scraping, benchmarking, or use to create/offer a competing product without written consent.

Practical position for Luca:

> I am an RM with PriceLabs and Revenue Assist is meant to sit on top of my revenue-management work, not to resell PriceLabs as a clone. I will send you the actual partner/RM terms when I find them. Until then, assume no PriceLabs data is redistributed, sublicensed, or used to build a competing PriceLabs product.

## Nest Match Items Luca Asked For

| Item | Status | Evidence / note |
| --- | --- | --- |
| Current website | Have | `https://nest-match.com` is live. Browser checks confirm rendered `/terms`, `/privacy`, `/pricing`, `/contracts-preview`, `/faq`. |
| Current pricing/offers page | Have, but beta | `/pricing` shows landlords free, Host Free, Host Pro AED 390/year, Host Premium AED 790/year, Host Lifetime AED 2,999 one-time. Prior audit says paid CTAs were not a reliable checkout funnel yet. |
| Terms of Use | Have as website draft | `/terms` exists. It says Nest Match is only a marketplace/networking platform, operated by Lux Oasis Advisory & Services LLC, licence no. 2645909.01, Shams, and not a broker, property manager, payment handler, or legal advisor. Needs UAE legal review before relying on it for broad paid launch. |
| Privacy Policy / data processing | Have as website draft | `/privacy` references UAE PDPL, account/profile/property/usage/message/payment data, Supabase, Stripe, hosting providers, user rights, retention, cross-border processing and cookies. Needs legal/privacy review and verification against actual tracking, database, scraping, outreach and provider-claim flows. |
| Licence activity code | Partial / needs source confirmation | Terms mention Lux Oasis Advisory & Services LLC, Shams licence no. 2645909.01. Luca specifically needs the actual activity code and whether it covers a B2B marketplace/directory/matching service. |
| Media-office permit | Missing / needs formal answer | Luca asks for this explicitly. No formal media-office answer is recorded in the current source pack. |
| Certifications | Unknown / likely not required yet, but must verify | Luca's checklist asks what certifications are needed and when. Treat as a question for the consultant/authority, not as solved. |
| Contracts Hub | Have preview, not legally cleared | `/contracts-preview` lists many templates and disclaimers. Existing legal-review task says do not claim lawyer-reviewed, UAE-compliant, enforceable, or legally safe until a UAE lawyer reviews exact wording. |
| Provider/user access rules | Partial | Terms say users must hold required licences and permits. Prior product/audit files include verification badges and contact limits, but verification standard and review-dispute process still need final operating rules. |
| Reviews/reputation | Partial | Product target includes reviews and verification, but previous QA showed the full mutual-review flow was not fully accepted. Luca should check implementation and liability wording. |
| Payments/subscriptions | Partial / not paid-launch ready | Terms mention no user-to-user payment handling. Privacy mentions Stripe for subscriptions/boosts. Prior live audit found paid pricing CTAs not functioning reliably. |
| Hosting/messaging at volume | Missing analysis | Luca's WP4 should produce where it runs, what it costs as users grow, and how internal messaging holds up at volume. |
| Acquisition machine | Not built / analysis first | Luca's WP2 should price census, scraping/enrichment, pre-filled profile pages, contact channel, contracts, onboarding and support. Existing outreach files provide seed lists and manual plan, not the finished automated machine. |

## What Damiano Has

- Live Nest Match beta website.
- Public Terms, Privacy, Pricing, FAQ and Contracts Preview pages.
- Lux Oasis Advisory & Services LLC licence number shown on the site: `2645909.01`, Shams.
- Service-provider outreach plan and seed files.
- Live website audit from 3 September 2026.
- Contracts Hub legal-review task and lawyer shortlist.
- Current positioning: controlled beta, Dubai first, service-provider/operator supply before WhatsApp group launch.
- Luca's written two-week analysis plan and GitHub access request.

## What Damiano Does Not Yet Have

- Confirmed activity-code fit for marketplace / directory / matching / software activity.
- Formal media-office permit answer.
- Lawyer-reviewed final Terms of Use.
- Lawyer/privacy-reviewed final Privacy Policy and data-processing flow.
- Final consent model for scraped/pre-filled provider pages and profile claiming.
- Final verification standard for licences, badges, reviews and dispute handling.
- Fully working paid checkout/subscription funnel verified end to end.
- Final Contracts Hub legal clearance.
- Hosting, messaging and database volume-cost analysis.
- Written PriceLabs partner/RM/API permission for software use and product resale boundaries.

## Tomorrow's Practical Action

Send Luca:

1. Repo/demo direction for Revenue Assist and Nest Match.
2. `https://nest-match.com/pricing`, `https://nest-match.com/terms`, `https://nest-match.com/privacy`, and `https://nest-match.com/contracts-preview`.
3. Tell him the licence/media-office/legal/privacy items are not final and should be treated as his WP3 checklist, not as already approved.
4. Tell him PriceLabs terms are being located; until written confirmation is found, assume PriceLabs data is for Damiano's RM work and read-only analysis, not redistribution or a competing SaaS wrapper.

Suggested wording:

> Luca, for PriceLabs: I am already working as an RM with them, so the alignment is there for consultancy. What I still need to find/send you is the written partner/RM/API terms so we know the exact boundaries for Revenue Assist as software. Until then, please assume no PriceLabs data is redistributed or used to build a PriceLabs clone. For Nest Match, the live site has pricing, Terms, Privacy and contracts preview pages, but the licence activity, media-office answer, legal/privacy review and certifications should be treated as open checklist items for your WP3 analysis.
