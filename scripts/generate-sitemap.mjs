// Generates dist/sitemap.xml after `next build` (static export output).
// Keep the route list in sync with app/ routes and lib/data/blog.ts posts.
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tujuoutspan.co.ke').replace(
  /\/+$/,
  ''
);
const distDir = path.join(rootDir, 'dist');

const routes = [
  '/',
  '/about/',
  '/services/',
  '/services/government/',
  '/services/education/',
  '/services/health/',
  '/services/documents/',
  '/services/design-branding/',
  '/services/computer-it/',
  '/services/online-career/',
  '/pricing/',
  '/contact/',
  '/blog/',
  '/blog/kra-pin-guide/',
];

const urls = routes
  .map((route) => `  <url>\n    <loc>${siteUrl}${route}</loc>\n  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

mkdirSync(distDir, { recursive: true });
writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
console.log('Generated dist/sitemap.xml');
