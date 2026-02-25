import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP per principianti: guida semplice per iniziare con la crittografia PGP',
	description: 'Impara la crittografia PGP partendo da zero. Questa guida per principianti spiega come funziona PGP, ti accompagna nel tuo primo messaggio crittografato e copre i concetti chiave.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Perché la crittografia è importante', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'Cos\'è PGP, in modo semplice', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Concetti chiave da conoscere', level: 2 },
		{ id: 'public-key-your-address', text: 'Chiave pubblica: il tuo indirizzo', level: 3 },
		{ id: 'private-key-your-password', text: 'Chiave privata: la tua password', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Crittografia vs firma', level: 3 },
		{ id: 'key-fingerprints', text: 'Impronte delle chiavi', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Il tuo primo messaggio PGP', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Errori comuni dei principianti', level: 2 },
		{ id: 'next-steps', text: 'Prossimi passi', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP per principianti: guida semplice per iniziare</h1>

<p>Iniziare con PGP è più facile di quanto pensi. Generi una coppia di chiavi — una pubblica, una privata — condividi la chiave pubblica con le persone con cui vuoi comunicare, e usi la chiave privata per decrittografare i messaggi che ti inviano. Non c'è bisogno di installare software per provare. Con uno <a href="/it/pgp-online-encrypt/">strumento PGP online</a> gratuito come KeychainPGP, puoi crittografare il tuo primo messaggio in meno di cinque minuti, direttamente dal tuo browser.</p>

<h2 id="why-encryption-matters">Perché la crittografia è importante</h2>

<p>Ogni giorno, miliardi di messaggi transitano su Internet. E-mail, messaggi di chat, documenti — la maggior parte viene inviata in testo in chiaro, il che significa che chiunque li intercetti può leggerli. Questo include i provider di servizi Internet, gli hacker sulle reti Wi-Fi pubbliche e persino i programmi di sorveglianza governativi.</p>

<p><strong>Le violazioni di dati non sono eventi rari.</strong> Avvengono costantemente. Se i tuoi messaggi non sono crittografati, sono archiviati in database in testo leggibile, in attesa della prossima violazione.</p>

<p>La crittografia risolve questo problema. Quando crittografi un messaggio con PGP, viene trasformato in un testo incomprensibile. Solo la persona che possiede la chiave privata corretta può decifrarlo.</p>

<h2 id="what-is-pgp-explained-simply">Cos'è PGP, in modo semplice</h2>

<p>PGP sta per <strong>Pretty Good Privacy</strong>. Creato nel 1991 da Phil Zimmermann, è diventato lo standard mondiale per la crittografia di messaggi e file.</p>

<p>Ecco il modo più semplice per capire PGP. Pensalo come una <strong>cassetta delle lettere con una fessura</strong>.</p>

<p>Immagina una cassetta delle lettere speciale per strada. Chiunque può avvicinarsi e infilare una lettera nella fessura. Ma una volta che la lettera è dentro, solo tu puoi aprirla, perché solo tu hai la chiave della porta della cassetta.</p>

<ul>
<li>La <strong>fessura della cassetta delle lettere</strong> è la tua <strong>chiave pubblica</strong>. La dai a chiunque voglia inviarti un messaggio privato. È sicuro condividerla.</li>
<li>La <strong>chiave della cassetta delle lettere</strong> è la tua <strong>chiave privata</strong>. Non la condividi mai con nessuno.</li>
</ul>

<p>Questo si chiama <strong>crittografia asimmetrica</strong> — una chiave blocca, un'altra sblocca. Per una spiegazione tecnica più approfondita, leggi la nostra guida completa su <a href="/it/docs/what-is-pgp/">cos'è PGP</a>.</p>

<h2 id="key-concepts-you-need-to-know">Concetti chiave da conoscere</h2>

<h3 id="public-key-your-address">Chiave pubblica: il tuo indirizzo</h3>

<p>La tua chiave pubblica è come il tuo indirizzo postale. La distribuisci liberamente perché le persone possano inviarti qualcosa. In PGP, condividi la tua chiave pubblica perché altri possano crittografare messaggi che solo tu puoi leggere.</p>

<h3 id="private-key-your-password">Chiave privata: la tua password</h3>

<p>La tua chiave privata è come la chiave della tua porta di casa. È l'unica cosa che ti permette di aprire i messaggi crittografati con la tua chiave pubblica. Non devi <strong>mai condividere la tua chiave privata</strong> con nessuno.</p>

<h3 id="encryption-vs-signing">Crittografia vs firma</h3>

<p>PGP può fare due cose: <strong>crittografare</strong> e <strong>firmare</strong>.</p>

<ul>
<li><strong>Crittografia</strong> — trasforma un messaggio in modo che solo il destinatario possa leggerlo. Usi la chiave pubblica del destinatario per crittografare, e lui usa la sua chiave privata per decrittografare.</li>
<li><strong>Firma</strong> — dimostra che un messaggio proviene da te e non è stato alterato. Usi la tua chiave privata per firmare, e chiunque con la tua chiave pubblica può verificare la firma.</li>
</ul>

<h3 id="key-fingerprints">Impronte delle chiavi</h3>

<p>Un'impronta della chiave è una breve stringa di caratteri che identifica in modo univoco una chiave PGP. Le impronte servono a <strong>verificare</strong> che una chiave pubblica appartenga effettivamente alla persona che pensi. Confronta sempre l'impronta tramite un canale di fiducia separato.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Quando vedi una chiave PGP o un messaggio crittografato come un blocco di testo che inizia con <code>-----BEGIN PGP MESSAGE-----</code>, quello è <strong>ASCII armor</strong>. È semplicemente un modo per codificare dati binari in caratteri di testo stampabili, così da poterli copiare e incollare in e-mail, finestre di chat o moduli web.</p>

<h2 id="your-first-pgp-message">Il tuo primo messaggio PGP</h2>

<p>Seguiamo i passaggi per crittografare il tuo primo messaggio con l'<a href="https://keychainpgp.github.io">applicazione web KeychainPGP</a>. È uno <a href="/it/pgp-online-encrypt/">strumento PGP online</a> gratuito che funziona interamente nel tuo browser.</p>

<p><strong>Passaggio 1: Apri l'applicazione web.</strong> Vai su <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. L'applicazione si carica tramite WebAssembly, il motore PGP funziona localmente sul tuo computer.</p>

<p><strong>Passaggio 2: Genera la tua coppia di chiavi.</strong> Nella scheda Chiavi, crea una nuova chiave. KeychainPGP genera una coppia di chiavi Ed25519 + X25519 moderna.</p>

<p><strong>Passaggio 3: Esporta e condividi la tua chiave pubblica.</strong> Usa la funzione di esportazione per copiare la tua chiave pubblica in formato ASCII-armored.</p>

<p><strong>Passaggio 4: Importa la chiave pubblica del destinatario.</strong> Nella scheda Chiavi, incolla il blocco della chiave pubblica del tuo contatto.</p>

<p><strong>Passaggio 5: Scrivi e crittografa il tuo messaggio.</strong> Vai nella scheda Crittografa, digita il tuo messaggio, seleziona il destinatario e clicca su <strong>"Crittografa negli appunti"</strong>.</p>

<p><strong>Passaggio 6: Invia il messaggio crittografato.</strong> Incolla il testo crittografato in qualsiasi e-mail, chat o applicazione di messaggistica.</p>

<p><strong>Passaggio 7: Decrittografa una risposta.</strong> Copia il blocco del messaggio PGP crittografato, vai nella scheda Decrittografa, incolla e clicca su Decrittografa.</p>

<p>Per una guida più dettagliata, consulta il nostro tutorial <a href="/it/docs/how-to-use-pgp/">come usare PGP</a>.</p>

<h2 id="common-beginner-mistakes">Errori comuni dei principianti</h2>

<p><strong>1. Condividere la propria chiave privata.</strong> La tua chiave privata non deve mai essere inviata a nessuno. Condividi solo la tua chiave <strong>pubblica</strong>.</p>

<p><strong>2. Non verificare le impronte.</strong> Verifica sempre l'impronta della chiave tramite un canale separato e di fiducia — una telefonata, una videochiamata o un incontro di persona.</p>

<p><strong>3. Perdere la chiave privata senza backup.</strong> Se perdi la tua chiave privata, ogni messaggio crittografato con quella chiave è perso per sempre. Fai un backup della chiave privata in un luogo sicuro.</p>

<p><strong>4. Non salvare il certificato di revoca.</strong> Un certificato di revoca ti consente di dichiarare pubblicamente che la tua chiave non è più valida se viene compromessa.</p>

<p><strong>5. Usare chiavi obsolete o deboli.</strong> Se generi nuove chiavi oggi, usa algoritmi moderni. KeychainPGP usa Ed25519 + X25519 per impostazione predefinita.</p>

<h2 id="next-steps">Prossimi passi</h2>

<ul>
<li><strong>Leggi la guida completa:</strong> <a href="/it/docs/how-to-use-pgp/">Come usare PGP</a> copre firma, verifica, gestione delle chiavi e argomenti avanzati.</li>
<li><strong>Comprendi cos'è PGP:</strong> Per un approfondimento, leggi <a href="/it/docs/what-is-pgp/">Cos'è PGP</a>.</li>
<li><strong>Impara la crittografia tramite appunti:</strong> Scopri come la <a href="/it/docs/clipboard-encryption/">crittografia tramite appunti</a> ti permette di usare PGP con qualsiasi applicazione.</li>
<li><strong>Prova lo strumento online:</strong> Apri lo <a href="/it/pgp-online-encrypt/">strumento PGP online</a> e fai pratica.</li>
<li><strong>Ottieni l'applicazione desktop:</strong> L'<a href="https://github.com/keychainpgp/keychainpgp/releases/latest">applicazione desktop KeychainPGP</a> aggiunge le scorciatoie globali, la barra di sistema e la cancellazione automatica degli appunti.</li>
</ul>

<h2 id="faq">Domande frequenti</h2>

<h3>PGP è difficile da imparare?</h3>
<p>No. Il concetto di base è semplice: una chiave pubblica da condividere, una chiave privata da tenere segreta. Crittografare un messaggio richiede pochi clic con uno strumento moderno come KeychainPGP.</p>

<h3>Bisogna installare un software per usare PGP?</h3>
<p>Non necessariamente. Puoi usare lo <a href="/it/pgp-online-encrypt/">strumento PGP online</a> di KeychainPGP direttamente nel tuo browser. Funziona interamente sul tuo dispositivo tramite WebAssembly.</p>

<h3>Qualcuno può violare i miei messaggi crittografati con PGP?</h3>
<p>Con algoritmi moderni (come Ed25519 + X25519 utilizzati da KeychainPGP), decifrare la crittografia con la forza bruta richiederebbe più dell'età dell'universo con la tecnologia attuale. I veri rischi sono pratici: perdere la chiave privata, usare una passphrase debole o avere malware sul proprio dispositivo.</p>

<h3>Qual è la differenza tra PGP, GPG e OpenPGP?</h3>
<p><strong>PGP</strong> è il programma originale creato nel 1991. <strong>OpenPGP</strong> è lo standard aperto (RFC 4880) che definisce i formati. <strong>GPG</strong> (GNU Privacy Guard) è un'implementazione libera dello standard OpenPGP. KeychainPGP è un'altra implementazione, costruita su Sequoia-PGP in Rust. Sono tutti compatibili perché seguono lo stesso standard.</p>

<h3>Come condividere la propria chiave pubblica?</h3>
<p>Esporta la tua chiave pubblica in formato ASCII-armored — è un blocco di testo che inizia con <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>. Incollala in un'e-mail, pubblicala sul tuo sito web, condividila in una chat o caricala su un server di chiavi. Non dimenticare di verificare le impronte con i tuoi contatti tramite un canale separato.</p>
`
};

export default doc;
