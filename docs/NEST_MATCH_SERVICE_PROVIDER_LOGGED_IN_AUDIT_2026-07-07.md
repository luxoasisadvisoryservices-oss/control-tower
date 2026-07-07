# Nest Match Service Provider Logged-In Audit

Created: 2026-07-07 11:26 Asia/Dubai

Verdict: logged-in service-provider skeleton works, but it is not ready for public service-provider acquisition.

Key findings:

- Login works and dashboard loads.
- Service-provider profile is 33% complete.
- No requests, assignments, messages, reviews, contracts, or profile views yet.
- Pricing page shows SP Free 0 AED, SP Pro AED 290/year, SP Premium AED 590/year, SP Lifetime AED 1,399 one-time.
- Service-provider dashboard shows different pricing: Pro USD 9.99/month and Premium USD 19.99/month.
- Contracts Hub shows 2 free templates, but the visible Generate Document buttons did not open a generator in the browser session.
- `/requests` and `/assignments` return 404.
- `/notifications` crashes with a realtime subscription error.
- `/dashboard/service-provider` shows `Failed to load partnerships` and broken greeting `Welcome, /!`.

Fix priority:

1. Fix `/requests` and `/assignments` routing.
2. Fix notifications realtime crash.
3. Fix service-provider partnership fetch.
4. Fix broken greeting.
5. Standardise AED/USD pricing and monthly/annual language.
6. Make free contract generation visibly work.
7. Complete or seed the service-provider profile.
8. Add at least one test service request.

Recommendation: controlled beta only. Do not promote to real service providers until these fixes are done and landlord/operator/admin roles are tested.

