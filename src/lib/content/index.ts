import type { LocaleContent } from './types';

// Lazy-load content per locale (code-split by Vite)
const flatModules = import.meta.glob<{ content: LocaleContent }>('./*.ts');
const dirModules = import.meta.glob<{ content: LocaleContent }>('./*/index.ts');

export async function getContent(locale: string): Promise<LocaleContent | undefined> {
	const flatLoader = flatModules[`./${locale}.ts`];
	if (flatLoader) {
		const mod = await flatLoader();
		if (mod?.content) return mod.content;
	}
	const dirLoader = dirModules[`./${locale}/index.ts`];
	if (dirLoader) {
		const mod = await dirLoader();
		return mod?.content;
	}
	return undefined;
}

// Keys are still available synchronously for prerender entries
export const contentLocales: string[] = [
	...Object.keys(flatModules)
		.map((p) => p.match(/^\.\/([^/]+)\.ts$/)?.[1])
		.filter((l): l is string => !!l && l !== 'index' && l !== 'types'),
	...Object.keys(dirModules)
		.map((p) => p.match(/^\.\/([^/]+)\/index\.ts$/)?.[1])
		.filter((l): l is string => !!l)
];

export const docSlugs = [
	'what-is-pgp',
	'how-to-use-pgp',
	'pgp-vs-gpg',
	'pgp-tools',
	'pgp-for-beginners',
	'clipboard-encryption'
] as const;

export const blogSlugs = [
	'best-pgp-tools-2026',
	'pgp-software-comparison'
] as const;
