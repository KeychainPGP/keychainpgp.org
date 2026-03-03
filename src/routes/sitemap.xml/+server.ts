import { locales } from '$lib/i18n';
import { docSlugs, blogSlugs } from '$lib/content';
import type { RequestHandler } from './$types';

const SITE = 'https://keychainpgp.org';
const TODAY = new Date().toISOString().split('T')[0];

interface PageDef {
	path: string;
	priority: string;
	changefreq: string;
}

// All English pages — localized variants are generated automatically
const pages: PageDef[] = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/pgp-online-encrypt/', priority: '0.9', changefreq: 'weekly' },
	{ path: '/docs/', priority: '0.8', changefreq: 'weekly' },
	{ path: '/blog/', priority: '0.7', changefreq: 'weekly' },
	...docSlugs.map((s) => ({
		path: `/docs/${s}/`,
		priority: '0.7',
		changefreq: 'monthly'
	})),
	...blogSlugs.map((s) => ({
		path: `/blog/${s}/`,
		priority: '0.6',
		changefreq: 'monthly'
	}))
];

function localizedPath(locale: string, path: string): string {
	return locale === 'en' ? path : `/${locale}${path}`;
}

function hreflangs(path: string): string {
	return [
		`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${path}"/>`,
		...locales.map(
			(l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${localizedPath(l, path)}"/>`
		)
	].join('\n');
}

function urlEntry(loc: string, page: PageDef, priority?: string): string {
	return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <priority>${priority ?? page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
${hreflangs(page.path)}
  </url>`;
}

export const prerender = true;

export const GET: RequestHandler = () => {
	const urls: string[] = [];

	for (const page of pages) {
		// English version
		urls.push(urlEntry(page.path, page));

		// Localized versions (slightly lower priority)
		const locPriority = Math.max(0, parseFloat(page.priority) - 0.1).toFixed(1);
		for (const locale of locales) {
			if (locale === 'en') continue;
			urls.push(urlEntry(localizedPath(locale, page.path), page, locPriority));
		}
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