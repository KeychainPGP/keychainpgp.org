<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	let { data } = $props();
	let c = $derived(data.content);
	let locale = $derived(data.locale);
	let canonical = $derived(`https://keychainpgp.org/${locale}/docs/`);

	let breadcrumbs = $derived([
		{ label: 'Home', href: `/${locale}/` },
		{ label: 'Docs', href: `/${locale}/docs/` }
	]);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": c.title,
		"description": c.description,
		"url": canonical,
		"publisher": {
			"@type": "Organization",
			"name": "KeychainPGP",
			"url": "https://keychainpgp.org"
		}
	};
</script>

<SeoHead title={c.title} description={c.description} {canonical} {jsonLd} />

<div class="docs-index">
	<div class="docs-index-container">
		<Breadcrumbs crumbs={breadcrumbs} />
		<h1>{c.title}</h1>
		<p class="docs-intro">{c.intro}</p>

		<div class="docs-grid">
			{#each c.docs as doc}
				<a href={doc.href} class="doc-card">
					<span class="doc-icon">{doc.icon}</span>
					<h2>{doc.title}</h2>
					<p>{doc.description}</p>
					<span class="doc-link">&rarr;</span>
				</a>
			{/each}
		</div>

		<CtaBanner />
	</div>
</div>

<style>
	.docs-index {
		padding: 6rem 1.5rem 4rem;
	}

	.docs-index-container {
		max-width: 900px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.25rem;
		font-weight: 800;
		color: var(--text);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.docs-intro {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0 0 2.5rem;
	}

	.docs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.doc-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.75rem;
		text-decoration: none;
		transition: border-color 0.2s, transform 0.1s;
		display: flex;
		flex-direction: column;
	}

	.doc-card:hover {
		border-color: var(--primary);
		transform: translateY(-2px);
	}

	.doc-icon {
		font-size: 1.75rem;
		margin-bottom: 0.75rem;
	}

	.doc-card h2 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text);
		margin: 0 0 0.5rem;
	}

	.doc-card p {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 1rem;
		flex: 1;
	}

	.doc-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--primary);
	}

	@media (max-width: 640px) {
		.docs-index {
			padding: 5rem 1rem 3rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		.docs-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
