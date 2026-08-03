# Tuju Outspan Cyber Center: Architecture and Development Guide

> **Version:** 1.3
> **Date:** August 2026
> **Status:** Implementation complete; awaiting owner verification, content, and launch
> **Role:** The index and execution guide. Every other document feeds this one. This document does not replace them.

---

## 1. Purpose and How to Use This Document

This file connects the project documentation into one working guide. It answers two questions:

1. Where do I find the answer? Use the document map in section 1.2.
2. What do I build next? Use the build order in section 8.

The source documents remain the owners of their subject matter:

| Question | Open | What it contains |
|---|---|---|
| Why does this site exist? What pages and content? | `Tuju_Outspan_PRD.md` | Business goals, 14 pages, section content, WhatsApp strategy, launch checklist |
| What are the exact colors and rules? | `color-palette.md` | Token values, color usage rules, contrast data |
| How should components look and move? | `design.md` | Typography, spacing, components, motion, accessibility, SEO patterns |
| How is each page laid out, section by section? | `architecture.md` (section 6) | Condensed route-to-sections map |
| What about the 404 page and loading states? | `architecture.md` (section 6) | 404 page requirements, skeleton requirements |
| What versions and configs do we use? | `tech-stack.md` | Versions, configs, install and build commands |
| What is missing or pending? | `deliverables-checklist.md` | Content gaps, open decisions, recommended next steps |
| What images are pending and where do they go? | `image-assets.md` | Asset placeholder contract, target paths, dimensions, formats |
| What does each folder and file do? Where do assets live? | `project-structure.md` | Folder map, file responsibilities, asset storage, image formats |
| What are the canonical decisions, data model, and verification? | `architecture.md` (this file) | Decision log, data model, verification, doc map |

**Reading path:**

- Setting up the project: follow `tech-stack.md` for versions and commands and `project-structure.md` for the file map.
- Building a page: read the route row in section 6, then the component names in `project-structure.md`.
- Changing a color, font, or spacing: open `color-palette.md` and `design.md`, then update the `@theme` block in `tech-stack.md` if the token list changes.
- Adding a page or component: update the owning document and the relevant sections of `project-structure.md`. See section 12.

---

## 2. Product Context

Source: `Tuju_Outspan_PRD.md` sections 2, 6, and 7.

| Element | Detail |
|---|---|
| Brand name | Tuju Outspan Cyber Center |
| Tagline | Your Hustle. Our Tech. Made Easy. |
| Core promise | Fast, reliable, affordable |
| Location | Ikonge-Ekerenyo Stage, Chuka University |
| Phone / WhatsApp | 0715 616 633 |
| Email | rafaeeltuju902@gmail.com |
| Hours | Open daily until late |
| Reach | Local walk-ins plus online services countrywide |

### 2.1 Conversion Model

WhatsApp is the primary conversion channel. The site is a digital storefront that builds trust and moves visitors to WhatsApp.

- Every page carries WhatsApp CTAs within the count limits in `design.md` section 14 (Home 3-5, service pages 3-4, About 1-2, Contact 2-3, blog posts 1-2 inline).
- The floating WhatsApp button is on every page.
- WhatsApp links include pre-filled message text naming the relevant service.
- WhatsApp Group and Channel links are placeholders until those resources are created (see open items).

---

## 3. Technical Foundation

Source: `tech-stack.md`. All versions are pinned exactly.

| Layer | Choice |
|---|---|
| Framework | Next.js 15.3.4, App Router |
| Language | TypeScript 5.8.3, strict mode |
| Styling | Tailwind CSS 4.1.0 (CSS-first `@theme` configuration) |
| Icons | lucide-react 0.487.0 |
| Animation | framer-motion 12.9.0 (mobile menu, WhatsApp float pulse); custom IntersectionObserver scroll reveals (`Reveal.tsx`) |
| Forms | react-hook-form 7.56.0 + zod 3.25.1 + @hookform/resolvers 5.0.1 |
| Class merging | clsx 2.1.1 + tailwind-merge 3.2.0 |
| Testing | vitest 3.2.0 + Testing Library |
| Package manager | pnpm 10.10.0 |
| Hosting | Vercel |
| Runtime | Node.js >= 22 |

### 3.1 Static Export Model

`next.config.ts` uses `output: 'export'`. This is the deployment model and drives several constraints:

- No API routes. Forms and integrations must be client-side or external.
- All pages are pre-rendered at build time into `dist/`.
- Images use `unoptimized: true`; optimize assets before adding them to `public/`.
- Dynamic routes such as `/blog/[slug]` require `generateStaticParams`.
- `next start` is not valid with static export. Preview with a static server (`npx serve dist`) or `vercel dev`.
- If server features are ever needed, the documented path is `output: 'standalone'`; do that only with explicit approval.

### 3.2 Key Configuration Files

| File | Purpose |
|---|---|
| `next.config.ts` | Static export, `distDir: 'dist'`, unoptimized images, `trailingSlash: true`, no powered-by header |
| `tsconfig.json` | Strict TypeScript, `@/*` path alias to project root |
| `postcss.config.mjs` | Tailwind v4 PostCSS plugin |
| `eslint.config.mjs` | ESLint flat config: recommended + Next + TypeScript rules |
| `.prettierrc` | Prettier with Tailwind class sorting and import sorting |
| `vitest.config.ts` | jsdom environment, `@` alias, coverage settings |
| `.env.example` | All public environment variables (section 3.4) |

### 3.3 Commands

Run from the project root.

| Command | Purpose |
|---|---|
| `pnpm dev` | Development server with Turbopack |
| `pnpm format:check` | Prettier check |
| `pnpm format` | Prettier write |
| `pnpm lint` | ESLint |
| `pnpm type-check` | TypeScript check, no emit |
| `pnpm test:ci` | Vitest, single run |
| `pnpm build` | Static export to `dist/` |
| `npx serve dist` | Preview the static build locally |
| `vercel --prod` | Production deployment |

### 3.4 Environment Variables

Source: `tech-stack.md` section 14. Values live in `.env.local` (gitignored); names and examples live in `.env.example`.

| Variable | Example |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `254715616633` |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | `rafaeeltuju902@gmail.com` |
| `NEXT_PUBLIC_BUSINESS_LOCATION` | `Ikonge-Ekerenyo Stage, Chuka University` |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | Google Maps embed URL (placeholder until chosen) |
| `NEXT_PUBLIC_WHATSAPP_GROUP` | WhatsApp group link (pending creation) |
| `NEXT_PUBLIC_WHATSAPP_CHANNEL` | WhatsApp channel link (pending creation) |
| `NEXT_PUBLIC_SITE_URL` | `https://tujuoutspan.co.ke` (pending domain decision) |

---

## 4. Design Contract

The design is finalized in two documents plus the route map in this file. Do not invent alternatives:

| Contract | Owner |
|---|---|
| Color tokens, rules, contrast | `color-palette.md` |
| Typography, spacing, components, motion, accessibility, SEO patterns | `design.md` |
| Per-page section layouts, 404 page, loading skeletons | `architecture.md` (section 6) |

`page-designs.md` and `404-and-skeletons.md` were retired after implementation; their essential per-page section order and the 404/skeleton requirements are preserved in section 6.

### 4.1 Non-Negotiable Rules

- 60-30-10 color ratio: 60% white/light gray, 30% navy/gray structure, 10% orange conversion points.
- Solid backgrounds only. The only decorative element in the entire site is the subtle radial glow in hero sections (orange at 6% opacity, top-right).
- WhatsApp green appears only on WhatsApp-specific elements.
- Spacing is multiples of 4px. Typography follows the token scale in `design.md` section 3.
- Icons are Lucide outline icons. No emojis as UI icons and no emojis in rendered copy.
- Focus states, skip link, keyboard navigation, and `prefers-reduced-motion` are required (WCAG 2.1 AA).
- No parallax, auto-playing carousels, or decorative animation.

### 4.2 Token Ownership

- `color-palette.md` owns the human-facing token values (hex, RGB, usage, contrast).
- `tech-stack.md` owns the machine-facing Tailwind v4 `@theme` block in `globals.css` and marks it as derived from `color-palette.md`.
- Shadow tokens use the `navy-*` naming set (`shadow-navy-sm`, `shadow-navy-md`, `shadow-navy-lg`) plus `shadow-orange`.
- `color-palette.md` owns the canonical values and points to `tech-stack.md` section 2 for the machine-facing `@theme` block in `app/globals.css`. There is exactly one color config path.

---

## 5. Canonical Project Structure

The full file tree, folder map, file responsibilities, and asset storage rules are maintained in `docs/project-structure.md`. That file owns the structure; this section records the decisions that shape it.

### 5.1 Structure Notes

- Service routes are static folders, not a dynamic `/services/[slug]` segment. All seven category pages render `ServiceCategoryTemplate` with data from `app/lib/data/services.ts`.
- The dynamic `[slug]` loading path applies to blog posts only. Service category pages reuse `app/services/loading.tsx` and the shared skeleton components.
- `app/loading.tsx` is the global skeleton and mirrors the Home page layout.
- All client-side interactivity stays in small components: Navbar menu, FAQ accordion, blog filters, contact form, scroll reveals.

---

## 6. Route and Page Inventory

All 14 pages from the PRD plus 404 and loading states are listed below. The Sections column is the condensed per-page layout map; all seven service categories share the same template sections.

| # | Route | Page | Sections | Build note |
|---|---|---|---|---|
| 1 | `/` | Home | Navbar; Hero; Services preview; Why Choose Us; How It Works; Testimonials; Location strip; CTA banner; Footer | 9-section conversion engine |
| 2 | `/about` | About | Page header; Origin story; Mission and values; Face behind the brand; Community impact; CTA | Trust building, photo placeholders |
| 3 | `/services` | Services Hub | Page header; Quick find search; Services grid; Can't find it banner | 7-card grid |
| 4-10 | `/services/{category}` | 7 Service Categories | Page header; Service breakdown; How It Works; FAQ; Pricing note; Related services; Sticky mobile CTA | All render `ServiceCategoryTemplate`; design-branding also renders `PortfolioGallery` |
| 11 | `/pricing` | Pricing | Page header; Pricing philosophy; Pricing cards; Bulk and student discounts; Payment methods; FAQ | Framework pricing, ask for quote |
| 12 | `/contact` | Contact | Page header; WhatsApp card; Community links; Details and map; Inquiry form | WhatsApp-first, map embed, form |
| 13 | `/blog` | Blog | Page header; Featured post; Category filter; Blog grid; Load more; WhatsApp channel CTA | Client-side filters and load more |
| 14 | `/blog/[slug]` | Blog Post | Article header; Featured image; Article content with inline CTAs; Author box; Related articles; Share | `generateStaticParams` required |
| 15 | `/404` | Not Found | Error hero; Quick links; CTA banner | `app/not-found.tsx`, noindex automatic |

Loading states: `app/loading.tsx` (global, mirrors Home), `app/services/loading.tsx`, `app/pricing/loading.tsx`, `app/contact/loading.tsx`, `app/blog/loading.tsx`, `app/blog/[slug]/loading.tsx`. Requirements: each skeleton mirrors its page structure; containers are `aria-busy="true"` with a visually hidden "Loading content..." label; skeletons contain no focusable elements; the shimmer animation respects `prefers-reduced-motion`.

Background rhythm: every page opens with the navy-900 header and closes with the navy-900 footer. Interior sections alternate white, gray-50, navy-50, and orange-50 with no two identical backgrounds adjacent. Bold orange-500 CTA banners close the Home and About pages; other pages close on their content sections or use orange-50 accents. No decorative patterns are used anywhere (design.md section 8).

---

## 7. Data Model and Content

All content data lives in `app/lib/data/` as typed TypeScript modules. No CMS. Static export friendly.

### 7.1 Services (`services.ts`)

One `ServiceCategory` type covering the seven categories:

```ts
interface ServiceItem {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceCategory {
  slug: 'government' | 'education' | 'health' | 'documents'
    | 'design-branding' | 'computer-it' | 'online-career';
  name: string;
  headline: string;
  subheadline: string;
  icon: string; // Lucide icon name
  services: ServiceItem[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  pricingNote: string;
  related: string[]; // category slugs for cross-sell
}
```

The seven categories and their service lists come from PRD pages 4-10 and are authoritative there.

### 7.2 Supporting Data

| Module | Content |
|---|---|
| `testimonials.ts` | Quote, author, service used. 3 placeholders until real content arrives |
| `pricing.ts` | 7 pricing cards, each with items marked `from KSh ...` or `ask for quote`, featured flag |
| `blog.ts` | Posts with slug, title, excerpt, category, date, read time, author, cover image, content blocks |

### 7.3 Utilities and Schemas

| Module | Responsibility |
|---|---|
| `utils/cn.ts` | `clsx` + `tailwind-merge` class merge helper |
| `utils/whatsapp.ts` | `wa.me` link builder with pre-filled text, e.g. `Hi Tuju Outspan, I need help with {service}` |
| `utils/seo.ts` | Metadata builders: page title, description, Open Graph, JSON-LD (LocalBusiness, Service, FAQPage, BlogPosting) |
| `schemas/contact.ts` | Zod schema: name, phone, service needed, message |

### 7.4 Form Handling Decision

The contact form is client-side only. On submit it validates with the Zod schema and opens a pre-filled WhatsApp message with the form contents. No email service, no API route. This matches the static export model and the WhatsApp-first strategy.

---

## 8. Build Order

Implementation phases are complete. Remaining work is owner content and launch actions, tracked in `deliverables-checklist.md` and `image-assets.md`. Future changes follow the maintenance rules in section 12.

---

## 9. Cross-Cutting Contracts

### 9.1 SEO

- Title template: `{Page Name} | Tuju Outspan Cyber Center`.
- Description template: `{Service description} Fast, reliable, and affordable at Ikonge-Ekerenyo Stage. Chat with us on WhatsApp: 0715 616 633.`
- Open Graph per page: title, description, `og-default.jpg`, type `website`, locale `en_KE`.
- JSON-LD: LocalBusiness on the root layout, Service per service page, FAQPage where FAQs exist, BlogPosting per article.
- Sitemap: generated post-build by `scripts/generate-sitemap.mjs`, which derives routes from the exported HTML in `dist/`, so new pages and blog posts appear in `sitemap.xml` without editing the script.

### 9.2 Accessibility

- WCAG 2.1 AA minimum. Contrast rules in `color-palette.md`.
- Visible focus rings, skip link, semantic HTML, keyboard navigation, alt text on images.
- `prefers-reduced-motion`: disable animations.
- Touch targets >= 44x44px.

### 9.3 Performance

- Load time under 2 seconds on 3G; Lighthouse >= 90 across categories.
- Images lazy-loaded below the fold, pre-optimized before entering `public/`.
- No parallax, autoplay carousels, or decorative animation.

### 9.4 Analytics

Deferred. Vercel Analytics and Speed Insights are the chosen tools and are added after launch, per `tech-stack.md` section 7.

---

## 10. Verification

All checks run from the project root after scaffolding.

Order from fastest and most targeted to broadest:

1. `pnpm format:check` - formatting
2. `pnpm lint` - linting
3. `pnpm type-check` - TypeScript
4. `pnpm test:ci` - automated tests
5. `pnpm build` - static export production build
6. `pnpm dev` or `npx serve dist` - manual smoke test: WhatsApp links, mobile menu, FAQ, forms, breadcrumbs, 404
7. Lighthouse on the built site - performance, accessibility, SEO, best practices

Every completed page also passes the design quality checklist in `design.md` section 16: exact palette tokens, token typography and spacing, alt text, focus states, mobile and tablet layouts, working WhatsApp links, no console errors, Lighthouse >= 90.

---

## 11. Decision Log and Open Items

### 11.1 Resolved Conventions

| ID | Decision | Status |
|---|---|---|
| D1 | Tailwind v4 `@theme` in `tech-stack.md` is the only machine-facing color config; `color-palette.md` owns the values | Done |
| D2 | Shadow tokens use `shadow-navy-*` naming plus `shadow-orange` | Done |
| D3 | Lucide outline icons only; no emojis in rendered UI copy | Done |
| D4 | Static export is the deployment model; `next start` is invalid with it; preview via static server | Applied in this file |
| D5 | Contact form composes a pre-filled WhatsApp message; no email service | Applied in this file |
| D6 | Sitemap generated post-build | Applied in this file |
| D7 | Service routes are static folders sharing `ServiceCategoryTemplate`; no `/services/[slug]` segment | Applied in this file |
| D8 | FAQ accordion is single-open | Source: `deliverables-checklist.md` |

### 11.2 Open Items

Full details in `deliverables-checklist.md`.

| Item | Needed for | Blocker? |
|---|---|---|
| Domain name decision | `.env`, canonical URLs, sitemap | No, use placeholder until decided |
| WhatsApp Group and Channel links | Contact page, footer, blog | No, placeholders in `.env` |
| Real testimonials (2-3) | Home testimonials section | No, placeholders allowed |
| Founder and space photos | About page | Founder photo and first space photo in use; more space photos pending |
| Design portfolio images | Design and Branding page | No; gallery section in place, images pending |
| Blog articles (3-5) | Blog pages | No, ship with placeholder-free stub data only after approval |
| Exact service prices | Pricing page | No, use `from KSh` or `ask for quote` |
| OG image and favicon set | Launch assets | Done; generated from the TO mark |
| Git repo | Version control | Done, initialized on `main` with docs committed |
| Vercel project and domain DNS | Deploy | No, later phase |

---

## 12. Maintenance

Rules to keep the documentation set free of duplication:

1. One owner per topic. When a topic changes, edit the owning document first.
2. `architecture.md` is the index. It summarizes and links; it does not copy full specs.
3. When adding or renaming a page, component, or data module: update the owning document, the route inventory (section 6), and the canonical structure (section 5).
4. When resolving an inconsistency: record it in the decision log (section 11.1) with its status.
5. When a decision changes the build model, stack, or structure: update this file and flag it in a handoff before implementation.
6. Record material changes in the change log below.

### Change Log

| Version | Date | Change |
|---|---|---|
| 1.0 | August 2026 | Baseline created from the seven source documents. Establishes canonical structure, data model, build order, verification, and decision log. Phase 1 of the documentation reconciliation plan. |
| 1.1 | August 2026 | Added the execution plan and the project structure map; sections 5 and 8 point to them, and asset storage and image format rules moved into `project-structure.md`. |
| 1.2 | August 2026 | Implementation of Phases 0-9 complete. Documents synced with the codebase: structure map, sitemap tooling, and statuses updated. |
| 1.3 | August 2026 | Implementation and improvement phases complete. Retired `development-phases.md`, `page-designs.md`, and `404-and-skeletons.md`; consolidated the per-page section map and 404/skeleton requirements into section 6, moved the asset contract to `image-assets.md`, and updated the sitemap tooling note in section 9.1. |
