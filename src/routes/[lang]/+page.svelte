<script lang="ts">
	import { t, type Locale } from '$lib/i18n';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import Download from '$lib/components/Download.svelte';
	import Donate from '$lib/components/Donate.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let locale = $derived(data.locale as Locale);
</script>

<svelte:head>
	<title>{t(locale, 'meta.title')}</title>
	<meta name="description" content={t(locale, 'meta.description')} />

	<meta property="og:title" content={t(locale, 'meta.title')} />
	<meta property="og:description" content={t(locale, 'meta.description')} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://keychainpgp.org/${locale}/`} />
	<meta property="og:image" content="https://keychainpgp.org/og-image.png" />
	<meta property="og:site_name" content="KeychainPGP" />
	<meta property="og:locale" content={locale} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={t(locale, 'meta.title')} />
	<meta name="twitter:description" content={t(locale, 'meta.description')} />

	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		"name": "KeychainPGP",
		"applicationCategory": "SecurityApplication",
		"operatingSystem": "Windows, macOS, Linux, Android",
		"description": t(locale, 'meta.description'),
		"url": `https://keychainpgp.org/${locale}/`,
		"downloadUrl": "https://github.com/keychainpgp/keychainpgp/releases/latest",
		"softwareVersion": "0.1.1",
		"license": "https://opensource.org/licenses/MIT",
		"inLanguage": locale,
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
	})}</script>`}

	<link rel="alternate" hreflang="en" href="https://keychainpgp.org/" />
	<link rel="alternate" hreflang="fr" href="https://keychainpgp.org/fr/" />
	<link rel="alternate" hreflang="de" href="https://keychainpgp.org/de/" />
	<link rel="alternate" hreflang="es" href="https://keychainpgp.org/es/" />
	<link rel="alternate" hreflang="pt-BR" href="https://keychainpgp.org/pt-BR/" />
	<link rel="alternate" hreflang="pt-PT" href="https://keychainpgp.org/pt-PT/" />
	<link rel="alternate" hreflang="it" href="https://keychainpgp.org/it/" />
	<link rel="alternate" hreflang="nl" href="https://keychainpgp.org/nl/" />
	<link rel="alternate" hreflang="ru" href="https://keychainpgp.org/ru/" />
	<link rel="alternate" hreflang="uk" href="https://keychainpgp.org/uk/" />
	<link rel="alternate" hreflang="zh-CN" href="https://keychainpgp.org/zh-CN/" />
	<link rel="alternate" hreflang="zh-TW" href="https://keychainpgp.org/zh-TW/" />
	<link rel="alternate" hreflang="ja" href="https://keychainpgp.org/ja/" />
	<link rel="alternate" hreflang="ko" href="https://keychainpgp.org/ko/" />
	<link rel="alternate" hreflang="ar" href="https://keychainpgp.org/ar/" />
	<link rel="alternate" hreflang="he" href="https://keychainpgp.org/he/" />
	<link rel="alternate" hreflang="tr" href="https://keychainpgp.org/tr/" />
	<link rel="alternate" hreflang="pl" href="https://keychainpgp.org/pl/" />
	<link rel="alternate" hreflang="hi" href="https://keychainpgp.org/hi/" />
	<link rel="alternate" hreflang="th" href="https://keychainpgp.org/th/" />
	<link rel="alternate" hreflang="x-default" href="https://keychainpgp.org/" />

	<link rel="canonical" href={`https://keychainpgp.org/${locale}/`} />
</svelte:head>

<Hero {locale} />
<Features {locale} />
<HowItWorks {locale} />
<Download {locale} />
<Donate {locale} />
