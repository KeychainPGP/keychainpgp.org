<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import { browser } from '$app/environment';

	let { locale = 'en' }: { locale: Locale } = $props();

	const wallets = [
		{ name: 'Bitcoin', short: 'BTC', address: 'bc1qed0rtdgxq5t9g5lrsztxqvw9gnz4s2wd3gner3', color: '#f7931a' },
		{ name: 'Ethereum', short: 'ETH', address: '0xD2Ca6c40f03Db5A0493012C7D2792e69C8C493D8', color: '#627eea' },
		{ name: 'Monero', short: 'XMR', address: '898XvFtvBMmes31kNwF4AJiNHsaWZA5aGLqf1jZT5ZZXPGCL4AgNAgZUgw9o6d3tg17fks3q1i4tWJ69tHAhh9MpQLLFGrf', color: '#ff6600' }
	];

	let copiedIndex = $state(-1);

	async function copyAddress(address: string, index: number) {
		if (!browser) return;
		await navigator.clipboard.writeText(address);
		copiedIndex = index;
		setTimeout(() => { copiedIndex = -1; }, 2000);
	}
</script>

<section id="donate" class="donate">
	<div class="section-inner">
		<h2>{t(locale, 'donate.title')}</h2>
		<p class="subtitle">{t(locale, 'donate.subtitle')}</p>

		<div class="wallets">
			{#each wallets as wallet, i}
				<div class="wallet-card">
					<div class="wallet-header">
						<span class="wallet-badge" style="background: {wallet.color}">{wallet.short}</span>
						<span class="wallet-name">{wallet.name}</span>
					</div>
					<code class="wallet-address">{wallet.address}</code>
					<button class="copy-btn" onclick={() => copyAddress(wallet.address, i)}>
						{#if copiedIndex === i}
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d="M20 6L9 17l-5-5" />
							</svg>
							{t(locale, 'donate.copied')}
						{:else}
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="9" y="9" width="13" height="13" rx="2" />
								<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
							</svg>
							{t(locale, 'donate.copy')}
						{/if}
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.donate {
		padding: 6rem 1.5rem;
		background: var(--bg);
	}

	.section-inner {
		max-width: 800px;
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
		font-size: 1.0625rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 2.5rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.wallets {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.wallet-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: 12px;
		padding: 1.25rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		text-align: left;
	}

	.wallet-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-shrink: 0;
		min-width: 120px;
	}

	.wallet-badge {
		color: white;
		font-size: 0.6875rem;
		font-weight: 800;
		padding: 0.25rem 0.5rem;
		border-radius: 6px;
		letter-spacing: 0.03em;
	}

	.wallet-name {
		font-weight: 600;
		font-size: 0.9375rem;
		color: var(--text);
	}

	.wallet-address {
		flex: 1;
		font-size: 0.75rem;
		color: var(--text-muted);
		word-break: break-all;
		font-family: 'JetBrains Mono', 'Fira Code', monospace;
		line-height: 1.4;
	}

	.copy-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		background: none;
		border: 1px solid var(--border);
		color: var(--text-secondary);
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		font-size: 0.8125rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s;
		flex-shrink: 0;
	}

	.copy-btn:hover {
		border-color: var(--primary);
		color: var(--primary);
	}

	@media (max-width: 640px) {
		.wallet-card {
			flex-direction: column;
			align-items: stretch;
			text-align: center;
		}

		.wallet-header {
			justify-content: center;
		}

		.copy-btn {
			justify-content: center;
		}
	}
</style>
