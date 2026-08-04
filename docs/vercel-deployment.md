# Tuju Outspan Cyber Center: Vercel Deployment Guide

This guide explains how to deploy the Tuju Outspan website to Vercel after
selecting its Git repository in the Vercel dashboard. It covers the required
import settings, environment variables, the trailing-slash configuration that
keeps nested routes working on refresh and direct load, and the post-deploy
validation checklist.

## 1. Current deployment readiness

The repository is ready for a Vercel deployment:

- It is a Next.js 15 App Router application using a static export
  (`output: 'export'`).
- `pnpm-lock.yaml` is committed, so Vercel detects pnpm and installs with it.
- The `build` script runs `next build` and then the `postbuild` sitemap
  generator, producing `dist/` and `dist/sitemap.xml`.
- `next.config.ts` sets `distDir: 'dist'`, `trailingSlash: true`, and
  `images.unoptimized: true`.
- The project reads seven `NEXT_PUBLIC_*` environment variables at build time;
  four are required and three are optional or placeholder.
- There is no database, authentication service, API route, or server-side
  secret.
- `vercel.json` pins the Next.js framework preset and enables trailing-slash
  redirects so every route works when opened directly or refreshed.

Technical deployment readiness is not the same as business launch readiness.
Treat the first deployment as a preview or staging deployment until the launch
checklist in this guide is complete.

## 2. Production launch blockers

Confirm these items before directing customers to the production domain:

- Replace the placeholder WhatsApp group and channel links, or remove them
  from the UI.
- Confirm the WhatsApp business number, business email, and business location
  displayed on the site.
- Confirm `https://tujuoutspan.co.ke` is the intended canonical production URL
  and that the domain is registered.
- Replace placeholder testimonial content, if any, with approved customer
  feedback or remove it.
- Confirm the map embed URL points at the actual shop location.
- Confirm the privacy policy and any other required legal pages.
- Confirm all page images, including the Open Graph image, load from `public/`.

The canonical URL is defined by `NEXT_PUBLIC_SITE_URL` in `.env.example` and
must be set in Vercel. Preview deployments will still generate metadata based
on that value; this is acceptable for internal review, but the custom domain
should be connected before the public launch.

## 3. Import configuration after selecting the repository

After selecting the Tuju Outspan repository in Vercel, review the project
configuration before clicking **Deploy**.

Use these values:

| Setting | Value | Notes |
| --- | --- | --- |
| Project Name | `tuju-outspan` or a preferred Vercel project name | Affects the generated `vercel.app` URL, not website branding |
| Framework Preset | Next.js | Vercel detects this automatically; `vercel.json` also pins it |
| Root Directory | `./` | The project is at the repository root |
| Install Command | Default | Vercel detects `pnpm-lock.yaml` and uses pnpm |
| Build Command | Default (`pnpm build`) | Runs `next build`, then the sitemap generator |
| Output Directory | Default | Do not set `dist` here; the Next.js preset reads `distDir` from `next.config.ts` |
| Development Command | Default (`pnpm dev`) | No override required |
| Node.js Version | `22.x` | Matches `engines.node >= 22` and is a conservative Vercel choice |
| Environment Variables | See section 9 | Required values are set before the first build |

Do not enable monorepo settings or change the root directory. Do not override
the install, build, or output commands.

Vercel currently supports Node.js 20.x, 22.x, and 24.x. If 22.x is not
available in the dashboard, use the oldest supported version that satisfies
the project's `engines` field, then validate the build.

Official references:

- [Deploying Git repositories with Vercel](https://vercel.com/docs/git)
- [Supported Node.js versions on Vercel](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Package managers on Vercel](https://vercel.com/docs/package-managers)
- [Next.js installation and runtime requirements](https://nextjs.org/docs/app/getting-started/installation)

## 4. Why `vercel.json` matters

The static export writes each route as a folder with an `index.html` file, for
example `dist/services/government/index.html`. The site already links to
trailing-slash URLs because `next.config.ts` sets `trailingSlash: true`.

`vercel.json` contains:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": "nextjs",
  "trailingSlash": true
}
```

With `trailingSlash: true`, Vercel redirects `/services/government` to
`/services/government/` and serves `services/government/index.html`. Direct
loads and refreshes of nested routes therefore never return a platform 404.

Do not add rewrites that map every path to a `.html` file: the export uses
folder `index.html` files with trailing slashes, not flat `.html` files. Do
not set the output directory in `vercel.json`, because the Next.js preset
already honors `distDir` from `next.config.ts`.

Reference: the
[trailing-slash behavior matrix](https://github.com/slorber/trailing-slash-guide)
maintained for static hosting providers.

## 5. Create the first deployment

1. Confirm the settings in section 3.
2. Set the environment variables in section 9.
3. Click **Deploy**.
4. Wait for dependency installation, the Next.js build, and the deployment to
   finish.
5. Open the generated `*.vercel.app` URL.
6. Keep the deployment URL for preview testing before connecting the
   production domain.

If Vercel reports a build failure, open the failed deployment and inspect its
build logs. Start with the first meaningful error rather than later cascading
errors.

Common configuration mistakes:

- Selecting a subdirectory instead of the repository root.
- Overriding the output directory with `dist` or `.next`.
- Using a Node.js version older than 22.
- Overriding the install or build command unnecessarily.
- Forgetting the environment variables, which bakes placeholder or empty
  values into the static pages.
- Deploying a revision that does not contain `pnpm-lock.yaml` or the required
  `public/` assets.

## 6. Preview deployment validation

Validate the generated Vercel URL before connecting `tujuoutspan.co.ke`.

### Core routes

Open each route directly in a new browser tab (not by clicking a link) and
refresh it:

- `/`
- `/about/`
- `/services/`
- `/services/government/`
- `/services/education/`
- `/services/health/`
- `/services/documents/`
- `/services/design-branding/`
- `/services/computer-it/`
- `/services/online-career/`
- `/pricing/`
- `/contact/`
- `/blog/`
- `/blog/kra-pin-guide/`
- A deliberately invalid URL to confirm the 404 experience

Each nested route should load without a platform 404. Requests without the
trailing slash, for example `/services/government`, should redirect to the
trailing-slash form.

### Functional checks

- Confirm all service, blog, logo, and portfolio images load.
- Search the services directory and filter the blog listing.
- Test the mobile menu: open, close with Escape, and confirm focus returns to
  the trigger.
- Open each FAQ accordion one at a time.
- Submit the contact form with valid and invalid data and confirm the WhatsApp
  handoff message contains the entered details.
- Test every WhatsApp button and the floating WhatsApp button on a real mobile
  device.
- Check header navigation, footer links, and the floating WhatsApp button.
- Check the site at 320px, 360px, 390px, 768px, 1024px, 1280px, and 1440px or
  wider.
- At phone widths, verify there is no page-level horizontal scrollbar and
  sticky CTAs do not cover content.
- Check the browser console and Vercel runtime logs for unexpected errors.

## 7. Production branch and automatic deployments

The repository's production branch is `main`.

With Vercel's standard Git integration:

- A deployment from the production branch becomes a production deployment.
- Other branches and pull requests normally create preview deployments.
- New commits pushed to `main` trigger new production builds automatically.

Before relying on this workflow, open **Project -> Settings -> Git** and
confirm that the Production Branch is `main`. For safer releases while the
website is pre-launch, validate changes through preview deployments before
merging them into `main`.

See [Vercel deployment environments](https://vercel.com/docs/deployments/overview)
and [promoting a deployment](https://vercel.com/docs/deployments/promoting-a-deployment).

## 8. Connect `tujuoutspan.co.ke`

Connect the domain only after the preview deployment and business content are
approved.

1. Open the Tuju Outspan project in Vercel.
2. Go to **Settings -> Domains**.
3. Add `tujuoutspan.co.ke`.
4. Add `www.tujuoutspan.co.ke` when prompted, or add it separately.
5. Choose which hostname is primary and configure the other to redirect to it.
   Using one canonical hostname avoids duplicate URLs.
6. At the domain registrar or DNS provider, add the exact DNS records Vercel
   displays.
7. Do not copy DNS values from an unrelated guide: Vercel may show
   project-specific values.
8. Preserve existing email-related DNS records, including MX, SPF, DKIM, and
   DMARC, if email is hosted elsewhere. Replacing nameservers without
   recreating those records can interrupt email delivery.
9. Wait for Vercel to report that the domain configuration is valid.
10. Confirm HTTPS is provisioned and both the apex and `www` hostnames behave
    as intended.

DNS propagation can take time. If Vercel shows **Invalid Configuration**,
compare the record name, type, and value against the exact values in
**Settings -> Domains**.

Official references:

- [Set up a custom domain on Vercel](https://vercel.com/docs/domains/set-up-custom-domain)
- [Add and configure a custom domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [Troubleshoot Vercel domains](https://vercel.com/docs/domains/troubleshooting)

## 9. Environment variables

All variables are read at build time and baked into the static pages, so they
must be set before the first production build and updated by redeploying when
they change.

| Variable | Example | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `254715616633` | Yes |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | `rafaeeltuju902@gmail.com` | Yes |
| `NEXT_PUBLIC_BUSINESS_LOCATION` | `Ikonge-Ekerenyo Stage, Chuka University` | Yes |
| `NEXT_PUBLIC_SITE_URL` | `https://tujuoutspan.co.ke` | Yes |
| `NEXT_PUBLIC_MAPS_EMBED_URL` | Google Maps embed URL | Optional |
| `NEXT_PUBLIC_WHATSAPP_GROUP` | WhatsApp group invite link | Placeholder |
| `NEXT_PUBLIC_WHATSAPP_CHANNEL` | WhatsApp channel link | Placeholder |

Set the same values for Preview and Production so branch previews behave like
production. Keep secrets out of Git and local committed files; these variables
are all public by design because they appear in client-rendered pages.

## 10. Logs and troubleshooting

For a failed or unhealthy deployment:

1. Open **Project -> Deployments**.
2. Select the affected deployment.
3. Inspect the build logs for installation, TypeScript, static generation, or
   missing-file errors.
4. Inspect runtime logs if the build succeeded but a deployed route fails.
5. Confirm the deployed commit and branch are the intended revision.
6. Confirm the Root Directory, Framework Preset, Node.js version, and build
   settings match this guide.
7. Fix the underlying problem in the repository, verify it locally, and push a
   new commit.

Avoid repeatedly redeploying the same unchanged commit when the error is
caused by source code or configuration. A redeploy is useful when settings or
environment variables changed, or when a transient platform failure is
suspected.

## 11. Redeploy, promote, and rollback

From **Project -> Deployments**, Vercel allows eligible deployments to be
inspected, redeployed, promoted, or rolled back.

- **Redeploy** rebuilds a selected revision. Use it after a relevant Vercel
  setting changes or for a suspected transient build failure.
- **Promote to Production** makes an eligible deployment serve production
  traffic.
- **Instant Rollback** restores a previously served production deployment
  without rebuilding it.

For an incident after release:

1. Identify the last known-good production deployment.
2. Use **Instant Rollback** from the deployment menu.
3. Confirm the production domain serves the restored deployment.
4. Investigate and fix the issue on a separate branch.
5. Validate the fix through a preview deployment before returning it to
   production.

A rollback restores an older build. It does not rebuild that revision with
newly changed environment variables. Vercel plan limits can also affect how
far back a project may roll back.

See [managing deployments](https://vercel.com/docs/deployments/managing-deployments)
and [instant rollback](https://vercel.com/docs/instant-rollback).

## 12. Local verification before production deployment

Run the following commands from
`/home/camline/Documents/Projects/Tuju-Outspan` in the order shown so faster
failures are found first.

### Tests

```bash
pnpm test:ci
```

Runs the Vitest suite once: components, lib utilities, and page behavior.

### Type checking

```bash
pnpm type-check
```

Checks TypeScript correctness without creating build output.

### Linting

```bash
pnpm lint
```

Checks the source against the configured ESLint and Next.js rules.

### Formatting check

```bash
pnpm format:check
```

Checks repository formatting without rewriting files.

### Production build

```bash
pnpm build
```

Creates the production static export in `dist/` and regenerates
`dist/sitemap.xml`. This is the closest local check to Vercel's build step. It
may require network access on a clean machine to download dependencies or
fetch build-time assets.

### Local preview

```bash
pnpm preview
```

Serves `dist/` locally so the exported routes, trailing-slash redirects, and
assets can be smoke-tested before deploying.

The deployment should not be considered fully verified until these checks
succeed and the deployed smoke tests in section 6 are complete.

## 13. Release checklist

Use this final checklist before announcing the website:

- [ ] Next.js 15.5.x and React 19.1.x are on the patched release lines.
- [ ] WhatsApp number, group, channel, email, and location are confirmed and
      placeholders are removed.
- [ ] Canonical URL and custom domain are confirmed as `tujuoutspan.co.ke`.
- [ ] Legal policies and privacy content are final.
- [ ] Testimonials are approved or removed.
- [ ] Local tests, type checking, linting, formatting check, and production
      build pass.
- [ ] The Vercel preview smoke test passes on every route in section 6.
- [ ] The production branch is `main`.
- [ ] `tujuoutspan.co.ke` and `www.tujuoutspan.co.ke` are configured correctly.
- [ ] HTTPS is active and no mixed-content warnings appear.
- [ ] Existing email DNS records remain intact if email is hosted elsewhere.
- [ ] The production-domain smoke test passes.
- [ ] WhatsApp handoff is verified on a real mobile device.
- [ ] The responsive matrix passes at 320, 360, 390, 768, 1024, 1280, and
      1440+ pixels.
- [ ] No page has horizontal overflow at phone widths.
- [ ] Keyboard, reduced-motion, short-viewport, and 200% zoom checks pass.
- [ ] A known-good deployment is available for rollback.
