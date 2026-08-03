# Tuju Outspan Cyber Center — Unified Design System

> **Version:** 1.0  
> **Date:** August 2026  
> **Status:** Final — No Alternatives  
> **Applies to:** All 14 pages

---

## 1. Design Philosophy

### Core Principle: Intentional Minimalism

Every visual decision serves a purpose. No decorative elements exist for their own sake. The design sells, builds trust, and converts. Three rules govern everything:

1. **Clarity over decoration** — Information hierarchy is immediate. Users know where to look and what to do within 3 seconds.
2. **Consistency over creativity** — Same patterns, same spacing, same interactions across every page. Familiarity breeds trust.
3. **Conversion over complexity** — Every element either guides the user to WhatsApp or builds the confidence to do so.

### Brand Voice in Design

- **Professional but approachable** — Clean lines, warm orange accents, human copy
- **Local but capable** — Chuka roots, nationwide reach. No generic "global corporate" feel.
- **Fast and reliable** — Snappy interactions, clear process steps, no ambiguity

---

## 2. Color System

> **Full palette reference:** `color-palette.md`

### Usage Rules (Non-Negotiable)

| Rule | Implementation |
|------|----------------|
| **60-30-10 Ratio** | 60% white/light gray background, 30% navy/gray text and structure, 10% orange for CTAs and highlights |
| **No gradients** | Solid colors only. Every background is a flat, intentional choice. |
| **No decorative backgrounds** | No abstract shapes, no blobs, no geometric patterns that don't serve a function. |
| **WhatsApp green isolation** | `#25D366` appears ONLY on the floating button and WhatsApp-specific CTAs. Never mixed into brand palette. |
| **Maximum 2 colors per component** | Navy + orange, or navy + white, or orange + white. Never all three fighting for attention. |

### Section Background Strategy

Sections alternate backgrounds to create visual rhythm without adding decoration:

| Section # | Background | Text Color | CTA Color |
|-----------|------------|------------|-----------|
| 1 (Hero) | Navy-900 | White | Orange-500 |
| 2 | White | Gray-800 | Orange-500 |
| 3 | Gray-50 | Gray-800 | Orange-500 |
| 4 | White | Gray-800 | Orange-500 |
| 5 | Navy-50 | Gray-800 | Orange-500 |
| 6 (CTA Banner) | Orange-500 | White | Navy-900 (inverted) |
| 7 (Footer) | Navy-900 | White/Gray-400 | Orange-500 |

**Rule:** Never place two identical backgrounds next to each other. Every section must contrast with its neighbors.

**Adopted page rhythm:** Every page opens with the navy-900 header and closes with the navy-900 footer. Interior sections alternate between white, gray-50, navy-50, and orange-50 with no two identical backgrounds adjacent. Bold orange-500 CTA banners close the Home and About pages with an inverted white button; softer orange-50 accents are used for pricing notes and the blog channel CTA. The blog grid and services hub grid use gray-50 so their white cards stand out. No decorative patterns, textures, or gradients are used anywhere; visual interest comes from photos, cards, and motion.

---

## 3. Typography System

### Font Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

Inter is chosen for: clarity at small sizes, excellent Kenyan character support, professional feel, and strong geometric structure that pairs well with the brand's clean aesthetic.

### Type Scale

| Token | Size | Line Height | Weight | Letter Spacing | Usage |
|-------|------|-------------|--------|----------------|-------|
| `display` | 48px / 3rem | 1.1 | 700 (Bold) | -0.02em | Hero headlines only |
| `h1` | 36px / 2.25rem | 1.2 | 700 | -0.01em | Page titles, major sections |
| `h2` | 32px / 2rem | 1.25 | 700 | -0.01em | Section headlines |
| `h3` | 24px / 1.5rem | 1.3 | 600 (Semibold) | 0 | Card titles, sub-sections |
| `h4` | 20px / 1.25rem | 1.4 | 600 | 0 | Feature titles, list headers |
| `h5` | 18px / 1.125rem | 1.4 | 600 | 0 | Small headings, footer titles |
| `body-large` | 18px / 1.125rem | 1.6 | 400 | 0 | Hero subtext, lead paragraphs |
| `body` | 16px / 1rem | 1.6 | 400 | 0 | Standard body text |
| `body-small` | 14px / 0.875rem | 1.5 | 400 | 0 | Descriptions, card text |
| `caption` | 13px / 0.8125rem | 1.4 | 500 (Medium) | 0.02em | Labels, tags, meta info |
| `overline` | 12px / 0.75rem | 1.4 | 600 | 0.15em | Section labels, uppercase tags |

### Responsive Typography

| Breakpoint | Display | H1 | H2 | Body |
|------------|---------|-----|-----|------|
| Desktop (≥1024px) | 48px | 36px | 32px | 16px |
| Tablet (768–1023px) | 40px | 32px | 28px | 16px |
| Mobile (≤767px) | 32px | 28px | 24px | 15px |

### Text Color Hierarchy

| Level | Color Token | Usage |
|-------|-------------|-------|
| Primary | Navy-900 on light / White on dark | Headlines, important labels |
| Secondary | Gray-800 on light / Gray-100 on dark | Body text, descriptions |
| Tertiary | Gray-600 on light / Gray-400 on dark | Supporting text, captions |
| Quaternary | Gray-400 on light / Gray-500 on dark | Meta, timestamps, placeholders |
| Accent | Orange-500 | Links on hover, active states, highlights |

---

## 4. Spacing System

### Base Unit: 4px

All spacing values are multiples of 4. No exceptions.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps, icon padding |
| `space-2` | 8px | Inline spacing, small gaps |
| `space-3` | 12px | Button padding vertical, compact gaps |
| `space-4` | 16px | Standard padding, card internal spacing |
| `space-5` | 20px | Medium gaps, form field spacing |
| `space-6` | 24px | Section internal padding, grid gaps |
| `space-8` | 32px | Large gaps, section padding |
| `space-10` | 40px | Major section breaks |
| `space-12` | 48px | Section vertical padding |
| `space-16` | 64px | Hero padding, large sections |
| `space-20` | 80px | Maximum section spacing |

### Section Spacing

- **Standard section:** `padding: 80px 0` (desktop), `padding: 56px 0` (mobile)
- **Hero section:** `padding: 120px 0` (desktop), `padding: 80px 0` (mobile)
- **CTA banner:** `padding: 72px 0`
- **Footer:** `padding: 64px 0 24px`

### Container Widths

| Container | Max Width | Padding |
|-----------|-----------|---------|
| Full | 100% | 24px sides |
| Content | 1200px | 24px sides |
| Narrow | 800px | 24px sides |
| Text | 640px | 24px sides |

### Grid System

- **12-column grid** for complex layouts
- **CSS Grid** for card grids (auto-fit, minmax)
- **Flexbox** for single-row layouts (navbars, icon rows)
- **Gap standard:** 20px–24px between grid items

---

## 5. Component Specifications

### 5.1 Buttons

#### Primary Button (Orange)

```
Background: Orange-500
Text: White
Font: 15px, weight 600
Padding: 14px 32px
Border-radius: 10px
Border: none
Shadow: 0 4px 16px rgba(242,101,34,0.2)

Hover:
  Background: Orange-600
  Transform: translateY(-2px)
  Shadow: 0 6px 20px rgba(242,101,34,0.25)

Active:
  Transform: translateY(0)
  Shadow: 0 2px 8px rgba(242,101,34,0.2)

Focus:
  Outline: 3px solid Orange-100
  Outline-offset: 2px
```

#### Secondary Button (Navy)

```
Background: Navy-900
Text: White
Font: 15px, weight 600
Padding: 14px 32px
Border-radius: 10px
Border: none

Hover:
  Background: Navy-800
  Transform: translateY(-2px)
```

#### Outline Button (Ghost)

```
Background: Transparent
Text: Navy-900 (on light) / White (on dark)
Font: 15px, weight 600
Padding: 14px 32px
Border-radius: 10px
Border: 2px solid current color

Hover:
  Background: Navy-900 (on light) / White (on dark)
  Text: White (on light) / Navy-900 (on dark)
```

#### WhatsApp Button (Floating)

```
Background: WhatsApp (#25D366)
Text: White
Size: 56px × 56px
Border-radius: 50%
Position: Fixed, bottom 24px, right 24px
Shadow: 0 4px 16px rgba(37,211,102,0.4)
Z-index: 999

Hover:
  Transform: scale(1.1)
  Shadow: 0 6px 24px rgba(37,211,102,0.5)
```

#### Button Sizes

| Size | Padding | Font | Usage |
|------|---------|------|-------|
| Small | 10px 20px | 14px | Compact UIs, table actions |
| Medium | 14px 32px | 15px | Default, most CTAs |
| Large | 18px 40px | 16px | Hero CTAs, high-emphasis |

---

### 5.2 Cards

#### Standard Service Card

```
Background: White
Border: 1px solid Gray-200
Border-radius: 12px
Padding: 28px
Shadow: none (default)

Hover:
  Border-color: Navy-800
  Transform: translateY(-4px)
  Shadow: 0 8px 24px rgba(4,29,70,0.1)
  Transition: all 0.3s ease

Icon area:
  Size: 44px × 44px
  Background: Navy-50
  Border-radius: 10px
  Centered icon

Title:
  Font: H4 (20px, 600)
  Color: Navy-900
  Margin-top: 16px

List items:
  Font: Body-small (14px)
  Color: Gray-600
  Bullet: Orange-500 dot
  Gap: 4px between items

Link:
  Font: Body-small (14px), weight 600
  Color: Navy-700
  Arrow icon that shifts right on hover
```

#### Testimonial Card

```
Background: White
Border: 1px solid Gray-200
Border-radius: 12px
Padding: 28px

Stars:
  Color: Orange-500
  Size: 16px
  Letter-spacing: 2px

Quote:
  Font: Body (16px), italic
  Color: Gray-700
  Line-height: 1.6

Author:
  Font: Body-small (14px), weight 700
  Color: Navy-900

Service tag:
  Font: Caption (13px)
  Color: Gray-400
```

#### Pricing Card

```
Background: White
Border: 1px solid Gray-200
Border-radius: 12px
Padding: 32px

Featured variant:
  Border: 2px solid Orange-500
  Shadow: 0 4px 16px rgba(242,101,34,0.15)
  Top accent bar: 4px Orange-500

Header:
  Category name: H4 (20px, 600), Navy-900
  Description: Body-small, Gray-600

Price:
  Font: H2 (32px, 700), Navy-900
  Prefix "from": Caption, Gray-400
  Suffix "/service": Body-small, Gray-400

Feature list:
  Check icon: Orange-500
  Text: Body-small, Gray-600
  Gap: 12px between items

CTA:
  Full-width button at bottom
```

---

### 5.3 Forms & Inputs

#### Text Input

```
Background: White
Border: 1px solid Gray-200
Border-radius: 10px
Padding: 12px 16px
Font: Body (16px)
Color: Gray-800
Placeholder: Gray-400

Focus:
  Border-color: Orange-500
  Box-shadow: 0 0 0 3px Orange-100

Error:
  Border-color: Error (#DC2626)
  Box-shadow: 0 0 0 3px Error-light
```

#### Textarea

Same as text input, but:
- Min-height: 120px
- Resize: vertical only

#### Select/Dropdown

Same as text input, with:
- Custom arrow icon (chevron-down, Navy-600)
- Dropdown panel: White, Gray-200 border, 10px radius
- Option hover: Navy-50 background

#### Checkbox / Radio

```
Size: 20px × 20px
Border: 2px solid Gray-200
Border-radius: 4px (checkbox) / 50% (radio)
Background: White

Checked:
  Background: Orange-500
  Border-color: Orange-500
  Checkmark: White

Focus:
  Box-shadow: 0 0 0 3px Orange-100
```

---

### 5.4 Navigation

#### Desktop Navbar

```
Position: Fixed, top 0
Background: Navy-900 (default) / Navy-900 with blur (scrolled)
Border-bottom: 1px solid Navy-800
Height: 96px (mobile) / 112px (desktop)
Padding: 0 24px
Z-index: 100

Logo:
  Image: /images/logo/logo-footer.png (white version)
  Height: 72px (mobile) / 96px (desktop)
  Aspect: 3.97:1, margins trimmed
  Alt: 'Tuju Outspan Cyber Center'
  Links to: Home

Nav links:
  Home, Services, Pricing, About, Blog, Contact
  Font: 14px, weight 500
  Color: Gray-400
  Gap: 28px

Nav link hover:
  Color: White

Active link:
  Color: White
  Underline: 2px Orange-500, offset 4px

CTA button:
  Same as Primary Button (Small size)
```

#### Mobile Navbar

```
Hamburger icon: 24px, White
Menu overlay: Navy-900, full-screen
Menu items: H3 size, stacked vertically
Close button: Top right, 24px, White
Menu header: Logo image (about 80px tall)
Animation: Slide from right, 300ms ease-out
```

#### Scroll Behavior

```
On scroll > 50px:
  Background: Navy-900 with backdrop-filter: blur(12px)
  Shadow: 0 1px 3px rgba(4,29,70,0.08)
  Transition: all 0.3s ease
```

---

### 5.5 Footer

```
Background: Navy-900
Padding: 64px 24px 24px

Grid: 4 columns (desktop), 2 columns (tablet), 1 column (mobile)
Gap: 40px

Brand column:
  Logo: White version (logo-footer.png), 48px tall
  Alt: 'Tuju Outspan Cyber Center'
  Description: Gray-400, 14px
  Tagline: Orange-400, 13px, weight 600

Column headers:
  Font: 14px, weight 700, White
  Letter-spacing: 0.5px
  Margin-bottom: 16px

Links:
  Font: 14px, weight 400
  Color: Gray-400
  Margin-bottom: 10px

Link hover:
  Color: White
  Transition: color 0.2s

Social buttons:
  Background: Navy-800
  Color: White
  Padding: 8px 14px
  Border-radius: 8px
  Font: 13px, weight 600

Social hover:
  Background: Navy-700

Bottom bar:
  Border-top: 1px solid Navy-800
  Margin-top: 40px
  Padding-top: 20px
  Text-align: center
  Font: 13px, Gray-400
```

---

## 6. Layout Patterns

### 6.1 Section Structure

Every section follows this template:

```
<section class="section-name">
  <div class="container">

    <!-- Section Header (always present) -->
    <div class="section-header">
      <span class="overline">Category Label</span>
      <h2>Section Title</h2>
      <p>Section description, max 2 lines</p>
    </div>

    <!-- Content Area -->
    <div class="section-content">
      <!-- Cards, grids, lists, etc. -->
    </div>

    <!-- Optional CTA -->
    <div class="section-cta">
      <a href="#" class="btn-primary">Action</a>
    </div>

  </div>
</section>
```

### 6.2 Section Header

```
Text-align: center (default) / left (alternate pages)
Margin-bottom: 48px

Overline:
  Font: Overline (12px, 600, uppercase)
  Color: Orange-500
  Letter-spacing: 0.15em
  Margin-bottom: 12px

Title:
  Font: H2 (32px, 700)
  Color: Navy-900 (on light) / White (on dark)
  Margin-bottom: 12px
  Max-width: 600px (centered)

Description:
  Font: Body (16px)
  Color: Gray-600 (on light) / Gray-400 (on dark)
  Max-width: 520px
  Margin: 0 auto
```

### 6.3 Grid Patterns

| Pattern | Columns | Gap | Usage |
|---------|---------|-----|-------|
| Services Grid | auto-fit, minmax(280px, 1fr) | 20px | Service cards, blog cards |
| Features Grid | repeat(4, 1fr) | 24px | Why Choose Us, process steps |
| Testimonials | repeat(3, 1fr) | 20px | Review cards |
| Footer | 1.5fr 1fr 1fr 1.5fr | 40px | Footer columns |
| Pricing | repeat(3, 1fr) | 24px | Pricing cards |

**Responsive:** All grids collapse to 2 columns on tablet, 1 column on mobile.

### 6.4 Hero Layout

```
Background: Navy-900
Text-align: center
Padding: 120px 24px (desktop), 80px 24px (mobile)

Optional: Subtle radial gradient overlay
  Position: absolute, top-right
  Size: 600px circle
  Color: rgba(242,101,34,0.06)
  Purpose: Adds depth without decoration

Content:
  Overline (orange-400): Tagline
  H1 (white): Main headline, max 700px
  Body-large (gray-400): Subheadline, max 560px
  CTAs: Primary + Secondary buttons
  Trust bar: 3 items, flex, centered
```

---

## 7. Animation & Motion

### Philosophy

Motion communicates, not decorates. Every animation has a purpose:
- **Guide attention** — Draw eyes to CTAs
- **Provide feedback** — Confirm interactions
- **Reduce perceived load time** — Skeleton screens, staggered reveals

### Timing Tokens

| Token | Duration | Usage |
|-------|----------|-------|
| `duration-fast` | 150ms | Hover states, color changes |
| `duration-base` | 250ms | Transforms, opacity |
| `duration-slow` | 350ms | Page transitions, modals |
| `duration-entrance` | 500ms | Scroll reveals, hero animations |

### Easing Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | cubic-bezier(0, 0, 0.2, 1) | Entrances, reveals |
| `ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) | General transitions |
| `ease-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | Playful bounces (cards) |

### Standard Animations

#### Card Hover

```css
.service-card {
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.2s ease;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(4,29,70,0.1);
  border-color: var(--navy-800);
}
```

#### Button Hover

```css
.btn-primary {
  transition: background 0.2s ease, transform 0.25s ease-out, box-shadow 0.25s ease-out;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(242,101,34,0.25);
}
.btn-primary:active {
  transform: translateY(0);
}
```

#### Scroll Reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Trigger:** Intersection Observer at 10% visibility threshold.
**Stagger:** 100ms delay between sibling elements.

#### Navbar Scroll

```css
.navbar {
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 3px rgba(4,29,70,0.08);
}
```

#### Page Transition (Next.js)

```css
.page-enter {
  opacity: 0;
  transform: translateY(8px);
}
.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0;
  transition: opacity 0.2s ease-in;
}
```

### What NOT to Animate

- No parallax scrolling — distracting, hurts performance
- No auto-playing carousels — users miss content, feels pushy
- No loading spinners longer than 2s — skeleton screens instead
- No bounce animations on page load — feels unprofessional
- No particle effects, confetti, or decorative motion

---

## 8. Background & Texture Rules

### Core Rule

Every background is **intentional and functional**. No textures, no patterns, no gradients that don't serve a purpose.

### Allowed Backgrounds

| Type | Implementation | When to Use |
|------|----------------|-------------|
| **Solid White** | `#FFFFFF` | Default page background, card backgrounds |
| **Solid Gray-50** | `#F8F9FA` | Section alternation, subtle differentiation |
| **Solid Navy-50** | `#E8EEF7` | Feature sections, highlighted content blocks |
| **Solid Orange-50** | `#FEF0E8` | Special announcements, limited offers, warm accents |
| **Solid Navy-900** | `#041D46` | Hero sections, footer, dark CTA banners |
| **Subtle Radial Glow** | `radial-gradient(circle, rgba(242,101,34,0.06) 0%, transparent 70%)` | Hero depth only. Single, positioned, low opacity. |

### Forbidden Backgrounds

| Type | Why Forbidden |
|------|---------------|
| Geometric patterns | Decorative, not functional |
| Abstract shapes/blobs | Distracting, trendy, not timeless |
| Mesh gradients | Overly complex, slow performance |
| Noise/texture overlays | Adds visual clutter |
| Image backgrounds (except hero) | Competes with content |
| Animated backgrounds | Distracting, unprofessional |
| Glassmorphism/blur panels | Hard to read, inconsistent |

### Hero Background Detail

The hero section is the ONLY place where a non-solid background element is allowed:

```css
.hero {
  background: var(--navy-900);
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(242,101,34,0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
```

**Rules for the glow:**
- Opacity never exceeds 8%
- Positioned off-center (not symmetrical)
- Single instance only
- No animation
- Purpose: Creates depth and draws subtle attention to the CTA side

---

## 9. Iconography

### Style

- **Outline style**, 1.5–2px stroke
- **24×24px** default size
- **Consistent corner radius** (2px for rounded icons)
- **Current color** — inherits text color

### Icon Sizes

| Size | Dimension | Usage |
|------|-----------|-------|
| Small | 16px | Inline text, tags |
| Medium | 20px | Buttons, form fields |
| Default | 24px | Navigation, cards |
| Large | 32px | Feature icons |
| XL | 44px | Service card icons (inside container) |

### Icon Colors

| Context | Color |
|---------|-------|
| On light bg, primary | Navy-900 |
| On light bg, secondary | Navy-600 |
| On dark bg | White |
| Accent/contextual | Orange-500 |
| Muted | Gray-400 |

### Icon Library

Use **Lucide React** or **Heroicons** (outline style). Avoid:
- Emojis as UI icons (unprofessional, inconsistent)
- Custom-drawn icons (unless necessary)
- Filled icons (outline is cleaner)
- Multi-color icons (breaks monochrome system)

---

## 10. Imagery & Photography

### Rules

1. **Real photos over stock** — Your space, your work, your face. Authenticity converts.
2. **Consistent treatment** — All photos get the same subtle treatment:
   - Slight contrast boost (+10%)
   - Slight saturation reduction (-5%)
   - No heavy filters
3. **Aspect ratios** — Consistent across sections:
   - Hero: 16:9 or 3:2
   - Cards: 4:3 or 1:1
   - Portraits: 3:4
   - Gallery: 1:1 or 4:3
4. **Lazy loading** — All below-fold images use `loading="lazy"`
5. **Alt text** — Descriptive, keyword-rich for SEO

### Image Placeholders

Until real photos are available:
- Use **solid Navy-50** backgrounds with icon + text
- Never use generic stock photo placeholders
- Label clearly: "[Your photo here]"

---

## 11. Responsive Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Single column, stacked layout, hamburger nav, reduced padding |
| Tablet | 640–1023px | 2-column grids, medium padding, condensed nav |
| Desktop | 1024–1279px | Full layout, standard padding |
| Wide | ≥ 1280px | Max-width containers centered, generous whitespace |

### Mobile-First Approach

All styles are written mobile-first. Breakpoints add complexity, never remove it.

```css
/* Mobile (default) */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### Touch Targets

All interactive elements must be ≥ 44×44px on touch devices.

---

## 12. Accessibility (A11y)

### Requirements

| Standard | Implementation |
|----------|----------------|
| **WCAG 2.1 AA** | Minimum compliance target |
| **Color contrast** | 4.5:1 for body text, 3:1 for large text/UI |
| **Focus states** | Visible focus rings on all interactive elements (Orange-100, 3px) |
| **Keyboard navigation** | Full tab order, skip links, logical flow |
| **Screen readers** | Semantic HTML, ARIA labels where needed, alt text on images |
| **Reduced motion** | Respect `prefers-reduced-motion` — disable animations |

### Focus Ring

```css
:focus-visible {
  outline: 3px solid var(--orange-100);
  outline-offset: 2px;
}
```

### Skip Link

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--navy-900);
  color: white;
  padding: 8px 16px;
  z-index: 1000;
}
.skip-link:focus { top: 0; }
```

---

## 13. SEO & Meta Patterns

### Page Title Template

```
{Page Name} | Tuju Outspan Cyber Center
```

Examples:
- `Home | Tuju Outspan Cyber Center`
- `Government Services | Tuju Outspan Cyber Center`
- `Contact Us | Tuju Outspan Cyber Center`

### Meta Description Template

```
{Service description} Fast, reliable, and affordable at Ikonge–Ekerenyo Stage. Chat with us on WhatsApp: 0715 616 633.
```

### Open Graph

```
og:title: {Page Title}
og:description: {Meta Description}
og:image: /images/og-default.jpg (1200×630px)
og:type: website
og:locale: en_KE
```

### Structured Data

Implement JSON-LD for:
- LocalBusiness (main entity)
- Service (per service page)
- FAQPage (service pages with FAQs)
- BlogPosting (blog articles)

---

## 14. WhatsApp Integration Patterns

### Pre-filled Message Links

```
https://wa.me/254715616633?text=Hi%20Tuju%20Outspan%2C%20I%20need%20help%20with%20{service}
```

### CTA Placement Rules

| Location | Minimum Count | Maximum Count |
|----------|---------------|---------------|
| Home page | 3 | 5 |
| Service category page | 3 | 4 |
| About page | 1 | 2 |
| Contact page | 2 | 3 |
| Blog post | 1 | 2 (inline) |

### Floating Button Behavior

- Always visible on scroll
- Hides when a modal is open
- Pulse animation on first visit (one time only, 2 seconds)
- Tooltip on hover: "Chat with us"

---

## 15. Component Architecture (Next.js)

The canonical project structure and component tree are maintained in `architecture.md` (section 5). This section is intentionally not duplicated here; the rules below remain part of the design contract.

### Component Rules

1. **Single responsibility** — Each component does one thing
2. **Props over state** — Prefer props for data, minimize local state
3. **Composition over configuration** — Build from small pieces
4. **Client components only when needed** — Use Server Components by default
5. **Reusable sections** — ServiceCategoryTemplate drives all 7 service pages

---

## 16. Quality Checklist

Before any page is marked complete, verify:

- [ ] Colors match palette exactly (no hardcoded hexes)
- [ ] Typography follows scale (no arbitrary sizes)
- [ ] Spacing uses token system (multiples of 4)
- [ ] All images have alt text
- [ ] All interactive elements have focus states
- [ ] Mobile layout tested (≤640px)
- [ ] Tablet layout tested (640–1023px)
- [ ] WhatsApp links work and have pre-filled messages
- [ ] Page transitions smooth
- [ ] No console errors
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- [ ] Load time < 2 seconds on 3G

---

*This design system is final. No alternatives. Every decision is intentional and serves conversion, trust, or clarity.*
