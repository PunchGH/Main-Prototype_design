# Implementation Plan — Copy Update #1

**Site:** Northforge Build Co. landing page (`src/components/landing/*`)
**Goal:** Rewrite on-page copy so it reads like a human wrote it (kill the AI em-dash tell) and converts better. **Text only** — no layout, structure, styling, or logic changes.
**Status:** ✅ Implemented 2026-07-16. Lint clean. Visual browser pass still recommended before ship.
**Owner:** _(assign)_ · **Created:** 2026-07-16

---

## 1. Scope & guardrails

**In scope:** the human-readable words inside string literals and JSX text in the landing components listed in §4.

**Out of scope — do NOT touch:**
- `className`, JSX structure, imports, component logic, state, form validation logic.
- Any numbers or claims: `20 years`, `540+`, `4.9★`, `147 reviews`, `100% on-time`, license `#CB-408817`, phone `(555) 018-2200`, email, address, `EPA · OSHA`. Copy edits must preserve every factual claim exactly.
- **En-dash numeric ranges** — `4–8 weeks`, `6–12 months` (Faq). These are correct typography. Leave them.
- **Hyphenated compounds** — `Ground-up`, `in-house`, `fixed-price`, `punch-list`, `whole-home`, `on-time`, `built-out`, etc. These are correct. Do not strip hyphens.
- **FAQ toggle glyph** `–`/`+` (Faq.tsx:51) — UI element, not prose.
- **Numbered eyebrow labels** — `01 — WHAT WE BUILD` … `08 — BEFORE YOU ASK` (8 total). **Decision: keep the em-dash** (they read as design chrome, not prose). Left unchanged per review on 2026-07-16.

**Encoding note for the implementer:** In JSX text, keep HTML entities intact — `&apos;` for apostrophes, `&amp;` for `&`. Don't introduce raw `'` or `&` into JSX text; keep the file lint-clean.

---

## 2. The "AI tell" rule

**Problem:** 19 sentence-level em-dashes (` — `) across the page. Nothing screams AI-generated like an em-dash in every other sentence.

**Rule:** Replace each **prose** em-dash with the punctuation the sentence actually needs:
- Full stop when it joins two independent clauses (preferred — adds punch/rhythm).
- Comma when it's a light aside or list continuation.
- Parentheses only if genuinely parenthetical (use sparingly).

**Also avoid** (secondary AI tells — apply where it doesn't distort meaning): over-balanced "not X, but Y" constructions stacked back-to-back, and relentless rule-of-three lists. A couple are fine and already earn their place; don't manufacture more.

---

## 3. Conversion principles applied

1. **First-person CTAs convert better.** Standardize every primary button to **"Get my free quote →"**. The Nav currently says "Get a free quote →"; align it.
2. **Honest link labels.** Service cards say "Learn more →" but the button scrolls to the quote form. Change to an action label so the click matches the outcome.
3. **Punchy fragments over long clauses.** Where an em-dash currently splices two ideas, a full stop creates a stronger, more confident rhythm (esp. Hero, PreFooter).
4. **Preserve specificity.** The page's specific proof (stats, license #, warranty, daily photos) is its biggest conversion asset — keep every concrete detail; only tighten the wording around it.

---

## 4. File-by-file changes

> Format: `file:line` — **Current** → **Proposed**. Proposed copy is a draft direction; confirm before applying.

### Nav.tsx
- **:27** (CTA) — `Get a free quote →` → **`Get my free quote →`** _(consistency with all other CTAs)_

### Hero.tsx
- **:22–24** (sub) — `Ground-up homes, full renovations and commercial builds — delivered on schedule, on budget, and inspection-ready. No surprises, no runaround.`
  → **`Ground-up homes, full renovations, and commercial builds. Delivered on schedule, on budget, and inspection-ready. No surprises. No runaround.`**

### WhyUs.tsx
- **:11** (In-house crews) — `Our own carpenters and site leads — not the cheapest sub of the week. Consistent quality, every job.`
  → **`Our own carpenters and site leads, not the cheapest sub of the week. Consistent quality on every job.`**

### Services.tsx
- **:41–43** (lede) — `One accountable team from foundation to final walkthrough — no juggling a dozen subcontractors.`
  → **`One accountable team from foundation to final walkthrough. No juggling a dozen subcontractors.`**
- **:10** (New Home Builds) — `Custom, ground-up homes built to your plans and your budget — permits, framing, finishes and all.`
  → **`Custom, ground-up homes built to your plans and your budget, including permits, framing, and finishes.`**
- **:28** (General Contracting) — `Full project management — one dedicated point of contact coordinating every trade on your build.`
  → **`Full project management, with one dedicated point of contact coordinating every trade on your build.`**
- **:61** (card link ×4) — `Learn more →` → **`Get a quote →`** _(honest label; button scrolls to form)_

### Process.tsx
- **:10** (Step 01) — `…send a clear, itemized quote — no pressure.` → **`…send a clear, itemized quote. No pressure.`**
- **:17** (Step 02) — `We lock the scope, drawings, materials and schedule — and handle every permit for you.`
  → **`We lock the scope, drawings, materials, and schedule, then handle every permit for you.`**
- **:24** (Step 03) — `Our in-house crew gets to work — with daily photo updates so you're never left guessing.`
  → **`Our in-house crew gets to work, with daily photo updates so you're never left guessing.`**
- **:31** (Step 04) — `We walk every detail together, fix any punch-list item, and hand over the keys — warranty included.`
  → **`We walk every detail together, fix any punch-list item, and hand over the keys. Warranty included.`**

### Gallery.tsx
- No em-dashes. "Proof, not promises" and "View full gallery →" are strong. **No change.**

### Testimonials.tsx  _(these are quotes — edit lightly, preserve voice)_
- **:6** (Marcus D.) — `…rebuilt our kitchen in the timeline they promised — to the day. The fixed price never budged…`
  → **`…rebuilt our kitchen in the timeline they promised, to the day. The fixed price never budged…`**
- Reviews 2 & 3 have no em-dashes. **No change.**

### Team.tsx
- **:19–22** — `…before you sign anything — and work alongside licensed architects, structural engineers and vetted trade partners.`
  → **`…before you sign anything, and you'll work alongside licensed architects, structural engineers, and vetted trade partners.`**

### QuoteSection.tsx
- **:118–121** (success message) — `Thanks — we've got it. A project lead will reach out within one business day. Keep an eye on your inbox.`
  → **`Thanks, we've got it. A project lead will reach out within one business day. Keep an eye on your inbox.`**
- **:37–40** (lede) — no em-dash; optional tighten `Free, and no obligation.` → **`Free, no obligation.`** _(optional)_

### Faq.tsx
- **:10** (A1) — `…fixed, itemized quote — and that's the price you pay.…` → **`…fixed, itemized quote, and that's the price you pay.…`**
- **:14** (A2) — `…realistic schedule up front and hit it — 100% on-time record across 540+ projects.`
  → **`…realistic schedule up front and hit it. We hold a 100% on-time record across 540+ projects.`** _(keep the `4–8 weeks` / `6–12 months` ranges untouched)_
- **:22** (A4) — `Yes — we manage all drawings, permit applications and inspections in-house.…`
  → **`Yes. We manage all drawings, permit applications, and inspections in-house.…`**
- **:26** (A5) — `…only change if you request a change — and we'll always get your written sign-off before anything moves.`
  → **`…only change if you request a change, and we'll always get your written sign-off before anything moves.`**

### PreFooterCta.tsx
- **:7** — `Ready when you are — quotes are free.` → **`Ready when you are. Quotes are free.`**

### Footer.tsx
- **:12–15** — `Residential &amp; commercial construction done right the first time. Licensed, insured, and on time — for 20 years.`
  → **`Residential &amp; commercial construction done right the first time. Licensed, insured, and on time for 20 years.`** _(keep `&amp;` entity)_

### StickyBar.tsx
- No em-dash (`·` middot). **No change.**

---

## 5. Progress checklist

Resumable across chats. Mark `[x]` as each is applied in code. "Files" column = the edit is fully done in that file.

### Phase A — Prep
- [x] Inventory all landing copy and em-dashes
- [x] Confirm eyebrow-label decision (keep em-dash)
- [ ] Copy owner reviews/approves proposed rewrites in §4
- [ ] Confirm optional items: `Learn more → Get a quote` (Services), `Free, no obligation` (QuoteSection)

### Phase B — Apply em-dash removals (19 prose instances)
- [x] Hero.tsx — sub (1)
- [x] WhyUs.tsx — In-house crews (1)
- [x] Services.tsx — lede + New Home Builds + General Contracting (3)
- [x] Process.tsx — steps 01–04 (4)
- [x] Testimonials.tsx — Marcus D. quote (1)
- [x] Team.tsx — intro text (1)
- [x] QuoteSection.tsx — success message (1)
- [x] Faq.tsx — A1, A2, A4, A5 (4)
- [x] PreFooterCta.tsx — ready line (1)
- [x] Footer.tsx — description (1)

### Phase C — Conversion polish
- [x] Nav.tsx — CTA → "Get my free quote →"
- [x] Services.tsx — card links → "Get a quote →" (×4)
- [x] QuoteSection.tsx — optional "Free, no obligation."

### Phase D — Verify
- [x] `grep -rn " — " src/components/landing` returns **only** the 8 numbered eyebrow labels
- [x] En-dash ranges (`4–8`, `6–12`) and hyphenated compounds intact
- [x] All stats / license # / contact details unchanged
- [x] `npm run lint` clean (exit 0); no raw `'`/`&` introduced into JSX
- [ ] Visual pass of each section in the browser _(recommend before ship)_

---

## 6. Verification command

```bash
# After implementation — should list ONLY the 8 "NN — LABEL" eyebrow lines:
grep -rn " — " src/components/landing src/app/page.tsx
```

## 7. Notes / open questions
- Testimonials are edited only lightly to preserve a natural spoken voice; if these represent real client quotes, get sign-off before altering wording.
- No new claims are introduced anywhere; every rewrite preserves the original facts.
