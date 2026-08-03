# Tuju Outspan Cyber Center: Image Asset Placeholder Contract

> **Status:** Placeholder documentation. No real images are committed yet.
> **Role:** The single agreed inventory of every image the site needs, its target path, dimensions, and format, so the final asset placement phase has one contract to follow.

---

## 1. Current State

The brand-derived assets below are generated from the TO mark and are in use. Photo slots remain pending owner content; everywhere a photo is not yet present, the UI renders branded navy-50 placeholders with an icon and text, per `design.md` section 10.

## 2. Ownership Gate

Real assets are placed only at the end of the phases, after the owner and developer agree on:

1. Surrounding area design: the exact section layouts these images sit inside.
2. Dimensions and crops: final sizes per asset from section 4.
3. Staff and space photography: who is photographed, where, and in what format.

Until that agreement is reached, do not add images to `public/`. Keep this document as the source of truth for what is coming and where.

## 3. Asset Inventory

| Asset | Target path | Dimensions and format | Used by |
|-------|-------------|-----------------------|---------|
| Open Graph image | `public/images/og/og-default.jpg` | Exactly 1200x630, JPG | Default `og:image` via `seo.ts` (in use) |
| Favicon | `public/favicon.ico` | 16x16 and 32x32, ICO | `layout.tsx` icons (in use) |
| App icon | `public/icon-192.png` | 192x192, PNG | `layout.tsx` icons (in use) |
| App icon | `public/icon-512.png` | 512x512, PNG | `layout.tsx` icons (in use) |
| Apple touch icon | `public/apple-touch-icon.png` | 180x180, PNG | `layout.tsx` icons (in use) |
| Navbar logo | `public/images/logo/logo-white.png` | 356x90, navy on white | Navbar logo, in use |
| Footer logo | `public/images/logo/logo-footer.png` | White on transparent, derived from the navbar logo | Footer brand column, in use |
| Founder photo | `public/images/about/about-founder.webp` | Portrait 2:3, 682x1024, WebP | About origin story and "Face Behind the Brand" (in use) |
| Space photos | `public/images/about/about-space-01.webp` (numbered set) | 16:9 or 4:3, 1200px long edge, WebP | About page community section (01 in use) |
| Portfolio work | `public/images/portfolio/portfolio-poster-01.webp` (numbered set) | 16:9 or 4:3, 1200px long edge, WebP | Design and Branding service page |
| Blog covers | `public/images/blog/blog-<slug>.webp` | 16:9, 1200px long edge, WebP | Blog cards and post pages, wired per post in `blog.ts` |
| Testimonial avatars | Not yet decided | Not yet decided | Testimonials section, only if the owner wants avatars |

## 4. Rules (inherited from `project-structure.md` section 4)

- Assets live only under `public/`. Referenced by path, never hotlinked.
- Every image gets descriptive alt text.
- Below-fold images use `loading="lazy"` (already implemented for blog covers).
- PNG for the navbar logo, WebP for photos, JPG for the OG image, ICO/PNG for icons.
- One asset, one purpose. Do not reuse a single photo for multiple distinct sections.
- Remove unused assets before committing; the repo must not accumulate orphan files.
- There is no hero background image. The approved hero is solid navy-900 with the radial glow; do not add `hero-bg.jpg`.

## 5. Code References

- `app/layout.tsx`: icon declarations (`favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`).
- `app/lib/utils/seo.ts`: `DEFAULT_OG_IMAGE` at `/images/og/og-default.jpg`.
- `app/lib/data/blog.ts`: `coverImage` per blog post under `public/images/blog/`.
- `app/about/page.tsx`: founder and space photo placeholders.
- `app/components/ui/BlogCard.tsx` and `app/components/sections/BlogListing.tsx`: cover image rendering.
- `app/components/layout/Footer.tsx`: footer logo rendering.

## 6. What Happens at the End of the Phases

Once the surrounding-area design, dimensions, and staff photography are agreed:

1. Add the agreed files to the paths in section 3.
2. Add descriptive alt text and any required copy where placeholders currently render.
3. Update or retire this document, folding anything still relevant into `project-structure.md` section 4.

*Placeholder contract complete. Ready for the final asset placement phase.*
