import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.params.lang || 'en';
	const dir = ['ar', 'he'].includes(lang) ? 'rtl' : 'ltr';

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', lang).replace('%dir%', dir);
		}
	});
};
