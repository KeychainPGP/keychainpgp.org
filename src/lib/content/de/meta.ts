import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGP-Dokumentation',
	description: 'Erfahren Sie alles ueber PGP-Verschluesselung -- von Einsteiger-Anleitungen bis zu fortgeschrittenen Themen wie Zwischenablage-Verschluesselung und Schluesselverwaltung.',
	intro: 'Alles, was Sie ueber PGP-Verschluesselung wissen muessen. Ob Sie gerade erst anfangen oder nach fortgeschrittenen Themen suchen -- diese Anleitungen decken das Wesentliche ab.',
	docs: [
		{
			title: 'Was ist PGP?',
			description: 'Die Grundlagen der PGP-Verschluesselung verstehen -- Public-Key-Kryptografie, digitale Signaturen, Web of Trust und Anwendungsfaelle.',
			href: '/de/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'PGP verwenden',
			description: 'Schritt-fuer-Schritt-Anleitung: Schluessel generieren, Nachrichten verschluesseln und entschluesseln, digitale Signaturen und Schluesselaustausch.',
			href: '/de/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'Die Unterschiede zwischen PGP, GPG (GnuPG) und dem OpenPGP-Standard verstehen -- Geschichte, Implementierungen und welches Tool Sie waehlen sollten.',
			href: '/de/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP-Tools',
			description: 'Ueberblick ueber PGP-Tools -- Desktop-Clients, CLI-Werkzeuge, Browser-Erweiterungen und webbasierte Loesungen.',
			href: '/de/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP fuer Einsteiger',
			description: 'Neu bei PGP? Starten Sie hier. Lernen Sie die wichtigsten Konzepte in einfacher Sprache und versenden Sie Ihre erste verschluesselte Nachricht.',
			href: '/de/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Zwischenablage-Verschluesselung',
			description: 'Den PGP-Zwischenablage-Workflow meistern -- Text aus jeder Anwendung heraus ver- und entschluesseln mit globalen Tastenkuerzeln.',
			href: '/de/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGP-Blog',
	description: 'Ausfuehrliche Artikel ueber PGP-Verschluesselungstools, Software-Vergleiche und Best Practices fuer sichere Kommunikation.',
	intro: 'Ausfuehrliche Artikel ueber PGP-Verschluesselungstools, Software-Vergleiche und Best Practices fuer sichere Kommunikation.',
	posts: [
		{
			title: 'Die besten PGP-Tools 2026',
			description: 'Ein umfassendes Ranking der besten PGP-Verschluesselungstools -- von Desktop-Anwendungen bis zu Online-Loesungen.',
			href: '/de/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGP-Software im Vergleich',
			description: 'Detaillierter Vergleich von PGP-Software -- Funktionen, Sicherheit, unterstuetzte Plattformen und Benutzerfreundlichkeit.',
			href: '/de/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
