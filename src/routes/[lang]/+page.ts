import { locales, type Locale } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const lang = params.lang as Locale;
	if (!locales.includes(lang)) {
		error(404, 'Not found');
	}
	return { locale: lang };
};

export function entries() {
	return locales
		.filter((l) => l !== 'en')
		.map((lang) => ({ lang }));
}
