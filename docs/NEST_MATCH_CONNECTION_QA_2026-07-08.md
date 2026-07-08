# Nest Match Connection QA - 2026-07-08

Run time: 2026-07-08 11:40 Asia/Dubai

Verdict: connection flow is not ready.

The service-provider account could open `/messages` and `New Message`, but searches for `Lux Oasis`, `Lux`, `Oasis`, `Damiano`, `operator`, `host`, `Lux Oasis Holiday Homes`, `service provider` and `landlord` all returned `No users found`.

No message was sent because no recipient/contact path was available.

Additional findings:

- `/browse-hosts` and `/hosts` were blank or unusable in the test pass.
- `/browse-operators`, `/browse-operators?search=Lux%20Oasis` and `/operators` returned 404.
- `/browse-service-providers` loaded but showed one broken provider card named `/`.
- `View Profile` linked to `/service-provider/d1722843-b329-43c2-b6ef-5e459e56f55d`, which returned `Provider not found`.
- `/browse-requests` is sample-only and explicitly says no host is contacted.
- Console showed `user_weekly_usage` table missing from schema cache.

P0 blocker:

- Host/operator/service-provider discovery and messaging loop is not working.

Fix order:

1. Make Lux Oasis / operator account discoverable by company name, user name and role.
2. Fix New Message search, recipient selection, composer, send and conversation creation.
3. Build/fix host/operator browse routes or hide them until ready.
4. Fix service-provider card display and profile route.
5. Add contact/connect buttons on profiles where plan allows.
6. Fix or remove `user_weekly_usage` dependency.
7. Provide two-role QA accounts and retest provider-to-operator message, operator reply and application flow.

