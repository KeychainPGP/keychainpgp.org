<script lang="ts">
	import { locales, localeNames, type Locale } from '$lib/i18n';

	let { locale = 'en' }: { locale: Locale } = $props();

	let selected = $state(locale);

	function onChange() {
		localStorage.setItem('locale', selected);
		const hash = window.location.hash;
		window.location.href = (selected === 'en' ? '/' : `/${selected}/`) + hash;
	}
</script>

<select class="lang-switcher" bind:value={selected} onchange={onChange} aria-label="Language">
	{#each locales as loc}
		<option value={loc}>{localeNames[loc]}</option>
	{/each}
</select>

<style>
	.lang-switcher {
		background: var(--bg-card);
		color: var(--text);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.375rem 0.5rem;
		font-size: 0.8125rem;
		cursor: pointer;
		outline: none;
		max-width: 130px;
		transition: border-color 0.2s;
	}

	.lang-switcher:hover,
	.lang-switcher:focus {
		border-color: var(--primary);
	}
</style>
