import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGP-documentatie',
	description: 'Leer alles over PGP-versleuteling — van handleidingen voor beginners tot geavanceerde onderwerpen zoals klembordversleuteling en sleutelbeheer.',
	intro: 'Alles wat u moet weten over PGP-versleuteling. Of u nu begint of op zoek bent naar geavanceerde onderwerpen, deze handleidingen behandelen de essentie.',
	docs: [
		{
			title: 'Wat is PGP?',
			description: 'Begrijp de basisprincipes van PGP-versleuteling — publieke-sleutelcryptografie, digitale handtekeningen, web of trust en toepassingen.',
			href: '/nl/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'Hoe PGP te gebruiken',
			description: 'Stapsgewijze handleiding: sleutels genereren, berichten versleutelen, ontsleutelen, digitale handtekeningen en sleutels delen.',
			href: '/nl/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'Begrijp de verschillen tussen PGP, GPG (GnuPG) en de OpenPGP-standaard — geschiedenis, implementaties en welke tool te kiezen.',
			href: '/nl/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP-tools',
			description: 'Overzicht van PGP-tools — desktopclienten, CLI-hulpmiddelen, browserextensies en weboplossingen.',
			href: '/nl/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP voor beginners',
			description: 'Nieuw met PGP? Begin hier. Leer de kernconcepten in eenvoudige taal en verstuur uw eerste versleutelde bericht.',
			href: '/nl/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Klembordversleuteling',
			description: 'Beheers de PGP-klembordworkflow — versleutel en ontsleutel tekst vanuit elke applicatie met globale sneltoetsen.',
			href: '/nl/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGP-blog',
	description: 'Diepgaande artikelen over PGP-versleutelingstools, softwarevergelijkingen en best practices voor veilige communicatie.',
	intro: 'Diepgaande artikelen over PGP-versleutelingstools, softwarevergelijkingen en best practices voor veilige communicatie.',
	posts: [
		{
			title: 'Beste PGP-tools in 2026',
			description: 'Een uitgebreide ranglijst van de beste PGP-versleutelingstools die beschikbaar zijn — van desktoptoepassingen tot online oplossingen.',
			href: '/nl/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Vergelijking van PGP-software',
			description: 'Gedetailleerde vergelijking van PGP-software — functies, beveiliging, ondersteunde platformen en gebruiksgemak.',
			href: '/nl/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
