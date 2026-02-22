<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { detectPlatform, type Platform } from '$lib/utils/platform';
	import { browser } from '$app/environment';

	let { locale = 'en' }: { locale: Locale } = $props();

	const RELEASES_URL = 'https://github.com/keychainpgp/keychainpgp/releases/latest';
	const WEB_APP_URL = 'https://keychainpgp.github.io';

	let platform = $state<Platform>('unknown');

	$effect(() => {
		if (browser) platform = detectPlatform();
	});

	const platforms = [
		{ id: 'windows' as Platform, icon: 'M3 5.548l7.205-0.99v6.96H3zm0 12.9l7.205 0.992v-6.88H3zm8.013 1.098L21 20.998v-8.438h-9.987zm0-14.098v7.07H21V3z', label: 'download.windows' },
		{ id: 'macos' as Platform, icon: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z', label: 'download.macos' },
		{ id: 'linux' as Platform, icon: 'M12.5 2c-1.5 0-2.5 1.5-2.5 3.5 0 .73.18 1.42.5 2-.89.46-1.55 1.25-1.84 2.17C7.66 10.13 7 11.15 7 12.5c0 1.62.84 3.05 2.1 3.87-.08.37-.1.74-.1 1.13 0 2.21 1.34 4 3 4.5.37 0 .74-.08 1.1-.22.36.14.73.22 1.1.22 1.66-.5 3-2.29 3-4.5 0-.39-.02-.76-.1-1.13C18.16 15.55 19 14.12 19 12.5c0-1.35-.66-2.37-1.66-2.83-.29-.92-.95-1.71-1.84-2.17.32-.58.5-1.27.5-2C16 3.5 14 2 12.5 2z', label: 'download.linux' },
		{ id: 'android' as Platform, icon: 'M17.523 15.341c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906m-11.046 0c-.5 0-.906-.406-.906-.906s.406-.906.906-.906.906.406.906.906-.406.906-.906.906M17.882 8.15l1.891-3.275a.394.394 0 0 0-.144-.538.394.394 0 0 0-.538.144l-1.916 3.318A11.462 11.462 0 0 0 12 6.566c-1.838 0-3.558.475-5.175 1.233L4.909 4.481a.394.394 0 0 0-.538-.144.394.394 0 0 0-.144.538L6.118 8.15C2.952 9.89 1.03 12.676.573 16h22.854c-.457-3.324-2.379-6.11-5.545-7.85', label: 'download.android' }
	];
</script>

<section id="download" class="download">
	<div class="section-inner">
		<h2>{t(locale, 'download.title')}</h2>
		<p class="subtitle">{t(locale, 'download.subtitle')}</p>

		{#if platform !== 'unknown'}
			<p class="detected">{t(locale, 'download.detectedOs')} <strong>{platform === 'macos' ? 'macOS' : platform.charAt(0).toUpperCase() + platform.slice(1)}</strong></p>
		{/if}

		<div class="platforms">
			{#each platforms as p}
				<a
					href={RELEASES_URL}
					target="_blank"
					rel="noopener"
					class="platform-card"
					class:recommended={p.id === platform}
				>
					<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
						<path d={p.icon} />
					</svg>
					<span class="platform-name">{t(locale, p.label)}</span>
					{#if p.id === platform}
						<span class="badge">Recommended</span>
					{/if}
				</a>
			{/each}

			<a href={WEB_APP_URL} target="_blank" rel="noopener" class="platform-card">
				<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10" />
					<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
				</svg>
				<span class="platform-name">{t(locale, 'download.webApp')}</span>
			</a>
		</div>

		<a href="https://github.com/keychainpgp/keychainpgp/releases" target="_blank" rel="noopener" class="all-releases">
			{t(locale, 'download.allReleases')}
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M7 17l9.2-9.2M17 17V7H7" />
			</svg>
		</a>
	</div>
</section>

<style>
	.download {
		padding: 6rem 1.5rem;
	}

	.section-inner {
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 800;
		margin: 0 0 1rem;
		color: var(--text);
	}

	.subtitle {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0 0 1rem;
	}

	.detected {
		font-size: 0.9375rem;
		color: var(--text-muted);
		margin: 0 0 2rem;
	}

	.detected strong {
		color: var(--primary);
	}

	.platforms {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.platform-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 1.5rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 16px;
		text-decoration: none;
		color: var(--text-secondary);
		transition: all 0.2s;
		position: relative;
	}

	.platform-card:hover {
		border-color: var(--primary);
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px var(--shadow);
	}

	.platform-card.recommended {
		border-color: var(--primary);
		background: var(--primary-soft);
		color: var(--primary);
	}

	.platform-name {
		font-weight: 600;
		font-size: 0.9375rem;
	}

	.badge {
		position: absolute;
		top: -8px;
		right: -8px;
		background: var(--primary);
		color: white;
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		border-radius: 100px;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.all-releases {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		color: var(--primary);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9375rem;
		transition: gap 0.2s;
	}

	.all-releases:hover {
		gap: 0.625rem;
	}
</style>
