# Nest Match Messaging Attachments Lovable Prompt - 2026-07-08

## Prompt To Send To Lovable / Oval

Please add normal messaging attachments to Nest Match messages.

Current issue:

- Messaging can send text, but users also need to send files/photos like a normal WhatsApp-style conversation.

Required behaviour:

1. Add an attachment button inside every message composer.
2. Allow users to upload a file from device storage.
3. Allow users on mobile to take a photo from the camera and send it directly.
4. Allow image attachments to show as previews inside the chat.
5. Allow PDFs and documents to show as file cards with filename, file type and download/open action.
6. Support common formats:
   - images: JPG, PNG, HEIC/HEIF where possible;
   - documents: PDF, DOC/DOCX, XLS/XLSX;
   - optional later: short video if storage limits allow.
7. Store attachments securely in Supabase Storage or the existing storage layer.
8. Attachments must belong to the message/conversation record and respect the same access rules as the chat:
   - sender can view;
   - recipient can view;
   - unrelated users cannot view;
   - admin/moderation access only if already supported by product rules.
9. Show upload progress, success and failure states.
10. Allow users to remove an attachment before sending.
11. Keep mobile UX simple: paperclip/upload icon, camera option, gallery/files option.

Acceptance test:

- Service provider sends a photo to host/operator.
- Host/operator can see and open the photo.
- Host/operator replies with a PDF/document.
- Service provider can open/download it.
- Unrelated logged-in user cannot access either attachment URL.
- Attachments persist after page refresh.
- No checkout/subscription/payment logic is touched.

Important:

- Do not redesign the full messaging system.
- Do not touch pricing/subscriptions.
- Do not add public launch claims.
- Keep this scoped to message composer, attachment storage, chat rendering and access control.

## Product Reason

Nest Match is a property/operator/service-provider network. People need to exchange photos, documents, IDs, floorplans, quotations, scope-of-work files, before/after images, contracts and service evidence. Text-only chat is too weak for real marketplace operations.
