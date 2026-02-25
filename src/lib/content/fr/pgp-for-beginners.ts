import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP pour débutants : guide simple pour commencer avec le chiffrement PGP',
	description: 'Apprenez le chiffrement PGP en partant de zéro. Ce guide pour débutants explique comment PGP fonctionne, vous accompagne dans votre premier message chiffré et couvre les concepts clés.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Pourquoi le chiffrement est important', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'Qu\'est-ce que PGP, simplement', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Concepts clés à connaître', level: 2 },
		{ id: 'public-key-your-address', text: 'Clé publique : votre adresse', level: 3 },
		{ id: 'private-key-your-password', text: 'Clé privée : votre mot de passe', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Chiffrement vs signature', level: 3 },
		{ id: 'key-fingerprints', text: 'Empreintes de clés', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Votre premier message PGP', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Erreurs courantes de débutant', level: 2 },
		{ id: 'next-steps', text: 'Prochaines étapes', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP pour débutants : guide simple pour commencer</h1>

<p>Commencer avec PGP est plus facile que vous ne le pensez. Vous générez une paire de clés — une publique, une privée — partagez la clé publique avec les personnes avec qui vous voulez communiquer, et utilisez la clé privée pour déchiffrer les messages qu'ils vous envoient. Vous n'avez pas besoin d'installer de logiciel pour essayer. Avec un <a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> gratuit comme KeychainPGP, vous pouvez chiffrer votre premier message en moins de cinq minutes, directement depuis votre navigateur.</p>

<h2 id="why-encryption-matters">Pourquoi le chiffrement est important</h2>

<p>Chaque jour, des milliards de messages transitent sur Internet. E-mails, messages de chat, documents — la plupart sont envoyés en texte clair, ce qui signifie que quiconque les intercepte peut les lire. Cela inclut les fournisseurs d'accès Internet, les pirates sur les Wi-Fi publics et même les programmes de surveillance gouvernementaux.</p>

<p><strong>Les fuites de données ne sont pas des événements rares.</strong> Elles arrivent constamment. Si vos messages ne sont pas chiffrés, ils sont stockés dans des bases de données en texte lisible, attendant la prochaine fuite.</p>

<p>Le chiffrement résout ce problème. Quand vous chiffrez un message avec PGP, il est brouillé en charabia illisible. Seule la personne qui détient la bonne clé privée peut le débrouiller.</p>

<h2 id="what-is-pgp-explained-simply">Qu'est-ce que PGP, simplement</h2>

<p>PGP signifie <strong>Pretty Good Privacy</strong>. Créé en 1991 par Phil Zimmermann, c'est devenu le standard mondial pour le chiffrement de messages et de fichiers.</p>

<p>Voici la façon la plus simple de comprendre PGP. Pensez-y comme une <strong>boîte aux lettres avec une fente</strong>.</p>

<p>Imaginez une boîte aux lettres spéciale dans la rue. N'importe qui peut s'approcher et déposer une lettre par la fente. Mais une fois la lettre à l'intérieur, seul vous pouvez l'ouvrir, car vous seul avez la clé de la porte de la boîte aux lettres.</p>

<ul>
<li>La <strong>fente de la boîte aux lettres</strong> est votre <strong>clé publique</strong>. Vous la donnez à quiconque veut vous envoyer un message privé. Il est sûr de la partager.</li>
<li>La <strong>clé de la boîte aux lettres</strong> est votre <strong>clé privée</strong>. Vous ne la partagez jamais avec personne.</li>
</ul>

<p>C'est ce qu'on appelle le <strong>chiffrement asymétrique</strong> — une clé verrouille, une autre déverrouille. Pour une explication technique plus approfondie, lisez notre guide complet sur <a href="/fr/docs/what-is-pgp/">ce qu'est PGP</a>.</p>

<h2 id="key-concepts-you-need-to-know">Concepts clés à connaître</h2>

<h3 id="public-key-your-address">Clé publique : votre adresse</h3>

<p>Votre clé publique est comme votre adresse postale. Vous la distribuez librement pour que les gens puissent vous envoyer des choses. En PGP, vous partagez votre clé publique pour que d'autres puissent chiffrer des messages que vous seul pouvez lire.</p>

<h3 id="private-key-your-password">Clé privée : votre mot de passe</h3>

<p>Votre clé privée est comme la clé de votre porte d'entrée. C'est la seule chose qui vous permet d'ouvrir les messages chiffrés avec votre clé publique. Vous ne devez <strong>jamais partager votre clé privée</strong> avec quiconque.</p>

<h3 id="encryption-vs-signing">Chiffrement vs signature</h3>

<p>PGP peut faire deux choses : <strong>chiffrer</strong> et <strong>signer</strong>.</p>

<ul>
<li><strong>Chiffrement</strong> — brouille un message pour que seul le destinataire puisse le lire. Vous utilisez la clé publique du destinataire pour chiffrer, et il utilise sa clé privée pour déchiffrer.</li>
<li><strong>Signature</strong> — prouve qu'un message vient de vous et n'a pas été altéré. Vous utilisez votre propre clé privée pour signer, et n'importe qui avec votre clé publique peut vérifier la signature.</li>
</ul>

<h3 id="key-fingerprints">Empreintes de clés</h3>

<p>Une empreinte de clé est une courte chaîne de caractères qui identifie de manière unique une clé PGP. Les empreintes servent à <strong>vérifier</strong> qu'une clé publique appartient bien à la personne que vous pensez. Comparez toujours l'empreinte via un canal de confiance séparé.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Quand vous voyez une clé PGP ou un message chiffré comme un bloc de texte commençant par <code>-----BEGIN PGP MESSAGE-----</code>, c'est de l'<strong>ASCII armor</strong>. C'est simplement une façon d'encoder des données binaires en caractères de texte imprimables pour pouvoir les copier-coller dans des e-mails, des fenêtres de chat ou des formulaires web.</p>

<h2 id="your-first-pgp-message">Votre premier message PGP</h2>

<p>Suivons les étapes pour chiffrer votre premier message avec l'<a href="https://keychainpgp.github.io">application web KeychainPGP</a>. C'est un <a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> gratuit qui fonctionne entièrement dans votre navigateur.</p>

<p><strong>Étape 1 : Ouvrez l'application web.</strong> Allez sur <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. L'application se charge via WebAssembly, le moteur PGP fonctionne localement sur votre ordinateur.</p>

<p><strong>Étape 2 : Générez votre paire de clés.</strong> Dans l'onglet Clés, créez une nouvelle clé. KeychainPGP génère une paire de clés Ed25519 + X25519 moderne.</p>

<p><strong>Étape 3 : Exportez et partagez votre clé publique.</strong> Utilisez la fonction d'export pour copier votre clé publique au format ASCII-armored.</p>

<p><strong>Étape 4 : Importez la clé publique du destinataire.</strong> Dans l'onglet Clés, collez le bloc de clé publique de votre contact.</p>

<p><strong>Étape 5 : Écrivez et chiffrez votre message.</strong> Allez dans l'onglet Chiffrer, tapez votre message, sélectionnez le destinataire et cliquez sur <strong>« Chiffrer vers le presse-papiers »</strong>.</p>

<p><strong>Étape 6 : Envoyez le message chiffré.</strong> Collez le texte chiffré dans n'importe quel e-mail, chat ou application de messagerie.</p>

<p><strong>Étape 7 : Déchiffrez une réponse.</strong> Copiez le bloc de message PGP chiffré, allez dans l'onglet Déchiffrer, collez et cliquez sur Déchiffrer.</p>

<p>Pour un guide plus détaillé, consultez notre tutoriel <a href="/fr/docs/how-to-use-pgp/">comment utiliser PGP</a>.</p>

<h2 id="common-beginner-mistakes">Erreurs courantes de débutant</h2>

<p><strong>1. Partager sa clé privée.</strong> Votre clé privée ne doit jamais être envoyée à quiconque. Ne partagez que votre clé <strong>publique</strong>.</p>

<p><strong>2. Ne pas vérifier les empreintes.</strong> Vérifiez toujours l'empreinte de la clé via un canal séparé et de confiance — un appel téléphonique, un appel vidéo ou une rencontre en personne.</p>

<p><strong>3. Perdre sa clé privée sans sauvegarde.</strong> Si vous perdez votre clé privée, chaque message chiffré avec cette clé est perdu pour toujours. Sauvegardez votre clé privée dans un endroit sécurisé.</p>

<p><strong>4. Ne pas sauvegarder son certificat de révocation.</strong> Un certificat de révocation vous permet de déclarer publiquement que votre clé n'est plus valide si elle est compromise.</p>

<p><strong>5. Utiliser des clés obsolètes ou faibles.</strong> Si vous générez de nouvelles clés aujourd'hui, utilisez des algorithmes modernes. KeychainPGP utilise Ed25519 + X25519 par défaut.</p>

<h2 id="next-steps">Prochaines étapes</h2>

<ul>
<li><strong>Lisez le guide complet :</strong> <a href="/fr/docs/how-to-use-pgp/">Comment utiliser PGP</a> couvre la signature, la vérification, la gestion des clés et des sujets avancés.</li>
<li><strong>Comprenez ce qu'est PGP :</strong> Pour un approfondissement, lisez <a href="/fr/docs/what-is-pgp/">Qu'est-ce que PGP</a>.</li>
<li><strong>Apprenez le chiffrement par presse-papiers :</strong> Découvrez comment le <a href="/fr/docs/clipboard-encryption/">chiffrement par presse-papiers</a> vous permet d'utiliser PGP avec n'importe quelle application.</li>
<li><strong>Essayez l'outil en ligne :</strong> Ouvrez l'<a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> et entraînez-vous.</li>
<li><strong>Obtenez l'application de bureau :</strong> L'<a href="https://github.com/keychainpgp/keychainpgp/releases/latest">application de bureau KeychainPGP</a> ajoute les raccourcis globaux, la barre système et l'effacement automatique du presse-papiers.</li>
</ul>

<h2 id="faq">Questions fréquemment posées</h2>

<h3>PGP est-il difficile à apprendre ?</h3>
<p>Non. Le concept de base est simple : une clé publique à partager, une clé privée à garder secrète. Chiffrer un message prend quelques clics avec un outil moderne comme KeychainPGP.</p>

<h3>Faut-il installer un logiciel pour utiliser PGP ?</h3>
<p>Pas nécessairement. Vous pouvez utiliser l'<a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> de KeychainPGP directement dans votre navigateur. Il fonctionne entièrement sur votre appareil via WebAssembly.</p>

<h3>Quelqu'un peut-il casser mes messages chiffrés PGP ?</h3>
<p>Avec des algorithmes modernes (comme Ed25519 + X25519 utilisés par KeychainPGP), casser le chiffrement par force brute prendrait plus que l'âge de l'univers avec la technologie actuelle. Les vrais risques sont pratiques : perdre sa clé privée, utiliser une phrase de passe faible ou avoir un malware sur son appareil.</p>

<h3>Quelle est la différence entre PGP, GPG et OpenPGP ?</h3>
<p><strong>PGP</strong> est le programme original créé en 1991. <strong>OpenPGP</strong> est le standard ouvert (RFC 4880) qui définit les formats. <strong>GPG</strong> (GNU Privacy Guard) est une implémentation libre du standard OpenPGP. KeychainPGP est une autre implémentation, construite sur Sequoia-PGP en Rust. Tous sont compatibles car ils suivent le même standard.</p>

<h3>Comment partager ma clé publique ?</h3>
<p>Exportez votre clé publique au format ASCII-armored — c'est un bloc de texte commençant par <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>. Collez-la dans un e-mail, publiez-la sur votre site web, partagez-la dans un chat ou téléchargez-la sur un serveur de clés. N'oubliez pas de vérifier les empreintes avec vos contacts via un canal séparé.</p>
`
};

export default doc;
