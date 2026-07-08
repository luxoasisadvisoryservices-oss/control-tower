# Nest Match Live Feature QA - 2026-07-08

## Verdict

Not accepted as delivered yet.

The live site has evidence that parts of the new feature set are being implemented, especially the collaboration-completion review logic, but the full product flow cannot be passed today because fresh test accounts cannot complete email confirmation. The Supabase email edge function used after registration returned `401`, and login then fails with `Email not confirmed`.

This blocks end-to-end QA for role dashboards, role-aware browse pages, messaging, connections, mutual collaboration confirmation, review submission, attachments, Contracts Hub, Inventory Board posting, and admin moderation.

## Main Blocker

- Host registration reaches `/auth/check-email`.
- The app says a confirmation link was sent.
- Browser console shows the Supabase `send-email` edge function returning `401`.
- Login with the newly-created test account fails with: `Please confirm your email first. Check your inbox or resend the link.`

Until this is fixed or confirmed test credentials are provided, the authenticated product cannot be fully accepted.

## What Was Tested

- Public home page.
- Pricing page.
- Registration routes:
  - `/register/host`
  - `/register/landlord`
  - `/register/service-provider`
  - `/register/agency`
- Login route.
- Protected dashboard and product routes after attempted registration.
- Public and gated browse routes.
- Inventory Board public routes.
- Contracts Hub route.
- Payment success/cancel routes.
- Current live app bundle for review/collaboration implementation evidence.

## Feature Results

### 1. Role-Based Accounts For 4 Player Types

Status: partial, not accepted.

Registration forms exist for host, landlord, service provider and agency. However, account activation is blocked by failed email confirmation, so I could not prove role dashboards or real role-specific navigation with fresh accounts.

### 2. Browse Pages Per Role Sorted Premium, Pro, Free

Status: not proven.

Protected browse pages redirect to login. Public `/browse` loads but does not show a usable marketplace list. `/browse-operators` is still 404. I could not verify sorting by Premium, Pro, Free.

### 3. Public Profiles With Portfolio, Photos, Ratings, Reviews

Status: not proven.

Profile routes exist in the bundle, but I could not verify a real public profile with portfolio, property photos, star ratings and reviews from the live UI.

### 4. Verified Mutual-Confirmation Review System

Status: code evidence present, end-to-end not accepted.

The live bundle contains implementation evidence for:

- `mark_collaboration_complete`
- `submit_collaboration_review`
- `release_stale_collaboration_reviews`
- `Mark as completed`
- `Confirm collaboration`
- `Leave review`
- blind review copy: `Your review is blind... until both are submitted (or 7 days pass).`

This is the right direction. However, I could not complete the two-user flow because new users cannot confirm email and log in. Also, the live bundle does not contain the word `simultaneous`, so the "simultaneous reveal" claim is not visibly proven by UI copy.

Acceptance still needed:

1. User A and User B connect.
2. User A marks work/collaboration completed.
3. User B confirms collaboration.
4. Both users can leave blind reviews.
5. Reviews stay hidden until both submit, or until the intended release rule.
6. Both reviews appear on the correct public profiles.
7. A user cannot review without a confirmed collaboration.
8. A user cannot review the same connection twice.

### 5. Direct Messaging With File And Photo Attachments

Status: not proven.

The bundle contains attachment-related code strings, but `/messages` is login-gated and fresh account login is blocked. I could not prove two-sided send/reply or attachment persistence from the live product.

### 6. Monthly Contact Limits

Status: partial.

Pricing page shows the correct broad plan concept:

- Free: new contact limits.
- Pro: 25 new contacts/month.
- Premium: unlimited new contacts with fair-use anti-spam.
- Copy present: `Messages are unlimited once connected. Free, Pro and Premium only change how many new people you can contact each month.`

Issue: the pricing role tabs for Operators, Service Providers and Agents did not visibly change the card copy in my test. They all kept showing `Host Free`, `Host Pro`, `Host Premium`.

### 7. Stripe-Powered Subscriptions

Status: unsafe until fixed.

Pricing cards exist, but direct success routes are still reachable:

- `/purchase/success` shows `Purchase Successful` by direct URL.
- `/checkout-success` shows `Payment Successful` by direct URL.
- `/boost/success` correctly redirects to login.

The false-success routes should be session-gated before acceptance.

### 8. Contracts Hub

Status: gated, not tested end to end.

`/contracts` redirects to login. I could not verify templates, access tiering or document generation with fresh users because login is blocked.

### 9. Inventory Board

Status: partial, not accepted.

`/inventory-board`, `/inventory-board/post` and `/inventory-board/my-postings` load, but while logged out they show the same public private-beta text. I could not prove post, find, edit, mark booked/matched or my-postings flow.

### 10. Global Market System And City Isolation

Status: partial, not proven.

Registration market selector shows Dubai active and Abu Dhabi/other cities as broader market options, but I could not verify city-isolated listings because browse/inventory workflows are not accessible with a confirmed account.

### 11. Admin Moderation Panel

Status: gated, not tested.

Admin routes redirect to login. No admin credentials were available, so moderation is not accepted.

### 12. Role-Aware Navigation

Status: partial, not accepted.

Role-specific registration forms and protected routes exist. Real logged-in role navigation could not be proven because email confirmation blocks fresh accounts.

## Required Fix Before Acceptance

1. Fix Supabase email confirmation / `send-email` edge function `401`.
2. Provide confirmed QA accounts for:
   - host/operator;
   - service provider;
   - landlord/owner;
   - agent/agency;
   - admin.
3. Re-test full two-sided collaboration and review flow.
4. Re-test messaging with photo and file attachments.
5. Re-test role browse pages and tier sorting.
6. Re-test Inventory Board end to end.
7. Gate `/purchase/success` and `/checkout-success` so they cannot show success without a real checkout session.

## Current Product Direction

The mutual-confirmation review system is a strong differentiator and should remain central. But the correct QA status is:

`Review system implementation appears started in the live app bundle, but it is not end-to-end accepted yet.`

