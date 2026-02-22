<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import ThemeToggle from './ThemeToggle.svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	let { locale = 'en' }: { locale: Locale } = $props();

	let mobileOpen = $state(false);
</script>

<nav class="nav">
	<div class="nav-inner">
		<a href={locale === 'en' ? '/' : `/${locale}`} class="nav-brand">
			<img src="/icons/icon-64.png" alt="KeychainPGP" width="32" height="32" />
			<span>KeychainPGP</span>
		</a>

		<button class="nav-toggle" onclick={() => mobileOpen = !mobileOpen} aria-label="Menu">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				{#if mobileOpen}
					<path d="M6 6l12 12M6 18L18 6" />
				{:else}
					<path d="M3 6h18M3 12h18M3 18h18" />
				{/if}
			</svg>
		</button>

		<div class="nav-links" class:open={mobileOpen}>
			<a href="#features" onclick={() => mobileOpen = false}>{t(locale, 'nav.features')}</a>
			<a href="#how-it-works" onclick={() => mobileOpen = false}>{t(locale, 'nav.howItWorks')}</a>
			<a href="#download" onclick={() => mobileOpen = false}>{t(locale, 'nav.download')}</a>
			<a href="#donate" onclick={() => mobileOpen = false}>{t(locale, 'nav.donate')}</a>
			<a href="https://github.com/keychainpgp/keychainpgp" target="_blank" rel="noopener">{t(locale, 'nav.github')}</a>
			<a href="https://keychainpgp.github.io" target="_blank" rel="noopener" class="nav-cta">{t(locale, 'nav.tryBrowser')}</a>
			<div class="nav-controls">
				<LanguageSwitcher {locale} />
				<ThemeToggle />
			</div>
		</div>
	</div>
</nav>

<style>
	.nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: var(--bg-nav);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1.5rem;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1.125rem;
		color: var(--text);
		text-decoration: none;
	}

	.nav-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--text);
		cursor: pointer;
		padding: 0.5rem;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.nav-links a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--primary);
	}

	.nav-cta {
		background: var(--primary);
		color: white !important;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		font-weight: 600 !important;
		transition: background 0.2s, transform 0.1s !important;
	}

	.nav-cta:hover {
		background: var(--primary-hover) !important;
		transform: translateY(-1px);
	}

	.nav-controls {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	@media (max-width: 768px) {
		.nav-toggle {
			display: block;
		}

		.nav-links {
			display: none;
			position: absolute;
			top: 64px;
			left: 0;
			right: 0;
			background: var(--bg-nav);
			border-bottom: 1px solid var(--border);
			flex-direction: column;
			padding: 1rem 1.5rem;
			gap: 1rem;
		}

		.nav-links.open {
			display: flex;
		}

		.nav-cta {
			text-align: center;
			width: 100%;
		}
	}
</style>
