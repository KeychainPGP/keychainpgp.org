import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			rehypePlugins: [rehypeSlug],
			layout: {
				docs: resolve(__dirname, './src/lib/layouts/DocsLayout.svelte'),
				blog: resolve(__dirname, './src/lib/layouts/BlogLayout.svelte'),
				_: resolve(__dirname, './src/lib/layouts/DocsLayout.svelte')
			}
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleMissingId: 'warn'
		}
	}
};

export default config;
