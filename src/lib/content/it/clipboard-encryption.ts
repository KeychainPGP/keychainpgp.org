import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Crittografia dagli appunti con PGP: l\'approccio clipboard-first alla messaggistica sicura',
	description: 'Scopri come funziona la crittografia PGP tramite appunti, perché supera la crittografia basata su file per l\'OPSEC quotidiano e come KeychainPGP usa gli appunti per crittografare messaggi in qualsiasi app.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'Cos\'è la crittografia dagli appunti?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Perché clipboard-first?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Come KeychainPGP usa gli appunti', level: 2 },
		{ id: 'the-encryption-workflow', text: 'Il flusso di crittografia', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Decrittazione al contrario', level: 3 },
		{ id: 'security-considerations', text: 'Considerazioni sulla sicurezza', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Cronologia e gestori degli appunti', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Cancellazione automatica dopo 30 secondi', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Gestione della memoria e azzeramento', level: 3 },
		{ id: 'opsec-mode', text: 'Modalità OPSEC', level: 2 },
		{ id: 'window-title-disguise', text: 'Camuffamento del titolo della finestra', level: 3 },
		{ id: 'ram-only-keys', text: 'Chiavi solo in RAM', level: 3 },
		{ id: 'panic-wipe', text: 'Cancellazione di emergenza', level: 3 },
		{ id: 'tor-proxy-support', text: 'Supporto proxy Tor', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Appunti vs. crittografia file', level: 2 },
		{ id: 'threat-model', text: 'Modello di minaccia', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Da cosa protegge', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Da cosa non protegge', level: 3 },
		{ id: 'best-practices', text: 'Best practice per PGP dagli appunti', level: 2 }
	],
	html: `
<h1>Crittografia dagli appunti con PGP</h1>

<h2 id="what-is-clipboard-encryption">Cos'è la crittografia dagli appunti?</h2>

<p>La crittografia PGP tramite appunti è un metodo per crittografare e decrittare testo leggendo e scrivendo direttamente dagli appunti del sistema operativo, anziché operare su file salvati su disco. Invece di salvare un messaggio in chiaro in un file <code>.txt</code>, passarlo a uno strumento da riga di comando e recuperare un output <code>.asc</code> crittografato, basta copiare il testo, attivare la crittografia con un tasto rapido e incollare il messaggio PGP crittografato dove serve. Gli appunti fungono sia da buffer di input che di output, rendendo la crittografia parte integrante di qualsiasi flusso di lavoro basato su testo. Questo approccio è alla base del funzionamento di <a href="/it/pgp-online-encrypt/">KeychainPGP</a> su desktop e gli permette di integrarsi con qualsiasi applicazione che supporti copia e incolla.</p>

<p>Se sei nuovo con PGP, inizia con <a href="/it/docs/what-is-pgp/">Cos'è PGP?</a> per un'introduzione ai concetti crittografici fondamentali.</p>

<h2 id="why-clipboard-first">Perché clipboard-first?</h2>

<p>Gli strumenti PGP tradizionali come GnuPG sono stati progettati attorno ai file. Oggi, con la maggior parte delle comunicazioni sensibili che avvengono su piattaforme web e app di messaggistica, questo modello ha meno senso. L'approccio clipboard-first risolve diversi problemi:</p>

<ul>
<li><strong>Indipendenza dalle applicazioni.</strong> Funziona con qualsiasi app che supporti copia e incolla.</li>
<li><strong>Nessun file in chiaro su disco.</strong> Il testo in chiaro rimane solo nella memoria volatile.</li>
<li><strong>Minore frizione.</strong> Un flusso in tre passaggi (copia, tasto rapido, incolla) ha molto meno attrito di una pipeline basata su file.</li>
<li><strong>Compatibilità con le comunicazioni moderne.</strong> Webmail, Signal, Slack, Discord — tutti supportano l'incolla di testo.</li>
</ul>

<p>Per una guida passo-passo vedi <a href="/it/docs/how-to-use-pgp/">Come usare PGP</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Come KeychainPGP usa gli appunti</h2>

<h3 id="the-encryption-workflow">Il flusso di crittografia</h3>

<ol>
<li><strong>Copia</strong> il messaggio in chiaro da qualsiasi applicazione.</li>
<li><strong>Premi <code>Ctrl+Shift+E</code></strong>. KeychainPGP legge gli appunti, crittografa il testo e scrive il risultato PGP ASCII-armored negli appunti.</li>
<li><strong>Incolla</strong> il messaggio crittografato nella destinazione.</li>
</ol>

<p>KeychainPGP usa la libreria <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> in Rust. Le chiavi usano Ed25519 per la firma e X25519 per la crittografia per impostazione predefinita.</p>

<h3 id="decryption-in-reverse">Decrittazione al contrario</h3>

<p>Copia il blocco PGP crittografato, premi <code>Ctrl+Shift+D</code>, e KeychainPGP sostituisce il contenuto degli appunti con il testo decrittato. Il testo decrittato esiste solo in memoria e viene cancellato automaticamente dopo un timeout configurabile.</p>

<h2 id="security-considerations">Considerazioni sulla sicurezza</h2>

<h3 id="clipboard-history-and-managers">Cronologia e gestori degli appunti</h3>

<p>I sistemi operativi moderni mantengono spesso una cronologia degli appunti. Disattiva la cronologia degli appunti e evita gestori di terze parti sui dispositivi dove gestisci contenuti sensibili.</p>

<h3 id="auto-clear-after-30-seconds">Cancellazione automatica dopo 30 secondi</h3>

<p>KeychainPGP cancella automaticamente gli appunti 30 secondi dopo aver scritto testo decrittato. Il timer è configurabile fino a un minimo di 5 secondi.</p>

<h3 id="memory-handling-and-zeroization">Gestione della memoria e azzeramento</h3>

<p>KeychainPGP è scritto in Rust e sfrutta le garanzie di azzeramento alla distruzione di Sequoia-PGP. Il modello di proprietà di Rust assicura che i dati sensibili vengano sovrascritti con zeri prima del rilascio della memoria.</p>

<h2 id="opsec-mode">Modalità OPSEC</h2>

<h3 id="window-title-disguise">Camuffamento del titolo della finestra</h3>
<p>In modalità OPSEC, KeychainPGP cambia il titolo della finestra in qualcosa di innocuo come "Calcolatrice" o "Note".</p>

<h3 id="ram-only-keys">Chiavi solo in RAM</h3>
<p>Le chiavi private vengono mantenute esclusivamente in RAM e non vengono mai scritte su disco.</p>

<h3 id="panic-wipe">Cancellazione di emergenza</h3>
<p>Azzera immediatamente tutto il materiale crittografico in memoria e cancella gli appunti.</p>

<h3 id="tor-proxy-support">Supporto proxy Tor</h3>
<p>Instrada le ricerche sui server di chiavi attraverso un proxy Tor SOCKS.</p>

<h2 id="clipboard-encryption-vs-file-encryption">Appunti vs. crittografia file</h2>

<table>
<tr><th>Aspetto</th><th>Crittografia appunti</th><th>Crittografia file</th></tr>
<tr><td><strong>Input/output</strong></td><td>Appunti del SO (memoria volatile)</td><td>File su disco (archiviazione persistente)</td></tr>
<tr><td><strong>Artefatti in chiaro</strong></td><td>Nessuno su disco</td><td>File originale, file temporanei possono persistere</td></tr>
<tr><td><strong>Supporto app</strong></td><td>Qualsiasi app con copia/incolla</td><td>Richiede accesso al filesystem</td></tr>
<tr><td><strong>Passaggi</strong></td><td>3 (copia, tasto rapido, incolla)</td><td>5+ (salva, esegui CLI, specifica output, apri, trasferisci)</td></tr>
<tr><td><strong>Impronta forense</strong></td><td>Minimale (solo RAM)</td><td>Significativa</td></tr>
</table>

<h2 id="threat-model">Modello di minaccia</h2>

<h3 id="what-clipboard-encryption-protects-against">Da cosa protegge</h3>
<ul>
<li><strong>Sorveglianza di rete.</strong> I messaggi crittografati sono opachi per chiunque monitori la rete.</li>
<li><strong>Intercettazione di email e messaggi.</strong> Senza la chiave privata, il contenuto è irrecuperabile.</li>
<li><strong>Compromissione dello storage.</strong> I messaggi PGP rimangono protetti anche in caso di violazione.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Da cosa non protegge</h3>
<ul>
<li><strong>Keylogger sul dispositivo.</strong> Possono catturare il testo in chiaro prima della crittografia.</li>
<li><strong>Accesso fisico a un dispositivo sbloccato.</strong></li>
<li><strong>Chiavi private compromesse.</strong></li>
<li><strong>Analisi del traffico.</strong> PGP crittografa il contenuto, non i pattern di comunicazione.</li>
</ul>

<p>Per un'introduzione più ampia, <a href="/it/docs/pgp-for-beginners/">PGP per principianti</a> copre i fondamentali.</p>

<h2 id="best-practices">Best practice per PGP dagli appunti</h2>

<ol>
<li><strong>Disattiva la cronologia degli appunti.</strong></li>
<li><strong>Mantieni attiva la cancellazione automatica.</strong> 5-15 secondi sono sufficienti.</li>
<li><strong>Usa la modalità OPSEC quando necessario.</strong></li>
<li><strong>Verifica le chiavi dei destinatari fuori banda.</strong></li>
<li><strong>Usa passphrase forti.</strong></li>
<li><strong>Mantieni il dispositivo sicuro.</strong> SO aggiornato e crittografia del disco.</li>
<li><strong>Preferisci chiavi Ed25519/X25519.</strong></li>
<li><strong>Testa il tuo flusso di lavoro.</strong></li>
</ol>

<p><a href="/it/pgp-online-encrypt/">Prova KeychainPGP nel browser</a> per vedere il workflow clipboard-first in azione.</p>
`
};

export default doc;
