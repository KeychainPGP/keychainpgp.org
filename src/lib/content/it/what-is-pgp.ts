import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Cos\'è PGP? Guida completa sulla crittografia Pretty Good Privacy',
	description: 'Scopri cos\'è PGP (Pretty Good Privacy), come funziona la crittografia PGP con la crittografia a chiave pubblica, lo standard OpenPGP, le firme digitali e gli utilizzi moderni.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'Cos\'è la crittografia PGP?', level: 2 },
		{ id: 'history-of-pgp', text: 'Storia di PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Come funziona la crittografia PGP', level: 2 },
		{ id: 'public-key-cryptography', text: 'Crittografia a chiave pubblica', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'Il modello di crittografia ibrido', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Firme digitali PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'Lo standard OpenPGP', level: 2 },
		{ id: 'web-of-trust', text: 'Rete di fiducia', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'Algoritmi e tipi di chiavi PGP', level: 2 },
		{ id: 'classic-algorithms', text: 'Algoritmi classici', level: 3 },
		{ id: 'modern-algorithms', text: 'Algoritmi moderni', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Casi d\'uso comuni di PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP oggi', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Iniziare con PGP', level: 2 }
	],
	html: `
<h1>Cos'è PGP? Guida completa sulla crittografia Pretty Good Privacy</h1>

<h2 id="what-is-pgp-encryption">Cos'è la crittografia PGP?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> è un programma di crittografia che garantisce la riservatezza e l'autenticazione crittografica per le comunicazioni di dati. La crittografia PGP utilizza una combinazione di crittografia a chiave simmetrica e crittografia a chiave pubblica per consentire agli utenti di crittografare messaggi, file e altri dati affinché solo il destinatario previsto possa leggerli. Creato originariamente da Phil Zimmermann nel 1991, PGP è diventato lo standard di crittografia per le e-mail più utilizzato al mondo e costituisce la base della specifica <strong>OpenPGP</strong> definita nell'RFC 4880. Che tu abbia bisogno di inviare un'e-mail riservata, verificare l'identità di un distributore di software o proteggere file sensibili, PGP fornisce un framework crittografico collaudato, cui si affidano giornalisti, ricercatori di sicurezza, governi e utenti di tutti i giorni.</p>

<p>Se vuoi provare la crittografia PGP immediatamente senza installare software, KeychainPGP offre uno <a href="/it/pgp-online-encrypt/">strumento PGP online</a> che funziona interamente nel tuo browser.</p>

<h2 id="history-of-pgp">Storia di PGP</h2>

<p>Phil Zimmermann ha pubblicato PGP 1.0 nel giugno 1991 come software libero, motivato dalla convinzione che la crittografia forte dovesse essere accessibile a tutti i cittadini — non solo ai governi e ai militari. All'epoca, la crittografia forte era classificata come munizione secondo le normative statunitensi sull'esportazione, e Zimmermann fu sottoposto a un'indagine penale di tre anni da parte del Servizio doganale degli Stati Uniti per aver distribuito PGP a livello internazionale. L'indagine fu infine archiviata nel 1996 senza incriminazione, e il caso divenne un momento cruciale nella storia delle libertà digitali.</p>

<p>PGP si è evoluto attraverso diverse incarnazioni commerciali. Zimmermann ha fondato PGP Inc. nel 1996, che è stata acquisita da Network Associates (poi diventata McAfee) nel 1997, e infine da Symantec nel 2010. Attraverso tutte queste transizioni, il protocollo crittografico sottostante è stato standardizzato con il nome di <strong>OpenPGP</strong> dall'Internet Engineering Task Force (IETF), garantendo che il protocollo rimanga aperto e interoperabile indipendentemente dalla proprietà commerciale.</p>

<p>La pubblicazione dello standard OpenPGP significava che chiunque poteva creare implementazioni compatibili. Ciò ha portato alla creazione di GNU Privacy Guard (GnuPG o GPG), un'implementazione libera e open source che resta uno degli strumenti PGP più utilizzati oggi. Per comprendere le differenze tra queste implementazioni, consulta la nostra guida su <a href="/it/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Come funziona la crittografia PGP</h2>

<p>La crittografia PGP si basa su una combinazione sofisticata di tecniche crittografiche. Piuttosto che utilizzare un solo metodo, PGP impiega un <strong>modello di crittografia ibrido</strong> che combina la velocità della crittografia simmetrica con i vantaggi della distribuzione di chiavi della crittografia asimmetrica (a chiave pubblica).</p>

<h3 id="public-key-cryptography">Crittografia a chiave pubblica</h3>

<p>Al centro di PGP c'è la <strong>crittografia a chiave pubblica</strong>, detta anche crittografia asimmetrica. Ogni utente PGP genera una <strong>coppia di chiavi</strong> composta da due chiavi matematicamente correlate:</p>

<ul>
<li><strong>Chiave pubblica</strong> — condivisa apertamente con chiunque. Gli altri usano questa chiave per crittografare i messaggi a te destinati e per verificare le tue firme digitali.</li>
<li><strong>Chiave privata</strong> (detta anche chiave segreta) — mantenuta strettamente riservata. Usi questa chiave per decrittografare i messaggi che ti vengono inviati e per creare firme digitali.</li>
</ul>

<p>La proprietà fondamentale di questo sistema è che i dati crittografati con una chiave pubblica possono essere decrittografati solo con la chiave privata corrispondente, e viceversa. Questo elimina la necessità di trasmettere un segreto condiviso tra le parti prima che possano comunicare in modo privato.</p>

<h3 id="the-hybrid-encryption-model">Il modello di crittografia ibrido</h3>

<p>Sebbene la crittografia a chiave pubblica risolva il problema della distribuzione delle chiavi, gli algoritmi asimmetrici come RSA sono computazionalmente costosi per crittografare grandi quantità di dati. PGP risolve questo problema utilizzando un approccio ibrido:</p>

<ol>
<li><strong>Generazione della chiave di sessione</strong> — PGP genera una <strong>chiave simmetrica di sessione</strong> casuale e unica (generalmente 128 o 256 bit) per ogni messaggio.</li>
<li><strong>Crittografia dei dati</strong> — Il contenuto del messaggio viene crittografato con un cifrario simmetrico veloce (come AES-256) usando la chiave di sessione.</li>
<li><strong>Crittografia della chiave di sessione</strong> — La chiave di sessione stessa viene poi crittografata con la chiave pubblica del destinatario (operazione asimmetrica).</li>
<li><strong>Impacchettamento</strong> — Il messaggio crittografato e la chiave di sessione crittografata vengono raggruppati e inviati al destinatario.</li>
</ol>

<p>Quando il destinatario riceve il messaggio, il processo viene invertito: usa la propria <strong>chiave privata</strong> per decrittografare la chiave di sessione, poi la chiave di sessione decrittografata viene usata per decrittografare il contenuto del messaggio.</p>

<h2 id="pgp-digital-signatures">Firme digitali PGP</h2>

<p>Oltre alla crittografia, PGP fornisce <strong>firme digitali</strong> che svolgono due funzioni essenziali: l'<strong>autenticazione</strong> (dimostrare chi ha inviato un messaggio) e l'<strong>integrità</strong> (dimostrare che il messaggio non è stato alterato durante il transito).</p>

<p>Il processo di firma funziona come segue:</p>

<ol>
<li>PGP calcola un <strong>hash crittografico</strong> (un riassunto di lunghezza fissa) del contenuto del messaggio utilizzando un algoritmo come SHA-256 o SHA-512.</li>
<li>L'hash viene poi crittografato con la <strong>chiave privata</strong> del mittente, producendo la firma digitale.</li>
<li>La firma viene allegata al messaggio.</li>
</ol>

<p>Qualsiasi destinatario può verificare la firma decrittografandola con la <strong>chiave pubblica</strong> del mittente per recuperare l'hash originale, calcolando indipendentemente l'hash del messaggio ricevuto, e poi confrontando i due hash. Se corrispondono, il messaggio è autentico e non modificato.</p>

<h2 id="the-openpgp-standard">Lo standard OpenPGP</h2>

<p><strong>OpenPGP</strong> è lo standard aperto che definisce i formati dei messaggi, gli algoritmi e le procedure utilizzate dai software compatibili con PGP. Non è un prodotto software in sé, ma piuttosto una specifica che qualsiasi sviluppatore può implementare.</p>

<p>I documenti di riferimento sono:</p>

<ul>
<li><strong>RFC 4880</strong> (novembre 2007) — La specifica principale attuale del formato di messaggio OpenPGP.</li>
<li><strong>RFC 6637</strong> (giugno 2012) — Estende OpenPGP con il supporto della crittografia a curva ellittica (ECC).</li>
<li><strong>RFC 9580</strong> (2024) — L'ultima revisione che modernizza lo standard con il supporto obbligatorio di Ed25519/X25519, le modalità di crittografia AEAD e le impronte delle chiavi migliorate.</li>
</ul>

<p>OpenPGP garantisce l'interoperabilità: un messaggio crittografato con KeychainPGP può essere decrittografato da GnuPG, Mailvelope o qualsiasi altra implementazione conforme.</p>

<h2 id="web-of-trust">Rete di fiducia</h2>

<p>Una delle caratteristiche distintive di PGP è il suo modello decentralizzato di <strong>rete di fiducia</strong> (Web of Trust) per stabilire l'autenticità delle chiavi pubbliche. A differenza del modello centralizzato di autorità di certificazione (CA) utilizzato da TLS/SSL, PGP consente agli utenti stessi di garantire gli uni per gli altri.</p>

<p>La rete di fiducia funziona attraverso la <strong>firma delle chiavi</strong>: quando verifichi l'identità di qualcuno e confermi che controlla una particolare chiave pubblica, firmi la sua chiave con la tua. Questa firma è una dichiarazione pubblica che credi che la chiave appartenga alla persona che afferma di rappresentare.</p>

<p>Strumenti come <a href="/it/pgp-online-encrypt/">KeychainPGP</a> semplificano questo processo consentendo agli utenti di lavorare con le chiavi direttamente tramite un'interfaccia intuitiva, utilizzando la <a href="/it/docs/clipboard-encryption/">crittografia tramite appunti</a> per condividere facilmente messaggi crittografati e chiavi pubbliche.</p>

<h2 id="pgp-algorithms-and-key-types">Algoritmi e tipi di chiavi PGP</h2>

<p>PGP supporta una gamma di algoritmi crittografici che si sono evoluti con i progressi del settore.</p>

<h3 id="classic-algorithms">Algoritmi classici</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> — L'algoritmo asimmetrico più diffuso nella storia di PGP. Le chiavi RSA a 2048 bit sono considerate il minimo di sicurezza oggi, con chiavi a 4096 bit raccomandate per una protezione a lungo termine.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> — Utilizzato per le firme in combinazione con ElGamal per la crittografia. Meno privilegiato oggi.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> — Il cifrario simmetrico dominante utilizzato per crittografare il contenuto dei messaggi. Sono supportati AES-128 e AES-256.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> — Funzioni hash crittografiche utilizzate per il calcolo dei digest nelle firme digitali.</li>
</ul>

<h3 id="modern-algorithms">Algoritmi moderni</h3>

<p>L'ultima generazione di implementazioni OpenPGP supporta la <strong>crittografia a curva ellittica (ECC)</strong>, che offre una sicurezza equivalente a RSA con dimensioni di chiavi notevolmente più piccole:</p>

<ul>
<li><strong>Ed25519</strong> — Un algoritmo di firma digitale basato su Curve25519. Produce firme rapide e compatte. Raccomandato nell'RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> — Utilizzato per lo scambio di chiavi (crittografia). Offre eccellenti prestazioni con solide proprietà di sicurezza.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — Curve ellittiche standardizzate dal NIST. Supportate da OpenPGP ma generalmente meno privilegiate rispetto agli algoritmi basati su Curve25519.</li>
</ul>

<p>Strumenti moderni come KeychainPGP supportano questi algoritmi contemporanei, rendendo la generazione di chiavi con Ed25519 e X25519 semplice e diretta.</p>

<h2 id="common-use-cases-for-pgp">Casi d'uso comuni di PGP</h2>

<ul>
<li><strong>E-mail sicure</strong> — Il caso d'uso originale e più conosciuto. PGP consente di crittografare il contenuto delle e-mail e di firmare i messaggi per dimostrarne l'autenticità.</li>
<li><strong>Crittografia dei file</strong> — PGP può crittografare singoli file o interi archivi per un archiviazione o un trasferimento sicuro.</li>
<li><strong>Verifica del software</strong> — I progetti open source firmano regolarmente le proprie release con chiavi PGP. Gli utenti possono verificare queste firme per confermare l'autenticità di un download.</li>
<li><strong>Messaggistica sicura</strong> — PGP può essere utilizzato per crittografare qualsiasi messaggio di testo, particolarmente utile sulle piattaforme che non offrono crittografia end-to-end.</li>
<li><strong>Verifica dell'identità</strong> — Le impronte delle chiavi PGP fungono da identità digitali verificabili. Gli sviluppatori su GitHub possono firmare i propri commit con PGP.</li>
<li><strong>Firma dei documenti</strong> — I workflow legali utilizzano talvolta le firme PGP per stabilire la non ripudiabilità.</li>
</ul>

<h2 id="pgp-today">PGP oggi</h2>

<p>A oltre tre decenni dalla sua creazione, PGP resta uno degli strumenti crittografici più importanti disponibili. Lo standard OpenPGP continua a evolversi, con l'RFC 9580 che introduce modernizzazioni significative includendo il supporto obbligatorio degli algoritmi a curva ellittica moderni e le modalità di crittografia AEAD.</p>

<p>L'ecosistema degli strumenti PGP si è notevolmente arricchito. GnuPG resta l'implementazione di riferimento per l'uso da riga di comando. Strumenti moderni come KeychainPGP offrono applicazioni desktop native (Windows, macOS, Linux), un'applicazione Android, un CLI per lo scripting e un'applicazione web nel browser — il tutto costruito sullo stesso motore Sequoia-PGP in Rust.</p>

<h2 id="getting-started-with-pgp">Iniziare con PGP</h2>

<p>Pronto a iniziare con la crittografia PGP? Ecco i migliori passi successivi:</p>

<ol>
<li><strong>Prova nel tuo browser</strong> — Usa lo <a href="/it/pgp-online-encrypt/">strumento PGP online</a> di KeychainPGP per generare una coppia di chiavi, crittografare un messaggio o verificare una firma senza installare nulla.</li>
<li><strong>Leggi la guida per principianti</strong> — Se sei nuovo nella crittografia, la nostra guida <a href="/it/docs/pgp-for-beginners/">PGP per principianti</a> ti accompagna passo dopo passo.</li>
<li><strong>Impara il workflow pratico</strong> — La nostra guida <a href="/it/docs/how-to-use-pgp/">Come usare PGP</a> copre la generazione delle chiavi, la crittografia e la decrittografia, la gestione del tuo portachiavi e le buone pratiche.</li>
<li><strong>Scopri la crittografia tramite appunti</strong> — Scopri la <a href="/it/docs/clipboard-encryption/">crittografia PGP tramite appunti</a> per crittografare e decrittografare testo direttamente dagli appunti.</li>
<li><strong>Conosci gli strumenti</strong> — Comprendi le <a href="/it/docs/pgp-vs-gpg/">differenze tra PGP e GPG</a> per scegliere lo strumento giusto per il tuo workflow.</li>
</ol>

<p>La crittografia PGP protegge le comunicazioni sensibili da oltre trent'anni. Con gli strumenti e gli standard moderni, è più accessibile che mai.</p>
`
};

export default doc;
