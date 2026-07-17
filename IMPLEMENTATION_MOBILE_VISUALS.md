# Mobile and Tablet Responsiveness (IMPLEMENTATION_MOBILE_VISUALS)

This implementation plan outlines the proposed changes to make the Northforge website look stunning, modern, and highly polished on mobile and tablet devices, while keeping the desktop version exactly as it is today.

## User Review Required

> [!IMPORTANT]
> The desktop layout is currently perfect and **must not be altered**. All responsive adjustments will be applied carefully via media queries (`@media`) and responsive state handling.

> [!NOTE]
> We will add a mobile-only interactive navigation drawer in the navigation bar component. This requires adding a lightweight State (`useState`) for `menuOpen` in [Nav.tsx](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/Nav.tsx), which is already a client component (`"use client"`).

## Open Questions

> [!NOTE]
> None identified. The design guidelines specify maintaining existing layout elements, but styling them to stack and scale down gracefully.

---

## Proposed Changes

### 1. Navigation Header
We need to hide the desktop navigation link grid and desktop CTA button on mobile/tablet devices and render a modern hamburger button. When tapped, this button will open a sleek overlay drawer spanning the full width of the screen, listing all links and a prominent "Get my free quote" button.

#### [MODIFY] [Nav.tsx](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/Nav.tsx)
- Import `useState` to track whether the mobile menu is open.
- Render a toggle button (hamburger/close SVG) visible only on mobile/tablet.
- Conditional render or toggle classes on the navigation link container and CTA container when `menuOpen` is active.

#### [MODIFY] [landing.module.css](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/landing.module.css)
- Add styling for the hamburger button and mobile nav overlay drawer.
- Add media queries to:
  - Collapse `.nav` into a flex container (Space-Between) on screens `< 1024px`.
  - Position the mobile navigation drawer as a fixed/absolute container with high `z-index`, backdrop filter blur, and animation slides.

---

### 2. Main Landing Page Sections
Add media queries under two breakpoints: `max-width: 1023px` (tablet) and `max-width: 767px` (mobile).

#### [MODIFY] [landing.module.css](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/landing.module.css)
- **Hero Section**:
  - Decrease `.heroTitle` font size from `94px` to `64px` on tablet, and `42px` on mobile (prevent text overflowing).
  - Collapse `.heroStats` from `repeat(4, 1fr)` to `repeat(2, 1fr)` (tablet) and `1fr` (mobile) to stack stat numbers vertically.
  - Adjust `.heroContent` padding on mobile (`60px 24px 40px`).
- **Trust Strip**:
  - Center elements: Stack the label and company logos vertically on mobile.
- **Section Headers & Headings**:
  - Scale down general `.sectionHeading` (e.g. `56px` to `44px` on tablet, `34px` on mobile).
  - Reduce section padding (`.section` / `.sectionAlt` from `96px 60px` to `64px 32px` on tablet, `48px 20px` on mobile).
- **Grids & Layouts (`.grid4` and `.grid3`)**:
  - Convert `.grid4` to 2 columns on tablet, 1 column on mobile (affects Services and Process).
  - Convert `.grid3` to 2 columns on tablet, 1 column on mobile (affects Testimonials).
- **Why Us**:
  - Collapse `.whyUsGrid` to a single column.
  - Reduce image height of `.whyUsImage` from `520px` to `340px` on mobile.
  - Collapse `.whyUsFeatures` to 1 column.
- **Gallery**:
  - Collapse `.galleryGrid` to 2 columns on tablet and 1 column on mobile.
  - Reset row spans (`.galleryTileTall`) on mobile to `span 1` to prevent gaps or broken visual flow.
- **Team**:
  - Collapse `.teamGrid` to 2 columns on tablet, 1 column on mobile.
  - Adjust partner logos flex container.
- **Quote / Form**:
  - Collapse `.quoteGrid` from `1fr 1fr` to 1 column on mobile/tablet.
  - Reduce `.form` padding from `36px 34px` to `24px 20px`.
  - Adjust quote heading font size from `62px` to `38px`.
- **FAQ**:
  - Reduce FAQ list items padding and scale `.faqQuestion` font size to fit smaller screens.
- **Pre-Footer CTA & Footer**:
  - Adjust `.preFooterCta` flex direction to column on mobile.
  - Collapse `.footerGrid` from `1.6fr 1fr 1fr 1fr` to 2 columns on tablet, 1 column on mobile.
- **Sticky Bar**:
  - Restructure or scale `.stickyBar` elements to fit mobile without covering half the viewport. Center content and simplify details.

---

### 3. Services Details Page
Apply similar adjustments to `services.module.css`.

#### [MODIFY] [services.module.css](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/services/services.module.css)
- Scale service page `.title` from `72px` to `48px` (tablet) and `36px` (mobile).
- Collapse `.overviewGrid` to a single column.
- Adapt `.workGrid`, `.relatedGrid`, and `.indexGrid` to responsive columns.

---

## Verification Plan

### Manual Verification
1. Run local Next.js dev server (`npm run dev`).
2. Open Google Chrome Developer Tools.
3. Verify styling across standard device profiles:
   - **Desktop**: 1440px width (confirm 100% identical look to original version).
   - **Tablet**: iPad Pro / iPad (768px - 1024px width) - confirm all sections adapt beautifully to 2-column or simplified grid layouts.
   - **Mobile**: iPhone 12/13/14 Pro (390px - 430px width) - check that font sizes do not overflow, navigation menu functions perfectly, and spacing is tight but premium.

---

## Project Checklist

Use this checklist to track implementation progress across sessions.

### [x] Phase 1: Navigation Header Component
- [x] Add state for toggling mobile menu overlay to [Nav.tsx](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/Nav.tsx).
- [x] Add responsive styles to [landing.module.css](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/landing.module.css) for the mobile layout header.
- [x] Implement smooth CSS transition and backdrop blur overlay for the mobile menu drawer.

### [x] Phase 2: Landing Page Layout Elements
- [x] Add media queries to [landing.module.css](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/landing/landing.module.css) for the **Hero** section (heading scaling, badges wrapping, 4-column stats grid adjustment).
- [x] Implement responsive styles for **Trust Strip** logos.
- [x] Implement responsive styles for **Services** and **Process** cards grid (adapt 4-column grid to 2-column on tablet, 1-column on mobile).
- [x] Make **Why Us** grid and feature grid responsive.
- [x] Adjust **Gallery** grid layouts and reset tall tile spans on mobile.
- [x] Adjust **Testimonials** grid to 1-column mobile layout.
- [x] Adjust **Team** section and partners logos.
- [x] Add responsive design adjustments to **Quote Section** (form padding, column stacking).
- [x] Ensure **FAQ** titles scale down without visual bugs.
- [x] Adjust **Pre-Footer CTA** and **Footer** grids.
- [x] Optimize the **Sticky Bar** layout for mobile devices.

### [x] Phase 3: Services Details Page
- [x] Add responsive styles to [services.module.css](file:///c:/Users/gerdg/OneDrive/Main-Prototype_design/src/components/services/services.module.css) for the Services Hero section (title sizing, breadcrumbs wrapping).
- [x] Stack overview grid column on mobile devices.
- [x] Make sure recent work, related services, and index grids wrap properly.

### [x] Phase 4: Quality & Visual Verification
- [x] Run `npm run build` locally to ensure no build or linting errors.
- [x] Verify look and feel across Chrome DevTools responsive preview (Desktop, Tablet, Mobile).
