import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Wat is PGP? Uitgebreide gids over Pretty Good Privacy-versleuteling',
	description: 'Ontdek wat PGP (Pretty Good Privacy) is, hoe PGP-versleuteling werkt met publieke-sleutelcryptografie, de OpenPGP-standaard, digitale handtekeningen en modern gebruik.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'Wat is PGP-versleuteling?', level: 2 },
		{ id: 'history-of-pgp', text: 'Geschiedenis van PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Hoe PGP-versleuteling werkt', level: 2 },
		{ id: 'public-key-cryptography', text: 'Publieke-sleutelcryptografie', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'Het hybride versleutelingsmodel', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Digitale handtekeningen met PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'De OpenPGP-standaard', level: 2 },
		{ id: 'web-of-trust', text: 'Web of Trust', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGP-algoritmen en sleuteltypen', level: 2 },
		{ id: 'classic-algorithms', text: 'Klassieke algoritmen', level: 3 },
		{ id: 'modern-algorithms', text: 'Moderne algoritmen', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Veelvoorkomende toepassingen van PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP vandaag', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Aan de slag met PGP', level: 2 }
	],
	html: `
<h1>Wat is PGP? Uitgebreide gids over Pretty Good Privacy-versleuteling</h1>

<h2 id="what-is-pgp-encryption">Wat is PGP-versleuteling?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> is een versleutelingsprogramma dat cryptografische vertrouwelijkheid en authenticatie biedt voor datacommunicatie. PGP-versleuteling gebruikt een combinatie van symmetrische-sleutelcryptografie en publieke-sleutelcryptografie om gebruikers in staat te stellen berichten, bestanden en andere gegevens te versleutelen zodat alleen de beoogde ontvanger ze kan lezen. Oorspronkelijk gemaakt door Phil Zimmermann in 1991, is PGP uitgegroeid tot de meest gebruikte standaard voor e-mailversleuteling ter wereld en vormt het de basis van de <strong>OpenPGP</strong>-specificatie gedefinieerd in RFC 4880. Of u nu een vertrouwelijke e-mail moet versturen, de identiteit van een softwareontwikkelaar moet verifi\u00ebren of gevoelige bestanden moet beschermen, PGP biedt een beproefd cryptografisch raamwerk dat wordt vertrouwd door journalisten, beveiligingsonderzoekers, overheden en dagelijkse gebruikers.</p>

<p>Als u PGP-versleuteling meteen wilt uitproberen zonder software te installeren, biedt KeychainPGP een <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> die volledig in uw browser draait.</p>

<h2 id="history-of-pgp">Geschiedenis van PGP</h2>

<p>Phil Zimmermann publiceerde PGP 1.0 in juni 1991 als gratis software, gedreven door de overtuiging dat sterke cryptografie toegankelijk moest zijn voor alle burgers — niet alleen voor overheden en het leger. In die tijd werd sterke versleuteling geclassificeerd als munitie onder de Amerikaanse exportregelgeving, en Zimmermann werd drie jaar lang strafrechtelijk onderzocht door de Amerikaanse douanedienst voor het internationaal verspreiden van PGP. Het onderzoek werd uiteindelijk in 1996 zonder aanklacht gestaakt, en de zaak werd een keerpunt in de geschiedenis van digitale vrijheden.</p>

<p>PGP evolueerde door verschillende commerci\u00eble incarnaties. Zimmermann richtte PGP Inc. op in 1996, dat werd overgenomen door Network Associates (later McAfee) in 1997, en uiteindelijk door Symantec in 2010. Gedurende al deze overgangen werd het onderliggende cryptografische protocol gestandaardiseerd als <strong>OpenPGP</strong> door de Internet Engineering Task Force (IETF), wat garandeerde dat het protocol open en interoperabel bleef ongeacht het commerci\u00eble eigenaarschap.</p>

<p>De publicatie van de OpenPGP-standaard betekende dat iedereen compatibele implementaties kon maken. Dit leidde tot de creatie van GNU Privacy Guard (GnuPG of GPG), een vrije en open source implementatie die vandaag een van de meest gebruikte PGP-tools blijft. Om de verschillen tussen deze implementaties te begrijpen, raadpleeg onze gids over <a href="/nl/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Hoe PGP-versleuteling werkt</h2>

<p>PGP-versleuteling berust op een geavanceerde combinatie van cryptografische technieken. In plaats van \u00e9\u00e9n enkele methode te gebruiken, past PGP een <strong>hybride versleutelingsmodel</strong> toe dat de snelheid van symmetrische versleuteling combineert met de voordelen van sleuteldistributie van asymmetrische (publieke-sleutel) versleuteling.</p>

<h3 id="public-key-cryptography">Publieke-sleutelcryptografie</h3>

<p>In de kern van PGP staat <strong>publieke-sleutelcryptografie</strong>, ook wel asymmetrische cryptografie genoemd. Elke PGP-gebruiker genereert een <strong>sleutelpaar</strong> bestaande uit twee wiskundig verbonden sleutels:</p>

<ul>
<li><strong>Publieke sleutel</strong> — openlijk gedeeld met iedereen. Anderen gebruiken deze sleutel om berichten voor u te versleutelen en om uw digitale handtekeningen te verifi\u00ebren.</li>
<li><strong>Privesleutel</strong> (ook wel geheime sleutel genoemd) — strikt vertrouwelijk gehouden. U gebruikt deze sleutel om berichten die naar u zijn verzonden te ontsleutelen en om digitale handtekeningen te maken.</li>
</ul>

<p>De fundamentele eigenschap van dit systeem is dat gegevens versleuteld met een publieke sleutel alleen kunnen worden ontsleuteld met de bijbehorende privesleutel, en vice versa. Dit elimineert de noodzaak om een gedeeld geheim over te dragen tussen partijen voordat zij priv\u00e9 kunnen communiceren.</p>

<h3 id="the-hybrid-encryption-model">Het hybride versleutelingsmodel</h3>

<p>Hoewel publieke-sleutelcryptografie het probleem van sleuteldistributie oplost, zijn asymmetrische algoritmen zoals RSA rekenkundig duur voor het versleutelen van grote hoeveelheden gegevens. PGP lost dit op met een hybride aanpak:</p>

<ol>
<li><strong>Sessiesleutelgeneratie</strong> — PGP genereert voor elk bericht een willekeurige, unieke <strong>symmetrische sessiesleutel</strong> (doorgaans 128 of 256 bits).</li>
<li><strong>Gegevensversleuteling</strong> — De berichtinhoud wordt versleuteld met een snelle symmetrische versleuteling (zoals AES-256) met de sessiesleutel.</li>
<li><strong>Sessiesleutelversleuteling</strong> — De sessiesleutel zelf wordt vervolgens versleuteld met de publieke sleutel van de ontvanger (asymmetrische bewerking).</li>
<li><strong>Verpakking</strong> — Het versleutelde bericht en de versleutelde sessiesleutel worden gebundeld en naar de ontvanger verzonden.</li>
</ol>

<p>Wanneer de ontvanger het bericht ontvangt, wordt het proces omgekeerd: hij gebruikt zijn <strong>privesleutel</strong> om de sessiesleutel te ontsleutelen, en vervolgens wordt de ontsleutelde sessiesleutel gebruikt om de berichtinhoud te ontsleutelen.</p>

<h2 id="pgp-digital-signatures">Digitale handtekeningen met PGP</h2>

<p>Naast versleuteling biedt PGP <strong>digitale handtekeningen</strong> die twee essenti\u00eble functies vervullen: <strong>authenticatie</strong> (bewijzen wie een bericht heeft verzonden) en <strong>integriteit</strong> (bewijzen dat het bericht niet is gewijzigd tijdens verzending).</p>

<p>Het ondertekeningsproces werkt als volgt:</p>

<ol>
<li>PGP berekent een <strong>cryptografische hash</strong> (een samenvatting van vaste lengte) van de berichtinhoud met behulp van een algoritme zoals SHA-256 of SHA-512.</li>
<li>De hash wordt vervolgens versleuteld met de <strong>privesleutel</strong> van de afzender, wat de digitale handtekening oplevert.</li>
<li>De handtekening wordt aan het bericht toegevoegd.</li>
</ol>

<p>Elke ontvanger kan de handtekening verifi\u00ebren door de handtekening te ontsleutelen met de <strong>publieke sleutel</strong> van de afzender om de oorspronkelijke hash te verkrijgen, onafhankelijk de hash van het ontvangen bericht te berekenen, en de twee hashes te vergelijken. Als ze overeenkomen, is het bericht authentiek en niet gewijzigd.</p>

<h2 id="the-openpgp-standard">De OpenPGP-standaard</h2>

<p><strong>OpenPGP</strong> is de open standaard die de berichtformaten, algoritmen en procedures definieert die worden gebruikt door PGP-compatibele software. Het is geen softwareproduct op zich, maar eerder een specificatie die elke ontwikkelaar kan implementeren.</p>

<p>De referentiedocumenten zijn:</p>

<ul>
<li><strong>RFC 4880</strong> (november 2007) — De huidige hoofdspecificatie van het OpenPGP-berichtformaat.</li>
<li><strong>RFC 6637</strong> (juni 2012) — Breidt OpenPGP uit met ondersteuning voor elliptische-curvecryptografie (ECC).</li>
<li><strong>RFC 9580</strong> (2024) — De laatste revisie die de standaard moderniseert met verplichte ondersteuning voor Ed25519/X25519, AEAD-versleutelingsmodi en verbeterde sleutelvingerafdrukken.</li>
</ul>

<p>OpenPGP garandeert interoperabiliteit: een bericht versleuteld met KeychainPGP kan worden ontsleuteld door GnuPG, Mailvelope of elke andere conforme implementatie.</p>

<h2 id="web-of-trust">Web of Trust</h2>

<p>Een van de onderscheidende kenmerken van PGP is het gedecentraliseerde <strong>Web of Trust</strong>-model voor het vaststellen van de authenticiteit van publieke sleutels. In tegenstelling tot het gecentraliseerde Certificate Authority (CA)-model dat wordt gebruikt door TLS/SSL, stelt PGP de gebruikers zelf in staat om voor elkaar in te staan.</p>

<p>Het Web of Trust werkt via <strong>sleutelondertekening</strong>: wanneer u de identiteit van iemand verifieert en bevestigt dat hij een bepaalde publieke sleutel beheert, ondertekent u zijn sleutel met de uwe. Deze handtekening is een publieke verklaring dat u gelooft dat de sleutel toebehoort aan de persoon die hij beweert te vertegenwoordigen.</p>

<p>Tools zoals <a href="/nl/pgp-online-encrypt/">KeychainPGP</a> vereenvoudigen dit proces door gebruikers in staat te stellen direct met sleutels te werken via een intu\u00eftieve interface, met <a href="/nl/docs/clipboard-encryption/">klembordversleuteling</a> om eenvoudig versleutelde berichten en publieke sleutels te delen.</p>

<h2 id="pgp-algorithms-and-key-types">PGP-algoritmen en sleuteltypen</h2>

<p>PGP ondersteunt een reeks cryptografische algoritmen die zijn ge\u00ebvolueerd naarmate het vakgebied vorderde.</p>

<h3 id="classic-algorithms">Klassieke algoritmen</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> — Het meest ingezette asymmetrische algoritme in de geschiedenis van PGP. RSA-sleutels van 2048 bits worden beschouwd als het minimale beveiligingsniveau vandaag, met 4096-bits sleutels aanbevolen voor bescherming op lange termijn.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> — Gebruikt voor handtekeningen in combinatie met ElGamal voor versleuteling. Tegenwoordig minder favoriet.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> — De dominante symmetrische versleuteling die wordt gebruikt voor het versleutelen van berichtinhoud. AES-128 en AES-256 worden ondersteund.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> — Cryptografische hashfuncties die worden gebruikt voor de berekening van samenvattingen in digitale handtekeningen.</li>
</ul>

<h3 id="modern-algorithms">Moderne algoritmen</h3>

<p>De nieuwste generatie OpenPGP-implementaties ondersteunt <strong>elliptische-curvecryptografie (ECC)</strong>, die een vergelijkbare beveiliging biedt als RSA met aanzienlijk kleinere sleutelgroottes:</p>

<ul>
<li><strong>Ed25519</strong> — Een digitaal handtekeningalgoritme gebaseerd op Curve25519. Produceert snelle en compacte handtekeningen. Aanbevolen in RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> — Gebruikt voor sleuteluitwisseling (versleuteling). Biedt uitstekende prestaties met sterke beveiligingseigenschappen.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — Elliptische curven gestandaardiseerd door het NIST. Ondersteund door OpenPGP maar over het algemeen minder favoriet dan op Curve25519 gebaseerde algoritmen.</li>
</ul>

<p>Moderne tools zoals KeychainPGP ondersteunen deze hedendaagse algoritmen, waardoor het genereren van sleutels met Ed25519 en X25519 eenvoudig en direct is.</p>

<h2 id="common-use-cases-for-pgp">Veelvoorkomende toepassingen van PGP</h2>

<ul>
<li><strong>Veilige e-mail</strong> — De oorspronkelijke en meest bekende toepassing. PGP maakt het mogelijk om e-mailinhoud te versleutelen en berichten te ondertekenen om hun authenticiteit te bewijzen.</li>
<li><strong>Bestandsversleuteling</strong> — PGP kan individuele bestanden of hele archieven versleutelen voor veilige opslag of overdracht.</li>
<li><strong>Softwareverificatie</strong> — Open source projecten ondertekenen regelmatig hun releases met PGP-sleutels. Gebruikers kunnen deze handtekeningen verifi\u00ebren om de authenticiteit van een download te bevestigen.</li>
<li><strong>Veilige berichten</strong> — PGP kan worden gebruikt om elk tekstbericht te versleutelen, bijzonder nuttig op platformen die geen end-to-end-versleuteling bieden.</li>
<li><strong>Identiteitsverificatie</strong> — PGP-sleutelvingerafdrukken dienen als verifieerbare digitale identiteiten. Ontwikkelaars op GitHub kunnen hun commits ondertekenen met PGP.</li>
<li><strong>Documentondertekening</strong> — Juridische workflows gebruiken soms PGP-handtekeningen om onweerlegbaarheid vast te stellen.</li>
</ul>

<h2 id="pgp-today">PGP vandaag</h2>

<p>Meer dan drie decennia na zijn creatie blijft PGP een van de belangrijkste beschikbare cryptografische tools. De OpenPGP-standaard blijft evolueren, met RFC 9580 die significante moderniseringen introduceert, waaronder verplichte ondersteuning voor moderne elliptische-curvealgoritmen en AEAD-versleutelingsmodi.</p>

<p>Het ecosysteem van PGP-tools is aanzienlijk gegroeid. GnuPG blijft de referentie-implementatie voor gebruik via de commandoregel. Moderne tools zoals KeychainPGP bieden native desktopapplicaties (Windows, macOS, Linux), een Android-app, een CLI voor scripting en een webapplicatie in de browser — allemaal gebouwd op dezelfde Sequoia-PGP-engine in Rust.</p>

<h2 id="getting-started-with-pgp">Aan de slag met PGP</h2>

<p>Klaar om te beginnen met PGP-versleuteling? Hier zijn de beste volgende stappen:</p>

<ol>
<li><strong>Probeer het in uw browser</strong> — Gebruik de <a href="/nl/pgp-online-encrypt/">online PGP-tool</a> van KeychainPGP om een sleutelpaar te genereren, een bericht te versleutelen of een handtekening te verifi\u00ebren zonder iets te installeren.</li>
<li><strong>Lees de beginnersgids</strong> — Als u nieuw bent in cryptografie, begeleidt onze gids <a href="/nl/docs/pgp-for-beginners/">PGP voor beginners</a> u stap voor stap.</li>
<li><strong>Leer de praktische workflow</strong> — Onze gids <a href="/nl/docs/how-to-use-pgp/">Hoe PGP te gebruiken</a> behandelt het genereren van sleutels, versleutelen en ontsleutelen, het beheren van uw sleutelbos en best practices.</li>
<li><strong>Begrijp klembordversleuteling</strong> — Ontdek <a href="/nl/docs/clipboard-encryption/">PGP-klembordversleuteling</a> om tekst direct vanuit uw klembord te versleutelen en ontsleutelen.</li>
<li><strong>Ken de tools</strong> — Begrijp de <a href="/nl/docs/pgp-vs-gpg/">verschillen tussen PGP en GPG</a> om de juiste tool voor uw workflow te kiezen.</li>
</ol>

<p>PGP-versleuteling beschermt gevoelige communicatie al meer dan dertig jaar. Met moderne tools en standaarden is het toegankelijker dan ooit.</p>
`
};

export default doc;
