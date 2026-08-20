# Nest Match Launch QA - 2026-08-20

Tested live site: https://nest-match.com
Test time: 2026-08-20 12:38 Asia/Dubai

## Verdict

Do not broad-launch yet.

The public site is materially better than the earlier August safety QA: the main public pages return 200, legal pages exist, SEO basics are strong, login connects to Supabase, and the false checkout/purchase pages seen in the earlier QA were not in the public navigation tested today.

Launch blocker remains: the primary acquisition CTA flow is confused. Public "Request beta access" routes to a login screen, not beta signup, and "List a property" routes to Browse Hosts & Agencies. On mobile, the public pages also show app-style bottom navigation / sticky CTAs that crowd or overlay the public landing experience. This is bad enough to reduce signups and make the product feel unfinished.

## Scope Tested

- Desktop Chromium at 1366/1440px.
- Mobile Chromium at 390px width.
- Public pages and sitemap routes.
- Homepage CTAs and navigation targets.
- Login validation with fake invalid credentials only.
- Registration empty-state validation for landlord, agent and host.
- Service-provider registration wizard through company/category/details step.
- FAQ accordion interaction.
- Pricing toggle interaction.
- Robots, sitemap, manifest, favicon, PWA icons and OG image.
- Lighthouse on homepage via Playwright Chromium.

No real user account was created and no production signup/form submission was completed.

## P0 / Launch Blockers

1. Beta-access CTA opens login instead of signup.
   - Homepage "Request beta access" href: `/auth`.
   - `/auth` renders "Welcome back / Sign in to your Nest Match account".
   - This is the top conversion action and currently tells new users to sign in.
   - Fix: route "Request beta access" to `/register`, `/get-started`, or `/early-access`, preferably a role-selection signup page.

2. Landlord/property CTA points to the wrong product action.
   - Homepage "List a property" href: `/browse-hosts`.
   - Destination title: "Browse Hosts & Agencies".
   - This should either be renamed "Browse hosts" or routed to a landlord/property opportunity signup/posting path.

3. Mobile public landing has app navigation/sticky CTA leakage.
   - Mobile homepage shows a bottom app nav with Home / More / Messages / Profile plus a sticky CTA bar.
   - The sticky CTA overlaps the public landing page action area and makes the launch page feel like an unfinished logged-in shell.
   - Fix: hide app bottom navigation for logged-out public marketing pages; keep only one clear mobile CTA.

## P1 / Fix Before Serious Traffic

1. Mobile rendering uses a fixed full-screen app shell for public pages.
   - Public routes render inside `fixed inset-0 ... overflow-hidden`.
   - Users may still scroll within an inner container, but screenshots/full-page browser behaviour only capture one viewport and it is easy to create trapped/overlapped content.
   - Fix: marketing/public pages should use normal document flow; reserve fixed app shell for authenticated app screens.

2. Registration forms need accessible programmatic labels.
   - Visual labels exist, but Playwright could not find associated form labels on landlord, agent, host and service-provider detail inputs.
   - Lighthouse homepage accessibility was 93, but registration pages should be checked with form-specific accessibility testing.

3. Performance is weak on Lighthouse mobile simulation.
   - Performance score: 47.
   - FCP: 4.6s.
   - LCP: 10.0s.
   - TTI: 10.0s.
   - Unused JS: about 321 KiB from `assets/index-BhkvoY1n.js`.
   - Fix: code-split public marketing pages away from app/auth/dashboard bundle; lazy-load logged-in app routes.

4. Pricing toggle did not visibly change in the text-level test.
   - Clicking Monthly / Annual kept the same visible first content in the automated test.
   - It may be changing lower on the page, but this needs manual confirmation because price presentation is commercial-critical.

5. `/how-it-works` has no H1 element in automated extraction.
   - Page title exists and visible heading exists, but no `h1` was found.
   - Fix for SEO/accessibility consistency.

## Passing Checks

- HTTPS returns 200 with HSTS, `nosniff`, strict-origin referrer policy.
- Main public routes tested returned 200:
  - `/`
  - `/how-it-works`
  - `/pricing`
  - `/faq`
  - `/login`
  - `/auth`
  - `/browse-hosts`
  - `/opportunities`
  - `/inventory-board`
  - `/inventory-board/post?intent=available_unit`
  - `/contracts` redirects/guards to login
  - `/browse`
  - `/terms`
  - `/privacy`
  - `/contact`
  - `/get-started`
  - `/early-access`
  - `/register`
  - `/register/landlord`
  - `/register/agency`
  - `/register/host`
  - `/register/service-provider`
  - `/airbnb-management-dubai`
  - `/holiday-home-operator-dubai`
  - `/holiday-home-services-dubai`
- `robots.txt` valid and allows public pages while blocking admin/settings/messages/connections.
- `sitemap.xml` exists and includes public/legal/SEO landing routes.
- `manifest.webmanifest`, favicon, PWA icons, apple touch icon and OG image return 200.
- Homepage SEO score: 100.
- Homepage best-practices score: 100.
- Homepage accessibility score: 93.
- FAQ accordion opens and closes content.
- Login with fake invalid credentials returns a proper "Invalid email or password" error from Supabase.
- Empty registration submits trigger browser validation without crashing.
- Service-provider wizard advances through type and category selection.

## Recommended Launch Decision

Controlled beta can proceed after the three P0 fixes above if the launch is manual/curated and no paid traffic is used.

Do not run public launch, ads, LinkedIn push, or broader outbound until:

- top CTAs route to signup/beta access correctly;
- mobile public pages no longer show app shell bottom navigation;
- one full signup test account is created for each role in production or staging;
- Supabase/RLS and email verification paths are checked with real test accounts;
- Stripe/checkout success remains session-verified if payments are exposed.

