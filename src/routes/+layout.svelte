<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Locale } from '$lib/i18n';

	let { data, children } = $props();

	let locale: Locale = $derived(data.locale ?? 'en');

	const orgSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "KeychainPGP",
		"url": "https://keychainpgp.org",
		"logo": "https://keychainpgp.org/icons/icon-128.png",
		"sameAs": [
			"https://github.com/keychainpgp"
		]
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`}
</svelte:head>

<Nav {locale} />
<main>
	{@render children()}
</main>
<Footer {locale} />
