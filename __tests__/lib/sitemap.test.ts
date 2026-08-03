import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

import { buildSitemapXml, collectRoutePaths } from '../../scripts/sitemap-utils.mjs';

let tempDirs: string[] = [];

afterEach(() => {
  for (const dir of tempDirs) {
    rmSync(dir, { recursive: true, force: true });
  }
  tempDirs = [];
});

function createFixture(): string {
  const dir = mkdtempSync(join(tmpdir(), 'tuju-sitemap-'));
  tempDirs.push(dir);
  for (const route of ['about', 'blog/kra-pin-guide', 'services/government']) {
    mkdirSync(join(dir, route), { recursive: true });
    writeFileSync(join(dir, route, 'index.html'), '');
  }
  for (const skipped of ['_next', 'server', '404']) {
    mkdirSync(join(dir, skipped), { recursive: true });
    writeFileSync(join(dir, skipped, 'index.html'), '');
  }
  writeFileSync(join(dir, 'index.html'), '');
  writeFileSync(join(dir, '404.html'), '');
  return dir;
}

describe('collectRoutePaths', () => {
  it('derives routes from exported index.html files and skips build internals', () => {
    expect(collectRoutePaths(createFixture())).toEqual([
      '/',
      '/about/',
      '/blog/kra-pin-guide/',
      '/services/government/',
    ]);
  });
});

describe('buildSitemapXml', () => {
  it('emits trailing-slash locations under the given site url', () => {
    const xml = buildSitemapXml('https://example.com/', ['/', '/about/']);
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(xml).toContain('<loc>https://example.com/</loc>');
    expect(xml).toContain('<loc>https://example.com/about/</loc>');
  });
});
