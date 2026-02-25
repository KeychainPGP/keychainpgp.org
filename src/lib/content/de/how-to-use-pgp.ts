import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP verwenden: Schritt-fuer-Schritt-Anleitung zur Verschluesselung (2026)',
	description: 'Lernen Sie Schritt fuer Schritt, PGP-Verschluesselung zu nutzen. Schluessel generieren, Nachrichten ver- und entschluesseln, signieren und verifizieren -- mit dieser umfassenden PGP-Anleitung.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'PGP verwenden', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Was Sie benoetigen', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Schritt 1: Schluesselpaar generieren', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Schritt 2: Oeffentlichen Schluessel teilen', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Schritt 3: Schluessel Ihrer Kontakte importieren', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Schritt 4: Nachricht verschluesseln', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Schritt 5: Nachricht entschluesseln', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Schritt 6: Nachricht signieren', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Schritt 7: Signatur verifizieren', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGP-Zwischenablage-Workflow', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Web-App vs. Desktop-App', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP verwenden</h1>

<p>Um PGP zu nutzen, generieren Sie ein Schluesselpaar (einen oeffentlichen und einen privaten Schluessel), teilen Ihren oeffentlichen Schluessel mit den Personen, mit denen Sie kommunizieren moechten, importieren deren oeffentliche Schluessel und verwenden diese Schluessel dann zum Ver- und Entschluesseln, Signieren und Verifizieren von Nachrichten. PGP-Verschluesselung stellt sicher, dass nur der vorgesehene Empfaenger Ihre Nachricht lesen kann, waehrend digitale Signaturen beweisen, dass eine Nachricht tatsaechlich von Ihnen stammt. Tools wie <a href="/de/pgp-online-encrypt/">KeychainPGP</a> machen diesen Prozess dank eines Zwischenablage-Workflows zugaenglich -- ganz ohne Kommandozeile.</p>

<p>Diese PGP-Anleitung fuehrt Sie durch jeden Schritt, von der Erzeugung Ihres ersten Schluesselpaars bis zum Senden und Empfangen verschluesselter Nachrichten. Wenn Ihnen das Konzept der Public-Key-Kryptografie neu ist, lesen Sie zunaechst <a href="/de/docs/what-is-pgp/">Was ist PGP?</a> oder <a href="/de/docs/pgp-for-beginners/">PGP fuer Einsteiger</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">Was Sie benoetigen, bevor Sie beginnen</h2>

<p>Bevor Sie Ihre erste PGP-Nachricht verschluesseln, brauchen Sie eine PGP-Anwendung:</p>

<ul>
<li><strong>KeychainPGP-Web-App</strong> -- Oeffnen Sie das <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a> in einem beliebigen modernen Browser. Alles laeuft lokal ueber WebAssembly, kompiliert aus Rust. Keine Installation, kein Konto, keine Daten werden an einen Server gesendet.</li>
<li><strong>KeychainPGP-Desktop-App</strong> -- Laden Sie die native App fuer Windows, macOS, Linux oder Android von der <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub-Release-Seite</a> herunter. Die Desktop-App bietet globale Tastenkuerzel, Taskleisten-Integration, automatische Zwischenablage-Loesung und QR-Code-Synchronisierung.</li>
<li><strong>KeychainPGP CLI</strong> -- Das CLI <code>keychainpgp</code> bietet Befehle fuer Schluesselerzeugung, Verschluesselung, Entschluesselung, Signatur, Verifikation und Schluesselbundverwaltung. Ideal fuer Scripting und Automatisierung.</li>
<li><strong>GnuPG (GPG)</strong> -- Das traditionelle Kommandozeilen-Tool. Maechtig, erfordert aber Vertrautheit mit dem Terminal. Siehe <a href="/de/docs/pgp-vs-gpg/">PGP vs GPG</a> fuer einen detaillierten Vergleich.</li>
</ul>

<blockquote><p><strong>Tipp:</strong> Wenn Sie PGP-Verschluesselung jetzt einfach ausprobieren moechten, ohne etwas zu installieren, oeffnen Sie das <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a> und folgen Sie dieser Anleitung.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Schritt 1: PGP-Schluesselpaar generieren</h2>

<p>Ein PGP-Schluesselpaar besteht aus zwei mathematisch verknuepften Schluesseln:</p>

<ul>
<li><strong>Oeffentlicher Schluessel</strong> -- Diesen teilen Sie frei. Jeder kann ihn verwenden, um Nachrichten an Sie zu verschluesseln oder Ihre Signaturen zu ueberpruefen.</li>
<li><strong>Privater Schluessel</strong> -- Diesen halten Sie geheim. Er entschluesselt Nachrichten, die mit Ihrem oeffentlichen Schluessel verschluesselt wurden, und erstellt digitale Signaturen.</li>
</ul>

<h3>Schluessel in KeychainPGP generieren</h3>

<ol>
<li>Oeffnen Sie KeychainPGP (Web-App oder Desktop-App).</li>
<li>Navigieren Sie zum Tab <strong>Schluessel</strong>.</li>
<li>Klicken Sie auf <strong>Neuen Schluessel generieren</strong>.</li>
<li>Geben Sie Ihren Namen und Ihre E-Mail-Adresse ein.</li>
<li>Klicken Sie auf <strong>Generieren</strong>. KeychainPGP erstellt ein <strong>Ed25519- + X25519</strong>-Schluesselpaar -- den modernsten und sichersten in OpenPGP verfuegbaren Algorithmus.</li>
</ol>

<h3>Schluessel mit GPG generieren (Kommandozeile)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Waehlen Sie den Schluesseltyp (RSA oder ECC), die Groesse und die Gueltigkeitsdauer. Fuer moderne Sicherheit waehlen Sie Ed25519, sofern Ihre GPG-Version dies unterstuetzt.</p>

<hr>

<h2 id="step-2-share-your-public-key">Schritt 2: Ihren oeffentlichen Schluessel teilen</h2>

<p>Ihr oeffentlicher Schluessel ist ein Textblock im <strong>ASCII-Armor</strong>-Format. Sie koennen ihn ueberall teilen:</p>

<ul>
<li><strong>E-Mail</strong> -- Fuegen Sie ihn in den E-Mail-Text ein oder haengen Sie ihn als <code>.asc</code>-Datei an.</li>
<li><strong>Messaging-Apps</strong> -- Senden Sie ihn ueber Signal, WhatsApp, Matrix oder eine beliebige Chat-Plattform.</li>
<li><strong>Ihre Website</strong> -- Veroeffentlichen Sie ihn auf Ihrer persoenlichen Seite, Ihrem GitHub-Profil oder Ihrer Twitter-Bio.</li>
<li><strong>Schluesselserver</strong> -- Laden Sie ihn auf einen oeffentlichen Schluesselserver wie <code>keys.openpgp.org</code> hoch.</li>
</ul>

<p><strong>Wichtig:</strong> Teilen Sie nur Ihren <strong>oeffentlichen</strong> Schluessel. Geben Sie Ihren privaten Schluessel unter keinen Umstaenden an Dritte weiter.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Schritt 3: Oeffentliche Schluessel Ihrer Kontakte importieren</h2>

<p>Bevor Sie jemandem eine verschluesselte Nachricht senden koennen, benoetigen Sie dessen oeffentlichen Schluessel. Bitten Sie Ihren Kontakt, Ihnen seinen oeffentlichen Schluessel im ASCII-Armor-Format zu senden, oder suchen Sie ihn auf einem Schluesselserver.</p>

<h3>Schluessel in KeychainPGP importieren</h3>

<ol>
<li>Kopieren Sie den oeffentlichen Schluesselblock des Kontakts in Ihre Zwischenablage.</li>
<li>Oeffnen Sie KeychainPGP und gehen Sie zum Tab <strong>Schluessel</strong>.</li>
<li>Klicken Sie auf <strong>Schluessel importieren</strong> und fuegen Sie den Schluessel ein.</li>
<li>Der Kontakt erscheint in Ihrer Schluesselliste mit Name und E-Mail-Adresse.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Schritt 4: Nachricht verschluesseln</h2>

<h3>Verschluesselung in KeychainPGP (Web oder Desktop)</h3>

<ol>
<li>Wechseln Sie zum Tab <strong>Verschluesseln</strong>.</li>
<li>Geben oder fuegen Sie die Nachricht ein, die Sie verschluesseln moechten.</li>
<li>Waehlen Sie den Empfaenger aus Ihrer Schluesselliste.</li>
<li>Klicken Sie auf <strong>In Zwischenablage verschluesseln</strong>. Die verschluesselte Nachricht wird in Ihre Zwischenablage kopiert.</li>
<li>Fuegen Sie die verschluesselte Nachricht in Ihre E-Mail, Ihren Chat oder einen anderen Kommunikationskanal ein.</li>
</ol>

<h3>Verschluesselung mit dem Desktop-Tastenkuerzel</h3>

<p>Mit der KeychainPGP-Desktop-App geht es dank des <a href="/de/docs/clipboard-encryption/">Zwischenablage-Workflows</a> noch schneller:</p>

<ol>
<li>Tippen Sie Ihre Nachricht in einer beliebigen Anwendung.</li>
<li>Markieren und kopieren Sie den Text (<code>Ctrl+C</code>).</li>
<li>Druecken Sie <strong><code>Ctrl+Shift+E</code></strong> -- KeychainPGP verschluesselt den Inhalt der Zwischenablage.</li>
<li>Fuegen Sie die verschluesselte Nachricht ein (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Schritt 5: Nachricht entschluesseln</h2>

<h3>Entschluesselung in KeychainPGP (Web oder Desktop)</h3>

<ol>
<li>Kopieren Sie den vollstaendigen verschluesselten Nachrichtenblock.</li>
<li>Wechseln Sie in KeychainPGP zum Tab <strong>Entschluesseln</strong>.</li>
<li>Fuegen Sie den verschluesselten Text ein.</li>
<li>Klicken Sie auf <strong>Entschluesseln</strong>. Der Klartext erscheint sofort.</li>
</ol>

<h3>Entschluesselung mit dem Desktop-Tastenkuerzel</h3>

<ol>
<li>Markieren und kopieren Sie den verschluesselten Nachrichtenblock (<code>Ctrl+C</code>).</li>
<li>Druecken Sie <strong><code>Ctrl+Shift+D</code></strong> -- KeychainPGP entschluesselt den Inhalt der Zwischenablage.</li>
<li>Der Klartext ersetzt den verschluesselten Text in Ihrer Zwischenablage. Fuegen Sie ihn dort ein, wo Sie ihn benoetigen.</li>
</ol>

<p>Die Desktop-App verfuegt ausserdem ueber die <strong>automatische Zwischenablage-Loesung</strong>: Nach 30 Sekunden wird der entschluesselte Text automatisch aus der Zwischenablage entfernt.</p>

<hr>

<h2 id="step-6-sign-a-message">Schritt 6: Nachricht signieren</h2>

<p>Eine digitale PGP-Signatur beweist zweierlei:</p>

<ol>
<li><strong>Authentizitaet</strong> -- Die Nachricht wurde vom Inhaber des Signaturschluessels verfasst.</li>
<li><strong>Integritaet</strong> -- Die Nachricht wurde seit der Signierung nicht veraendert.</li>
</ol>

<p>Signieren verschluesselt die Nachricht nicht. Jeder kann eine signierte Nachricht lesen, aber ueberpruefen, dass sie tatsaechlich von Ihnen stammt und nicht manipuliert wurde.</p>

<h3>Wann Nachrichten signiert werden sollten</h3>

<ul>
<li>Ankuendigung von Software-Releases oder Sicherheitshinweisen</li>
<li>Identitaetsverifikation in oeffentlichen Foren</li>
<li>E-Mails signieren, um deren Herkunft zu belegen</li>
<li>Git-Commits signieren fuer Code-Integritaet</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Schritt 7: Signatur verifizieren</h2>

<p>Wenn Sie eine signierte Nachricht erhalten, koennen Sie ueberpruefen, ob sie authentisch und unveraendert ist.</p>

<h3>Verifikation in KeychainPGP</h3>

<ol>
<li>Kopieren Sie die vollstaendige signierte Nachricht (einschliesslich des Signaturblocks).</li>
<li>Wechseln Sie zum Tab <strong>Verifizieren</strong>.</li>
<li>Fuegen Sie die signierte Nachricht ein.</li>
<li>Klicken Sie auf <strong>Verifizieren</strong>. KeychainPGP bestaetigt, ob die Signatur gueltig ist.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGP-Zwischenablage-Workflow</h2>

<p>Was KeychainPGP von traditionellen PGP-Tools unterscheidet, ist sein <a href="/de/docs/clipboard-encryption/">Zwischenablage-Verschluesselungs-Workflow</a>. Statt mit Dateien zu arbeiten oder einen speziellen E-Mail-Client zu benoetigen, arbeitet KeychainPGP mit jeder Anwendung ueber die System-Zwischenablage.</p>

<table>
<tr><th>Aktion</th><th>Web-App</th><th>Desktop-App</th></tr>
<tr><td>Verschluesseln</td><td>Text einfuegen, auf Verschluesseln klicken</td><td>Text kopieren, <code>Ctrl+Shift+E</code> druecken</td></tr>
<tr><td>Entschluesseln</td><td>Verschluesselten Text einfuegen, auf Entschluesseln klicken</td><td>Verschluesselten Text kopieren, <code>Ctrl+Shift+D</code> druecken</td></tr>
<tr><td>Signieren</td><td>Text einfuegen, auf Signieren klicken</td><td>Im Anwendungsfenster verfuegbar</td></tr>
<tr><td>Verifizieren</td><td>Signierten Text einfuegen, auf Verifizieren klicken</td><td>Im Anwendungsfenster verfuegbar</td></tr>
</table>

<p>Zusaetzliche Sicherheitsfunktionen der Desktop-App:</p>

<ul>
<li><strong>Automatische Zwischenablage-Loesung</strong> -- Entschluesselter Text wird nach 30 Sekunden aus der Zwischenablage entfernt.</li>
<li><strong>OPSEC-Modus</strong> -- Getarnter Fenstertitel, Schluesselspeicherung nur im RAM und Notfall-Loeschtaste.</li>
<li><strong>Betriebssystem-Anmeldeinformationsspeicher</strong> -- Private Schluessel werden sicher ueber Windows Credential Manager, macOS Keychain oder Linux Secret Service gespeichert.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Web-App vs. Desktop-App</h2>

<p><strong>Web-App</strong> (<a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a>):</p>

<ul>
<li>Laeuft vollstaendig im Browser ueber WebAssembly</li>
<li>Keine Installation, kein Konto erforderlich</li>
<li>Perfekt fuer schnelle Verschluesselungsaufgaben</li>
<li>Schluessel werden im lokalen Browserspeicher abgelegt</li>
</ul>

<p><strong>Desktop-App</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Globale Tastenkuerzel zum Ver- und Entschluesseln</li>
<li>Taskleisten-Integration</li>
<li>Automatische Zwischenablage-Loesung</li>
<li>OPSEC-Modus mit Schluesseln nur im RAM und Notfall-Loesung</li>
<li>Sichere Schluesselspeicherung ueber den Anmeldeinformationsspeicher des Betriebssystems</li>
<li>Besser geeignet fuer den taeglichen Gebrauch und langfristige Schluesselverwaltung</li>
</ul>

<p>Beide Anwendungen sind kostenlos, Open Source (MIT / Apache-2.0) und ohne jegliche Telemetrie.</p>

<hr>

<h2 id="frequently-asked-questions">Haeufig gestellte Fragen</h2>

<h3>Sollte ich meinen privaten Schluessel teilen?</h3>

<p>Nein. Sie duerfen Ihren privaten Schluessel <strong>niemals</strong> an Dritte weitergeben. Ihr privater Schluessel ermoeglicht es Ihnen, Nachrichten zu entschluesseln und digitale Signaturen zu erstellen. Gelangt jemand anderes an Ihren privaten Schluessel, kann diese Person alle an Sie verschluesselten Nachrichten lesen und sich als Sie ausgeben.</p>

<h3>Was passiert, wenn ich meinen privaten Schluessel verliere?</h3>

<p>Wenn Sie Ihren privaten Schluessel verlieren, verlieren Sie dauerhaft die Moeglichkeit, alle mit dem zugehoerigen oeffentlichen Schluessel verschluesselten Nachrichten zu entschluesseln. Es gibt keinen Wiederherstellungsmechanismus. Bewahren Sie immer eine sichere Sicherungskopie Ihres privaten Schluessels auf.</p>

<h3>Kann ich Dateien mit PGP verschluesseln?</h3>

<p>Ja. PGP kann sowohl Textnachrichten als auch Binaerdateien verschluesseln. KeychainPGP konzentriert sich auf Text-Verschluesselung ueber die Zwischenablage, waehrend Tools wie GnuPG auch Dateien direkt verschluesseln koennen. Fuer einen detaillierten Vergleich siehe den Leitfaden <a href="/de/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>Ist PGP-Verschluesselung sicher?</h3>

<p>PGP-Verschluesselung mit modernen Algorithmen ist aeusserst sicher. KeychainPGP verwendet Ed25519 fuer Signaturen und X25519 fuer den Schluesselaustausch -- Elliptische-Kurven-Algorithmen, die eine Sicherheit vergleichbar mit RSA-3072 bei einem Bruchteil der Schluesselgroesse bieten. Die groessten Risiken sind nicht kryptografischer, sondern operativer Natur: schwache Passphrasen, kompromittierte Geraete oder nachlassige Schluesselverwaltung.</p>

<h3>Was ist ein PGP-Fingerprint?</h3>

<p>Ein PGP-Fingerprint ist eine 40-stellige hexadezimale Zeichenkette, die einen PGP-Schluessel eindeutig identifiziert. Fingerprints werden verwendet, um zu ueberpruefen, dass ein oeffentlicher Schluessel tatsaechlich der Person gehoert, fuer die Sie ihn halten. Vergleichen Sie den Fingerprint immer ueber einen separaten vertrauenswuerdigen Kanal (Telefonanruf, persoenliches Treffen), um Man-in-the-Middle-Angriffe zu verhindern.</p>
`
};

export default doc;
