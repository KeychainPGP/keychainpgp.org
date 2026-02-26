import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Comment utiliser PGP : tutoriel de chiffrement pas à pas (2026)',
	description: 'Apprenez à utiliser le chiffrement PGP étape par étape. Générez des clés, chiffrez et déchiffrez des messages, signez et vérifiez des données avec ce tutoriel PGP complet.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Comment utiliser PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Ce dont vous avez besoin', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Étape 1 : Générer une paire de clés', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Étape 2 : Partager votre clé publique', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Étape 3 : Importer les clés de vos contacts', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Étape 4 : Chiffrer un message', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Étape 5 : Déchiffrer un message', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Étape 6 : Signer un message', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Étape 7 : Vérifier une signature', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'Workflow presse-papiers KeychainPGP', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Application web vs application de bureau', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>Comment utiliser PGP</h1>

<p>Pour utiliser PGP, vous générez une paire de clés (une clé publique et une clé privée), partagez votre clé publique avec les personnes avec qui vous voulez communiquer, importez leurs clés publiques, puis utilisez ces clés pour chiffrer, déchiffrer, signer et vérifier des messages. Le chiffrement PGP garantit que seul le destinataire prévu peut lire votre message, tandis que les signatures numériques prouvent qu'un message vient bien de vous. Des outils comme <a href="/fr/pgp-online-encrypt/">KeychainPGP</a> rendent ce processus accessible grâce à un workflow basé sur le presse-papiers — sans ligne de commande.</p>

<p>Ce tutoriel PGP vous guide à travers chaque étape, de la génération de votre première paire de clés à l'envoi et la réception de messages chiffrés. Si vous êtes nouveau dans le concept de cryptographie à clé publique, envisagez de lire d'abord <a href="/fr/docs/what-is-pgp/">Qu'est-ce que PGP ?</a> ou <a href="/fr/docs/pgp-for-beginners/">PGP pour débutants</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">Ce dont vous avez besoin avant de commencer</h2>

<p>Avant de chiffrer votre premier message avec PGP, vous avez besoin d'une application PGP :</p>

<ul>
<li><strong>Application web KeychainPGP</strong> — Ouvrez l'<a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> dans n'importe quel navigateur moderne. Tout fonctionne localement via WebAssembly compilé depuis Rust. Pas d'installation, pas de compte, aucune donnée envoyée à un serveur.</li>
<li><strong>Application de bureau KeychainPGP</strong> — Téléchargez l'application native pour Windows, macOS, Linux ou Android depuis la <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">page des releases GitHub</a>. L'application de bureau ajoute des raccourcis globaux, l'intégration en barre système, l'effacement automatique du presse-papiers et la synchronisation par QR code.</li>
<li><strong>CLI KeychainPGP</strong> — Le CLI <code>keychainpgp</code> fournit des commandes pour la génération de clés, le chiffrement, le déchiffrement, la signature, la vérification et la gestion du trousseau. Idéal pour le scripting et l'automatisation.</li>
<li><strong>GnuPG (GPG)</strong> — L'outil en ligne de commande traditionnel. Puissant mais nécessite une familiarité avec le terminal. Voir <a href="/fr/docs/pgp-vs-gpg/">PGP vs GPG</a> pour une comparaison détaillée.</li>
</ul>

<blockquote><p><strong>Astuce :</strong> Si vous voulez juste essayer le chiffrement PGP maintenant sans rien installer, ouvrez l'<a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> et suivez ce tutoriel.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Étape 1 : Générer une paire de clés PGP</h2>

<p>Une paire de clés PGP se compose de deux clés mathématiquement liées :</p>

<ul>
<li><strong>Clé publique</strong> — Vous la partagez librement. N'importe qui peut l'utiliser pour chiffrer des messages à votre attention ou vérifier vos signatures.</li>
<li><strong>Clé privée</strong> — Vous la gardez secrète. Elle déchiffre les messages chiffrés avec votre clé publique et crée des signatures numériques.</li>
</ul>

<h3>Générer une clé dans KeychainPGP</h3>

<ol>
<li>Ouvrez KeychainPGP (application web ou de bureau).</li>
<li>Naviguez vers l'onglet <strong>Clés</strong>.</li>
<li>Cliquez sur <strong>Générer une nouvelle clé</strong>.</li>
<li>Entrez votre nom et adresse e-mail.</li>
<li>Cliquez sur <strong>Générer</strong>. KeychainPGP crée une paire de clés <strong>Ed25519 + X25519</strong> — l'algorithme le plus moderne et sécurisé disponible en OpenPGP.</li>
</ol>

<h3>Générer une clé avec GPG (ligne de commande)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Sélectionnez le type de clé (RSA ou ECC), la taille et la période d'expiration. Pour une sécurité moderne, choisissez Ed25519 si votre version de GPG le supporte.</p>

<hr>

<h2 id="step-2-share-your-public-key">Étape 2 : Partager votre clé publique</h2>

<p>Votre clé publique est un bloc de texte au format <strong>ASCII-armored</strong>. Vous pouvez la partager n'importe où :</p>

<ul>
<li><strong>E-mail</strong> — Collez-la dans le corps d'un e-mail ou joignez-la en fichier <code>.asc</code>.</li>
<li><strong>Applications de messagerie</strong> — Envoyez-la via Signal, WhatsApp, Matrix ou toute plateforme de chat.</li>
<li><strong>Votre site web</strong> — Publiez-la sur votre site personnel, profil GitHub ou bio Twitter.</li>
<li><strong>Serveurs de clés</strong> — Téléchargez-la sur un serveur de clés public comme <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Important :</strong> Ne partagez que votre clé <strong>publique</strong>. Ne partagez jamais votre clé privée avec quiconque, en aucune circonstance.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Étape 3 : Importer les clés publiques de vos contacts</h2>

<p>Avant de pouvoir envoyer un message chiffré à quelqu'un, vous avez besoin de sa clé publique. Demandez à votre contact de vous envoyer sa clé publique ASCII-armored, ou cherchez-la sur un serveur de clés.</p>

<h3>Importer une clé dans KeychainPGP</h3>

<ol>
<li>Copiez le bloc de clé publique du contact dans votre presse-papiers.</li>
<li>Ouvrez KeychainPGP et allez dans l'onglet <strong>Clés</strong>.</li>
<li>Cliquez sur <strong>Importer une clé</strong> et collez la clé.</li>
<li>Le contact apparaît dans votre liste de clés avec son nom et son e-mail.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Étape 4 : Chiffrer un message</h2>

<h3>Chiffrement dans KeychainPGP (web ou bureau)</h3>

<ol>
<li>Allez dans l'onglet <strong>Chiffrer</strong>.</li>
<li>Tapez ou collez le message que vous voulez chiffrer.</li>
<li>Sélectionnez le destinataire dans votre liste de clés.</li>
<li>Cliquez sur <strong>Chiffrer vers le presse-papiers</strong>. Le message chiffré est copié dans votre presse-papiers.</li>
<li>Collez le message chiffré dans votre e-mail, chat ou tout autre canal de communication.</li>
</ol>

<h3>Chiffrement avec le raccourci de bureau</h3>

<p>Avec l'application de bureau KeychainPGP, le processus est encore plus rapide grâce au <a href="/fr/docs/clipboard-encryption/">workflow par presse-papiers</a> :</p>

<ol>
<li>Tapez votre message dans n'importe quelle application.</li>
<li>Sélectionnez et copiez le texte (<code>Ctrl+C</code>).</li>
<li>Appuyez sur <strong><code>Ctrl+Shift+E</code></strong> — KeychainPGP chiffre le contenu du presse-papiers.</li>
<li>Collez le message chiffré (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Étape 5 : Déchiffrer un message</h2>

<h3>Déchiffrement dans KeychainPGP (web ou bureau)</h3>

<ol>
<li>Copiez le bloc de message chiffré complet.</li>
<li>Allez dans l'onglet <strong>Déchiffrer</strong> de KeychainPGP.</li>
<li>Collez le texte chiffré.</li>
<li>Cliquez sur <strong>Déchiffrer</strong>. Le texte en clair apparaît immédiatement.</li>
</ol>

<h3>Déchiffrement avec le raccourci de bureau</h3>

<ol>
<li>Sélectionnez et copiez le bloc de message chiffré (<code>Ctrl+C</code>).</li>
<li>Appuyez sur <strong><code>Ctrl+Shift+D</code></strong> — KeychainPGP déchiffre le contenu du presse-papiers.</li>
<li>Le texte en clair remplace le texte chiffré dans votre presse-papiers. Collez-le où vous en avez besoin.</li>
</ol>

<p>L'application de bureau dispose aussi de l'<strong>effacement automatique du presse-papiers</strong> : après 30 secondes, le texte déchiffré est automatiquement supprimé du presse-papiers.</p>

<hr>

<h2 id="step-6-sign-a-message">Étape 6 : Signer un message</h2>

<p>Une signature numérique PGP prouve deux choses :</p>

<ol>
<li><strong>Authenticité</strong> — Le message a été écrit par le détenteur de la clé de signature.</li>
<li><strong>Intégrité</strong> — Le message n'a pas été altéré depuis sa signature.</li>
</ol>

<p>Signer ne chiffre pas le message. N'importe qui peut lire un message signé, mais peut vérifier qu'il vient bien de vous et n'a pas été falsifié.</p>

<h3>Quand signer des messages</h3>

<ul>
<li>Annoncer des versions de logiciels ou des avis de sécurité</li>
<li>Vérifier votre identité sur des forums publics</li>
<li>Signer des e-mails pour prouver leur origine</li>
<li>Signature de commits Git pour l'intégrité du code</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Étape 7 : Vérifier une signature</h2>

<p>Lorsque vous recevez un message signé, vous pouvez vérifier qu'il est authentique et non modifié.</p>

<h3>Vérification dans KeychainPGP</h3>

<ol>
<li>Copiez le message signé complet (incluant le bloc de signature).</li>
<li>Allez dans l'onglet <strong>Vérifier</strong>.</li>
<li>Collez le message signé.</li>
<li>Cliquez sur <strong>Vérifier</strong>. KeychainPGP confirme si la signature est valide.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">Workflow presse-papiers KeychainPGP</h2>

<p>Ce qui distingue KeychainPGP des outils PGP traditionnels est son <a href="/fr/docs/clipboard-encryption/">workflow de chiffrement par presse-papiers</a>. Au lieu d'opérer sur des fichiers ou de nécessiter un client e-mail dédié, KeychainPGP fonctionne avec n'importe quelle application via le presse-papiers système.</p>

<table>
<tr><th>Action</th><th>Application web</th><th>Application de bureau</th></tr>
<tr><td>Chiffrer</td><td>Coller le texte, cliquer sur Chiffrer</td><td>Copier le texte, appuyer sur <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Déchiffrer</td><td>Coller le texte chiffré, cliquer sur Déchiffrer</td><td>Copier le texte chiffré, appuyer sur <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Signer</td><td>Coller le texte, cliquer sur Signer</td><td>Disponible dans la fenêtre de l'application</td></tr>
<tr><td>Vérifier</td><td>Coller le texte signé, cliquer sur Vérifier</td><td>Disponible dans la fenêtre de l'application</td></tr>
</table>

<p>Fonctionnalités de sécurité supplémentaires de l'application de bureau :</p>

<ul>
<li><strong>Effacement automatique du presse-papiers</strong> — Le texte déchiffré est supprimé du presse-papiers après 30 secondes.</li>
<li><strong>Mode OPSEC</strong> — Titre de fenêtre déguisé, stockage des clés en RAM uniquement et bouton de suppression d'urgence.</li>
<li><strong>Magasin de credentials OS</strong> — Les clés privées sont stockées en toute sécurité via Windows Credential Manager, macOS Keychain ou Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Application web vs application de bureau</h2>

<p><strong>Application web</strong> (<a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a>) :</p>

<ul>
<li>Fonctionne entièrement dans le navigateur via WebAssembly</li>
<li>Aucune installation, aucun compte requis</li>
<li>Parfaite pour les tâches de chiffrement rapides</li>
<li>Les clés sont stockées dans le stockage local du navigateur</li>
</ul>

<p><strong>Application de bureau</strong> (Windows, macOS, Linux, Android) :</p>

<ul>
<li>Raccourcis globaux pour chiffrer et déchiffrer</li>
<li>Intégration en barre système</li>
<li>Effacement automatique du presse-papiers</li>
<li>Mode OPSEC avec clés en RAM uniquement et suppression d'urgence</li>
<li>Stockage sécurisé des clés via le gestionnaire de credentials de l'OS</li>
<li>Mieux adapté à l'usage quotidien et à la gestion de clés à long terme</li>
</ul>

<p>Les deux applications sont gratuites, open source (MIT / Apache-2.0) et sans aucune télémétrie.</p>

<hr>

<h2 id="frequently-asked-questions">Questions fréquemment posées</h2>

<h3>Dois-je partager ma clé privée ?</h3>

<p>Non. Vous ne devez <strong>jamais</strong> partager votre clé privée avec quiconque. Votre clé privée est ce qui vous permet de déchiffrer les messages qui vous sont envoyés et de créer des signatures numériques. Si quelqu'un d'autre obtient votre clé privée, il peut lire tous les messages chiffrés pour vous et se faire passer pour vous.</p>

<h3>Que se passe-t-il si je perds ma clé privée ?</h3>

<p>Si vous perdez votre clé privée, vous perdez définitivement la capacité de déchiffrer tous les messages chiffrés avec la clé publique correspondante. Il n'existe aucun mécanisme de récupération. Gardez toujours une sauvegarde sécurisée de votre clé privée.</p>

<h3>Puis-je chiffrer des fichiers avec PGP ?</h3>

<p>Oui. PGP peut chiffrer à la fois des messages texte et des fichiers binaires. KeychainPGP se concentre sur le chiffrement de texte par presse-papiers, tandis que des outils comme GnuPG supportent le chiffrement de fichiers directement. Pour une comparaison détaillée, voir le guide <a href="/fr/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>Le chiffrement PGP est-il sécurisé ?</h3>

<p>Le chiffrement PGP avec des algorithmes modernes est extrêmement sécurisé. KeychainPGP utilise Ed25519 pour les signatures et X25519 pour l'échange de clés — des algorithmes à courbe elliptique qui offrent une sécurité équivalente à RSA-3072 pour une fraction de la taille de clé. Les principaux risques ne sont pas cryptographiques mais opérationnels : phrases de passe faibles, appareils compromis ou gestion des clés négligente.</p>

<h3>Qu'est-ce qu'une empreinte PGP ?</h3>

<p>Une empreinte PGP est une chaîne hexadécimale de 40 caractères qui identifie de manière unique une clé PGP. Les empreintes sont utilisées pour vérifier qu'une clé publique appartient bien à la personne que vous pensez. Comparez toujours l'empreinte via un canal de confiance séparé (appel téléphonique, rencontre en personne) pour prévenir les attaques de l'homme du milieu.</p>
`
};

export default doc;
