# Nest Match UX Psychology Lovable Prompt - 2026-07-08

Source video reviewed: `The UX Psychology Behind Apps People Can't Stop Using`
YouTube: https://www.youtube.com/watch?v=2TlIg3VokY8

## COO Summary

The video is useful for Nest Match because it is not mainly about visual polish. It is about reducing friction, making users feel progress, giving value before asking for signup/payment, creating ownership, making risk visible, and presenting pricing/features in context.

For Nest Match, this should become a UX layer on top of the existing product-fix prompt. Do not replace the current priority to fix messaging, attachments, service-provider browse, connection/review unlock, pricing tabs and payment-success route gating.

## Video Principles To Apply

1. Smart defaults: pre-fill the most common choices so users adjust instead of starting from blank.
2. Never start at zero: show progress from the first step so onboarding feels already underway.
3. Give value before asking: show useful marketplace value before pushing signup, payment or gated access.
4. Ownership effect: let users create/post/save something early so leaving feels like losing progress.
5. Loss framing: show the cost of inaction, not only the benefit of upgrading or completing a step.
6. Contrast effect: do not show cost or limits in isolation. Anchor plan prices/features against business value and unlocked opportunity.

## Nest Match Application

Nest Match should feel like a mobile-first STR operator network, not a form-heavy website. The daily habit should be:

1. Open app.
2. See relevant city feed.
3. Post or browse an opportunity quickly.
4. Message or save the right match.
5. Track progress, connection status and reviews.

The user should always know:

- what is available in their city,
- what they can do next,
- what progress they have already made,
- what they lose by leaving an incomplete profile/listing/message,
- why upgrading or completing verification helps them get more relevant contacts.

## Paste-Ready Lovable Prompt

```text
Improve Nest Match UX using the psychology principles from the video "The UX Psychology Behind Apps People Can't Stop Using". This is a UX/product-flow improvement layer on top of the current required fixes. Do not ignore the existing blockers: messaging delivery/reply loop, attachments, service-provider browse crash, provider directory, connection/review unlock, pricing role tabs and checkout-success route gating must still be fixed and tested.

Goal:
Make Nest Match feel easier, more useful and more app-like for short-term-rental operators, landlords, agents and service providers. Reduce blank screens and blank forms. Give users useful value before asking for payment. Make onboarding feel already started. Make posting, browsing, saving and messaging feel like progress.

Apply these six UX principles:

1. Smart defaults
- Do not show empty forms when we know the likely default.
- Pre-select sensible defaults by role and city.
- Default city/market to Dubai for now, with clear city switcher.
- Default opportunity type based on role:
  - operator/host: "I have inventory / I need inventory"
  - landlord/owner: "I have a property"
  - service provider: "I offer a service"
  - agent: "I have a landlord/property lead"
- In Inventory Board post form, prefill common STR fields where possible: Dubai, active status, open opportunity, revenue share/hybrid/fixed rent selector, common bedroom/unit types and relevant areas.
- The user should scan and adjust, not build from a blank page.

2. Never start users at zero
- Replace "0% complete" style onboarding with a profile/progress meter that starts with credit for what the user already did.
- Account created should count as step 1 complete.
- Email confirmed should count as step 2 complete.
- Role selected should count as step 3 complete.
- Show a clear checklist:
  1. Account created
  2. Role selected
  3. City selected
  4. Profile/company added
  5. First post or saved opportunity
  6. First message
  7. Verification submitted
- Do not use fake progress that lies. Use real completed actions, but frame them positively so the user never starts at zero.

3. Give value before asking for signup/payment
- Public or pre-approved users should see real preview value before strong gating.
- For the Inventory Board, show sample/preview cards or limited real previews with area, opportunity type, commercial model, verification level and rough availability.
- Do not blur everything behind "Sign up to see". Show enough to prove value, then ask users to sign up to save, message, post or unlock full contact details.
- For Contracts Hub, show a useful preview of categories, clause checklist headings and disclaimer before asking for access.
- For service-provider directory, show profile previews, service category, city, verification status and review count before requiring contact/unlock.
- Gating copy should be: "Save this opportunity and message the owner/operator" rather than "Create account to continue".

4. Create ownership early
- During onboarding, let every role create one useful asset early:
  - operator/host: post an inventory need or available unit
  - landlord/owner: submit a property opportunity
  - service provider: create service profile with photos/portfolio
  - agent: submit a lead/opportunity
- Save drafts automatically.
- If the user leaves with an incomplete post/profile/message, show a respectful prompt:
  "Your draft opportunity is saved. Finish it later from Dashboard."
- Change generic button labels from "Submit" or "Continue" to action labels:
  - "Publish opportunity"
  - "Save draft"
  - "Message this operator"
  - "Add portfolio photo"
  - "Complete verification"

5. Use loss framing carefully
- Show users the cost of inaction in practical business terms.
- Examples:
  - "Incomplete profiles appear lower in search."
  - "Unverified accounts receive fewer replies."
  - "Without a city and role, your opportunities will not appear in the right feed."
  - "You have 2 free new contacts left this month. Upgrade only if you need more new contacts."
- Avoid manipulative dark patterns. No fake countdowns, fake scarcity or false demand.
- For abandoned drafts, say what they would lose:
  "If you discard this, you will lose the unit details, availability and pricing you entered."

6. Use contrast for pricing and upgrades
- Do not show Free/Pro/Premium as isolated prices only.
- Anchor plans against marketplace activity and business value:
  - Free: good for testing and a few first contacts.
  - Pro: for active users who need 25 new contacts/month, better visibility, saved alerts and attachments.
  - Premium: for teams/companies that need unlimited new contacts with fair-use protection, priority visibility, team profile, advanced filters and trust layer.
- Keep the existing rule clear:
  "Messages are unlimited once connected. Plans only change how many new people you can contact each month."
- Show remaining monthly contact credits inside the dashboard and near contact buttons.
- When a user hits a limit, show the specific business reason to upgrade, not a generic paywall.

Required UI/flow changes:
- Mobile-first bottom navigation: Feed / Post / Messages / Saved / Profile.
- Homepage/dashboard first action should not be a landing-page CTA. It should show the user's relevant feed and next action.
- Replace empty states like "No conversations yet" or "No providers found" with helpful next actions and sample/preview guidance.
- Add role-specific dashboard cards:
  - "Complete profile"
  - "Post first opportunity"
  - "Browse Dubai opportunities"
  - "Save first match"
  - "Send first message"
  - "Submit verification"
- Add "Recently viewed", "Saved opportunities" and "Drafts" so users feel continuity when they return.
- Make Inventory Board a feed, not a table-first admin page, especially on mobile.
- Add clear progress/status labels to every opportunity: Open, Under discussion, Awaiting reply, Connected, Completed, Review pending, Closed.

Acceptance tests:
1. New operator signs up and sees profile/onboarding progress above 0 because account and role are already complete.
2. Operator can post an Inventory Board item with smart defaults and minimal typing.
3. Landlord/owner can submit property opportunity with role-specific defaults.
4. Service provider can create a profile with service defaults and portfolio/photo prompt.
5. Public/limited user can see useful marketplace preview value before being asked to sign up.
6. User can save an opportunity and return to it later.
7. Incomplete post/profile/message draft is saved and recoverable.
8. Dashboard shows remaining monthly new-contact credits.
9. Pricing cards show Free, Pro, Premium in correct order and explain contact limits in business terms.
10. Mobile view has app-like navigation: Feed, Post, Messages, Saved, Profile.
11. Empty states include next actions, not dead-end text.
12. No fake scarcity, fake countdowns, false demand, legal overclaims or public-launch overclaims.

Definition of done:
Nest Match should feel less like users are filling forms and more like they are joining a live STR operator network. A new user should reach a useful feed, post/save/message path and visible progress within the first minute on mobile.
```

## COO Implementation Note

Send this to Lovable after, or together with, the existing bug-fix prompt. If Lovable can only do one task at a time, the correct order is:

1. Fix broken product loops: messaging, attachments, browse providers, connection/review unlock, pricing role tabs, payment route safety.
2. Apply this UX psychology layer to onboarding, dashboard, Inventory Board, pricing and mobile navigation.
3. Retest on mobile and logged-in roles.
