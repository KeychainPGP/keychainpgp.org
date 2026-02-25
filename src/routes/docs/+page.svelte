<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const title = 'PGP Documentation';
	const description = 'Learn everything about PGP encryption — from beginner guides to advanced topics like clipboard encryption and key management.';
	const canonical = 'https://keychainpgp.org/docs/';

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Docs', href: '/docs/' }
	];

	const docs = [
		{
			title: 'What is PGP?',
			description: 'Understand the fundamentals of PGP encryption — public-key cryptography, digital signatures, the web of trust, and real-world use cases.',
			href: '/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'How to Use PGP',
			description: 'A step-by-step tutorial covering key generation, encrypting messages, decrypting, digital signatures, and key sharing.',
			href: '/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'Understand the differences between PGP, GPG (GnuPG), and the OpenPGP standard — history, implementations, and which to choose.',
			href: '/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP Tools Overview',
			description: 'Explore the landscape of PGP tools — desktop clients, CLI utilities, browser extensions, and web-based solutions.',
			href: '/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP for Beginners',
			description: 'New to PGP? Start here. Learn the core concepts in plain language, send your first encrypted message, and avoid common mistakes.',
			href: '/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Clipboard Encryption',
			description: 'Master the clipboard-first PGP workflow — encrypt and decrypt text from any application using global hotkeys.',
			href: '/docs/clipboard-encryption/',
			icon: '📋'
		}
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": title,
		"description": description,
		"url": canonical,
		"publisher": {
			"@type": "Organization",
			"name": "KeychainPGP",
			"url": "https://keychainpgp.org"
		}
	};
</script>

<SeoHead {title} {description} {canonical} {jsonLd} />

<div class="docs-index">
	<div class="docs-index-container">
		<Breadcrumbs crumbs={breadcrumbs} />
		<h1>PGP Documentation</h1>
		<p class="docs-intro">Everything you need to know about PGP encryption. Whether you're just getting started or looking for advanced topics, these guides cover it all.</p>

		<div class="docs-grid">
			{#each docs as doc}
				<a href={doc.href} class="doc-card">
					<span class="doc-icon">{doc.icon}</span>
					<h2>{doc.title}</h2>
					<p>{doc.description}</p>
					<span class="doc-link">Read guide →</span>
				</a>
			{/each}
		</div>

		<CtaBanner />
	</div>
</div>

<style>
	.docs-index {
		padding: 6rem 1.5rem 4rem;
	}

	.docs-index-container {
		max-width: 900px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.25rem;
		font-weight: 800;
		color: var(--text);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.docs-intro {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0 0 2.5rem;
	}

	.docs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.doc-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.75rem;
		text-decoration: none;
		transition: border-color 0.2s, transform 0.1s;
		display: flex;
		flex-direction: column;
	}

	.doc-card:hover {
		border-color: var(--primary);
		transform: translateY(-2px);
	}

	.doc-icon {
		font-size: 1.75rem;
		margin-bottom: 0.75rem;
	}

	.doc-card h2 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text);
		margin: 0 0 0.5rem;
	}

	.doc-card p {
		font-size: 0.9375rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 1rem;
		flex: 1;
	}

	.doc-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--primary);
	}

	.doc-card:hover .doc-link {
		color: var(--primary-hover);
	}

	@media (max-width: 640px) {
		.docs-index {
			padding: 5rem 1rem 3rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		.docs-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
