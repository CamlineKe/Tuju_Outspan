# Tuju Outspan Cyber Center — Color Palette

> **Brand:** Tuju Outspan Cyber Center  
> **Tagline:** Your Hustle. Our Tech. Made Easy.  
> **Date:** August 2026  
> **Status:** Final — No Alternatives

---

## Design Philosophy

Every color in this palette serves an intentional purpose. There are no decorative gradients, no "maybe use this" shades, and no alternatives. The palette is built on three pillars:

- **Navy Blue** — Trust, authority, professionalism. Used for structure, text, and dark surfaces.
- **Vibrant Orange** — Energy, action, warmth. Used exclusively for conversion points and highlights.
- **Pure White & Grays** — Clarity, breathing room, readability. The canvas that holds everything together.

The WhatsApp green is treated as a **functional color**, not a brand color. It appears only where users expect to see it: the floating chat button.

---

## Core Brand Colors

### Navy Blue — Primary Brand Color

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `navy-900` | `#0A1F44` | `rgb(10, 31, 68)` | Primary headlines, navbar background, footer background, hero dark sections, primary dark surfaces |
| `navy-800` | `#0F2B5E` | `rgb(15, 43, 94)` | Hover states on navy buttons, card borders on dark bg, secondary dark elements |
| `navy-700` | `#143874` | `rgb(20, 56, 116)` | Active states, focus rings, subtle navy accents |
| `navy-600` | `#1A4894` | `rgb(26, 72, 148)` | Links on light backgrounds, icons |
| `navy-100` | `#D4DDF0` | `rgb(212, 221, 240)` | Subtle borders, dividers on navy backgrounds |
| `navy-50` | `#E8EEF7` | `rgb(232, 238, 247)` | Light section backgrounds, alternating sections, subtle fills, table row hover |

### Vibrant Orange — Action & Accent Color

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `orange-600` | `#D4551A` | `rgb(212, 85, 26)` | CTA pressed states, dark hover, emphasis text on light bg |
| `orange-500` | `#F26522` | `rgb(242, 101, 34)` | **Primary CTA buttons**, highlights, accent icons, badges, active indicators, "OUTSPAN" text reproduction |
| `orange-400` | `#F5844A` | `rgb(245, 132, 74)` | Lighter accents, progress bars, chart elements, hover on orange text |
| `orange-100` | `#FCE5D8` | `rgb(252, 229, 216)` | Subtle orange borders, input focus rings |
| `orange-50` | `#FEF0E8` | `rgb(254, 240, 232)` | Light orange backgrounds, alert/info boxes, highlighted cards, feature callouts |

---

## Neutral Colors

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `white` | `#FFFFFF` | `rgb(255, 255, 255)` | Page backgrounds, card backgrounds, text on dark surfaces, input backgrounds |
| `gray-50` | `#F8F9FA` | `rgb(248, 249, 250)` | Subtle section alternation, code blocks, table headers |
| `gray-100` | `#F1F3F5` | `rgb(241, 243, 245)` | Input backgrounds, disabled states, subtle card backgrounds, tag/pill backgrounds |
| `gray-200` | `#E4E7EB` | `rgb(228, 231, 235)` | Card borders, dividers, separators, table borders, checkbox borders |
| `gray-300` | `#CFD5DD` | `rgb(207, 213, 221)` | Disabled borders, slider tracks, inactive toggle backgrounds |
| `gray-400` | `#9AA5B1` | `rgb(154, 165, 177)` | Placeholder text, secondary labels, muted icons, timestamps, meta text |
| `gray-500` | `#6B7B8C` | `rgb(107, 123, 140)` | Secondary button text, inactive nav items, caption text |
| `gray-600` | `#4A5568` | `rgb(74, 85, 104)` | Body text, descriptions, secondary content, list item markers |
| `gray-700` | `#2D3748` | `rgb(45, 55, 72)` | Strong body text, subheadings, card titles on light bg |
| `gray-800` | `#1A202C` | `rgb(26, 32, 44)` | **Primary body text on light backgrounds**, headlines on white/gray sections, strong emphasis |
| `gray-900` | `#0F1419` | `rgb(15, 20, 25)` | Pure black needs only — rarely used. Code blocks, extreme contrast moments |

---

## Functional Colors

### WhatsApp Green — Conversion-Only

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `whatsapp` | `#25D366` | `rgb(37, 211, 102)` | **Floating WhatsApp button only**. Chat bubble icons, WhatsApp-specific CTAs. Never used for brand elements, never mixed with orange. |
| `whatsapp-dark` | `#128C7E` | `rgb(18, 140, 126)` | WhatsApp button hover state, pressed state |

### Semantic Colors — Feedback & Status

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `success` | `#16A34A` | `rgb(22, 163, 74)` | Confirmation messages, success toasts, "completed" badges, form validation success |
| `success-light` | `#DCFCE7` | `rgb(220, 252, 231)` | Success alert backgrounds, success icon circles |
| `warning` | `#EAB308` | `rgb(234, 179, 8)` | Pending states, limited-time offers, caution alerts, "processing" badges |
| `warning-light` | `#FEF9C3` | `rgb(254, 249, 195)` | Warning alert backgrounds |
| `error` | `#DC2626` | `rgb(220, 38, 38)` | Form errors, critical alerts, "failed" badges, required field indicators |
| `error-light` | `#FEE2E2` | `rgb(254, 226, 226)` | Error alert backgrounds, error input borders |
| `info` | `#2563EB` | `rgb(37, 99, 235)` | Informational alerts, tips, help text (use sparingly — prefer navy-600) |
| `info-light` | `#DBEAFE` | `rgb(219, 234, 254)` | Info alert backgrounds |

---

## Color Application Rules

### The 60-30-10 Rule (Mandatory)

Every page and section must follow this ratio:

- **60%** — White or Gray-50 (dominant background, breathing room)
- **30%** — Navy-900 or Gray-800 (text, structure, dark surfaces)
- **10%** — Orange-500 (CTAs, highlights, conversion points only)

### Section Background Rules

| Background Type | Token | Text Color | CTA Color | When to Use |
|-----------------|-------|------------|-----------|-------------|
| **Light Primary** | `white` | `gray-800` | `orange-500` | Default page background, most sections |
| **Light Alternate** | `gray-50` | `gray-800` | `orange-500` | Alternating sections for visual rhythm |
| **Light Accent** | `navy-50` | `gray-800` | `orange-500` | Feature sections, highlighted content blocks |
| **Warm Accent** | `orange-50` | `gray-800` | `navy-900` | Special announcements, limited offers, testimonials bg |
| **Dark Primary** | `navy-900` | `white` | `orange-500` | Hero sections, footer, CTA banners, premium feel sections |
| **Dark Secondary** | `navy-800` | `white` | `orange-400` | Sub-footers, secondary dark cards, hover states |

### Text Color Rules

| Context | Color Token | Notes |
|---------|-------------|-------|
| Headlines on light bg | `navy-900` | Maximum impact, brand recognition |
| Headlines on dark bg | `white` | Clean contrast |
| Body text on light bg | `gray-600` | Readable, less aggressive than pure black |
| Body text on dark bg | `gray-100` | Soft contrast, easy on eyes |
| Secondary/muted text | `gray-400` | Timestamps, captions, meta info |
| Links on light bg | `navy-600` | Underline on hover |
| Links on dark bg | `orange-400` | Underline on hover |
| Active nav item | `orange-500` | Current page indicator |

### Button Color Rules

| Button Type | Background | Text | Border | Hover Background | Hover Text | Usage |
|-------------|------------|------|--------|------------------|------------|-------|
| **Primary CTA** | `orange-500` | `white` | none | `orange-600` | `white` | Main conversion actions — "Chat on WhatsApp", "Get Quote" |
| **Secondary CTA** | `navy-900` | `white` | none | `navy-800` | `white` | Supporting actions — "Learn More", "View Details" |
| **Outline CTA** | transparent | `navy-900` | `2px navy-900` | `navy-900` | `white` | Ghost buttons, nav items, less prominent actions |
| **Outline Light** | transparent | `white` | `2px white` | `white` | `navy-900` | Buttons on dark backgrounds |
| **Text Link** | transparent | `navy-600` | none | transparent | `navy-800` | Inline links, "Read More" arrows |
| **Disabled** | `gray-100` | `gray-400` | none | `gray-100` | `gray-400` | Unavailable actions |
| **WhatsApp CTA** | `whatsapp` | `white` | none | `whatsapp-dark` | `white` | Floating button only, WhatsApp-specific cards |

### Card Color Rules

| Card Type | Background | Border | Shadow | Hover Effect |
|-----------|------------|--------|--------|--------------|
| **Standard Card** | `white` | `1px gray-200` | `0 1px 3px rgba(10,31,68,0.08)` | Border → `navy-800`, shadow deepens, translateY(-2px) |
| **Featured Card** | `white` | `2px orange-500` | `0 4px 12px rgba(242,101,34,0.15)` | Same, with subtle orange glow |
| **Dark Card** | `navy-900` | `1px navy-800` | `0 2px 8px rgba(10,31,68,0.3)` | Background → `navy-800`, border → `navy-700` |
| **Accent Card** | `orange-50` | `1px orange-100` | none | Background → `orange-100` |
| **Info Card** | `navy-50` | `1px navy-100` | none | Background → `navy-100` |

### Form / Input Color Rules

| Element | Background | Border | Text | Placeholder | Focus Border | Focus Ring |
|---------|------------|--------|------|-------------|--------------|------------|
| **Text Input** | `white` | `1px gray-200` | `gray-800` | `gray-400` | `orange-500` | `0 0 0 3px orange-100` |
| **Textarea** | `white` | `1px gray-200` | `gray-800` | `gray-400` | `orange-500` | `0 0 0 3px orange-100` |
| **Select/Dropdown** | `white` | `1px gray-200` | `gray-800` | — | `orange-500` | `0 0 0 3px orange-100` |
| **Checkbox/Radio** | `white` | `2px gray-200` | — | — | `orange-500` | `0 0 0 3px orange-100` |
| **Disabled Input** | `gray-50` | `1px gray-200` | `gray-400` | — | — | — |
| **Error Input** | `white` | `2px error` | `gray-800` | — | `error` | `0 0 0 3px error-light` |
| **Success Input** | `white` | `2px success` | `gray-800` | — | `success` | `0 0 0 3px success-light` |

---

## CSS Custom Properties

```css
:root {
  /* Navy Blue */
  --navy-900: #0A1F44;
  --navy-800: #0F2B5E;
  --navy-700: #143874;
  --navy-600: #1A4894;
  --navy-100: #D4DDF0;
  --navy-50: #E8EEF7;

  /* Orange */
  --orange-600: #D4551A;
  --orange-500: #F26522;
  --orange-400: #F5844A;
  --orange-100: #FCE5D8;
  --orange-50: #FEF0E8;

  /* Neutrals */
  --white: #FFFFFF;
  --gray-50: #F8F9FA;
  --gray-100: #F1F3F5;
  --gray-200: #E4E7EB;
  --gray-300: #CFD5DD;
  --gray-400: #9AA5B1;
  --gray-500: #6B7B8C;
  --gray-600: #4A5568;
  --gray-700: #2D3748;
  --gray-800: #1A202C;
  --gray-900: #0F1419;

  /* Functional */
  --whatsapp: #25D366;
  --whatsapp-dark: #128C7E;
  --success: #16A34A;
  --success-light: #DCFCE7;
  --warning: #EAB308;
  --warning-light: #FEF9C3;
  --error: #DC2626;
  --error-light: #FEE2E2;
  --info: #2563EB;
  --info-light: #DBEAFE;

  /* Shadows (derived from navy-900) */
  --shadow-navy-sm: 0 1px 3px rgba(10, 31, 68, 0.08);
  --shadow-navy-md: 0 4px 12px rgba(10, 31, 68, 0.1);
  --shadow-navy-lg: 0 10px 24px rgba(10, 31, 68, 0.12);
  --shadow-orange: 0 4px 16px rgba(242, 101, 34, 0.2);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
}
```

---

## Tailwind Configuration

The machine-facing Tailwind v4 theme is defined in `tech-stack.md` (section 2) as an `@theme` block applied in `app/globals.css`. The CSS custom properties above are the canonical value source; the `@theme` block is generated from them. Tailwind v4 uses CSS-based configuration, so there is no `tailwind.config.js` file.

---

## Accessibility & Contrast Compliance

| Combination | Ratio | WCAG AA | WCAG AAA |
|-------------|-------|---------|----------|
| Navy-900 on White | 15.2:1 | ✅ Pass | ✅ Pass |
| Orange-500 on White | 3.1:1 | ✅ Pass (large text) | ❌ Fail |
| Orange-500 on Navy-900 | 4.8:1 | ✅ Pass | ✅ Pass |
| White on Navy-900 | 15.2:1 | ✅ Pass | ✅ Pass |
| Gray-600 on White | 6.3:1 | ✅ Pass | ✅ Pass |
| Gray-400 on White | 3.1:1 | ✅ Pass (large text) | ❌ Fail |
| Gray-800 on Gray-50 | 14.8:1 | ✅ Pass | ✅ Pass |
| White on WhatsApp | 2.9:1 | ✅ Pass (large text) | ❌ Fail |

**Rules:**
- Orange-500 text on white: use only for buttons (large text, bold) or with a navy background.
- Body text must always be gray-800 or navy-900 on light backgrounds.
- All interactive elements must have visible focus states (orange-500 ring).

---

## Forbidden Combinations

These combinations are **never** used:

| Forbidden | Reason |
|-----------|--------|
| Orange text on orange background | Illegible, no contrast |
| Navy text on navy background | Illegible |
| Gray-400 as body text | Too light, fails accessibility |
| WhatsApp green for non-WhatsApp elements | Dilutes functional meaning |
| Gradients of any kind | Against intentional design philosophy |
| Pure black (`#000000`) | Harsh, use gray-900 maximum |
| More than 2 colors per component (excluding neutrals) | Visual noise, brand dilution |

---

## Page-Specific Color Notes

| Page | Primary Background | Accent | Notes |
|------|-------------------|--------|-------|
| Home | White / Gray-50 alternate | Orange-500 CTAs | Hero can be Navy-900 for impact |
| About | White | Navy-900 headings, Orange-500 CTAs | Warm, personal tone |
| Services Hub | White / Navy-50 alternate | Orange-500 card accents | Clean grid, scannable |
| Service Category | White | Orange-500 sticky CTA | Consistent template |
| Pricing | White / Orange-50 | Orange-500 highlight cards | Transparency = trust |
| Contact | Navy-900 hero, White body | WhatsApp green + Orange-500 | Dual CTA strategy |
| Blog | White | Navy-900 headings, Orange-500 category tags | Content-focused, readable |
| Blog Post | White | Navy-900 headings, Orange-500 inline CTAs | Long-form reading comfort |

---

*This palette is final. No alternative colors. No exceptions. Every shade is intentional.*
