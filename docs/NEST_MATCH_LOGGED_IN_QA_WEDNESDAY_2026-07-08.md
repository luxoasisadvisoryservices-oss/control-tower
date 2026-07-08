# Nest Match Logged-In QA - 2026-07-08

Run time: 2026-07-08 11:10 Asia/Dubai  
Account tested: service-provider / interior-designer personal account  
Security: password was used only for this QA pass and is not saved here.

## Verdict

Nest Match is not ready to be called delivered.

It is a usable controlled-beta skeleton for a service-provider account, but the delivery gate is still open because payment success pages are directly reachable, several account/navigation routes are broken, the Inventory Board is not an end-to-end product loop, and only the service-provider role was tested.

## Scores

- Product-depth / controlled-beta skeleton: 76/100.
- Logged-in service-provider confidence: 72/100.
- Payment / subscription safety: 35/100.
- Public launch / liquidity readiness: 55/100.

The score is lower than the 7 July service-provider fix verification because this was a broader acceptance pass, including success pages, billing routes, role-route behaviour and Inventory Board readiness.

## What Passed

- Login works with the COO service-provider account.
- `/dashboard` loads and recognises the account as Service Provider on Free plan.
- `/dashboard/service-provider` loads without the old partnership crash.
- Greeting is fixed: `Welcome, agent!`.
- `/profile` loads with editable provider fields, subscription status and role locked as Service Provider.
- `/browse-requests` is now reachable and shows clearly labelled sample requests.
- `/requests` redirects to `/browse-requests`.
- `/assignments` redirects to `/dashboard/service-provider`.
- `/messages` loads with a clean empty state.
- `/notifications` loads with a clean empty state.
- `/applications` loads with a clean empty state.
- `/contracts` loads and keeps the right legal posture: templates are informational, jurisdiction-aware, and Nest Match is not a party to the contracts.
- `/pricing` now shows AED-led service-provider pricing: Free, Premium, Pro and Lifetime.
- `/admin` does not expose admin data to the service-provider account. It redirects to the normal dashboard.

## Blockers

### P0 - Must Fix Before Delivery Claim

1. Direct success-page access is unsafe.
   - `/purchase/success` shows `Purchase Successful!`.
   - `/checkout-success` shows `Payment Successful!`.
   - Both can be opened directly without proving a real Stripe transaction.
   - This can create false upgrade confidence and makes the payment system look insecure.

2. Inventory Board is still not a real workflow.
   - `/inventory-board` loads, but it is effectively a description page.
   - I did not see a post/create flow, my-postings workflow, validation, edit/withdraw action, or real board list.
   - This is the core marketplace wedge, so it cannot stay placeholder if the product is being delivered.

### P1 - Fix Before Private Beta Users Are Invited

1. Broken or incomplete account routes:
   - `/alerts` is 404 while Alerts appears in the logged-in navigation.
   - `/settings` is 404.
   - `/subscription` is 404.
   - `/billing` is 404.

2. Role routes are not clean.
   - A service-provider account requesting `/dashboard/host`, `/dashboard/landlord`, or `/dashboard/agency` gets sent to the generic dashboard.
   - I did not see data leakage, but the app should show a clean not-authorised state or a role-aware redirect.

3. Profile completion is weak.
   - Dashboard shows profile completion around 33%.
   - Profile page shows a lower completion state.
   - Required fields are understandable, but this needs a cleaner completion model before provider onboarding.

4. Messaging is still unproven.
   - `/messages` loads, but with no real conversation, no recipient flow proven and no host/operator/provider conversation test completed.

5. Contracts Hub access needs a final permissions check.
   - Library and legal disclaimers look good.
   - The account shows `Contracts 2 Free`, but multiple templates show `Upgrade to Access` and some show `Generate Document`.
   - Need a clear Free/Premium/Pro access matrix and one safe generation smoke test.

### P2 - Fix Before Marketing

- Browse still has no live listings.
- Service requests are samples only.
- Pricing CTAs were visible but not clicked because Damiano explicitly said not to subscribe.
- Only one account role was tested. Landlord, operator/host, agency and admin still need separate credentials.

## Page Results

- `/`: passes as an authenticated public home; copy remains honest about private beta.
- `/dashboard`: pass with service-provider cards and upgrade/profile CTAs.
- `/dashboard/service-provider`: pass as a provider dashboard skeleton.
- `/dashboard/host`, `/dashboard/landlord`, `/dashboard/agency`: no leak found, but role routing should be cleaner.
- `/profile`: pass, with profile-completion cleanup needed.
- `/inventory-board`: fail as a product loop.
- `/browse`: pass as empty private-beta browse, not as live marketplace.
- `/browse-requests`: pass for samples, not for real demand.
- `/messages`: pass as empty state only.
- `/notifications`: pass as empty state.
- `/applications`: pass as empty state.
- `/contracts`: pass for legal posture; access matrix still needs proof.
- `/pricing`: pass for service-provider pricing display.
- `/alerts`: fail, 404.
- `/settings`, `/subscription`, `/billing`: fail, 404.
- `/purchase/success`, `/checkout-success`: critical fail, direct false success.
- `/admin`: pass from service-provider account because no admin data was exposed.

## Exact Lovable / Oval Fix Order

1. Block direct access to `/purchase/success` and `/checkout-success` unless a verified Stripe checkout/session/payment state exists. If no valid session exists, show a safe fallback: `No verified payment found`.
2. Make Inventory Board real end to end: create post, board list, my postings, required fields, validation, edit/withdraw/repost, city/market field and provider/operator visibility.
3. Fix logged-in navigation: either build `/alerts`, `/settings/market`, `/subscription`, `/billing`, or remove/hide links until they exist.
4. Make role routing explicit: service-provider accounts should not silently land on generic dashboard when requesting landlord/host/agency dashboards. Show role-aware redirect or not-authorised state.
5. Prove one real message flow between two test users without sending external emails.
6. Prove Contracts Hub access by plan: Free, Pro, Premium, Lifetime. Confirm exactly which templates are included and that upgrade-gated templates cannot be generated by direct route or client-side bypass.
7. Provide four test accounts for final acceptance: landlord, operator/host, service provider and admin.
8. After fixes, rerun the acceptance pass. Do not label the product delivered before the P0s and P1 nav/account issues are closed.

## COO Decision

Accept as: private internal controlled-beta skeleton.

Do not accept as: delivered marketplace, paid-flow-ready product, public beta, or product ready for broad service-provider/landlord promotion.

