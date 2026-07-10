# Nest Match Production Scaling Readiness - 2026-07-10

Damiano confirmed that GitHub and Stripe are connected, then corrected the database assumption: the production database/Supabase path is not fully connected yet because the paid Supabase plan is being deferred until there is more real traffic or a stronger production need.

This means Nest Match has code ownership and payment setup moving in the right direction, but the database foundation is not yet a finished production assumption. The immediate question is when to activate the paid Supabase/production database path and then harden data, auth, permissions, storage and monitoring before real traffic.

## View

Lovable can stay as the fast product-build layer for private beta.

The real foundation must be:

- owned/synced GitHub code;
- owned Supabase project and database, upgraded when real beta traffic or production-readiness requires it;
- clean role-based schema;
- correct Row Level Security policies;
- real Stripe checkout/session validation;
- backups, logs and monitoring;
- a migration path to normal developer workflow if Lovable becomes limiting.

## Before Real Traffic

1. Confirm GitHub sync is active and current.
2. Confirm the current database state: free/prototype Supabase only vs paid production Supabase.
3. Upgrade Supabase only when traffic, persistent user data, backups, RLS QA, or launch credibility justify the monthly cost.
4. Review database schema for users, roles, profiles, inventory, messages, reviews, connections, subscriptions and admin/moderation.
5. Confirm Row Level Security policies for every table by role.
6. Confirm Stripe checkout success pages require verified checkout/session/payment state.
7. Confirm webhook handling for subscription/payment events.
8. Confirm storage rules for profile photos, portfolio files, message attachments and documents.
9. Add monitoring/logging for auth errors, database errors, message failures, payment failures and upload failures.
10. Create staging/test accounts for every role and run end-to-end QA.
11. Document migration/export path from Lovable to normal developer workflow.

## Lovable / Oval Ask

GitHub and Stripe are connected. Supabase/the production database is not being upgraded yet because we are avoiding the paid plan until there is real traffic or a clear production need. Please confirm what database/auth/storage is currently active, what will break or remain limited before the Supabase upgrade, and what exact steps are needed when we decide to upgrade. Also confirm GitHub sync is current, Stripe success pages and webhooks are session-verified, and the app can be migrated/self-hosted from the synced repo if Lovable becomes limiting. List the scaling risks across database, auth, messaging, payments, storage, rate limits, monitoring and logs.
