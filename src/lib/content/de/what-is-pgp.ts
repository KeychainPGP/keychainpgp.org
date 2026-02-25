import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Was ist PGP? Umfassender Leitfaden zur Pretty-Good-Privacy-Verschluesselung',
	description: 'Erfahren Sie, was PGP (Pretty Good Privacy) ist, wie PGP-Verschluesselung mit Public-Key-Kryptografie funktioniert, den OpenPGP-Standard, digitale Signaturen und moderne Einsatzgebiete.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'Was ist PGP-Verschluesselung?', level: 2 },
		{ id: 'history-of-pgp', text: 'Geschichte von PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Wie PGP-Verschluesselung funktioniert', level: 2 },
		{ id: 'public-key-cryptography', text: 'Public-Key-Kryptografie', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'Das hybride Verschluesselungsmodell', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Digitale PGP-Signaturen', level: 2 },
		{ id: 'the-openpgp-standard', text: 'Der OpenPGP-Standard', level: 2 },
		{ id: 'web-of-trust', text: 'Web of Trust', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGP-Algorithmen und Schluesseltypen', level: 2 },
		{ id: 'classic-algorithms', text: 'Klassische Algorithmen', level: 3 },
		{ id: 'modern-algorithms', text: 'Moderne Algorithmen', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Gaengige Anwendungsfaelle fuer PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP heute', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Erste Schritte mit PGP', level: 2 }
	],
	html: `
<h1>Was ist PGP? Umfassender Leitfaden zur Pretty-Good-Privacy-Verschluesselung</h1>

<h2 id="what-is-pgp-encryption">Was ist PGP-Verschluesselung?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> ist ein Verschluesselungsprogramm, das kryptografische Vertraulichkeit und Authentifizierung fuer Datenkommunikation bereitstellt. Die PGP-Verschluesselung nutzt eine Kombination aus symmetrischer und asymmetrischer Kryptografie, damit Nutzer Nachrichten, Dateien und andere Daten so verschluesseln koennen, dass nur der vorgesehene Empfaenger sie lesen kann. Urspruenglich 1991 von Phil Zimmermann entwickelt, wurde PGP zum weltweit verbreitetsten Standard fuer E-Mail-Verschluesselung und bildet die Grundlage der <strong>OpenPGP</strong>-Spezifikation (RFC 4880). Ob Sie eine vertrauliche E-Mail versenden, die Identitaet eines Softwareherausgebers ueberpruefen oder sensible Dateien schuetzen muessen -- PGP bietet ein bewaehrtes kryptografisches Framework, dem Journalisten, Sicherheitsforscher, Regierungen und alltaegliche Nutzer gleichermassen vertrauen.</p>

<p>Wenn Sie PGP-Verschluesselung sofort ohne Softwareinstallation ausprobieren moechten, bietet KeychainPGP ein <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a>, das vollstaendig in Ihrem Browser laeuft.</p>

<h2 id="history-of-pgp">Geschichte von PGP</h2>

<p>Phil Zimmermann veroeffentlichte PGP 1.0 im Juni 1991 als freie Software, angetrieben von der Ueberzeugung, dass starke Kryptografie fuer alle Buerger zugaenglich sein sollte -- nicht nur fuer Regierungen und Militaer. Zu dieser Zeit wurde starke Verschluesselung nach den US-Exportbestimmungen als Kriegswaffe eingestuft, und Zimmermann war drei Jahre lang Gegenstand einer strafrechtlichen Ermittlung des US-Zolls wegen der internationalen Verbreitung von PGP. Die Ermittlung wurde 1996 ohne Anklage eingestellt und der Fall wurde zu einem Meilenstein in der Geschichte der digitalen Buergerrechte.</p>

<p>PGP durchlief mehrere kommerzielle Stationen. Zimmermann gruendete 1996 PGP Inc., die 1997 von Network Associates (spaeter McAfee) und schliesslich 2010 von Symantec uebernommen wurde. Waehrend dieser Uebergaenge wurde das zugrundeliegende kryptografische Protokoll unter dem Namen <strong>OpenPGP</strong> von der Internet Engineering Task Force (IETF) standardisiert, um sicherzustellen, dass das Protokoll unabhaengig vom kommerziellen Eigentuemer offen und interoperabel bleibt.</p>

<p>Die Veroeffentlichung des OpenPGP-Standards bedeutete, dass jeder kompatible Implementierungen erstellen konnte. Dies fuehrte zur Entwicklung des GNU Privacy Guard (GnuPG oder GPG), einer freien Open-Source-Implementierung, die bis heute zu den meistgenutzten PGP-Tools gehoert. Um die Unterschiede zwischen diesen Implementierungen zu verstehen, lesen Sie unseren Leitfaden zu <a href="/de/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Wie PGP-Verschluesselung funktioniert</h2>

<p>Die PGP-Verschluesselung basiert auf einer ausgefeilten Kombination kryptografischer Techniken. Statt einer einzigen Methode setzt PGP ein <strong>hybrides Verschluesselungsmodell</strong> ein, das die Geschwindigkeit symmetrischer Verschluesselung mit den Vorteilen der Schluesselverteilung asymmetrischer (Public-Key-)Verschluesselung kombiniert.</p>

<h3 id="public-key-cryptography">Public-Key-Kryptografie</h3>

<p>Im Kern von PGP steht die <strong>Public-Key-Kryptografie</strong>, auch asymmetrische Kryptografie genannt. Jeder PGP-Nutzer generiert ein <strong>Schluesselpaar</strong> aus zwei mathematisch verknuepften Schluesseln:</p>

<ul>
<li><strong>Oeffentlicher Schluessel</strong> -- wird frei geteilt. Andere verwenden diesen Schluessel, um Nachrichten an Sie zu verschluesseln und Ihre digitalen Signaturen zu ueberpruefen.</li>
<li><strong>Privater Schluessel</strong> (auch geheimer Schluessel genannt) -- wird streng vertraulich behandelt. Mit diesem Schluessel entschluesseln Sie Nachrichten, die an Sie gesendet werden, und erstellen digitale Signaturen.</li>
</ul>

<p>Die grundlegende Eigenschaft dieses Systems: Daten, die mit einem oeffentlichen Schluessel verschluesselt wurden, koennen nur mit dem zugehoerigen privaten Schluessel entschluesselt werden -- und umgekehrt. So entfaellt die Notwendigkeit, vor der Kommunikation ein gemeinsames Geheimnis auszutauschen.</p>

<h3 id="the-hybrid-encryption-model">Das hybride Verschluesselungsmodell</h3>

<p>Obwohl Public-Key-Kryptografie das Problem der Schluesselverteilung loest, sind asymmetrische Algorithmen wie RSA rechenintensiv fuer die Verschluesselung grosser Datenmengen. PGP loest dieses Problem mit einem hybriden Ansatz:</p>

<ol>
<li><strong>Sitzungsschluessel-Erzeugung</strong> -- PGP generiert fuer jede Nachricht einen einmaligen, zufaelligen <strong>symmetrischen Sitzungsschluessel</strong> (typischerweise 128 oder 256 Bit).</li>
<li><strong>Datenverschluesselung</strong> -- Der Nachrichteninhalt wird mit einem schnellen symmetrischen Verfahren (z. B. AES-256) und dem Sitzungsschluessel verschluesselt.</li>
<li><strong>Sitzungsschluessel-Verschluesselung</strong> -- Der Sitzungsschluessel selbst wird mit dem oeffentlichen Schluessel des Empfaengers verschluesselt (asymmetrische Operation).</li>
<li><strong>Buendelung</strong> -- Die verschluesselte Nachricht und der verschluesselte Sitzungsschluessel werden zusammengefasst und an den Empfaenger gesendet.</li>
</ol>

<p>Beim Empfang wird der Vorgang umgekehrt: Der Empfaenger nutzt seinen <strong>privaten Schluessel</strong>, um den Sitzungsschluessel zu entschluesseln, und entschluesselt dann mit dem Sitzungsschluessel den Nachrichteninhalt.</p>

<h2 id="pgp-digital-signatures">Digitale PGP-Signaturen</h2>

<p>Ueber die Verschluesselung hinaus bietet PGP <strong>digitale Signaturen</strong>, die zwei wesentliche Funktionen erfuellen: <strong>Authentifizierung</strong> (Nachweis, wer eine Nachricht gesendet hat) und <strong>Integritaet</strong> (Nachweis, dass die Nachricht waehrend der Uebertragung nicht veraendert wurde).</p>

<p>Der Signaturvorgang funktioniert wie folgt:</p>

<ol>
<li>PGP berechnet einen <strong>kryptografischen Hash</strong> (eine Pruefsumme fester Laenge) des Nachrichteninhalts mit einem Algorithmus wie SHA-256 oder SHA-512.</li>
<li>Dieser Hash wird mit dem <strong>privaten Schluessel</strong> des Absenders verschluesselt, wodurch die digitale Signatur entsteht.</li>
<li>Die Signatur wird der Nachricht angehaengt.</li>
</ol>

<p>Jeder Empfaenger kann die Signatur ueberpruefen, indem er sie mit dem <strong>oeffentlichen Schluessel</strong> des Absenders entschluesselt, um den urspruenglichen Hash zu erhalten, unabhaengig den Hash der empfangenen Nachricht berechnet und die beiden Hashes vergleicht. Stimmen sie ueberein, ist die Nachricht authentisch und unveraendert.</p>

<h2 id="the-openpgp-standard">Der OpenPGP-Standard</h2>

<p><strong>OpenPGP</strong> ist der offene Standard, der die Nachrichtenformate, Algorithmen und Verfahren definiert, die PGP-kompatible Software verwendet. Es ist kein eigenstaendiges Softwareprodukt, sondern eine Spezifikation, die jeder Entwickler implementieren kann.</p>

<p>Die massgeblichen Dokumente sind:</p>

<ul>
<li><strong>RFC 4880</strong> (November 2007) -- Die aktuelle Hauptspezifikation des OpenPGP-Nachrichtenformats.</li>
<li><strong>RFC 6637</strong> (Juni 2012) -- Erweitert OpenPGP um die Unterstuetzung von Elliptische-Kurven-Kryptografie (ECC).</li>
<li><strong>RFC 9580</strong> (2024) -- Die juengste Ueberarbeitung, die den Standard mit verpflichtender Ed25519/X25519-Unterstuetzung, AEAD-Verschluesselungsmodi und verbesserten Schluessel-Fingerprints modernisiert.</li>
</ul>

<p>OpenPGP garantiert Interoperabilitaet: Eine mit KeychainPGP verschluesselte Nachricht kann von GnuPG, Mailvelope oder jeder anderen konformen Implementierung entschluesselt werden.</p>

<h2 id="web-of-trust">Web of Trust</h2>

<p>Eines der charakteristischen Merkmale von PGP ist sein dezentrales <strong>Web-of-Trust</strong>-Modell zur Feststellung der Authentizitaet oeffentlicher Schluessel. Im Gegensatz zum zentralisierten Zertifizierungsstellen-Modell (CA), das bei TLS/SSL verwendet wird, erlaubt PGP den Nutzern, fuereinander zu buergen.</p>

<p>Das Web of Trust funktioniert ueber <strong>Schluesselsignaturen</strong>: Wenn Sie die Identitaet einer Person ueberpruefen und bestaetigen, dass sie einen bestimmten oeffentlichen Schluessel kontrolliert, signieren Sie deren Schluessel mit Ihrem eigenen. Diese Signatur ist eine oeffentliche Erklaerung, dass Sie glauben, der Schluessel gehoere tatsaechlich der angegebenen Person.</p>

<p>Tools wie <a href="/de/pgp-online-encrypt/">KeychainPGP</a> vereinfachen diesen Prozess, indem sie Nutzern ermoeglichen, ueber eine intuitive Oberflaeche direkt mit Schluesseln zu arbeiten und die <a href="/de/docs/clipboard-encryption/">Zwischenablage-Verschluesselung</a> zu nutzen, um verschluesselte Nachrichten und oeffentliche Schluessel einfach auszutauschen.</p>

<h2 id="pgp-algorithms-and-key-types">PGP-Algorithmen und Schluesseltypen</h2>

<p>PGP unterstuetzt eine Reihe kryptografischer Algorithmen, die sich im Laufe der Zeit mit den Fortschritten des Fachgebiets weiterentwickelt haben.</p>

<h3 id="classic-algorithms">Klassische Algorithmen</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> -- Der am weitesten verbreitete asymmetrische Algorithmus in der PGP-Geschichte. RSA-Schluessel mit 2048 Bit gelten heute als Mindeststandard, wobei 4096-Bit-Schluessel fuer langfristigen Schutz empfohlen werden.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> -- Wird fuer Signaturen in Kombination mit ElGamal fuer die Verschluesselung verwendet. Heute weniger verbreitet.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> -- Das vorherrschende symmetrische Verfahren fuer die Verschluesselung von Nachrichteninhalten. AES-128 und AES-256 werden unterstuetzt.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> -- Kryptografische Hash-Funktionen fuer die Berechnung von Pruefsummen in digitalen Signaturen.</li>
</ul>

<h3 id="modern-algorithms">Moderne Algorithmen</h3>

<p>Die neueste Generation von OpenPGP-Implementierungen unterstuetzt <strong>Elliptische-Kurven-Kryptografie (ECC)</strong>, die bei deutlich kleineren Schluesselgroessen eine vergleichbare Sicherheit wie RSA bietet:</p>

<ul>
<li><strong>Ed25519</strong> -- Ein auf Curve25519 basierender Algorithmus fuer digitale Signaturen. Erzeugt schnelle und kompakte Signaturen. Empfohlen in RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> -- Wird fuer den Schluesselaustausch (Verschluesselung) verwendet. Bietet hervorragende Leistung bei starken Sicherheitseigenschaften.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> -- Vom NIST standardisierte elliptische Kurven. Von OpenPGP unterstuetzt, aber generell weniger bevorzugt als Curve25519-basierte Algorithmen.</li>
</ul>

<p>Moderne Tools wie KeychainPGP unterstuetzen diese zeitgemaessen Algorithmen und machen die Schluesselerzeugung mit Ed25519 und X25519 einfach und unkompliziert.</p>

<h2 id="common-use-cases-for-pgp">Gaengige Anwendungsfaelle fuer PGP</h2>

<ul>
<li><strong>Sichere E-Mail</strong> -- Der urspruengliche und bekannteste Anwendungsfall. PGP ermoeglicht die Verschluesselung von E-Mail-Inhalten und das Signieren von Nachrichten zum Nachweis ihrer Authentizitaet.</li>
<li><strong>Dateiverschluesselung</strong> -- PGP kann einzelne Dateien oder ganze Archive fuer sichere Speicherung oder Uebertragung verschluesseln.</li>
<li><strong>Software-Verifikation</strong> -- Open-Source-Projekte signieren regelmaessig ihre Releases mit PGP-Schluesseln. Nutzer koennen diese Signaturen ueberpruefen, um die Authentizitaet eines Downloads zu bestaetigen.</li>
<li><strong>Sichere Nachrichtenuebermittlung</strong> -- PGP kann jede Textnachricht verschluesseln, besonders nuetzlich auf Plattformen ohne Ende-zu-Ende-Verschluesselung.</li>
<li><strong>Identitaetsverifikation</strong> -- PGP-Schluessel-Fingerprints dienen als ueberpruefbare digitale Identitaeten. Entwickler auf GitHub koennen ihre Commits mit PGP signieren.</li>
<li><strong>Dokumentensignatur</strong> -- Juristische Workflows verwenden mitunter PGP-Signaturen zur Sicherstellung der Nichtabstreitbarkeit.</li>
</ul>

<h2 id="pgp-today">PGP heute</h2>

<p>Mehr als drei Jahrzehnte nach seiner Entstehung bleibt PGP eines der wichtigsten verfuegbaren kryptografischen Werkzeuge. Der OpenPGP-Standard entwickelt sich weiter, wobei RFC 9580 bedeutende Modernisierungen einfuehrt, darunter die verpflichtende Unterstuetzung moderner Elliptische-Kurven-Algorithmen und AEAD-Verschluesselungsmodi.</p>

<p>Das Oekosystem der PGP-Tools hat sich erheblich erweitert. GnuPG bleibt die Referenzimplementierung fuer die Kommandozeilennutzung. Moderne Tools wie KeychainPGP bieten native Desktop-Anwendungen (Windows, macOS, Linux), eine Android-App, ein CLI fuer Scripting und eine Browser-Webanwendung -- alles aufgebaut auf derselben Sequoia-PGP-Engine in Rust.</p>

<h2 id="getting-started-with-pgp">Erste Schritte mit PGP</h2>

<p>Bereit fuer den Einstieg in die PGP-Verschluesselung? Hier sind die besten naechsten Schritte:</p>

<ol>
<li><strong>Im Browser ausprobieren</strong> -- Nutzen Sie das <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a> von KeychainPGP, um ein Schluesselpaar zu erzeugen, eine Nachricht zu verschluesseln oder eine Signatur zu verifizieren -- ohne etwas zu installieren.</li>
<li><strong>Einsteiger-Leitfaden lesen</strong> -- Wenn Sie neu in der Kryptografie sind, begleitet Sie unser Leitfaden <a href="/de/docs/pgp-for-beginners/">PGP fuer Einsteiger</a> Schritt fuer Schritt.</li>
<li><strong>Praktischen Workflow erlernen</strong> -- Unser Leitfaden <a href="/de/docs/how-to-use-pgp/">PGP verwenden</a> behandelt Schluesselerzeugung, Ver- und Entschluesselung, Schluesselbundverwaltung und Best Practices.</li>
<li><strong>Zwischenablage-Verschluesselung verstehen</strong> -- Entdecken Sie die <a href="/de/docs/clipboard-encryption/">PGP-Zwischenablage-Verschluesselung</a>, um Text direkt aus Ihrer Zwischenablage zu ver- und entschluesseln.</li>
<li><strong>Die richtigen Tools kennen</strong> -- Verstehen Sie die <a href="/de/docs/pgp-vs-gpg/">Unterschiede zwischen PGP und GPG</a>, um das passende Tool fuer Ihren Workflow zu waehlen.</li>
</ol>

<p>PGP-Verschluesselung schuetzt sensible Kommunikation seit ueber dreissig Jahren. Mit modernen Tools und Standards ist sie zugaenglicher als je zuvor.</p>
`
};

export default doc;
