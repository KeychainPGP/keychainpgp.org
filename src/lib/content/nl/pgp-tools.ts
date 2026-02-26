import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Beste PGP-tools en versleutelingssoftware in 2026 — Uitgebreide gids',
	description: 'Uitgebreide gids over PGP-tools en versleutelingssoftware. Vergelijk desktop-, web-, mobiele en CLI OpenPGP-tools om de juiste te vinden voor uw behoeften.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'Wat zijn PGP-tools?', level: 2 },
		{ id: 'desktop-pgp-software', text: 'PGP-desktopsoftware', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'Online PGP-tools', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'Mobiele PGP-tools', level: 2 },
		{ id: 'cli-pgp-tools', text: 'PGP-commandoregeltools', level: 2 },
		{ id: 'email-pgp-integration', text: 'PGP-integratie in e-mail', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'PGP-tools vergelijking', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'De juiste PGP-tool kiezen', level: 2 },
		{ id: 'why-keychainpgp', text: 'Waarom KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'Aan de slag', level: 2 }
	],
	html: `
<h1>Beste PGP-tools en versleutelingssoftware in 2026</h1>

<p>Een breed scala aan PGP-tools is vandaag beschikbaar om berichten te versleutelen, bestanden te ondertekenen en OpenPGP-sleutels te beheren. Deze tools omvatten desktopapplicaties, webtools, mobiele apps, commandoregelinterfaces en e-mailplug-ins. Deze gids behandelt elke belangrijke categorie van PGP-software om u te helpen een weloverwogen keuze te maken.</p>

<h2 id="what-are-pgp-tools">Wat zijn PGP-tools?</h2>

<p>PGP-tools zijn softwaretoepassingen die de <a href="/nl/docs/what-is-pgp/">OpenPGP-standaard</a> (RFC 4880 en opvolgers) implementeren voor publieke-sleutelcryptografie. Ze stellen u in staat om sleutelparen te genereren, berichten te versleutelen en ontsleutelen, digitale handtekeningen te maken en verifi\u00ebren, en sleutelbossen te beheren. Het begrijpen van het <a href="/nl/docs/pgp-vs-gpg/">verschil tussen PGP en GPG</a> helpt te verduidelijken waarom er zoveel verschillende tools bestaan.</p>

<h2 id="desktop-pgp-software">PGP-desktopsoftware</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong> (GNU Privacy Guard) is de open source referentie-implementatie van de OpenPGP-standaard. Beschikbaar op vrijwel alle besturingssystemen, is het uiterst krachtig maar hoofdzakelijk een commandoregeltool. Het ondersteunt RSA, DSA, ECDSA, EdDSA en een breed scala aan symmetrische versleutelingen.</p>

<ul>
<li><strong>Platformen:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>Interface:</strong> Commandoregel (met optionele GUI-frontends)</li>
<li><strong>Licentie:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong> bundelt GnuPG met een native Windows grafische interface genaamd Kleopatra. Het biedt certificaatbeheer, bestandsversleuteling via Windows Verkenner-integratie en S/MIME-ondersteuning naast OpenPGP.</p>

<ul>
<li><strong>Platformen:</strong> Windows</li>
<li><strong>Licentie:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong> is het macOS-equivalent van Gpg4win. Het bevat GPG Keychain voor sleutelbeheer, een GPGServices-contextmenu en GPG Mail voor integratie met Apple Mail.</p>

<ul>
<li><strong>Platformen:</strong> macOS</li>
<li><strong>Licentie:</strong> Open source (betaalde Mail-plug-in)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong> hanteert een fundamenteel andere benadering van PGP-versleuteling. In plaats van GnuPG in een grafische interface te verpakken, gebruikt het de <strong>Sequoia-PGP</strong>-bibliotheek geschreven in Rust om een moderne, op het klembord gebaseerde workflow te bieden. U kopieert tekst, drukt op een globale sneltoets (<code>Ctrl+Shift+E</code> om te versleutelen, <code>Ctrl+Shift+D</code> om te ontsleutelen), en plakt het resultaat — dit werkt met elke applicatie op uw systeem.</p>

<ul>
<li><strong>Platformen:</strong> Windows, macOS, Linux, Android, Web, CLI</li>
<li><strong>Interface:</strong> GUI met systeemvak + globale sneltoetsen + CLI</li>
<li><strong>Licentie:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">Online PGP-tools</h2>

<p>De <a href="/nl/pgp-online-encrypt/">KeychainPGP-webapp</a> compileert dezelfde Sequoia-PGP Rust-engine naar WebAssembly, zodat alle cryptografische bewerkingen lokaal in uw browser plaatsvinden. Er worden geen gegevens naar een server verzonden. <strong>Mailvelope</strong> is een browserextensie die OpenPGP-versleuteling rechtstreeks integreert in webmailproviders zoals Gmail en Outlook.com.</p>

<h2 id="mobile-pgp-tools">Mobiele PGP-tools</h2>

<p><strong>OpenKeychain</strong> is een volwassen en open source OpenPGP-applicatie voor Android, met integratie in K-9 Mail. <strong>KeychainPGP voor Android</strong> brengt dezelfde moderne cryptografie naar mobiel, met Ed25519/X25519-sleutelgeneratie en sleutelsynchronisatie via QR-code met de desktopapplicatie.</p>

<h2 id="cli-pgp-tools">PGP-commandoregeltools</h2>

<p><strong>GnuPG</strong> (<code>gpg</code>) is de dominante CLI-tool. <strong>KeychainPGP</strong> biedt zijn eigen CLI (<code>keychainpgp</code>) met opdrachten voor sleutelgeneratie, versleuteling, ontsleuteling, ondertekening, verificatie, sleutelinspectie en sleutelbosbeheer. <strong>Sequoia-PGP</strong> biedt ook <code>sq</code>, een andere moderne op Rust gebaseerde CLI.</p>

<h2 id="email-pgp-integration">PGP-integratie in e-mail</h2>

<p><strong>Mozilla Thunderbird</strong> heeft sinds versie 78 ingebouwde native OpenPGP-ondersteuning. <strong>ProtonMail</strong> biedt end-to-end-versleuteling met OpenPGP onder de motorkap, maar abstraheert al het sleutelbeheer.</p>

<h2 id="pgp-tools-comparison">PGP-tools vergelijking</h2>

<table>
<tr><th>Tool</th><th>Platformen</th><th>Interface</th><th>Standaardsleutels</th><th>Open Source</th><th>Ideaal voor</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>Ja (GPLv3)</td><td>Gevorderde gebruikers, scripting</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>Ja (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>Gedeeltelijk</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + Sneltoetsen + CLI</td><td>Ed25519/X25519</td><td>Ja (MIT/Apache-2.0)</td><td>Klembordworkflow</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>Browserextensie</td><td>Webmail-overlay</td><td>RSA-4096</td><td>Ja (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>Native GUI</td><td>RSA-3072</td><td>Ja (GPLv3)</td><td>Android-sleutelbeheer</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>E-mailclient</td><td>RSA-3072</td><td>Ja (MPL 2.0)</td><td>Versleutelde e-mail</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>Webmail</td><td>X25519</td><td>Gedeeltelijk</td><td>Zero-config e-mail</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">De juiste PGP-tool kiezen</h2>

<h3>Gebruiksgemak</h3>
<p>Traditionele tools zoals GnuPG zijn ontworpen voor technische gebruikers. KeychainPGP elimineert algoritmekeuzes en configuratiebestanden — genereer een sleutel en begin direct met versleutelen.</p>

<h3>Beveiliging en cryptografische standaardinstellingen</h3>
<p>Moderne tools zoals KeychainPGP en Sequoia's <code>sq</code> gebruiken standaard <strong>Ed25519/X25519</strong>, die een vergelijkbare of hogere beveiliging bieden met veel kleinere sleutels. De onderliggende bibliotheek telt ook: Sequoia-PGP (Rust) biedt sterke geheugenbeveiliging.</p>

<h3>Platformdekking</h3>
<p>KeychainPGP dekt Windows, macOS, Linux, Android en het web met een consistente interface. GnuPG is overal beschikbaar maar vereist verschillende GUI-frontends op elk platform.</p>

<h2 id="why-keychainpgp">Waarom KeychainPGP</h2>

<p>KeychainPGP is ontworpen om de problemen op te lossen die PGP-versleuteling jarenlang ontoegankelijk maakten:</p>

<ul>
<li><strong>Klembordworkflow.</strong> In plaats van te integreren met \u00e9\u00e9n enkele applicatie, werkt KeychainPGP met <em>alle</em> applicaties. Kopieer tekst, versleutel of ontsleutel met \u00e9\u00e9n sneltoets, en plak het resultaat.</li>
<li><strong>Standaard moderne cryptografie.</strong> <strong>Ed25519</strong>-handtekeningsleutels en <strong>X25519</strong>-versleutelingssubsleutels automatisch.</li>
<li><strong>Multiplatform met \u00e9\u00e9n codebase.</strong> Desktopapplicatie gebouwd met Tauri, webapp gecompileerd via WebAssembly. Identieke interface en cryptografisch gedrag op Windows, macOS, Linux, Android of browser.</li>
<li><strong>Aangedreven door Sequoia-PGP.</strong> Cryptografische engine in Rust met geheugenbeveiliging die hele klassen kwetsbaarheden elimineert.</li>
<li><strong>Echt vrij en open source.</strong> MIT / Apache-2.0-licentie zonder betaalde niveaus, zonder accounts, zonder telemetrie.</li>
</ul>

<h2 id="getting-started">Aan de slag</h2>

<ul>
<li><strong>Probeer nu</strong> zonder installatie: open de <a href="/nl/pgp-online-encrypt/">KeychainPGP online PGP-tool</a> in uw browser.</li>
<li><strong>Leer de basisprincipes</strong>: lees <a href="/nl/docs/what-is-pgp/">Wat is PGP?</a></li>
<li><strong>Begrijp het ecosysteem</strong>: ons artikel over <a href="/nl/docs/pgp-vs-gpg/">PGP vs GPG</a> legt uit hoe de standaard, het protocol en de tools samenhangen.</li>
<li><strong>Vergelijk uw opties</strong>: zie onze ranglijst van de <a href="/nl/blog/best-pgp-tools-2026/">beste PGP-tools van 2026</a> of de <a href="/nl/blog/pgp-software-comparison/">uitgebreide PGP-softwarevergelijking</a>.</li>
<li><strong>Download KeychainPGP</strong>: haal de desktopapplicatie op via <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a>.</li>
</ul>
`
};

export default doc;
