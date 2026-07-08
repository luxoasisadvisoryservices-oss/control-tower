# Nest Match Messaging Delivery And Attachments Lovable Prompt - 2026-07-08

Use this prompt in Lovable/Oval for Nest Match.

```text
Fix Nest Match messaging properly. Do not work on landing pages, marketing pages, checkout, subscriptions or pricing in this task. Product functionality only.

Current problem:
The service-provider account can find Lux Oasis Holiday Homes LLC and the sender-side chat shows the QA message as sent, but the operator/host account does not see/receive it. So the UI is showing sent, but real two-sided delivery is not reliable.

Required fix:
1. Provider-to-host/operator messaging must work end to end.
2. Message must persist in the database and appear in both users' inboxes.
3. Operator/host must see the conversation after refresh/login.
4. Operator/host must be able to reply.
5. Service provider must see the reply.
6. Conversation list must update on both sides. No more `No conversations yet` when messages exist.
7. Chat header must show real company/user identity, not `User` or `??`.
8. Search must find users by company name, personal name and role, including Lux Oasis Holiday Homes LLC.

Add WhatsApp-style attachments:
1. Attachment button in message composer.
2. Upload files/photos from device storage.
3. On mobile, take photo from camera and send directly.
4. Images show as previews.
5. PDFs/documents show as file cards with filename, file type and open/download.
6. Upload progress, failure states, and remove-before-send.
7. Attachments persist after refresh.
8. Secure storage: only sender and recipient can view. Unrelated users cannot access attachment URLs.

Free-contact rule:
- Service providers: 5 free new contacts/month
- Hosts/operators: 3 free new contacts/month
- Landlords/owners: 2 free new contacts/month
- Agents/agencies: 3 free new contacts/month
- Replies inside existing conversations are always free.
- Only starting a new conversation/contact unlock/application/enquiry consumes a credit.
- Button copy: `Free plan: 5 contacts left this month`
- After credits used: `Upgrade to contact more`

Acceptance tests:
1. Service provider searches Lux Oasis and selects Lux Oasis Holiday Homes LLC.
2. Service provider sends text message.
3. Operator/host logs in and sees it in Messages.
4. Operator/host replies.
5. Service provider sees reply.
6. Service provider sends photo attachment.
7. Operator/host opens photo.
8. Operator/host replies with PDF/document.
9. Service provider opens PDF/document.
10. Refresh both accounts: conversation, messages and attachments remain.
11. Unrelated user cannot access conversation or attachments.
12. Header shows real names, not `User / ??`.
13. Conversation list no longer says `No conversations yet` once messages exist.

Do not mark done until full two-sided send/reply flow passes with attachments.
```

