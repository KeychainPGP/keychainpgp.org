import { error } from '@sveltejs/kit';
import { locales, type Locale } from '$lib/i18n';
import { getContent, contentLocales } from '$lib/content';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const lang = params.lang as Locale;

	if (!locales.includes(lang) || lang === 'en') {
		error(404, 'Not found');
	}

	const localeContent = getContent(lang);
	if (!localeContent) {
		error(404, 'Not found');
	}

	return { locale: lang, content: localeContent.blogIndex };
};

export function entries() {
	return contentLocales.map((lang) => ({ lang }));
}
