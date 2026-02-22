<script lang="ts">
	import { browser } from '$app/environment';

	let dark = $state(true);

	if (browser) {
		const saved = localStorage.getItem('theme');
		dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
		applyTheme();
	}

	function toggle() {
		dark = !dark;
		if (browser) {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
			applyTheme();
		}
	}

	function applyTheme() {
		document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
	}
</script>

<button class="theme-toggle" onclick={toggle} aria-label={dark ? 'Light mode' : 'Dark mode'} title={dark ? 'Light mode' : 'Dark mode'}>
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
		{#if dark}
			<circle cx="12" cy="12" r="5" />
			<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
		{:else}
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		{/if}
	</svg>
</button>

<style>
	.theme-toggle {
		background: none;
		border: 1px solid var(--border);
		color: var(--text-secondary);
		cursor: pointer;
		padding: 0.375rem;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s, border-color 0.2s;
	}

	.theme-toggle:hover {
		color: var(--primary);
		border-color: var(--primary);
	}
</style>
