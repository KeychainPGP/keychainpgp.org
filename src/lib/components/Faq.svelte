<script lang="ts">
	import { t, type Locale } from '$lib/i18n';

	let { locale = 'en' }: { locale: Locale } = $props();

	const faqKeys = Array.from({ length: 10 }, (_, i) => i + 1);
</script>

<section id="faq" class="faq">
	<div class="section-inner">
		<h2>{t(locale, 'faq.title')}</h2>
		<div class="faq-list">
			{#each faqKeys as i}
				<details class="faq-item">
					<summary>{t(locale, `faq.q${i}`)}</summary>
					<p>{t(locale, `faq.a${i}`)}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq {
		padding: 6rem 1.5rem;
		background: var(--bg-alt);
	}

	.section-inner {
		max-width: 800px;
		margin: 0 auto;
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 800;
		text-align: center;
		margin: 0 0 2.5rem;
		color: var(--text);
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.faq-item {
		border: 1px solid var(--border);
		border-radius: 12px;
		overflow: hidden;
		background: var(--bg-card);
	}

	.faq-item summary {
		padding: 1rem 1.25rem;
		font-weight: 600;
		color: var(--text);
		cursor: pointer;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: background 0.2s;
	}

	.faq-item summary:hover {
		background: var(--bg-alt);
	}

	.faq-item summary::after {
		content: '+';
		font-size: 1.25rem;
		color: var(--text-muted);
		flex-shrink: 0;
		margin-left: 1rem;
	}

	.faq-item[open] summary::after {
		content: '\2212';
	}

	.faq-item summary::-webkit-details-marker {
		display: none;
	}

	.faq-item p {
		padding: 0 1.25rem 1rem;
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0;
	}
</style>
