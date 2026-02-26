import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Kostenloses Online-PGP-Verschluesselungstool',
	heroSubtitle: 'Nachrichten mit OpenPGP direkt im Browser ver- und entschluesseln. Keine Installation, kein Konto, keine Daten an einen Server gesendet.',
	trustLine: 'Kostenlos und Open Source. MIT- / Apache-2.0-Lizenz. Keine Telemetrie.',
	ctaOpen: 'PGP-Tool im Browser oeffnen',
	ctaHow: 'So funktioniert es',
	whatIsTitle: 'Was ist PGP-Verschluesselung?',
	whatIsText: 'PGP (Pretty Good Privacy) ist der Goldstandard fuer die Verschluesselung von Nachrichten, E-Mails und Dateien. Es nutzt Public-Key-Kryptografie — Sie teilen einen oeffentlichen Schluessel, mit dem jeder Nachrichten an Sie verschluesseln kann, und nur Ihr privater Schluessel kann diese entschluesseln. Seit seiner Entstehung 1991 wird PGP von Journalisten, Sicherheitsforschern, Aktivisten und Millionen von Nutzern weltweit eingesetzt. KeychainPGP macht PGP fuer alle zugaenglich — mit einer modernen Oberflaeche und einem Zwischenablage-Workflow, ganz ohne Kommandozeile, Konfiguration oder Komplexitaet.',
	howToTitle: 'So verschluesseln Sie eine Nachricht mit PGP online',
	steps: [
		{ title: 'Online-PGP-Tool oeffnen', text: 'Rufen Sie die KeychainPGP-Webanwendung auf. Sie laeuft vollstaendig in Ihrem Browser — keine Installation und kein Konto noetig. Alles funktioniert lokal ueber WebAssembly.' },
		{ title: 'PGP-Schluessel generieren oder importieren', text: 'Erstellen Sie ein neues Ed25519- + X25519-Schluesselpaar (die modernste und sicherste Option) oder importieren Sie einen bestehenden PGP-Schluessel im ASCII-Format.' },
		{ title: 'Oeffentlichen Schluessel des Empfaengers importieren', text: 'Fuegen Sie den oeffentlichen Schluessel Ihres Kontakts im Tab Schluessel ein. Dieser Schluessel wird zum Verschluesseln Ihrer Nachrichten verwendet.' },
		{ title: 'Nachricht eingeben', text: 'Wechseln Sie zum Tab Verschluesseln und geben oder fuegen Sie die Nachricht ein, die Sie schuetzen moechten.' },
		{ title: 'Empfaenger auswaehlen und verschluesseln', text: 'Waehlen Sie den Empfaenger aus Ihrer Schluesselliste und klicken Sie auf "In Zwischenablage verschluesseln". Die verschluesselte PGP-Nachricht wird sofort kopiert.' },
		{ title: 'Verschluesselte Nachricht senden', text: 'Fuegen Sie die verschluesselte Nachricht in eine beliebige E-Mail, einen Chat oder eine Messaging-App ein. Nur der vorgesehene Empfaenger kann sie mit seinem privaten Schluessel entschluesseln.' }
	],
	featuresTitle: 'Warum KeychainPGP fuer PGP-Verschluesselung?',
	features: [
		{ icon: '🌐', title: '100 % im Browser', text: 'Alles laeuft lokal in Ihrem Browser ueber WebAssembly, kompiliert aus Rust. Keine Serverkommunikation. Ihre Nachrichten und Schluessel verlassen niemals Ihr Geraet.' },
		{ icon: '🔒', title: 'Moderne Kryptografie', text: 'Elliptische-Kurven-Schluessel Ed25519 + X25519 als Standard. Angetrieben von Sequoia-PGP, einer Rust-Implementierung von OpenPGP ohne OpenSSL-Abhaengigkeit.' },
		{ icon: '💻', title: 'Plattformuebergreifend', text: 'Verfuegbar als Web-App sowie als native Anwendung fuer Windows, macOS, Linux und Android. Ihre Schluessel — ueberall.' },
		{ icon: '📂', title: 'Open Source', text: 'Vollstaendig pruefbarer Quellcode unter MIT- / Apache-2.0-Lizenz. Keine Telemetrie, kein Tracking, keine Konten. Quellcode auf GitHub einsehbar.' },
		{ icon: '📋', title: 'Zwischenablage zuerst', text: 'Text kopieren, mit einem Tastenkuerzel (Ctrl+Shift+E) verschluesseln, verschluesselte Nachricht einfuegen. Funktioniert mit jeder Anwendung — E-Mail, Chat, Notizen, ueberall.' },
		{ icon: '⚡', title: 'Keine Konfiguration', text: 'Kein Algorithmus auszuwaehlen, keine Schluesselgroesse festzulegen, keine Konfigurationsdateien. Sicher ab Werk. Schluessel generieren und in Sekunden verschluesseln.' }
	],
	desktopTitle: 'Holen Sie sich die Desktop-App fuer den taeglichen Einsatz',
	desktopText: 'Die Web-App ist perfekt fuer schnelle Verschluesselung, aber die Desktop-App bietet ein vollstaendiges PGP-Erlebnis mit zusaetzlichen Sicherheitsfunktionen:',
	desktopFeatures: [
		'Globale Tastenkuerzel — Ctrl+Shift+E zum Verschluesseln, Ctrl+Shift+D zum Entschluesseln, aus jeder Anwendung heraus',
		'Taskleisten-Symbol — Immer verfuegbar in Ihrer Taskleiste, laeuft unauffaellig im Hintergrund',
		'Automatische Zwischenablage-Loesung — Entschluesselter Text wird nach 30 Sekunden automatisch aus der Zwischenablage entfernt',
		'OPSEC-Modus — Fenstertitel verbergen, Schluessel nur im RAM halten und Notfall-Loeschfunktion',
		'Betriebssystem-Anmeldeinformationsspeicher — Schluessel sicher im Windows Credential Manager, macOS Keychain oder Linux Secret Service gespeichert',
		'Android-App — Dieselbe Oberflaeche auf dem Smartphone, mit Schluesselsynchronisierung per QR-Code zwischen Geraeten',
		'CLI — Das Kommandozeilen-Tool keychainpgp fuer Scripting und Automatisierung'
	],
	ctaDownload: 'KeychainPGP herunterladen',
	ctaAllPlatforms: 'Alle Plattformen',
	faqTitle: 'Haeufig gestellte Fragen',
	faqItems: [
		{ question: 'Ist es sicher, PGP-Nachrichten online zu verschluesseln?', answer: 'Ja, mit der KeychainPGP-Webanwendung. Saemtliche Ver- und Entschluesselung findet lokal in Ihrem Browser ueber WebAssembly statt, kompiliert aus Rust. Es werden keine Daten an einen Server gesendet. Die Anwendung laeuft vollstaendig clientseitig — Ihre Nachrichten und Schluessel verlassen niemals Ihr Geraet.' },
		{ question: 'Wofuer wird PGP-Verschluesselung verwendet?', answer: 'PGP (Pretty Good Privacy) dient dem Schutz privater Nachrichten, E-Mails, Dateien und digitaler Signaturen. Es nutzt Public-Key-Kryptografie: Sie verschluesseln eine Nachricht mit dem oeffentlichen Schluessel einer Person, und nur deren privater Schluessel kann sie entschluesseln. PGP wird breit eingesetzt von Journalisten, Aktivisten, Sicherheitsexperten und allen, denen die Vertraulichkeit ihrer Kommunikation wichtig ist.' },
		{ question: 'Wie funktioniert PGP-Verschluesselung?', answer: 'PGP verwendet eine Kombination aus symmetrischer und asymmetrischer Kryptografie. Beim Verschluesseln erzeugt PGP einen zufaelligen Sitzungsschluessel, verschluesselt die Nachricht damit ueber ein schnelles symmetrisches Verfahren und verschluesselt anschliessend den Sitzungsschluessel mit dem oeffentlichen Schluessel des Empfaengers. Der Empfaenger nutzt seinen privaten Schluessel, um den Sitzungsschluessel zu entschluesseln, und entschluesselt dann die Nachricht. KeychainPGP verwendet dafuer moderne Ed25519- + X25519-Schluessel.' },
		{ question: 'Was ist der Unterschied zwischen PGP und GPG?', answer: 'PGP (Pretty Good Privacy) ist der urspruengliche Verschluesselungsstandard, den Phil Zimmermann 1991 entwickelte. GPG (GNU Privacy Guard, auch GnuPG) ist eine freie Open-Source-Implementierung des OpenPGP-Standards. OpenPGP ist der IETF-Standard (RFC 4880), der das Nachrichtenformat definiert. KeychainPGP implementiert den OpenPGP-Standard ueber die in Rust geschriebene Sequoia-PGP-Bibliothek.' },
		{ question: 'Kann man PGP ohne Softwareinstallation nutzen?', answer: 'Ja. KeychainPGP bietet ein Online-PGP-Tool, das vollstaendig in Ihrem Browser ueber WebAssembly laeuft. Sie koennen Schluessel generieren, Nachrichten ver- und entschluesseln und Ihre Kontakte verwalten, ohne etwas zu installieren. Fuer den taeglichen Gebrauch gibt es ausserdem native Desktop-Apps (Windows, macOS, Linux) mit globalen Tastenkuerzeln, eine Android-App mit QR-Code-Synchronisierung und ein CLI fuer Scripting.' },
		{ question: 'Welchen Verschluesselungsalgorithmus verwendet KeychainPGP?', answer: 'KeychainPGP verwendet Ed25519 fuer digitale Signaturen und X25519 fuer den Schluesselaustausch — zwei moderne Elliptische-Kurven-Algorithmen. Sie bieten eine Sicherheit vergleichbar mit RSA-3072 bei einem Bruchteil der Schluesselgroesse. Die kryptografischen Operationen werden von Sequoia-PGP angetrieben, einer Rust-Implementierung von OpenPGP ohne OpenSSL-Abhaengigkeit.' },
		{ question: 'Ist PGP-Verschluesselung 2026 noch sicher?', answer: 'Ja. PGP-Verschluesselung mit modernen Algorithmen (wie Ed25519/X25519 in KeychainPGP) gehoert nach wie vor zu den robustesten verfuegbaren Verschluesselungsstandards. Die mathematischen Grundlagen der Elliptische-Kurven-Kryptografie wurden nicht gebrochen. Die Sicherheit von PGP haengt von guter Schluesselverwaltung, starken Passphrasen und aktuellen Implementierungen ab.' },
		{ question: 'Wie teile ich meinen oeffentlichen PGP-Schluessel?', answer: 'Sie koennen Ihren oeffentlichen PGP-Schluessel im ASCII-Format exportieren (ein Textblock, der mit -----BEGIN PGP PUBLIC KEY BLOCK----- beginnt). Senden Sie ihn per E-Mail, fuegen Sie ihn in einen Chat ein, veroeffentlichen Sie ihn auf Ihrer Website oder laden Sie ihn auf einen Schluesselserver hoch. In KeychainPGP gehen Sie zum Tab Schluessel und nutzen die Exportfunktion, um Ihren oeffentlichen Schluessel zu kopieren.' },
		{ question: 'Was ist Zwischenablage-Verschluesselung mit PGP?', answer: 'Bei der PGP-Zwischenablage-Verschluesselung kopieren Sie Text in Ihre Zwischenablage, ver- oder entschluesseln ihn per Tastenkuerzel oder Knopfdruck und fuegen das Ergebnis ein. Dieser Ansatz funktioniert mit jeder Anwendung — E-Mail, Chat, Notizen oder beliebigen Textfeldern. KeychainPGP wurde um diesen Ansatz herum entwickelt, mit globalen Tastenkuerzeln: Ctrl+Shift+E zum Verschluesseln und Ctrl+Shift+D zum Entschluesseln.' },
		{ question: 'Ist KeychainPGP wirklich kostenlos und Open Source?', answer: 'Ja. KeychainPGP ist 100 % kostenlos und Open Source unter der Doppellizenz MIT/Apache-2.0. Der Quellcode ist oeffentlich auf GitHub verfuegbar. Es gibt keine kostenpflichtige Version, keine Premium-Funktionen, keine Konten, keine Telemetrie und kein Tracking.' }
	],
	learnMoreTitle: 'Mehr ueber PGP-Verschluesselung erfahren',
	learnMoreLinks: [
		{ href: '/de/docs/what-is-pgp/', title: 'Was ist PGP?', text: 'Umfassender Leitfaden zu Pretty Good Privacy, Public-Key-Kryptografie und digitalen Signaturen.' },
		{ href: '/de/docs/how-to-use-pgp/', title: 'PGP verwenden', text: 'Schritt-fuer-Schritt-Anleitung zum Generieren von Schluesseln, Verschluesseln von Nachrichten und Verifizieren von Signaturen.' },
		{ href: '/de/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Den Unterschied zwischen PGP, GPG (GnuPG) und dem OpenPGP-Standard verstehen.' },
		{ href: '/de/docs/pgp-for-beginners/', title: 'PGP fuer Einsteiger', text: 'Alles, was Sie ueber PGP-Verschluesselung wissen muessen — einfach erklaert.' },
		{ href: '/de/docs/clipboard-encryption/', title: 'Zwischenablage-Verschluesselung', text: 'Wie PGP-Zwischenablage-Verschluesselung funktioniert, Sicherheitsaspekte und OPSEC-Funktionen.' },
		{ href: '/de/blog/best-pgp-tools-2026/', title: 'Die besten PGP-Tools 2026', text: 'Umfassender Vergleich und Ranking der besten PGP-Verschluesselungsprogramme.' }
	]
};
