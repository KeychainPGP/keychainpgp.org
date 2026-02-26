import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Gratis online PGP-versleutelingstool',
	heroSubtitle: 'Versleutel en ontsleutel berichten met OpenPGP rechtstreeks in uw browser. Geen installatie, geen account, geen gegevens naar een server verzonden.',
	trustLine: 'Gratis en open source. MIT / Apache-2.0-licentie. Geen telemetrie.',
	ctaOpen: 'PGP-tool openen in de browser',
	ctaHow: 'Hoe werkt het',
	whatIsTitle: 'Wat is PGP-versleuteling?',
	whatIsText: 'PGP (Pretty Good Privacy) is de standaard voor het versleutelen van berichten, e-mails en bestanden. Het maakt gebruik van publieke-sleutelcryptografie — u deelt een publieke sleutel die iedereen kan gebruiken om berichten voor u te versleutelen, en alleen uw privesleutel kan ze ontsleutelen. PGP werd in 1991 gemaakt en wordt wereldwijd gebruikt door journalisten, beveiligingsonderzoekers, activisten en miljoenen gebruikers. KeychainPGP maakt PGP toegankelijk voor iedereen dankzij een moderne interface en een op het klembord gebaseerde workflow — geen commandoregel, geen configuratie, geen complexiteit.',
	howToTitle: 'Hoe versleutel ik een bericht met PGP online',
	steps: [
		{ title: 'Open de online PGP-tool', text: 'Ga naar de KeychainPGP-webapplicatie. Deze draait volledig in uw browser — geen installatie of account vereist. Alles werkt lokaal via WebAssembly.' },
		{ title: 'Genereer of importeer een PGP-sleutel', text: 'Maak een nieuw Ed25519 + X25519 sleutelpaar aan (de meest moderne en veilige optie), of importeer een bestaande PGP-sleutel in ASCII-formaat.' },
		{ title: 'Importeer de publieke sleutel van de ontvanger', text: 'Voeg de publieke sleutel van uw contact toe door deze in het tabblad Sleutels te plakken. Deze sleutel wordt gebruikt om uw berichten te versleutelen.' },
		{ title: 'Voer uw bericht in', text: 'Ga naar het tabblad Versleutelen en typ of plak het bericht dat u wilt beschermen.' },
		{ title: 'Selecteer de ontvanger en versleutel', text: 'Kies de ontvanger uit uw sleutellijst en klik op "Versleutelen naar klembord". Het versleutelde PGP-bericht wordt direct gekopieerd.' },
		{ title: 'Verstuur het versleutelde bericht', text: 'Plak het versleutelde bericht in een e-mail, chat of berichtenapplicatie. Alleen de beoogde ontvanger kan het ontsleutelen met zijn privesleutel.' }
	],
	featuresTitle: 'Waarom KeychainPGP gebruiken voor PGP-versleuteling?',
	features: [
		{ icon: '🌐', title: '100% in de browser', text: 'Alles draait lokaal in uw browser via WebAssembly gecompileerd vanuit Rust. Geen servercommunicatie. Uw berichten en sleutels verlaten nooit uw apparaat.' },
		{ icon: '🔒', title: 'Moderne cryptografie', text: 'Elliptische-curvesleutels Ed25519 + X25519 standaard. Aangedreven door Sequoia-PGP, een Rust-implementatie van OpenPGP zonder afhankelijkheid van OpenSSL.' },
		{ icon: '💻', title: 'Multiplatform', text: 'Beschikbaar als webapp, plus native applicaties voor Windows, macOS, Linux en Android. Uw sleutels, overal.' },
		{ icon: '📂', title: 'Open source', text: 'Volledig controleerbare code onder MIT / Apache-2.0-licentie. Geen telemetrie, geen tracking, geen accounts. Bekijk de code op GitHub.' },
		{ icon: '📋', title: 'Klembord-eerst', text: 'Kopieer tekst, versleutel met een sneltoets (Ctrl+Shift+E), plak het versleutelde bericht. Werkt met elke applicatie — e-mail, chat, notities, overal.' },
		{ icon: '⚡', title: 'Geen configuratie', text: 'Geen algoritmekeuze, geen sleutelgrootte bepalen, geen configuratiebestanden. Standaard veilig. Genereer een sleutel en begin binnen seconden met versleutelen.' }
	],
	desktopTitle: 'Download de desktopapplicatie voor dagelijks gebruik',
	desktopText: 'De webapp is perfect voor snelle versleuteling, maar de desktopapplicatie biedt een volledige PGP-ervaring met extra beveiligingsfuncties:',
	desktopFeatures: [
		'Globale sneltoetsen — Ctrl+Shift+E om te versleutelen, Ctrl+Shift+D om te ontsleutelen, vanuit elke applicatie',
		'Systeemvak — Altijd beschikbaar in uw taakbalk, draait stil op de achtergrond',
		'Automatisch klembord wissen — Ontsleutelde tekst wordt automatisch na 30 seconden uit het klembord verwijderd',
		'OPSEC-modus — Verberg de venstertitel, sleutels alleen in RAM en noodverwijderknop',
		'OS-referentieopslag — Sleutels veilig opgeslagen in Windows Credential Manager, macOS Keychain of Linux Secret Service',
		'Android-app — Dezelfde interface op mobiel, met sleutelsynchronisatie via QR-code tussen apparaten',
		'CLI — Commandoregeltool keychainpgp voor scripting en automatisering'
	],
	ctaDownload: 'KeychainPGP downloaden',
	ctaAllPlatforms: 'Alle platformen',
	learnMoreTitle: 'Meer leren over PGP-versleuteling',
	learnMoreLinks: [
		{ href: '/nl/docs/what-is-pgp/', title: 'Wat is PGP?', text: 'Uitgebreide gids over Pretty Good Privacy, publieke-sleutelcryptografie en digitale handtekeningen.' },
		{ href: '/nl/docs/how-to-use-pgp/', title: 'Hoe PGP te gebruiken', text: 'Stapsgewijze handleiding voor het genereren van sleutels, versleutelen van berichten en verifi\u00ebren van handtekeningen.' },
		{ href: '/nl/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Begrijp het verschil tussen PGP, GPG (GnuPG) en de OpenPGP-standaard.' },
		{ href: '/nl/docs/pgp-for-beginners/', title: 'PGP voor beginners', text: 'Alles wat u moet weten over PGP-versleuteling, eenvoudig uitgelegd.' },
		{ href: '/nl/docs/clipboard-encryption/', title: 'Klembordversleuteling', text: 'Hoe PGP-klembordversleuteling werkt, beveiligingsoverwegingen en OPSEC-functies.' },
		{ href: '/nl/blog/best-pgp-tools-2026/', title: 'Beste PGP-tools in 2026', text: 'Uitgebreide vergelijking en ranglijst van de beste PGP-versleutelingssoftware die beschikbaar is.' }
	]
};
