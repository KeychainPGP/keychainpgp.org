<script lang="ts">
	interface Crumb {
		label: string;
		href: string;
	}

	let { crumbs }: { crumbs: Crumb[] } = $props();

	const jsonLd = $derived({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": crumbs.map((crumb, i) => ({
			"@type": "ListItem",
			"position": i + 1,
			"name": crumb.label,
			"item": `https://keychainpgp.org${crumb.href}`
		}))
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<nav aria-label="Breadcrumb" class="breadcrumbs">
	{#each crumbs as crumb, i}
		{#if i > 0}<span class="sep">/</span>{/if}
		{#if i === crumbs.length - 1}
			<span class="current">{crumb.label}</span>
		{:else}
			<a href={crumb.href}>{crumb.label}</a>
		{/if}
	{/each}
</nav>

<style>
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--text-muted);
		margin-bottom: 2rem;
	}

	.breadcrumbs a {
		color: var(--text-secondary);
		text-decoration: none;
		transition: color 0.2s;
	}

	.breadcrumbs a:hover {
		color: var(--primary);
	}

	.current {
		color: var(--text);
		font-weight: 500;
	}

	.sep {
		color: var(--text-muted);
		opacity: 0.5;
	}
</style>
