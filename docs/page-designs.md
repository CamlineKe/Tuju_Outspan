# Tuju Outspan Cyber Center — Per-Page Design Specifications

> **Companion to:** `design.md` (Unified Design System)  
> **Date:** August 2026  
> **Status:** Final

Each page below specifies exact background treatments, section layouts, component usage, and background texture rules. All values reference tokens from `design.md` and colors from `color-palette.md`.

**Icon usage:** All UI icons are Lucide outline icons (per `design.md` section 9). WhatsApp CTAs render with the `MessageCircle` icon, navigation arrows with `ArrowRight`, and contact rows with `MapPin`, `Clock`, `Phone`, `Mail`, and `Globe`. Labels below are written without emoji; emojis are never used as UI icons.

---

## Page 1: Home (`/`)

### Overview
The conversion engine. Every section pushes toward WhatsApp contact. Visual rhythm alternates backgrounds to guide the eye downward.

---

#### Section 1: Navigation Bar

| Property | Value |
|----------|-------|
| **Background** | White (`#FFFFFF`) |
| **Position** | Fixed, top 0, z-index 100 |
| **Height** | 64px |
| **Border-bottom** | 1px solid Gray-200 |
| **On scroll** | White + `backdrop-filter: blur(12px)`, shadow-navy-sm |
| **Logo** | TO mark (32×32px, Navy-900 bg, white text) + "TUJU OUTSPAN" text (Navy-900, 18px, weight 700) |
| **Nav links** | Gray-600, 14px, weight 500. Gap 28px. Hover: Navy-900. Active: Navy-900 + 2px Orange-500 underline |
| **CTA** | Primary Button (Small): "WhatsApp" (MessageCircle icon) — Orange-500 bg, white text |
| **Mobile** | Hamburger icon (24px, Navy-900). Full-screen overlay menu. Slide from right, 300ms ease-out |

**Background texture:** None. Pure white. Clean, unobtrusive.

---

#### Section 2: Hero

| Property | Value |
|----------|-------|
| **Background** | Navy-900 (`#0A1F44`) |
| **Padding** | 120px 24px (desktop), 80px 24px (mobile) |
| **Text-align** | Center |

**Background texture — INTENTIONAL GLOW:**
```
Position: absolute, top: -50%, right: -20%
Size: 600px × 600px circle
Fill: radial-gradient(circle, rgba(242,101,34,0.06) 0%, transparent 70%)
Pointer-events: none
Z-index: 0
```
This is the ONLY decorative background element on the entire site. Purpose: Creates depth, subtly draws eye toward CTA side. Opacity capped at 6%. No animation.

**Content layer (z-index: 1):**
- **Overline:** "YOUR HUSTLE. OUR TECH. MADE EASY." — Orange-400, 13px, weight 600, letter-spacing 2px, uppercase
- **Headline:** "All Your Digital & Government Services — Handled Professionally" — White, Display size (48px→32px mobile), weight 700, max-width 700px, centered
- **Subheadline:** "From KRA and HELB to design and printing. Fast, reliable, and affordable at Ikonge–Ekerenyo Stage." — Gray-400, Body-large (18px), max-width 560px, centered
- **CTAs:** Primary Button "Chat on WhatsApp" (MessageCircle icon) + Outline Button "Explore Services" (ArrowRight icon) (white border, white text)
- **Trust bar:** 3 items horizontal, centered, gap 32px. Each: Orange-500 dot (6px) + text (Gray-400, 14px, weight 500). Items: "Fast Turnaround", "Trusted by Locals", "Open Daily Until Late"

---

#### Section 3: Services Preview

| Property | Value |
|----------|-------|
| **Background** | White (`#FFFFFF`) |
| **Padding** | 80px 24px |

**Section Header:**
- Overline: "WHAT WE DO" — Orange-500
- Title: "All Services at One Desk" — Navy-900, H2
- Description: "Everything you need, professionally handled at one trusted cyber center." — Gray-600

**Grid:** 7 cards, `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, gap 20px, max-width 1100px

**Service Card Component:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Padding: 28px
- Icon container: 44×44px, Navy-50 bg, 10px radius, centered icon (24px, Navy-900)
- Title: H4 (20px, 600), Navy-900, margin-top 16px
- List: 3 items, Body-small (14px), Gray-600, Orange-500 bullet
- Link: "View Details" (ArrowRight icon) — Navy-700, 14px, weight 600. Arrow shifts right 4px on hover

**Hover effect:** Border → Navy-800, translateY(-4px), shadow-navy-md. Transition 0.3s ease-out.

**Background texture:** None. White cards on white bg. Card borders create structure.

---

#### Section 4: Why Choose Us

| Property | Value |
|----------|-------|
| **Background** | Gray-50 (`#F8F9FA`) |
| **Padding** | 80px 24px |

**Section Header:**
- Overline: "WHY US"
- Title: "Why Tuju Outspan?"

**Grid:** 4 columns (desktop), 2 columns (tablet), 1 column (mobile). Gap 24px. Max-width 1000px.

**Why Card Component:**
- Text-align: center
- Padding: 32px 20px
- Icon: 56×56px, White bg, 2px Gray-200 border, 14px radius, centered icon (24px, Navy-900)
- Title: H4 (16px, 700), Navy-900, margin-bottom 8px
- Description: Body-small (14px), Gray-600, line-height 1.5

**Hover:** Icon border → Orange-500, bg → Orange-50. Transition 0.3s.

**Background texture:** None. Solid Gray-50 creates subtle separation from white services section above.

---

#### Section 5: How It Works (Process)

| Property | Value |
|----------|-------|
| **Background** | White (`#FFFFFF`) |
| **Padding** | 80px 24px |

**Section Header:**
- Overline: "HOW IT WORKS"
- Title: "Simple as 1-2-3"

**Layout:** 3 steps horizontal, centered, gap 48px. Max-width 900px.

**Connecting Line (desktop only):**
```
Position: absolute
Top: 28px (centered on step numbers)
Left: 20%, Right: 20%
Height: 2px
Background: Gray-200
Z-index: 0
```

**Step Component:**
- Number: 56×56px circle, White bg, 2px Orange-500 border, centered text (20px, weight 700, Orange-500)
- Title: H4 (16px, 700), Navy-900, margin-top 16px
- Description: Body-small (14px), Gray-600

**Background texture:** None. White bg. The connecting line is structural, not decorative.

---

#### Section 6: Testimonials

| Property | Value |
|----------|-------|
| **Background** | Navy-50 (`#E8EEF7`) |
| **Padding** | 80px 24px |

**Section Header:**
- Overline: "TESTIMONIALS"
- Title: "What Our Clients Say"

**Grid:** 3 columns (desktop), 1 column (mobile). Gap 20px. Max-width 1000px.

**Testimonial Card:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Padding: 28px
- Stars: Orange-500, 16px, letter-spacing 2px
- Quote: Body (16px), italic, Gray-700, line-height 1.6
- Author: Body-small (14px), weight 700, Navy-900
- Service: Caption (13px), Gray-400

**Background texture:** None. Navy-50 is warm and trustworthy without being dark.

---

#### Section 7: Location Strip

| Property | Value |
|----------|-------|
| **Background** | Navy-900 (`#0A1F44`) |
| **Padding** | 20px 24px |
| **Layout** | Flex, centered, gap 48px, wrap |

**Items:**
- **Ikonge–Ekerenyo Stage**, Chuka University (MapPin icon) — White (strong), Gray-400 (location)
- **Open Daily** Until Late (Clock icon)
- **0715 616 633** (Phone icon)

Font: 14px, weight 500. Icons implicit (can use Lucide map-pin, clock, phone).

**Background texture:** None. Solid Navy-900. Clean, authoritative bar.

---

#### Section 8: Final CTA Banner

| Property | Value |
|----------|-------|
| **Background** | Orange-500 (`#F26522`) |
| **Padding** | 72px 24px |
| **Text-align** | Center |

**Content:**
- Headline: "Ready to Get Started?" — White, H1 (36px), weight 700
- Subtext: "One WhatsApp message is all it takes." — White at 85% opacity, Body-large (17px)
- CTA: Primary Button inverted — White bg, Navy-900 text, "Chat on WhatsApp" (MessageCircle icon)

**Background texture:** None. Solid Orange-500. The color itself is the statement. No patterns needed — the boldness of the orange creates impact.

---

#### Section 9: Footer

| Property | Value |
|----------|-------|
| **Background** | Navy-900 (`#0A1F44`) |
| **Padding** | 64px 24px 24px |

**Grid:** 4 columns — Brand (1.5fr), Quick Links (1fr), Services (1fr), Contact (1.5fr). Gap 40px.

**Brand column:**
- Logo: White version (TO mark + "TUJU OUTSPAN")
- Description: Gray-400, 14px
- Tagline: Orange-400, 13px, weight 600

**Quick Links & Services columns:**
- Header: White, 14px, weight 700, letter-spacing 0.5px
- Links: Gray-400, 14px. Hover: White

**Contact column:**
- Phone: "0715 616 633" (Phone icon) — White (strong)
- Email, Location, Hours: Gray-400
- Social buttons: Navy-800 bg, White text, 8px radius. "WhatsApp Group" (MessageCircle icon) and "WhatsApp Channel" (Megaphone icon)

**Bottom bar:**
- Border-top: 1px Navy-800
- Margin-top: 40px, padding-top: 20px
- Text: "Online services available countrywide • Your Hustle. Our Tech. Made Easy." — Gray-400, 13px, centered

**Background texture:** None. Solid Navy-900. The grid structure creates visual organization.

---

## Page 2: About (`/about`)

### Overview
Trust multiplier. Humanizes the brand. Warm, personal tone.

---

#### Section 1: Page Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Breadcrumb** | Home > About — Gray-400, 14px. "Home" is link (White, underlined on hover). "About" is current (Gray-400) |
| **Title** | "About Tuju Outspan" — White, H1 (36px), centered |
| **Subtitle** | "The story, mission, and people behind your trusted cyber center." — Gray-400, Body-large, centered, max-width 560px |

**Background texture:** Same subtle radial glow as Home hero (Orange at 6% opacity, top-right).

---

#### Section 2: Origin Story

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 80px 24px |
| **Layout** | 2 columns (desktop): Text left (60%), Photo right (40%). Stacked on mobile. |

**Text column:**
- Overline: "OUR STORY" — Orange-500
- Title: "Why We Started" — Navy-900, H2
- Body: 3–4 paragraphs, Body (16px), Gray-600, line-height 1.7. Story of the gap in reliable cyber services, the mission, the community focus.

**Photo column:**
- Aspect ratio: 3:4 (portrait)
- Border-radius: 12px
- Object-fit: cover
- Placeholder: Navy-50 bg with camera icon + "[Founder photo]" text

**Background texture:** None. White bg. The photo provides visual interest.

---

#### Section 3: Mission & Values

| Property | Value |
|----------|-------|
| **Background** | Gray-50 |
| **Padding** | 80px 24px |

**Section Header:**
- Overline: "WHAT WE STAND FOR"
- Title: "Our Mission & Values"

**Grid:** 4 value cards, 2×2 on desktop, 1 column on mobile. Gap 24px.

**Value Card:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Padding: 32px
- Icon: 48×48px, Orange-50 bg, 10px radius, icon (24px, Orange-500)
- Title: H4 (18px, 600), Navy-900
- Body: Body (16px), Gray-600, line-height 1.6

Values: Accessibility, Integrity, Speed, Community.

**Background texture:** None. Solid Gray-50. Cards on gray create subtle depth.

---

#### Section 4: The Face Behind the Brand

| Property | Value |
|----------|-------|
| **Background** | Navy-50 |
| **Padding** | 80px 24px |
| **Layout** | Centered, max-width 800px |

**Content:**
- Photo: 200×200px circle, border 4px White, shadow-navy-md
- Name: H3 (24px, 700), Navy-900, centered
- Role: Body (16px), Gray-600, centered
- Bio: 2–3 sentences, Body (16px), Gray-600, centered, max-width 600px

**Background texture:** None. Navy-50 is warm and personal.

---

#### Section 5: Community Impact

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 80px 24px |
| **Layout** | Centered text block, max-width 720px |

**Content:**
- Overline: "OUR IMPACT"
- Title: "Rooted in Chuka. Serving Kenya." — H2, Navy-900
- Body: Narrative about serving Chuka University students, local businesses, and nationwide online clients. Body (16px), Gray-600.
- Stats row (optional, when data available): 3 stats in a row. Large number (H1, Orange-500) + label (Caption, Gray-600).

**Background texture:** None.

---

#### Section 6: CTA

| Property | Value |
|----------|-------|
| **Background** | Orange-50 |
| **Padding** | 64px 24px |
| **Text-align** | Center |

**Content:**
- Title: "Want to Work with Us?" — H3, Navy-900
- Subtext: "We're one message away." — Body, Gray-600
- CTA: Primary Button "Chat on WhatsApp" (MessageCircle icon)

**Background texture:** None. Orange-50 is warm and inviting without being aggressive.

---

## Page 3: Services Hub (`/services`)

### Overview
Clean directory. Gateway to 7 category pages. Search-first if implemented.

---

#### Section 1: Page Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Breadcrumb** | Home > Services |
| **Title** | "Our Services" — White, H1 |
| **Subtitle** | "Everything you need, professionally handled at one trusted cyber center." — Gray-400 |

**Background texture:** Same subtle radial glow.

---

#### Section 2: Search Bar (Optional)

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 32px 24px 0 |
| **Position** | Negative margin (-24px) to overlap header slightly, or flush below |

**Search Input:**
- Full width, max-width 600px, centered
- Height: 56px
- Border: 1px Gray-200
- Border-radius: 12px
- Left icon: Search (20px, Gray-400)
- Placeholder: "What do you need help with? (e.g., KRA, HELB, CV...)"
- Focus: Border Orange-500, shadow Orange-100

**Background texture:** None.

---

#### Section 3: Services Grid

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 48px 24px 80px |

**Grid:** Same as Home services grid. 7 cards.

**Card enhancement (vs Home):**
- 4–5 service items listed (vs 3 on Home)
- "View Details" link (ArrowRight icon) more prominent
- Category icon slightly larger (28px)

**Background texture:** None.

---

#### Section 4: Can't Find It Banner

| Property | Value |
|----------|-------|
| **Background** | Navy-50 |
| **Padding** | 48px 24px |
| **Text-align** | Center |

**Content:**
- Title: "Looking for Something Else?" — H4, Navy-900
- Subtext: "We probably do it. Just ask." — Body, Gray-600
- CTA: Primary Button "Ask on WhatsApp" (MessageCircle icon)

**Background texture:** None.

---

## Pages 4–10: Service Category Pages (`/services/[slug]`)

### Overview
All 7 service category pages share the **ServiceCategoryTemplate**. Layout is identical; only content changes.

**Template structure:**

---

#### Section 1: Page Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Breadcrumb** | Home > Services > {Category Name} |
| **Title** | "{Category Name} Services" — White, H1 |
| **Subtitle** | Category-specific value prop — Gray-400, Body-large |

**Background texture:** Same subtle radial glow.

---

#### Section 2: Service Breakdown

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 80px 24px |
| **Layout** | 2 columns (desktop): List left (60%), Visual right (40%) |

**List column:**
- Overline: "WHAT WE OFFER"
- Title: "{Category} Services" — H2, Navy-900
- Service list: Each item is a row:
  - Icon: Check circle (20px, Orange-500)
  - Service name: H5 (18px, 600), Navy-900
  - Description: Body-small (14px), Gray-600
  - Divider: 1px Gray-100 between items

**Visual column:**
- Category icon (large, 120px, Navy-50 bg, 20px radius)
- OR: Photo relevant to category (e.g., printed banner for Design, computer for IT)
- Border-radius: 12px

**Background texture:** None.

---

#### Section 3: How It Works

| Property | Value |
|----------|-------|
| **Background** | Gray-50 |
| **Padding** | 80px 24px |

Same 3-step process as Home, but with category-specific copy.

**Background texture:** None.

---

#### Section 4: FAQ

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 80px 24px |
| **Layout** | Single column, max-width 720px, centered |

**Section Header:**
- Overline: "FAQ"
- Title: "Common Questions" — H2

**FAQ Item Component:**
- Question: H5 (18px, 600), Navy-900. Chevron icon right (rotates on open)
- Answer: Body (16px), Gray-600, line-height 1.6. Hidden by default, expands on click.
- Border-bottom: 1px Gray-200
- Padding: 20px 0

**Accordion behavior:**
- Only one open at a time (optional)
- Animation: Height 0 → auto, 300ms ease-out
- Chevron rotation: 0° → 180°, 250ms ease

**Background texture:** None.

---

#### Section 5: Pricing Note

| Property | Value |
|----------|-------|
| **Background** | Orange-50 |
| **Padding** | 48px 24px |
| **Text-align** | Center |

**Content:**
- Title: "Transparent Pricing" — H4, Navy-900
- Text: "Rates vary by service complexity. No hidden fees. Get an exact quote on WhatsApp." — Body, Gray-600
- CTA: Primary Button "Get a Quote" (MessageCircle icon)

**Background texture:** None. Orange-50 signals "action" without being the CTA banner.

---

#### Section 6: Related Services

| Property | Value |
|----------|-------|
| **Background** | Navy-50 |
| **Padding** | 64px 24px |

**Section Header:**
- Title: "You Might Also Need" — H3, Navy-900

**Grid:** 2–3 related category cards. Same card component as Services Hub, but smaller (compact variant).

**Background texture:** None.

---

#### Section 7: Sticky WhatsApp CTA (Mobile Only)

| Property | Value |
|----------|-------|
| **Background** | White |
| **Position** | Fixed, bottom 0 |
| **Padding** | 12px 24px |
| **Border-top** | 1px Gray-200 |
| **Shadow** | 0 -4px 12px rgba(10,31,68,0.08) |
| **Content** | Full-width Primary Button "Get Help on WhatsApp" (MessageCircle icon) |

Visible only on mobile (<768px). Desktop uses floating button + in-page CTAs.

**Background texture:** None.

---

## Page 11: Pricing (`/pricing`)

### Overview
Transparency builds trust. Framework pricing with clear "ask for quote" CTA.

---

#### Section 1: Page Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Breadcrumb** | Home > Pricing |
| **Title** | "Pricing" — White, H1 |
| **Subtitle** | "No hidden fees. Fair, transparent rates for every service." — Gray-400 |

**Background texture:** Same subtle radial glow.

---

#### Section 2: Pricing Philosophy

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 48px 24px |
| **Layout** | Centered text block, max-width 640px |

**Content:**
- Text: "We believe in honest pricing. Rates depend on service complexity, urgency, and volume. Below are starting estimates — confirm your exact quote on WhatsApp." — Body (16px), Gray-600, centered

**Background texture:** None.

---

#### Section 3: Pricing Cards

| Property | Value |
|----------|-------|
| **Background** | Gray-50 |
| **Padding** | 64px 24px 80px |

**Grid:** 3 columns (desktop), 1 column (mobile). Gap 24px. Max-width 1000px.

**Pricing Card Component:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Padding: 32px
- Top accent: 4px height, Orange-500 (full width, top of card)
- Category name: H4 (20px, 600), Navy-900
- Description: Body-small (14px), Gray-600
- Price: H2 (32px, 700), Navy-900. Prefix "from" in Caption, Gray-400
- Feature list: 4–5 items, Check icon (Orange-500) + Body-small text
- CTA: Full-width Primary Button (Small) "Get Quote"

**Featured card (center):**
- Border: 2px Orange-500
- Shadow: shadow-orange
- Badge: "Most Popular" — Orange-500 bg, White text, 6px radius, Caption size

**Background texture:** None.

---

#### Section 4: Bulk & Student Discounts

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 64px 24px |
| **Layout** | Centered, max-width 600px |

**Content:**
- Icon: Tag (32px, Orange-500)
- Title: "Special Rates Available" — H3, Navy-900
- Text: "Students get discounted rates. Bulk orders enjoy volume discounts. Mention it when you contact us." — Body, Gray-600
- CTA: Outline Button "Ask About Discounts" (MessageCircle icon)

**Background texture:** None.

---

#### Section 5: Payment Methods

| Property | Value |
|----------|-------|
| **Background** | Navy-50 |
| **Padding** | 48px 24px |
| **Layout** | Centered |

**Content:**
- Title: "Payment Options" — H4, Navy-900
- Methods: M-Pesa (primary), Cash for walk-ins. Simple icons + labels.

**Background texture:** None.

---

#### Section 6: FAQ

Same FAQ component as Service Category pages.

---

## Page 12: Contact (`/contact`)

### Overview
The closer. WhatsApp-first. All channels clearly presented.

---

#### Section 1: Page Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Breadcrumb** | Home > Contact |
| **Title** | "Contact Us" — White, H1 |
| **Subtitle** | "We're one message away. Reach out however works best for you." — Gray-400 |

**Background texture:** Same subtle radial glow.

---

#### Section 2: Primary WhatsApp CTA

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 64px 24px 48px |
| **Layout** | Centered, max-width 500px |

**Card Component:**
- Background: White
- Border: 2px WhatsApp (`#25D366`)
- Border-radius: 16px
- Padding: 40px
- Shadow: 0 8px 32px rgba(37,211,102,0.15)
- Icon: WhatsApp logo (48px)
- Title: "Chat with Us on WhatsApp" — H3, Navy-900
- Number: "0715 616 633" — H2 (28px, 700), Navy-900
- Subtext: "Fastest way to get help. Usually responds within minutes." — Body-small, Gray-600
- CTA: Full-width button, WhatsApp green bg, White text, "Start Chat" (MessageCircle icon)

**Background texture:** None.

---

#### Section 3: WhatsApp Community Links

| Property | Value |
|----------|-------|
| **Background** | Gray-50 |
| **Padding** | 48px 24px |
| **Layout** | 2 columns (desktop), 1 column (mobile). Gap 24px. Max-width 800px. |

**Community Card Component:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Padding: 28px
- Icon: Group or Broadcast icon (32px, Navy-900)
- Title: H4 (18px, 600), Navy-900
- Description: Body-small (14px), Gray-600
- CTA: Outline Button (Small) "Join Now"

Cards:
1. "Join Our WhatsApp Group" — Community Q&A, tips, peer support
2. "Join Our WhatsApp Channel" — Announcements, new services, updates

**Background texture:** None.

---

#### Section 4: Contact Details & Map

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 64px 24px |
| **Layout** | 2 columns (desktop): Details left (45%), Map right (55%). Stacked on mobile. |

**Details column:**
- Overline: "GET IN TOUCH"
- Title: "Other Ways to Reach Us" — H3, Navy-900
- Contact items (stacked, gap 20px):
  - Phone: "0715 616 633" (Phone icon) — H5, Navy-900. Label: "Call or WhatsApp" — Caption, Gray-400
  - Email: "rafaeeltuju902@gmail.com" (Mail icon) — H5, Navy-900
  - Location: "Ikonge–Ekerenyo Stage, Chuka University" (MapPin icon) — H5, Navy-900
  - Hours: "Open Daily Until Late" (Clock icon) — H5, Navy-900
  - Reach: "Online services available countrywide" (Globe icon) — H5, Navy-900

**Map column:**
- Google Maps embed
- Border-radius: 12px
- Height: 400px
- Border: 1px Gray-200

**Background texture:** None.

---

#### Section 5: Quick Inquiry Form (Optional)

| Property | Value |
|----------|-------|
| **Background** | Navy-50 |
| **Padding** | 64px 24px |
| **Layout** | Centered, max-width 560px |

**Section Header:**
- Title: "Send Us a Message" — H3, Navy-900
- Subtext: "Prefer email? Fill this out and we'll get back to you." — Body, Gray-600

**Form fields:**
- Name: Text input
- Phone: Text input
- Service Needed: Select dropdown (7 categories + "Other")
- Message: Textarea
- Submit: Primary Button "Send Message"

**Visual priority:** Secondary to WhatsApp. Form is for desktop users who prefer typing.

**Background texture:** None.

---

## Page 13: Blog (`/blog`)

### Overview
SEO content hub. Clean, readable, content-focused.

---

#### Section 1: Page Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Breadcrumb** | Home > Blog |
| **Title** | "Blog & Guides" — White, H1 |
| **Subtitle** | "Tips, how-tos, and updates to make your digital life easier." — Gray-400 |

**Background texture:** Same subtle radial glow.

---

#### Section 2: Featured Post

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 48px 24px 32px |

**Featured Card:**
- Layout: Horizontal (desktop) — Image left (50%), Content right (50%)
- Image: 16:9 aspect ratio, border-radius 12px
- Category tag: Orange-50 bg, Orange-500 text, 6px radius, Caption size
- Title: H3 (24px, 700), Navy-900
- Excerpt: Body (16px), Gray-600, 2 lines max
- Meta: Date + read time — Caption, Gray-400
- CTA: "Read More" (ArrowRight icon) — Navy-700, 14px, weight 600

**Background texture:** None.

---

#### Section 3: Category Filter

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 0 24px 32px |
| **Layout** | Horizontal scroll on mobile, flex wrap on desktop |

**Filter tabs:**
- Default: "All" — active state
- Items: Government, Education, Health, Tech Tips, Design, Career
- Active: Navy-900 bg, White text, 8px radius
- Inactive: White bg, Gray-600 text, 1px Gray-200 border
- Hover: Gray-50 bg

**Background texture:** None.

---

#### Section 4: Blog Grid

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 0 24px 80px |

**Grid:** `repeat(auto-fit, minmax(320px, 1fr))`, gap 24px.

**Blog Card Component:**
- Background: White
- Border: 1px Gray-200
- Border-radius: 12px
- Overflow: hidden
- Image: 16:9, top of card
- Content padding: 24px
- Category tag: Orange-50 bg, Orange-500 text
- Title: H4 (18px, 600), Navy-900, 2 lines max
- Excerpt: Body-small (14px), Gray-600, 3 lines max
- Meta: Date + read time — Caption, Gray-400
- Hover: translateY(-4px), shadow-navy-md, border Navy-800

**Background texture:** None.

---

#### Section 5: Pagination / Load More

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 0 24px 64px |
| **Layout** | Centered |

**Load More Button:**
- Outline Button (Navy-900 border)
- "Load More Articles"
- On click: Append next 6 cards with fade-in animation

**Background texture:** None.

---

#### Section 6: WhatsApp Channel CTA

| Property | Value |
|----------|-------|
| **Background** | Orange-50 |
| **Padding** | 48px 24px |
| **Layout** | Centered |

**Content:**
- Title: "Get Updates on WhatsApp" — H4, Navy-900
- Subtext: "Join our channel for the latest tips and service updates." — Body, Gray-600
- CTA: Outline Button "Join WhatsApp Channel" (Megaphone icon)

**Background texture:** None.

---

## Page 14: Blog Post (`/blog/[slug]`)

### Overview
Long-form reading. Content is king. Minimal UI chrome.

---

#### Section 1: Article Header

| Property | Value |
|----------|-------|
| **Background** | Navy-900 |
| **Padding** | 80px 24px 60px |
| **Layout** | Centered, max-width 720px |

**Content:**
- Category tag: Orange-500, Caption size
- Title: H1 (36px→28px mobile), White, weight 700
- Meta row: Date + "•" + read time + "•" + author — Gray-400, Caption

**Background texture:** Same subtle radial glow.

---

#### Section 2: Featured Image

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 0 |
| **Image** | Full width, max-height 500px, object-fit cover |

**Background texture:** None.

---

#### Section 3: Article Content

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 48px 24px 80px |
| **Layout** | Single column, max-width 680px, centered |

**Typography:**
- Body: 18px (larger than standard for readability), Gray-700, line-height 1.8
- H2 within article: 28px, Navy-900, weight 700, margin-top 48px
- H3 within article: 22px, Navy-900, weight 600, margin-top 32px
- Lists: Orange-500 bullet, Body size
- Blockquotes: Left border 4px Orange-500, Navy-50 bg, italic, padding 20px 24px
- Links: Navy-600, underline on hover
- Images within article: Full width, 12px radius, margin 32px 0

**Inline CTA:**
- Appears after 2nd paragraph and near end
- Background: Navy-50
- Border-radius: 10px
- Padding: 20px 24px
- Text: "Need help with this? Chat with us on WhatsApp." — Body, Navy-900
- CTA: Small Primary Button "Chat Now" (MessageCircle icon)

**Background texture:** None.

---

#### Section 4: Author Box

| Property | Value |
|----------|-------|
| **Background** | Gray-50 |
| **Padding** | 32px 24px |
| **Layout** | Centered, max-width 680px |

**Content:**
- Avatar: 64×64px circle, Navy-50 bg with "TO" text
- Name: "Tuju Outspan Team" — H5, Navy-900
- Bio: "Your trusted cyber center in Chuka. Fast, reliable, affordable." — Body-small, Gray-600
- CTA: "Ask a Question" (MessageCircle icon) — Text link, Navy-600

**Background texture:** None.

---

#### Section 5: Related Articles

| Property | Value |
|----------|-------|
| **Background** | White |
| **Padding** | 64px 24px |
| **Layout** | Centered, max-width 1000px |

**Section Header:**
- Title: "You Might Also Like" — H3, Navy-900

**Grid:** 3 cards. Same Blog Card component as Blog page.

**Background texture:** None.

---

#### Section 6: Share

| Property | Value |
|----------|-------|
| **Background** | Navy-50 |
| **Padding** | 32px 24px |
| **Layout** | Centered |

**Content:**
- Text: "Found this helpful? Share it." — Body, Gray-600
- Buttons: WhatsApp share, Copy link

**Background texture:** None.

---

## Global Background Texture Summary

| Page | Sections with Texture | Texture Type | Purpose |
|------|----------------------|--------------|---------|
| **All pages** | Hero / Page header ONLY | Subtle radial glow (Orange, 6% opacity) | Depth, draws eye to CTA |
| **All pages** | All other sections | NONE — solid colors only | Cleanliness, readability, speed |

### The Golden Rule

> **If a background is not solid white, gray-50, navy-50, orange-50, or navy-900, it does not exist on this website.**

No patterns. No textures. No gradients (except the single radial glow). No decorative shapes. No abstract art. No geometric overlays.

The design sells through **clarity, hierarchy, and intentional color** — not through decoration.

---

*End of per-page design specifications.*
