<script lang="ts">
	import SeoHead from '$lib/components/SeoHead.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const title = 'PGP Blog';
	const description = 'In-depth articles about PGP encryption tools, software comparisons, and best practices for secure communication.';
	const canonical = 'https://keychainpgp.org/blog/';

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog/' }
	];

	const posts = [
		{
			title: 'Best PGP Tools in 2026',
			description: 'A comprehensive ranking of the best PGP encryption tools available today — from desktop apps to browser-based solutions.',
			href: '/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGP Software Comparison',
			description: 'A detailed side-by-side comparison of PGP software — features, security, platform support, and ease of use.',
			href: '/blog/pgp-software-comparison/',
			date: '2026-02-25'
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

<div class="blog-index">
	<div class="blog-index-container">
		<Breadcrumbs crumbs={breadcrumbs} />
		<h1>PGP Blog</h1>
		<p class="blog-intro">In-depth articles about PGP encryption tools, software comparisons, and best practices for secure communication.</p>

		<div class="posts-list">
			{#each posts as post}
				<a href={post.href} class="post-card">
					<div class="post-content">
						<time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
						<h2>{post.title}</h2>
						<p>{post.description}</p>
						<span class="post-link">Read article →</span>
					</div>
				</a>
			{/each}
		</div>

		<CtaBanner />
	</div>
</div>

<style>
	.blog-index {
		padding: 6rem 1.5rem 4rem;
	}

	.blog-index-container {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.25rem;
		font-weight: 800;
		color: var(--text);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.blog-intro {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0 0 2.5rem;
	}

	.posts-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 3rem;
	}

	.post-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 2rem;
		text-decoration: none;
		transition: border-color 0.2s, transform 0.1s;
	}

	.post-card:hover {
		border-color: var(--primary);
		transform: translateY(-2px);
	}

	.post-card time {
		font-size: 0.8125rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	.post-card h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text);
		margin: 0.5rem 0 0.75rem;
	}

	.post-card p {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0 0 1rem;
	}

	.post-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--primary);
	}

	.post-card:hover .post-link {
		color: var(--primary-hover);
	}

	@media (max-width: 640px) {
		.blog-index {
			padding: 5rem 1rem 3rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		.post-card h2 {
			font-size: 1.25rem;
		}
	}
</style>
