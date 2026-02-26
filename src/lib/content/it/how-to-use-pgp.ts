import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Come usare PGP: tutorial di crittografia passo dopo passo (2026)',
	description: 'Impara a usare la crittografia PGP passo dopo passo. Genera chiavi, crittografa e decrittografa messaggi, firma e verifica dati con questo tutorial PGP completo.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Come usare PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Cosa ti serve', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Passaggio 1: Generare una coppia di chiavi', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Passaggio 2: Condividere la chiave pubblica', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Passaggio 3: Importare le chiavi dei contatti', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Passaggio 4: Crittografare un messaggio', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Passaggio 5: Decrittografare un messaggio', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Passaggio 6: Firmare un messaggio', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Passaggio 7: Verificare una firma', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'Workflow tramite appunti di KeychainPGP', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Applicazione web vs applicazione desktop', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>Come usare PGP</h1>

<p>Per usare PGP, generi una coppia di chiavi (una chiave pubblica e una chiave privata), condividi la tua chiave pubblica con le persone con cui vuoi comunicare, importi le loro chiavi pubbliche, e poi usi queste chiavi per crittografare, decrittografare, firmare e verificare messaggi. La crittografia PGP garantisce che solo il destinatario previsto possa leggere il tuo messaggio, mentre le firme digitali dimostrano che un messaggio proviene davvero da te. Strumenti come <a href="/it/pgp-online-encrypt/">KeychainPGP</a> rendono questo processo accessibile grazie a un workflow basato sugli appunti — senza riga di comando.</p>

<p>Questo tutorial PGP ti guida attraverso ogni passaggio, dalla generazione della tua prima coppia di chiavi all'invio e alla ricezione di messaggi crittografati. Se sei nuovo al concetto di crittografia a chiave pubblica, considera di leggere prima <a href="/it/docs/what-is-pgp/">Cos'è PGP?</a> o <a href="/it/docs/pgp-for-beginners/">PGP per principianti</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">Cosa ti serve prima di iniziare</h2>

<p>Prima di crittografare il tuo primo messaggio con PGP, hai bisogno di un'applicazione PGP:</p>

<ul>
<li><strong>Applicazione web KeychainPGP</strong> — Apri lo <a href="/it/pgp-online-encrypt/">strumento PGP online</a> in qualsiasi browser moderno. Tutto funziona localmente tramite WebAssembly compilato da Rust. Nessuna installazione, nessun account, nessun dato inviato a un server.</li>
<li><strong>Applicazione desktop KeychainPGP</strong> — Scarica l'applicazione nativa per Windows, macOS, Linux o Android dalla <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">pagina delle release su GitHub</a>. L'applicazione desktop aggiunge scorciatoie globali, integrazione nella barra di sistema, cancellazione automatica degli appunti e sincronizzazione tramite QR code.</li>
<li><strong>CLI KeychainPGP</strong> — Il CLI <code>keychainpgp</code> fornisce comandi per la generazione di chiavi, la crittografia, la decrittografia, la firma, la verifica e la gestione del portachiavi. Ideale per lo scripting e l'automazione.</li>
<li><strong>GnuPG (GPG)</strong> — Lo strumento tradizionale da riga di comando. Potente ma richiede familiarità con il terminale. Vedi <a href="/it/docs/pgp-vs-gpg/">PGP vs GPG</a> per un confronto dettagliato.</li>
</ul>

<blockquote><p><strong>Suggerimento:</strong> Se vuoi semplicemente provare la crittografia PGP adesso senza installare nulla, apri lo <a href="/it/pgp-online-encrypt/">strumento PGP online</a> e segui questo tutorial.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Passaggio 1: Generare una coppia di chiavi PGP</h2>

<p>Una coppia di chiavi PGP è composta da due chiavi matematicamente correlate:</p>

<ul>
<li><strong>Chiave pubblica</strong> — La condividi liberamente. Chiunque può usarla per crittografare messaggi a te destinati o verificare le tue firme.</li>
<li><strong>Chiave privata</strong> — La mantieni segreta. Decrittografa i messaggi crittografati con la tua chiave pubblica e crea firme digitali.</li>
</ul>

<h3>Generare una chiave in KeychainPGP</h3>

<ol>
<li>Apri KeychainPGP (applicazione web o desktop).</li>
<li>Vai alla scheda <strong>Chiavi</strong>.</li>
<li>Clicca su <strong>Genera una nuova chiave</strong>.</li>
<li>Inserisci il tuo nome e indirizzo e-mail.</li>
<li>Clicca su <strong>Genera</strong>. KeychainPGP crea una coppia di chiavi <strong>Ed25519 + X25519</strong> — l'algoritmo più moderno e sicuro disponibile in OpenPGP.</li>
</ol>

<h3>Generare una chiave con GPG (riga di comando)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Seleziona il tipo di chiave (RSA o ECC), la dimensione e il periodo di scadenza. Per una sicurezza moderna, scegli Ed25519 se la tua versione di GPG lo supporta.</p>

<hr>

<h2 id="step-2-share-your-public-key">Passaggio 2: Condividere la tua chiave pubblica</h2>

<p>La tua chiave pubblica è un blocco di testo in formato <strong>ASCII-armored</strong>. Puoi condividerla ovunque:</p>

<ul>
<li><strong>E-mail</strong> — Incollala nel corpo di un'e-mail o allegala come file <code>.asc</code>.</li>
<li><strong>Applicazioni di messaggistica</strong> — Inviala tramite Signal, WhatsApp, Matrix o qualsiasi piattaforma di chat.</li>
<li><strong>Il tuo sito web</strong> — Pubblicala sul tuo sito personale, profilo GitHub o bio Twitter.</li>
<li><strong>Server di chiavi</strong> — Caricala su un server di chiavi pubblico come <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Importante:</strong> Condividi solo la tua chiave <strong>pubblica</strong>. Non condividere mai la tua chiave privata con nessuno, in nessuna circostanza.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Passaggio 3: Importare le chiavi pubbliche dei tuoi contatti</h2>

<p>Prima di poter inviare un messaggio crittografato a qualcuno, hai bisogno della sua chiave pubblica. Chiedi al tuo contatto di inviarti la sua chiave pubblica ASCII-armored, oppure cercala su un server di chiavi.</p>

<h3>Importare una chiave in KeychainPGP</h3>

<ol>
<li>Copia il blocco della chiave pubblica del contatto nei tuoi appunti.</li>
<li>Apri KeychainPGP e vai alla scheda <strong>Chiavi</strong>.</li>
<li>Clicca su <strong>Importa una chiave</strong> e incolla la chiave.</li>
<li>Il contatto appare nella tua lista di chiavi con il suo nome e la sua e-mail.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Passaggio 4: Crittografare un messaggio</h2>

<h3>Crittografia in KeychainPGP (web o desktop)</h3>

<ol>
<li>Vai alla scheda <strong>Crittografa</strong>.</li>
<li>Digita o incolla il messaggio che vuoi crittografare.</li>
<li>Seleziona il destinatario dalla tua lista di chiavi.</li>
<li>Clicca su <strong>Crittografa negli appunti</strong>. Il messaggio crittografato viene copiato nei tuoi appunti.</li>
<li>Incolla il messaggio crittografato nella tua e-mail, chat o qualsiasi altro canale di comunicazione.</li>
</ol>

<h3>Crittografia con la scorciatoia desktop</h3>

<p>Con l'applicazione desktop KeychainPGP, il processo è ancora più rapido grazie al <a href="/it/docs/clipboard-encryption/">workflow tramite appunti</a>:</p>

<ol>
<li>Digita il tuo messaggio in qualsiasi applicazione.</li>
<li>Seleziona e copia il testo (<code>Ctrl+C</code>).</li>
<li>Premi <strong><code>Ctrl+Shift+E</code></strong> — KeychainPGP crittografa il contenuto degli appunti.</li>
<li>Incolla il messaggio crittografato (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Passaggio 5: Decrittografare un messaggio</h2>

<h3>Decrittografia in KeychainPGP (web o desktop)</h3>

<ol>
<li>Copia il blocco completo del messaggio crittografato.</li>
<li>Vai alla scheda <strong>Decrittografa</strong> di KeychainPGP.</li>
<li>Incolla il testo crittografato.</li>
<li>Clicca su <strong>Decrittografa</strong>. Il testo in chiaro appare immediatamente.</li>
</ol>

<h3>Decrittografia con la scorciatoia desktop</h3>

<ol>
<li>Seleziona e copia il blocco del messaggio crittografato (<code>Ctrl+C</code>).</li>
<li>Premi <strong><code>Ctrl+Shift+D</code></strong> — KeychainPGP decrittografa il contenuto degli appunti.</li>
<li>Il testo in chiaro sostituisce il testo crittografato nei tuoi appunti. Incollalo dove ne hai bisogno.</li>
</ol>

<p>L'applicazione desktop dispone anche della <strong>cancellazione automatica degli appunti</strong>: dopo 30 secondi, il testo decrittografato viene automaticamente rimosso dagli appunti.</p>

<hr>

<h2 id="step-6-sign-a-message">Passaggio 6: Firmare un messaggio</h2>

<p>Una firma digitale PGP dimostra due cose:</p>

<ol>
<li><strong>Autenticità</strong> — Il messaggio è stato scritto dal proprietario della chiave di firma.</li>
<li><strong>Integrità</strong> — Il messaggio non è stato alterato dopo la firma.</li>
</ol>

<p>Firmare non crittografa il messaggio. Chiunque può leggere un messaggio firmato, ma può verificare che proviene davvero da te e non è stato falsificato.</p>

<h3>Quando firmare i messaggi</h3>

<ul>
<li>Annunciare rilasci di software o avvisi di sicurezza</li>
<li>Verificare la propria identità su forum pubblici</li>
<li>Firmare e-mail per dimostrarne l'origine</li>
<li>Firma dei commit Git per l'integrità del codice</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Passaggio 7: Verificare una firma</h2>

<p>Quando ricevi un messaggio firmato, puoi verificare che sia autentico e non modificato.</p>

<h3>Verifica in KeychainPGP</h3>

<ol>
<li>Copia il messaggio firmato completo (incluso il blocco di firma).</li>
<li>Vai alla scheda <strong>Verifica</strong>.</li>
<li>Incolla il messaggio firmato.</li>
<li>Clicca su <strong>Verifica</strong>. KeychainPGP conferma se la firma è valida.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">Workflow tramite appunti di KeychainPGP</h2>

<p>Ciò che distingue KeychainPGP dagli strumenti PGP tradizionali è il suo <a href="/it/docs/clipboard-encryption/">workflow di crittografia tramite appunti</a>. Invece di operare su file o richiedere un client e-mail dedicato, KeychainPGP funziona con qualsiasi applicazione tramite gli appunti di sistema.</p>

<table>
<tr><th>Azione</th><th>Applicazione web</th><th>Applicazione desktop</th></tr>
<tr><td>Crittografa</td><td>Incolla il testo, clicca su Crittografa</td><td>Copia il testo, premi <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Decrittografa</td><td>Incolla il testo crittografato, clicca su Decrittografa</td><td>Copia il testo crittografato, premi <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Firma</td><td>Incolla il testo, clicca su Firma</td><td>Disponibile nella finestra dell'applicazione</td></tr>
<tr><td>Verifica</td><td>Incolla il testo firmato, clicca su Verifica</td><td>Disponibile nella finestra dell'applicazione</td></tr>
</table>

<p>Funzionalità di sicurezza aggiuntive dell'applicazione desktop:</p>

<ul>
<li><strong>Cancellazione automatica degli appunti</strong> — Il testo decrittografato viene rimosso dagli appunti dopo 30 secondi.</li>
<li><strong>Modalità OPSEC</strong> — Titolo della finestra mascherato, archiviazione delle chiavi solo in RAM e pulsante di cancellazione d'emergenza.</li>
<li><strong>Archivio credenziali del sistema operativo</strong> — Le chiavi private sono archiviate in modo sicuro tramite Windows Credential Manager, macOS Keychain o Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Applicazione web vs applicazione desktop</h2>

<p><strong>Applicazione web</strong> (<a href="/it/pgp-online-encrypt/">strumento PGP online</a>):</p>

<ul>
<li>Funziona interamente nel browser tramite WebAssembly</li>
<li>Nessuna installazione, nessun account richiesto</li>
<li>Perfetta per operazioni di crittografia rapide</li>
<li>Le chiavi sono archiviate nello storage locale del browser</li>
</ul>

<p><strong>Applicazione desktop</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Scorciatoie globali per crittografare e decrittografare</li>
<li>Integrazione nella barra di sistema</li>
<li>Cancellazione automatica degli appunti</li>
<li>Modalità OPSEC con chiavi solo in RAM e cancellazione d'emergenza</li>
<li>Archiviazione sicura delle chiavi tramite il gestore di credenziali del sistema operativo</li>
<li>Più adatta all'uso quotidiano e alla gestione a lungo termine delle chiavi</li>
</ul>

<p>Entrambe le applicazioni sono gratuite, open source (MIT / Apache-2.0) e prive di qualsiasi telemetria.</p>

<hr>

<h2 id="frequently-asked-questions">Domande frequenti</h2>

<h3>Devo condividere la mia chiave privata?</h3>

<p>No. Non devi <strong>mai</strong> condividere la tua chiave privata con nessuno. La tua chiave privata è ciò che ti consente di decrittografare i messaggi che ti vengono inviati e di creare firme digitali. Se qualcun altro ottiene la tua chiave privata, può leggere tutti i messaggi crittografati per te e impersonarti.</p>

<h3>Cosa succede se perdo la mia chiave privata?</h3>

<p>Se perdi la tua chiave privata, perdi definitivamente la capacità di decrittografare tutti i messaggi crittografati con la chiave pubblica corrispondente. Non esiste alcun meccanismo di recupero. Conserva sempre un backup sicuro della tua chiave privata.</p>

<h3>Posso crittografare file con PGP?</h3>

<p>Sì. PGP può crittografare sia messaggi di testo che file binari. KeychainPGP si concentra sulla crittografia di testo tramite appunti, mentre strumenti come GnuPG supportano la crittografia di file direttamente. Per un confronto dettagliato, vedi la guida <a href="/it/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>La crittografia PGP è sicura?</h3>

<p>La crittografia PGP con algoritmi moderni è estremamente sicura. KeychainPGP usa Ed25519 per le firme e X25519 per lo scambio di chiavi — algoritmi a curva ellittica che offrono una sicurezza equivalente a RSA-3072 per una frazione della dimensione della chiave. I principali rischi non sono crittografici ma operativi: passphrase deboli, dispositivi compromessi o gestione delle chiavi trascurata.</p>

<h3>Cos'è un'impronta PGP?</h3>

<p>Un'impronta PGP è una stringa esadecimale di 40 caratteri che identifica in modo univoco una chiave PGP. Le impronte sono usate per verificare che una chiave pubblica appartenga effettivamente alla persona che si ritiene. Confronta sempre l'impronta tramite un canale di fiducia separato (telefonata, videochiamata, incontro di persona) per prevenire attacchi man-in-the-middle.</p>
`
};

export default doc;
