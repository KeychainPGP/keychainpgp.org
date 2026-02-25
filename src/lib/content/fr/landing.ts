import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Outil de chiffrement PGP en ligne gratuit',
	heroSubtitle: 'Chiffrez et déchiffrez des messages avec OpenPGP directement dans votre navigateur. Aucune installation, aucun compte, aucune donnée envoyée à un serveur.',
	trustLine: 'Gratuit et open source. Licence MIT / Apache-2.0. Aucune télémétrie.',
	ctaOpen: 'Ouvrir l\'outil PGP dans le navigateur',
	ctaHow: 'Comment ça marche',
	whatIsTitle: 'Qu\'est-ce que le chiffrement PGP ?',
	whatIsText: 'PGP (Pretty Good Privacy) est le standard de référence pour le chiffrement de messages, d\'e-mails et de fichiers. Il utilise la cryptographie à clé publique — vous partagez une clé publique que n\'importe qui peut utiliser pour chiffrer des messages à votre attention, et seule votre clé privée peut les déchiffrer. Créé en 1991, PGP est utilisé par des journalistes, des chercheurs en sécurité, des activistes et des millions d\'utilisateurs dans le monde. KeychainPGP rend PGP accessible à tous grâce à une interface moderne et un workflow basé sur le presse-papiers — sans ligne de commande, sans configuration, sans complexité.',
	howToTitle: 'Comment chiffrer un message avec PGP en ligne',
	steps: [
		{ title: 'Ouvrir l\'outil PGP en ligne', text: 'Rendez-vous sur l\'application web KeychainPGP. Elle se charge entièrement dans votre navigateur — aucune installation ni compte requis. Tout fonctionne localement via WebAssembly.' },
		{ title: 'Générer ou importer une clé PGP', text: 'Créez une nouvelle paire de clés Ed25519 + X25519 (l\'option la plus moderne et sécurisée), ou importez une clé PGP existante au format ASCII.' },
		{ title: 'Importer la clé publique du destinataire', text: 'Ajoutez la clé publique de votre contact en la collant dans l\'onglet Clés. C\'est la clé qui servira à chiffrer vos messages.' },
		{ title: 'Saisir votre message', text: 'Allez dans l\'onglet Chiffrer et tapez ou collez le message que vous souhaitez protéger.' },
		{ title: 'Sélectionner le destinataire et chiffrer', text: 'Choisissez le destinataire dans votre liste de clés et cliquez sur « Chiffrer vers le presse-papiers ». Le message chiffré PGP est instantanément copié.' },
		{ title: 'Envoyer le message chiffré', text: 'Collez le message chiffré dans n\'importe quel e-mail, chat ou application de messagerie. Seul le destinataire prévu peut le déchiffrer avec sa clé privée.' }
	],
	featuresTitle: 'Pourquoi utiliser KeychainPGP pour le chiffrement PGP ?',
	features: [
		{ icon: '🌐', title: '100 % dans le navigateur', text: 'Tout fonctionne localement dans votre navigateur via WebAssembly compilé depuis Rust. Zéro communication serveur. Vos messages et clés ne quittent jamais votre appareil.' },
		{ icon: '🔒', title: 'Cryptographie moderne', text: 'Clés à courbe elliptique Ed25519 + X25519 par défaut. Propulsé par Sequoia-PGP, une implémentation Rust d\'OpenPGP sans dépendance à OpenSSL.' },
		{ icon: '💻', title: 'Multi-plateforme', text: 'Disponible en application web, plus des applications natives pour Windows, macOS, Linux et Android. Vos clés, partout.' },
		{ icon: '📂', title: 'Open source', text: 'Code entièrement auditable sous licence MIT / Apache-2.0. Pas de télémétrie, pas de tracking, pas de comptes. Consultez le code sur GitHub.' },
		{ icon: '📋', title: 'Presse-papiers d\'abord', text: 'Copiez du texte, chiffrez avec un raccourci (Ctrl+Shift+E), collez le message chiffré. Fonctionne avec n\'importe quelle application — e-mail, chat, notes, partout.' },
		{ icon: '⚡', title: 'Zéro configuration', text: 'Pas de choix d\'algorithme, pas de taille de clé à décider, pas de fichiers de configuration. Sécurisé par défaut. Générez une clé et commencez à chiffrer en quelques secondes.' }
	],
	desktopTitle: 'Obtenez l\'application de bureau pour un usage quotidien',
	desktopText: 'L\'application web est parfaite pour un chiffrement rapide, mais l\'application de bureau offre une expérience PGP complète avec des fonctionnalités de sécurité supplémentaires :',
	desktopFeatures: [
		'Raccourcis globaux — Ctrl+Shift+E pour chiffrer, Ctrl+Shift+D pour déchiffrer, depuis n\'importe quelle application',
		'Barre système — Toujours disponible dans votre barre des tâches, fonctionne silencieusement en arrière-plan',
		'Effacement automatique du presse-papiers — Le texte déchiffré est automatiquement supprimé du presse-papiers après 30 secondes',
		'Mode OPSEC — Masquez le titre de la fenêtre, clés en RAM uniquement et bouton de suppression d\'urgence',
		'Magasin de credentials OS — Clés stockées en toute sécurité dans Windows Credential Manager, macOS Keychain ou Linux Secret Service',
		'Application Android — La même interface sur mobile, avec synchronisation des clés par QR code entre appareils',
		'CLI — Outil en ligne de commande keychainpgp pour le scripting et l\'automatisation'
	],
	ctaDownload: 'Télécharger KeychainPGP',
	ctaAllPlatforms: 'Toutes les plateformes',
	faqTitle: 'Questions fréquemment posées',
	faqItems: [
		{ question: 'Est-il sûr de chiffrer des messages PGP en ligne ?', answer: 'Oui, avec l\'application web KeychainPGP. Tout le chiffrement et le déchiffrement se font localement dans votre navigateur via WebAssembly compilé depuis Rust. Aucune donnée n\'est envoyée à un serveur. L\'application fonctionne entièrement côté client, vos messages et clés ne quittent jamais votre appareil.' },
		{ question: 'À quoi sert le chiffrement PGP ?', answer: 'PGP (Pretty Good Privacy) sert à protéger des messages privés, des e-mails, des fichiers et des signatures numériques. Il utilise la cryptographie à clé publique : vous chiffrez un message avec la clé publique de quelqu\'un, et seule sa clé privée peut le déchiffrer. PGP est largement utilisé par les journalistes, activistes, professionnels de la sécurité et toute personne soucieuse de la confidentialité de ses communications.' },
		{ question: 'Comment fonctionne le chiffrement PGP ?', answer: 'PGP utilise une combinaison de cryptographie symétrique et asymétrique. Lors du chiffrement, PGP génère une clé de session aléatoire, chiffre le message avec cette clé via un chiffrement symétrique rapide, puis chiffre la clé de session avec la clé publique du destinataire. Le destinataire utilise sa clé privée pour déchiffrer la clé de session, puis déchiffre le message. KeychainPGP utilise des clés Ed25519 + X25519 modernes pour ce processus.' },
		{ question: 'Quelle est la différence entre PGP et GPG ?', answer: 'PGP (Pretty Good Privacy) est le standard de chiffrement original créé par Phil Zimmermann en 1991. GPG (GNU Privacy Guard, ou GnuPG) est une implémentation libre et open source du standard OpenPGP. OpenPGP est le standard IETF (RFC 4880) qui définit le format des messages. KeychainPGP implémente le standard OpenPGP via la bibliothèque Sequoia-PGP écrite en Rust.' },
		{ question: 'Peut-on utiliser PGP sans installer de logiciel ?', answer: 'Oui. KeychainPGP propose un outil PGP en ligne qui fonctionne entièrement dans votre navigateur via WebAssembly. Vous pouvez générer des clés, chiffrer et déchiffrer des messages, et gérer vos contacts sans rien installer. Pour un usage quotidien, KeychainPGP dispose aussi d\'applications de bureau natives (Windows, macOS, Linux) avec raccourcis globaux, d\'une application Android avec synchronisation par QR code, et d\'un CLI pour le scripting.' },
		{ question: 'Quel algorithme de chiffrement utilise KeychainPGP ?', answer: 'KeychainPGP utilise Ed25519 pour les signatures numériques et X25519 pour l\'échange de clés — deux algorithmes de cryptographie à courbe elliptique modernes. Ils offrent une sécurité équivalente à RSA-3072 pour une fraction de la taille de clé. Les opérations cryptographiques sont propulsées par Sequoia-PGP, une implémentation Rust d\'OpenPGP sans dépendance OpenSSL.' },
		{ question: 'Le chiffrement PGP est-il encore sûr en 2026 ?', answer: 'Oui. Le chiffrement PGP avec des algorithmes modernes (comme Ed25519/X25519 utilisés par KeychainPGP) reste l\'un des standards de chiffrement les plus robustes disponibles. Les fondements mathématiques de la cryptographie à courbe elliptique n\'ont pas été compromis. La sécurité de PGP dépend d\'une bonne gestion des clés, de phrases de passe robustes et d\'implémentations à jour.' },
		{ question: 'Comment partager ma clé publique PGP ?', answer: 'Vous pouvez partager votre clé publique PGP en l\'exportant au format ASCII (un bloc de texte commençant par -----BEGIN PGP PUBLIC KEY BLOCK-----). Envoyez-la par e-mail, collez-la dans un chat, publiez-la sur votre site web ou partagez-la sur un serveur de clés. Dans KeychainPGP, allez dans l\'onglet Clés et utilisez la fonction d\'export pour copier votre clé publique.' },
		{ question: 'Qu\'est-ce que le chiffrement PGP par presse-papiers ?', answer: 'Le chiffrement PGP par presse-papiers est un workflow où vous copiez du texte dans votre presse-papiers, le chiffrez ou le déchiffrez avec un raccourci ou un bouton, et collez le résultat. Cette approche fonctionne avec n\'importe quelle application — e-mail, chat, notes ou n\'importe quel champ texte. KeychainPGP a été conçu autour de cette approche avec des raccourcis globaux : Ctrl+Shift+E pour chiffrer et Ctrl+Shift+D pour déchiffrer.' },
		{ question: 'KeychainPGP est-il vraiment gratuit et open source ?', answer: 'Oui. KeychainPGP est 100 % gratuit et open source sous double licence MIT/Apache-2.0. Le code source est publiquement disponible sur GitHub. Il n\'y a pas de version payante, pas de fonctionnalités premium, pas de comptes, pas de télémétrie et pas de tracking.' }
	],
	learnMoreTitle: 'En savoir plus sur le chiffrement PGP',
	learnMoreLinks: [
		{ href: '/fr/docs/what-is-pgp/', title: 'Qu\'est-ce que PGP ?', text: 'Guide complet sur Pretty Good Privacy, la cryptographie à clé publique et les signatures numériques.' },
		{ href: '/fr/docs/how-to-use-pgp/', title: 'Comment utiliser PGP', text: 'Tutoriel pas à pas pour générer des clés, chiffrer des messages et vérifier des signatures.' },
		{ href: '/fr/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Comprendre la différence entre PGP, GPG (GnuPG) et le standard OpenPGP.' },
		{ href: '/fr/docs/pgp-for-beginners/', title: 'PGP pour débutants', text: 'Tout ce que vous devez savoir sur le chiffrement PGP, expliqué simplement.' },
		{ href: '/fr/docs/clipboard-encryption/', title: 'Chiffrement par presse-papiers', text: 'Comment fonctionne le chiffrement PGP par presse-papiers, considérations de sécurité et fonctionnalités OPSEC.' },
		{ href: '/fr/blog/best-pgp-tools-2026/', title: 'Meilleurs outils PGP en 2026', text: 'Comparatif complet et classement des meilleurs logiciels de chiffrement PGP disponibles.' }
	]
};
