# Click Nuvia Remodeling Lead Generation Platform

Conversion-focused U.S. home-remodeling acquisition platform built with Next.js, Supabase and a CRM-neutral webhook adapter.

## Included

- Mobile-first landing journey and four-step lead qualification wizard
- Server-side validation, consent evidence and intent scoring
- Supabase schema with RLS, operational indexes and CRM outbox
- Signed CRM webhook integration that fails safely without losing leads
- Initial internal lead pipeline at `/admin`
- TypeScript, unit tests and GitHub Actions build validation

## Start locally

1. Use Node 20+ and run `npm install`.
2. Copy `.env.example` to `.env.local` and add Supabase values.
3. Apply `supabase/migrations/001_initial.sql` to a development Supabase project.
4. Run `npm run dev`.

## CRM contract

Set `CRM_WEBHOOK_URL` and `CRM_WEBHOOK_SECRET`. Each `lead.created` POST includes `x-click-nuvia-signature`, an HMAC-SHA256 signature of the raw JSON body. Failed deliveries are recorded in `crm_outbox`; a scheduled retry worker is the next integration milestone.

## Production gates

Before launch: configure Supabase Auth for `/admin`, add rate limiting/CAPTCHA, create privacy and terms content reviewed for target states, connect the selected CRM, implement outbox retries, add analytics/consent mode, replace phone/service-area placeholders, and complete accessibility/security QA.
