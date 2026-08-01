# Tuju Outspan — 404 Page & Loading Skeletons Design Specs

> **Companion to:** `design.md` + `page-designs.md`  
> **Date:** August 2026

---

## Part 1: 404 Page (`not-found.tsx`)

### Overview
Friendly, on-brand, converts the lost visitor back to a useful path. Never a dead end.

---

#### Section 1: Error Hero

| Property | Value |
|----------|-------|
| **Background** | Navy-900 (`#0A1F44`) |
| **Padding** | 120px 24px 80px (desktop), 80px 24px (mobile) |
| **Text-align** | Center |

**Background texture:** Same subtle radial glow as other hero sections (Orange at 6% opacity, top-right).

**Content:**
- **Error code:** "404" — Display size (120px→80px mobile), weight 700, White. Opacity 0.15 (subtle, decorative)
- **Headline:** "Page Not Found" — H1 (36px), White
- **Subtext:** "Looks like this page took a wrong turn. But don't worry — we're still here to help." — Body-large (18px), Gray-400, max-width 480px, centered
- **CTA:** Primary Button "🏠 Back to Home" + Outline Button "💬 Chat on WhatsApp"

**Visual element:** Large "TO" mark (200px→120px mobile), Navy-800 color, opacity 0.1, positioned behind text as subtle watermark. Purpose: Brand reinforcement even on error page.

---

#### Section 2: Quick Links

| Property | Value |
|----------|-------|
| **Background** | White (`#FFFFFF`) |
| **Padding** | 64px 24px |

**Section Header:**
- Title: "Where to Next?" — H2, Navy-900
- Subtext: "Here are some pages you might be looking for." — Body, Gray-600

**Grid:** 4 cards (desktop), 2 columns (tablet), 1 column (mobile). Gap 20px. Max-width 900px.

**Quick Link Card:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Padding: 24px
- Icon: Lucide icon (24px, Navy-900) — Home, Briefcase, Phone, FileText
- Title: H5 (18px, 600), Navy-900
- Description: Body-small (14px), Gray-600
- Link: Full card is clickable. Hover: border Navy-800, shadow-navy-md, translateY(-2px)

**Links:**
1. 🏠 **Home** — "Back to our main page"
2. 💼 **Services** — "Browse all our services"
3. 📞 **Contact** — "Get in touch via WhatsApp"
4. 💰 **Pricing** — "Check our transparent rates"

**Background texture:** None.

---

#### Section 3: CTA Banner

| Property | Value |
|----------|-------|
| **Background** | Orange-50 (`#FEF0E8`) |
| **Padding** | 48px 24px |
| **Text-align** | Center |

**Content:**
- Title: "Can't Find What You Need?" — H3, Navy-900
- Subtext: "Just WhatsApp us — we probably do it." — Body, Gray-600
- CTA: Primary Button "💬 Ask on WhatsApp"

**Background texture:** None.

---

### 404 Page Metadata

```tsx
export const metadata = {
  title: 'Page Not Found | Tuju Outspan Cyber Center',
  description: 'The page you are looking for does not exist. Browse our services or contact us on WhatsApp.',
  robots: { index: false, follow: true },
};
```

---

## Part 2: Loading Skeletons

### Overview
Skeleton screens reduce perceived load time and prevent layout shift. Every page route has a dedicated skeleton that mirrors its content structure.

---

### Skeleton Base Styles

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--gray-100) 25%,
    var(--gray-50) 50%,
    var(--gray-100) 75%
  );
  background-size: 200% 100%;
  border-radius: 8px;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Rules:**
- Skeleton color: Gray-100 base, Gray-50 highlight (subtle, not harsh white)
- Animation: Smooth horizontal shimmer, 1.5s duration, infinite loop
- Border-radius: Matches the element it replaces (8px default, 12px for cards)
- No text content — pure shape

---

### Home Page Skeleton (`app/loading.tsx`)

```
Layout: Mirrors actual Home page structure

Navbar (64px height):
  - Logo placeholder: 120×32px rectangle
  - Nav links: 5 rectangles, 60×16px each, gap 28px
  - CTA button: 100×36px rectangle

Hero Section:
  - Overline: 200×12px rectangle, centered
  - Headline: 2 lines, 500×48px each, centered
  - Subtext: 1 line, 400×20px, centered
  - CTAs: 2 buttons, 160×48px each, centered
  - Trust bar: 3 items, 120×16px each

Services Grid:
  - Section header: overline 100×12px + title 300×32px
  - 7 cards in grid:
    - Icon: 44×44px circle
    - Title: 150×20px
    - 3 lines: 120×14px each
    - Link: 100×14px

Why Choose Us:
  - Section header
  - 4 cards: icon 56×56px + title 100×16px + 2 lines 140×14px

Process Steps:
  - Section header
  - 3 steps: number 56×56px circle + title 120×16px + 2 lines 160×14px

Testimonials:
  - Section header
  - 3 cards: stars 100×16px + 3 lines 240×16px + author 100×14px

Location Strip:
  - 3 items: 200×16px each

CTA Banner:
  - Title: 300×36px + subtext 280×18px + button 180×48px

Footer:
  - 4 columns of link placeholders
```

---

### Service Category Page Skeleton (`app/services/[slug]/loading.tsx`)

```
Hero Section:
  - Breadcrumb: 150×14px
  - Title: 400×36px
  - Subtext: 350×18px

Service Breakdown:
  - 2-column layout
  - Left: overline 100×12px + title 250×32px + 8 service rows (each: icon 20×20px + title 180×18px + desc 250×14px)
  - Right: placeholder image 300×400px

How It Works:
  - 3 steps with circles and lines

FAQ:
  - 4 accordion items (collapsed): each 600×56px

Pricing Note:
  - Title 200×24px + text 400×16px + button 160×48px

Related Services:
  - 2 cards: icon 44×44px + title 140×18px + 3 lines
```

---

### Blog Page Skeleton (`app/blog/loading.tsx`)

```
Hero Section:
  - Breadcrumb + title + subtext

Featured Post:
  - Horizontal card: image 50% width (400×240px) + content: tag 80×12px + title 300×24px + excerpt 2 lines + meta 150×14px

Category Filter:
  - 6 pill buttons: 80×36px each

Blog Grid:
  - 6 cards: image 320×180px + tag 80×12px + title 2 lines 260×20px + excerpt 3 lines 280×14px + meta 120×13px

Load More:
  - Button 140×44px
```

---

### Blog Post Skeleton (`app/blog/[slug]/loading.tsx`)

```
Article Header:
  - Tag 80×12px + title 3 lines 600×36px + meta 200×14px

Featured Image:
  - Full width, 500px height

Article Content:
  - 8–10 paragraph placeholders: 100% width, 16px height each
  - 2 H2 placeholders: 60% width, 28px height
  - 1 blockquote: 100% width, 80px height, left border accent
  - 1 image placeholder: 100% width, 300px height

Author Box:
  - Avatar 64×64px circle + name 150×18px + bio 2 lines 400×14px

Related Articles:
  - 3 cards: same as blog grid cards
```

---

### Contact Page Skeleton (`app/contact/loading.tsx`)

```
Hero Section:
  - Breadcrumb + title + subtext

WhatsApp Card:
  - Large card: icon 48×48px + title 250×24px + number 200×28px + text 300×16px + button 180×48px

Community Cards:
  - 2 cards: icon 32×32px + title 180×18px + desc 2 lines + button 120×36px

Contact Details:
  - Left: 5 contact rows (icon 20×20px + text 200×16px)
  - Right: map placeholder 400×400px

Form (optional):
  - 4 input fields + 1 textarea + submit button
```

---

## Part 3: Shared Loading Component

### `components/ui/Skeleton.tsx`

```tsx
// Reusable skeleton component with variants

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  count?: number; // For multiple lines
}

// Variants:
// - text: 100% width, 16px height, 4px radius
// - circular: equal width/height, 50% radius
// - rectangular: 8px radius
// - rounded: 12px radius (cards)
```

### `components/ui/SkeletonCard.tsx`

```tsx
// Pre-built skeleton for service cards, blog cards, etc.

interface SkeletonCardProps {
  type: 'service' | 'blog' | 'testimonial' | 'pricing';
}
```

---

## Part 4: Implementation Notes

### Next.js Loading Convention

```
app/
├── loading.tsx              # Global loading (used by Home, About, etc.)
├── services/
│   ├── loading.tsx          # Services Hub loading
│   └── [slug]/
│       └── loading.tsx      # Individual service loading
├── blog/
│   ├── loading.tsx          # Blog listing loading
│   └── [slug]/
│       └── loading.tsx      # Blog post loading
├── contact/
│   └── loading.tsx          # Contact loading
└── pricing/
    └── loading.tsx          # Pricing loading
```

**Rule:** Each route segment can have its own `loading.tsx`. Next.js automatically shows the nearest one while the page loads.

### Accessibility

- Skeletons must have `aria-busy="true"` on the container
- Screen readers should announce "Loading content..."
- No focusable elements inside skeletons
- Respect `prefers-reduced-motion`: disable shimmer animation, show static gray blocks

### Performance

- Skeletons render immediately (no JS delay)
- CSS-only animation (GPU accelerated)
- No layout shift — skeletons match final element dimensions exactly

---

*404 page and loading skeletons complete. Ready for implementation.*
