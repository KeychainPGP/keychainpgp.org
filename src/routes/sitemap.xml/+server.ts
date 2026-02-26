import { locales } from '$lib/i18n';
import type { RequestHandler } from './$types';

const SITE = 'https://keychainpgp.org';

interface SitemapEntry {
	loc: string;
	lastmod: string;
	priority: string;
	changefreq: string;
}

const contentPages: SitemapEntry[] = [
	{
		loc: '/pgp-online-encrypt/',
		lastmod: '2026-02-25',
		priority: '0.9',
		changefreq: 'weekly'
	},
	{
		loc: '/docs/',
		lastmod: '2026-02-25',
		priority: '0.8',
		changefreq: 'weekly'
	},
	{
		loc: '/blog/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'weekly'
	},
	{
		loc: '/docs/what-is-pgp/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'monthly'
	},
	{
		loc: '/docs/how-to-use-pgp/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'monthly'
	},
	{
		loc: '/docs/pgp-vs-gpg/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'monthly'
	},
	{
		loc: '/docs/pgp-tools/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'monthly'
	},
	{
		loc: '/docs/pgp-for-beginners/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'monthly'
	},
	{
		loc: '/docs/clipboard-encryption/',
		lastmod: '2026-02-25',
		priority: '0.7',
		changefreq: 'monthly'
	},
	{
		loc: '/blog/best-pgp-tools-2026/',
		lastmod: '2026-02-25',
		priority: '0.6',
		changefreq: 'monthly'
	},
	{
		loc: '/blog/pgp-software-comparison/',
		lastmod: '2026-02-25',
		priority: '0.6',
		changefreq: 'monthly'
	}
];

export const prerender = true;

export const GET: RequestHandler = () => {
	const urls: string[] = [];

	// Homepage with full hreflang annotations
	const hreflangs = [
		`    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/"/>`,
		`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>`,
		...locales
			.filter((l) => l !== 'en')
			.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}/${l}/"/>`)
	].join('\n');

	urls.push(`  <url>
    <loc>${SITE}/</loc>
    <lastmod>2026-02-25</lastmod>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
${hreflangs}
  </url>`);

	// Localized homepages
	for (const locale of locales) {
		if (locale === 'en') continue;
		urls.push(`  <url>
    <loc>${SITE}/${locale}/</loc>
    <lastmod>2026-02-25</lastmod>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>`);
	}

	// Content pages (English only)
	for (const page of contentPages) {
		urls.push(`  <url>
    <loc>${SITE}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`);
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
