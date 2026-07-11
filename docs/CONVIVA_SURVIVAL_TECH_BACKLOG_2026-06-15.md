# Conviva Survival Tech Backlog - 2026-06-15

Purpose: keep Conviva engineering focused on what is needed to sell and support the first 10 external operators.

Rule: every active engineering item must support sales, trust, reliability, onboarding, or support operations. Everything else is parked.

## Priority 1 - Structured Knowledge Base

Outcome: replace fragile sheet-style unit knowledge with structured, traceable per-unit data.

Owner: Zuhair.

Acceptance criteria:

- Knowledge is stored by operator, property, and unit ID.
- Mandatory fields are marked.
- Operator-defined policy and tone fields are stored by operator, property, and where needed unit.
- Field-level completeness is reportable.
- Field changes preserve version history.
- AI activation is blocked when required fields are missing.
- Full unit onboarding does not drop mandatory fields.

Why it matters:

- External operators will not trust the product if answers are based on incomplete or missing unit data.

## Priority 2 - Onboarding Wizard With Activation Gate

Outcome: Lin or another onboarding user can onboard a unit without developer help and without unsafe AI activation.

Owner: Zuhair.

Acceptance criteria:

- Onboarding can be saved and resumed.
- Missing mandatory fields are visible before activation.
- Final completeness check runs before activation.
- AI cannot activate if minimum knowledge completeness is not met.
- A complete unit can be onboarded end to end without developer intervention.

Why it matters:

- Conviva cannot scale if every unit setup depends on Zuhair or Damiano.

## Priority 3 - Mandatory Field Extraction Reliability

Outcome: extraction preserves required unit data and flags uncertainty.

Owner: Zuhair.

Acceptance criteria:

- Extraction test covers a full unit onboarding.
- No mandatory field is lost during extraction.
- Dropped or uncertain fields are flagged for human review.
- Failed extraction blocks activation.

Why it matters:

- A slick onboarding flow is dangerous if it silently loses critical fields.

## Priority 4 - Escalation Routing

Outcome: high-risk, unknown, or permission-based guest requests reach a human instead of receiving unsupported approval.

Owner: Zuhair.

Acceptance criteria:

- Escalation categories are defined.
- High-risk messages are routed to a human.
- Unknown knowledge-base questions are routed or logged as gaps.
- Routine low-risk messages are answered by AI.
- Permission-based exceptions escalate unless the knowledge base explicitly allows them.

Must-escalate examples:

- post-checkout parking;
- late checkout;
- luggage storage;
- early check-in;
- extra guest requests;
- extended access;
- cleaner-timing conflicts;
- refunds or compensation;
- building/security exceptions.

Why it matters:

- This protects operator trust and avoids the agent granting things it has no authority to grant.

## Priority 4A - Operator Policy And Tone Rules

Outcome: Conviva can answer guest requests using the operator's own rules and service tone instead of guessing.

Owner: Damiano for product direction; Zuhair for data model and UI; operator/Lin for content entry.

Examples:

- extra consumables during long stays;
- courtesy refills versus paid replenishment;
- extra cleaning, linen or staff support;
- late checkout, luggage storage and extended access;
- gym/pool/building access boundaries;
- whether the tone should be warm, firm, luxury, casual, strict, or approval-first.

Acceptance criteria:

- Policy records include policy type, default answer, free versus paid boundary, allowed courtesy exception, escalation owner, and tone profile.
- Policies can be set at operator level, then overridden by property or unit.
- Reply suggestions use the saved policy before drafting a guest answer.
- If no policy exists, Conviva asks a human or escalates instead of inventing a rule.
- Shadow Mode tests include at least one consumables/refill example and one paid-service boundary example.
- Suggested replies stay polite and hospitality-safe while still enforcing the operator's rule.

Why it matters:

- This is the practical difference between generic guest AI and a trusted operator assistant. Operators need Conviva to apply their house rules, payment boundaries and service tone consistently.

## Priority 5 - Ops Command Center MVP

Outcome: operators can see what needs attention without digging through Chatwoot manually.

Owner: Zuhair.

MVP modules:

- escalation queue;
- issue log;
- knowledge gap analyser;
- unit heatmap;
- weekly digest.

Acceptance criteria:

- Operator can see what needs human attention.
- Repeated unanswered questions become knowledge gaps.
- Unit-level risk or poor data quality is visible.
- Weekly digest can be sent or exported.

Why it matters:

- The product needs an operational control layer before selling to multi-unit operators.

## Priority 6 - Read-Only PMS Integration First

Outcome: Conviva can read booking context without changing reservations.

Owner: Zuhair.

Acceptance criteria:

- First pass supports a test account in Hostaway or Guesty.
- Integration fetches reservation, guest, and unit context needed for messaging.
- No write operations are enabled.
- Sync failures are logged and visible.
- Credentials are separated per operator.

Why it matters:

- Read-only context reduces manual setup risk without creating two-way automation danger.

## Priority 7 - Auto-Translation With Human Review

Outcome: multilingual messages are handled safely.

Owner: Zuhair.

Acceptance criteria:

- Guest language is detected.
- Original guest text is stored.
- Translation is stored separately.
- Low-risk messages can be answered automatically.
- High-risk messages route to human review.
- Translation cannot bypass escalation rules.

Why it matters:

- Translation is useful only if it does not hide risk.

## Priority 8 - Video And Guest-Guide Link Retrieval

Outcome: the agent can surface the right guest-guide or video link when useful.

Owner: Zuhair.

Acceptance criteria:

- Guest guide links are indexed by topic and unit.
- Embedded/action-button links are retrievable when the visible text does not show a raw URL.
- Topics include apartment access, building entry, parking, pool/gym, checkout, and key-card instructions.
- The agent sends the relevant link when useful instead of only text.
- Broken/missing links are logged as knowledge gaps.

Why it matters:

- This improves guest experience and reduces repeated human explanations.

## Parked Until Survival Items Move

- Two-way PMS automation.
- Complex bulk multi-unit operations.
- Advanced analytics beyond MVP heatmap and digest.
- Broad ecosystem integrations.
- Non-essential UI polish.
- Marketplace or Revenue Lab shared architecture unless directly needed by Conviva sales.

## Questions For Zuhair

- Where is the current repository and what is the exact stack?
- Which survival items already exist partially?
- What is the estimated effort for each Priority 1 to 8 item?
- What blocks a second engineer from understanding the system?
- Which item is the highest risk for the first 10 external operators?
- What can Lin test immediately without code changes?
