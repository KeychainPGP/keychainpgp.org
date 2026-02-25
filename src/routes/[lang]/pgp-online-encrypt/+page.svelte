<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';

	let { data } = $props();
	let c = $derived(data.content);
	let locale = $derived(data.locale);
	let canonical = $derived(`https://keychainpgp.org/${locale}/pgp-online-encrypt/`);

	let faqSchema = $derived({
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": c.faqItems.map(item => ({
			"@type": "Question",
			"name": item.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": item.answer
			}
		}))
	});

	let howToSchema = $derived({
		"@context": "https://schema.org",
		"@type": "HowTo",
		"name": c.howToTitle,
		"description": c.heroSubtitle,
		"tool": {
			"@type": "HowToTool",
			"name": "KeychainPGP Web App"
		},
		"step": c.steps.map((step, i) => ({
			"@type": "HowToStep",
			"position": i + 1,
			"name": step.title,
			"text": step.text
		}))
	});

	let softwareSchema = $derived({
		"@context": "https://schema.org",
		"@type": "WebApplication",
		"name": "KeychainPGP Online",
		"applicationCategory": "SecurityApplication",
		"operatingSystem": "Any (browser-based)",
		"description": c.heroSubtitle,
		"url": canonical,
		"browserRequirements": "Requires a modern browser with WebAssembly support",
		"softwareVersion": "0.1.1",
		"license": "https://opensource.org/licenses/MIT",
		"author": {
			"@type": "Organization",
			"name": "KeychainPGP",
			"url": "https://github.com/keychainpgp"
		},
		"offers": {
			"@type": "Offer",
			"price": "0",
			"priceCurrency": "USD"
		}
	});
</script>

<SeoHead
	title={c.heroTitle}
	description={c.heroSubtitle}
	{canonical}
	jsonLd={[faqSchema, howToSchema, softwareSchema]}
/>

<!-- Hero -->
<section class="landing-hero">
	<div class="landing-inner">
		<h1>{c.heroTitle}</h1>
		<p class="landing-subtitle">{c.heroSubtitle}</p>
		<div class="landing-ctas">
			<a href="https://keychainpgp.github.io" target="_blank" rel="noopener" class="btn-primary">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
				{c.ctaOpen}
			</a>
			<a href="#how-to" class="btn-secondary">{c.ctaHow}</a>
		</div>
		<p class="landing-trust">{c.trustLine}</p>
	</div>
</section>

<!-- What is PGP -->
<section class="landing-section">
	<div class="landing-inner">
		<h2>{c.whatIsTitle}</h2>
		<p>{c.whatIsText}</p>
	</div>
</section>

<!-- How to Encrypt -->
<section class="landing-section landing-section-alt" id="how-to">
	<div class="landing-inner">
		<h2>{c.howToTitle}</h2>
		<div class="steps">
			{#each c.steps as step, i}
				<div class="step">
					<div class="step-num">{i + 1}</div>
					<div class="step-content">
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="landing-section" id="faq">
	<div class="landing-inner">
		<h2>{c.faqTitle}</h2>
		<div class="faq-list">
			{#each c.faqItems as item}
				<details class="faq-item">
					<summary>{item.question}</summary>
					<p>{item.answer}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- Learn More -->
<section class="landing-section landing-section-alt">
	<div class="landing-inner">
		<h2>{c.learnMoreTitle}</h2>
		<div class="links-grid">
			{#each c.learnMoreLinks as link}
				<a href={link.href} class="link-card">
					<h3>{link.title}</h3>
					<p>{link.text}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.landing-hero {
		padding: 8rem 1.5rem 5rem;
		text-align: center;
		background: linear-gradient(180deg, var(--bg) 0%, var(--bg-alt) 100%);
	}

	.landing-inner {
		max-width: 900px;
		margin: 0 auto;
	}

	.landing-hero h1 {
		font-size: 3rem;
		font-weight: 900;
		color: var(--text);
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	.landing-subtitle {
		font-size: 1.25rem;
		color: var(--text-secondary);
		line-height: 1.7;
		max-width: 640px;
		margin: 0 auto 2rem;
	}

	.landing-ctas {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.landing-trust {
		margin-top: 1.5rem;
		font-size: 0.875rem;
		color: var(--text-muted);
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--primary);
		color: white;
		padding: 0.875rem 1.75rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: background 0.2s, transform 0.1s;
		box-shadow: 0 4px 16px var(--primary-shadow);
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
		padding: 0.875rem 1.75rem;
		border-radius: 12px;
		font-weight: 500;
		font-size: 1rem;
		text-decoration: none;
		border: 1px solid var(--border);
		transition: color 0.2s, border-color 0.2s;
	}

	.btn-secondary:hover {
		color: var(--primary);
		border-color: var(--primary);
	}

	.landing-section {
		padding: 4rem 1.5rem;
	}

	.landing-section-alt {
		background: var(--bg-alt);
	}

	.landing-section h2 {
		font-size: 1.875rem;
		font-weight: 800;
		color: var(--text);
		margin-bottom: 1.25rem;
	}

	.landing-section p {
		font-size: 1.0625rem;
		color: var(--text-secondary);
		line-height: 1.8;
		margin-bottom: 1rem;
	}

	.landing-section a:not(.btn-primary):not(.btn-secondary) {
		color: var(--primary);
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.landing-section a:not(.btn-primary):not(.btn-secondary):hover {
		color: var(--primary-hover);
	}

	.landing-section ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0;
	}

	.landing-section li {
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.landing-section li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.85rem;
		width: 6px;
		height: 6px;
		background: var(--primary);
		border-radius: 50%;
	}

	.landing-section :global(strong) {
		color: var(--text);
		font-weight: 600;
	}

	.landing-section :global(code) {
		font-family: 'JetBrains Mono', monospace;
		background: var(--bg-card);
		padding: 0.125rem 0.375rem;
		border-radius: 4px;
		font-size: 0.875em;
		color: var(--primary);
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.step {
		display: flex;
		gap: 1.25rem;
		align-items: flex-start;
	}

	.step-num {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		background: var(--primary);
		color: white;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.125rem;
	}

	.step-content h3 {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 0.25rem;
	}

	.step-content p {
		font-size: 1rem;
		margin: 0;
	}

	.faq-list {
		margin-top: 1.5rem;
	}

	.faq-item {
		border: 1px solid var(--border);
		border-radius: 12px;
		margin-bottom: 0.75rem;
		overflow: hidden;
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
		background: var(--bg-card);
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

	.links-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}

	.link-card {
		display: block;
		padding: 1.25rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		text-decoration: none !important;
		transition: border-color 0.2s, transform 0.1s;
	}

	.link-card:hover {
		border-color: var(--primary);
		transform: translateY(-2px);
	}

	.link-card h3 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 0.375rem;
	}

	.link-card p {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.5;
		margin: 0;
	}

	@media (max-width: 640px) {
		.landing-hero {
			padding: 6rem 1rem 3rem;
		}

		.landing-hero h1 {
			font-size: 2rem;
		}

		.landing-subtitle {
			font-size: 1.0625rem;
		}

		.landing-section {
			padding: 3rem 1rem;
		}

		.landing-section h2 {
			font-size: 1.5rem;
		}

		.step {
			flex-direction: column;
			gap: 0.75rem;
		}

	}
</style>
