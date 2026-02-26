import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP voor beginners: eenvoudige gids om te starten met PGP-versleuteling',
	description: 'Leer PGP-versleuteling vanaf nul. Deze beginnersgids legt uit hoe PGP werkt, begeleidt u bij uw eerste versleutelde bericht en behandelt kernconcepten.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Waarom versleuteling belangrijk is', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'Wat is PGP, eenvoudig uitgelegd', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Kernconcepten die u moet kennen', level: 2 },
		{ id: 'public-key-your-address', text: 'Publieke sleutel: uw adres', level: 3 },
		{ id: 'private-key-your-password', text: 'Privesleutel: uw wachtwoord', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Versleuteling vs ondertekening', level: 3 },
		{ id: 'key-fingerprints', text: 'Sleutelvingerafdrukken', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Uw eerste PGP-bericht', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Veelvoorkomende beginnersfouten', level: 2 },
		{ id: 'next-steps', text: 'Volgende stappen', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP voor beginners: eenvoudige gids om te starten</h1>

<p>Beginnen met PGP is makkelijker dan u denkt. U genereert een sleutelpaar — \u00e9\u00e9n publiek, \u00e9\u00e9n priv\u00e9 — deelt de publieke sleutel met de personen waarmee u wilt communiceren, en gebruikt de privesleutel om berichten die zij u sturen te ontsleutelen. U hoeft geen software te installeren om het uit te proberen. Met een gratis <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> zoals KeychainPGP kunt u uw eerste bericht in minder dan vijf minuten versleutelen, rechtstreeks vanuit uw browser.</p>

<h2 id="why-encryption-matters">Waarom versleuteling belangrijk is</h2>

<p>Elke dag worden miljarden berichten via het internet verzonden. E-mails, chatberichten, documenten — de meeste worden in leesbare tekst verzonden, wat betekent dat iedereen die ze onderschept ze kan lezen. Dit geldt voor internetproviders, hackers op openbare wifi-netwerken en zelfs overheidssurveillanceprogramma's.</p>

<p><strong>Datalekken zijn geen zeldzame gebeurtenissen.</strong> Ze gebeuren voortdurend. Als uw berichten niet versleuteld zijn, worden ze opgeslagen in databases als leesbare tekst, wachtend op het volgende lek.</p>

<p>Versleuteling lost dit probleem op. Wanneer u een bericht versleutelt met PGP, wordt het omgezet in onleesbare tekens. Alleen de persoon met de juiste privesleutel kan het ontcijferen.</p>

<h2 id="what-is-pgp-explained-simply">Wat is PGP, eenvoudig uitgelegd</h2>

<p>PGP staat voor <strong>Pretty Good Privacy</strong>. Het werd in 1991 gemaakt door Phil Zimmermann en is uitgegroeid tot de wereldwijde standaard voor het versleutelen van berichten en bestanden.</p>

<p>Hier is de eenvoudigste manier om PGP te begrijpen. Denk eraan als een <strong>brievenbus met een gleuf</strong>.</p>

<p>Stel u een speciale brievenbus voor op straat. Iedereen kan langskomen en een brief door de gleuf werpen. Maar zodra de brief erin zit, kunt alleen u hem openen, want alleen u heeft de sleutel van de deur van de brievenbus.</p>

<ul>
<li>De <strong>gleuf van de brievenbus</strong> is uw <strong>publieke sleutel</strong>. U geeft deze aan iedereen die u een priv\u00e9bericht wil sturen. Het is veilig om deze te delen.</li>
<li>De <strong>sleutel van de brievenbus</strong> is uw <strong>privesleutel</strong>. U deelt deze nooit met iemand.</li>
</ul>

<p>Dit heet <strong>asymmetrische versleuteling</strong> — \u00e9\u00e9n sleutel vergrendelt, de andere ontgrendelt. Voor een diepere technische uitleg, lees onze uitgebreide gids over <a href="/nl/docs/what-is-pgp/">wat PGP is</a>.</p>

<h2 id="key-concepts-you-need-to-know">Kernconcepten die u moet kennen</h2>

<h3 id="public-key-your-address">Publieke sleutel: uw adres</h3>

<p>Uw publieke sleutel is als uw postadres. U verspreidt het vrijelijk zodat mensen u dingen kunnen sturen. In PGP deelt u uw publieke sleutel zodat anderen berichten kunnen versleutelen die alleen u kunt lezen.</p>

<h3 id="private-key-your-password">Privesleutel: uw wachtwoord</h3>

<p>Uw privesleutel is als de sleutel van uw voordeur. Het is het enige wat u in staat stelt berichten te openen die met uw publieke sleutel zijn versleuteld. U mag uw privesleutel <strong>nooit met iemand delen</strong>.</p>

<h3 id="encryption-vs-signing">Versleuteling vs ondertekening</h3>

<p>PGP kan twee dingen doen: <strong>versleutelen</strong> en <strong>ondertekenen</strong>.</p>

<ul>
<li><strong>Versleuteling</strong> — maakt een bericht onleesbaar zodat alleen de ontvanger het kan lezen. U gebruikt de publieke sleutel van de ontvanger om te versleutelen, en hij gebruikt zijn privesleutel om te ontsleutelen.</li>
<li><strong>Ondertekening</strong> — bewijst dat een bericht van u afkomstig is en niet is gewijzigd. U gebruikt uw eigen privesleutel om te ondertekenen, en iedereen met uw publieke sleutel kan de handtekening verifi\u00ebren.</li>
</ul>

<h3 id="key-fingerprints">Sleutelvingerafdrukken</h3>

<p>Een sleutelvingerafdruk is een korte tekenreeks die een PGP-sleutel uniek identificeert. Vingerafdrukken dienen om te <strong>verifi\u00ebren</strong> dat een publieke sleutel daadwerkelijk toebehoort aan de persoon die u denkt. Vergelijk altijd de vingerafdruk via een apart vertrouwd kanaal.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Wanneer u een PGP-sleutel of een versleuteld bericht ziet als een tekstblok dat begint met <code>-----BEGIN PGP MESSAGE-----</code>, is dat <strong>ASCII armor</strong>. Het is gewoon een manier om binaire gegevens te coderen in afdrukbare teksttekens, zodat u ze kunt kopi\u00ebren en plakken in e-mails, chatvensters of webformulieren.</p>

<h2 id="your-first-pgp-message">Uw eerste PGP-bericht</h2>

<p>Laten we de stappen doorlopen om uw eerste bericht te versleutelen met de <a href="https://keychainpgp.github.io">KeychainPGP-webapp</a>. Het is een gratis <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> die volledig in uw browser draait.</p>

<p><strong>Stap 1: Open de webapp.</strong> Ga naar <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. De applicatie laadt via WebAssembly, de PGP-engine draait lokaal op uw computer.</p>

<p><strong>Stap 2: Genereer uw sleutelpaar.</strong> In het tabblad Sleutels maakt u een nieuwe sleutel aan. KeychainPGP genereert een modern Ed25519 + X25519 sleutelpaar.</p>

<p><strong>Stap 3: Exporteer en deel uw publieke sleutel.</strong> Gebruik de exportfunctie om uw publieke sleutel in ASCII-armored-formaat te kopi\u00ebren.</p>

<p><strong>Stap 4: Importeer de publieke sleutel van de ontvanger.</strong> In het tabblad Sleutels plakt u het publieke-sleutelblok van uw contact.</p>

<p><strong>Stap 5: Schrijf en versleutel uw bericht.</strong> Ga naar het tabblad Versleutelen, typ uw bericht, selecteer de ontvanger en klik op <strong>"Versleutelen naar klembord"</strong>.</p>

<p><strong>Stap 6: Verstuur het versleutelde bericht.</strong> Plak de versleutelde tekst in een e-mail, chat of berichtenapplicatie.</p>

<p><strong>Stap 7: Ontsleutel een antwoord.</strong> Kopieer het versleutelde PGP-berichtblok, ga naar het tabblad Ontsleutelen, plak en klik op Ontsleutelen.</p>

<p>Voor een meer gedetailleerde gids, raadpleeg onze handleiding <a href="/nl/docs/how-to-use-pgp/">hoe PGP te gebruiken</a>.</p>

<h2 id="common-beginner-mistakes">Veelvoorkomende beginnersfouten</h2>

<p><strong>1. Uw privesleutel delen.</strong> Uw privesleutel mag nooit naar iemand worden gestuurd. Deel alleen uw <strong>publieke</strong> sleutel.</p>

<p><strong>2. Vingerafdrukken niet verifi\u00ebren.</strong> Verifieer altijd de sleutelvingerafdruk via een apart en vertrouwd kanaal — een telefoongesprek, videogesprek of persoonlijke ontmoeting.</p>

<p><strong>3. Privesleutel verliezen zonder back-up.</strong> Als u uw privesleutel verliest, is elk bericht dat met die sleutel is versleuteld voor altijd verloren. Maak een back-up van uw privesleutel op een veilige locatie.</p>

<p><strong>4. Geen herroepingscertificaat opslaan.</strong> Een herroepingscertificaat stelt u in staat publiekelijk te verklaren dat uw sleutel niet langer geldig is als deze is gecompromitteerd.</p>

<p><strong>5. Verouderde of zwakke sleutels gebruiken.</strong> Als u vandaag nieuwe sleutels genereert, gebruik dan moderne algoritmen. KeychainPGP gebruikt standaard Ed25519 + X25519.</p>

<h2 id="next-steps">Volgende stappen</h2>

<ul>
<li><strong>Lees de uitgebreide gids:</strong> <a href="/nl/docs/how-to-use-pgp/">Hoe PGP te gebruiken</a> behandelt ondertekening, verificatie, sleutelbeheer en geavanceerde onderwerpen.</li>
<li><strong>Begrijp wat PGP is:</strong> Voor een verdieping, lees <a href="/nl/docs/what-is-pgp/">Wat is PGP</a>.</li>
<li><strong>Leer klembordversleuteling:</strong> Ontdek hoe <a href="/nl/docs/clipboard-encryption/">klembordversleuteling</a> u in staat stelt PGP te gebruiken met elke applicatie.</li>
<li><strong>Probeer de online tool:</strong> Open de <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> en oefen.</li>
<li><strong>Haal de desktopapp:</strong> De <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGP-desktopapplicatie</a> voegt globale sneltoetsen, systeemvak en automatisch klembord wissen toe.</li>
</ul>

<h2 id="faq">Veelgestelde vragen</h2>

<h3>Is PGP moeilijk te leren?</h3>
<p>Nee. Het basisconcept is eenvoudig: \u00e9\u00e9n publieke sleutel om te delen, \u00e9\u00e9n privesleutel om geheim te houden. Het versleutelen van een bericht kost slechts enkele klikken met een moderne tool zoals KeychainPGP.</p>

<h3>Moet ik software installeren om PGP te gebruiken?</h3>
<p>Niet noodzakelijk. U kunt de <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> van KeychainPGP direct in uw browser gebruiken. Deze draait volledig op uw apparaat via WebAssembly.</p>

<h3>Kan iemand mijn versleutelde PGP-berichten kraken?</h3>
<p>Met moderne algoritmen (zoals Ed25519 + X25519 gebruikt door KeychainPGP) zou het kraken van de versleuteling door brute kracht langer duren dan de leeftijd van het universum met de huidige technologie. De echte risico's zijn praktisch: verlies van uw privesleutel, een zwakke wachtwoordzin gebruiken of malware op uw apparaat hebben.</p>

<h3>Wat is het verschil tussen PGP, GPG en OpenPGP?</h3>
<p><strong>PGP</strong> is het oorspronkelijke programma gemaakt in 1991. <strong>OpenPGP</strong> is de open standaard (RFC 4880) die de formaten definieert. <strong>GPG</strong> (GNU Privacy Guard) is een vrije implementatie van de OpenPGP-standaard. KeychainPGP is een andere implementatie, gebouwd op Sequoia-PGP in Rust. Ze zijn allemaal compatibel omdat ze dezelfde standaard volgen.</p>

<h3>Hoe deel ik mijn publieke sleutel?</h3>
<p>Exporteer uw publieke sleutel in ASCII-armored-formaat — het is een tekstblok dat begint met <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>. Plak het in een e-mail, publiceer het op uw website, deel het in een chat of upload het naar een sleutelserver. Vergeet niet de vingerafdrukken te verifi\u00ebren met uw contacten via een apart kanaal.</p>
`
};

export default doc;
