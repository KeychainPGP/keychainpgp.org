<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { detectPlatform, platformLabels } from '$lib/utils/platform';
	import { browser } from '$app/environment';

	let { locale = 'en' }: { locale: Locale } = $props();

	let platform = $state(detectPlatform());
	let activeTab = $state<'encrypt' | 'decrypt' | 'keys' | 'settings'>('encrypt');
	let downloadUrl = $state('');

	const RELEASES_URL = 'https://github.com/keychainpgp/keychainpgp/releases/latest';
	const API_URL = 'https://api.github.com/repos/keychainpgp/keychainpgp/releases/latest';

	const assetPatterns: Record<string, RegExp> = {
		windows: /_x64-setup\.exe$/i,
		macos: /_aarch64\.dmg$/i,
		linux: /_amd64\.AppImage$/i,
		android: /-arm64\.apk$/i,
	};

	async function fetchLatestRelease() {
		try {
			const res = await fetch(API_URL);
			if (!res.ok) return;
			const data = await res.json();
			const assets: { name: string; browser_download_url: string }[] = data.assets ?? [];
			const asset = assets.find(a => assetPatterns[platform]?.test(a.name));
			if (asset) downloadUrl = asset.browser_download_url;
		} catch {
			// Fallback: button scrolls to #download section
		}
	}

	$effect(() => {
		if (browser) {
			platform = detectPlatform();
			fetchLatestRelease();
		}
	});

	const platformName = $derived(platformLabels[platform]);
	const heroDownloadHref = $derived(downloadUrl || '#download');
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="hero-badge">OpenPGP</div>
		<h1>{t(locale, 'hero.tagline')}</h1>
		<p class="hero-subtitle">{t(locale, 'hero.subtitle')}</p>
		<p class="hero-description">{t(locale, 'hero.description')}</p>

		<div class="hero-actions">
			<a href={heroDownloadHref} target={downloadUrl ? '_blank' : undefined} rel={downloadUrl ? 'noopener' : undefined} class="btn btn-primary">
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
		<div class="app-window">
			<div class="app-titlebar">
				<span class="dot red"></span>
				<span class="dot yellow"></span>
				<span class="dot green"></span>
				<span class="app-title">KeychainPGP</span>
			</div>
			<div class="app-tabs">
				<button class="tab" class:active={activeTab === 'encrypt'} onclick={() => activeTab = 'encrypt'}>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
					{t(locale, 'mockup.tab.encrypt')}
				</button>
				<button class="tab" class:active={activeTab === 'decrypt'} onclick={() => activeTab = 'decrypt'}>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 5-5 5 5 0 0 1 5 5"/></svg>
					{t(locale, 'mockup.tab.decrypt')}
				</button>
				<button class="tab" class:active={activeTab === 'keys'} onclick={() => activeTab = 'keys'}>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
					{t(locale, 'mockup.tab.keys')}
				</button>
				<button class="tab" class:active={activeTab === 'settings'} onclick={() => activeTab = 'settings'}>
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
					{t(locale, 'mockup.tab.settings')}
				</button>
			</div>
			<div class="app-body">
				{#if activeTab === 'encrypt'}
					<div class="app-field">
						<label>{t(locale, 'mockup.encrypt.message')}</label>
						<div class="app-textarea">{t(locale, 'mockup.encrypt.example')}</div>
					</div>
					<div class="app-field">
						<label>{t(locale, 'mockup.encrypt.recipients')}</label>
						<div class="app-recipients">
							<span class="recipient selected">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
								Alice &lt;alice@example.com&gt;
							</span>
							<span class="recipient">Bob &lt;bob@example.com&gt;</span>
						</div>
					</div>
					<div class="app-actions">
						<span class="app-btn">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
							{t(locale, 'mockup.encrypt.button')}
						</span>
						<span class="app-shortcut">Ctrl+Shift+E</span>
					</div>
				{:else if activeTab === 'decrypt'}
					<div class="app-field">
						<label>{t(locale, 'mockup.decrypt.label')}</label>
						<div class="app-textarea mono">-----BEGIN PGP MESSAGE-----<br><br>hQEMA8p2E4xLkRl8AQf+N7a2GRkL...<br>qR9f3kMv0bG1jy8YDk5mQ3b+Xz4=<br>=7Yk2<br><br>-----END PGP MESSAGE-----</div>
					</div>
					<div class="app-field">
						<label>{t(locale, 'mockup.decrypt.passphrase')}</label>
						<div class="app-input password">&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;</div>
					</div>
					<div class="app-actions">
						<span class="app-btn">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 5-5 5 5 0 0 1 5 5"/></svg>
							{t(locale, 'mockup.decrypt.button')}
						</span>
						<span class="app-shortcut">Ctrl+Shift+D</span>
					</div>
				{:else if activeTab === 'keys'}
					<div class="key-list">
						<div class="key-item own">
							<div class="key-icon">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
							</div>
							<div class="key-info">
								<span class="key-name">You &lt;you@example.com&gt;</span>
								<span class="key-fp">ED25519 &middot; 8A3B 1F2C D9E7 4056</span>
							</div>
							<span class="key-badge own-badge">{t(locale, 'mockup.keys.ownKey')}</span>
						</div>
						<div class="key-item">
							<div class="key-icon">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
							</div>
							<div class="key-info">
								<span class="key-name">Alice &lt;alice@example.com&gt;</span>
								<span class="key-fp">ED25519 &middot; 5E91 A0C3 B8F6 2D17</span>
							</div>
							<span class="key-badge">{t(locale, 'mockup.keys.contact')}</span>
						</div>
						<div class="key-item">
							<div class="key-icon">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
							</div>
							<div class="key-info">
								<span class="key-name">Bob &lt;bob@example.com&gt;</span>
								<span class="key-fp">ED25519 &middot; 3C72 F4D8 A1B9 6E83</span>
							</div>
							<span class="key-badge">{t(locale, 'mockup.keys.contact')}</span>
						</div>
					</div>
				{:else}
					<div class="settings-list">
						<div class="setting-row">
							<div class="setting-info">
								<span class="setting-label">{t(locale, 'mockup.settings.autoClear')}</span>
								<span class="setting-desc">{t(locale, 'mockup.settings.autoClearDesc')}</span>
							</div>
							<span class="toggle on"><span class="toggle-dot"></span></span>
						</div>
						<div class="setting-row">
							<div class="setting-info">
								<span class="setting-label">{t(locale, 'mockup.settings.tray')}</span>
								<span class="setting-desc">{t(locale, 'mockup.settings.trayDesc')}</span>
							</div>
							<span class="toggle on"><span class="toggle-dot"></span></span>
						</div>
						<div class="setting-row">
							<div class="setting-info">
								<span class="setting-label">{t(locale, 'mockup.settings.opsec')}</span>
								<span class="setting-desc">{t(locale, 'mockup.settings.opsecDesc')}</span>
							</div>
							<span class="toggle"><span class="toggle-dot"></span></span>
						</div>
					</div>
				{/if}
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
		color: var(--primary-on-soft);
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
		background: var(--primary-bg);
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

	.app-window {
		width: 100%;
		background: var(--bg-terminal);
		border: 1px solid var(--border);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 16px 48px var(--shadow);
	}

	.app-titlebar {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 14px;
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

	.app-title {
		margin-left: 0.5rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text-muted);
	}

	.app-tabs {
		display: flex;
		gap: 0;
		border-bottom: 1px solid var(--border);
		padding: 0 0.5rem;
	}

	.tab {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.625rem 0.875rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-muted);
		border: none;
		border-bottom: 2px solid transparent;
		background: none;
		cursor: pointer;
		transition: color 0.15s;
	}

	.tab:hover {
		color: var(--text-secondary);
	}

	.tab.active {
		color: var(--primary);
		border-bottom-color: var(--primary);
	}

	.app-body {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.app-field label {
		display: block;
		font-size: 0.6875rem;
		font-weight: 600;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.375rem;
	}

	.app-textarea {
		background: var(--mockup-input-bg);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.75rem;
		font-size: 0.8125rem;
		color: var(--text);
		line-height: 1.5;
		min-height: 56px;
	}

	.app-recipients {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.recipient {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.75rem;
		padding: 0.3rem 0.625rem;
		border-radius: 6px;
		background: var(--mockup-subtle-bg);
		border: 1px solid var(--border);
		color: var(--text-secondary);
		cursor: default;
	}

	.recipient.selected {
		background: var(--primary-soft);
		border-color: var(--primary);
		color: var(--primary-on-soft);
	}

	.app-actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin-top: 0.25rem;
	}

	.app-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		background: var(--primary-bg);
		color: white;
		font-size: 0.8125rem;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		cursor: default;
	}

	.app-shortcut {
		font-size: 0.6875rem;
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		color: var(--text-muted);
		background: var(--mockup-subtle-bg);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		border: 1px solid var(--border);
	}

	.app-textarea.mono {
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		font-size: 0.6875rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.app-input {
		background: var(--mockup-input-bg);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.5rem 0.75rem;
		font-size: 0.8125rem;
		color: var(--text);
	}

	.app-input.password {
		letter-spacing: 0.15em;
		color: var(--text-muted);
	}

	/* Keys tab */
	.key-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.key-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.625rem 0.75rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--mockup-input-bg);
	}

	.key-item.own {
		border-color: rgba(59, 130, 246, 0.3);
		background: rgba(59, 130, 246, 0.05);
	}

	.key-icon {
		color: var(--text-muted);
		flex-shrink: 0;
	}

	.key-item.own .key-icon {
		color: var(--primary);
	}

	.key-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		min-width: 0;
	}

	.key-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.key-fp {
		font-size: 0.625rem;
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		color: var(--text-muted);
	}

	.key-badge {
		font-size: 0.625rem;
		font-weight: 600;
		padding: 0.15rem 0.4rem;
		border-radius: 4px;
		background: var(--mockup-subtle-bg);
		color: var(--text-muted);
		flex-shrink: 0;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.key-badge.own-badge {
		background: var(--primary-soft);
		color: var(--primary-on-soft);
	}

	/* Settings tab */
	.settings-list {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.setting-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.625rem 0;
		border-bottom: 1px solid var(--border);
	}

	.setting-row:last-child {
		border-bottom: none;
	}

	.setting-info {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.setting-label {
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--text);
	}

	.setting-desc {
		font-size: 0.6875rem;
		color: var(--text-muted);
	}

	.toggle {
		width: 36px;
		height: 20px;
		border-radius: 10px;
		background: var(--mockup-toggle-bg);
		border: 1px solid var(--border);
		position: relative;
		flex-shrink: 0;
		transition: background 0.2s;
	}

	.toggle.on {
		background: var(--primary);
		border-color: var(--primary);
	}

	.toggle-dot {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: white;
		transition: transform 0.2s;
	}

	.toggle.on .toggle-dot {
		transform: translateX(16px);
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
