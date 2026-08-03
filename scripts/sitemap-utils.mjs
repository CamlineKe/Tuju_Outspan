import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// Directories inside dist/ that are build internals or special pages, not
// crawlable routes. Kept in sync with Next static export output.
const SKIPPED_DIRECTORIES = new Set(['_next', 'server', 'static', 'cache', 'build', 'types', '404']);

/**
 * Walk a static export directory and collect crawlable routes from index.html
 * files, so the sitemap can never drift from what the build actually emitted.
 * @param {string} distDir Root of the exported site.
 * @returns {string[]} Sorted route paths, root first, trailing slashes applied.
 */
export function collectRoutePaths(distDir) {
  const routes = [];

  const visit = (currentDir, urlPath) => {
    let entries;
    try {
      entries = readdirSync(currentDir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!SKIPPED_DIRECTORIES.has(entry.name)) {
          visit(join(currentDir, entry.name), `${urlPath}${entry.name}/`);
        }
      } else if (entry.name === 'index.html') {
        routes.push(urlPath === '' ? '/' : urlPath);
      }
    }
  };

  visit(distDir, '');
  return routes.sort();
}

/**
 * Build the sitemap XML document for the given routes.
 * @param {string} siteUrl Base URL without trailing slash.
 * @param {string[]} routes Route paths with trailing slashes.
 * @returns {string} Complete sitemap XML.
 */
export function buildSitemapXml(siteUrl, routes) {
  const base = siteUrl.replace(/\/+$/, '');
  const urls = routes
    .map((route) => `  <url>\n    <loc>${base}${route}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
