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
	faqTitle: 'Veelgestelde vragen',
	faqItems: [
		{ question: 'Is het veilig om PGP-berichten online te versleutelen?', answer: 'Ja, met de KeychainPGP-webapp. Alle versleuteling en ontsleuteling gebeurt lokaal in uw browser via WebAssembly gecompileerd vanuit Rust. Er worden geen gegevens naar een server verzonden. De applicatie draait volledig aan de clientzijde, uw berichten en sleutels verlaten nooit uw apparaat.' },
		{ question: 'Waarvoor dient PGP-versleuteling?', answer: 'PGP (Pretty Good Privacy) dient om privéberichten, e-mails, bestanden en digitale handtekeningen te beschermen. Het maakt gebruik van publieke-sleutelcryptografie: u versleutelt een bericht met iemands publieke sleutel, en alleen zijn privesleutel kan het ontsleutelen. PGP wordt breed gebruikt door journalisten, activisten, beveiligingsprofessionals en iedereen die bezorgd is over de vertrouwelijkheid van zijn communicatie.' },
		{ question: 'Hoe werkt PGP-versleuteling?', answer: 'PGP gebruikt een combinatie van symmetrische en asymmetrische cryptografie. Bij versleuteling genereert PGP een willekeurige sessiesleutel, versleutelt het bericht met deze sleutel via snelle symmetrische versleuteling, en versleutelt vervolgens de sessiesleutel met de publieke sleutel van de ontvanger. De ontvanger gebruikt zijn privesleutel om de sessiesleutel te ontsleutelen, en ontsleutelt vervolgens het bericht. KeychainPGP gebruikt moderne Ed25519 + X25519-sleutels voor dit proces.' },
		{ question: 'Wat is het verschil tussen PGP en GPG?', answer: 'PGP (Pretty Good Privacy) is de oorspronkelijke versleutelingsstandaard gemaakt door Phil Zimmermann in 1991. GPG (GNU Privacy Guard, of GnuPG) is een vrije en open source implementatie van de OpenPGP-standaard. OpenPGP is de IETF-standaard (RFC 4880) die het berichtformaat definieert. KeychainPGP implementeert de OpenPGP-standaard via de Sequoia-PGP-bibliotheek geschreven in Rust.' },
		{ question: 'Kan ik PGP gebruiken zonder software te installeren?', answer: 'Ja. KeychainPGP biedt een online PGP-tool die volledig in uw browser draait via WebAssembly. U kunt sleutels genereren, berichten versleutelen en ontsleutelen, en uw contacten beheren zonder iets te installeren. Voor dagelijks gebruik heeft KeychainPGP ook native desktopapplicaties (Windows, macOS, Linux) met globale sneltoetsen, een Android-app met QR-codesynchronisatie, en een CLI voor scripting.' },
		{ question: 'Welk versleutelingsalgoritme gebruikt KeychainPGP?', answer: 'KeychainPGP gebruikt Ed25519 voor digitale handtekeningen en X25519 voor sleuteluitwisseling — twee moderne algoritmen gebaseerd op elliptische-curvecryptografie. Ze bieden een beveiligingsniveau vergelijkbaar met RSA-3072 voor een fractie van de sleutelgrootte. De cryptografische bewerkingen worden aangedreven door Sequoia-PGP, een Rust-implementatie van OpenPGP zonder OpenSSL-afhankelijkheid.' },
		{ question: 'Is PGP-versleuteling nog veilig in 2026?', answer: 'Ja. PGP-versleuteling met moderne algoritmen (zoals Ed25519/X25519 gebruikt door KeychainPGP) blijft een van de meest robuuste versleutelingsstandaarden die beschikbaar zijn. De wiskundige grondslagen van elliptische-curvecryptografie zijn niet doorbroken. De veiligheid van PGP hangt af van goed sleutelbeheer, sterke wachtwoordzinnen en up-to-date implementaties.' },
		{ question: 'Hoe deel ik mijn publieke PGP-sleutel?', answer: 'U kunt uw publieke PGP-sleutel delen door deze te exporteren in ASCII-formaat (een tekstblok dat begint met -----BEGIN PGP PUBLIC KEY BLOCK-----). Stuur het per e-mail, plak het in een chat, publiceer het op uw website of deel het op een sleutelserver. In KeychainPGP gaat u naar het tabblad Sleutels en gebruikt u de exportfunctie om uw publieke sleutel te kopieren.' },
		{ question: 'Wat is PGP-klembordversleuteling?', answer: 'PGP-klembordversleuteling is een workflow waarbij u tekst naar uw klembord kopieert, het versleutelt of ontsleutelt met een sneltoets of knop, en het resultaat plakt. Deze aanpak werkt met elke applicatie — e-mail, chat, notities of elk tekstveld. KeychainPGP is rond deze aanpak ontworpen met globale sneltoetsen: Ctrl+Shift+E om te versleutelen en Ctrl+Shift+D om te ontsleutelen.' },
		{ question: 'Is KeychainPGP echt gratis en open source?', answer: 'Ja. KeychainPGP is 100% gratis en open source onder dubbele MIT/Apache-2.0-licentie. De broncode is publiek beschikbaar op GitHub. Er is geen betaalde versie, geen premiumfuncties, geen accounts, geen telemetrie en geen tracking.' }
	],
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
