# Lovable Prompt: Nest Match Service Provider Logged-In Fix Pass

Goal: fix the logged-in service-provider flow first. Do not redesign the whole product. Do not touch subscriptions, Stripe checkout, payment plans, or public launch copy except where pricing text is inconsistent.

Check first:

- `/dashboard`
- `/dashboard/service-provider`
- `/profile`
- `/browse-requests`
- `/requests`
- `/assignments`
- `/messages`
- `/notifications`
- `/contracts`
- `/pricing`
- `/settings/market`

Fix priority:

1. Fix `/requests` and `/assignments` so no logged-in nav item opens a 404.
2. Fix `/notifications` realtime subscription crash.
3. Fix `Failed to load partnerships` on service-provider dashboard; empty result should show empty state, not error.
4. Fix greeting like `Welcome, /!`; fallback to first name, company name, email local part, then `there`.
5. Standardise service-provider pricing so dashboard and pricing page do not mix AED annual and USD monthly.
6. Make free contract `Generate Document` buttons visibly open a modal/page/preview/download flow, or replace dead buttons with a clear beta message.
7. Confirm profile completion updates cleanly and does not require company name for a personal service-provider account.
8. Add one safe test/demo service request for QA, without external notifications.

Do not:

- create or trigger a subscription
- submit Stripe checkout
- send messages to real users
- publish or promote the site
- strengthen legal claims
- remove Contracts Hub disclaimer

Return files changed, bugs fixed, routes tested, screenshots/notes, blockers, and confirmation that no payment/subscription/external message was triggered.

