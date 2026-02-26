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
