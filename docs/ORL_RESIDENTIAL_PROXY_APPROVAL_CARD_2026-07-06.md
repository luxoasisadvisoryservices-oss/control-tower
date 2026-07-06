# ORL Residential Proxy Approval Card

Created: 2026-07-06 Dubai  
Status: approval required before spend or credential handling.

## Decision Needed

Action: buy one small residential proxy package for Oasis Revenue Lab Booking.com testing.

Reason: Booking.com can block datacentre/server IPs. ORL needs a residential proxy so the server can fetch/register/score Booking.com listing links and complete the Booking.com side of the myDataValue-style diagnosis loop.

Risk: low-to-medium.

Why not fully low:

- it requires spend;
- it creates proxy account credentials;
- proxy credentials must go into server `.env` as `OTA_PROXY_URL`;
- credentials must not be pasted into chat, logs, screenshots, or public files.

## Current Price Check

The old working assumption was under USD 5/month. Current public pricing looks slightly higher for a normal tiny purchase:

- IPRoyal residential proxies: visible official 1 GB plan is about USD 7.00.
- Decodo residential proxies: visible official monthly residential entry starts at 3 GB at about USD 3.75/GB, total about USD 11.25 plus VAT; their docs also describe Pay As You Go via wallet.

## Recommendation

Use IPRoyal 1 GB if Damiano wants the smallest test purchase and non-expiring traffic is still shown at checkout.

Why:

- smallest visible entry package;
- enough for lightweight Booking.com link tests;
- avoids paying for 3 GB before the flow is proven;
- simpler than committing to a larger monthly package.

## Approval Card

Action: buy IPRoyal residential proxy 1 GB for ORL Booking.com testing, expected about USD 7 plus any taxes/fees shown at checkout.

Reason: unlock Booking.com listing fetch/scoring from the server so ORL can complete the report-desk/proxy/restart/acceptance sequence.

Risk: low-to-medium.

Approve? Yes / No / Edit

## After Approval

Damiano should create/pay for the proxy account directly.

Collect these values:

```text
host
port
username
password
```

Then give them to Claude Code or the server operator through a safe credential handoff.

Claude Code/server task:

```text
Set OTA_PROXY_URL in the server .env using the residential proxy credentials.
Do not print the full proxy URL or password in logs.
Confirm only that OTA_PROXY_URL is set and that Booking.com listing fetch works.
```

## Completion Test

After credentials are set and the bot restarts, acceptance requires:

1. paste a Booking.com listing link in Telegram;
2. bot registers/fetches/scores it or returns a precise blocker;
3. no proxy credentials appear in logs, chat, report files, screenshots, or Control Tower.

