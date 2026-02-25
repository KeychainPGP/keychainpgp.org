<script lang="ts">
	interface Props {
		title: string;
		description: string;
		canonical: string;
		ogType?: string;
		ogImage?: string;
		publishedTime?: string;
		modifiedTime?: string;
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title,
		description,
		canonical,
		ogType = 'article',
		ogImage = 'https://keychainpgp.org/og-image.png',
		publishedTime,
		modifiedTime,
		jsonLd
	}: Props = $props();

	const siteName = 'KeychainPGP';
	let fullTitle = $derived(`${title} | ${siteName}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content={siteName} />
	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />

	{#if jsonLd}
		{#if Array.isArray(jsonLd)}
			{#each jsonLd as schema}
				{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
			{/each}
		{:else}
			{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
		{/if}
	{/if}
</svelte:head>
