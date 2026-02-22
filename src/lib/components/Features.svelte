<script lang="ts">
	import { t, type Locale } from '$lib/i18n';

	let { locale = 'en' }: { locale: Locale } = $props();
</script>

<section id="features" class="features">
	<div class="section-inner">
		<h2>{t(locale, 'features.title')}</h2>

		<div class="grid">
			<div class="card">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<rect x="8" y="2" width="8" height="4" rx="1" />
						<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
						<path d="M9 14l2 2 4-4" />
					</svg>
				</div>
				<h3>{t(locale, 'features.clipboard.title')}</h3>
				<p>{t(locale, 'features.clipboard.description')}</p>
			</div>

			<div class="card">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<rect x="3" y="11" width="18" height="11" rx="2" />
						<path d="M7 11V7a5 5 0 0 1 10 0v4" />
						<circle cx="12" cy="16" r="1" />
					</svg>
				</div>
				<h3>{t(locale, 'features.crypto.title')}</h3>
				<p>{t(locale, 'features.crypto.description')}</p>
			</div>

			<div class="card">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<rect x="2" y="3" width="20" height="14" rx="2" />
						<path d="M8 21h8M12 17v4" />
						<rect x="6" y="18" width="4" height="3" rx="0.5" opacity="0.5" />
						<rect x="14" y="18" width="4" height="3" rx="0.5" opacity="0.5" />
					</svg>
				</div>
				<h3>{t(locale, 'features.crossplatform.title')}</h3>
				<p>{t(locale, 'features.crossplatform.description')}</p>
			</div>

			<div class="card">
				<div class="card-icon">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
						<path d="M9 12l2 2 4-4" />
					</svg>
				</div>
				<h3>{t(locale, 'features.opensource.title')}</h3>
				<p>{t(locale, 'features.opensource.description')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.features {
		padding: 6rem 1.5rem;
	}

	.section-inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 800;
		text-align: center;
		margin: 0 0 3rem;
		color: var(--text);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 16px;
		padding: 2rem;
		transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
	}

	.card:hover {
		border-color: var(--primary);
		transform: translateY(-4px);
		box-shadow: 0 12px 32px var(--shadow);
	}

	.card-icon {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--primary-soft);
		color: var(--primary);
		border-radius: 12px;
		margin-bottom: 1.25rem;
	}

	h3 {
		font-size: 1.125rem;
		font-weight: 700;
		margin: 0 0 0.75rem;
		color: var(--text);
	}

	p {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0;
	}
</style>
