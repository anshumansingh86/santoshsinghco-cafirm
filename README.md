# Santosh Singh & Co. — Website

Marketing website for **Santosh Singh & Co., Chartered Accountants**, Ambikapur, Chhattisgarh.

Built with **Next.js 14 (App Router)**, TypeScript, and Tailwind CSS. Fully static — exportable to Cloudflare Pages, Netlify, or Vercel.

---

## Quick start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Replacing placeholders

All placeholders are in **`lib/constants.ts`**. Search for the tokens below and replace them before deploying.

| Token | Where | Description |
|---|---|---|
| `[FRN_PLACEHOLDER]` | `FIRM.frn` | ICAI Firm Registration Number (e.g. `015283C`) |
| `[PHONE_PLACEHOLDER]` | `FIRM.phone` | Office phone number (e.g. `+91 98765 43210`) |
| `[PARTNER_1_NAME]` | `PARTNERS[0].name` | Full name of Partner 1 |
| `[PARTNER_1_MEMBERSHIP_NO]` | `PARTNERS[0].membershipNo` | ICAI membership number |
| `[PARTNER_1_QUALIFICATIONS]` | `PARTNERS[0].qualifications` | Array of qualifications e.g. `['B.Com', 'FCA']` |
| `[PARTNER_1_AREAS]` | `PARTNERS[0].practiceAreas` | One factual sentence e.g. `'Audit and direct tax.'` |
| `[PARTNER_2_NAME]` | `PARTNERS[1].name` | Full name of Partner 2 |
| `[PARTNER_2_MEMBERSHIP_NO]` | `PARTNERS[1].membershipNo` | ICAI membership number |
| `[PARTNER_2_QUALIFICATIONS]` | `PARTNERS[1].qualifications` | Array of qualifications |
| `[PARTNER_2_AREAS]` | `PARTNERS[1].practiceAreas` | Practice-area line |

### Adding or removing partners

In `lib/constants.ts`, add or remove objects from the `PARTNERS` array. Each object must have:

```ts
{
  name: 'Full Name',
  designation: 'Chartered Accountant',
  membershipNo: '012345',
  qualifications: ['B.Com', 'FCA'],
  practiceAreas: 'Audit and direct tax.',
  photo: null,   // or '/partners/photo.jpg' once uploaded
}
```

### Adding partner photos

1. Place the image file in `public/partners/` (e.g. `public/partners/partner1.jpg`).
2. Set `photo: '/partners/partner1.jpg'` in the relevant `PARTNERS` entry.
3. Recommended size: 320×320 px, JPEG or WebP.

---

## Build & deploy

### Static export (Cloudflare Pages / Netlify)

```bash
npm run build
# Output is in the `out/` directory
```

**Cloudflare Pages**: set build command to `npm run build`, output directory to `out`.

**Netlify**: add a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

### Vercel

Vercel detects Next.js automatically. Remove or set `output: 'export'` in `next.config.ts` only if you want static; Vercel supports SSR natively too.

---

## ICAI compliance notes

- No superlatives, testimonials, client names, fees, or success rates anywhere on the site.
- All CTAs are neutral ("Request a Consultation", "Contact the Firm").
- Footer and `/disclaimer` page carry the required ICAI non-solicitation notice.
- JSON-LD schema uses `AccountingService` + `LocalBusiness`; no `aggregateRating` or `review` nodes.
- Partner cards show only: name, designation, membership number, qualifications, one factual practice-area line.

If in doubt about any content change, consult the ICAI "Guidelines for Posting Particulars on Website by Members in Practice".

---

## Project structure

```
app/
  layout.tsx          Root layout (fonts, metadata)
  page.tsx            Landing page (all sections)
  globals.css         Tailwind base + custom tokens
  sitemap.ts          sitemap.xml generator
  robots.ts           robots.txt generator
  privacy/page.tsx    Privacy policy
  disclaimer/page.tsx Disclaimer page
components/
  Header.tsx          Sticky nav with mobile hamburger
  Hero.tsx            Hero section
  TrustStrip.tsx      FRN / firm identity strip
  About.tsx           Firm overview + partners
  PartnerCard.tsx     Individual partner card
  Services.tsx        Six-service grid
  Approach.tsx        Three-step approach (navy bg)
  Contact.tsx         Address, hours, mailto CTA
  Footer.tsx          Nav, address, ICAI disclaimer
  Section.tsx         Reusable section wrapper
  SectionLabel.tsx    Mono uppercase section label
lib/
  constants.ts        All content — firm details, partners, services, approach
  structured-data.ts  JSON-LD builder
public/
  (place favicon.ico, og-image.png, partner photos here)
```
