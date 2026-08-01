# Tuju Outspan Cyber Center: Architecture and Development Guide

> **Version:** 1.0
> **Date:** August 2026
> **Status:** Baseline, ready for development
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
| How is each page laid out, section by section? | `page-designs.md` | Per-page section specs |
| What about the 404 page and loading states? | `404-and-skeletons.md` | 404 page spec, skeleton specs |
| What versions and configs do we use? | `tech-stack.md` | Versions, configs, install and build commands |
| What is missing or pending? | `deliverables-checklist.md` | Content gaps, open decisions, recommended next steps |
| What is the full plan from setup to deploy? | **This file** | Canonical structure, data model, build order, verification, decisions |

**Reading path:**

- Setting up the project: start at section 8, Phase 0.
- Building a page: read the route row in section 6, then the matching section in `page-designs.md`, then the component names in section 5.
- Changing a color, font, or spacing: open `color-palette.md` and `design.md`, then update the `@theme` block in `tech-stack.md` if the token list changes.
- Adding a page or component: update the owning document and the relevant sections of this file. See section 12.

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
| Animation | framer-motion 12.9.0 (scroll reveals, mobile menu, FAQ, page transitions) |
| Forms | react-hook-form 7.56.0 + zod 3.25.0 + @hookform/resolvers 5.0.1 |
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

The design is finalized in four documents. Do not invent alternatives:

| Contract | Owner |
|---|---|
| Color tokens, rules, contrast | `color-palette.md` |
| Typography, spacing, components, motion, accessibility, SEO patterns | `design.md` |
| Per-page section layouts | `page-designs.md` |
| 404 page and loading skeletons | `404-and-skeletons.md` |

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
- Phase 2 of the documentation plan removes the Tailwind v3 style config snippet from `color-palette.md` so there is exactly one color config path.

---

## 5. Canonical Project Structure

This is the single authoritative file tree. The component architecture sections in `Tuju_Outspan_PRD.md` and `design.md` are historical duplicates and point here after Phase 2.

```
tuju-outspan-website/
├── .env.example
├── .env.local (gitignored)
├── .gitignore
├── .prettierrc
├── .vscode/
│   └── settings.json
├── __tests__/
│   ├── setup.ts
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── lib/
│   └── pages/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx (global skeleton)
│   ├── not-found.tsx (404 page)
│   ├── page.tsx (Home)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx (Services Hub)
│   │   ├── loading.tsx
│   │   ├── government/page.tsx
│   │   ├── education/page.tsx
│   │   ├── health/page.tsx
│   │   ├── documents/page.tsx
│   │   ├── design-branding/page.tsx
│   │   ├── computer-it/page.tsx
│   │   └── online-career/page.tsx
│   ├── pricing/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── WhatsAppFloat.tsx
│   │   ├── sections/
│   │   │   ├── CTABanner.tsx
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LocationStrip.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   ├── RelatedServices.tsx
│   │   │   ├── ServiceBreakdown.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   ├── templates/
│   │   │   └── ServiceCategoryTemplate.tsx
│   │   └── ui/
│   │       ├── BlogCard.tsx
│   │       ├── Button.tsx
│   │       ├── FAQItem.tsx
│   │       ├── Input.tsx
│   │       ├── PricingCard.tsx
│   │       ├── ProcessStep.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── Skeleton.tsx
│   │       ├── SkeletonCard.tsx
│   │       └── TestimonialCard.tsx
│   └── lib/
│       ├── data/
│       │   ├── blog.ts
│       │   ├── pricing.ts
│       │   ├── services.ts
│       │   └── testimonials.ts
│       ├── schemas/
│       │   └── contact.ts
│       └── utils/
│           ├── cn.ts
│           ├── seo.ts
│           └── whatsapp.ts
├── docs/
│   ├── 404-and-skeletons.md
│   ├── architecture.md (this file)
│   ├── color-palette.md
│   ├── deliverables-checklist.md
│   ├── design.md
│   ├── page-designs.md
│   ├── tech-stack.md
│   └── Tuju_Outspan_PRD.md
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml (generated post-build)
│   └── images/
│       ├── logo.png
│       ├── logo-white.png
│       ├── og-default.jpg (1200x630)
│       ├── about/
│       ├── blog/
│       └── portfolio/
├── tsconfig.json
└── vitest.config.ts
```

### 5.1 Structure Notes

- Service routes are static folders, not a dynamic `/services/[slug]` segment. All seven category pages render `ServiceCategoryTemplate` with data from `app/lib/data/services.ts`.
- The `[slug]` loading path in `404-and-skeletons.md` therefore applies to blog posts only. Service category loading states reuse the shared skeleton components.
- `app/loading.tsx` is the global skeleton and mirrors the Home page per the skeleton spec.
- All client-side interactivity stays in small components: Navbar menu, FAQ accordion, blog filters, contact form, scroll reveals.

---

## 6. Route and Page Inventory

All 14 pages from the PRD plus 404 and loading states. Spec source refers to the matching section in `page-designs.md`.

| # | Route | Page | Spec source | Build note |
|---|---|---|---|---|
| 1 | `/` | Home | Page 1 | 9 sections, conversion engine |
| 2 | `/about` | About | Page 2 | Trust building, photo placeholders |
| 3 | `/services` | Services Hub | Page 3 | Grid, quick find, can't find banner |
| 4 | `/services/government` | Government Services | Pages 4-10 template | Data-driven |
| 5 | `/services/education` | Education Services | Pages 4-10 template | Data-driven |
| 6 | `/services/health` | Health Services | Pages 4-10 template | Data-driven |
| 7 | `/services/documents` | Document Services | Pages 4-10 template | Data-driven |
| 8 | `/services/design-branding` | Design and Branding | Pages 4-10 template | Portfolio gallery pending images |
| 9 | `/services/computer-it` | Computer and IT | Pages 4-10 template | Data-driven |
| 10 | `/services/online-career` | Online and Career | Pages 4-10 template | Data-driven |
| 11 | `/pricing` | Pricing | Page 11 | Framework pricing, ask for quote |
| 12 | `/contact` | Contact | Page 12 | WhatsApp-first, map embed, form |
| 13 | `/blog` | Blog | Page 13 | Featured post, filters, load more |
| 14 | `/blog/[slug]` | Blog Post | Page 14 | `generateStaticParams` required |
| 15 | `/404` | Not Found | `404-and-skeletons.md` | `app/not-found.tsx` |

Loading states: `app/loading.tsx`, `app/services/loading.tsx`, `app/pricing/loading.tsx`, `app/contact/loading.tsx`, `app/blog/loading.tsx`, `app/blog/[slug]/loading.tsx`. Specs in `404-and-skeletons.md`.

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

Recommended execution order. Each phase is small enough to review, verify, and commit separately. Phase boundaries are adjustable by the user.

### Phase 0: Setup and Scaffolding

- Objective: reproducible local environment and all config files in place.
- Files: `package.json`, `pnpm-lock.yaml`, all config files from section 3.2, `.env.example`, `.env.local`, `.gitignore`, `.vscode/settings.json`, `__tests__/setup.ts`.
- Notes: git repo initialization and `pnpm install` require explicit approval. Install exact versions from `tech-stack.md` section 15.
- Acceptance: `pnpm dev` runs; `pnpm format:check`, `pnpm lint`, `pnpm type-check`, `pnpm test:ci` pass; `pnpm build` produces `dist/`; `npx serve dist` previews it.

### Phase 1: Design Tokens and Global Styles

- Objective: the Tailwind v4 theme and global base styles.
- Files: `app/globals.css` (`@theme` block from `tech-stack.md` section 2, values from `color-palette.md`), Inter font via `next/font`, base focus rings, skip link, reduced-motion support.
- Acceptance: every palette token resolves as a Tailwind class; section background alternation and glow utility exist; no hardcoded hex values outside `globals.css`.

### Phase 2: Data Layer and Utilities

- Objective: typed content data and shared helpers.
- Files: `app/lib/data/*`, `app/lib/utils/*`, `app/lib/schemas/contact.ts`, tests.
- Acceptance: 7 categories with full service lists, pricing, testimonials, blog data; WhatsApp link builder returns encoded pre-filled links; unit tests cover `cn.ts`, `whatsapp.ts`, and schema validation.

### Phase 3: Layout Shell

- Objective: persistent chrome on every page.
- Files: `components/layout/*`, `app/layout.tsx`.
- Acceptance: fixed navbar with scroll state and mobile menu, 4-column footer, floating WhatsApp button, root metadata; Navbar and Footer component tests pass.

### Phase 4: UI Primitives

- Objective: the reusable component library.
- Files: `components/ui/*`.
- Acceptance: Button variants (primary, secondary, outline, outline-light, whatsapp), ServiceCard, PricingCard, TestimonialCard, BlogCard, SectionHeader, ProcessStep, FAQItem, Input, Skeleton, SkeletonCard, all matching `design.md` and `color-palette.md`; component tests for Button and ServiceCard.

### Phase 5: Home Page

- Objective: the conversion engine.
- Files: `app/page.tsx`, `components/sections/*` (Hero, ServicesGrid, WhyChooseUs, ProcessSteps, Testimonials, LocationStrip, CTABanner), `app/loading.tsx`.
- Acceptance: all 9 sections per `page-designs.md` Page 1; hero glow; responsive grids; skeleton mirrors page structure.

### Phase 6: Services Hub and Category Pages

- Objective: all 7 service sales pages from one template.
- Files: `app/services/page.tsx`, `components/templates/ServiceCategoryTemplate.tsx`, seven `app/services/*/page.tsx` files, `app/services/loading.tsx`.
- Acceptance: hub grid with quick find and can't-find banner; every category renders from `services.ts` with service breakdown, process, FAQ, pricing note, related services, sticky mobile CTA.

### Phase 7: About, Pricing, Contact

- Objective: remaining static pages.
- Files: `app/about/page.tsx`, `app/pricing/page.tsx`, `app/contact/page.tsx`, their loading files.
- Acceptance: per-page specs; pricing cards with ask-for-quote CTA; contact form validates and opens pre-filled WhatsApp; map embed reads `NEXT_PUBLIC_MAPS_EMBED_URL`.

### Phase 8: Blog

- Objective: the SEO content hub.
- Files: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, loading files.
- Acceptance: listing with featured post, category filter, load more; post pages render from `blog.ts` with `generateStaticParams`, inline CTAs, author box, share actions.

### Phase 9: 404, SEO, Sitemap, Assets

- Objective: error handling and search infrastructure.
- Files: `app/not-found.tsx`, `public/robots.txt`, sitemap generation (post-build), `og-default.jpg`, favicon set, JSON-LD builders.
- Acceptance: 404 per spec; unique metadata on every page; sitemap lists all routes; robots correct; OG image 1200x630.

### Phase 10: Content, Quality, Deploy

- Objective: launch readiness.
- Files: real testimonials, photos, portfolio images, blog posts, pricing values, WhatsApp group and channel links, domain configuration.
- Acceptance: PRD launch checklist complete; Lighthouse >= 90 on performance, accessibility, SEO; deployed to Vercel; analytics added post-launch.

---

## 9. Cross-Cutting Contracts

### 9.1 SEO

- Title template: `{Page Name} | Tuju Outspan Cyber Center`.
- Description template: `{Service description} Fast, reliable, and affordable at Ikonge-Ekerenyo Stage. Chat with us on WhatsApp: 0715 616 633.`
- Open Graph per page: title, description, `og-default.jpg`, type `website`, locale `en_KE`.
- JSON-LD: LocalBusiness on the root layout, Service per service page, FAQPage where FAQs exist, BlogPosting per article.
- Sitemap: generated post-build so static export always ships a current `sitemap.xml`. Implementation decision: `next-sitemap` postbuild script or a checked-in static file; revisit when Phase 9 starts.

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
| D1 | Tailwind v4 `@theme` in `tech-stack.md` is the only machine-facing color config; `color-palette.md` owns the values | Phase 2 removes the v3 snippet |
| D2 | Shadow tokens use `shadow-navy-*` naming plus `shadow-orange` | Phase 2 aligns `color-palette.md` and `design.md` |
| D3 | Lucide outline icons only; no emojis in rendered UI copy | Phase 2 cleans `page-designs.md` examples |
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
| Founder and space photos | About page | No, labeled placeholders |
| Design portfolio images | Design and Branding page | No, labeled placeholder |
| Blog articles (3-5) | Blog pages | No, ship with placeholder-free stub data only after approval |
| Exact service prices | Pricing page | No, use `from KSh` or `ask for quote` |
| OG image and favicon set | Phase 9 | No |
| Git repo initialization | Version control | Requires approval |
| Vercel project and domain DNS | Deploy | No, later phase |

---

## 12. Maintenance

Rules to keep the documentation set free of duplication:

1. One owner per topic. When a topic changes, edit the owning document first.
2. `architecture.md` is the index. It summarizes and links; it does not copy full specs.
3. When adding or renaming a page, component, or data module: update the owning document, the route inventory (section 6), the canonical structure (section 5), and the relevant build phase (section 8).
4. When resolving an inconsistency: record it in the decision log (section 11.1) with its status.
5. When a decision changes the build model, stack, or structure: update this file and flag it in a handoff before implementation.
6. Record material changes in the change log below.

### Change Log

| Version | Date | Change |
|---|---|---|
| 1.0 | August 2026 | Baseline created from the seven source documents. Establishes canonical structure, data model, build order, verification, and decision log. Phase 1 of the documentation reconciliation plan. |
