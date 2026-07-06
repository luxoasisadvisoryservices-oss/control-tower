# Nest Match Live Recheck

Checked: 2026-07-06 16:31-16:55 Dubai  
URL: https://nest-match.com/  
Status: live browser QA, not just HTTP check.

## Verdict

Do not tell Oval/Lovable to deliver the app yet.

Overall app-delivery score: **58 / 100**

Breakdown:

- Public marketing / private-beta surface: **72 / 100**
- Technical route stability: **80 / 100**
- Core product readiness: **42 / 100**
- Paid / authenticated flow confidence: **35 / 100**

The site is much cleaner as a public private-beta/waitlist page, but it is not yet a deliverable app. It can be used carefully for controlled early-access collection, but not as a finished marketplace/product handoff.

## What Was Checked

Browser audit using Chromium against the live site.

Routes checked: 67

Sitemap/public routes:

- `/`
- `/how-it-works`
- `/pricing`
- `/faq`
- `/browse`
- `/get-started`
- `/early-access`
- `/login`
- `/register`
- `/register/landlord`
- `/register/agency`
- `/register/host`
- `/register/service-provider`
- `/terms`
- `/privacy`
- `/airbnb-management-dubai`
- `/holiday-home-operator-dubai`
- `/holiday-home-services-dubai`

App/protected/hidden routes checked:

- `/inventory-board`
- `/inventory-board/post`
- `/inventory-board/my-postings`
- `/contracts`
- `/dashboard`
- `/dashboard/landlord`
- `/dashboard/host`
- `/dashboard/agency`
- `/dashboard/service-provider`
- `/landlord/dashboard`
- `/agency/dashboard`
- `/messages`
- `/notifications`
- `/profile`
- `/my-listings`
- `/properties`
- `/properties/create`
- `/browse-properties`
- `/browse-hosts`
- `/browse-service-providers`
- `/browse-requests`
- `/applications`
- `/hosts`
- `/service-providers`
- `/find-service-providers`
- `/connect-landlords`
- `/settings/market`
- `/admin`
- `/admin/agents`
- `/admin/inventory`
- `/checkout-success`
- `/boost/success`
- `/purchase/success`
- `/purchase/cancel`
- auth/reset/onboarding/home variants.

Mobile screenshots checked for:

- home
- browse
- inventory board
- register
- pricing
- early access

Audit evidence folder:

`tmp/nestmatch-audit-20260706-1631-fast/`

## What Is Good

- Live site is reachable over HTTPS.
- Sitemap is present and includes the main public routes.
- 67 browser routes opened without hard React crash.
- Homepage is visually much stronger than the earlier audit.
- Public copy is more honest: private beta, Dubai first, no public traction claims.
- Browse page now clearly says `No live listings yet` rather than pretending there is supply.
- Main role registration pages render.
- Protected dashboards, messages, contracts and admin routes redirect to login instead of exposing internal pages.
- Mobile layout has no obvious horizontal overflow on checked pages.
- Early-access page is visually strong and has a simple lead form.

## Blocking Issues

1. Browse still has no live listings.

`/browse` says:

`No live listings yet. We're onboarding landlords and agencies in Dubai. Listings will appear here as they go live.`

This is honest, but it means the marketplace is not yet demonstrable as a working inventory product.

2. Inventory Board is still not a working board.

`/inventory-board` shows only a private-beta card:

`Host Inventory Board ... a B2B board for Dubai holiday-home hosts...`

There are no postings, filters, create button, examples, login prompt, demo data, or end-to-end proof visible. `/inventory-board/post` and `/inventory-board/my-postings` show the same placeholder when unauthenticated.

3. Paid success pages are directly reachable.

These pages render success/cancel states directly:

- `/purchase/success`
- `/checkout-success`
- `/purchase/cancel`

The app should not show successful purchase/account-upgrade states without validating a payment session or authenticated account state.

4. Pricing paid buttons are not proven.

Click test:

- `Start Free` goes to `/register`.
- `Choose Premium` stayed on `/pricing`.

The paid path is not confidently working from public pricing.

5. The real app cannot be fully accepted without test credentials.

These core routes redirect to login:

- dashboards
- messages
- contracts
- applications
- inventory post/my postings
- protected browse categories
- admin

That is correct from a security perspective, but it means the delivery cannot be accepted until Oval/Lovable provides test accounts for landlord, operator/host, service provider and admin.

6. Homepage still has illustrative inventory and review examples.

It is labelled as illustrative, which is better than before, but it still creates a polished marketplace impression while `/browse` has no live listings. This is acceptable for private beta, not for public launch.

7. Early-access page has a date inconsistency.

Footer on early-access page shows `© 2025 Nest Match`, while the main site footer shows `© 2026 Nest Match`.

## Exact Message To Oval / Lovable

Do not deliver the app yet. Current score is 58/100.

Please fix these blockers before delivery:

1. Make Inventory Board a real working beta board or show a proper demo/empty state with clear CTA. `/inventory-board`, `/inventory-board/post`, and `/inventory-board/my-postings` cannot all show the same placeholder.
2. Add at least seeded/demo inventory or controlled private-beta listings to `/browse`, or keep Browse clearly as waitlist-only and remove any impression that live supply exists.
3. Protect `/purchase/success` and `/checkout-success` behind real payment-session/account validation. They must not be directly reachable as success pages.
4. Fix pricing CTAs. `Choose Premium`, `Start with Pro`, and `Become a Founder` must either start the correct authenticated checkout/registration flow or be clearly disabled until payments are ready.
5. Provide test credentials for landlord, operator/host, service provider and admin so dashboards, messages, contracts, applications, inventory posting and admin moderation can be accepted.
6. Align early-access footer year and company/legal wording with the main site.
7. Keep public positioning as private beta until Browse, Inventory Board, messaging, contracts and admin moderation pass end-to-end testing.

After these are done, rerun a logged-in acceptance test before calling the app deliverable.

