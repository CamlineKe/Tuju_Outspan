# Tuju Outspan Cyber Center — Tech Stack & Dependencies

> **Framework:** Next.js 15 (App Router)  
> **Language:** TypeScript  
> **Styling:** Tailwind CSS  
> **Package Manager:** pnpm  
> **Hosting:** Vercel  
> **Date:** August 2026  
> **Status:** Production-Ready Configuration

---

## 1. Core Framework

| Package | Version | Purpose | Why This Version |
|---------|---------|---------|------------------|
| `next` | `15.5.22` | React framework with App Router, SSR/SSG, file-based routing | Maintained LTS line with all security patches through July 2026 |
| `react` | `19.1.9` | UI library | Latest patched 19.1 line, security fixes for React Server Components |
| `react-dom` | `19.1.9` | React DOM renderer | Matches React version |
| `typescript` | `5.8.3` | Type safety, IntelliSense, catch errors at build time | Latest stable with performance improvements |

---

## 2. Styling & UI

| Package | Version | Purpose | Why This Version |
|---------|---------|---------|------------------|
| `tailwindcss` | `4.1.0` | Utility-first CSS framework | Latest v4 with Oxide engine, faster builds, CSS-first configuration |
| `@tailwindcss/postcss` | `4.1.0` | PostCSS integration for Tailwind v4 | Required for Tailwind v4 build pipeline |
| `postcss` | `8.5.3` | CSS transformation tool | Stable, widely supported |
| `clsx` | `2.1.1` | Conditional className construction | Lightweight, type-safe alternative to classnames |
| `tailwind-merge` | `3.2.0` | Merge Tailwind classes without conflicts | Essential when combining clsx with Tailwind utilities |

### Tailwind v4 Configuration Notes

Tailwind v4 uses CSS-based configuration (`@theme` directive in CSS) instead of `tailwind.config.js`. The color palette from `color-palette.md` will be defined in `globals.css` using CSS custom properties and the `@theme` block. `color-palette.md` remains the canonical value source; the `@theme` block below is the machine-facing rendering of those values.

```css
/* globals.css — Tailwind v4 theme configuration */
@import "tailwindcss";

@theme {
  --color-navy-900: #041D46;
  --color-navy-800: #0F2B5E;
  --color-navy-700: #143874;
  --color-navy-600: #1A4894;
  --color-navy-100: #D4DDF0;
  --color-navy-50: #E8EEF7;

  --color-orange-600: #D4551A;
  --color-orange-500: #F26522;
  --color-orange-400: #F5844A;
  --color-orange-100: #FCE5D8;
  --color-orange-50: #FEF0E8;

  --color-gray-50: #F8F9FA;
  --color-gray-100: #F1F3F5;
  --color-gray-200: #E4E7EB;
  --color-gray-300: #CFD5DD;
  --color-gray-400: #9AA5B1;
  --color-gray-500: #6B7B8C;
  --color-gray-600: #4A5568;
  --color-gray-700: #2D3748;
  --color-gray-800: #1A202C;
  --color-gray-900: #0F1419;

  --color-whatsapp: #25D366;
  --color-whatsapp-dark: #128C7E;
  --color-success: #16A34A;
  --color-success-light: #DCFCE7;
  --color-warning: #EAB308;
  --color-warning-light: #FEF9C3;
  --color-error: #DC2626;
  --color-error-light: #FEE2E2;
  --color-info: #2563EB;
  --color-info-light: #DBEAFE;

  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace;

  --shadow-navy-sm: 0 1px 3px rgba(4, 29, 70, 0.08);
  --shadow-navy-md: 0 4px 12px rgba(4, 29, 70, 0.1);
  --shadow-navy-lg: 0 10px 24px rgba(4, 29, 70, 0.12);
  --shadow-orange: 0 4px 16px rgba(242, 101, 34, 0.2);
}
```

---

## 3. Icons

| Package | Version | Purpose | Why This Version |
|---------|---------|---------|------------------|
| `lucide-react` | `0.487.0` | Icon library (outline style, consistent with design system) | Clean, tree-shakeable, actively maintained, matches our outline icon spec |

**Icon usage pattern:**
```tsx
import { CheckCircle, Phone, MapPin, Clock } from 'lucide-react';
```

---

## 4. Animation & Interactions

| Package | Version | Purpose | Why This Version |
|---------|---------|---------|------------------|
| `framer-motion` | `12.9.0` | Declarative animations, scroll reveals, page transitions, gesture support | Industry standard for React animations, excellent TypeScript support, AnimatePresence for page transitions |

**Use cases:**
- Scroll-triggered section reveals (fade + translateY)
- Card hover lift animations
- Mobile menu slide-in
- Accordion expand/collapse (FAQ)
- Page transition wrappers
- Staggered children animations

**What NOT to use Framer Motion for:**
- Simple hover states (use CSS transitions)
- Color transitions (use CSS)
- The navbar scroll effect (use CSS + React state)

---

## 5. Form Handling (Contact Page)

| Package | Version | Purpose | Why This Version |
|---------|---------|---------|------------------|
| `react-hook-form` | `7.56.0` | Performant form validation and handling | Minimal re-renders, excellent TypeScript, minimal bundle size |
| `zod` | `3.25.1` | Schema validation for forms and data | TypeScript-first, declarative, works seamlessly with react-hook-form |
| `@hookform/resolvers` | `5.0.1` | Connect react-hook-form to Zod resolver | Official bridge, maintained by react-hook-form team |

**Why these over alternatives:**
- `react-hook-form` vs Formik: Better performance, smaller bundle, simpler API
- `zod` vs Yup: TypeScript-native, better inference, smaller bundle

---

## 6. SEO & Metadata

| Package | Version | Purpose | Why This Version |
|---------|---------|---------|------------------|
| `next` (built-in) | `15.5.22` | Metadata API, Open Graph, JSON-LD | Next.js App Router has native SEO support via `metadata` export |

**No additional SEO packages needed.** Next.js handles:
- `<title>` and `<meta>` tags
- Open Graph tags
- Twitter Cards
- JSON-LD structured data (via inline scripts)
- Robots meta tags
- Canonical URLs

---

## 7. Analytics (Optional — Add Later)

| Package | Version | Purpose | When to Add |
|---------|---------|---------|-------------|
| `@vercel/analytics` | `1.5.0` | Vercel Web Analytics — privacy-friendly, no cookie banner needed | After launch, for traffic insights |
| `@vercel/speed-insights` | `1.2.0` | Real User Monitoring (RUM) for Core Web Vitals | After launch, for performance monitoring |

**Note:** These are Vercel-native and zero-config. Add after initial deployment.

---

## 8. Development Tools

| Package | Version | Type | Purpose | Why This Version |
|---------|---------|------|---------|------------------|
| `@types/node` | `22.15.0` | dev | TypeScript types for Node.js | Matches Node 22 LTS |
| `@types/react` | `19.1.9` | dev | TypeScript types for React | Matches React 19.1 |
| `@types/react-dom` | `19.1.9` | dev | TypeScript types for React DOM | Matches React DOM 19.1 |
| `eslint` | `9.25.0` | dev | Linting, code quality | Latest ESLint v9 with flat config |
| `eslint-config-next` | `15.5.22` | dev | Next.js recommended ESLint rules | Matches Next.js version |
| `@eslint/js` | `9.25.0` | dev | ESLint JavaScript plugin | Matches ESLint version |
| `typescript-eslint` | `8.31.0` | dev | TypeScript ESLint parser and rules | Latest, supports ESLint v9 |
| `prettier` | `3.5.3` | dev | Code formatting | Opinionated, consistent formatting |
| `prettier-plugin-tailwindcss` | `0.6.11` | dev | Sort Tailwind classes in Prettier | Auto-sorts classes by Tailwind's recommended order |
| `@trivago/prettier-plugin-sort-imports` | `5.2.2` | dev | Sort imports automatically | Clean import organization |

### ESLint Configuration (Flat Config — `eslint.config.mjs`)

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-imports": "error",
      "react/prop-types": "off",
    },
  },
];

export default eslintConfig;
```

### Prettier Configuration (`.prettierrc`)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports"
  ],
  "importOrder": [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@/",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
}
```

---

## 9. Testing

| Package | Version | Type | Purpose | Why This Version |
|---------|---------|------|---------|------------------|
| `vitest` | `3.2.0` | dev | Unit and integration testing | Faster than Jest, native TypeScript support, Vite-based (aligned with modern tooling) |
| `@testing-library/react` | `16.3.0` | dev | React component testing utilities | Standard for React testing, encourages user-centric tests |
| `@testing-library/jest-dom` | `6.6.3` | dev | Custom DOM matchers (toBeInTheDocument, etc.) | Better assertions for DOM testing |
| `@testing-library/user-event` | `14.6.0` | dev | Simulate user interactions | More realistic than fireEvent |
| `jsdom` | `26.1.0` | dev | Browser-like environment for Node.js | Required for React Testing Library |
| `@vitejs/plugin-react` | `4.4.0` | dev | React support for Vitest | Official Vite React plugin |

### Why Vitest over Jest?

| Factor | Vitest | Jest |
|--------|--------|------|
| Speed | Faster (Vite-based) | Slower |
| TypeScript | Native, no ts-jest | Requires ts-jest config |
| ESM | First-class support | Config-heavy |
| Modern alignment | Matches Vite ecosystem | Older architecture |
| Watch mode | Instant (Vite HMR) | Slower rebuild |

### Test File Structure

```
__tests__/
├── components/
│   ├── ui/
│   │   ├── Button.test.tsx
│   │   └── ServiceCard.test.tsx
│   ├── layout/
│   │   ├── Navbar.test.tsx
│   │   └── Footer.test.tsx
│   └── sections/
│       ├── Hero.test.tsx
│       └── ServicesGrid.test.tsx
├── pages/
│   ├── Home.test.tsx
│   └── Contact.test.tsx
├── lib/
│   └── utils.test.ts
└── setup.ts
```

### Vitest Configuration (`vitest.config.ts`)

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./__tests__/setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '__tests__/setup.ts',
        '**/*.d.ts',
        '**/*.config.*',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

### Test Setup (`__tests__/setup.ts`)

```typescript
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

---

## 10. Complete `package.json`

```json
{
  "name": "tuju-outspan-website",
  "version": "1.0.0",
  "private": true,
  "description": "Tuju Outspan Cyber Center — Official Website",
  "author": "Tuju Outspan",
  "license": "UNLICENSED",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "postbuild": "node scripts/generate-sitemap.mjs",
    "preview": "npx serve dist",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage",
    "test:ci": "vitest run"
  },
  "dependencies": {
    "clsx": "2.1.1",
    "framer-motion": "12.9.0",
    "lucide-react": "0.487.0",
    "next": "15.5.22",
    "react": "19.1.9",
    "react-dom": "19.1.9",
    "react-hook-form": "7.56.0",
    "tailwind-merge": "3.2.0",
    "zod": "3.25.1",
    "@hookform/resolvers": "5.0.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "3.3.1",
    "@eslint/js": "9.25.0",
    "@tailwindcss/postcss": "4.1.0",
    "@testing-library/jest-dom": "6.6.3",
    "@testing-library/react": "16.3.0",
    "@testing-library/user-event": "14.6.0",
    "@trivago/prettier-plugin-sort-imports": "5.2.2",
    "@types/node": "22.15.0",
    "@types/react": "19.1.9",
    "@types/react-dom": "19.1.9",
    "@vitejs/plugin-react": "4.4.0",
    "eslint": "9.25.0",
    "eslint-config-next": "15.5.22",
    "jsdom": "26.1.0",
    "postcss": "8.5.3",
    "prettier": "3.5.3",
    "prettier-plugin-tailwindcss": "0.6.11",
    "tailwindcss": "4.1.0",
    "typescript": "5.8.3",
    "typescript-eslint": "8.31.0",
    "vitest": "3.2.0"
  },
  "engines": {
    "node": ">=22.0.0",
    "pnpm": ">=10.0.0"
  },
  "packageManager": "pnpm@10.10.0",
  "pnpm": {
    "overrides": {
      "motion-dom": "12.9.0",
      "motion-utils": "12.8.3"
    }
  }
}
```

---

## 11. Project File Structure

```
tuju-outspan-website/
├── .next/                          # Next.js build output (gitignored)
├── .vscode/                        # VS Code settings
│   └── settings.json
├── __tests__/                      # Test files
│   ├── setup.ts
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── sections/
│   ├── pages/
│   └── lib/
├── app/                            # Next.js App Router
│   ├── globals.css                 # Tailwind v4 theme + global styles
│   ├── layout.tsx                  # Root layout (Navbar, Footer, WhatsAppFloat)
│   ├── page.tsx                    # Home page
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── government/
│   │   │   └── page.tsx
│   │   ├── education/
│   │   │   └── page.tsx
│   │   ├── health/
│   │   │   └── page.tsx
│   │   ├── documents/
│   │   │   └── page.tsx
│   │   ├── design-branding/
│   │   │   └── page.tsx
│   │   ├── computer-it/
│   │   │   └── page.tsx
│   │   └── online-career/
│   │       └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── WhatsAppFloat.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ProcessStep.tsx
│   │   │   ├── Input.tsx
│   │   │   └── FAQItem.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── ServicesGrid.tsx
│   │       ├── WhyChooseUs.tsx
│   │       ├── ProcessSteps.tsx
│   │       ├── Testimonials.tsx
│   │       ├── CTABanner.tsx
│   │       ├── PricingTable.tsx
│   │       ├── ContactInfo.tsx
│   │       ├── RelatedServices.tsx
│   │       ├── LocationStrip.tsx
│   │       └── ServiceBreakdown.tsx
│   └── lib/
│       ├── data/
│       │   ├── services.ts         # All service data
│       │   ├── testimonials.ts     # Testimonial data
│       │   ├── pricing.ts          # Pricing data
│       │   └── blog.ts             # Blog posts data
│       ├── utils/
│       │   ├── cn.ts               # clsx + tailwind-merge utility
│       │   ├── whatsapp.ts         # WhatsApp link generators
│       │   └── seo.ts              # SEO helper functions
│       └── schemas/
│           └── contact.ts          # Zod schemas for forms
├── public/
│   ├── images/
│   │   ├── logo-footer.png
│   │   ├── og-default.jpg          # 1200×630 Open Graph image
│   │   ├── about/
│   │   ├── portfolio/
│   │   └── blog/
│   ├── favicon.ico
│   └── robots.txt
├── scripts/
│   └── generate-sitemap.mjs
├── .env.local                      # Environment variables (gitignored)
├── .env.example                    # Example env file
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
├── vitest.config.ts
└── docs/                           # Project documentation
    ├── Tuju_Outspan_PRD.md
    ├── architecture.md
    ├── color-palette.md
    ├── deliverables-checklist.md
    ├── design.md
    ├── image-assets.md
    ├── project-structure.md
    └── tech-stack.md
```

**Note:** The canonical project structure is maintained in `docs/project-structure.md`. The tree above is a historical snapshot; refer to that file for the current layout.

---

## 12. Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',                    // Static export for simple hosting
  distDir: 'dist',
  images: {
    unoptimized: true,                 // Required for static export
  },
  trailingSlash: true,                 // /about/ instead of /about
  compress: true,
  poweredByHeader: false,              // Remove X-Powered-By header
};

export default nextConfig;
```

**Note:** Using `output: 'export'` for static site generation. This means:
- No API routes (form submissions handled client-side; see `architecture.md` section 7.4)
- No server-side rendering
- All pages pre-rendered at build time
- Perfect for Vercel static hosting

If you later need server features (API routes, dynamic rendering), change to `output: 'standalone'`.

**Preview:** `pnpm start` is not included because `next start` requires `output: 'standalone'` and is invalid with static export. Preview the build with `pnpm preview` (which runs `npx serve dist`) after `pnpm build`, or with `vercel dev` during development.

---

## 13. TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    },
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "dist", "__tests__"]
}
```

---

## 14. Environment Variables (`.env.example`)

```bash
# WhatsApp Business Number (with country code, no +)
NEXT_PUBLIC_WHATSAPP_NUMBER=254715616633

# Business Email
NEXT_PUBLIC_BUSINESS_EMAIL=rafaeeltuju902@gmail.com

# Business Location
NEXT_PUBLIC_BUSINESS_LOCATION=Ikonge–Ekerenyo Stage, Chuka University

# Google Maps Embed URL (place ID or coordinates)
NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5376.553622463109!2d36.894845605155844!3d-1.2830162448364926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1785769387606!5m2!1sen!2sus

# WhatsApp Group Link (when created)
NEXT_PUBLIC_WHATSAPP_GROUP=https://chat.whatsapp.com/...

# WhatsApp Channel Link (when created)
NEXT_PUBLIC_WHATSAPP_CHANNEL=https://whatsapp.com/channel/...

# Site URL (for SEO canonical URLs)
NEXT_PUBLIC_SITE_URL=https://tujuoutspan.co.ke
```

---

## 15. Installation Commands

```bash
# 1. Create project directory
mkdir tuju-outspan-website && cd tuju-outspan-website

# 2. Initialize pnpm project
pnpm init

# 3. Install core dependencies
pnpm add next@15.5.22 react@19.1.9 react-dom@19.1.9

# 4. Install styling & UI
pnpm add tailwindcss@4.1.0 @tailwindcss/postcss@4.1.0 postcss@8.5.3 clsx@2.1.1 tailwind-merge@3.2.0

# 5. Install icons
pnpm add lucide-react@0.487.0

# 6. Install animation
pnpm add framer-motion@12.9.0

# 7. Install form handling
pnpm add react-hook-form@7.56.0 zod@3.25.1 @hookform/resolvers@5.0.1

# 8. Install dev dependencies
pnpm add -D typescript@5.8.3 @types/node@22.15.0 @types/react@19.1.9 @types/react-dom@19.1.9

# 9. Install linting & formatting
pnpm add -D eslint@9.25.0 eslint-config-next@15.5.22 @eslint/eslintrc@3.3.1 @eslint/js@9.25.0 typescript-eslint@8.31.0
pnpm add -D prettier@3.5.3 prettier-plugin-tailwindcss@0.6.11 @trivago/prettier-plugin-sort-imports@5.2.2

# 10. Install testing
pnpm add -D vitest@3.2.0 @vitejs/plugin-react@4.4.0 @testing-library/react@16.3.0 @testing-library/jest-dom@6.6.3 @testing-library/user-event@14.6.0 jsdom@26.1.0

# 11. Verify installation
pnpm list

# 12. Start development
pnpm dev
```

---

## 16. Build & Deploy Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack

# Code quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format with Prettier
pnpm format:check     # Check formatting
pnpm type-check       # TypeScript check without emit

# Testing
pnpm test             # Run Vitest in watch mode
pnpm test:ci          # Run Vitest once (for CI)
pnpm test:coverage    # Run with coverage report

# Production build
pnpm build            # Build static export to /dist (postbuild regenerates sitemap)

# Deploy to Vercel
vercel --prod         # Production deployment
```

---

## 17. Dependencies Summary Table

### Production Dependencies (11)

| Package | Version | Size (gzipped) | Purpose |
|---------|---------|----------------|---------|
| next | 15.5.22 | ~120 KB | Framework |
| react | 19.1.9 | ~40 KB | UI library |
| react-dom | 19.1.9 | ~70 KB | DOM renderer |
| framer-motion | 12.9.0 | ~40 KB | Animations |
| lucide-react | 0.487.0 | ~20 KB (tree-shaken) | Icons |
| react-hook-form | 7.56.0 | ~10 KB | Form handling |
| zod | 3.25.1 | ~12 KB | Validation |
| @hookform/resolvers | 5.0.1 | ~5 KB | Form resolver bridge |
| clsx | 2.1.1 | ~1 KB | Class merging |
| tailwind-merge | 3.2.0 | ~5 KB | Tailwind class dedupe |
| tailwindcss | 4.1.0 | ~35 KB (build-time only) | Styling engine |

**Estimated total production bundle:** ~200–250 KB gzipped (excl. images)

### Development Dependencies (19)

| Category | Packages |
|----------|----------|
| TypeScript | typescript, @types/* (4) |
| Linting | eslint, eslint-config-next, @eslint/*, typescript-eslint (5) |
| Formatting | prettier, prettier-plugin-tailwindcss, @trivago/prettier-plugin-sort-imports (3) |
| Testing | vitest, @vitejs/plugin-react, @testing-library/*, jsdom (5) |
| Build | @tailwindcss/postcss, postcss (2) |

---

## 18. Version Locking Strategy

All versions are **pinned exactly** (no `^` or `~` in package.json). This prevents:
- Breaking changes from minor updates
- Inconsistent builds between environments
- "Works on my machine" issues

**Update policy:**
1. Check changelogs before updating
2. Update one package at a time
3. Run full test suite after each update
4. Use `pnpm update --interactive` to review changes

---

**Transitive pins:** `framer-motion` depends on `motion-dom` and `motion-utils` with caret ranges. Newer `motion-dom` releases dropped exports that `framer-motion@12.9.0` requires, so these are pinned via `pnpm.overrides` (`motion-dom@12.9.0`, `motion-utils@12.8.3`). Do not change these without verifying the full test suite.

*This stack is finalized. No additional packages without justification. Every dependency serves a specific, non-overlapping purpose.*
