import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Qu\'est-ce que PGP ? Guide complet sur le chiffrement Pretty Good Privacy',
	description: 'Découvrez ce qu\'est PGP (Pretty Good Privacy), comment fonctionne le chiffrement PGP avec la cryptographie à clé publique, le standard OpenPGP, les signatures numériques et les usages modernes.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'Qu\'est-ce que le chiffrement PGP ?', level: 2 },
		{ id: 'history-of-pgp', text: 'Histoire de PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Comment fonctionne le chiffrement PGP', level: 2 },
		{ id: 'public-key-cryptography', text: 'Cryptographie à clé publique', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'Le modèle de chiffrement hybride', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Signatures numériques PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'Le standard OpenPGP', level: 2 },
		{ id: 'web-of-trust', text: 'Réseau de confiance', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'Algorithmes et types de clés PGP', level: 2 },
		{ id: 'classic-algorithms', text: 'Algorithmes classiques', level: 3 },
		{ id: 'modern-algorithms', text: 'Algorithmes modernes', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Cas d\'utilisation courants de PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP aujourd\'hui', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Commencer avec PGP', level: 2 }
	],
	html: `
<h1>Qu'est-ce que PGP ? Guide complet sur le chiffrement Pretty Good Privacy</h1>

<h2 id="what-is-pgp-encryption">Qu'est-ce que le chiffrement PGP ?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> est un programme de chiffrement qui assure la confidentialité et l'authentification cryptographiques pour les communications de données. Le chiffrement PGP utilise une combinaison de cryptographie à clé symétrique et de cryptographie à clé publique pour permettre aux utilisateurs de chiffrer des messages, des fichiers et d'autres données afin que seul le destinataire prévu puisse les lire. Créé à l'origine par Phil Zimmermann en 1991, PGP est devenu le standard de chiffrement d'e-mails le plus utilisé au monde et constitue la base de la spécification <strong>OpenPGP</strong> définie dans le RFC 4880. Que vous ayez besoin d'envoyer un e-mail confidentiel, de vérifier l'identité d'un éditeur de logiciels ou de protéger des fichiers sensibles, PGP fournit un cadre cryptographique éprouvé, auquel font confiance journalistes, chercheurs en sécurité, gouvernements et utilisateurs du quotidien.</p>

<p>Si vous voulez essayer le chiffrement PGP immédiatement sans installer de logiciel, KeychainPGP propose un <a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> qui fonctionne entièrement dans votre navigateur.</p>

<h2 id="history-of-pgp">Histoire de PGP</h2>

<p>Phil Zimmermann a publié PGP 1.0 en juin 1991 en tant que logiciel libre, motivé par la conviction que la cryptographie forte devrait être accessible à tous les citoyens — pas seulement aux gouvernements et aux militaires. À l'époque, le chiffrement fort était classé comme munition selon les réglementations américaines sur l'exportation, et Zimmermann a fait l'objet d'une enquête criminelle de trois ans par le Service des douanes américain pour avoir distribué PGP à l'international. L'enquête a finalement été abandonnée en 1996 sans mise en examen, et l'affaire est devenue un moment marquant dans l'histoire des libertés numériques.</p>

<p>PGP a évolué à travers plusieurs incarnations commerciales. Zimmermann a fondé PGP Inc. en 1996, qui a été acquise par Network Associates (devenu McAfee) en 1997, puis finalement par Symantec en 2010. Tout au long de ces transitions, le protocole cryptographique sous-jacent a été standardisé sous le nom d'<strong>OpenPGP</strong> par l'Internet Engineering Task Force (IETF), garantissant que le protocole reste ouvert et interopérable indépendamment de la propriété commerciale.</p>

<p>La publication du standard OpenPGP signifiait que n'importe qui pouvait créer des implémentations compatibles. Cela a conduit à la création du GNU Privacy Guard (GnuPG ou GPG), une implémentation libre et open source qui reste l'un des outils PGP les plus utilisés aujourd'hui. Pour comprendre les différences entre ces implémentations, consultez notre guide sur <a href="/fr/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Comment fonctionne le chiffrement PGP</h2>

<p>Le chiffrement PGP repose sur une combinaison sophistiquée de techniques cryptographiques. Plutôt que d'utiliser une seule méthode, PGP emploie un <strong>modèle de chiffrement hybride</strong> qui combine la rapidité du chiffrement symétrique avec les avantages de distribution de clés du chiffrement asymétrique (à clé publique).</p>

<h3 id="public-key-cryptography">Cryptographie à clé publique</h3>

<p>Au cœur de PGP se trouve la <strong>cryptographie à clé publique</strong>, également appelée cryptographie asymétrique. Chaque utilisateur PGP génère une <strong>paire de clés</strong> composée de deux clés mathématiquement liées :</p>

<ul>
<li><strong>Clé publique</strong> — partagée ouvertement avec quiconque. Les autres utilisent cette clé pour chiffrer les messages qui vous sont destinés et pour vérifier vos signatures numériques.</li>
<li><strong>Clé privée</strong> (aussi appelée clé secrète) — gardée strictement confidentielle. Vous utilisez cette clé pour déchiffrer les messages qui vous sont envoyés et pour créer des signatures numériques.</li>
</ul>

<p>La propriété fondamentale de ce système est que les données chiffrées avec une clé publique ne peuvent être déchiffrées qu'avec la clé privée correspondante, et vice versa. Cela élimine le besoin de transmettre un secret partagé entre les parties avant qu'elles puissent communiquer de manière privée.</p>

<h3 id="the-hybrid-encryption-model">Le modèle de chiffrement hybride</h3>

<p>Bien que la cryptographie à clé publique résolve le problème de distribution des clés, les algorithmes asymétriques comme RSA sont coûteux en calcul pour chiffrer de grandes quantités de données. PGP résout ce problème en utilisant une approche hybride :</p>

<ol>
<li><strong>Génération de clé de session</strong> — PGP génère une <strong>clé symétrique de session</strong> aléatoire et unique (généralement 128 ou 256 bits) pour chaque message.</li>
<li><strong>Chiffrement des données</strong> — Le contenu du message est chiffré à l'aide d'un chiffrement symétrique rapide (comme AES-256) avec la clé de session.</li>
<li><strong>Chiffrement de la clé de session</strong> — La clé de session elle-même est ensuite chiffrée à l'aide de la clé publique du destinataire (opération asymétrique).</li>
<li><strong>Empaquetage</strong> — Le message chiffré et la clé de session chiffrée sont regroupés et envoyés au destinataire.</li>
</ol>

<p>Lorsque le destinataire reçoit le message, le processus est inversé : il utilise sa <strong>clé privée</strong> pour déchiffrer la clé de session, puis la clé de session déchiffrée est utilisée pour déchiffrer le contenu du message.</p>

<h2 id="pgp-digital-signatures">Signatures numériques PGP</h2>

<p>Au-delà du chiffrement, PGP fournit des <strong>signatures numériques</strong> qui remplissent deux fonctions essentielles : l'<strong>authentification</strong> (prouver qui a envoyé un message) et l'<strong>intégrité</strong> (prouver que le message n'a pas été altéré en transit).</p>

<p>Le processus de signature fonctionne comme suit :</p>

<ol>
<li>PGP calcule un <strong>hash cryptographique</strong> (un condensé de longueur fixe) du contenu du message en utilisant un algorithme tel que SHA-256 ou SHA-512.</li>
<li>Le hash est ensuite chiffré avec la <strong>clé privée</strong> de l'expéditeur, produisant la signature numérique.</li>
<li>La signature est jointe au message.</li>
</ol>

<p>Tout destinataire peut vérifier la signature en déchiffrant la signature avec la <strong>clé publique</strong> de l'expéditeur pour retrouver le hash original, en calculant indépendamment le hash du message reçu, puis en comparant les deux hash. S'ils correspondent, le message est authentique et non modifié.</p>

<h2 id="the-openpgp-standard">Le standard OpenPGP</h2>

<p><strong>OpenPGP</strong> est le standard ouvert qui définit les formats de messages, les algorithmes et les procédures utilisés par les logiciels compatibles PGP. Ce n'est pas un produit logiciel en soi, mais plutôt une spécification que tout développeur peut implémenter.</p>

<p>Les documents de référence sont :</p>

<ul>
<li><strong>RFC 4880</strong> (novembre 2007) — La spécification principale actuelle du format de message OpenPGP.</li>
<li><strong>RFC 6637</strong> (juin 2012) — Étend OpenPGP avec le support de la cryptographie à courbe elliptique (ECC).</li>
<li><strong>RFC 9580</strong> (2024) — La dernière révision qui modernise le standard avec le support obligatoire d'Ed25519/X25519, des modes de chiffrement AEAD et des empreintes de clés améliorées.</li>
</ul>

<p>OpenPGP garantit l'interopérabilité : un message chiffré avec KeychainPGP peut être déchiffré par GnuPG, Mailvelope ou toute autre implémentation conforme.</p>

<h2 id="web-of-trust">Réseau de confiance</h2>

<p>L'une des caractéristiques distinctives de PGP est son modèle décentralisé de <strong>réseau de confiance</strong> (Web of Trust) pour établir l'authenticité des clés publiques. Contrairement au modèle centralisé d'autorité de certification (CA) utilisé par TLS/SSL, PGP permet aux utilisateurs eux-mêmes de se porter garants les uns des autres.</p>

<p>Le réseau de confiance fonctionne par la <strong>signature de clés</strong> : lorsque vous vérifiez l'identité de quelqu'un et confirmez qu'il contrôle une clé publique particulière, vous signez sa clé avec la vôtre. Cette signature est une déclaration publique que vous croyez que la clé appartient bien à la personne qu'elle prétend représenter.</p>

<p>Des outils comme <a href="/fr/pgp-online-encrypt/">KeychainPGP</a> simplifient ce processus en permettant aux utilisateurs de travailler avec les clés directement via une interface intuitive, en utilisant le <a href="/fr/docs/clipboard-encryption/">chiffrement par presse-papiers</a> pour partager facilement des messages chiffrés et des clés publiques.</p>

<h2 id="pgp-algorithms-and-key-types">Algorithmes et types de clés PGP</h2>

<p>PGP supporte une gamme d'algorithmes cryptographiques qui ont évolué au fil des avancées du domaine.</p>

<h3 id="classic-algorithms">Algorithmes classiques</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> — L'algorithme asymétrique le plus déployé dans l'histoire de PGP. Les clés RSA de 2048 bits sont considérées comme le minimum de sécurité aujourd'hui, avec des clés de 4096 bits recommandées pour une protection à long terme.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> — Utilisé pour les signatures en combinaison avec ElGamal pour le chiffrement. Moins privilégié aujourd'hui.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> — Le chiffrement symétrique dominant utilisé pour chiffrer le contenu des messages. AES-128 et AES-256 sont supportés.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> — Fonctions de hash cryptographiques utilisées pour le calcul des condensés dans les signatures numériques.</li>
</ul>

<h3 id="modern-algorithms">Algorithmes modernes</h3>

<p>La dernière génération d'implémentations OpenPGP supporte la <strong>cryptographie à courbe elliptique (ECC)</strong>, qui offre une sécurité équivalente à RSA avec des tailles de clés considérablement plus petites :</p>

<ul>
<li><strong>Ed25519</strong> — Un algorithme de signature numérique basé sur Curve25519. Produit des signatures rapides et compactes. Recommandé dans le RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> — Utilisé pour l'échange de clés (chiffrement). Offre d'excellentes performances avec de solides propriétés de sécurité.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — Courbes elliptiques standardisées par le NIST. Supportées par OpenPGP mais généralement moins privilégiées que les algorithmes basés sur Curve25519.</li>
</ul>

<p>Des outils modernes comme KeychainPGP supportent ces algorithmes contemporains, rendant la génération de clés avec Ed25519 et X25519 simple et directe.</p>

<h2 id="common-use-cases-for-pgp">Cas d'utilisation courants de PGP</h2>

<ul>
<li><strong>E-mail sécurisé</strong> — Le cas d'utilisation original et le plus connu. PGP permet de chiffrer le contenu des e-mails et de signer les messages pour prouver leur authenticité.</li>
<li><strong>Chiffrement de fichiers</strong> — PGP peut chiffrer des fichiers individuels ou des archives entières pour un stockage ou un transfert sécurisé.</li>
<li><strong>Vérification de logiciels</strong> — Les projets open source signent régulièrement leurs versions avec des clés PGP. Les utilisateurs peuvent vérifier ces signatures pour confirmer l'authenticité d'un téléchargement.</li>
<li><strong>Messagerie sécurisée</strong> — PGP peut être utilisé pour chiffrer tout message textuel, particulièrement utile sur les plateformes ne proposant pas de chiffrement de bout en bout.</li>
<li><strong>Vérification d'identité</strong> — Les empreintes de clés PGP servent d'identités numériques vérifiables. Les développeurs sur GitHub peuvent signer leurs commits avec PGP.</li>
<li><strong>Signature de documents</strong> — Les workflows juridiques utilisent parfois les signatures PGP pour établir la non-répudiation.</li>
</ul>

<h2 id="pgp-today">PGP aujourd'hui</h2>

<p>Plus de trois décennies après sa création, PGP reste l'un des outils cryptographiques les plus importants disponibles. Le standard OpenPGP continue d'évoluer, avec le RFC 9580 introduisant des modernisations significatives incluant le support obligatoire des algorithmes à courbe elliptique modernes et les modes de chiffrement AEAD.</p>

<p>L'écosystème des outils PGP s'est considérablement enrichi. GnuPG reste l'implémentation de référence pour l'utilisation en ligne de commande. Des outils modernes comme KeychainPGP offrent des applications de bureau natives (Windows, macOS, Linux), une application Android, un CLI pour le scripting et une application web dans le navigateur — le tout construit sur le même moteur Sequoia-PGP en Rust.</p>

<h2 id="getting-started-with-pgp">Commencer avec PGP</h2>

<p>Prêt à commencer avec le chiffrement PGP ? Voici les meilleures prochaines étapes :</p>

<ol>
<li><strong>Essayez dans votre navigateur</strong> — Utilisez l'<a href="/fr/pgp-online-encrypt/">outil PGP en ligne</a> KeychainPGP pour générer une paire de clés, chiffrer un message ou vérifier une signature sans rien installer.</li>
<li><strong>Lisez le guide débutant</strong> — Si vous êtes nouveau en cryptographie, notre guide <a href="/fr/docs/pgp-for-beginners/">PGP pour débutants</a> vous accompagne pas à pas.</li>
<li><strong>Apprenez le workflow pratique</strong> — Notre guide <a href="/fr/docs/how-to-use-pgp/">Comment utiliser PGP</a> couvre la génération de clés, le chiffrement et le déchiffrement, la gestion de votre trousseau et les bonnes pratiques.</li>
<li><strong>Comprenez le chiffrement par presse-papiers</strong> — Découvrez le <a href="/fr/docs/clipboard-encryption/">chiffrement PGP par presse-papiers</a> pour chiffrer et déchiffrer du texte directement depuis votre presse-papiers.</li>
<li><strong>Connaissez les outils</strong> — Comprenez les <a href="/fr/docs/pgp-vs-gpg/">différences entre PGP et GPG</a> pour choisir le bon outil pour votre workflow.</li>
</ol>

<p>Le chiffrement PGP protège les communications sensibles depuis plus de trente ans. Avec les outils et standards modernes, il est plus accessible que jamais.</p>
`
};

export default doc;
