# Implementation Plan — Individual Service Pages

**Site:** Northforge Build Co. (Next.js 16.2.10, App Router, `src/app`)
**Goal:** Give each of the 4 services its own dedicated page (New Home Builds, Renovations & Remodels, Commercial Construction, General Contracting), linked from the homepage service cards and nav.
**Status:** 📝 Planning only. **No code changed yet.**
**Decisions locked (2026-07-16):** (1) Include a `/services` index page. (2) Reuse the shared 4-step process (Quote → Design → Build → Walkthrough) on every service page. (3) Data-driven `[slug]` architecture.
**Owner:** _(assign)_ · **Created:** 2026-07-16

---

## 0. MANDATORY first step for the implementing agent

Per `AGENTS.md`, **this Next.js has breaking changes** — read the bundled docs before writing any route code. Do not rely on training-data conventions. Relevant files:

- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
- `node_modules/next/dist/docs/01-app/api-reference/file-conventions/dynamic-routes.*`
- `node_modules/next/dist/docs/01-app/api-reference/functions/generate-metadata.*`
- `node_modules/next/dist/docs/01-app/api-reference/components/link.*`

**Conventions confirmed for v16.2.10 (from those docs):**
- File-system routing under `src/app`. A folder = a URL segment; `page.tsx` makes it public.
- Dynamic segment: `[slug]` folder. **`params` is a `Promise`** — `const { slug } = await params`.
- Global typed helpers exist (no import): `PageProps<'/services/[slug]'>`, `LayoutProps<...>`.
- Pre-render static routes with `export function generateStaticParams()`.
- Per-page SEO via `export async function generateMetadata()` — **server components only**.
- Navigate with `<Link href>` from `next/link` (not bare `<a>` for internal routes).

---

## 1. Chosen architecture (recommended)

**One data-driven dynamic route** `src/app/services/[slug]/page.tsx`, backed by a shared content module. All four pages share one layout and differ only in data, so this is DRY and scales if a 5th service is added later.

```
/services                      → index listing all 4 services (nice-to-have)
/services/new-home-builds
/services/renovations-and-remodels
/services/commercial-construction
/services/general-contracting
```

**Alternative considered (not chosen):** four hand-written static folders (`src/app/services/new-home-builds/page.tsx`, …). Simpler to reason about per-page, but duplicates the template 4× and drifts over time. Choose this only if pages must diverge structurally. _Flip this decision in Phase A if preferred._

### Slugs (final)
| Service | Slug | Hero image (exists) |
|---|---|---|
| New Home Builds | `new-home-builds` | `/images/services-new-home.jpg` |
| Renovations & Remodels | `renovations-and-remodels` | `/images/services-kitchen.jpg` |
| Commercial Construction | `commercial-construction` | `/images/services-commercial.jpg` |
| General Contracting | `general-contracting` | `/images/services-foreman.jpg` |

---

## 2. Files to CREATE

| File | Purpose |
|---|---|
| `src/data/services.ts` | `Service` type + content array for all 4 (single source of truth). |
| `src/app/services/[slug]/page.tsx` | Server component. `generateStaticParams`, `generateMetadata`, renders the template from data; `notFound()` on bad slug. |
| `src/app/services/[slug]/not-found.tsx` | Friendly 404 for unknown service slugs _(optional)_. |
| `src/app/services/page.tsx` | `/services` index grid linking to all 4 **(confirmed: build this)**. |
| `src/components/services/ServicePage.tsx` | Presentational template (hero → included → process → gallery → FAQ → related → quote). Reuses landing components. |
| `src/components/services/services.module.css` | Page-specific styles _(reuse `landing.module.css` classes where possible; only add what's missing)_. |

**Reuse existing components (do not rebuild):** `Nav`, `Footer`, `QuoteSection` (has `id="quote"`), `StickyBar`, `Reveal`, and the visual patterns in `Process`/`Gallery`. Import via the `@/` alias.

---

## 3. Files to MODIFY (integration)

> These are the wiring changes. Keep them minimal and text/attribute-level where possible.

1. **`src/components/landing/Services.tsx`**
   - Add a `slug` field to each `SERVICES` entry.
   - Change each card's action from `onClick={scrollToForm}` to a `<Link href={`/services/${s.slug}`}>` wrapping the card (or the "Learn more →" control). This turns the homepage cards into real navigation to the new pages.

2. **`src/components/landing/Nav.tsx`** ⚠️ **required for sub-pages to work**
   - Bare anchors (`href="#services"`, `#process`, `#gallery`, `#reviews`) only resolve on `/`. On a `/services/...` page they break.
   - Fix: make them root-absolute (`href="/#services"`, etc.) using `<Link>`.
   - Make the brand/logo a `<Link href="/">`.
   - _(Optional)_ add a "Services" nav item pointing to `/services`.

3. **`src/components/landing/Footer.tsx`**
   - Same root-absolute anchor fix (`/#services`, …) via `<Link>`.
   - _(Optional)_ add a "Services" column linking the 4 individual pages.

4. **CTA behavior on service pages** ⚠️
   - `scrollToForm()` (in `scrollToForm.ts`) scrolls to `#quote` **on the current page**. It no-ops if absent.
   - **Decision:** include `<QuoteSection />` (renders `id="quote"`) near the bottom of every service page so all existing CTA buttons work unchanged. (Alternative: convert service-page CTAs to `<Link href="/#quote">` — only if we choose not to repeat the form.)

---

## 4. Page template (section order)

Server component, mobile-first, reusing existing CSS classes:

1. **`<Nav />`**
2. **Service hero** — breadcrumb (`Home / Services / <name>`), eyebrow kicker, H1, intro paragraph, primary CTA `Get my free quote →` (scrollToForm), secondary `See our work` → `#gallery`. Hero image = service image.
3. **What's included** — bullet list from `service.included`.
4. **How it works** — reuse the shared 4-step `Process` pattern (Quote → Design → Build → Walkthrough) on every page **(confirmed)**.
5. **Recent work** — small gallery filtered to this service's images (`service.gallery`).
6. **FAQ** — service-specific subset (reuse `Faq` interaction pattern).
7. **Related services** — cards linking the other 3 services.
8. **`<QuoteSection />`** (provides `#quote`).
9. **`<Footer />`** + **`<StickyBar />`**.

---

## 5. Data model

```ts
// src/data/services.ts
export type Service = {
  slug: string;
  title: string;          // "New Home Builds"
  navLabel: string;       // short label for nav/related
  heroImage: string;      // "/images/services-new-home.jpg"
  heroAlt: string;
  kicker: string;         // e.g. "RESIDENTIAL · GROUND-UP"
  h1: string;
  intro: string;
  included: string[];
  gallery: { image: string; alt: string; label: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [ /* 4 entries, see §6 */ ];
export const getService = (slug: string) => SERVICES.find(s => s.slug === slug);
```

---

## 6. Draft copy per page

> Draft direction — confirm before shipping. **Follows the Copy Update #1 rules: no prose em-dashes; keep en-dash numeric ranges; preserve every existing claim** (fixed-price, in-house crews, permits handled, daily photo updates, warranty, 20 years, 540+ projects, license #CB-408817).

### 1. New Home Builds — `/services/new-home-builds`
- **H1:** Custom home builds, done right the first time
- **Intro:** Ground-up homes built to your plans and your budget. We handle permits, framing, and finishes, with one project manager and daily photo updates from foundation to keys.
- **Included:** Architectural and permit coordination · Site prep and foundation · Framing and structural work · Roofing, windows, and exterior · Electrical, plumbing, and HVAC · Interior finishes and cabinetry · Final walkthrough and written workmanship warranty
- **Gallery:** `gallery-new-home.jpg`, `gallery-addition.jpg`
- **FAQs:** cost / timeline (6–12 months) / permits handled in-house / warranty
- **Related:** renovations-and-remodels, general-contracting

### 2. Renovations & Remodels — `/services/renovations-and-remodels`
- **H1:** Renovations and remodels that respect your space
- **Intro:** Kitchens, baths, additions, and whole-home transformations. We protect your home, keep a tidy site, and hit the schedule we promised.
- **Included:** Kitchen remodels · Bathroom renovations · Home additions · Whole-home remodels · Structural changes · Finishes and fixtures
- **Gallery:** `gallery-kitchen.jpg`, `gallery-bathroom.jpg`, `gallery-addition.jpg`
- **FAQs:** cost / can we live in it during work / timeline (kitchen 4–8 weeks) / fixed price holds
- **Related:** new-home-builds, general-contracting

### 3. Commercial Construction — `/services/commercial-construction`
- **H1:** Commercial construction, on schedule and to code
- **Intro:** Retail, office, and multi-unit buildouts delivered with minimal downtime. We coordinate every trade and keep your business moving.
- **Included:** Retail and restaurant buildouts · Office fit-outs · Multi-unit residential · Tenant improvements · Code and inspection management · After-hours scheduling
- **Gallery:** `gallery-commercial.jpg`
- **FAQs:** minimizing downtime / code and inspections / timeline / references available
- **Related:** general-contracting, new-home-builds

### 4. General Contracting — `/services/general-contracting`
- **H1:** One accountable team for your whole build
- **Intro:** Full project management with a single point of contact coordinating every trade. No juggling a dozen subcontractors.
- **Included:** Project planning and budgeting · Permit and drawing management · Trade coordination · Scheduling and site management · Quality control · Daily photo updates
- **Gallery:** `gallery-new-home.jpg`, `gallery-commercial.jpg`
- **FAQs:** what a GC does / single point of contact / fixed-price quoting / licensed & insured (#CB-408817)
- **Related:** new-home-builds, commercial-construction

---

## 7. SEO / metadata

- `generateMetadata({ params })` per page → `metaTitle`, `metaDescription` from data; set canonical `/services/<slug>`.
- `generateStaticParams()` returns all 4 slugs so pages are statically prerendered.
- _(Optional)_ JSON-LD `Service` schema per page; OG image per service.

---

## 8. Progress checklist

Resumable across chats/agents. Mark `[x]` as each lands.

**IMPLEMENTED 2026-07-16 — build passes (exit 0), TypeScript clean, all 5 routes prerender. Runtime/visual browser pass still recommended (see Phase F).**

### Phase A — Decisions & setup
- [x] Read the Next.js docs listed in §0 (layouts-and-pages, dynamic-routes, generate-metadata, not-found)
- [x] Confirm architecture: data-driven `[slug]` route (vs. 4 static folders)
- [x] Confirm slugs (§1) and `/services` index → **build it**
- [x] Confirm process section → **reuse shared 4-step process**
- [x] Confirm draft copy in §6

### Phase B — Data + content
- [x] Create `src/data/services.ts` (type + `getService` + 4 entries)
- [x] Fill copy for all 4 (H1, intro, included, gallery, faqs, related, meta)

### Phase C — Route + template
- [x] `src/components/services/ServicePage.tsx` template (reuses Nav/Footer/QuoteSection/StickyBar/Reveal/Process)
- [x] `src/components/services/ServiceFaq.tsx` (client accordion, service-specific FAQs)
- [x] `src/components/services/services.module.css` (only styles not already in `landing.module.css`)
- [x] `src/app/services/[slug]/page.tsx` with `generateStaticParams` + `generateMetadata` + `notFound()` on bad slug
- [x] `src/app/services/[slug]/not-found.tsx`
- [x] `src/app/services/page.tsx` index

### Phase D — Integration wiring
- [x] `Services.tsx`: add `slug`; cards `<Link>` to `/services/<slug>`
- [x] `Nav.tsx`: anchors → `/#…` via `<Link>`; brand → `/`; Services link → `/services`; added `"use client"` (now imported by server components)
- [x] `Footer.tsx`: EXPLORE links → `<Link>` (`/services`, `/#…`)
- [x] Every service page includes `<QuoteSection />` so `scrollToForm` (#quote) works

### Phase E — SEO
- [x] Per-page title/description + canonical via `generateMetadata`
- [x] `generateStaticParams` prerenders all 4
- [ ] (opt) JSON-LD + OG images — deferred

### Phase F — Verify
- [x] `npm run lint` clean (exit 0)
- [x] `npm run build` succeeds; all 4 service routes + `/services` + not-found prerender
- [ ] Each `/services/<slug>` renders; hero image + copy correct _(needs browser)_
- [ ] Homepage service cards navigate to correct pages _(needs browser)_
- [ ] Nav/Footer anchor links work **from a sub-page** (land on homepage sections) _(needs browser)_
- [ ] CTAs on service pages scroll to the quote form _(needs browser)_
- [ ] Unknown slug (e.g. `/services/foo`) shows not-found _(needs browser)_
- [ ] Mobile pass: no horizontal scroll, images responsive _(needs browser)_

---

## 9. Guardrails
- **Reuse, don't duplicate:** import `Nav`, `Footer`, `QuoteSection`, `StickyBar`, `Reveal`; don't fork them.
- **Content integrity:** no new/unverified claims; keep license #, stats, warranty wording consistent with the homepage.
- **Copy voice:** no prose em-dashes (per Copy Update #1); keep en-dash numeric ranges and hyphenated compounds.
- **Server vs client:** template/page stay server components (needed for `generateMetadata`); interactive pieces (`QuoteSection`, `StickyBar`, `Faq`) already carry `"use client"`.
- **Images:** only reference files that exist in `public/images/` (all 4 service + gallery images confirmed present).

## 10. Open questions
- ~~Build the `/services` index page?~~ **Resolved: yes, build it.**
- ~~Reuse the shared 4-step Process, or service-specific?~~ **Resolved: reuse the shared 4-step process.**
- Add JSON-LD / per-service OG images now or defer to a later SEO pass? _(still open — defaulting to defer)_
