import { error } from '@sveltejs/kit';
import { locales, type Locale } from '$lib/i18n';
import { getContent, contentLocales, docSlugs } from '$lib/content';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const lang = params.lang as Locale;
	const slug = params.slug;

	if (!locales.includes(lang) || lang === 'en') {
		error(404, 'Not found');
	}

	const localeContent = getContent(lang);
	if (!localeContent) {
		error(404, 'Not found');
	}

	const doc = localeContent.docs[slug];
	if (!doc) {
		error(404, 'Not found');
	}

	return { locale: lang, slug, content: doc };
};

export function entries() {
	return contentLocales.flatMap((lang) => docSlugs.map((slug) => ({ lang, slug })));
}
