import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: qual è la differenza tra PGP e GPG?',
	description: 'Scopri la differenza tra PGP e GPG. Confronta Pretty Good Privacy, GnuPG e lo standard OpenPGP per trovare lo strumento di crittografia giusto.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Qual è la differenza?', level: 2 },
		{ id: 'what-is-pgp', text: 'Cos\'è PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'Cos\'è GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: 'Cos\'è OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Tabella comparativa PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Differenze chiave spiegate', level: 2 },
		{ id: 'which-should-you-use', text: 'Quale usare?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Dove si posiziona KeychainPGP', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG: qual è la differenza tra PGP e GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">Qual è la differenza tra PGP e GPG?</h2>

<p>La differenza tra PGP e GPG sta nella loro origine e nella licenza. <strong>PGP</strong> (Pretty Good Privacy) è il programma di crittografia proprietario originale creato da Phil Zimmermann nel 1991. <strong>GPG</strong> (GNU Privacy Guard, detto anche GnuPG) è una reimplementazione libera e open source dello stesso concetto, sviluppata nell'ambito del progetto GNU. Entrambi i programmi implementano lo standard <strong>OpenPGP</strong>, il che significa che producono messaggi crittografati compatibili e possono funzionare con le chiavi l'uno dell'altro. In pratica, GPG è lo strumento che la maggior parte delle persone usa oggi perché è gratuito, attivamente mantenuto e disponibile su tutti i principali sistemi operativi. Se sei nuovo nella crittografia, la nostra <a href="/it/docs/pgp-for-beginners/">guida PGP per principianti</a> presenta i concetti fondamentali passo dopo passo.</p>

<h2 id="what-is-pgp">Cos'è PGP?</h2>

<p>PGP sta per <strong>Pretty Good Privacy</strong>. Phil Zimmermann ha scritto la prima versione nel 1991 e l'ha pubblicata come strumento gratuito per attivisti e cittadini comuni che avevano bisogno di crittografia forte. Il software combinava la crittografia a chiave simmetrica con la crittografia a chiave pubblica.</p>

<p>Dopo un'indagine federale durata tre anni (archiviata nel 1996), Zimmermann ha fondato PGP Inc. La società ha cambiato proprietà più volte: Network Associates nel 1997, PGP Corporation nel 2002, poi Symantec (ora Broadcom) nel 2010. Oggi PGP esiste come suite di prodotti commerciali destinati principalmente alle aziende.</p>

<p>Per saperne di più sulla tecnologia sottostante, consulta il nostro articolo completo su <a href="/it/docs/what-is-pgp/">cos'è PGP e come funziona</a>.</p>

<h2 id="what-is-gpg-gnupg">Cos'è GPG (GnuPG)?</h2>

<p>GPG, o <strong>GNU Privacy Guard (GnuPG)</strong>, è un'implementazione libera e open source dello standard OpenPGP. Werner Koch ha avviato il progetto nel 1997 con un finanziamento del governo tedesco e ha pubblicato la versione 1.0 nel 1999. GnuPG è stato creato specificamente per fornire un'alternativa completamente libera al software proprietario PGP.</p>

<p>GnuPG fa parte del progetto GNU ed è rilasciato sotto la licenza pubblica generale GNU (GPL). È incluso per impostazione predefinita nella maggior parte delle distribuzioni Linux. Lo strumento a riga di comando <code>gpg</code> è l'interfaccia con cui la maggior parte degli sviluppatori e amministratori di sistema interagisce. Per una panoramica degli strumenti disponibili, consulta il nostro <a href="/it/docs/pgp-tools/">confronto degli strumenti PGP</a>.</p>

<h2 id="what-is-openpgp">Cos'è OpenPGP?</h2>

<p><strong>OpenPGP</strong> non è né un prodotto né un software. È uno standard aperto che definisce i formati dei messaggi, i formati delle chiavi e le procedure crittografiche che gli strumenti compatibili con PGP devono seguire. L'IETF ha pubblicato la specifica originale come <strong>RFC 2440</strong> nel 1998, e la versione più referenziata è l'<strong>RFC 4880</strong> (2007). Un aggiornamento importante, l'<strong>RFC 9580</strong> (2024), modernizza lo standard con il supporto di Ed25519 e della crittografia AEAD.</p>

<p>L'esistenza di OpenPGP rende possibile l'interoperabilità. Poiché PGP e GPG implementano lo stesso standard, un messaggio crittografato con GPG può essere decrittografato da PGP, e viceversa.</p>

<h2 id="pgp-vs-gpg-comparison-table">Tabella comparativa PGP vs GPG</h2>

<table>
<tr><th>Caratteristica</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Tipo</strong></td><td>Software commerciale</td><td>Software libero/open source</td><td>Standard aperto</td></tr>
<tr><td><strong>Licenza</strong></td><td>Proprietaria</td><td>GPL (gratuita)</td><td>Specifica IETF</td></tr>
<tr><td><strong>Costo</strong></td><td>Licenza a pagamento</td><td>Gratuito</td><td>N/A</td></tr>
<tr><td><strong>Piattaforme</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>N/A</td></tr>
<tr><td><strong>GUI inclusa</strong></td><td>Sì (console aziendale)</td><td>No (GUI di terze parti disponibili)</td><td>N/A</td></tr>
<tr><td><strong>Sorgente disponibile</strong></td><td>No</td><td>Sì</td><td>Standard pubblico</td></tr>
</table>

<h2 id="key-differences-explained">Differenze chiave spiegate</h2>

<h3>Licenza e costo</h3>

<p>PGP è un software proprietario venduto con licenza commerciale. GPG è rilasciato sotto la GPL, il che significa che chiunque può scaricarlo, usarlo, modificarlo e ridistribuirlo gratuitamente. Per i privati, le piccole squadre e i progetti open source, GPG è la scelta ovvia in termini di costo.</p>

<h3>Supporto delle piattaforme</h3>

<p>GnuPG funziona su praticamente tutti i sistemi Unix e dispone di build ufficiali per Windows e macOS. Per le esigenze multi-piattaforma, strumenti moderni come KeychainPGP forniscono build native per Windows, macOS, Linux e Android da un'unica base di codice.</p>

<h3>Esperienza utente</h3>

<p>PGP commerciale include un'interfaccia grafica per il deployment aziendale. GnuPG è fondamentalmente uno strumento a riga di comando. Strumenti come KeychainPGP offrono un'interfaccia grafica nativa che gestisce la gestione delle chiavi, la crittografia, la decrittografia e la firma senza dover memorizzare opzioni da riga di comando. Puoi provare la crittografia PGP direttamente nel browser con il nostro <a href="/it/pgp-online-encrypt/">strumento di crittografia PGP online</a>.</p>

<h2 id="which-should-you-use">Quale usare?</h2>

<ul>
<li><strong>Azienda con infrastruttura Broadcom/Symantec esistente:</strong> PGP commerciale potrebbe essere il percorso di minor resistenza.</li>
<li><strong>Sviluppatori e amministratori di sistema:</strong> GnuPG è lo strumento standard, installato per impostazione predefinita sulla maggior parte dei server.</li>
<li><strong>Utenti attenti alla privacy che desiderano una GUI:</strong> Considera un'applicazione OpenPGP moderna come KeychainPGP.</li>
<li><strong>Esigenze di crittografia web o rapida:</strong> Uno <a href="/it/pgp-online-encrypt/">strumento di crittografia PGP online</a> può gestire le operazioni una tantum senza installare nulla.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">Dove si posiziona KeychainPGP</h2>

<p><a href="/">KeychainPGP</a> è un'applicazione desktop moderna e open source che implementa lo standard OpenPGP utilizzando <strong>Sequoia-PGP</strong>, una libreria OpenPGP scritta da zero in Rust. Non è né PGP (il prodotto commerciale) né GPG (GnuPG). È un'implementazione indipendente che coesiste con entrambi nell'ecosistema OpenPGP.</p>

<p>Ragioni principali per considerare KeychainPGP:</p>

<ul>
<li><strong>Multi-piattaforma:</strong> Build native per Windows, macOS, Linux e Android, più un'applicazione web e un CLI</li>
<li><strong>Crittografia moderna:</strong> Costruito su Sequoia-PGP con supporto di Curve25519/Ed25519 e AEAD</li>
<li><strong>Open source:</strong> Doppia licenza MIT / Apache-2.0, interamente verificabile</li>
<li><strong>Facile da usare:</strong> Interfaccia grafica con workflow tramite appunti e scorciatoie globali</li>
<li><strong>CLI per l'automazione:</strong> Il CLI <code>keychainpgp</code> supporta generazione di chiavi, crittografia, decrittografia, firma, verifica e gestione del portachiavi</li>
<li><strong>Conforme a OpenPGP:</strong> Le chiavi e i messaggi sono interoperabili con GPG, PGP e qualsiasi altro strumento OpenPGP</li>
</ul>

<h2 id="frequently-asked-questions">Domande frequenti</h2>

<h3>GPG è la stessa cosa di PGP?</h3>

<p>No. GPG (GnuPG) e PGP sono software distinti creati da persone diverse. PGP è stato creato da Phil Zimmermann nel 1991 ed è oggi un prodotto commerciale di Broadcom. GPG è stato creato da Werner Koch nel 1997 come alternativa libera e open source. Entrambi implementano lo standard OpenPGP, quindi sono funzionalmente compatibili.</p>

<h3>Le chiavi GPG e PGP possono funzionare insieme?</h3>

<p>Sì. GPG e PGP utilizzano il formato di chiave OpenPGP definito dallo standard IETF. Puoi esportare una chiave pubblica da GPG e importarla in PGP, o in qualsiasi altro strumento conforme a OpenPGP come KeychainPGP.</p>

<h3>GPG è ancora sicuro nel 2026?</h3>

<p>GnuPG resta uno strumento sicuro e attivamente mantenuto. Usa tipi di chiavi moderni (come Ed25519), mantieni il software aggiornato e segui le buone pratiche di gestione delle chiavi. Per una guida passo dopo passo, consulta il nostro articolo <a href="/it/docs/pgp-for-beginners/">PGP per principianti</a>.</p>

<h3>Cosa significa OpenPGP?</h3>

<p>OpenPGP è uno standard aperto pubblicato dall'IETF che definisce come funziona la crittografia compatibile con PGP. Specifica i formati dei messaggi, i formati delle chiavi, i requisiti degli algoritmi e le strutture delle firme.</p>

<h3>Ho bisogno di PGP o GPG per usare KeychainPGP?</h3>

<p>No. KeychainPGP è un'applicazione autonoma che non dipende dall'installazione di PGP o GnuPG. Utilizza la libreria Sequoia-PGP, un'implementazione indipendente dello standard OpenPGP scritta in Rust. Tuttavia, le chiavi e i messaggi crittografati creati in KeychainPGP sono completamente compatibili con GPG e PGP.</p>
`
};

export default doc;
