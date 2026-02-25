<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import type { Snippet } from 'svelte';

	let {
		title = '',
		description = '',
		slug = '',
		lastUpdated = '',
		locale = 'en',
		children
	}: {
		title: string;
		description: string;
		slug: string;
		lastUpdated: string;
		locale?: string;
		children: Snippet;
	} = $props();

	let canonical = $derived(`https://keychainpgp.org${slug}`);
	let homeHref = $derived(locale === 'en' ? '/' : `/${locale}/`);
	let blogHref = $derived(locale === 'en' ? '/blog/' : `/${locale}/blog/`);

	const breadcrumbs = $derived([
		{ label: 'Home', href: homeHref },
		{ label: 'Blog', href: blogHref },
		{ label: title, href: slug }
	]);

	const articleSchema = $derived({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": title,
		"description": description,
		"url": canonical,
		"datePublished": lastUpdated,
		"dateModified": lastUpdated,
		"author": {
			"@type": "Organization",
			"name": "KeychainPGP",
			"url": "https://keychainpgp.org"
		},
		"publisher": {
			"@type": "Organization",
			"name": "KeychainPGP",
			"url": "https://keychainpgp.org",
			"logo": {
				"@type": "ImageObject",
				"url": "https://keychainpgp.org/icons/icon-128.png"
			}
		}
	});
</script>

<SeoHead {title} {description} {canonical} jsonLd={articleSchema} publishedTime={lastUpdated} modifiedTime={lastUpdated} />

<article class="blog-page">
	<div class="blog-container">
		<Breadcrumbs crumbs={breadcrumbs} />
		{#if lastUpdated}
			<time class="blog-date" datetime={lastUpdated}>Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
		{/if}
		<div class="prose">
			{@render children()}
		</div>
		<CtaBanner />
	</div>
</article>

<style>
	.blog-page {
		padding: 6rem 1.5rem 4rem;
	}

	.blog-container {
		max-width: 800px;
		margin: 0 auto;
	}

	.blog-date {
		display: block;
		font-size: 0.875rem;
		color: var(--text-muted);
		margin-bottom: 2rem;
	}

	.prose :global(h1) {
		font-size: 2.25rem;
		font-weight: 800;
		margin: 0 0 1.5rem;
		color: var(--text);
		line-height: 1.2;
	}

	.prose :global(h2) {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 2.5rem 0 1rem;
		color: var(--text);
		border-bottom: 1px solid var(--border);
		padding-bottom: 0.5rem;
	}

	.prose :global(h3) {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 2rem 0 0.75rem;
		color: var(--text);
	}

	.prose :global(p) {
		font-size: 1.0625rem;
		color: var(--text-secondary);
		line-height: 1.8;
		margin: 0 0 1.25rem;
	}

	.prose :global(a) {
		color: var(--primary);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.prose :global(a:hover) {
		color: var(--primary-hover);
	}

	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 1.25rem;
		padding-left: 1.5rem;
		color: var(--text-secondary);
	}

	.prose :global(li) {
		margin-bottom: 0.5rem;
		line-height: 1.7;
	}

	.prose :global(code) {
		font-family: 'JetBrains Mono', monospace;
		background: var(--bg-card);
		padding: 0.125rem 0.375rem;
		border-radius: 4px;
		font-size: 0.875em;
		color: var(--primary);
	}

	.prose :global(pre) {
		background: var(--bg-terminal);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.25rem;
		overflow-x: auto;
		margin: 0 0 1.5rem;
	}

	.prose :global(pre code) {
		background: none;
		padding: 0;
		color: var(--text);
	}

	.prose :global(blockquote) {
		border-left: 3px solid var(--primary);
		padding-left: 1rem;
		margin: 0 0 1.5rem;
		color: var(--text-secondary);
		font-style: italic;
	}

	.prose :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 0 0 1.5rem;
	}

	.prose :global(th),
	.prose :global(td) {
		padding: 0.75rem 1rem;
		border: 1px solid var(--border);
		text-align: left;
	}

	.prose :global(th) {
		background: var(--bg-card);
		font-weight: 600;
		color: var(--text);
	}

	.prose :global(td) {
		color: var(--text-secondary);
	}

	.prose :global(strong) {
		color: var(--text);
		font-weight: 600;
	}

	.prose :global(hr) {
		border: none;
		border-top: 1px solid var(--border);
		margin: 2rem 0;
	}

	@media (max-width: 640px) {
		.blog-page {
			padding: 5rem 1rem 3rem;
		}

		.prose :global(h1) {
			font-size: 1.75rem;
		}

		.prose :global(h2) {
			font-size: 1.25rem;
		}
	}
</style>
