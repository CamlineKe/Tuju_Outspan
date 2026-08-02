# Tuju Outspan Cyber Center: Development Phases

> **Version:** 1.0
> **Date:** August 2026
> **Status:** Approved for execution
> **Role:** The step-by-step execution plan for the whole project, from setup to launch. The index of decisions is `architecture.md`; the code and asset map is `project-structure.md`.

---

## 1. How to Use This Plan

- Work top to bottom. Each phase depends on the phases before it.
- Each phase ends with a handoff and your approval before the next phase starts.
- Tick tasks as they are completed. Run the verification commands at the end of each phase and record the results in the sign-off box.
- You execute all automated verification (lint, type-check, tests, build). The code and tests are written for you to run.
- If a phase reveals a material change in scope, architecture, dependencies, security, or external contracts, stop and report before continuing.

---

## 2. Phase Index

| # | Phase | Objective | Exit criteria |
|---|-------|-----------|---------------|
| 0 | Setup and Scaffolding | Reproducible environment with all config files | `pnpm dev` runs; format, lint, type-check, tests, build pass |
| 1 | Design Tokens and Global Styles | Tailwind v4 theme and base styles | All palette tokens usable; focus ring, skip link, reduced motion present |
| 2 | Data Layer and Utilities | Typed content data and helpers | 7 service categories, pricing, testimonials, blog data; WhatsApp links and schemas tested |
| 3 | Layout Shell | Persistent chrome on every page | Navbar, footer, floating WhatsApp button, root metadata |
| 4 | UI Primitives | Reusable component library | Button, cards, FAQ, inputs, skeletons per design specs |
| 5 | Home Page | Conversion engine | All 9 sections, responsive, skeleton |
| 6 | Services Hub and Category Pages | All 7 service sales pages from one template | Hub grid, quick find, 7 data-driven category pages |
| 7 | About, Pricing, Contact | Remaining static pages | Per-page specs; form composes WhatsApp message; map embed |
| 8 | Blog | SEO content hub | Listing and post pages, `generateStaticParams` |
| 9 | 404, SEO, Sitemap, Assets | Error handling and search infrastructure | 404 page, metadata, sitemap, robots, user assets wired |
| 10 | Content, Quality, Deploy | Launch readiness | PRD launch checklist, Lighthouse >= 90, Vercel deploy |

---

## 3. Global Rules

- Static export: no API routes, images are unoptimized, dynamic routes need `generateStaticParams`.
- No new dependencies without explicit approval. The stack is pinned in `tech-stack.md`.
- Content data lives only in `app/lib/data/`. Page copy comes from the PRD and `page-designs.md`.
- Colors and tokens come only from `color-palette.md` and the `@theme` block in `tech-stack.md`.
- Every page passes the design quality checklist in `design.md` section 16.
- Every completed phase ends with `format:check`, `lint`, `type-check`, `test:ci`, `build` (where applicable), plus manual smoke checks.
- Images are user-generated. This plan only wires them in; formats, naming, and locations are defined in `project-structure.md`.

---

## 4. Phase 0: Setup and Scaffolding

### Objective

A reproducible local environment with every config file in place, ready for development.

### Prerequisites

- Git repo exists on branch `main` with the documentation committed.
- Node.js >= 22 and pnpm >= 10 installed.
- Explicit approval to run `pnpm install`.

### Files

`package.json`, `pnpm-lock.yaml`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `.prettierrc`, `vitest.config.ts`, `.env.example`, `.env.local`, `.gitignore`, `.vscode/settings.json`, `__tests__/setup.ts`.

### Tasks

- [ ] Create `package.json` with the exact pinned versions from `tech-stack.md` section 10 and the same scripts.
- [ ] Create the config files using the exact contents in `tech-stack.md` sections 12-14.
- [ ] Create `.env.example` from `tech-stack.md` section 14 and `.env.local` from it (real values later).
- [ ] Create `.gitignore` covering `node_modules`, `.next`, `dist`, `.env.local`, and editor files.
- [ ] Create `.vscode/settings.json` and `__tests__/setup.ts` per `tech-stack.md` section 9.
- [ ] Run `pnpm install` with approval.
- [ ] Confirm `pnpm dev` starts with Turbopack.
- [ ] Confirm `pnpm build` produces `dist/` and `npx serve dist` previews it.

### Definition of done

The environment is reproducible on a clean checkout: install, dev, and all quality commands pass.

### Verification (you run, in order)

1. `pnpm format:check`
2. `pnpm lint`
3. `pnpm type-check`
4. `pnpm test:ci`
5. `pnpm build`
6. `pnpm dev` and `npx serve dist` manual smoke

### Risks and notes

- No image work happens here; you supply images later per `project-structure.md`.
- If any pinned package fails to install on Node 22, stop and report rather than loosening versions.

---

## 5. Phase 1: Design Tokens and Global Styles

### Objective

The Tailwind v4 theme and base styles that every page builds on.

### Files

`app/globals.css`, `app/layout.tsx` (shell only).

### Tasks

- [ ] Add the `@theme` block from `tech-stack.md` section 2 to `globals.css`, values owned by `color-palette.md`.
- [ ] Load Inter via `next/font/google` in the root layout.
- [ ] Add base styles: `:focus-visible` ring, skip link, `prefers-reduced-motion` handling.
- [ ] Add section background utilities and the hero radial glow utility per `design.md` section 8.
- [ ] Remove any hardcoded hex values outside `globals.css`; components use tokens only.

### Definition of done

Every palette token resolves as a Tailwind class, and the base accessibility styles exist.

### Verification

1. `pnpm lint`
2. `pnpm type-check`
3. `pnpm dev` visual check of tokens on a test page

### Dependencies

Phase 0.

---

## 6. Phase 2: Data Layer and Utilities

### Objective

Typed content data and shared helpers so pages are data-driven.

### Files

`app/lib/data/services.ts`, `app/lib/data/pricing.ts`, `app/lib/data/testimonials.ts`, `app/lib/data/blog.ts`, `app/lib/utils/cn.ts`, `app/lib/utils/whatsapp.ts`, `app/lib/utils/seo.ts`, `app/lib/schemas/contact.ts`, tests.

### Tasks

- [ ] Define the `ServiceCategory` type and all 7 categories from PRD pages 4-10.
- [ ] Define pricing card data from PRD page 11 with `from KSh` or `ask for quote` values.
- [ ] Add testimonial placeholders (empty content approved; real quotes later).
- [ ] Add blog stub data structure with at least one example post.
- [ ] Implement `cn.ts` (clsx + tailwind-merge), `whatsapp.ts` (pre-filled `wa.me` links), `seo.ts` (metadata and JSON-LD builders).
- [ ] Implement the contact Zod schema: name, phone, service, message.
- [ ] Add unit tests for `cn`, `whatsapp`, and the contact schema.

### Definition of done

All data modules are typed and importable; WhatsApp links encode pre-filled text; tests cover the utilities.

### Verification

1. `pnpm type-check`
2. `pnpm test:ci`

### Dependencies

Phase 1.

---

## 7. Phase 3: Layout Shell

### Objective

Persistent chrome on every page.

### Files

`app/layout.tsx`, `app/components/layout/Container.tsx`, `Navbar.tsx`, `Footer.tsx`, `WhatsAppFloat.tsx`, tests.

### Tasks

- [ ] Root layout: metadata base, Inter font, skip link, navbar, footer, floating button.
- [ ] Navbar: fixed, transparent-to-solid on scroll, active link underline, mobile full-screen menu.
- [ ] Footer: 4 columns per `page-designs.md` Page 1 Section 9.
- [ ] WhatsApp floating button: fixed bottom-right, one-time pulse, tooltip.
- [ ] Component tests for Navbar and Footer.

### Definition of done

All pages render the chrome, and the mobile menu works.

### Verification

1. `pnpm test:ci`
2. `pnpm lint`
3. `pnpm dev` manual check of menu and scroll states

### Dependencies

Phases 1 and 2.

---

## 8. Phase 4: UI Primitives

### Objective

The reusable component library.

### Files

`app/components/ui/Button.tsx`, `ServiceCard.tsx`, `SectionHeader.tsx`, `ProcessStep.tsx`, `TestimonialCard.tsx`, `PricingCard.tsx`, `BlogCard.tsx`, `FAQItem.tsx`, `Input.tsx`, `Skeleton.tsx`, `SkeletonCard.tsx`.

### Tasks

- [ ] Button with all variants from `color-palette.md` (primary, secondary, outline, outline-light, whatsapp) and sizes from `design.md`.
- [ ] Cards matching `design.md` section 5.2 (service, testimonial, pricing, blog).
- [ ] FAQItem single-open accordion per `page-designs.md` service template.
- [ ] Input component with focus and error states per `color-palette.md`.
- [ ] Skeleton primitives per `404-and-skeletons.md` Part 3.
- [ ] Component tests for Button and ServiceCard.

### Definition of done

Primitives match the design system specs and are usable by sections.

### Verification

1. `pnpm test:ci`
2. `pnpm lint`
3. `pnpm type-check`

### Dependencies

Phases 2 and 3.

---

## 9. Phase 5: Home Page

### Objective

The conversion engine.

### Files

`app/page.tsx`, `app/components/sections/Hero.tsx`, `ServicesGrid.tsx`, `WhyChooseUs.tsx`, `ProcessSteps.tsx`, `Testimonials.tsx`, `LocationStrip.tsx`, `CTABanner.tsx`, `app/loading.tsx`.

### Tasks

- [ ] All 9 sections per `page-designs.md` Page 1.
- [ ] Hero with navy background, radial glow, overline, headline, CTAs, trust bar.
- [ ] Services preview grid reading from `services.ts`.
- [ ] Why Choose Us, process steps, testimonials (placeholders), location strip, CTA banner.
- [ ] Global skeleton matching the home layout per `404-and-skeletons.md`.
- [ ] Page metadata via `seo.ts`.

### Definition of done

Home renders all sections responsively with data-driven services and placeholder testimonials.

### Verification

1. `pnpm dev` visual check at mobile, tablet, desktop widths
2. `pnpm test:ci`
3. `pnpm build`

### Dependencies

Phases 2-4.

---

## 10. Phase 6: Services Hub and Category Pages

### Objective

All 7 service sales pages from one template.

### Files

`app/services/page.tsx`, `app/services/loading.tsx`, `app/components/templates/ServiceCategoryTemplate.tsx`, `app/components/sections/ServiceBreakdown.tsx`, `RelatedServices.tsx`, seven `app/services/*/page.tsx` files.

### Tasks

- [ ] Hub: header, quick find search, 7-card grid, can't find it banner per `page-designs.md` Page 3.
- [ ] Template: page header, service breakdown, process steps, FAQ, pricing note, related services, sticky mobile CTA per `page-designs.md` Pages 4-10.
- [ ] Seven category pages render from `services.ts` with category-specific metadata and JSON-LD.
- [ ] Related services cross-link per category data.

### Definition of done

All 7 routes build and render from data; WhatsApp CTAs carry pre-filled messages.

### Verification

1. `pnpm build` (all routes present in `dist/services/`)
2. `pnpm dev` manual walkthrough of all 8 service routes
3. `pnpm test:ci`

### Dependencies

Phases 2-5.

---

## 11. Phase 7: About, Pricing, Contact

### Objective

Remaining static pages.

### Files

`app/about/page.tsx`, `app/pricing/page.tsx`, `app/contact/page.tsx`, their `loading.tsx` files, `app/components/sections/PricingTable.tsx`, `ContactInfo.tsx`, `app/components/ui/FAQItem.tsx` reuse.

### Tasks

- [ ] About per `page-designs.md` Page 2 (photo placeholders per asset map).
- [ ] Pricing per Page 11: philosophy, cards with `from KSh` or `ask for quote`, discounts, payment methods, FAQ.
- [ ] Contact per Page 12: WhatsApp card, community links, details, map embed from `NEXT_PUBLIC_MAPS_EMBED_URL`, form.
- [ ] Contact form validates with the Zod schema and composes a pre-filled WhatsApp message on submit.
- [ ] Per-page metadata and JSON-LD (Service for pricing categories, ContactPage for contact).

### Definition of done

All three pages match their specs; the form works without any backend.

### Verification

1. `pnpm dev` manual check of form validation and WhatsApp compose
2. `pnpm test:ci`
3. `pnpm build`

### Dependencies

Phases 2-6.

---

## 12. Phase 8: Blog

### Objective

The SEO content hub.

### Files

`app/blog/page.tsx`, `app/blog/loading.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/[slug]/loading.tsx`, `app/components/ui/BlogCard.tsx`, `app/lib/data/blog.ts`.

### Tasks

- [ ] Listing: featured post, category filter tabs, grid, load more per `page-designs.md` Page 13.
- [ ] Post page: article header, featured image, content, inline CTAs, author box, share per Page 14.
- [ ] `generateStaticParams` enumerates posts from `blog.ts`.
- [ ] BlogPosting JSON-LD per post; share uses WhatsApp share and copy link.
- [ ] Skeleton files per `404-and-skeletons.md` Part 2.

### Definition of done

Listing and all post routes build statically; filters and load more work client-side.

### Verification

1. `pnpm build` (posts present in `dist/blog/`)
2. `pnpm dev` manual check of filters and post pages
3. `pnpm test:ci`

### Dependencies

Phases 2-5.

---

## 13. Phase 9: 404, SEO, Sitemap, Assets

### Objective

Error handling and search infrastructure.

### Files

`app/not-found.tsx`, `public/robots.txt`, sitemap generation (post-build), `app/lib/utils/seo.ts`, user-provided assets per `project-structure.md`.

### Tasks

- [ ] 404 page per `404-and-skeletons.md` Part 1: hero, quick links, CTA banner, metadata.
- [ ] Robots file pointing to the sitemap.
- [ ] Sitemap generated after build listing all routes (decision D6).
- [ ] Wire logo, favicon set, apple touch icon, and OG image from `project-structure.md` locations.
- [ ] JSON-LD builders: LocalBusiness (root), Service (service pages), FAQPage (FAQ sections), BlogPosting (posts).

### Definition of done

404 works, every page has unique metadata, sitemap and robots are correct, and user assets are wired.

### Verification

1. `pnpm build`
2. Inspect `dist/` for `404.html`, `sitemap.xml`, `robots.txt`, and assets
3. `pnpm dev` manual check of a bad route

### Dependencies

Phases 0-8; user assets for logo, favicon, OG image, and photos.

---

## 14. Phase 10: Content, Quality, Deploy

### Objective

Launch readiness.

### Files

Content data modules, `public/images/` assets, Vercel project configuration.

### Tasks

- [ ] You add real testimonials, photos, portfolio images, and blog posts (3-5 to start).
- [ ] You add WhatsApp Group and Channel links to `.env.local`.
- [ ] You decide the domain and set `NEXT_PUBLIC_SITE_URL`.
- [ ] Run the full quality suite and fix any findings within approved scope.
- [ ] Deploy to Vercel and connect the domain.
- [ ] Add Vercel Analytics and Speed Insights after launch.

### Definition of done

PRD launch checklist (section 12) is complete and the site is live.

### Verification

1. `pnpm format:check`
2. `pnpm lint`
3. `pnpm type-check`
4. `pnpm test:ci`
5. `pnpm build`
6. Lighthouse on the deployed site (performance, accessibility, SEO >= 90)
7. Manual walkthrough of every route and every WhatsApp link

### Dependencies

Phases 0-9 and user-provided content and assets.

---

## 15. Phase Sign-Off

Copy this block into the handoff of every phase.

| Item | Value |
|------|-------|
| Phase | |
| Date | |
| Verification output | |
| Known limitations | |
| Approved by | |

---

## 16. Project-Wide Definition of Done

- All 14 pages plus 404 built and reviewed.
- WhatsApp links tested and pre-filled messages correct.
- Mobile responsiveness verified at 640, 1024, and 1280px.
- Unique SEO metadata on every page; sitemap and robots correct.
- Design quality checklist from `design.md` section 16 passes.
- Lighthouse >= 90 on performance, accessibility, SEO, best practices.
- PRD launch checklist complete.
