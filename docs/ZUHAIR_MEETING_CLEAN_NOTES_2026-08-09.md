# Zuhair Meeting Clean Notes - 2026-08-09

Source: Wispr Flow shared note from Damiano.

Speaker correction:

- Speaker 3 / Damian = Damiano.
- Speaker 2 / Zuhairi = Zuhair.
- Speaker 1 = pre-meeting recorder/noise only.

## Short Summary

Damiano and Zuhair aligned on the next Oasis Guest Lab launch steps: rename the dashboard from Oasis Guest Lab, connect the new domain/subdomain, add missing dashboard fields, keep direct escalation routing as a future paid add-on, show first-year promotional pricing, and prepare onboarding before mid-August outreach. Damiano also introduced the Oasis Revenue Lab upsell/ecosystem idea and will share the GitHub repo for Zuhair to review later.

## Conversation Notes

### 1. Opening / Zuhair Availability

- Zuhair said he has joined an AI startup in Downtown focused on voice agents.
- Zuhair said most of his available development time is on weekends.
- They also discussed meeting in person this week around Downtown / Business Bay / Marasi Drive, potentially after 8pm.

### 2. Domain And Naming

Damiano:

- Bought the new domain and wants the dashboard/app moved away from the old Oasis Guest Lab name.
- Asked whether he needs to create a subdomain in GoDaddy and what records are needed.

Zuhair:

- Said the same DNS setup as before can be used.
- Said the domain must also be pointed from the server.
- Confirmed the design/name in the Oasis Guest Lab dashboard needs to be changed.

Decision:

- Move dashboard/app naming to Oasis Guest Lab.
- Damiano will add the DNS/subdomain records in GoDaddy once Zuhair sends the exact records.
- Zuhair will handle the server/app-side pointing and name changes.

### 3. Dashboard Changes

Damiano:

- Wants the property edit page to include an additional info section.
- Example: instead of putting everything under one check-in/check-out answer, the dashboard should allow separate topic blocks or sections.
- Wants the property list to show building and area, such as JBR or Downtown, so properties can be classified and filtered more easily.
- Mentioned reordering/filtering properties can be improved later.

Zuhair:

- Confirmed the dashboard needs an additional info section.
- Confirmed the property list should show building and area.

Actions:

- Zuhair to add the additional info section to property edit.
- Zuhair to add building and area visibility to the property list.

### 4. Testing And Demo / Video

Damiano:

- Said recent testing was going well.
- Mentioned the agent handled almost the full guest conversation around the noise issue.
- Noted the messaging tone had improved, for example not ending every message with generic lines like "let me know if you need anything else."
- Wants a recorded demo / Loom-style explanation so clients can understand how to use the dashboard and add properties.

Need:

- A simple demo path that shows adding a property, dashboard setup, guest message handling, and the operator workflow.

### 5. Escalation Routing

Damiano:

- Asked whether the system should escalate issues directly to the right person, such as maintenance, cleaning, or owner numbers.
- Example: if there is a cleaning issue, the cleaning team should also get the notification, not only the main operator.

Zuhair:

- Said this is possible.
- If using official Meta WhatsApp, templates would be needed.
- If using an unofficial method, it would be easier technically.
- Suggested keeping this as a future feature.

Decision:

- Direct escalation routing to maintenance/cleaning/owner numbers is not required for initial launch.
- Treat it as a future paid add-on.
- Possible future pricing: extra AED 10-20 per month per unit, depending on scope and margin.

### 6. Pricing

Zuhair:

- Asked what profit is being made per unit and what API/infra costs look like.
- Mentioned AI projects can be sold for AED 20,000-30,000 upfront plus around AED 1,500 per month, with margin over API costs.

Damiano:

- Wants to play a volume model, not only high-ticket custom projects.
- Preference is to get traction, users and units, then add higher-value features later.

Decision:

- Keep the current pricing as promotional first-year pricing.
- Show the standard price crossed out and the discounted first-year price clearly.
- Add a line such as: "First-year promotional pricing, subject to change."
- Example discussed: AED 160 crossed out, AED 130 for the first year.

Open point:

- Exact per-unit API/infra cost still needs to be calculated before serious pricing decisions.

### 7. Policy, Tone And Automation Controls

Damiano:

- Wants client-specific policy/tone controls.
- Example: some clients may give consumables every time, some may not; the agent needs those boundaries.

Zuhair:

- Confirmed this can be handled with customizable dashboard settings.

Action:

- Zuhair to build customizable policy/tone settings in the dashboard.

### 8. Launch Readiness And Onboarding

Damiano:

- Is worried a competitor could copy the idea if launch waits too long.
- Also does not want to launch before onboarding is ready, because even a good response from 20-50 prospects could overload the team.
- Wants an A-to-Z onboarding flow: what information to collect, WhatsApp number, email, company WhatsApp/Chatwoot connection, property setup, contract, and handover.
- Wants the process simple enough that Lin or another team member can onboard a client without Damiano and Zuhair carrying every step.

Zuhair:

- Said they should make it as independent as possible.
- Said he will design the full onboarding flow and send it as a document.

Decision:

- Outreach target remains around mid-August, but only after onboarding SOP and contract are ready enough.
- If many prospects respond, prioritise larger operators first, for example someone with 200 units over someone with 3 units.

### 9. Contract

Damiano:

- Asked whether a contract is needed.

Zuhair:

- Confirmed a contract is needed.

Action:

- Damiano to create the client contract.

### 10. Oasis Revenue Lab And PriceLabs MCP

Damiano:

- Wants Oasis Guest Lab clients to become entry points into the wider Lux Oasis Advisory ecosystem.
- Wants to upsell Oasis Revenue Lab once the product is ready.
- Said PriceLabs has an MCP connection to Claude, but the current setup still does not feel agentic enough.
- Wants the ORL experience to feel like a 24/7 revenue manager, not just a tool that answers a few PriceLabs questions.

Zuhair:

- Said he can review it if Damiano shares the GitHub repo.

Action:

- Damiano to share the ORL / PriceLabs repo with Zuhair.
- Zuhair to review and advise once shared.

## Decisions Made

- Rename the dashboard/app to Oasis Guest Lab.
- Use the new domain/subdomain path, with Zuhair sending DNS records and Damiano adding them in GoDaddy.
- Add dashboard fields before launch: additional info section, building, and area.
- Keep direct escalation to maintenance/cleaning/owner as a future paid add-on, not launch-blocking v1.
- Add client policy/tone settings to the dashboard.
- Use first-year promotional pricing with the standard price shown as crossed out and "subject to change" wording.
- Prepare onboarding SOP and contract before broad outreach.
- Target outreach around mid-August if onboarding and contract are ready.
- ORL is a future ecosystem upsell; Zuhair will review the repo once shared.

## Damiano Actions

- Add GoDaddy DNS/subdomain records after Zuhair sends the exact values.
- Confirm the final domain/subdomain structure for launch.
- Update the pricing page to show first-year promotional pricing with crossed-out standard price and "subject to change" note.
- Create the client contract for Oasis Guest Lab.
- Share the Oasis Revenue Lab / PriceLabs GitHub repo with Zuhair.
- Prepare or approve a simple demo/Loom video once the dashboard path is stable.
- Hold broad outreach until onboarding SOP and contract are ready.
- If demand comes in, prioritise larger operators first.

## Zuhair Actions

- Send Damiano the exact DNS records/server pointing instructions.
- Change dashboard/app branding to Oasis Guest Lab.
- Add an additional info section to the property edit page.
- Add building and area display to the property list.
- Build customizable policy/tone settings in the dashboard.
- Design the full client onboarding flow and send it as a document.
- Review the ORL / PriceLabs repo after Damiano shares it.
- Keep direct escalation routing as a future feature plan, with official Meta template implications noted.

## Blockers / Open Questions

- Exact DNS records are still pending from Zuhair.
- Client contract is not yet created.
- Onboarding SOP is not yet delivered.
- Exact per-unit API/infra cost is not calculated.
- Demo/Loom path is not yet packaged.
- ORL repo has not yet been shared with Zuhair.
- Launch should not start until the team can onboard interested clients without chaos.

## Suggested Next Sprint

1. Branding/domain migration.
2. Property dashboard fields: additional info, building, area.
3. Policy/tone settings.
4. Onboarding SOP.
5. Contract.
6. Demo/Loom.
7. Mid-August controlled outreach.
8. ORL repo review as a separate second-track item.
