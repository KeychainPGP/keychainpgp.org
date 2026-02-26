import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Klembordversleuteling met PGP: de clipboard-first-aanpak voor veilige berichten',
	description: 'Ontdek hoe PGP-klembordversleuteling werkt, waarom het beter is dan bestandsversleuteling voor dagelijkse OPSEC, en hoe KeychainPGP het klembord gebruikt om berichten te versleutelen in elke applicatie.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'Wat is klembordversleuteling?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Waarom klembord-eerst?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Hoe KeychainPGP het klembord gebruikt', level: 2 },
		{ id: 'the-encryption-workflow', text: 'De versleutelingsworkflow', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Ontsleuteling in omgekeerde richting', level: 3 },
		{ id: 'security-considerations', text: 'Beveiligingsoverwegingen', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Klembordgeschiedenis en -beheerders', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Automatisch wissen na 30 seconden', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Geheugenbeheer en nulstelling', level: 3 },
		{ id: 'opsec-mode', text: 'OPSEC-modus', level: 2 },
		{ id: 'window-title-disguise', text: 'Venstertitelvermomming', level: 3 },
		{ id: 'ram-only-keys', text: 'Sleutels alleen in RAM', level: 3 },
		{ id: 'panic-wipe', text: 'Noodverwijdering', level: 3 },
		{ id: 'tor-proxy-support', text: 'Tor-proxyondersteuning', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Klembordversleuteling vs bestandsversleuteling', level: 2 },
		{ id: 'threat-model', text: 'Dreigingsmodel', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Waartegen klembordversleuteling beschermt', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Waartegen klembordversleuteling niet beschermt', level: 3 },
		{ id: 'best-practices', text: 'Best practices voor PGP via klembord', level: 2 }
	],
	html: `
<h1>Klembordversleuteling met PGP</h1>

<h2 id="what-is-clipboard-encryption">Wat is klembordversleuteling?</h2>

<p>PGP-klembordversleuteling is een methode voor het versleutelen en ontsleutelen van tekst door direct te lezen van en te schrijven naar het klembord van het besturingssysteem, in plaats van te werken met bestanden op schijf. In plaats van een bericht in leesbare tekst op te slaan in een <code>.txt</code>-bestand, dit door een commandoregeltool te halen en een versleuteld <code>.asc</code>-bestand terug te krijgen, kopieert u simpelweg uw tekst, activeert u versleuteling met een sneltoets, en plakt u het versleutelde PGP-bericht waar u maar wilt. Het klembord dient als zowel invoer- als uitvoerbuffer, waardoor versleuteling een integraal onderdeel wordt van elke op tekst gebaseerde workflow. Deze aanpak is de basis van hoe <a href="/nl/pgp-online-encrypt/">KeychainPGP</a> werkt op de desktop en maakt het mogelijk om te integreren met elke applicatie die kopi\u00ebren-plakken ondersteunt — e-mailclients, chatapplicaties, notitietools, webformulieren, en meer.</p>

<p>Als u nieuw bent in de wereld van PGP, begin dan met <a href="/nl/docs/what-is-pgp/">Wat is PGP?</a> voor een introductie in de onderliggende cryptografische concepten voordat u zich verdiept in klembordspecifieke workflows.</p>

<h2 id="why-clipboard-first">Waarom klembord-eerst?</h2>

<p>Traditionele PGP-tools zoals GnuPG zijn ontworpen rond bestanden. U voert een bestand in via <code>gpg --encrypt</code>, ontvangt een versleuteld bestand, en draagt het handmatig over. Dit model was logisch in de jaren 1990 toen PGP voornamelijk werd gebruikt voor e-mailbijlagen en bestandsarchieven. Het is veel minder logisch vandaag, wanneer de meeste gevoelige communicatie plaatsvindt in webplatforms, vluchtige berichtenapps en diensten die geen bestandssysteeminterface bieden.</p>

<p>De klembord-eerst-aanpak lost meerdere problemen tegelijk op:</p>

<ul>
<li><strong>Applicatieonafhankelijkheid.</strong> Omdat het klembord een abstractie op besturingssysteemniveau is, werkt klembordversleuteling met elke applicatie. U bent niet gebonden aan een specifieke e-mailclient, browserextensie of plug-in-ecosysteem. Als u kunt kopi\u00ebren-plakken, kunt u versleutelen.</li>
<li><strong>Geen leesbare bestanden op schijf.</strong> Bestandsversleuteling cre\u00ebert noodzakelijkerwijs leesbare artefacten op uw bestandssysteem — het originele onversleutelde bestand, tijdelijke bestanden, swapbestanden van de editor, en mogelijk de ontsleutelde uitvoer. Elk daarvan is een forensische aansprakelijkheid. Klembordversleuteling houdt leesbare tekst alleen in vluchtig geheugen.</li>
<li><strong>Minder frictie.</strong> Hoe minder stappen er zijn tussen "ik wil dit versleutelen" en "het is versleuteld", hoe waarschijnlijker het is dat een gebruiker daadwerkelijk zijn berichten versleutelt. Een workflow in drie stappen (kopi\u00ebren, sneltoets, plakken) heeft aanzienlijk minder frictie dan een op bestanden gebaseerde pijplijn.</li>
<li><strong>Compatibiliteit met moderne communicatie.</strong> Webmail, Signal desktop, Slack, Discord, Matrix-clients — geen van deze tools ondersteunt native PGP, maar ze ondersteunen allemaal het plakken van tekst. PGP via het klembord overbrugt deze kloof zonder integratie op protocolniveau te vereisen.</li>
</ul>

<p>Voor een stapsgewijze gids over het gebruik van deze workflow, raadpleeg <a href="/nl/docs/how-to-use-pgp/">Hoe PGP te gebruiken</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Hoe KeychainPGP het klembord gebruikt</h2>

<p>KeychainPGP is van de grond af aan gebouwd rond de klembord-eerst-filosofie. In plaats van klembordetoegang te behandelen als een handigheidsfunctie bovenop een bestandsversleutelingstool, gaat de gehele architectuur — van de cryptografische pijplijn tot de gebruikersinterface — ervan uit dat het klembord het primaire gegevenskanaal is.</p>

<h3 id="the-encryption-workflow">De versleutelingsworkflow</h3>

<p>Het proces van het versleutelen van een bericht met KeychainPGP verloopt in drie stappen:</p>

<ol>
<li><strong>Kopieer</strong> uw bericht in leesbare tekst vanuit elke applicatie (e-mailconcept, chatvenster, teksteditor, webformulier).</li>
<li><strong>Druk op <code>Ctrl+Shift+E</code></strong> (de standaard globale sneltoets). KeychainPGP leest de klembordinhoud, versleutelt de tekst met de publieke sleutel van de geselecteerde ontvanger, en schrijft de ASCII-armored PGP-versleutelde tekst naar het klembord.</li>
<li><strong>Plak</strong> het versleutelde bericht in de bestemming. Wat aankomt is een standaard OpenPGP ASCII-armored blok beginnend met <code>-----BEGIN PGP MESSAGE-----</code> dat kan worden ontsleuteld door elke OpenPGP-compatibele tool.</li>
</ol>

<p>Achter de schermen gebruikt KeychainPGP de <a href="https://sequoia-pgp.org/">Sequoia-PGP</a>-bibliotheek, een moderne Rust-implementatie van de OpenPGP-standaard. Sleutels gebruiken standaard Ed25519 voor ondertekening en X25519 voor versleuteling — elliptische-curvealgoritmen die sterke beveiliging bieden met compacte sleutelgroottes en snelle bewerkingen. Er zijn geen dialoogvensters voor algoritmeselectie of beslissingen over sleutelgrootte. De cryptografie is veilig vanaf het moment van installatie.</p>

<h3 id="decryption-in-reverse">Ontsleuteling in omgekeerde richting</h3>

<p>Ontsleuteling volgt de versleutelingsworkflow in omgekeerde richting. Wanneer u een PGP-versleuteld bericht ontvangt, kopieert u het volledige armored blok, drukt u op <code>Ctrl+Shift+D</code> (de standaard ontsleutelingssneltoets), en KeychainPGP vervangt de klembordinhoud door de ontsleutelde leesbare tekst. U kunt deze vervolgens in elke applicatie plakken om te lezen. De ontsleutelde tekst bestaat alleen in het geheugen en in de klembordbuffer, die automatisch wordt gewist na een instelbare vertraging.</p>

<h2 id="security-considerations">Beveiligingsoverwegingen</h2>

<p>Het gebruik van het klembord als gegevenskanaal introduceert specifieke beveiligingsoverwegingen die KeychainPGP met verschillende verdedigingsmechanismen aanpakt.</p>

<h3 id="clipboard-history-and-managers">Klembordgeschiedenis en -beheerders</h3>

<p>Moderne besturingssystemen en tools van derden houden vaak een klembordgeschiedenis bij. Windows 10 en later bevatten een ingebouwde klembordgeschiedenisfunctie (<code>Win+V</code>). macOS houdt niet native een geschiedenis bij, maar populaire tools zoals Alfred, Raycast en Paste doen dat wel. Op Linux zijn klembordbeheerders zoals CopyQ, Clipman en GPaste gebruikelijk.</p>

<p>Deze klembordbeheerders kunnen zowel de leesbare tekst v\u00f3\u00f3r versleuteling als de ontsleutelde uitvoer na ontsleuteling vastleggen, waarmee het nut van versleuteling volledig teniet wordt gedaan. Bij het gebruik van PGP-klembordversleuteling moet u:</p>

<ul>
<li>Klembordgeschiedenis uitschakelen op uw besturingssysteem (op Windows, ga naar Instellingen > Systeem > Klembord en schakel Klembordgeschiedenis uit).</li>
<li>Klembordbeheerders van derden vermijden op machines waar u gevoelige inhoud verwerkt, of uitsluitingsregels configureren als de beheerder dit toestaat.</li>
<li>Vertrouwen op de ingebouwde automatische wisfunctie van KeychainPGP om het blootstellingsvenster te minimaliseren.</li>
</ul>

<h3 id="auto-clear-after-30-seconds">Automatisch wissen na 30 seconden</h3>

<p>KeychainPGP wist het klembord automatisch 30 seconden nadat het ontsleutelde leesbare tekst ernaar heeft geschreven. Deze vertraging is instelbaar in de applicatie-instellingen. Automatisch wissen zorgt ervoor dat ontsleutelde inhoud niet oneindig in het klembord blijft staan, waardoor het risico wordt verminderd dat een latere plakbewerking of een klembordbeheerder gevoelige tekst vastlegt lang nadat u klaar bent met lezen.</p>

<p>De standaardvertraging van 30 seconden is een compromis tussen bruikbaarheid en beveiliging. Het geeft u voldoende tijd om de ontsleutelde tekst te plakken waar u deze nodig heeft, terwijl het venster wordt beperkt waarin de leesbare tekst toegankelijk is. Voor omgevingen met hoge beveiliging kunt u deze vertraging terugbrengen tot slechts 5 seconden.</p>

<h3 id="memory-handling-and-zeroization">Geheugenbeheer en nulstelling</h3>

<p>Klembordversleuteling houdt in dat gevoelige gegevens — privesleutels, wachtwoordzinnen, ontsleutelde leesbare tekst — in het procesgeheugen verblijven. KeychainPGP is geschreven in Rust en maakt gebruik van de nulstellingsgaranties bij vernietiging van Sequoia-PGP. Wanneer een geheime waarde buiten zijn bereik valt, wordt het geheugen overschreven met nullen voordat het wordt vrijgegeven. Dit is geen best-effort wissen; het eigendomsmodel van Rust garandeert dat de nulstellings-destructor deterministisch wordt uitgevoerd. Gecombineerd met de compilerbarrières van de <code>zeroize</code> crate die voorkomen dat de optimizer het overschrijven elimineert, biedt dit sterke zekerheid dat geheimen niet in het geheugen achterblijven na gebruik.</p>

<p>Dit contrasteert met tools geschreven in talen met garbage collection (Java, Python, JavaScript), waar geheime gegevens onbepaald in het geheugen kunnen blijven totdat de garbage collector ze terugvordert en (mogelijk) overschrijft.</p>

<h2 id="opsec-mode">OPSEC-modus</h2>

<p>Voor gebruikers die werken in vijandige omgevingen — journalisten die communiceren met bronnen, activisten onder surveillance, beveiligingsonderzoekers die gevoelige onthullingen verwerken — bevat KeychainPGP een OPSEC-modus die de applicatie versterkt boven zijn standaard beveiligingshouding.</p>

<h3 id="window-title-disguise">Venstertitelvermomming</h3>

<p>Wanneer de OPSEC-modus is ingeschakeld, verandert KeychainPGP zijn venstertitel naar iets onopvallends, zoals "Rekenmachine" of "Notities". Dit voorkomt toevallig meekijken en misleidt geautomatiseerde schermopnametools die venstertitels registreren. Een tegenstander die schermafbeeldingen of video-opnames bekijkt, zal "KeychainPGP" of "PGP" niet zien in een venstertitelbalk.</p>

<h3 id="ram-only-keys">Sleutels alleen in RAM</h3>

<p>In OPSEC-modus worden privesleutels uitsluitend in RAM bewaard en nooit naar het bestandssysteem geschreven. Dit betekent dat als het apparaat in beslag wordt genomen of de schijf wordt ge\u00efmaged, er geen sleutelbestanden te herstellen zijn. De afweging is dat sleutels bij elke start van de applicatie opnieuw moeten worden ge\u00efmporteerd, doorgaans vanaf een hardwaretoken, QR-code of veilige overdracht vanaf een ander apparaat.</p>

<h3 id="panic-wipe">Noodverwijdering</h3>

<p>De noodverwijderknop (of de bijbehorende sneltoets) stelt onmiddellijk al het cryptografisch materiaal in het geheugen op nul, wist het klembord, en sluit optioneel de applicatie. Dit is ontworpen voor situaties waarin u alle gevoelige gegevens onmiddellijk moet vernietigen — bijvoorbeeld als u verwacht dat uw apparaat binnenkort in beslag wordt genomen. Het wissen is onmiddellijk en onomkeerbaar; alle sleutels die alleen in RAM stonden en niet elders zijn opgeslagen, zijn definitief verloren.</p>

<h3 id="tor-proxy-support">Tor-proxyondersteuning</h3>

<p>De OPSEC-modus bevat de mogelijkheid om sleutelserverzoekopdrachten en al het andere netwerkverkeer via een Tor SOCKS-proxy te routeren. Dit voorkomt dat uw internetprovider of een tegenstander op netwerkniveau kan observeren dat u publieke PGP-sleutels ophaalt, wat als metadata zou kunnen dienen om uw communicatiepartners te identificeren. Wanneer Tor-proxyondersteuning is ingeschakeld, worden alle uitgaande verbindingen van KeychainPGP gerouteerd via de geconfigureerde SOCKS5-proxy (doorgaans <code>127.0.0.1:9050</code> als Tor lokaal draait).</p>

<h2 id="clipboard-encryption-vs-file-encryption">Klembordversleuteling vs bestandsversleuteling</h2>

<p>PGP-klembordversleuteling en bestandsversleuteling gebruiken dezelfde onderliggende OpenPGP-standaard en produceren interoperabele versleutelde tekst. Het verschil zit in de workflow en de daaruit voortvloeiende beveiligingseigenschappen.</p>

<table>
<tr><th>Aspect</th><th>Klembordversleuteling</th><th>Bestandsversleuteling</th></tr>
<tr><td><strong>Invoer/uitvoer</strong></td><td>Systeemklembord (vluchtig geheugen)</td><td>Bestanden op schijf (persistente opslag)</td></tr>
<tr><td><strong>Leesbare artefacten</strong></td><td>Geen op schijf; gewist uit klembord na vertraging</td><td>Origineel bestand, tijdelijke bestanden, editorback-ups kunnen achterblijven</td></tr>
<tr><td><strong>Applicatieondersteuning</strong></td><td>Elke app die kopi\u00ebren/plakken ondersteunt</td><td>Vereist bestandssysteemtoegang of CLI-integratie</td></tr>
<tr><td><strong>Workflowstappen</strong></td><td>3 (kopi\u00ebren, sneltoets, plakken)</td><td>5+ (bestand opslaan, CLI starten, uitvoer specificeren, uitvoer openen, overdragen)</td></tr>
<tr><td><strong>Batchverwerking</strong></td><td>Niet praktisch voor grote volumes</td><td>Goed geschikt voor bulkversleuteling van bestanden en archieven</td></tr>
<tr><td><strong>Grote gegevens</strong></td><td>Beperkt tot tekst die in het klembord past</td><td>Verwerkt bestanden van willekeurige grootte</td></tr>
<tr><td><strong>Forensische voetafdruk</strong></td><td>Minimaal (alleen RAM)</td><td>Significant (schijfartefacten, bestandssysteemmetadata)</td></tr>
</table>

<p>Klembordversleuteling is de beste keuze voor versleuteling op berichtniveau in dagelijkse communicatie. Bestandsversleuteling blijft noodzakelijk wanneer u binaire gegevens, grote archieven moet versleutelen, of wanneer de ontvanger een <code>.pgp</code>-bijlage verwacht. KeychainPGP ondersteunt beide modi, maar blinkt uit in de klembordworkflow.</p>

<h2 id="threat-model">Dreigingsmodel</h2>

<p>Begrijpen waartegen PGP-klembordversleuteling wel en niet beschermt is essentieel voor het nemen van weloverwogen beveiligingsbeslissingen. Geen enkel hulpmiddel dekt alle dreigingen.</p>

<h3 id="what-clipboard-encryption-protects-against">Waartegen klembordversleuteling beschermt</h3>

<ul>
<li><strong>Netwerkbewaking.</strong> Berichten die v\u00f3\u00f3r het verlaten van uw apparaat zijn versleuteld, zijn ondoorzichtig voor iedereen die het netwerk bewaakt — uw internetprovider, een wifi-afluisteraar of een statelijke actor die deep packet inspection uitvoert. PGP-versleutelde tekst kan een willekeurig aantal onbetrouwbare netwerken passeren zonder de leesbare tekst te compromitteren.</li>
<li><strong>Onderschepping van e-mail en berichten.</strong> Als een tegenstander toegang krijgt tot uw e-mailserver, de database van uw chatprovider, of een bericht onderweg, krijgt hij alleen versleutelde tekst. Zonder de privesleutel van de ontvanger is de inhoud rekenkundig onmogelijk te herstellen.</li>
<li><strong>Opslagcompromittering.</strong> Als een tegenstander een kopie van uw e-mailarchieven, chatlogboeken of cloudback-ups verkrijgt, blijven PGP-versleutelde berichten beschermd. Dit is bijzonder relevant voor klembordversleuteling, waarbij de leesbare tekst nooit de schijf raakt.</li>
<li><strong>Metadatareductie (met OPSEC-modus).</strong> Hoewel PGP geen e-mailheaders of berichtmetadata versleutelt, verminderen de functies van de OPSEC-modus zoals Tor-proxyondersteuning en venstertitelvermomming de observeerbare metadata rond uw versleutelingsgebruik.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Waartegen klembordversleuteling niet beschermt</h3>

<ul>
<li><strong>Gecompromitteerd eindpunt met keylogger.</strong> Als een tegenstander een keylogger of schermopnamemalware op uw apparaat heeft ge\u00efnstalleerd, kan hij leesbare tekst vastleggen v\u00f3\u00f3r versleuteling of na ontsleuteling. Klembordversleuteling gaat uit van een betrouwbaar eindpunt. Als uw apparaat op besturingssysteemniveau is gecompromitteerd, kan geen enkele versleuteling op applicatieniveau helpen.</li>
<li><strong>Fysieke toegang tot een ontgrendeld apparaat.</strong> Als een tegenstander fysieke toegang heeft tot uw apparaat terwijl het ontgrendeld is en KeychainPGP draait met geladen sleutels, kan hij berichten ontsleutelen. Sleutels alleen in RAM en de noodverwijderknop beperken dit tot op zekere hoogte, maar vereisen dat u handelt v\u00f3\u00f3rdat de tegenstander toegang krijgt.</li>
<li><strong>Gecompromitteerde privesleutels.</strong> Als uw privesleutel is ge\u00ebxfiltreerd (vanuit een back-up, gecompromitteerd apparaat, of zwakke wachtwoordzin), zijn alle berichten versleuteld naar die sleutel — verleden en toekomst — gecompromitteerd. Gebruik een sterke wachtwoordzin en bewaar uw privesleutel op zo min mogelijk apparaten.</li>
<li><strong>Verkeersanalyse.</strong> PGP versleutelt berichtinhoud, geen communicatiepatronen. Een tegenstander die uw netwerkverkeer kan observeren, kan vaststellen dat u communiceert, hoe vaak, en mogelijk met wie (op basis van sleutelserververzoeken), zelfs zonder de inhoud te lezen. Tor-proxyondersteuning in de OPSEC-modus pakt dit probleem gedeeltelijk aan.</li>
</ul>

<p>Voor een bredere introductie in deze concepten behandelt <a href="/nl/docs/pgp-for-beginners/">PGP voor beginners</a> de basisprincipes van publieke-sleutelcryptografie en sleutelbeheer.</p>

<h2 id="best-practices">Best practices voor PGP via klembord</h2>

<p>Het volgen van deze praktijken maximaliseert de beveiligingsvoordelen van PGP-klembordversleuteling:</p>

<ol>
<li><strong>Schakel klembordgeschiedenis uit.</strong> Schakel klembordgeschiedenis op besturingssysteemniveau uit en verwijder klembordbeheerders van derden van machines waar u versleutelde communicatie beheert.</li>
<li><strong>Houd automatisch wissen ingeschakeld.</strong> Schakel de timer voor automatisch klembord wissen niet uit. Stel deze in op het kortste interval dat u bruikbaar vindt. Vijf tot vijftien seconden is voldoende voor de meeste workflows.</li>
<li><strong>Gebruik OPSEC-modus wanneer gerechtvaardigd.</strong> Als u werkt in een omgeving waar zelfs het gebruik van versleuteling een risico is, schakel dan de OPSEC-modus in voor venstertitelvermomming, sleutels alleen in RAM en Tor-routering.</li>
<li><strong>Verifieer ontvangersleutels buiten het kanaal.</strong> Verifieer voordat u een bericht versleutelt naar iemands publieke sleutel de sleutelvingerafdruk via een apart kanaal (persoonlijk, via spraakgesprek, via een ondertekend bericht van een bekende sleutel). Dit voorkomt man-in-the-middle-aanvallen op sleuteldistributie.</li>
<li><strong>Gebruik sterke wachtwoordzinnen.</strong> Bescherm uw privesleutel met een wachtwoordzin die zowel lang als moeilijk te raden is. Een wachtwoordzin van vier tot zes willekeurig gegenereerde woorden is veiliger en makkelijker te typen dan een korte reeks gemengde tekens.</li>
<li><strong>Houd uw eindpunt schoon.</strong> Klembordversleuteling gaat uit van een betrouwbaar apparaat. Gebruik een up-to-date besturingssysteem, vermijd het installeren van onbetrouwbare software, en gebruik volledige schijfversleuteling om gegevens in rust te beschermen.</li>
<li><strong>Geef de voorkeur aan Ed25519/X25519-sleutels.</strong> KeychainPGP gebruikt deze moderne elliptische-curvealgoritmen standaard om goede redenen. Ze zijn snel, compact en bestand tegen een reeks implementatieaanvallen die oudere RSA- en DSA-sleutels treffen. Als u migreert van een oudere sleutel, genereer dan een nieuw Ed25519/X25519-sleutelpaar en maak de overgang met uw contacten.</li>
<li><strong>Test uw workflow.</strong> Voordat u op klembordversleuteling vertrouwt voor kritieke communicatie, oefen de volledige cyclus: genereer sleutels, wissel publieke sleutels uit, versleutel een testbericht, ontsleutel het aan de andere kant. Bekendheid met het proces vermindert het risico op fouten onder druk.</li>
</ol>

<p>PGP-klembordversleuteling is geen wondermiddel, maar gecombineerd met goede operationele beveiligingspraktijken biedt het een praktisch en laagdrempelig pad naar versleutelde communicatie dat integreert met de tools die u al gebruikt. <a href="/nl/pgp-online-encrypt/">Probeer KeychainPGP in uw browser</a> om de klembord-eerst-workflow in actie te zien.</p>
`
};

export default doc;
