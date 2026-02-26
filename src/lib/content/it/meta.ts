import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'Documentazione PGP',
	description: 'Scopri tutto sulla crittografia PGP — dalle guide per principianti agli argomenti avanzati come la crittografia tramite appunti e la gestione delle chiavi.',
	intro: 'Tutto quello che devi sapere sulla crittografia PGP. Che tu stia iniziando o cercando argomenti avanzati, queste guide coprono gli aspetti essenziali.',
	docs: [
		{
			title: 'Cos\'è PGP?',
			description: 'Comprendere i fondamenti della crittografia PGP — crittografia a chiave pubblica, firme digitali, rete di fiducia e casi d\'uso.',
			href: '/it/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'Come usare PGP',
			description: 'Tutorial passo dopo passo: generazione di chiavi, crittografia dei messaggi, decrittografia, firme digitali e condivisione delle chiavi.',
			href: '/it/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'Comprendere le differenze tra PGP, GPG (GnuPG) e lo standard OpenPGP — storia, implementazioni e quale strumento scegliere.',
			href: '/it/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'Strumenti PGP',
			description: 'Panoramica degli strumenti PGP — client desktop, utilità CLI, estensioni del browser e soluzioni web.',
			href: '/it/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP per principianti',
			description: 'Nuovo con PGP? Inizia qui. Impara i concetti chiave in modo semplice e invia il tuo primo messaggio crittografato.',
			href: '/it/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Crittografia tramite appunti',
			description: 'Padroneggia il workflow PGP tramite appunti — crittografa e decrittografa testo da qualsiasi applicazione con scorciatoie globali.',
			href: '/it/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'Blog PGP',
	description: 'Articoli approfonditi sugli strumenti di crittografia PGP, confronti tra software e buone pratiche per la comunicazione sicura.',
	intro: 'Articoli approfonditi sugli strumenti di crittografia PGP, confronti tra software e buone pratiche per la comunicazione sicura.',
	posts: [
		{
			title: 'I migliori strumenti PGP nel 2026',
			description: 'Una classifica completa dei migliori strumenti di crittografia PGP disponibili — dalle applicazioni desktop alle soluzioni online.',
			href: '/it/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Confronto dei software PGP',
			description: 'Confronto dettagliato dei software PGP — funzionalità, sicurezza, piattaforme supportate e facilità d\'uso.',
			href: '/it/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
