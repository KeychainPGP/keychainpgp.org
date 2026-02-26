<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { detectPlatform, type Platform } from '$lib/utils/platform';
	import { browser } from '$app/environment';

	let { locale = 'en' }: { locale: Locale } = $props();

	const RELEASES_URL = 'https://github.com/keychainpgp/keychainpgp/releases/latest';
	const API_URL = 'https://api.github.com/repos/keychainpgp/keychainpgp/releases/latest';
	const WEB_APP_URL = 'https://keychainpgp.github.io';

	let platform = $state<Platform>('unknown');
	let downloadUrls = $state<Record<string, Record<string, string>>>({});
	let selectedVariants = $state<Record<string, string>>({});

	type AssetVariant = { key: string; label: string; pattern: RegExp };

	const assetVariants: Record<string, AssetVariant[]> = {
		windows: [
			{ key: 'setup', label: 'Setup (.exe)', pattern: /_x64-setup\.exe$/i },
			{ key: 'msi', label: 'MSI (.msi)', pattern: /\.msi$/i },
			{ key: 'portable', label: 'Portable (.zip)', pattern: /portable.*\.zip$/i },
		],
		macos: [
			{ key: 'dmg-arm', label: 'Apple Silicon (.dmg)', pattern: /_aarch64\.dmg$/i },
			{ key: 'dmg-intel', label: 'Intel (.dmg)', pattern: /_x64\.dmg$/i },
		],
		linux: [
			{ key: 'appimage', label: 'AppImage', pattern: /_amd64\.AppImage$/i },
			{ key: 'deb', label: 'Debian (.deb)', pattern: /_amd64\.deb$/i },
		],
		android: [
			{ key: 'arm64', label: 'ARM64', pattern: /-arm64\.apk$/i },
			{ key: 'arm', label: 'ARM', pattern: /-arm\.apk$/i },
			{ key: 'x86_64', label: 'x86_64', pattern: /-x86_64\.apk$/i },
			{ key: 'x86', label: 'x86', pattern: /-x86\.apk$/i },
		],
	};

	async function fetchLatestRelease() {
		try {
			const res = await fetch(API_URL);
			if (!res.ok) return;
			const data = await res.json();
			const assets: { name: string; browser_download_url: string }[] = data.assets ?? [];

			const urls: Record<string, Record<string, string>> = {};
			for (const [plat, variants] of Object.entries(assetVariants)) {
				urls[plat] = {};
				for (const variant of variants) {
					const asset = assets.find(a => variant.pattern.test(a.name));
					if (asset) urls[plat][variant.key] = asset.browser_download_url;
				}
			}
			downloadUrls = urls;

			const selected: Record<string, string> = {};
			for (const [plat, variants] of Object.entries(assetVariants)) {
				const first = variants.find(v => urls[plat]?.[v.key]);
				if (first) selected[plat] = first.key;
			}
			selectedVariants = selected;
		} catch {
			// Fallback: cards will link to the releases page
		}
	}

	$effect(() => {
		if (browser) {
			platform = detectPlatform();
			fetchLatestRelease();
		}
	});

	type PlatformInfo = { id: Platform; label: string; svg: string };

	const platforms: PlatformInfo[] = [
		{ id: 'windows', label: 'download.windows', svg: '<svg width="32" height="32" viewBox="0 0 256 256" fill="currentColor"><path d="M0 36.357L104.62 22.11v100.31H0zm116.868-15.96L255.97 0v118.84H116.868zM0 134.41h104.62v100.86L0 220.87zm116.868 1.12H255.97V256l-139.1-18.73z"/></svg>' },
		{ id: 'macos', label: 'download.macos', svg: '<svg width="32" height="32" viewBox="0 0 256 315" fill="currentColor"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793C7.228 235.82-18.482 170.16 8.145 126.134c13.19-21.82 36.77-35.64 62.38-35.998 20.303-.386 39.463 13.662 51.87 13.662 12.397 0 35.672-16.895 60.164-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.96 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262"/></svg>' },
		{ id: 'linux', label: 'download.linux', svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"/></svg>' },
		{ id: 'android', label: 'download.android', svg: '<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 00-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 00-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 00-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"/></svg>' }
	];
</script>

<section id="download" class="download">
	<div class="section-inner">
		<h2>{t(locale, 'download.title')}</h2>
		<p class="subtitle">{t(locale, 'download.subtitle')}</p>

		{#if platform !== 'unknown'}
			<p class="detected">{t(locale, 'download.detectedOs')} <strong>{platform === 'macos' ? 'macOS' : platform.charAt(0).toUpperCase() + platform.slice(1)}</strong></p>
		{/if}

		<div class="platforms">
			{#each platforms as p}
				{@const platUrls = downloadUrls[p.id] ?? {}}
				{@const variants = (assetVariants[p.id] ?? []).filter(v => platUrls[v.key])}
				{@const url = platUrls[selectedVariants[p.id]] ?? RELEASES_URL}

				<div class="platform-card" class:recommended={p.id === platform}>
					<a href={url} target="_blank" rel="noopener" class="card-link">
						{@html p.svg}
						<span class="platform-name">{t(locale, p.label)}</span>
					</a>
					{#if variants.length > 1}
						<select
							class="variant-select"
							aria-label={t(locale, p.label)}
							value={selectedVariants[p.id]}
							onchange={(e) => { selectedVariants[p.id] = e.currentTarget.value; }}
						>
							{#each variants as v}
								<option value={v.key}>{v.label}</option>
							{/each}
						</select>
					{/if}
					{#if p.id === platform}
						<span class="badge">Recommended</span>
					{/if}
				</div>
			{/each}

			<div class="platform-card">
				<a href={WEB_APP_URL} target="_blank" rel="noopener" class="card-link">
					<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10" />
						<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
					</svg>
					<span class="platform-name">{t(locale, 'download.webApp')}</span>
				</a>
			</div>
		</div>

		<a href="https://github.com/keychainpgp/keychainpgp/releases" target="_blank" rel="noopener" class="all-releases">
			{t(locale, 'download.allReleases')}
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M7 17l9.2-9.2M17 17V7H7" />
			</svg>
		</a>
	</div>
</section>

<style>
	.download {
		padding: 6rem 1.5rem;
	}

	.section-inner {
		max-width: 900px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 800;
		margin: 0 0 1rem;
		color: var(--text);
	}

	.subtitle {
		font-size: 1.125rem;
		color: var(--text-secondary);
		margin: 0 0 1rem;
	}

	.detected {
		font-size: 0.9375rem;
		color: var(--text-muted);
		margin: 0 0 2rem;
	}

	.detected strong {
		color: var(--primary);
	}

	.platforms {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.platform-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 1.5rem 1rem;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 16px;
		color: var(--text-secondary);
		transition: all 0.2s;
		position: relative;
		cursor: pointer;
	}

	.platform-card:hover {
		border-color: var(--primary);
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 8px 24px var(--shadow);
	}

	.platform-card.recommended {
		border-color: var(--primary);
		background: var(--primary-soft);
		color: var(--primary-on-soft);
	}

	.card-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: inherit;
	}

	.card-link::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
	}

	.platform-name {
		font-weight: 600;
		font-size: 0.9375rem;
	}

	.variant-select {
		position: relative;
		z-index: 2;
		background: var(--bg);
		color: var(--text-secondary);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		cursor: pointer;
		outline: none;
		max-width: 100%;
	}

	.variant-select:hover,
	.variant-select:focus {
		border-color: var(--primary);
	}

	.badge {
		position: absolute;
		top: -8px;
		right: -8px;
		z-index: 2;
		background: var(--primary-bg);
		color: white;
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		border-radius: 100px;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.all-releases {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		color: var(--primary);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9375rem;
		transition: gap 0.2s;
	}

	.all-releases:hover {
		gap: 0.625rem;
	}
</style>