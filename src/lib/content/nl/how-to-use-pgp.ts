import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Hoe PGP te gebruiken: stapsgewijze versleutelingshandleiding (2026)',
	description: 'Leer stap voor stap hoe u PGP-versleuteling gebruikt. Genereer sleutels, versleutel en ontsleutel berichten, onderteken en verifieer gegevens met deze uitgebreide PGP-handleiding.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Hoe PGP te gebruiken', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Wat u nodig heeft', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Stap 1: Een sleutelpaar genereren', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Stap 2: Uw publieke sleutel delen', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Stap 3: Sleutels van uw contacten importeren', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Stap 4: Een bericht versleutelen', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Stap 5: Een bericht ontsleutelen', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Stap 6: Een bericht ondertekenen', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Stap 7: Een handtekening verifi\u00ebren', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGP-klembordworkflow', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Webapp vs desktopapp', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>Hoe PGP te gebruiken</h1>

<p>Om PGP te gebruiken genereert u een sleutelpaar (een publieke sleutel en een privesleutel), deelt u uw publieke sleutel met de personen waarmee u wilt communiceren, importeert u hun publieke sleutels, en gebruikt u deze sleutels om berichten te versleutelen, ontsleutelen, ondertekenen en verifi\u00ebren. PGP-versleuteling garandeert dat alleen de beoogde ontvanger uw bericht kan lezen, terwijl digitale handtekeningen bewijzen dat een bericht daadwerkelijk van u afkomstig is. Tools zoals <a href="/nl/pgp-online-encrypt/">KeychainPGP</a> maken dit proces toegankelijk dankzij een op het klembord gebaseerde workflow — zonder commandoregel.</p>

<p>Deze PGP-handleiding begeleidt u bij elke stap, van het genereren van uw eerste sleutelpaar tot het verzenden en ontvangen van versleutelde berichten. Als u nieuw bent in het concept van publieke-sleutelcryptografie, overweeg dan eerst <a href="/nl/docs/what-is-pgp/">Wat is PGP?</a> of <a href="/nl/docs/pgp-for-beginners/">PGP voor beginners</a> te lezen.</p>

<hr>

<h2 id="what-you-need-before-you-start">Wat u nodig heeft voordat u begint</h2>

<p>Voordat u uw eerste bericht met PGP versleutelt, heeft u een PGP-applicatie nodig:</p>

<ul>
<li><strong>KeychainPGP-webapp</strong> — Open de <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> in elke moderne browser. Alles draait lokaal via WebAssembly gecompileerd vanuit Rust. Geen installatie, geen account, geen gegevens naar een server verzonden.</li>
<li><strong>KeychainPGP-desktopapplicatie</strong> — Download de native applicatie voor Windows, macOS, Linux of Android van de <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub-releasepagina</a>. De desktopapplicatie voegt globale sneltoetsen, systeemvakintegratie, automatisch klembord wissen en QR-codesynchronisatie toe.</li>
<li><strong>KeychainPGP CLI</strong> — De <code>keychainpgp</code> CLI biedt opdrachten voor sleutelgeneratie, versleuteling, ontsleuteling, ondertekening, verificatie en sleutelbeheer. Ideaal voor scripting en automatisering.</li>
<li><strong>GnuPG (GPG)</strong> — De traditionele commandoregeltool. Krachtig maar vereist vertrouwdheid met de terminal. Zie <a href="/nl/docs/pgp-vs-gpg/">PGP vs GPG</a> voor een gedetailleerde vergelijking.</li>
</ul>

<blockquote><p><strong>Tip:</strong> Als u PGP-versleuteling nu wilt uitproberen zonder iets te installeren, open dan de <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> en volg deze handleiding.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Stap 1: Een PGP-sleutelpaar genereren</h2>

<p>Een PGP-sleutelpaar bestaat uit twee wiskundig verbonden sleutels:</p>

<ul>
<li><strong>Publieke sleutel</strong> — U deelt deze vrijelijk. Iedereen kan deze gebruiken om berichten voor u te versleutelen of uw handtekeningen te verifi\u00ebren.</li>
<li><strong>Privesleutel</strong> — U houdt deze geheim. Deze ontsleutelt berichten die met uw publieke sleutel zijn versleuteld en maakt digitale handtekeningen.</li>
</ul>

<h3>Een sleutel genereren in KeychainPGP</h3>

<ol>
<li>Open KeychainPGP (webapp of desktopapp).</li>
<li>Navigeer naar het tabblad <strong>Sleutels</strong>.</li>
<li>Klik op <strong>Nieuwe sleutel genereren</strong>.</li>
<li>Voer uw naam en e-mailadres in.</li>
<li>Klik op <strong>Genereren</strong>. KeychainPGP maakt een <strong>Ed25519 + X25519</strong> sleutelpaar aan — het meest moderne en veilige algoritme beschikbaar in OpenPGP.</li>
</ol>

<h3>Een sleutel genereren met GPG (commandoregel)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Selecteer het sleuteltype (RSA of ECC), de grootte en de verloopdatum. Kies voor moderne beveiliging Ed25519 als uw versie van GPG dit ondersteunt.</p>

<hr>

<h2 id="step-2-share-your-public-key">Stap 2: Uw publieke sleutel delen</h2>

<p>Uw publieke sleutel is een tekstblok in <strong>ASCII-armored</strong>-formaat. U kunt deze overal delen:</p>

<ul>
<li><strong>E-mail</strong> — Plak deze in de tekst van een e-mail of voeg hem toe als <code>.asc</code>-bestand.</li>
<li><strong>Berichtenapplicaties</strong> — Verstuur via Signal, WhatsApp, Matrix of elk chatplatform.</li>
<li><strong>Uw website</strong> — Publiceer op uw persoonlijke site, GitHub-profiel of Twitter-bio.</li>
<li><strong>Sleutelservers</strong> — Upload naar een publieke sleutelserver zoals <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Belangrijk:</strong> Deel alleen uw <strong>publieke</strong> sleutel. Deel nooit uw privesleutel met wie dan ook, onder geen enkele omstandigheid.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Stap 3: De publieke sleutels van uw contacten importeren</h2>

<p>Voordat u een versleuteld bericht naar iemand kunt sturen, heeft u diens publieke sleutel nodig. Vraag uw contact om u zijn ASCII-armored publieke sleutel te sturen, of zoek deze op een sleutelserver.</p>

<h3>Een sleutel importeren in KeychainPGP</h3>

<ol>
<li>Kopieer het publieke-sleutelblok van het contact naar uw klembord.</li>
<li>Open KeychainPGP en ga naar het tabblad <strong>Sleutels</strong>.</li>
<li>Klik op <strong>Sleutel importeren</strong> en plak de sleutel.</li>
<li>Het contact verschijnt in uw sleutellijst met naam en e-mailadres.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Stap 4: Een bericht versleutelen</h2>

<h3>Versleuteling in KeychainPGP (web of desktop)</h3>

<ol>
<li>Ga naar het tabblad <strong>Versleutelen</strong>.</li>
<li>Typ of plak het bericht dat u wilt versleutelen.</li>
<li>Selecteer de ontvanger uit uw sleutellijst.</li>
<li>Klik op <strong>Versleutelen naar klembord</strong>. Het versleutelde bericht wordt naar uw klembord gekopieerd.</li>
<li>Plak het versleutelde bericht in uw e-mail, chat of elk ander communicatiekanaal.</li>
</ol>

<h3>Versleuteling met de desktopsneltoets</h3>

<p>Met de KeychainPGP-desktopapplicatie is het proces nog sneller dankzij de <a href="/nl/docs/clipboard-encryption/">klembordworkflow</a>:</p>

<ol>
<li>Typ uw bericht in een willekeurige applicatie.</li>
<li>Selecteer en kopieer de tekst (<code>Ctrl+C</code>).</li>
<li>Druk op <strong><code>Ctrl+Shift+E</code></strong> — KeychainPGP versleutelt de klembordinhoud.</li>
<li>Plak het versleutelde bericht (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Stap 5: Een bericht ontsleutelen</h2>

<h3>Ontsleuteling in KeychainPGP (web of desktop)</h3>

<ol>
<li>Kopieer het volledige versleutelde berichtblok.</li>
<li>Ga naar het tabblad <strong>Ontsleutelen</strong> van KeychainPGP.</li>
<li>Plak de versleutelde tekst.</li>
<li>Klik op <strong>Ontsleutelen</strong>. De leesbare tekst verschijnt onmiddellijk.</li>
</ol>

<h3>Ontsleuteling met de desktopsneltoets</h3>

<ol>
<li>Selecteer en kopieer het versleutelde berichtblok (<code>Ctrl+C</code>).</li>
<li>Druk op <strong><code>Ctrl+Shift+D</code></strong> — KeychainPGP ontsleutelt de klembordinhoud.</li>
<li>De leesbare tekst vervangt de versleutelde tekst in uw klembord. Plak deze waar u wilt.</li>
</ol>

<p>De desktopapplicatie beschikt ook over <strong>automatisch klembord wissen</strong>: na 30 seconden wordt de ontsleutelde tekst automatisch uit het klembord verwijderd.</p>

<hr>

<h2 id="step-6-sign-a-message">Stap 6: Een bericht ondertekenen</h2>

<p>Een digitale PGP-handtekening bewijst twee dingen:</p>

<ol>
<li><strong>Authenticiteit</strong> — Het bericht is geschreven door de houder van de ondertekeningssleutel.</li>
<li><strong>Integriteit</strong> — Het bericht is niet gewijzigd sinds het is ondertekend.</li>
</ol>

<p>Ondertekenen versleutelt het bericht niet. Iedereen kan een ondertekend bericht lezen, maar kan verifi\u00ebren dat het van u afkomstig is en niet is vervalst.</p>

<h3>Wanneer berichten ondertekenen</h3>

<ul>
<li>Softwarereleases of beveiligingsadviezen aankondigen</li>
<li>Uw identiteit verifi\u00ebren op openbare forums</li>
<li>E-mails ondertekenen om hun herkomst te bewijzen</li>
<li>Git-commits ondertekenen voor code-integriteit</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Stap 7: Een handtekening verifi\u00ebren</h2>

<p>Wanneer u een ondertekend bericht ontvangt, kunt u verifi\u00ebren dat het authentiek en niet gewijzigd is.</p>

<h3>Verificatie in KeychainPGP</h3>

<ol>
<li>Kopieer het volledige ondertekende bericht (inclusief het handtekeningblok).</li>
<li>Ga naar het tabblad <strong>Verifi\u00ebren</strong>.</li>
<li>Plak het ondertekende bericht.</li>
<li>Klik op <strong>Verifi\u00ebren</strong>. KeychainPGP bevestigt of de handtekening geldig is.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGP-klembordworkflow</h2>

<p>Wat KeychainPGP onderscheidt van traditionele PGP-tools is zijn <a href="/nl/docs/clipboard-encryption/">klembordversleutelingsworkflow</a>. In plaats van met bestanden te werken of een speciale e-mailclient te vereisen, werkt KeychainPGP met elke applicatie via het systeemklembord.</p>

<table>
<tr><th>Actie</th><th>Webapp</th><th>Desktopapp</th></tr>
<tr><td>Versleutelen</td><td>Tekst plakken, klik op Versleutelen</td><td>Tekst kopi\u00ebren, druk op <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Ontsleutelen</td><td>Versleutelde tekst plakken, klik op Ontsleutelen</td><td>Versleutelde tekst kopi\u00ebren, druk op <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Ondertekenen</td><td>Tekst plakken, klik op Ondertekenen</td><td>Beschikbaar in het applicatievenster</td></tr>
<tr><td>Verifi\u00ebren</td><td>Ondertekende tekst plakken, klik op Verifi\u00ebren</td><td>Beschikbaar in het applicatievenster</td></tr>
</table>

<p>Extra beveiligingsfuncties van de desktopapplicatie:</p>

<ul>
<li><strong>Automatisch klembord wissen</strong> — Ontsleutelde tekst wordt na 30 seconden uit het klembord verwijderd.</li>
<li><strong>OPSEC-modus</strong> — Vermomde venstertitel, sleutelopslag alleen in RAM en noodverwijderknop.</li>
<li><strong>OS-referentieopslag</strong> — Privesleutels worden veilig opgeslagen via Windows Credential Manager, macOS Keychain of Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Webapp vs desktopapp</h2>

<p><strong>Webapp</strong> (<a href="/nl/pgp-online-encrypt/">online PGP-tool</a>):</p>

<ul>
<li>Draait volledig in de browser via WebAssembly</li>
<li>Geen installatie, geen account vereist</li>
<li>Perfect voor snelle versleutelingstaken</li>
<li>Sleutels worden opgeslagen in de lokale opslag van de browser</li>
</ul>

<p><strong>Desktopapplicatie</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Globale sneltoetsen voor versleutelen en ontsleutelen</li>
<li>Systeemvakintegratie</li>
<li>Automatisch klembord wissen</li>
<li>OPSEC-modus met sleutels alleen in RAM en noodverwijdering</li>
<li>Veilige sleutelopslag via de referentiebeheerder van het OS</li>
<li>Beter geschikt voor dagelijks gebruik en langetermijnsleutelbeheer</li>
</ul>

<p>Beide applicaties zijn gratis, open source (MIT / Apache-2.0) en zonder enige telemetrie.</p>

<hr>

<h2 id="frequently-asked-questions">Veelgestelde vragen</h2>

<h3>Moet ik mijn privesleutel delen?</h3>

<p>Nee. U mag uw privesleutel <strong>nooit</strong> met iemand delen. Uw privesleutel is wat u in staat stelt berichten die naar u zijn verzonden te ontsleutelen en digitale handtekeningen te maken. Als iemand anders uw privesleutel in handen krijgt, kan hij alle voor u versleutelde berichten lezen en zich voor u uitgeven.</p>

<h3>Wat gebeurt er als ik mijn privesleutel verlies?</h3>

<p>Als u uw privesleutel verliest, verliest u definitief de mogelijkheid om alle berichten die met de bijbehorende publieke sleutel zijn versleuteld te ontsleutelen. Er bestaat geen herstelmechanisme. Bewaar altijd een veilige back-up van uw privesleutel.</p>

<h3>Kan ik bestanden versleutelen met PGP?</h3>

<p>Ja. PGP kan zowel tekstberichten als binaire bestanden versleutelen. KeychainPGP richt zich op tekstversleuteling via het klembord, terwijl tools zoals GnuPG bestandsversleuteling direct ondersteunen. Zie voor een gedetailleerde vergelijking de gids <a href="/nl/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>Is PGP-versleuteling veilig?</h3>

<p>PGP-versleuteling met moderne algoritmen is uiterst veilig. KeychainPGP gebruikt Ed25519 voor handtekeningen en X25519 voor sleuteluitwisseling — elliptische-curvealgoritmen die een beveiligingsniveau vergelijkbaar met RSA-3072 bieden voor een fractie van de sleutelgrootte. De voornaamste risico's zijn niet cryptografisch maar operationeel: zwakke wachtwoordzinnen, gecompromitteerde apparaten of nalatig sleutelbeheer.</p>

<h3>Wat is een PGP-vingerafdruk?</h3>

<p>Een PGP-vingerafdruk is een hexadecimale tekenreeks van 40 tekens die een PGP-sleutel uniek identificeert. Vingerafdrukken worden gebruikt om te verifi\u00ebren dat een publieke sleutel daadwerkelijk toebehoort aan de persoon die u denkt. Vergelijk altijd de vingerafdruk via een apart vertrouwd kanaal (telefoongesprek, persoonlijke ontmoeting) om man-in-the-middle-aanvallen te voorkomen.</p>
`
};

export default doc;
