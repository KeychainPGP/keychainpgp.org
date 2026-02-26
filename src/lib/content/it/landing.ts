import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Strumento di crittografia PGP online gratuito',
	heroSubtitle: 'Crittografa e decrittografa messaggi con OpenPGP direttamente nel tuo browser. Nessuna installazione, nessun account, nessun dato inviato a un server.',
	trustLine: 'Gratuito e open source. Licenza MIT / Apache-2.0. Nessuna telemetria.',
	ctaOpen: 'Apri lo strumento PGP nel browser',
	ctaHow: 'Come funziona',
	whatIsTitle: 'Cos\'è la crittografia PGP?',
	whatIsText: 'PGP (Pretty Good Privacy) è lo standard di riferimento per la crittografia di messaggi, e-mail e file. Utilizza la crittografia a chiave pubblica — condividi una chiave pubblica che chiunque può usare per crittografare messaggi a te destinati, e solo la tua chiave privata può decrittografarli. Creato nel 1991, PGP è utilizzato da giornalisti, ricercatori di sicurezza, attivisti e milioni di utenti in tutto il mondo. KeychainPGP rende PGP accessibile a tutti grazie a un\'interfaccia moderna e un workflow basato sugli appunti — senza riga di comando, senza configurazione, senza complessità.',
	howToTitle: 'Come crittografare un messaggio con PGP online',
	steps: [
		{ title: 'Apri lo strumento PGP online', text: 'Vai all\'applicazione web KeychainPGP. Si carica interamente nel tuo browser — nessuna installazione né account richiesto. Tutto funziona localmente tramite WebAssembly.' },
		{ title: 'Genera o importa una chiave PGP', text: 'Crea una nuova coppia di chiavi Ed25519 + X25519 (l\'opzione più moderna e sicura), oppure importa una chiave PGP esistente in formato ASCII.' },
		{ title: 'Importa la chiave pubblica del destinatario', text: 'Aggiungi la chiave pubblica del tuo contatto incollandola nella scheda Chiavi. È la chiave che servirà a crittografare i tuoi messaggi.' },
		{ title: 'Inserisci il tuo messaggio', text: 'Vai nella scheda Crittografa e digita o incolla il messaggio che desideri proteggere.' },
		{ title: 'Seleziona il destinatario e crittografa', text: 'Scegli il destinatario dalla tua lista di chiavi e clicca su "Crittografa negli appunti". Il messaggio crittografato PGP viene immediatamente copiato.' },
		{ title: 'Invia il messaggio crittografato', text: 'Incolla il messaggio crittografato in qualsiasi e-mail, chat o applicazione di messaggistica. Solo il destinatario previsto può decrittografarlo con la sua chiave privata.' }
	],
	featuresTitle: 'Perché usare KeychainPGP per la crittografia PGP?',
	features: [
		{ icon: '🌐', title: '100% nel browser', text: 'Tutto funziona localmente nel tuo browser tramite WebAssembly compilato da Rust. Zero comunicazione con il server. I tuoi messaggi e le tue chiavi non lasciano mai il tuo dispositivo.' },
		{ icon: '🔒', title: 'Crittografia moderna', text: 'Chiavi a curva ellittica Ed25519 + X25519 per impostazione predefinita. Basato su Sequoia-PGP, un\'implementazione Rust di OpenPGP senza dipendenze da OpenSSL.' },
		{ icon: '💻', title: 'Multi-piattaforma', text: 'Disponibile come applicazione web, oltre ad applicazioni native per Windows, macOS, Linux e Android. Le tue chiavi, ovunque.' },
		{ icon: '📂', title: 'Open source', text: 'Codice interamente verificabile con licenza MIT / Apache-2.0. Nessuna telemetria, nessun tracciamento, nessun account. Consulta il codice su GitHub.' },
		{ icon: '📋', title: 'Appunti al primo posto', text: 'Copia del testo, crittografa con una scorciatoia (Ctrl+Shift+E), incolla il messaggio crittografato. Funziona con qualsiasi applicazione — e-mail, chat, note, ovunque.' },
		{ icon: '⚡', title: 'Zero configurazione', text: 'Nessuna scelta di algoritmo, nessuna dimensione di chiave da decidere, nessun file di configurazione. Sicuro per impostazione predefinita. Genera una chiave e inizia a crittografare in pochi secondi.' }
	],
	desktopTitle: 'Ottieni l\'applicazione desktop per l\'uso quotidiano',
	desktopText: 'L\'applicazione web è perfetta per una crittografia rapida, ma l\'applicazione desktop offre un\'esperienza PGP completa con funzionalità di sicurezza aggiuntive:',
	desktopFeatures: [
		'Scorciatoie globali — Ctrl+Shift+E per crittografare, Ctrl+Shift+D per decrittografare, da qualsiasi applicazione',
		'Barra di sistema — Sempre disponibile nella barra delle applicazioni, funziona silenziosamente in background',
		'Cancellazione automatica degli appunti — Il testo decrittografato viene automaticamente rimosso dagli appunti dopo 30 secondi',
		'Modalità OPSEC — Nascondi il titolo della finestra, chiavi solo in RAM e pulsante di cancellazione d\'emergenza',
		'Archivio credenziali del sistema operativo — Chiavi archiviate in modo sicuro in Windows Credential Manager, macOS Keychain o Linux Secret Service',
		'Applicazione Android — La stessa interfaccia su mobile, con sincronizzazione delle chiavi tramite QR code tra dispositivi',
		'CLI — Strumento a riga di comando keychainpgp per scripting e automazione'
	],
	ctaDownload: 'Scarica KeychainPGP',
	ctaAllPlatforms: 'Tutte le piattaforme',
	learnMoreTitle: 'Scopri di più sulla crittografia PGP',
	learnMoreLinks: [
		{ href: '/it/docs/what-is-pgp/', title: 'Cos\'è PGP?', text: 'Guida completa su Pretty Good Privacy, crittografia a chiave pubblica e firme digitali.' },
		{ href: '/it/docs/how-to-use-pgp/', title: 'Come usare PGP', text: 'Tutorial passo dopo passo per generare chiavi, crittografare messaggi e verificare firme.' },
		{ href: '/it/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Comprendere la differenza tra PGP, GPG (GnuPG) e lo standard OpenPGP.' },
		{ href: '/it/docs/pgp-for-beginners/', title: 'PGP per principianti', text: 'Tutto quello che devi sapere sulla crittografia PGP, spiegato in modo semplice.' },
		{ href: '/it/docs/clipboard-encryption/', title: 'Crittografia tramite appunti', text: 'Come funziona la crittografia PGP tramite appunti, considerazioni sulla sicurezza e funzionalità OPSEC.' },
		{ href: '/it/blog/best-pgp-tools-2026/', title: 'I migliori strumenti PGP nel 2026', text: 'Confronto completo e classifica dei migliori software di crittografia PGP disponibili.' }
	]
};
