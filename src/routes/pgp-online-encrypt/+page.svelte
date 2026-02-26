<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import { t } from '$lib/i18n';

	const locale = 'en';
	const faqKeys = Array.from({ length: 10 }, (_, i) => i + 1);

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": faqKeys.map(i => ({
			"@type": "Question",
			"name": t(locale, `faq.q${i}`),
			"acceptedAnswer": {
				"@type": "Answer",
				"text": t(locale, `faq.a${i}`)
			}
		}))
	};

	const howToSchema = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		"name": "How to Encrypt a Message with PGP Online",
		"description": "Step-by-step guide to encrypting messages using PGP directly in your browser with KeychainPGP.",
		"tool": {
			"@type": "HowToTool",
			"name": "KeychainPGP Web App"
		},
		"step": [
			{
				"@type": "HowToStep",
				"position": 1,
				"name": "Open the online PGP tool",
				"text": "Navigate to the KeychainPGP web app at keychainpgp.github.io. The app loads entirely in your browser — no installation or account required."
			},
			{
				"@type": "HowToStep",
				"position": 2,
				"name": "Generate or import a PGP key",
				"text": "Create a new Ed25519 + X25519 key pair by entering your name and email, or import an existing PGP key in ASCII-armored format."
			},
			{
				"@type": "HowToStep",
				"position": 3,
				"name": "Import the recipient's public key",
				"text": "Add your recipient's public key by pasting their ASCII-armored public key block into the Keys tab."
			},
			{
				"@type": "HowToStep",
				"position": 4,
				"name": "Enter your message",
				"text": "Go to the Encrypt tab and type or paste the message you want to encrypt in the message field."
			},
			{
				"@type": "HowToStep",
				"position": 5,
				"name": "Select recipient and encrypt",
				"text": "Choose the recipient from your key list and click 'Encrypt to Clipboard'. The PGP-encrypted message is copied to your clipboard."
			},
			{
				"@type": "HowToStep",
				"position": 6,
				"name": "Send the encrypted message",
				"text": "Paste the encrypted message (starting with -----BEGIN PGP MESSAGE-----) into any email, chat, or messaging app. Only the recipient can decrypt it."
			}
		]
	};

	const softwareSchema = {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		"name": "KeychainPGP Online",
		"applicationCategory": "SecurityApplication",
		"operatingSystem": "Any (browser-based)",
		"description": "Free online PGP encryption and decryption tool. Encrypt messages with OpenPGP directly in your browser using WebAssembly. No installation required.",
		"url": "https://keychainpgp.org/pgp-online-encrypt/",
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
	};
</script>

<SeoHead
	title="Free Online PGP Encryption Tool"
	description="Encrypt and decrypt PGP messages online for free. No installation required. KeychainPGP runs entirely in your browser with military-grade OpenPGP encryption powered by Rust and WebAssembly."
	canonical="https://keychainpgp.org/pgp-online-encrypt/"
	jsonLd={[faqSchema, howToSchema, softwareSchema]}
/>

<!-- Hero -->
<section class="landing-hero">
	<div class="landing-inner">
		<h1>Free Online PGP Encryption Tool</h1>
		<p class="landing-subtitle">Encrypt and decrypt messages with OpenPGP directly in your browser. No installation, no accounts, no data sent to any server.</p>
		<div class="landing-ctas">
			<a href="https://keychainpgp.github.io" target="_blank" rel="noopener" class="btn-primary">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
				Open PGP Tool in Browser
			</a>
			<a href="#how-to" class="btn-secondary">How It Works</a>
		</div>
		<p class="landing-trust">Free & open source. MIT / Apache-2.0 license. No telemetry.</p>
	</div>
</section>

<!-- What is PGP -->
<section class="landing-section">
	<div class="landing-inner">
		<h2>What is PGP Encryption?</h2>
		<p>PGP (Pretty Good Privacy) is the gold standard for encrypting messages, emails, and files. It uses <strong>public-key cryptography</strong> — you share a public key that anyone can use to encrypt messages to you, while only your private key can decrypt them.</p>
		<p>Created in 1991, PGP is trusted by journalists, security researchers, activists, and millions of users worldwide. The <a href="/docs/what-is-pgp/">OpenPGP standard</a> (RFC 4880) ensures interoperability between different PGP implementations.</p>
		<p>KeychainPGP makes PGP accessible to everyone through a modern interface and a <a href="/docs/clipboard-encryption/">clipboard-first workflow</a> — no command line, no configuration, no complexity.</p>
	</div>
</section>

<!-- How to Encrypt -->
<section class="landing-section landing-section-alt" id="how-to">
	<div class="landing-inner">
		<h2>How to Encrypt a Message with PGP Online</h2>
		<div class="steps">
			<div class="step">
				<div class="step-num">1</div>
				<div class="step-content">
					<h3>Open the online PGP tool</h3>
					<p>Navigate to the <a href="https://keychainpgp.github.io" target="_blank" rel="noopener">KeychainPGP web app</a>. It loads entirely in your browser — no installation or account required. Everything runs locally via WebAssembly.</p>
				</div>
			</div>
			<div class="step">
				<div class="step-num">2</div>
				<div class="step-content">
					<h3>Generate or import a PGP key</h3>
					<p>Create a new <strong>Ed25519 + X25519</strong> key pair (the most modern and secure option), or import an existing PGP key in ASCII-armored format.</p>
				</div>
			</div>
			<div class="step">
				<div class="step-num">3</div>
				<div class="step-content">
					<h3>Import the recipient's public key</h3>
					<p>Add your contact's public key by pasting their key block into the Keys tab. This is the key you'll encrypt messages to.</p>
				</div>
			</div>
			<div class="step">
				<div class="step-num">4</div>
				<div class="step-content">
					<h3>Enter your message</h3>
					<p>Switch to the Encrypt tab and type or paste the message you want to protect.</p>
				</div>
			</div>
			<div class="step">
				<div class="step-num">5</div>
				<div class="step-content">
					<h3>Select recipient and encrypt</h3>
					<p>Choose the recipient from your key list and click <strong>"Encrypt to Clipboard"</strong>. The PGP-encrypted message is instantly copied.</p>
				</div>
			</div>
			<div class="step">
				<div class="step-num">6</div>
				<div class="step-content">
					<h3>Send the encrypted message</h3>
					<p>Paste the encrypted message into any email, chat, or messaging app. Only the intended recipient can decrypt it with their private key.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="landing-section" id="faq">
	<div class="landing-inner">
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

<!-- Learn More -->
<section class="landing-section landing-section-alt">
	<div class="landing-inner">
		<h2>Learn More About PGP Encryption</h2>
		<div class="links-grid">
			<a href="/docs/what-is-pgp/" class="link-card">
				<h3>What is PGP?</h3>
				<p>A complete guide to Pretty Good Privacy, public-key cryptography, and digital signatures.</p>
			</a>
			<a href="/docs/how-to-use-pgp/" class="link-card">
				<h3>How to Use PGP</h3>
				<p>Step-by-step tutorial for generating keys, encrypting messages, and verifying signatures.</p>
			</a>
			<a href="/docs/pgp-vs-gpg/" class="link-card">
				<h3>PGP vs GPG</h3>
				<p>Understand the difference between PGP, GPG (GnuPG), and the OpenPGP standard.</p>
			</a>
			<a href="/docs/pgp-for-beginners/" class="link-card">
				<h3>PGP for Beginners</h3>
				<p>Everything you need to know about PGP encryption, explained in simple terms.</p>
			</a>
			<a href="/docs/clipboard-encryption/" class="link-card">
				<h3>Clipboard Encryption</h3>
				<p>How clipboard-based PGP works, security considerations, and OPSEC features.</p>
			</a>
			<a href="/blog/best-pgp-tools-2026/" class="link-card">
				<h3>Best PGP Tools in 2026</h3>
				<p>Comprehensive comparison and ranking of the best PGP encryption software available today.</p>
			</a>
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
		background: var(--primary-bg);
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

	/* Steps */
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
		background: var(--primary-bg);
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

	/* FAQ */
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

	/* Links Grid */
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
