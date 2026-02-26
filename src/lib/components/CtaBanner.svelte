<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { contentLocales } from '$lib/content';

	let {
		locale = 'en'
	}: {
		locale?: Locale | string;
	} = $props();

	const clp = $derived(locale !== 'en' && contentLocales.includes(locale) ? `/${locale}` : '');
</script>

<aside class="cta-banner">
	<h3>{t(locale, 'cta.heading')}</h3>
	<p>{t(locale, 'cta.description')}</p>
	<div class="cta-actions">
		<a href="https://keychainpgp.github.io" target="_blank" rel="noopener" class="btn-primary">{t(locale, 'cta.openTool')}</a>
		<a href="{clp}/pgp-online-encrypt/" class="btn-secondary">{t(locale, 'cta.downloadApp')}</a>
	</div>
</aside>

<style>
	.cta-banner {
		margin: 3rem 0 2rem;
		padding: 2rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 16px;
		text-align: center;
	}

	.cta-banner h3 {
		font-size: 1.375rem;
		font-weight: 700;
		color: var(--text);
		margin-bottom: 0.5rem;
	}

	.cta-banner p {
		color: var(--text-secondary);
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	.cta-actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--primary-bg);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 10px;
		font-weight: 600;
		font-size: 0.9375rem;
		text-decoration: none;
		transition: background 0.2s, transform 0.1s;
	}

	.btn-primary:hover {
		background: var(--primary-hover);
		transform: translateY(-1px);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		color: var(--text-secondary);
		padding: 0.75rem 1.5rem;
		border-radius: 10px;
		font-weight: 500;
		font-size: 0.9375rem;
		text-decoration: none;
		border: 1px solid var(--border);
		transition: color 0.2s, border-color 0.2s;
	}

	.btn-secondary:hover {
		color: var(--primary);
		border-color: var(--primary);
	}
</style>
