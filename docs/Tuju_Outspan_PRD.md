# Tuju Outspan Cyber Center — Website Product Requirements Document (PRD)

---

## 1. Introduction

Tuju Outspan Cyber Center is a full-service cyber and digital solutions provider based at Ikonge–Ekerenyo Stage, Chuka University area, with online services available countrywide. The website serves as the primary digital storefront to advertise services, build trust, and convert visitors into customers through WhatsApp as the main communication channel.

The design philosophy is **intentional, clean, and highly converting**. Every UI element, background pattern, and section placement serves a purpose — no decorative fluff, no generic gradients, no alternatives. The site must feel professional yet approachable, reflecting the brand's core promise: *"Your Hustle. Our Tech. Made Easy."*

The tech stack is **Next.js** with a component-based architecture, supporting static generation for performance and SEO. Each service category has its own dedicated slug page to capture specific search intent and drive targeted conversions.

---

## 2. Brand Foundation

| Element | Detail |
|---------|--------|
| **Brand Name** | Tuju Outspan Cyber Center |
| **Tagline** | Your Hustle. Our Tech. Made Easy. |
| **Core Promise** | Fast • Reliable • Affordable |
| **Primary Location** | Ikonge–Ekerenyo Stage, Chuka University |
| **Phone / WhatsApp** | 0715 616 633 |
| **Email** | rafaeeltuju902@gmail.com |
| **Hours** | Open daily until late |
| **Reach** | Local walk-ins + Online services countrywide |

---

## 3. Website Pages Overview

| # | Page | Route | Purpose |
|---|------|-------|---------|
| 1 | Home | `/` | The conversion engine. Communicates everything intentionally. |
| 2 | About | `/about` | Humanizes the brand. Builds trust through story and values. |
| 3 | Services Hub | `/services` | Directory of all 7 service categories. Gateway to detail pages. |
| 4 | Government Services | `/services/government` | Dedicated sales page for all government-related services. |
| 5 | Education Services | `/services/education` | Dedicated sales page for education-related services. |
| 6 | Health Services | `/services/health` | Dedicated sales page for health and social services. |
| 7 | Document Services | `/services/documents` | Dedicated sales page for document processing services. |
| 8 | Design & Branding | `/services/design-branding` | Dedicated sales page for creative and branding services. |
| 9 | Computer & IT | `/services/computer-it` | Dedicated sales page for tech support and training. |
| 10 | Online & Career | `/services/online-career` | Dedicated sales page for online and career support services. |
| 11 | Pricing | `/pricing` | Transparent pricing framework. Reduces friction. |
| 12 | Contact | `/contact` | Primary conversion closer. WhatsApp-first contact hub. |
| 13 | Blog | `/blog` | SEO-driven content hub. Guides, tips, and updates. |
| 14 | Blog Post | `/blog/[slug]` | Individual blog article pages. |

---

## 4. Page-by-Page Breakdown

---

### Page 1: Home (`/`)

The homepage is the single most important page. It must communicate trust, range of services, and clear next steps within seconds. Every section earns its place.

**Sections:**

1. **Navigation Bar** — Fixed top navbar. Logo left, nav links center (Services, Pricing, About, Blog, Contact), WhatsApp CTA button right. Mobile: hamburger menu.

2. **Hero Section** — Full-width, clean background (intentional subtle pattern or solid with depth). Large headline: "All Your Digital & Government Services — Handled Professionally." Subheadline: "From KRA and HELB to design and printing. Fast, reliable, and affordable at Ikonge–Ekerenyo Stage." Two CTAs: Primary orange "Chat on WhatsApp" button. Secondary navy "Explore Services" link. Trust badges below: "✓ Fast Turnaround | ✓ Trusted by Locals | ✓ Open Daily Until Late."

3. **Services Preview** — Section header: "All Services at One Desk." 7 category cards in a responsive grid (2×4 on desktop, 2×4 on tablet, 1 column mobile). Each card: category icon, name, top 3 services listed, "View Details →" link. Cards are clean with intentional hover states (subtle lift + shadow).

4. **Why Choose Us** — Section header: "Why Tuju Outspan?" 4 pillars in a row: Fast (clock icon — "Quick turnaround, no long queues"), Reliable (shield icon — "Support you can trust, every time"), Affordable (tag icon — "Fair, student-friendly prices"), Friendly (heart icon — "Professional help with a personal touch"). Each with icon, title, and one-line description.

5. **Process Steps** — Section header: "How It Works." 3-step horizontal flow: (1) "Message Us on WhatsApp" — describe your need; (2) "We Handle It" — our team processes your request professionally; (3) "Get Results" — receive your documents, approvals, or prints. Simple icons, connected by a subtle line. Reinforces ease.

6. **Social Proof / Testimonials** — Section header: "What Our Clients Say." 3 testimonial cards in a row. Each: quote text, client name, service used. Even if informal, authentic testimonials build massive trust. Placeholder for now — content to be added later.

7. **Location & Hours Strip** — Compact bar. Left: "📍 Ikonge–Ekerenyo Stage, Chuka University" | Center: "⏰ Open Daily Until Late" | Right: "📞 0715 616 633". Clean, scannable, reinforces accessibility.

8. **Final CTA Banner** — Full-width navy or orange banner. Headline: "Ready to Get Started?" Subtext: "One WhatsApp message is all it takes." Large WhatsApp button. No distractions.

9. **Footer** — 4-column layout: (1) Logo + tagline + brief description; (2) Quick Links (Home, Services, Pricing, About, Blog, Contact); (3) Services (7 category links); (4) Contact info (phone, email, location, hours) + Social links (WhatsApp Group, WhatsApp Channel). Bottom bar: copyright + "Online services available countrywide."

---

### Page 2: About (`/about`)

This page humanizes the brand. For a local service business, people buy from people they trust. The About page is a trust multiplier.

**Sections:**

1. **Page Header** — "About Tuju Outspan" with breadcrumb (Home > About). Clean, minimal.

2. **Origin Story** — Large text block with a photo of the founder/team (to be added). Headline: "Why We Started." Story: the gap in reliable, affordable cyber services around Chuka University. The mission to make tech and government services accessible to students, professionals, and the local community. Tone: authentic, warm, ambitious.

3. **Mission & Values** — Headline: "What We Stand For." 3–4 values with icons: Accessibility (tech for everyone), Integrity (no shortcuts, honest service), Speed (respect for your time), Community (rooted in Chuka, serving Kenya). Each with a short paragraph.

4. **The Face Behind the Brand** — Photo section. Image of the founder/team at the cyber center. Caption with name and role. Personal touch — critical for trust.

5. **Community Impact** — Stats or narrative: "Serving Chuka University students, local businesses, and clients countrywide through our online services." Reinforces both local roots and national reach.

6. **CTA Section** — "Want to work with us?" WhatsApp button + "We're one message away."

7. **Footer** — Same as homepage footer.

---

### Page 3: Services Hub (`/services`)

The directory. Clean, scannable, and designed to push visitors into specific service category pages.

**Sections:**

1. **Page Header** — "Our Services" with breadcrumb. Subheadline: "Everything you need, professionally handled at one trusted cyber center."

2. **Services Grid** — 7 category cards in a responsive grid. Each card: category icon (consistent style), category name, 4–5 key services listed as bullet points, "View Details →" link. Cards have intentional hover effects.

3. **Search / Quick Find** — Optional but recommended: a simple search bar at the top. "What do you need help with?" — typing "KRA" highlights the Government card, "HELB" highlights Education, etc. Reduces friction for users who know exactly what they want.

4. **Can't Find It Banner** — "Looking for something else? We probably do it." WhatsApp CTA. Covers edge cases.

5. **Footer** — Same as homepage.

---

### Page 4: Government Services (`/services/government`)

Dedicated sales page for all government-related services. Optimized for search intent like "KRA PIN registration Chuka" or "NTSA driving license application."

**Sections:**

1. **Page Header** — "Government Services" with breadcrumb (Home > Services > Government). Subheadline: "KRA, NTSA, eCitizen, passports, and more — handled fast and accurately."

2. **Service Breakdown** — Detailed list of all government services offered:
   - KRA PIN Registration
   - KRA PIN Updates
   - NIL Returns Filing
   - Tax Compliance Certificate (TCC)
   - eCitizen Services
   - NTSA Driving License Services
   - Smart DL Application
   - TIMS Account Services
   - Logbook Assistance
   - Vehicle Ownership Transfer
   - Passport Applications
   - Good Conduct Applications
   - Birth Certificate Applications
   - Civil Applications

   Each service as a clean list item with a brief one-line description of what's included.

3. **How It Works** — 3-step process specific to government services: (1) Send your details via WhatsApp, (2) We process and submit on your behalf, (3) Receive confirmation and documents. Reassures users who are anxious about handing over personal info.

4. **FAQ** — 4–5 common questions: "How long does KRA PIN registration take?" "What documents do I need for a passport?" "Is my information secure?" etc.

5. **Pricing Note** — "Rates vary by service complexity. Get an exact quote on WhatsApp." Transparent, no hidden fees promise.

6. **Related Services** — Cross-sell cards: "You might also need: Document Services (printing, scanning)" or "Education Services (HELB, KUCCPS)."

7. **Sticky WhatsApp CTA** — Prominent, repeated button: "Get a Quote on WhatsApp."

8. **Footer** — Same as homepage.

---

### Page 5: Education Services (`/services/education`)

Dedicated sales page for education-related services. Targets students, parents, and recent graduates.

**Sections:**

1. **Page Header** — "Education Services" with breadcrumb. Subheadline: "KUCCPS, HELB, and academic support made simple."

2. **Service Breakdown** — Detailed list:
   - KUCCPS Applications
   - KUCCPS Revision and Course Transfer
   - HELB Applications (First Time)
   - HELB Subsequent Loan Applications
   - HELB Appeals and Clearance
   - Results Checking and Verification
   - Academic Document Preparation

   Each with a brief description.

3. **How It Works** — 3 steps tailored for students: (1) Share your admission details or student info via WhatsApp, (2) We complete the application accurately, (3) Track and confirm your status.

4. **FAQ** — "When is the KUCCPS deadline?" "What do I need for my first HELB application?" "Can you help with appeals?"

5. **Pricing Note** — "Student-friendly rates. Ask for a quote on WhatsApp."

6. **Related Services** — Cross-sell: "You might also need: Online & Career Services (CV writing, job applications)" or "Document Services (printing, binding)."

7. **Sticky WhatsApp CTA** — "Get Help with Your Application."

8. **Footer** — Same as homepage.

---

### Page 6: Health Services (`/services/health`)

Dedicated sales page for health and social service registrations.

**Sections:**

1. **Page Header** — "Health & Social Services" with breadcrumb. Subheadline: "SHA, NSSF, NHIF, and health account support."

2. **Service Breakdown** — Detailed list:
   - SHA (Social Health Authority) Registration
   - SHA Updates and Changes
   - NSSF Services
   - NHIF Support and Applications
   - Health Application Assistance
   - Account Assistance and Troubleshooting

   Each with description.

3. **How It Works** — 3 steps: (1) Share your ID and details on WhatsApp, (2) We register or update your account, (3) Receive confirmation and next steps.

4. **FAQ** — "What's the difference between SHA and NHIF?" "How do I update my SHA details?" "How long does registration take?"

5. **Pricing Note** — "Affordable rates for all health services. Quote on WhatsApp."

6. **Related Services** — Cross-sell: "Document Services" for printing cards/certificates.

7. **Sticky WhatsApp CTA** — "Register or Update on WhatsApp."

8. **Footer** — Same as homepage.

---

### Page 7: Document Services (`/services/documents`)

Dedicated sales page for all document processing, printing, and preparation services.

**Sections:**

1. **Page Header** — "Document Services" with breadcrumb. Subheadline: "Printing, scanning, typing, binding, and more — professional quality, fast turnaround."

2. **Service Breakdown** — Detailed list:
   - Printing (black & white, color, large format)
   - Photocopying
   - Scanning and Digital Conversion
   - Lamination
   - Typing and Document Formatting
   - Binding (spiral, thermal, perfect)
   - Passport Photos (standard size, instant)
   - Birth Certificate Applications
   - Academic Document Preparation and Formatting

   Each with description.

3. **How It Works** — 3 steps: (1) Bring or send your document via WhatsApp/email, (2) We process with professional quality, (3) Pick up at Ikonge–Ekerenyo or receive digitally.

4. **FAQ** — "Do you print posters and banners?" "Can you type my handwritten notes?" "What binding options do you offer?"

5. **Pricing Note** — "Competitive per-page and per-item rates. Ask for a quote."

6. **Related Services** — Cross-sell: "Design & Branding" for custom posters, "Government Services" for birth certificates.

7. **Sticky WhatsApp CTA** — "Send Your Document on WhatsApp."

8. **Footer** — Same as homepage.

---

### Page 8: Design & Branding (`/services/design-branding`)

Dedicated sales page for creative services. Showcases visual work and attracts businesses, events, and individuals.

**Sections:**

1. **Page Header** — "Design & Branding" with breadcrumb. Subheadline: "Professional graphics, branding, and print-ready designs."

2. **Service Breakdown** — Detailed list:
   - Graphic Design and Logo Creation
   - Posters and Banners (all sizes)
   - Business Cards and Flyers
   - T-Shirt Printing and Custom Apparel
   - Branding and Rebranding Packages
   - Brochure and Menu Design
   - Social Media Graphics

   Each with description.

3. **Portfolio Gallery** — Grid of real work samples (to be added). Photos of printed banners, T-shirts, business cards, posters. This is critical — visual proof sells design services.

4. **How It Works** — 3 steps: (1) Describe your vision or send reference images on WhatsApp, (2) We design and share drafts for approval, (3) Receive print-ready files or physical prints.

5. **FAQ** — "How many revisions are included?" "Do you provide the source files?" "Can you handle bulk orders for events?"

6. **Pricing Note** — "Custom quotes based on project scope. Let's discuss on WhatsApp."

7. **Related Services** — Cross-sell: "Document Services" for printing, "Online & Career" for business email setup.

8. **Sticky WhatsApp CTA** — "Start Your Design Project on WhatsApp."

9. **Footer** — Same as homepage.

---

### Page 9: Computer & IT (`/services/computer-it`)

Dedicated sales page for tech support, software, and training services.

**Sections:**

1. **Page Header** — "Computer & IT Services" with breadcrumb. Subheadline: "From software installation to troubleshooting — we've got your tech covered."

2. **Service Breakdown** — Detailed list:
   - Computer Package Classes (basic to advanced)
   - Software Installation (Office, design tools, etc.)
   - Windows Installation and Setup
   - Data Backup and Recovery
   - Virus and Malware Removal
   - PC Troubleshooting and Repair
   - System Optimization

   Each with description.

3. **How It Works** — 3 steps: (1) Describe your issue or learning goal on WhatsApp, (2) We diagnose and propose a solution, (3) Fix completed or classes scheduled.

4. **FAQ** — "How long does a Windows installation take?" "Do you offer home visits?" "What computer packages do you teach?"

5. **Pricing Note** — "Service-based pricing. Get a quote on WhatsApp."

6. **Related Services** — Cross-sell: "Online & Career" for email setup, "Document Services" for printing manuals.

7. **Sticky WhatsApp CTA** — "Fix My Tech on WhatsApp."

8. **Footer** — Same as homepage.

---

### Page 10: Online & Career (`/services/online-career`)

Dedicated sales page for online services, career support, and digital literacy.

**Sections:**

1. **Page Header** — "Online & Career Services" with breadcrumb. Subheadline: "Email setup, CV writing, job applications, and online research — done right."

2. **Service Breakdown** — Detailed list:
   - Email Creation and Setup (Gmail, Outlook, business emails)
   - Online Applications (jobs, schools, programs)
   - Online Form Filling
   - CV Writing and Professional Editing
   - Job Application Support
   - Online Research and Data Collection
   - Social Media Account Setup

   Each with description.

3. **How It Works** — 3 steps: (1) Share your goal or document on WhatsApp, (2) We complete the online task or craft your CV, (3) Review, approve, and submit.

4. **FAQ** — "How long does CV writing take?" "Can you apply for jobs on my behalf?" "Do you help with scholarship applications?"

5. **Pricing Note** — "Affordable per-service rates. Quote on WhatsApp."

6. **Related Services** — Cross-sell: "Education Services" for HELB/KUCCPS, "Document Services" for printing CVs.

7. **Sticky WhatsApp CTA** — "Boost Your Career on WhatsApp."

8. **Footer** — Same as homepage.

---

### Page 11: Pricing (`/pricing`)

Transparency builds trust. Even without fixed prices, this page sets expectations.

**Sections:**

1. **Page Header** — "Pricing" with breadcrumb. Subheadline: "No hidden fees. Fair, transparent rates for every service."

2. **Pricing Philosophy** — Brief text: "We believe in honest pricing. Rates depend on service complexity, urgency, and volume. Below are starting estimates — confirm your exact quote on WhatsApp."

3. **Pricing Cards by Category** — 7 cards, one per category. Each card lists 3–5 popular services with "Starting from KSh XXX" or "Ask for quote" labels. Examples:
   - Government: "KRA PIN Registration — from KSh 200"
   - Documents: "A4 Printing — from KSh 10/page"
   - Design: "Business Cards — from KSh 500 (100 pcs)"
   - Computer: "Windows Installation — from KSh 1,500"
   - (Use realistic placeholder prices or "Ask for quote" where variable)

4. **Bulk & Student Discounts** — Highlight: "Students get special rates. Bulk orders enjoy discounts. Mention it on WhatsApp."

5. **Payment Methods** — M-Pesa accepted. Cash for walk-ins. Clear and simple.

6. **FAQ** — "Why don't you list exact prices for everything?" "Can I negotiate for bulk work?" "Do I pay before or after?"

7. **CTA** — Large WhatsApp button: "Get Your Exact Quote."

8. **Footer** — Same as homepage.

---

### Page 12: Contact (`/contact`)

The closer. WhatsApp-first, with all contact channels clearly presented.

**Sections:**

1. **Page Header** — "Contact Us" with breadcrumb. Subheadline: "We're one message away. Reach out however works best for you."

2. **Primary CTA — WhatsApp** — Large, prominent card: "Chat with Us on WhatsApp" with the number 0715 616 633. Click-to-chat link. Icon. This is the hero of the page.

3. **WhatsApp Community Links** — Two cards:
   - "Join Our WhatsApp Group" — for community Q&A, tips, and peer support.
   - "Join Our WhatsApp Channel" — for announcements, new services, and updates.
   (Links to be added once groups/channels are created)

4. **Contact Details Card** — Clean layout:
   - 📞 Phone / WhatsApp: 0715 616 633
   - 📧 Email: rafaeeltuju902@gmail.com
   - 📍 Location: Ikonge–Ekerenyo Stage, Chuka University
   - ⏰ Hours: Open Daily Until Late
   - 🌐 Reach: Online services available countrywide

5. **Map Embed** — Google Maps embed of Ikonge–Ekerenyo Stage area. Helps locals find the physical shop.

6. **Quick Inquiry Form (Optional)** — Simple form: Name, Phone, Service Needed, Message. Submits to email. But visually secondary to WhatsApp — the form is for users who prefer typing on desktop.

7. **CTA Banner** — "Prefer to visit? Walk in anytime — we're open daily until late."

8. **Footer** — Same as homepage.

---

### Page 13: Blog (`/blog`)

SEO content hub. Drives organic traffic and positions Tuju Outspan as a helpful resource.

**Sections:**

1. **Page Header** — "Blog & Guides" with breadcrumb. Subheadline: "Tips, how-tos, and updates to make your digital life easier."

2. **Featured Post** — Largest card at top. Most recent or most important article.

3. **Blog Grid** — Cards in a responsive grid. Each card: featured image, category tag, title, short excerpt, read time, date, "Read More" link.

4. **Categories Filter** — Tabs: All, Government, Education, Health, Tech Tips, Design, Career.

5. **Pagination or Load More** — For browsing older posts.

6. **Newsletter / Update Signup** — "Get updates via our WhatsApp Channel." Link to join.

7. **Footer** — Same as homepage.

---

### Page 14: Blog Post (`/blog/[slug]`)

Individual article pages.

**Sections:**

1. **Article Header** — Title, category tag, date, read time.

2. **Featured Image** — Full-width hero image for the article.

3. **Article Content** — Rich text body. Well-formatted with headings, lists, images, and callout boxes.

4. **Inline CTAs** — Within the article: "Need help with this? Chat with us on WhatsApp." Contextual, not intrusive.

5. **Related Articles** — "You might also like:" 3 related blog posts.

6. **Author Box** — "Written by Tuju Outspan Team" with brief bio and WhatsApp link.

7. **Share Buttons** — WhatsApp share, copy link.

8. **Footer** — Same as homepage.

---

## 5. Global Elements (Present on Every Page)

| Element | Description |
|---------|-------------|
| **Navbar** | Fixed top. Logo left, links center, WhatsApp CTA right. Transparent-to-solid on scroll. Mobile hamburger. |
| **WhatsApp Floating Button** | Sticky bottom-right button on all pages. Always visible. Click-to-chat. |
| **Footer** | 4-column layout. Consistent across all pages. |
| **Breadcrumbs** | On all non-home pages. Helps navigation and SEO. |
| **Page Transitions** | Smooth, subtle fade or slide between pages. |
| **SEO Meta Tags** | Unique title and description for every page. |
| **Open Graph Tags** | For social sharing previews. |
| **Favicon** | Tuju Outspan logo icon. |

---

## 6. WhatsApp Integration Strategy

WhatsApp is the primary conversion channel. It must be omnipresent but not annoying.

| Integration Point | Implementation |
|-------------------|----------------|
| **Floating Button** | Sticky bottom-right on all pages. Orange or green WhatsApp icon. Click = open chat with pre-filled message. |
| **Hero CTAs** | Primary button on Home and all service pages. |
| **Sticky Banner (mobile)** | On service pages, a bottom sticky bar: "Need help? Chat on WhatsApp." |
| **Service Page CTAs** | Repeated at top, middle (after service list), and bottom of each service page. |
| **Pre-filled Messages** | Links include pre-filled text: "Hi Tuju Outspan, I need help with [service name]." |
| **WhatsApp Group Link** | In Contact page and Footer. "Join our community." |
| **WhatsApp Channel Link** | In Contact page, Footer, and Blog. "Get updates." |

---

## 7. Social & Community Channels

| Channel | Status | Purpose | Page Placement |
|---------|--------|---------|----------------|
| WhatsApp Direct | ✅ Active | Primary conversion | Everywhere |
| WhatsApp Group | ⏳ To be created | Community Q&A, peer support | Contact page, Footer |
| WhatsApp Channel | ⏳ To be created | Broadcast updates, tips | Contact page, Footer, Blog |
| Email | ✅ Active | Formal inquiries, document sharing | Contact page, Footer |
| Facebook | ⏳ Optional future | Broader reach | Can add later |
| Instagram | ⏳ Optional future | Visual portfolio (design work) | Can add later |

**Recommendation:** Create the WhatsApp Group and Channel before launch. They cost nothing and build a direct relationship with customers.

---

## 8. Content Requirements (To Be Gathered)

| Content | Status | Needed For |
|---------|--------|------------|
| Testimonials (2–3) | ⏳ Pending | Home page, Social Proof section |
| Founder/Team Photo | ⏳ Pending | About page |
| Physical Space Photos | ⏳ Pending | About page, Gallery |
| Design Portfolio (printed work) | ⏳ Pending | Design & Branding page |
| Client Count / Stats | ❌ Not tracked | Can skip for now |
| Blog Articles | ⏳ Pending | Blog page — start with 3–5 posts |
| Exact Pricing | ⏳ Variable | Pricing page — use "starting from" or "ask for quote" |

---

## 9. Technical Notes

- **Framework:** Next.js (App Router recommended)
- **Styling:** Tailwind CSS or CSS Modules — clean, utility-first
- **Components:** Reusable sections and UI components (see Component Architecture below)
- **Images:** Next.js Image component for optimization
- **SEO:** Next.js Metadata API for titles, descriptions, Open Graph
- **Analytics:** Google Analytics or Plausible (optional, add later)
- **Hosting:** Vercel (recommended for Next.js) or Netlify
- **Domain:** To be purchased (recommend: `tujuoutspan.co.ke` or similar)

---

## 10. Component Architecture (Next.js)

```
app/
├── page.tsx                    # Home
├── layout.tsx                  # Root layout (Navbar, Footer, WhatsApp Float)
├── globals.css                 # Global styles, CSS variables
├── about/
│   └── page.tsx
├── services/
│   ├── page.tsx                # Services Hub
│   ├── government/
│   │   └── page.tsx
│   ├── education/
│   │   └── page.tsx
│   ├── health/
│   │   └── page.tsx
│   ├── documents/
│   │   └── page.tsx
│   ├── design-branding/
│   │   └── page.tsx
│   ├── computer-it/
│   │   └── page.tsx
│   └── online-career/
│       └── page.tsx
├── pricing/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── blog/
│   ├── page.tsx                # Blog listing
│   └── [slug]/
│       └── page.tsx            # Individual blog post
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── ProcessStep.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTABanner.tsx
│   │   ├── PricingTable.tsx
│   │   ├── ContactInfo.tsx
│   │   └── RelatedServices.tsx
│   └── templates/
│       └── ServiceCategoryTemplate.tsx
├── lib/
│   ├── services-data.ts        # All service data
│   ├── blog-data.ts            # Blog posts data
│   └── utils.ts
└── public/
    ├── images/
    │   ├── logo.png
    │   ├── logo-white.png
    │   ├── hero-bg.jpg
    │   ├── about-photo.jpg
    │   ├── portfolio/
    │   └── blog/
    └── favicon.ico
```

---

## 11. Success Metrics

| Metric | Target |
|--------|--------|
| WhatsApp Click-Through Rate | > 5% of visitors |
| Time on Service Pages | > 1 minute |
| Bounce Rate | < 60% |
| Mobile Traffic | > 70% (optimize mobile-first) |
| Page Load Speed | < 2 seconds |
| Blog Organic Traffic | Growing month-over-month |

---

## 12. Launch Checklist

- [ ] All 14 pages built and reviewed
- [ ] WhatsApp links tested and working
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags on all pages
- [ ] Google Maps embed on Contact page
- [ ] Testimonials added (when available)
- [ ] Photos added (when available)
- [ ] Blog posts published (minimum 3)
- [ ] WhatsApp Group and Channel created and linked
- [ ] Domain connected and SSL active
- [ ] Analytics installed

---

*Document Version: 1.0*
*Date: August 2026*
*Status: Ready for Design Phase*
