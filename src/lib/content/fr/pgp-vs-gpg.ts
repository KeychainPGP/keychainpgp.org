import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG : quelle est la différence entre PGP et GPG ?',
	description: 'Découvrez la différence entre PGP et GPG. Comparez Pretty Good Privacy, GnuPG et le standard OpenPGP pour trouver le bon outil de chiffrement.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Quelle est la différence ?', level: 2 },
		{ id: 'what-is-pgp', text: 'Qu\'est-ce que PGP ?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'Qu\'est-ce que GPG (GnuPG) ?', level: 2 },
		{ id: 'what-is-openpgp', text: 'Qu\'est-ce qu\'OpenPGP ?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Tableau comparatif PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Différences clés expliquées', level: 2 },
		{ id: 'which-should-you-use', text: 'Lequel utiliser ?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Où se situe KeychainPGP', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG : quelle est la différence entre PGP et GPG ?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">Quelle est la différence entre PGP et GPG ?</h2>

<p>La différence entre PGP et GPG tient à leur origine et à leur licence. <strong>PGP</strong> (Pretty Good Privacy) est le programme de chiffrement propriétaire original créé par Phil Zimmermann en 1991. <strong>GPG</strong> (GNU Privacy Guard, aussi appelé GnuPG) est une réimplémentation libre et open source du même concept, développée dans le cadre du projet GNU. Les deux programmes implémentent le standard <strong>OpenPGP</strong>, ce qui signifie qu'ils produisent des messages chiffrés compatibles et peuvent fonctionner avec les clés de l'un et l'autre. En pratique, GPG est l'outil que la plupart des gens utilisent aujourd'hui car il est gratuit, activement maintenu et disponible sur tous les systèmes d'exploitation majeurs. Si vous êtes nouveau dans le chiffrement, notre <a href="/fr/docs/pgp-for-beginners/">guide PGP pour débutants</a> présente les concepts fondamentaux pas à pas.</p>

<h2 id="what-is-pgp">Qu'est-ce que PGP ?</h2>

<p>PGP signifie <strong>Pretty Good Privacy</strong>. Phil Zimmermann a écrit la première version en 1991 et l'a publiée comme outil gratuit pour les activistes et citoyens ordinaires ayant besoin d'un chiffrement fort. Le logiciel combinait le chiffrement à clé symétrique avec la cryptographie à clé publique.</p>

<p>Après une enquête fédérale de trois ans (abandonnée en 1996), Zimmermann a fondé PGP Inc. La société a changé de mains plusieurs fois : Network Associates en 1997, PGP Corporation en 2002, puis Symantec (maintenant Broadcom) en 2010. Aujourd'hui, PGP existe comme suite de produits commerciaux destinés principalement aux entreprises.</p>

<p>Pour en savoir plus sur la technologie sous-jacente, voir notre article complet sur <a href="/fr/docs/what-is-pgp/">ce qu'est PGP et comment il fonctionne</a>.</p>

<h2 id="what-is-gpg-gnupg">Qu'est-ce que GPG (GnuPG) ?</h2>

<p>GPG, ou <strong>GNU Privacy Guard (GnuPG)</strong>, est une implémentation libre et open source du standard OpenPGP. Werner Koch a démarré le projet en 1997 avec un financement du gouvernement allemand et a publié la version 1.0 en 1999. GnuPG a été créé spécifiquement pour fournir une alternative entièrement libre au logiciel propriétaire PGP.</p>

<p>GnuPG fait partie du projet GNU et est licencié sous la licence publique générale GNU (GPL). Il est inclus par défaut dans la plupart des distributions Linux. L'outil en ligne de commande <code>gpg</code> est l'interface avec laquelle la plupart des développeurs et administrateurs système interagissent. Pour un aperçu des outils disponibles, voir notre <a href="/fr/docs/pgp-tools/">comparatif des outils PGP</a>.</p>

<h2 id="what-is-openpgp">Qu'est-ce qu'OpenPGP ?</h2>

<p><strong>OpenPGP</strong> n'est ni un produit ni un logiciel. C'est un standard ouvert qui définit les formats de messages, les formats de clés et les procédures cryptographiques que les outils compatibles PGP doivent suivre. L'IETF a publié la spécification originale comme <strong>RFC 2440</strong> en 1998, et la version la plus référencée est le <strong>RFC 4880</strong> (2007). Une mise à jour majeure, le <strong>RFC 9580</strong> (2024), modernise le standard avec le support d'Ed25519 et du chiffrement AEAD.</p>

<p>L'existence d'OpenPGP rend l'interopérabilité possible. Parce que PGP et GPG implémentent le même standard, un message chiffré avec GPG peut être déchiffré par PGP, et vice versa.</p>

<h2 id="pgp-vs-gpg-comparison-table">Tableau comparatif PGP vs GPG</h2>

<table>
<tr><th>Caractéristique</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Type</strong></td><td>Logiciel commercial</td><td>Logiciel libre/open source</td><td>Standard ouvert</td></tr>
<tr><td><strong>Licence</strong></td><td>Propriétaire</td><td>GPL (gratuit)</td><td>Spécification IETF</td></tr>
<tr><td><strong>Coût</strong></td><td>Licence payante</td><td>Gratuit</td><td>N/A</td></tr>
<tr><td><strong>Plateformes</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>N/A</td></tr>
<tr><td><strong>GUI incluse</strong></td><td>Oui (console entreprise)</td><td>Non (GUI tierces disponibles)</td><td>N/A</td></tr>
<tr><td><strong>Source disponible</strong></td><td>Non</td><td>Oui</td><td>Standard public</td></tr>
</table>

<h2 id="key-differences-explained">Différences clés expliquées</h2>

<h3>Licence et coût</h3>

<p>PGP est un logiciel propriétaire vendu sous licence commerciale. GPG est publié sous la GPL, ce qui signifie que n'importe qui peut le télécharger, l'utiliser, le modifier et le redistribuer gratuitement. Pour les particuliers, les petites équipes et les projets open source, GPG est le choix évident en termes de coût.</p>

<h3>Support des plateformes</h3>

<p>GnuPG fonctionne sur pratiquement tous les systèmes Unix et dispose de builds officiels pour Windows et macOS. Pour les besoins multi-plateformes, des outils modernes comme KeychainPGP fournissent des builds natifs pour Windows, macOS, Linux et Android depuis une seule base de code.</p>

<h3>Expérience utilisateur</h3>

<p>PGP commercial inclut une interface graphique pour le déploiement en entreprise. GnuPG est fondamentalement un outil en ligne de commande. Des outils comme KeychainPGP offrent une interface graphique native qui gère la gestion des clés, le chiffrement, le déchiffrement et la signature sans mémoriser des options en ligne de commande. Vous pouvez essayer le chiffrement PGP directement dans le navigateur avec notre <a href="/fr/pgp-online-encrypt/">outil de chiffrement PGP en ligne</a>.</p>

<h2 id="which-should-you-use">Lequel utiliser ?</h2>

<ul>
<li><strong>Entreprise avec infrastructure Broadcom/Symantec existante :</strong> PGP commercial peut être le chemin de moindre résistance.</li>
<li><strong>Développeurs et administrateurs système :</strong> GnuPG est l'outil standard, installé par défaut sur la plupart des serveurs.</li>
<li><strong>Utilisateurs soucieux de leur vie privée voulant une GUI :</strong> Envisagez une application OpenPGP moderne comme KeychainPGP.</li>
<li><strong>Besoins de chiffrement web ou rapide :</strong> Un <a href="/fr/pgp-online-encrypt/">outil de chiffrement PGP en ligne</a> peut gérer les tâches ponctuelles sans rien installer.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">Où se situe KeychainPGP</h2>

<p><a href="/">KeychainPGP</a> est une application de bureau moderne et open source qui implémente le standard OpenPGP en utilisant <strong>Sequoia-PGP</strong>, une bibliothèque OpenPGP écrite à partir de zéro en Rust. Ce n'est ni PGP (le produit commercial) ni GPG (GnuPG). C'est une implémentation indépendante qui coexiste avec les deux dans l'écosystème OpenPGP.</p>

<p>Raisons principales d'envisager KeychainPGP :</p>

<ul>
<li><strong>Multi-plateforme :</strong> Builds natifs pour Windows, macOS, Linux et Android, plus une application web et un CLI</li>
<li><strong>Cryptographie moderne :</strong> Construit sur Sequoia-PGP avec support de Curve25519/Ed25519 et AEAD</li>
<li><strong>Open source :</strong> Double licence MIT / Apache-2.0, entièrement auditable</li>
<li><strong>Convivial :</strong> Interface graphique avec workflow presse-papiers et raccourcis globaux</li>
<li><strong>CLI pour l'automatisation :</strong> Le CLI <code>keychainpgp</code> supporte la génération de clés, le chiffrement, le déchiffrement, la signature, la vérification et la gestion du trousseau</li>
<li><strong>Conforme à OpenPGP :</strong> Les clés et messages sont interopérables avec GPG, PGP et tout autre outil OpenPGP</li>
</ul>

<h2 id="frequently-asked-questions">Questions fréquemment posées</h2>

<h3>GPG est-il la même chose que PGP ?</h3>

<p>Non. GPG (GnuPG) et PGP sont des logiciels distincts créés par des personnes différentes. PGP a été créé par Phil Zimmermann en 1991 et est aujourd'hui un produit commercial de Broadcom. GPG a été créé par Werner Koch en 1997 comme alternative libre et open source. Les deux implémentent le standard OpenPGP, ils sont donc fonctionnellement compatibles.</p>

<h3>Les clés GPG et PGP peuvent-elles fonctionner ensemble ?</h3>

<p>Oui. GPG et PGP utilisent le format de clé OpenPGP défini par le standard IETF. Vous pouvez exporter une clé publique depuis GPG et l'importer dans PGP, ou dans tout autre outil conforme à OpenPGP comme KeychainPGP.</p>

<h3>GPG est-il encore sécurisé en 2026 ?</h3>

<p>GnuPG reste un outil sécurisé et activement maintenu. Utilisez des types de clés modernes (comme Ed25519), gardez votre logiciel à jour et suivez les bonnes pratiques de gestion des clés. Pour un guide pas à pas, voir notre article <a href="/fr/docs/pgp-for-beginners/">PGP pour débutants</a>.</p>

<h3>Que signifie OpenPGP ?</h3>

<p>OpenPGP est un standard ouvert publié par l'IETF qui définit comment fonctionne le chiffrement compatible PGP. Il spécifie les formats de messages, les formats de clés, les exigences d'algorithmes et les structures de signatures.</p>

<h3>Ai-je besoin de PGP ou GPG pour utiliser KeychainPGP ?</h3>

<p>Non. KeychainPGP est une application autonome qui ne dépend pas de l'installation de PGP ou GnuPG. Il utilise la bibliothèque Sequoia-PGP, une implémentation indépendante du standard OpenPGP écrite en Rust. Cependant, les clés et messages chiffrés créés dans KeychainPGP sont entièrement compatibles avec GPG et PGP.</p>
`
};

export default doc;
