import type { LocaleContent } from './types';

// Support both flat files (./fr.ts) and directory-based (./fr/index.ts)
const flatModules = import.meta.glob<{ content: LocaleContent }>('./*.ts', { eager: true });
const dirModules = import.meta.glob<{ content: LocaleContent }>('./*/index.ts', { eager: true });

export function getContent(locale: string): LocaleContent | undefined {
	const flat = flatModules[`./${locale}.ts`];
	if (flat?.content) return flat.content;
	const dir = dirModules[`./${locale}/index.ts`];
	return dir?.content;
}

// Dynamically discover which locales have content
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
