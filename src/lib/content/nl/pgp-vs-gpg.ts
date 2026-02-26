import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: wat is het verschil tussen PGP en GPG?',
	description: 'Ontdek het verschil tussen PGP en GPG. Vergelijk Pretty Good Privacy, GnuPG en de OpenPGP-standaard om de juiste versleutelingstool te vinden.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Wat is het verschil?', level: 2 },
		{ id: 'what-is-pgp', text: 'Wat is PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'Wat is GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: 'Wat is OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Vergelijkingstabel PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Belangrijkste verschillen uitgelegd', level: 2 },
		{ id: 'which-should-you-use', text: 'Welke moet u gebruiken?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Waar past KeychainPGP?', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG: wat is het verschil tussen PGP en GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">Wat is het verschil tussen PGP en GPG?</h2>

<p>Het verschil tussen PGP en GPG zit in hun oorsprong en licentie. <strong>PGP</strong> (Pretty Good Privacy) is het oorspronkelijke propriëtaire versleutelingsprogramma gemaakt door Phil Zimmermann in 1991. <strong>GPG</strong> (GNU Privacy Guard, ook wel GnuPG genoemd) is een vrije en open source herimplementatie van hetzelfde concept, ontwikkeld als onderdeel van het GNU-project. Beide programma's implementeren de <strong>OpenPGP</strong>-standaard, wat betekent dat ze compatibele versleutelde berichten produceren en met elkaars sleutels kunnen werken. In de praktijk is GPG de tool die de meeste mensen vandaag gebruiken omdat het gratis, actief onderhouden en beschikbaar is op alle grote besturingssystemen. Als u nieuw bent in versleuteling, presenteert onze <a href="/nl/docs/pgp-for-beginners/">PGP-beginnersgids</a> de fundamentele concepten stap voor stap.</p>

<h2 id="what-is-pgp">Wat is PGP?</h2>

<p>PGP staat voor <strong>Pretty Good Privacy</strong>. Phil Zimmermann schreef de eerste versie in 1991 en publiceerde deze als gratis tool voor activisten en gewone burgers die sterke versleuteling nodig hadden. De software combineerde symmetrische-sleutelversleuteling met publieke-sleutelcryptografie.</p>

<p>Na een drie jaar durend federaal onderzoek (gestaakt in 1996) richtte Zimmermann PGP Inc. op. Het bedrijf wisselde meerdere keren van eigenaar: Network Associates in 1997, PGP Corporation in 2002, en vervolgens Symantec (nu Broadcom) in 2010. Vandaag bestaat PGP als een commerciële productsuite voornamelijk gericht op bedrijven.</p>

<p>Voor meer informatie over de onderliggende technologie, zie ons uitgebreide artikel over <a href="/nl/docs/what-is-pgp/">wat PGP is en hoe het werkt</a>.</p>

<h2 id="what-is-gpg-gnupg">Wat is GPG (GnuPG)?</h2>

<p>GPG, of <strong>GNU Privacy Guard (GnuPG)</strong>, is een vrije en open source implementatie van de OpenPGP-standaard. Werner Koch startte het project in 1997 met financiering van de Duitse overheid en bracht versie 1.0 uit in 1999. GnuPG werd specifiek gemaakt om een volledig vrij alternatief te bieden voor de propriëtaire PGP-software.</p>

<p>GnuPG maakt deel uit van het GNU-project en is gelicentieerd onder de GNU General Public License (GPL). Het wordt standaard meegeleverd met de meeste Linux-distributies. De commandoregeltool <code>gpg</code> is de interface waarmee de meeste ontwikkelaars en systeembeheerders werken. Voor een overzicht van beschikbare tools, zie onze <a href="/nl/docs/pgp-tools/">PGP-tools vergelijking</a>.</p>

<h2 id="what-is-openpgp">Wat is OpenPGP?</h2>

<p><strong>OpenPGP</strong> is geen product of software. Het is een open standaard die de berichtformaten, sleutelformaten en cryptografische procedures definieert die PGP-compatibele tools moeten volgen. De IETF publiceerde de oorspronkelijke specificatie als <strong>RFC 2440</strong> in 1998, en de meest gerefereerde versie is <strong>RFC 4880</strong> (2007). Een grote update, <strong>RFC 9580</strong> (2024), moderniseert de standaard met ondersteuning voor Ed25519 en AEAD-versleuteling.</p>

<p>Het bestaan van OpenPGP maakt interoperabiliteit mogelijk. Omdat PGP en GPG dezelfde standaard implementeren, kan een bericht versleuteld met GPG worden ontsleuteld door PGP, en vice versa.</p>

<h2 id="pgp-vs-gpg-comparison-table">Vergelijkingstabel PGP vs GPG</h2>

<table>
<tr><th>Kenmerk</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Type</strong></td><td>Commerci\u00eble software</td><td>Vrije/open source software</td><td>Open standaard</td></tr>
<tr><td><strong>Licentie</strong></td><td>Propriëtair</td><td>GPL (gratis)</td><td>IETF-specificatie</td></tr>
<tr><td><strong>Kosten</strong></td><td>Betaalde licentie</td><td>Gratis</td><td>N.v.t.</td></tr>
<tr><td><strong>Platformen</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>N.v.t.</td></tr>
<tr><td><strong>GUI inbegrepen</strong></td><td>Ja (bedrijfsconsole)</td><td>Nee (externe GUI's beschikbaar)</td><td>N.v.t.</td></tr>
<tr><td><strong>Broncode beschikbaar</strong></td><td>Nee</td><td>Ja</td><td>Publieke standaard</td></tr>
</table>

<h2 id="key-differences-explained">Belangrijkste verschillen uitgelegd</h2>

<h3>Licentie en kosten</h3>

<p>PGP is propriëtaire software die onder een commerci\u00eble licentie wordt verkocht. GPG wordt uitgebracht onder de GPL, wat betekent dat iedereen het kan downloaden, gebruiken, wijzigen en gratis herdistribueren. Voor particulieren, kleine teams en open source projecten is GPG de voor de hand liggende keuze qua kosten.</p>

<h3>Platformondersteuning</h3>

<p>GnuPG draait op vrijwel alle Unix-systemen en heeft offici\u00eble builds voor Windows en macOS. Voor multiplatformbehoeften bieden moderne tools zoals KeychainPGP native builds voor Windows, macOS, Linux en Android vanuit \u00e9\u00e9n enkele codebase.</p>

<h3>Gebruikerservaring</h3>

<p>Commercieel PGP bevat een grafische interface voor bedrijfsimplementatie. GnuPG is fundamenteel een commandoregeltool. Tools zoals KeychainPGP bieden een native grafische interface die sleutelbeheer, versleuteling, ontsleuteling en ondertekening afhandelt zonder commandoregelopties te hoeven onthouden. U kunt PGP-versleuteling direct in de browser uitproberen met onze <a href="/nl/pgp-online-encrypt/">online PGP-versleutelingstool</a>.</p>

<h2 id="which-should-you-use">Welke moet u gebruiken?</h2>

<ul>
<li><strong>Bedrijf met bestaande Broadcom/Symantec-infrastructuur:</strong> Commercieel PGP kan het pad van de minste weerstand zijn.</li>
<li><strong>Ontwikkelaars en systeembeheerders:</strong> GnuPG is de standaardtool, standaard ge\u00efnstalleerd op de meeste servers.</li>
<li><strong>Privacybewuste gebruikers die een GUI willen:</strong> Overweeg een moderne OpenPGP-applicatie zoals KeychainPGP.</li>
<li><strong>Web- of snelle versleutelingsbehoeften:</strong> Een <a href="/nl/pgp-online-encrypt/">online PGP-versleutelingstool</a> kan eenmalige taken afhandelen zonder iets te installeren.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">Waar past KeychainPGP?</h2>

<p><a href="/">KeychainPGP</a> is een moderne, open source desktopapplicatie die de OpenPGP-standaard implementeert met behulp van <strong>Sequoia-PGP</strong>, een OpenPGP-bibliotheek die vanaf nul in Rust is geschreven. Het is noch PGP (het commerci\u00eble product) noch GPG (GnuPG). Het is een onafhankelijke implementatie die naast beide bestaat in het OpenPGP-ecosysteem.</p>

<p>Belangrijkste redenen om KeychainPGP te overwegen:</p>

<ul>
<li><strong>Multiplatform:</strong> Native builds voor Windows, macOS, Linux en Android, plus een webapp en CLI</li>
<li><strong>Moderne cryptografie:</strong> Gebouwd op Sequoia-PGP met ondersteuning voor Curve25519/Ed25519 en AEAD</li>
<li><strong>Open source:</strong> Dubbele licentie MIT / Apache-2.0, volledig controleerbaar</li>
<li><strong>Gebruiksvriendelijk:</strong> Grafische interface met klembordworkflow en globale sneltoetsen</li>
<li><strong>CLI voor automatisering:</strong> De <code>keychainpgp</code> CLI ondersteunt sleutelgeneratie, versleuteling, ontsleuteling, ondertekening, verificatie en sleutelbeheer</li>
<li><strong>OpenPGP-conform:</strong> Sleutels en berichten zijn interoperabel met GPG, PGP en elke andere OpenPGP-tool</li>
</ul>

<h2 id="frequently-asked-questions">Veelgestelde vragen</h2>

<h3>Is GPG hetzelfde als PGP?</h3>

<p>Nee. GPG (GnuPG) en PGP zijn afzonderlijke programma's gemaakt door verschillende personen. PGP werd gemaakt door Phil Zimmermann in 1991 en is vandaag een commercieel product van Broadcom. GPG werd gemaakt door Werner Koch in 1997 als vrij en open source alternatief. Beide implementeren de OpenPGP-standaard, waardoor ze functioneel compatibel zijn.</p>

<h3>Kunnen GPG- en PGP-sleutels samenwerken?</h3>

<p>Ja. GPG en PGP gebruiken het OpenPGP-sleutelformaat gedefinieerd door de IETF-standaard. U kunt een publieke sleutel exporteren vanuit GPG en importeren in PGP, of in elke andere OpenPGP-conforme tool zoals KeychainPGP.</p>

<h3>Is GPG nog veilig in 2026?</h3>

<p>GnuPG blijft een veilige en actief onderhouden tool. Gebruik moderne sleuteltypen (zoals Ed25519), houd uw software up-to-date en volg best practices voor sleutelbeheer. Zie voor een stapsgewijze gids ons artikel <a href="/nl/docs/pgp-for-beginners/">PGP voor beginners</a>.</p>

<h3>Wat betekent OpenPGP?</h3>

<p>OpenPGP is een open standaard gepubliceerd door de IETF die definieert hoe PGP-compatibele versleuteling werkt. Het specificeert berichtformaten, sleutelformaten, algoritmevereisten en handtekeningstructuren.</p>

<h3>Heb ik PGP of GPG nodig om KeychainPGP te gebruiken?</h3>

<p>Nee. KeychainPGP is een zelfstandige applicatie die niet afhankelijk is van de installatie van PGP of GnuPG. Het maakt gebruik van de Sequoia-PGP-bibliotheek, een onafhankelijke implementatie van de OpenPGP-standaard geschreven in Rust. Sleutels en versleutelde berichten gemaakt in KeychainPGP zijn echter volledig compatibel met GPG en PGP.</p>
`
};

export default doc;
