# Zuhair Custom Conviva Rebuild Meeting Notes - 2026-08-23

Source: Wispr Flow shared note from Damiano.

## Short Summary

Damiano and Zuhair aligned on a larger Conviva / Oasis Guest Lab rebuild: move away from the current n8n-heavy setup and build a fully custom Python / LangGraph agent with the dashboard as the control layer. Public launch should wait until the Meta tech provider approval is solved, because unofficial WhatsApp approaches risk client number bans and brand blacklisting.

## Decisions Made

- Rebuild as a fully custom Conviva product rather than continuing to patch the current n8n setup.
- Consolidate n8n, Chatwoot logic and backend behaviour into one Python / LangGraph agent controlled from the dashboard.
- Move vector storage from Qdrant to pgvector.
- Do not public-launch until Meta tech provider approval is in place.
- Treat Meta approval as the main launch blocker, not only a nice-to-have integration task.

## Product Direction

- Dashboard should control policy, tone, onboarding, pricing, escalation and OTA connections.
- Custom product should handle guests whose WhatsApp/contact number differs from the OTA reservation number.
- Product should also handle guests who only connect through Airbnb or another OTA, not only direct WhatsApp flows.
- Revenue-manager tool is nearly ready, but it still needs a plug-and-play bot/client environment to test properly.

## Meta Tech Provider Blocker

- Main blocker: Meta tech provider approval.
- Risk: unofficial WhatsApp methods may get client numbers banned and damage the brand.
- Rejection reason appears tied to a missing licence/bill document that shows the WhatsApp number connected to the company.
- Application should be through the Meta / charger entity, not the Holiday Home licence.

## Damiano / Lux Oasis Advisory Actions

- Obtain a licence or bill document showing the WhatsApp number tied to the correct company/entity for Meta tech provider approval.
- Update the changed guest number on the dashboard for the recent Pakistani guest.
- Resend meeting notes from Damiano's personal email instead of the agent address, because Lux Oasis Advisory emails landed in Zuhair's spam.
- Keep public launch held until the Meta approval path is credible.

## Zuhair Actions

- Come back with a timeline for the custom rebuild.
- Continue building the custom Python / LangGraph agent.
- Continue pgvector migration planning.
- Decide on co-founder terms or financial arrangement for the project.

## Other Updates

- Lux Oasis Advisory Services emails were landing in Zuhair's spam; he has now unflagged them.
- HeadSmart security issue from the previous discussion is fixed.

## Control Tower Interpretation

This changes the Oasis Guest Lab / Conviva lane from "waiting on normal dashboard sequencing" to "custom rebuild plus Meta approval gate." The next executive question is not only "when can we launch?" but "can we unblock the compliant WhatsApp/Meta path and get a credible rebuild timeline from Zuhair?"

