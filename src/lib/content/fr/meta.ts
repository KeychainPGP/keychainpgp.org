import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'Documentation PGP',
	description: 'Apprenez tout sur le chiffrement PGP — des guides pour débutants aux sujets avancés comme le chiffrement par presse-papiers et la gestion des clés.',
	intro: 'Tout ce que vous devez savoir sur le chiffrement PGP. Que vous débutiez ou que vous cherchiez des sujets avancés, ces guides couvrent l\'essentiel.',
	docs: [
		{
			title: 'Qu\'est-ce que PGP ?',
			description: 'Comprendre les fondamentaux du chiffrement PGP — cryptographie à clé publique, signatures numériques, réseau de confiance et cas d\'utilisation.',
			href: '/fr/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'Comment utiliser PGP',
			description: 'Tutoriel pas à pas : génération de clés, chiffrement de messages, déchiffrement, signatures numériques et partage de clés.',
			href: '/fr/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'Comprendre les différences entre PGP, GPG (GnuPG) et le standard OpenPGP — histoire, implémentations et quel outil choisir.',
			href: '/fr/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'Outils PGP',
			description: 'Panorama des outils PGP — clients de bureau, utilitaires CLI, extensions de navigateur et solutions web.',
			href: '/fr/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP pour débutants',
			description: 'Nouveau avec PGP ? Commencez ici. Apprenez les concepts clés en langage simple et envoyez votre premier message chiffré.',
			href: '/fr/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Chiffrement par presse-papiers',
			description: 'Maîtrisez le workflow PGP par presse-papiers — chiffrez et déchiffrez du texte depuis n\'importe quelle application avec des raccourcis globaux.',
			href: '/fr/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'Blog PGP',
	description: 'Articles approfondis sur les outils de chiffrement PGP, comparatifs de logiciels et bonnes pratiques pour la communication sécurisée.',
	intro: 'Articles approfondis sur les outils de chiffrement PGP, comparatifs de logiciels et bonnes pratiques pour la communication sécurisée.',
	posts: [
		{
			title: 'Meilleurs outils PGP en 2026',
			description: 'Un classement complet des meilleurs outils de chiffrement PGP disponibles — des applications de bureau aux solutions en ligne.',
			href: '/fr/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Comparatif des logiciels PGP',
			description: 'Comparaison détaillée des logiciels PGP — fonctionnalités, sécurité, plateformes supportées et facilité d\'utilisation.',
			href: '/fr/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
