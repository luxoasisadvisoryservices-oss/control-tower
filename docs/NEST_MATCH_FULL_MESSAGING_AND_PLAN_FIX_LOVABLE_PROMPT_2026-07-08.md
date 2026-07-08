# Nest Match Full Messaging And Plan Fix Lovable Prompt - 2026-07-08

Use this as the current single source-of-truth prompt for Lovable/Oval.

```text
Fix Nest Match messaging and pricing-plan feature labels. Do not work on landing pages, marketing pages, checkout, subscriptions, Stripe, public launch copy or unrelated redesigns in this task. Product functionality only.

CURRENT PROBLEM
The service-provider account can find Lux Oasis Holiday Homes LLC and the sender-side chat shows the QA message as sent, but the operator/host account does not see/receive it. So the UI is showing sent, but real two-sided delivery is not reliable.

MESSAGING FIX
1. Provider-to-host/operator messaging must work end to end.
2. Message must persist in the database and appear in both users' inboxes.
3. Operator/host must see the conversation after refresh/login.
4. Operator/host must be able to reply.
5. Service provider must see the reply.
6. Conversation list must update on both sides.
7. It must not say `No conversations yet` when messages exist.
8. Chat header must show real company/user identity, not `User` or `??`.
9. Search must find users by company name, personal name and role, including Lux Oasis Holiday Homes LLC.

ATTACHMENTS FIX
1. Add an attachment button in the message composer.
2. Users can upload files/photos from device storage.
3. On mobile, users can take a photo from the camera and send it directly.
4. Images show as chat previews.
5. PDFs/documents show as file cards with filename, file type and open/download action.
6. Show upload progress and failure states.
7. Allow removing an attachment before sending.
8. Attachments must remain after refresh.
9. Store attachments securely so only the sender and recipient in that conversation can view them.
10. Unrelated users must not be able to access attachment URLs.

PLAN ORDER
Correct Nest Match tier order is:
1. Free
2. Pro
3. Premium

Premium is the highest tier. Pro is below Premium.

PRICING PLAN SECTION COPY
Add the message/contact limits visibly inside each plan card.

Free section:
- Messages: unlimited after connection
- New contacts/month: limited by role
  - service providers: 5
  - hosts/operators: 3
  - landlords/owners: 2
  - agents/agencies: 3

Pro section:
- Messages: unlimited after connection
- New contacts/month: 25
- Better profile visibility
- More saved searches and alerts
- Attachments enabled

Premium section:
- Messages: unlimited after connection
- New contacts/connections: unlimited, with fair-use anti-spam protection
- Priority visibility
- Team/company profile
- Advanced filters
- Verified badge / trust layer

IMPORTANT PRODUCT COPY
Use this wording near the pricing/contact limits:
`Messages are unlimited once connected. Free, Pro and Premium only change how many new people you can contact each month.`

ACCEPTANCE TESTS
1. Service provider searches Lux Oasis and selects Lux Oasis Holiday Homes LLC.
2. Service provider sends a text message.
3. Operator/host logs in and sees it in Messages.
4. Operator/host replies.
5. Service provider sees the reply.
6. Service provider sends a photo attachment.
7. Operator/host opens the photo.
8. Operator/host replies with a PDF/document.
9. Service provider opens the PDF/document.
10. Refresh both accounts: conversation, messages and attachments remain.
11. Unrelated user cannot access the conversation or attachments.
12. Header shows real names, not `User / ??`.
13. Conversation list no longer says `No conversations yet` once messages exist.
14. Pricing page shows correct tier order: Free, Pro, Premium.
15. Pro section shows 25 new contacts/month.
16. Premium section shows unlimited new contacts/connections with fair-use anti-spam protection.

Do not mark done until the full two-sided send/reply flow passes with attachments and the Free/Pro/Premium plan sections show the correct message/contact rules.
```

