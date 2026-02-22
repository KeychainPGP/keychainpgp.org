<script lang="ts">
	import { t, type Locale } from '$lib/i18n';

	let { locale = 'en' }: { locale: Locale } = $props();
</script>

<section id="how-it-works" class="how-it-works">
	<div class="section-inner">
		<h2>{t(locale, 'howItWorks.title')}</h2>

		<div class="steps">
			<div class="step">
				<div class="step-number">1</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<rect x="8" y="2" width="8" height="4" rx="1" />
						<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
					</svg>
				</div>
				<h3>{t(locale, 'howItWorks.step1.title')}</h3>
				<p>{t(locale, 'howItWorks.step1.description')}</p>
			</div>

			<div class="connector">
				<svg width="40" height="24" viewBox="0 0 40 24">
					<path d="M0 12h32M28 6l6 6-6 6" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>

			<div class="step">
				<div class="step-number">2</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<rect x="3" y="11" width="18" height="11" rx="2" />
						<path d="M7 11V7a5 5 0 0 1 10 0v4" />
					</svg>
				</div>
				<h3>{t(locale, 'howItWorks.step2.title')}</h3>
				<p>{t(locale, 'howItWorks.step2.description')}</p>
			</div>

			<div class="connector">
				<svg width="40" height="24" viewBox="0 0 40 24">
					<path d="M0 12h32M28 6l6 6-6 6" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>

			<div class="step">
				<div class="step-number">3</div>
				<div class="step-icon">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
						<rect x="8" y="2" width="8" height="4" rx="1" />
						<path d="M9 14l2 2 4-4" />
					</svg>
				</div>
				<h3>{t(locale, 'howItWorks.step3.title')}</h3>
				<p>{t(locale, 'howItWorks.step3.description')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		padding: 6rem 1.5rem;
		background: var(--bg-alt);
	}

	.section-inner {
		max-width: 1000px;
		margin: 0 auto;
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 800;
		text-align: center;
		margin: 0 0 3rem;
		color: var(--text);
	}

	.steps {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.step {
		flex: 1;
		text-align: center;
		padding: 2rem 1.5rem;
		position: relative;
	}

	.step-number {
		position: absolute;
		top: 0.5rem;
		right: 1rem;
		font-size: 3rem;
		font-weight: 900;
		color: var(--primary-soft-text);
		opacity: 0.15;
		line-height: 1;
	}

	.step-icon {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--primary-soft);
		color: var(--primary);
		border-radius: 16px;
		margin: 0 auto 1.25rem;
	}

	.connector {
		flex-shrink: 0;
		opacity: 0.5;
	}

	h3 {
		font-size: 1.25rem;
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

	@media (max-width: 768px) {
		.steps {
			flex-direction: column;
		}

		.connector {
			transform: rotate(90deg);
		}

		.step {
			max-width: 320px;
		}
	}
</style>
