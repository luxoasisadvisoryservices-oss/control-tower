# Nest Match Live Feature QA - 2026-07-08

## Verdict

Improved, but not accepted as fully delivered yet.

After Damiano asked to try the agent Gmail inbox, I retested with real reachable email aliases under the connected Gmail account. This corrected the earlier email-confirmation finding: the app still shows a Supabase `send-email` edge function `401` warning in the browser console, but the confirmation email does arrive in Gmail and the confirmation link works.

The confirmed host and confirmed service-provider accounts can log in. Two-sided text messaging now works. Inventory Board posting also works for a basic host-side availability post.

However, the full live-today feature set is still not accepted because the mutual review path does not unlock end to end, attachments fail, service-provider browse crashes for hosts, pricing role tabs are wrong, and payment success routes are still unsafe by direct URL.

## What Now Passes

### Email Confirmation

- Host registration reached `/auth/check-email`.
- Confirmation email arrived from `Nest-Match <noreply@send.nest-match.com>`.
- Confirmation link opened and activated the host account.
- Service-provider registration also produced a confirmation email.
- Service-provider confirmation link opened and activated the service-provider account.
- Both accounts logged into their dashboards.

Note: the browser console still logs `send-email` returning `401`, but the email arrives anyway. This should be cleaned up because it creates false QA noise.

### Role-Based Accounts

- Host/operator account creation works with confirmation.
- Service-provider account creation works with confirmation.
- Dashboards load with role-aware navigation.
- Landlord/owner, agency and admin were not fully retested in this pass.

### Direct Messaging

Status: text messaging passes for host to service provider.

Test completed:

1. Host opened Messages.
2. Host searched `Nest Provider QA`.
3. Host selected the provider.
4. Host sent a text message.
5. Provider logged in and saw the message in inbox.
6. Provider opened the conversation and replied.
7. Host logged in and saw the provider reply.

### Inventory Board

Status: basic host-side flow passes.

Test completed:

1. Host opened `/inventory-board/post`.
2. Host selected `I have a unit`.
3. Posted a JBR 1BR test availability at AED 450.
4. App created a detail page for the post.
5. Post appeared in `/inventory-board/my-postings`.
6. Test post was withdrawn afterwards so fake active supply is not left live.

## What Still Fails Or Is Not Accepted

### Verified Mutual-Confirmation Review System

Status: code evidence present, end-to-end not accepted.

The live bundle contains implementation evidence for:

- `mark_collaboration_complete`
- `submit_collaboration_review`
- `release_stale_collaboration_reviews`
- `Mark as completed`
- `Confirm collaboration`
- `Leave review`
- blind review copy: `Your review is blind... until both are submitted (or 7 days pass).`

But the real UI test did not reach review unlock:

- Host and provider could message each other.
- `/connections` still showed `Connections 0` for both accounts.
- No `Mark as completed`, `Confirm collaboration` or `Leave review` controls appeared in the live connection page.

Current issue: messaging creates a conversation/match toast, but it does not appear to create or expose an accepted `connection` record needed by the review system.

### Attachments

Status: fails.

The message composer has a hidden file input, but sending a photo attachment failed.

Observed error:

`Failed to send null value in column "content" of relation "messages" violates not-null constraint`

Provider did not receive the image preview. Attachments are not accepted yet.

### Browse Service Providers

Status: fails/crashes.

Host route `/browse-service-providers` crashes with:

`cannot add postgres_changes callbacks for realtime:connections-... after subscribe()`

Alternative route `/service-providers` loads but says:

- `Error Failed to fetch service providers`
- `No service providers found`

This happened even after creating and confirming a service-provider account.

### Browse Pages Sorted Premium, Pro, Free

Status: not proven.

Because service-provider browse crashes and directory fetch fails, I could not verify role browse sorting by Premium, Pro, Free.

### Pricing Role Tabs

Status: wrong.

Pricing page shows correct broad plan language, including Pro 25 new contacts/month, Premium unlimited new contacts with fair-use anti-spam, and messages unlimited once connected.

But clicking Operators, Service Providers and Agents still keeps showing Host plan cards:

- `Host Free`
- `Host Pro`
- `Host Premium`

### Stripe / Subscription Success Routes

Status: unsafe until fixed.

Direct success routes are still reachable:

- `/purchase/success` shows `Purchase Successful` by direct URL.
- `/checkout-success` shows `Payment Successful` by direct URL.
- `/boost/success` correctly redirects to login.

`/purchase/success` and `/checkout-success` must be session-gated.

### Contracts Hub

Status: partial.

Logged-in host can open Contracts Hub and see template-library/legal copy. Full generation, tier limits and document output were not fully retested in this pass.

### Public Profiles With Portfolio, Photos, Ratings, Reviews

Status: not fully proven.

Service-provider portfolio data was entered during signup, but the provider did not appear in the browse/service-provider directory, so I could not verify a public profile with portfolio photos, ratings and reviews from normal discovery.

### City Isolation

Status: partial, not proven.

Inventory Board shows Dubai market and JBR posting flow. City-isolated browsing across Dubai/Abu Dhabi was not proven.

### Admin Moderation

Status: not tested.

No admin account was available in this pass.

## Fix Order For Lovable/Oval

1. Fix `/browse-service-providers` realtime crash.
2. Make confirmed service providers appear in the directory/search with correct profile links.
3. Make messaging-created relationships create or expose the accepted connection required for `/connections`.
4. Prove the review flow from accepted connection through completed collaboration, confirmation, blind review and profile reveal.
5. Fix attachment send so photo/file messages can be inserted without violating `messages.content` not-null constraints.
6. Fix pricing role tabs so Service Providers and Agents do not show Host card labels.
7. Gate `/purchase/success` and `/checkout-success` behind a real checkout session.
8. Re-test landlord/owner, agency and admin accounts.

## Correct Current Product Status

Nest Match is no longer just a public skeleton. Confirmed signup, role dashboards, two-sided text messaging and basic Inventory Board posting are now working in a real browser test.

But the key new trust feature is not accepted yet:

`The mutual-confirmation review system exists in code, but the live user path does not yet reach an accepted connection where both sides can complete collaboration and leave reviews.`

