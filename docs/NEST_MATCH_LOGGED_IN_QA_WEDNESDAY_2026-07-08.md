# Nest Match Logged-In QA Plan

Created: 2026-07-06 Dubai  
Run date: Wednesday 2026-07-08  
Status: scheduled. Waiting for temporary test credentials from Damiano.

## Purpose

Run the real acceptance pass that the public audit could not complete.

The public-page audit scored Nest Match **78/100** for product-depth / controlled-beta skeleton quality. Wednesday's logged-in QA should verify whether the app deserves a higher product score and whether Oval/Lovable can call the beta delivered.

## Credential Request

Ask Damiano for temporary credentials on Wednesday.

Preferred:

- landlord test account;
- operator / host test account;
- service-provider test account;
- admin test account.

Acceptable if only one can be created:

- one temporary account that can access the main dashboards and flows.

Security rule:

- Use a temporary password that Damiano can rotate afterwards.
- Do not save the password in memory files, Control Tower, dashboard, screenshots, or reports.
- Do not share credentials externally.

## QA Scope

### Public To Logged-In Flow

- login works;
- logout works;
- password reset/update route behaves safely;
- role-based redirects are sensible;
- protected pages do not expose the wrong role's data.

### Role Dashboards

Check if available:

- landlord dashboard;
- operator/host dashboard;
- service-provider dashboard;
- agency dashboard;
- admin dashboard.

For each:

- page loads without crash;
- key cards/data render;
- empty states explain what to do next;
- primary CTA works;
- no broken or misleading buttons.

### Inventory Board

Test:

- board list;
- post/create flow;
- my postings;
- required fields and validation;
- availability/wanted posting shape;
- inquiry/contact unlock logic if visible;
- edit/withdraw/repost actions if available.

### Browse And Applications

Test:

- browse properties;
- browse hosts;
- browse service providers;
- browse requests;
- applications page;
- empty states;
- filters/search;
- apply/contact/interest flow if available.

### Messaging And Notifications

Test:

- messages page;
- notifications page;
- empty state;
- thread opening if any data exists;
- no crash when no data exists.

### Contracts Hub

Test:

- access control;
- visible templates;
- download/open behaviour;
- legal wording remains reference-only and not legal advice.

### Pricing / Stripe / Subscription

Damiano says Stripe pricing/subscription worked in his test.

Verify:

- public paid CTA route;
- logged-in upgrade path;
- account/subscription status after test subscription;
- success/cancel pages require valid session or show safe fallback;
- no false success state is visible by direct URL alone.

### Admin / Moderation

If admin credentials are available:

- admin route loads;
- users/profiles/listings/inventory moderation visible;
- approval/rejection actions are clearly gated;
- no destructive action taken unless Damiano explicitly approves.

## Acceptance Score After Logged-In QA

Use separate scores:

1. Product-depth / controlled-beta quality.
2. Logged-in flow confidence.
3. Payment/subscription safety.
4. Public launch/liquidity readiness.

Do not penalise missing inventory before marketing. Only penalise missing inventory if the app copy claims live inventory or if the empty state blocks user onboarding.

## Output

Return:

- corrected score;
- pass/fail table for each role/flow;
- blockers by severity;
- exact Oval/Lovable message;
- whether beta delivery is acceptable;
- what must be fixed before public marketing.

