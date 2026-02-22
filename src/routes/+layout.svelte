<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Locale } from '$lib/i18n';

	let { data, children } = $props();

	let locale: Locale = $derived(data.locale ?? 'en');
</script>

<Nav {locale} />
<main>
	{@render children()}
</main>
<Footer {locale} />
