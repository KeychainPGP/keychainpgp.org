import { loadTranslations } from '$lib/i18n';
import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load: LayoutLoad = async ({ params }) => {
	const locale = params.lang || 'en';
	await loadTranslations(locale);
	return { locale };
};
