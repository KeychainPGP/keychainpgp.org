<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { contentLocales } from '$lib/content';

	let { locale = 'en' }: { locale: Locale } = $props();

	const clp = $derived(locale !== 'en' && contentLocales.includes(locale) ? `/${locale}` : '');
</script>

<footer class="footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<img src="/icons/icon-64.png" alt="KeychainPGP" width="24" height="24" />
			<span>KeychainPGP</span>
		</div>

		<div class="footer-content-links">
			<a href={`${clp}/pgp-online-encrypt/`}>{t(locale, 'footer.link.onlineTool')}</a>
			<a href={`${clp}/docs/what-is-pgp/`}>{t(locale, 'footer.link.whatIsPgp')}</a>
			<a href={`${clp}/docs/how-to-use-pgp/`}>{t(locale, 'footer.link.howToUsePgp')}</a>
			<a href={`${clp}/docs/pgp-vs-gpg/`}>{t(locale, 'footer.link.pgpVsGpg')}</a>
			<a href={`${clp}/docs/pgp-for-beginners/`}>{t(locale, 'footer.link.pgpForBeginners')}</a>
			<a href={`${clp}/blog/best-pgp-tools-2026/`}>{t(locale, 'footer.link.bestPgpTools')}</a>
		</div>

		<div class="footer-links">
			<a href="https://github.com/keychainpgp/keychainpgp" target="_blank" rel="noopener">{t(locale, 'footer.source')}</a>
			<a href="https://keychainpgp.github.io" target="_blank" rel="noopener">{t(locale, 'footer.webapp')}</a>
			<span class="separator">&middot;</span>
			<span class="license">{t(locale, 'footer.license')}</span>
		</div>

		<p class="footer-privacy">{t(locale, 'footer.privacy')}</p>
		<p class="footer-made">{t(locale, 'footer.madeWith')}</p>
	</div>
</footer>

<style>
	.footer {
		padding: 3rem 1.5rem;
		background: var(--bg-alt);
		border-top: 1px solid var(--border);
	}

	.footer-inner {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.footer-brand {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1rem;
		color: var(--text);
		margin-bottom: 1rem;
	}

	.footer-content-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1.25rem;
		flex-wrap: wrap;
	}

	.footer-content-links a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.8125rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.footer-content-links a:hover {
		color: var(--primary);
	}

	.footer-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.footer-links a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: var(--primary);
	}

	.separator {
		color: var(--text-muted);
	}

	.license {
		color: var(--text-muted);
		font-size: 0.875rem;
	}

	.footer-privacy {
		color: var(--text-muted);
		font-size: 0.8125rem;
		margin: 0 0 0.5rem;
	}

	.footer-made {
		color: var(--text-muted);
		font-size: 0.8125rem;
		margin: 0;
	}
</style>
