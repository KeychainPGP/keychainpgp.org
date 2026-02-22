<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { detectPlatform, platformLabels } from '$lib/utils/platform';
	import { browser } from '$app/environment';

	let { locale = 'en' }: { locale: Locale } = $props();

	let platform = $state(detectPlatform());

	$effect(() => {
		if (browser) platform = detectPlatform();
	});

	const platformName = $derived(platformLabels[platform]);
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="hero-badge">OpenPGP</div>
		<h1>{t(locale, 'hero.tagline')}</h1>
		<p class="hero-subtitle">{t(locale, 'hero.subtitle')}</p>
		<p class="hero-description">{t(locale, 'hero.description')}</p>

		<div class="hero-actions">
			<a href="#download" class="btn btn-primary">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
				{t(locale, 'hero.download')}{#if platformName}&nbsp;{platformName}{/if}
			</a>
			<a href="https://keychainpgp.github.io" target="_blank" rel="noopener" class="btn btn-secondary">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10" />
					<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
				</svg>
				{t(locale, 'hero.tryBrowser')}
			</a>
		</div>

		<p class="hero-free">{t(locale, 'hero.free')}</p>
	</div>

	<div class="hero-visual">
		<div class="terminal">
			<div class="terminal-bar">
				<span class="dot red"></span>
				<span class="dot yellow"></span>
				<span class="dot green"></span>
			</div>
			<div class="terminal-body">
				<div class="line"><span class="prompt">$</span> echo "Secret message" | keychainpgp encrypt --to alice</div>
				<div class="line output">-----BEGIN PGP MESSAGE-----</div>
				<div class="line output muted">hQEMA8p2E...</div>
				<div class="line output">-----END PGP MESSAGE-----</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: calc(100vh - 64px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6rem 1.5rem 4rem;
		gap: 4rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-inner {
		flex: 1;
		max-width: 600px;
	}

	.hero-badge {
		display: inline-block;
		background: var(--primary-soft);
		color: var(--primary);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 0.25rem 0.75rem;
		border-radius: 100px;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 800;
		line-height: 1.15;
		color: var(--text);
		margin: 0 0 1rem;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--primary);
		margin: 0 0 1rem;
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
	}

	.hero-description {
		font-size: 1.125rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 2rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.875rem 1.75rem;
		border-radius: 12px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.2s;
		cursor: pointer;
	}

	.btn-primary {
		background: var(--primary);
		color: white;
	}

	.btn-primary:hover {
		background: var(--primary-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px var(--primary-shadow);
	}

	.btn-secondary {
		background: var(--bg-card);
		color: var(--text);
		border: 1px solid var(--border);
	}

	.btn-secondary:hover {
		border-color: var(--primary);
		color: var(--primary);
		transform: translateY(-2px);
	}

	.hero-free {
		margin-top: 1.5rem;
		font-size: 0.875rem;
		color: var(--text-muted);
	}

	.hero-visual {
		flex: 1;
		max-width: 500px;
		display: flex;
		align-items: center;
	}

	.terminal {
		width: 100%;
		background: var(--bg-terminal);
		border: 1px solid var(--border);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
	}

	.terminal-bar {
		display: flex;
		gap: 6px;
		padding: 12px 16px;
		background: var(--bg-terminal-bar);
		border-bottom: 1px solid var(--border);
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.dot.red { background: #ff5f56; }
	.dot.yellow { background: #ffbd2e; }
	.dot.green { background: #27c93f; }

	.terminal-body {
		padding: 1.25rem;
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.8125rem;
		line-height: 1.8;
	}

	.line {
		color: var(--text);
		white-space: nowrap;
	}

	.prompt {
		color: var(--primary);
		margin-right: 0.5rem;
	}

	.output {
		color: var(--text-secondary);
	}

	.muted {
		color: var(--text-muted);
	}

	@media (max-width: 900px) {
		.hero {
			flex-direction: column;
			text-align: center;
			padding-top: 7rem;
		}

		.hero-actions {
			justify-content: center;
		}

		.hero-visual {
			max-width: 100%;
		}
	}
</style>
