import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Chiffrement par presse-papiers avec PGP : l\'approche clipboard-first pour la messagerie sécurisée',
	description: 'Découvrez comment le chiffrement PGP par presse-papiers fonctionne, pourquoi il surpasse le chiffrement par fichiers pour l\'OPSEC quotidien, et comment KeychainPGP utilise le presse-papiers pour chiffrer des messages dans n\'importe quelle application.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'Qu\'est-ce que le chiffrement par presse-papiers ?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Pourquoi le presse-papiers d\'abord ?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Comment KeychainPGP utilise le presse-papiers', level: 2 },
		{ id: 'the-encryption-workflow', text: 'Le workflow de chiffrement', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Déchiffrement en sens inverse', level: 3 },
		{ id: 'security-considerations', text: 'Considérations de sécurité', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Historique et gestionnaires de presse-papiers', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Effacement automatique après 30 secondes', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Gestion de la mémoire et mise à zéro', level: 3 },
		{ id: 'opsec-mode', text: 'Mode OPSEC', level: 2 },
		{ id: 'window-title-disguise', text: 'Déguisement du titre de fenêtre', level: 3 },
		{ id: 'ram-only-keys', text: 'Clés uniquement en RAM', level: 3 },
		{ id: 'panic-wipe', text: 'Effacement d\'urgence', level: 3 },
		{ id: 'tor-proxy-support', text: 'Support du proxy Tor', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Chiffrement presse-papiers vs fichiers', level: 2 },
		{ id: 'threat-model', text: 'Modèle de menace', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Ce que le chiffrement par presse-papiers protège', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Ce que le chiffrement par presse-papiers ne protège pas', level: 3 },
		{ id: 'best-practices', text: 'Bonnes pratiques pour le PGP par presse-papiers', level: 2 }
	],
	html: `
<h1>Chiffrement par presse-papiers avec PGP</h1>

<h2 id="what-is-clipboard-encryption">Qu'est-ce que le chiffrement par presse-papiers ?</h2>

<p>Le chiffrement PGP par presse-papiers est une méthode de chiffrement et déchiffrement de texte en lisant et écrivant directement depuis et vers le presse-papiers du système d'exploitation, plutôt que d'opérer sur des fichiers stockés sur disque. Au lieu de sauvegarder un message en clair dans un fichier <code>.txt</code>, de le passer à un outil en ligne de commande, puis de récupérer un fichier <code>.asc</code> chiffré, vous copiez simplement votre texte, déclenchez le chiffrement avec un raccourci clavier, et collez le message PGP chiffré où vous le souhaitez. Le presse-papiers sert à la fois de tampon d'entrée et de sortie, faisant du chiffrement une partie intégrante de tout workflow basé sur du texte. Cette approche est le fondement du fonctionnement de <a href="/fr/pgp-online-encrypt/">KeychainPGP</a> sur bureau et c'est ce qui lui permet de s'intégrer avec toute application supportant le copier-coller — clients e-mail, applications de chat, outils de prise de notes, formulaires web, et bien plus.</p>

<p>Si vous êtes nouveau dans le monde de PGP, commencez par <a href="/fr/docs/what-is-pgp/">Qu'est-ce que PGP ?</a> pour une introduction aux concepts cryptographiques sous-jacents avant de plonger dans les workflows spécifiques au presse-papiers.</p>

<h2 id="why-clipboard-first">Pourquoi le presse-papiers d'abord ?</h2>

<p>Les outils PGP traditionnels comme GnuPG ont été conçus autour des fichiers. Vous passez un fichier dans <code>gpg --encrypt</code>, recevez un fichier chiffré, et le transférez manuellement. Ce modèle avait du sens dans les années 1990 quand PGP était principalement utilisé pour les pièces jointes d'e-mails et les archives de fichiers. Il en a beaucoup moins aujourd'hui, quand la plupart des communications sensibles se font dans des plateformes web, des applications de messagerie éphémère et des services qui n'exposent pas d'interface de système de fichiers.</p>

<p>L'approche presse-papiers d'abord résout plusieurs problèmes à la fois :</p>

<ul>
<li><strong>Indépendance des applications.</strong> Comme le presse-papiers est une abstraction au niveau du système d'exploitation, le chiffrement par presse-papiers fonctionne avec n'importe quelle application. Vous n'êtes pas enfermé dans un client e-mail spécifique, une extension de navigateur ou un écosystème de plugins. Si vous pouvez copier-coller, vous pouvez chiffrer.</li>
<li><strong>Pas de fichiers en clair sur le disque.</strong> Le chiffrement par fichiers crée nécessairement des artefacts en clair sur votre système de fichiers — le fichier original non chiffré, des fichiers temporaires, des fichiers de swap de l'éditeur, et potentiellement la sortie déchiffrée. Chacun de ces éléments est une responsabilité forensique. Le chiffrement par presse-papiers garde le texte en clair uniquement en mémoire volatile.</li>
<li><strong>Moins de friction.</strong> Moins il y a d'étapes entre « je veux chiffrer ceci » et « c'est chiffré », plus un utilisateur est susceptible de réellement chiffrer ses messages. Un workflow en trois étapes (copier, raccourci, coller) a considérablement moins de friction qu'un pipeline basé sur les fichiers.</li>
<li><strong>Compatibilité avec les communications modernes.</strong> Webmail, Signal desktop, Slack, Discord, clients Matrix — aucun de ces outils ne supporte nativement PGP, mais tous supportent le collage de texte. Le PGP par presse-papiers comble ce fossé sans nécessiter d'intégration au niveau du protocole.</li>
</ul>

<p>Pour un guide pas à pas sur l'utilisation de ce workflow, consultez <a href="/fr/docs/how-to-use-pgp/">Comment utiliser PGP</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Comment KeychainPGP utilise le presse-papiers</h2>

<p>KeychainPGP est construit de A à Z autour de la philosophie presse-papiers d'abord. Plutôt que de traiter l'accès au presse-papiers comme une fonctionnalité pratique greffée sur un outil de chiffrement de fichiers, toute l'architecture — du pipeline cryptographique à l'interface utilisateur — suppose que le presse-papiers est le canal de données principal.</p>

<h3 id="the-encryption-workflow">Le workflow de chiffrement</h3>

<p>Le processus de chiffrement d'un message avec KeychainPGP se fait en trois étapes :</p>

<ol>
<li><strong>Copiez</strong> votre message en clair depuis n'importe quelle application (brouillon d'e-mail, fenêtre de chat, éditeur de texte, formulaire web).</li>
<li><strong>Appuyez sur <code>Ctrl+Shift+E</code></strong> (le raccourci global par défaut). KeychainPGP lit le contenu de votre presse-papiers, chiffre le texte avec la clé publique du destinataire sélectionné, et écrit le texte chiffré PGP au format ASCII-armored dans le presse-papiers.</li>
<li><strong>Collez</strong> le message chiffré dans la destination. Ce qui arrive est un bloc OpenPGP ASCII-armored standard commençant par <code>-----BEGIN PGP MESSAGE-----</code> et pouvant être déchiffré par tout outil compatible OpenPGP.</li>
</ol>

<p>En coulisses, KeychainPGP utilise la bibliothèque <a href="https://sequoia-pgp.org/">Sequoia-PGP</a>, une implémentation moderne en Rust du standard OpenPGP. Les clés utilisent par défaut Ed25519 pour la signature et X25519 pour le chiffrement — des algorithmes à courbes elliptiques offrant une sécurité forte avec des tailles de clés compactes et des opérations rapides. Il n'y a pas de dialogues de sélection d'algorithmes ni de décisions sur la taille des clés. La cryptographie est sécurisée dès l'installation.</p>

<h3 id="decryption-in-reverse">Déchiffrement en sens inverse</h3>

<p>Le déchiffrement reprend le flux de chiffrement en sens inverse. Quand vous recevez un message chiffré PGP, vous copiez le bloc armored entier, appuyez sur <code>Ctrl+Shift+D</code> (le raccourci de déchiffrement par défaut), et KeychainPGP remplace le contenu du presse-papiers par le texte en clair déchiffré. Vous pouvez ensuite le coller dans n'importe quelle application pour le lire. Le texte déchiffré n'existe qu'en mémoire et dans le tampon du presse-papiers, qui est automatiquement effacé après un délai configurable.</p>

<h2 id="security-considerations">Considérations de sécurité</h2>

<p>L'utilisation du presse-papiers comme canal de données introduit des considérations de sécurité spécifiques que KeychainPGP traite avec plusieurs mécanismes défensifs.</p>

<h3 id="clipboard-history-and-managers">Historique et gestionnaires de presse-papiers</h3>

<p>Les systèmes d'exploitation modernes et les outils tiers maintiennent souvent un historique du presse-papiers. Windows 10 et versions ultérieures incluent une fonctionnalité d'historique du presse-papiers intégrée (<code>Win+V</code>). macOS ne maintient pas nativement d'historique, mais des outils populaires comme Alfred, Raycast et Paste le font. Sur Linux, des gestionnaires de presse-papiers comme CopyQ, Clipman et GPaste sont courants.</p>

<p>Ces gestionnaires de presse-papiers peuvent capturer à la fois le texte en clair avant le chiffrement et la sortie déchiffrée après le déchiffrement, annulant complètement l'utilité du chiffrement. Lors de l'utilisation du chiffrement PGP par presse-papiers, vous devriez :</p>

<ul>
<li>Désactiver l'historique du presse-papiers sur votre système d'exploitation (sur Windows, allez dans Paramètres > Système > Presse-papiers et désactivez l'Historique du presse-papiers).</li>
<li>Éviter les gestionnaires de presse-papiers tiers sur les machines où vous manipulez du contenu sensible, ou configurer des règles d'exclusion si le gestionnaire le permet.</li>
<li>S'appuyer sur la fonctionnalité d'effacement automatique intégrée de KeychainPGP pour minimiser la fenêtre d'exposition.</li>
</ul>

<h3 id="auto-clear-after-30-seconds">Effacement automatique après 30 secondes</h3>

<p>KeychainPGP efface automatiquement le presse-papiers 30 secondes après y avoir écrit du texte en clair déchiffré. Ce délai est configurable dans les paramètres de l'application. L'effacement automatique garantit que le contenu déchiffré ne persiste pas indéfiniment dans le presse-papiers, réduisant le risque qu'une opération de collage ultérieure ou qu'un gestionnaire de presse-papiers capture du texte sensible longtemps après que vous ayez fini de le lire.</p>

<p>Le délai par défaut de 30 secondes est un compromis entre utilisabilité et sécurité. Il vous laisse suffisamment de temps pour coller le texte déchiffré où vous en avez besoin, tout en limitant la fenêtre pendant laquelle le texte en clair est accessible. Pour les environnements à haute sécurité, vous pouvez réduire ce délai jusqu'à 5 secondes.</p>

<h3 id="memory-handling-and-zeroization">Gestion de la mémoire et mise à zéro</h3>

<p>Le chiffrement par presse-papiers implique que des données sensibles — clés privées, phrases de passe, texte en clair déchiffré — résident dans la mémoire du processus. KeychainPGP est écrit en Rust et exploite les garanties de mise à zéro à la destruction de Sequoia-PGP. Quand une valeur secrète sort de sa portée, sa mémoire est écrasée avec des zéros avant d'être libérée. Ce n'est pas un effacement au mieux ; le modèle de propriété de Rust garantit que le destructeur de mise à zéro s'exécute de manière déterministe. Combiné avec les barrières du compilateur du crate <code>zeroize</code> qui empêchent l'optimiseur d'éliminer l'écrasement, cela fournit une forte assurance que les secrets ne persistent pas en mémoire après utilisation.</p>

<p>Cela contraste avec les outils écrits dans des langages à ramasse-miettes (Java, Python, JavaScript), où les données secrètes peuvent persister en mémoire indéfiniment jusqu'à ce que le ramasse-miettes les récupère et (peut-être) les écrase.</p>

<h2 id="opsec-mode">Mode OPSEC</h2>

<p>Pour les utilisateurs opérant dans des environnements hostiles — journalistes communiquant avec des sources, activistes sous surveillance, chercheurs en sécurité traitant des divulgations sensibles — KeychainPGP inclut un mode OPSEC qui renforce l'application au-delà de sa posture de sécurité par défaut.</p>

<h3 id="window-title-disguise">Déguisement du titre de fenêtre</h3>

<p>Lorsque le mode OPSEC est activé, KeychainPGP change son titre de fenêtre pour quelque chose d'anodin, comme « Calculatrice » ou « Notes ». Cela empêche le shoulder-surfing occasionnel et trompe les outils automatisés de capture d'écran qui enregistrent les titres de fenêtres. Un adversaire examinant des captures d'écran ou des enregistrements vidéo ne verra pas « KeychainPGP » ou « PGP » dans aucune barre de titre de fenêtre.</p>

<h3 id="ram-only-keys">Clés uniquement en RAM</h3>

<p>En mode OPSEC, les clés privées sont conservées exclusivement en RAM et ne sont jamais écrites sur le système de fichiers. Cela signifie que si l'appareil est saisi ou si le disque est imagé, il n'y a pas de fichiers de clés à récupérer. Le compromis est que les clés doivent être réimportées à chaque démarrage de l'application, généralement depuis un jeton matériel, un QR code, ou un transfert sécurisé depuis un autre appareil.</p>

<h3 id="panic-wipe">Effacement d'urgence</h3>

<p>Le bouton d'effacement d'urgence (ou son raccourci clavier associé) met immédiatement à zéro tout le matériel cryptographique en mémoire, efface le presse-papiers, et ferme optionnellement l'application. C'est conçu pour les situations où vous devez détruire tout état sensible instantanément — par exemple, si vous anticipez une saisie imminente de votre appareil. L'effacement est immédiat et irréversible ; toute clé uniquement en RAM qui n'a pas été sauvegardée ailleurs est définitivement perdue.</p>

<h3 id="tor-proxy-support">Support du proxy Tor</h3>

<p>Le mode OPSEC inclut la possibilité de router les recherches sur les serveurs de clés et tout autre trafic réseau via un proxy SOCKS Tor. Cela empêche votre FAI ou un adversaire au niveau réseau d'observer que vous récupérez des clés publiques PGP, ce qui pourrait servir de métadonnée pour identifier vos partenaires de communication. Lorsque le support du proxy Tor est activé, toutes les connexions sortantes de KeychainPGP sont routées via le proxy SOCKS5 configuré (typiquement <code>127.0.0.1:9050</code> si Tor est exécuté localement).</p>

<h2 id="clipboard-encryption-vs-file-encryption">Chiffrement presse-papiers vs chiffrement de fichiers</h2>

<p>Le chiffrement PGP par presse-papiers et par fichiers utilisent le même standard OpenPGP sous-jacent et produisent du texte chiffré interopérable. La différence réside dans le workflow et les propriétés de sécurité qui en découlent.</p>

<table>
<tr><th>Aspect</th><th>Chiffrement par presse-papiers</th><th>Chiffrement de fichiers</th></tr>
<tr><td><strong>Entrée/sortie</strong></td><td>Presse-papiers du système (mémoire volatile)</td><td>Fichiers sur disque (stockage persistant)</td></tr>
<tr><td><strong>Artefacts en clair</strong></td><td>Aucun sur le disque ; effacé du presse-papiers après délai</td><td>Fichier original, fichiers temp, sauvegardes de l'éditeur peuvent persister</td></tr>
<tr><td><strong>Support d'applications</strong></td><td>Toute app supportant le copier/coller</td><td>Nécessite un accès au système de fichiers ou une intégration CLI</td></tr>
<tr><td><strong>Étapes du workflow</strong></td><td>3 (copier, raccourci, coller)</td><td>5+ (sauvegarder fichier, lancer CLI, spécifier sortie, ouvrir sortie, transférer)</td></tr>
<tr><td><strong>Traitement par lots</strong></td><td>Pas pratique pour de gros volumes</td><td>Bien adapté au chiffrement en masse de fichiers et archives</td></tr>
<tr><td><strong>Gros volumes de données</strong></td><td>Limité au texte qui tient dans le presse-papiers</td><td>Gère des fichiers de taille arbitraire</td></tr>
<tr><td><strong>Empreinte forensique</strong></td><td>Minimale (RAM uniquement)</td><td>Significative (artefacts disque, métadonnées du système de fichiers)</td></tr>
</table>

<p>Le chiffrement par presse-papiers est le meilleur choix pour le chiffrement au niveau des messages dans la communication quotidienne. Le chiffrement de fichiers reste nécessaire quand vous devez chiffrer des données binaires, de grandes archives, ou quand le destinataire attend une pièce jointe <code>.pgp</code>. KeychainPGP supporte les deux modes, mais c'est dans le workflow par presse-papiers qu'il excelle.</p>

<h2 id="threat-model">Modèle de menace</h2>

<p>Comprendre ce que le chiffrement PGP par presse-papiers protège et ne protège pas est essentiel pour prendre des décisions de sécurité éclairées. Aucun outil unique ne couvre toutes les menaces.</p>

<h3 id="what-clipboard-encryption-protects-against">Ce que le chiffrement par presse-papiers protège</h3>

<ul>
<li><strong>Surveillance réseau.</strong> Les messages chiffrés avant de quitter votre appareil sont opaques pour quiconque surveille le réseau — votre FAI, un espion sur un Wi-Fi, ou un acteur étatique effectuant une inspection approfondie des paquets. Le texte chiffré PGP peut traverser n'importe quel nombre de réseaux non fiables sans compromettre le texte en clair.</li>
<li><strong>Interception d'e-mails et de messages.</strong> Si un adversaire accède à votre serveur e-mail, à la base de données de votre fournisseur de chat, ou à un message en transit, il n'obtient que du texte chiffré. Sans la clé privée du destinataire, le contenu est computationnellement impossible à récupérer.</li>
<li><strong>Compromission du stockage.</strong> Si un adversaire obtient une copie de vos archives e-mail, journaux de chat ou sauvegardes cloud, les messages chiffrés avec PGP restent protégés. C'est particulièrement pertinent pour le chiffrement par presse-papiers, où le texte en clair ne touche jamais le disque.</li>
<li><strong>Réduction des métadonnées (avec le mode OPSEC).</strong> Bien que PGP ne chiffre pas les en-têtes d'e-mails ou les métadonnées des messages, les fonctionnalités du mode OPSEC comme le support du proxy Tor et le déguisement du titre de fenêtre réduisent les métadonnées observables autour de votre utilisation du chiffrement.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Ce que le chiffrement par presse-papiers ne protège pas</h3>

<ul>
<li><strong>Compromission du terminal avec un keylogger.</strong> Si un adversaire a installé un keylogger ou un malware de capture d'écran sur votre appareil, il peut capturer le texte en clair avant le chiffrement ou après le déchiffrement. Le chiffrement par presse-papiers suppose un terminal de confiance. Si votre appareil est compromis au niveau du système d'exploitation, aucun chiffrement au niveau applicatif ne peut aider.</li>
<li><strong>Accès physique à un appareil déverrouillé.</strong> Si un adversaire a un accès physique à votre appareil alors qu'il est déverrouillé et que KeychainPGP est en cours d'exécution avec les clés chargées, il peut déchiffrer les messages. Les clés uniquement en RAM et le bouton d'effacement d'urgence atténuent cela dans une certaine mesure, mais ils nécessitent que vous agissiez avant que l'adversaire n'obtienne l'accès.</li>
<li><strong>Clés privées compromises.</strong> Si votre clé privée est exfiltrée (depuis une sauvegarde, un appareil compromis, ou une phrase de passe faible), tous les messages chiffrés vers cette clé — passés et futurs — sont compromis. Utilisez une phrase de passe forte et gardez votre clé privée sur le moins d'appareils possible.</li>
<li><strong>Analyse de trafic.</strong> PGP chiffre le contenu des messages, pas les schémas de communication. Un adversaire qui peut observer votre trafic réseau peut déterminer que vous communiquez, à quelle fréquence, et potentiellement avec qui (basé sur les requêtes aux serveurs de clés), même sans lire le contenu. Le support du proxy Tor en mode OPSEC traite partiellement ce problème.</li>
</ul>

<p>Pour une introduction plus large à ces concepts, <a href="/fr/docs/pgp-for-beginners/">PGP pour débutants</a> couvre les fondamentaux de la cryptographie à clé publique et de la gestion des clés.</p>

<h2 id="best-practices">Bonnes pratiques pour le PGP par presse-papiers</h2>

<p>Suivre ces pratiques maximisera les bénéfices de sécurité du chiffrement PGP par presse-papiers :</p>

<ol>
<li><strong>Désactivez l'historique du presse-papiers.</strong> Désactivez l'historique du presse-papiers au niveau du système d'exploitation et supprimez les gestionnaires de presse-papiers tiers des machines où vous gérez des communications chiffrées.</li>
<li><strong>Gardez l'effacement automatique activé.</strong> Ne désactivez pas le minuteur d'effacement automatique du presse-papiers. Réduisez-le à l'intervalle le plus court que vous trouvez utilisable. Cinq à quinze secondes suffisent pour la plupart des workflows.</li>
<li><strong>Utilisez le mode OPSEC quand c'est justifié.</strong> Si vous opérez dans un environnement où l'utilisation même du chiffrement est un risque, activez le mode OPSEC pour le déguisement du titre de fenêtre, les clés uniquement en RAM et le routage Tor.</li>
<li><strong>Vérifiez les clés des destinataires hors bande.</strong> Avant de chiffrer un message vers la clé publique de quelqu'un, vérifiez l'empreinte de la clé par un canal séparé (en personne, par appel vocal, via un message signé d'une clé connue). Cela prévient les attaques de l'homme du milieu sur la distribution des clés.</li>
<li><strong>Utilisez des phrases de passe fortes.</strong> Protégez votre clé privée avec une phrase de passe à la fois longue et difficile à deviner. Une phrase de passe de quatre à six mots générés aléatoirement est plus sûre et plus facile à taper qu'une courte chaîne de caractères mixtes.</li>
<li><strong>Gardez votre terminal propre.</strong> Le chiffrement par presse-papiers suppose un appareil de confiance. Utilisez un système d'exploitation à jour, évitez d'installer des logiciels non fiables, et utilisez le chiffrement intégral du disque pour protéger les données au repos.</li>
<li><strong>Préférez les clés Ed25519/X25519.</strong> KeychainPGP utilise ces algorithmes modernes à courbes elliptiques par défaut pour de bonnes raisons. Ils sont rapides, compacts et résistants à une gamme d'attaques au niveau de l'implémentation qui affectent les anciennes clés RSA et DSA. Si vous migrez depuis une ancienne clé, générez une nouvelle paire de clés Ed25519/X25519 et faites la transition avec vos contacts.</li>
<li><strong>Testez votre workflow.</strong> Avant de compter sur le chiffrement par presse-papiers pour des communications critiques, pratiquez le cycle complet : générez des clés, échangez les clés publiques, chiffrez un message test, déchiffrez-le de l'autre côté. La familiarité avec le processus réduit les risques d'erreur sous pression.</li>
</ol>

<p>Le chiffrement PGP par presse-papiers n'est pas une solution miracle, mais combiné avec de bonnes pratiques de sécurité opérationnelle, il offre un chemin pratique et à faible friction vers la communication chiffrée qui s'intègre avec les outils que vous utilisez déjà. <a href="/fr/pgp-online-encrypt/">Essayez KeychainPGP dans votre navigateur</a> pour voir le workflow presse-papiers d'abord en action.</p>
`
};

export default doc;
