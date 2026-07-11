# Meta Compliance Checklist

## Advertising and marketing measurement
- [ ] No Meta Pixel should load before marketing consent.
- [ ] Marketing consent must gate all Meta advertising scripts.
- [ ] Meta Pixel initialization should happen only once.
- [ ] Pixel ID must be supplied from `NEXT_PUBLIC_META_PIXEL_ID`.
- [ ] No hard-coded production ID in source code.
- [ ] Local development must not initialize the Pixel unless explicitly enabled.
- [ ] Optional marketing events must stop after consent withdrawal.
- [ ] No sensitive personal or medical data should be sent to Meta.
- [ ] No user email, phone, name, passport, payment, or health data should be transmitted.
- [ ] If Conversions API is configured, the token must remain server-only.
- [ ] No `fbq` or `connect.facebook.net` calls before consent.
- [ ] Pixel should not be used for sensitive profiling without explicit marketing consent.

## Current audit findings
- No Meta Pixel integration found in the current code.
- No Meta event allowlist or marketing consent gating is present.
- No `NEXT_PUBLIC_META_PIXEL_ID` or advertising env variables are currently referenced.
- No consumer-facing marketing consent language in cookie/policy pages yet.
