# Nest Match Product Readiness Prompt And Overnight Checklist

Created: 2026-07-05 20:55 Dubai  
Owner: Damiano + COO agent + Lovable / Telegram bot  
Status: Control Tower source document

## Purpose

This file turns the Nest Match readiness work into one paste-ready build prompt plus an overnight checklist for the Lovable Telegram bot. The goal is not broad public launch yet. The goal is controlled private-beta readiness for Dubai short-term-rental operators, landlords, agents, co-hosts and service providers.

Target readiness window: close enough for Damiano review by 2026-07-28, and ready enough for controlled outreach by 2026-08-15 if QA passes.

## COO Verdict

Nest Match should not be pushed publicly until the first impression, role flows, Inventory Board, Contracts Hub wording, messaging, admin approval and privacy controls are clean.

The first real build priority is:

1. Clean public product feel.
2. Make Inventory Board work end to end.
3. Make signup, role dashboards and messaging work.
4. Keep Contracts Hub legally safe.
5. Make admin approval and moderation real.
6. Prepare controlled private beta, not broad launch.

## Paste-Ready Prompt

```text
BUILD / FIX: Nest Match product readiness for controlled beta and outreach

Context:
Nest Match is a B2B marketplace for Dubai short-term-rental operators, landlords, agents, co-hosts and service providers. It is not ready for broad public launch yet. The goal is to make it ready for controlled private beta first, then outreach by mid-August 2026 if QA passes.

Primary product direction:
Do not overbuild AI. Make the core marketplace usable and trustworthy first. The daily-use wedge is the Inventory Board. The trust/content wedge is the Contracts Hub. The product must feel credible, not like a Lovable/beta mockup.

Target user groups:
1. STR operators / holiday-home companies
2. Landlords / owners
3. Agents / brokers
4. Co-hosts / operators looking for inventory
5. Service providers for STR operators

Main objective:
Make Nest Match good enough that a Dubai STR operator can land on the site, understand the product in 10 seconds, register, access the right dashboard, post or browse inventory, message another party, and join early access without confusion or legal/reputation risk.

Priority 1: First-impression cleanup
- Remove any Lovable badge or builder artefact.
- Make the first screen clearly say this is a Dubai short-term-rental B2B marketplace.
- Explain the three core modules immediately:
  1. Inventory Board for available units, live nights, landlord/operator opportunities and gap-filling.
  2. Contracts Hub for operator-focused templates and clause checklists.
  3. Network for landlords, operators, agents, co-hosts and service providers.
- Replace broad "global hospitality network" language with Dubai STR pain first.
- Make "Request Early Access" or "Join Private Beta" the primary CTA.
- Add one screenshot/mockup section for Inventory Board, Contracts Hub and matching/messaging.
- Hide, simplify or label pricing as beta/pre-launch until the value and access are clearer.

Priority 2: Legal-safe Contracts Hub
- Do not claim templates are UAE-compliant, legally valid, enforceable, lawyer-reviewed or safe to use unless a UAE lawyer has reviewed the exact wording.
- Replace risky legal wording with: "Operator-focused templates and clause checklists to adapt with independent legal advice."
- Add visible disclaimer near Contracts Hub: "Nest Match is not a law firm. Templates and clause checklists are informational and must be reviewed by a qualified lawyer before use."
- Contracts Hub should support document categories, preview cards, gated access/download, disclaimer acknowledgement, and admin document status: draft, legal-review-ready, lawyer-reviewed later.
- Prioritise: management/operator-owner addendum, STR sublease/operator protection addendum, owner early-termination clause pack, platform terms and intermediary disclaimer.

Priority 3: Inventory Board as the daily-use wedge
Build or fix Inventory Board so it works as the main product habit.

Required fields:
- Title
- Area / building
- Unit type and bedrooms
- Availability dates or gap nights
- Opportunity type: landlord lead, operator inventory, co-host opportunity, service request, agent lead
- Commercial model: revenue share, fixed rent, hybrid, service provider, referral
- Contact / request access action
- Posted by role and company
- Status: open, under discussion, closed, expired
- Verification status

Required actions:
- Post an inventory/opportunity item
- Browse inventory
- Filter by area, property type, opportunity type, commercial model and status
- Save or shortlist an item
- Send inquiry/message
- Mark item closed or expired
- Admin can approve, reject, feature, hide or edit items

Acceptance test:
A beta operator can post one opportunity, another user can find it through filters, send an inquiry, and both sides can see the message/status clearly.

Priority 4: Registration and role-based onboarding
Roles:
- Operator / holiday-home company
- Landlord / owner
- Agent / broker
- Co-host / property manager
- Service provider
- Investor / other

Signup must capture:
- Name
- Company
- Role
- Email
- WhatsApp
- Location / markets served
- Licence or verification info where relevant
- Main reason for joining: inventory, contracts, leads, services, agents, beta access

After signup:
- User lands in the correct dashboard.
- User sees a role-specific next action.
- Admin sees pending users and can approve/reject/verify.
- Until approved, users have limited access if needed.

Priority 5: Dashboards by role
Operator dashboard:
- Inventory Board access
- Contracts Hub access
- Messages/inquiries
- Saved opportunities
- Profile/commercial needs

Landlord/owner dashboard:
- Submit property/opportunity
- View operator inquiries
- Basic guidance on STR management options
- Messages

Agent dashboard:
- Submit owner/property route
- Track inquiries
- Messages

Service provider dashboard:
- Service profile
- Leads/inquiries
- Messages

Admin dashboard:
- Pending users
- Pending inventory posts
- Pending documents
- Reported messages/posts
- User verification status
- Basic metrics: users, posts, inquiries, active roles

Priority 6: Messaging and notifications
- Users must be able to send an inquiry from inventory or profile pages.
- Messages must show sender, company, role, related listing/opportunity and timestamp.
- Add unread/read state.
- If email/WhatsApp notification is not built, show it honestly as in-app only for now.
- Admin can view/report/block suspicious conversations.

Priority 7: Payment/subscription gating
- If payment is live, test subscription gating properly.
- If payment is not ready, label access as private beta/manual approval.
- Do not show paid features as fully available if they are not functional.
- Contracts Hub downloads and premium inventory access should have a beta/manual approval fallback.

Priority 8: Trust, verification and safety
- Add profile verification status: unverified, pending, verified.
- Do not imply DET/RERA/trade-licence verification is automatic unless it really works.
- Add report/block action for users, listings and messages.
- Add admin moderation controls.
- Add privacy-safe handling so users cannot access private dashboards, messages or records belonging to other users.
- Check row-level security / database rules if Supabase or similar is used.

Priority 9: Content and positioning
Rewrite public copy around practical Dubai STR pain:
- finding reliable operators
- filling inventory gaps
- connecting with landlords/agents/service providers
- reducing contract confusion
- sharing opportunities inside a controlled B2B network

Avoid:
- broad global claims before proof
- legal guarantees
- saying marketplace liquidity exists before it does
- claiming lawyer-reviewed templates before legal review
- saying AI agents are live unless they are actually working

Priority 10: QA and acceptance tests
Run and report:
1. New operator signs up and lands in operator dashboard.
2. New landlord signs up and submits a property/opportunity.
3. Operator posts an Inventory Board item.
4. Another user filters and finds the item.
5. User sends an inquiry/message.
6. Recipient sees and replies to message.
7. Admin approves/rejects a user.
8. Admin approves/rejects an inventory post.
9. Contracts Hub page loads with legal-safe disclaimer.
10. Contract preview/download gating works or shows beta/manual access honestly.
11. Pricing/payment page does not promise unavailable access.
12. Mobile layout is clean and usable.
13. No Lovable badge or obvious builder artefact remains.
14. No dashboard exposes another user's private data.
15. Empty states are helpful and professional, not broken.

Output required:
- List of files changed.
- What was fixed.
- What still does not work.
- Any mocked/fake features that remain.
- Exact local run command.
- Test result for each acceptance test above.
- Screenshots or URLs for homepage, signup, Inventory Board, Contracts Hub, messaging and admin dashboard.
- Final verdict: ready for private beta, not ready, or blocked.

Definition of done:
Nest Match is ready for controlled private beta when first impression is credible, Inventory Board works end to end, role signup and dashboards work, Contracts Hub wording is legally safe, messaging works, admin approval/moderation works, payment or beta access gating is honest, mobile is clean, and no public legal or marketplace-liquidity claims are overstated.

Do not prepare broad public launch. Prepare controlled beta readiness only.
```

## Overnight Lovable Telegram Bot Checklist

Use this as the short instruction for the Lovable Telegram bot while Damiano sleeps:

```text
Work on Nest Match controlled-beta readiness overnight.

Do not broad-launch, publish ads, send outreach, contact lawyers, make legal claims, or claim the marketplace is live.

Focus only on internal product readiness:

1. Inspect current app routes and screens:
   - homepage
   - signup / login
   - role onboarding
   - operator dashboard
   - landlord/owner dashboard
   - agent dashboard
   - service-provider dashboard
   - admin dashboard
   - Inventory Board
   - Contracts Hub
   - messaging
   - pricing/payment or beta access

2. Fix first impression:
   - remove Lovable/builder artefacts
   - make Dubai STR marketplace clear in first screen
   - make Inventory Board + Contracts Hub + network clear
   - make Join Private Beta / Request Early Access the main CTA

3. Fix legal-risk wording:
   - remove UAE-compliant / legally valid / lawyer-reviewed claims unless backed by actual lawyer review
   - add no-legal-advice disclaimer near Contracts Hub
   - label templates as operator-focused templates and clause checklists to adapt with independent legal advice

4. Make Inventory Board usable:
   - users can post an opportunity
   - users can browse/filter/search
   - users can open details
   - users can send inquiry
   - admin can approve/reject/hide posts
   - statuses are open / under discussion / closed / expired

5. Make role signup and dashboards usable:
   - roles: operator, landlord/owner, agent, co-host/property manager, service provider
   - collect name, company, role, email, WhatsApp, market, reason for joining
   - route each role to the correct dashboard
   - dashboards must have useful empty states and next actions

6. Make messaging honest and usable:
   - inquiry from inventory/profile works
   - inbox shows related opportunity, sender, company, role and timestamp
   - unread/read status works if possible
   - if external notifications are not built, say in-app only

7. Make access/payment honest:
   - if Stripe/subscription is not ready, use private beta/manual approval
   - do not show paid access as working if it is not
   - Contracts Hub download/access must be gated or clearly beta/manual

8. Add admin controls:
   - approve/reject users
   - approve/reject inventory posts
   - view reports/flags
   - set verification status
   - see basic metrics

9. Check security/privacy:
   - users cannot view other users' private dashboards
   - users cannot view messages not involving them
   - admin-only routes are protected
   - database/RLS rules are checked if available

10. Run acceptance tests:
   - operator signup
   - landlord signup
   - inventory post
   - inventory filter/search
   - inquiry sent
   - inquiry received/replied
   - admin approval/rejection
   - Contracts Hub disclaimer and gating
   - mobile layout
   - no Lovable artefacts
   - no overstated legal claims

Return a morning report with:
- what you changed
- files/screens touched
- URLs/screenshots
- pass/fail for each acceptance test
- blockers
- features still mocked or fake
- final verdict: private-beta ready / not ready / blocked
```

## Do Not Do Overnight

- Do not share the public link in groups.
- Do not contact lawyers or external vendors.
- Do not make payments.
- Do not change legal claims to stronger wording.
- Do not claim the marketplace has liquidity.
- Do not publish ads or public posts.
- Do not enable broad launch mode.

## Morning Acceptance Gate

The morning check is simple:

1. Does the app look credible on mobile and desktop?
2. Can each role sign up and land in the right place?
3. Can a user post and browse Inventory Board items?
4. Can users inquire/message each other?
5. Can admin approve/reject users and posts?
6. Is Contracts Hub legally safe and gated honestly?
7. Are payment/beta access claims honest?
8. Is private data protected?
9. Are empty states and blocked states clear?
10. Is the product ready for controlled private beta, not public launch?
