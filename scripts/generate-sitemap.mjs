// Generates dist/sitemap.xml after `next build` (static export output).
// Routes are derived from the exported HTML files, so new pages and blog
// posts appear in the sitemap without editing this script.
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildSitemapXml, collectRoutePaths } from './sitemap-utils.mjs';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://tujuoutspan.co.ke').replace(
  /\/+$/,
  ''
);
const distDir = path.join(rootDir, 'dist');

const routes = collectRoutePaths(distDir);
const xml = buildSitemapXml(siteUrl, routes);

mkdirSync(distDir, { recursive: true });
writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Generated dist/sitemap.xml with ${routes.length} routes`);
