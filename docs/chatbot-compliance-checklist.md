# Chatbot Compliance Checklist

## Transparency and safety
- [ ] The chatbot clearly identifies itself as an AI course assistant.
- [ ] Initial disclosure includes non-medical, educational, advisory scope.
- [ ] It explicitly states it is not a doctor.
- [ ] It warns users not to enter sensitive personal or medical data.
- [ ] It offers human support options.
- [ ] The button label should be “AI Course Assistant”.

## Privacy and data handling
- [ ] Chatbot message content is not sent to Google Analytics or Meta.
- [ ] Sensitive personal data is not collected or stored unintentionally.
- [ ] Chatbot API requests must be proxied through a server endpoint.
- [ ] There is no secret key exposed in client code.
- [ ] There is a privacy notice for chatbot interaction.
- [ ] Redaction or detection is in place for emails, phones, account numbers, IDs, and keys.
- [ ] Rate limiting and timeout handling are present.
- [ ] External model endpoints and API keys are configured via environment variables.

## Scope enforcement
- [ ] The chatbot can answer course navigation, admissions, batches, locations, and FAQs.
- [ ] It does not provide diagnosis or treatment plans.
- [ ] It does not promise visa approval, placement, accreditation, or legal advice.
- [ ] It does not invent course details or faculty credentials.
- [ ] It should say “I don’t have verified information about that yet” for unknown answers.

## Current audit findings
- No chatbot component, disclosure, or server proxy endpoint exists in the current inspected code.
- WhatsApp integration is present, but this is separate from the chatbot functionality.
- No chatbot privacy or redaction logic is implemented yet.
