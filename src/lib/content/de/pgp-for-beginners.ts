import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP fuer Einsteiger: Einfache Anleitung zum Einstieg in die PGP-Verschluesselung',
	description: 'Lernen Sie PGP-Verschluesselung von Grund auf. Dieser Einsteiger-Leitfaden erklaert, wie PGP funktioniert, begleitet Sie durch Ihre erste verschluesselte Nachricht und behandelt die wichtigsten Konzepte.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Warum Verschluesselung wichtig ist', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'Was ist PGP — einfach erklaert', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Wichtige Konzepte', level: 2 },
		{ id: 'public-key-your-address', text: 'Oeffentlicher Schluessel: Ihre Adresse', level: 3 },
		{ id: 'private-key-your-password', text: 'Privater Schluessel: Ihr Passwort', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Verschluesselung vs. Signatur', level: 3 },
		{ id: 'key-fingerprints', text: 'Schluessel-Fingerprints', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Ihre erste PGP-Nachricht', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Haeufige Anfaengerfehler', level: 2 },
		{ id: 'next-steps', text: 'Naechste Schritte', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP fuer Einsteiger: Einfache Anleitung zum Einstieg</h1>

<p>Der Einstieg in PGP ist einfacher, als Sie denken. Sie generieren ein Schluesselpaar — einen oeffentlichen und einen privaten Schluessel --, teilen den oeffentlichen Schluessel mit den Personen, mit denen Sie kommunizieren moechten, und verwenden den privaten Schluessel, um Nachrichten zu entschluesseln, die man Ihnen sendet. Sie muessen keine Software installieren, um es auszuprobieren. Mit einem kostenlosen <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a> wie KeychainPGP koennen Sie Ihre erste Nachricht in weniger als fuenf Minuten verschluesseln — direkt im Browser.</p>

<h2 id="why-encryption-matters">Warum Verschluesselung wichtig ist</h2>

<p>Jeden Tag werden Milliarden von Nachrichten ueber das Internet gesendet. E-Mails, Chat-Nachrichten, Dokumente — die meisten davon im Klartext, was bedeutet, dass jeder, der sie abfaengt, sie lesen kann. Dazu gehoeren Internetanbieter, Hacker in oeffentlichen WLANs und sogar staatliche Ueberwachungsprogramme.</p>

<p><strong>Datenlecks sind keine seltenen Ereignisse.</strong> Sie passieren staendig. Wenn Ihre Nachrichten nicht verschluesselt sind, liegen sie in lesbarem Klartext in Datenbanken und warten auf das naechste Leck.</p>

<p>Verschluesselung loest dieses Problem. Wenn Sie eine Nachricht mit PGP verschluesseln, wird sie in unlesbaren Zeichensalat verwandelt. Nur die Person mit dem richtigen privaten Schluessel kann sie wieder lesbar machen.</p>

<h2 id="what-is-pgp-explained-simply">Was ist PGP — einfach erklaert</h2>

<p>PGP steht fuer <strong>Pretty Good Privacy</strong>. Es wurde 1991 von Phil Zimmermann entwickelt und ist zum weltweiten Standard fuer die Verschluesselung von Nachrichten und Dateien geworden.</p>

<p>Hier ist der einfachste Weg, PGP zu verstehen. Stellen Sie sich einen <strong>Briefkasten mit Einwurfschlitz</strong> vor.</p>

<p>Stellen Sie sich einen besonderen Briefkasten an der Strasse vor. Jeder kann hingehen und einen Brief durch den Schlitz einwerfen. Aber sobald der Brief drin ist, koennen nur Sie ihn herausnehmen, denn nur Sie haben den Schluessel zur Briefkastentuer.</p>

<ul>
<li>Der <strong>Einwurfschlitz</strong> ist Ihr <strong>oeffentlicher Schluessel</strong>. Sie geben ihn jedem, der Ihnen eine private Nachricht senden moechte. Es ist sicher, ihn zu teilen.</li>
<li>Der <strong>Briefkastenschluessel</strong> ist Ihr <strong>privater Schluessel</strong>. Sie geben ihn niemals an andere weiter.</li>
</ul>

<p>Das nennt man <strong>asymmetrische Verschluesselung</strong> — ein Schluessel sperrt, ein anderer entsperrt. Fuer eine tiefergehende technische Erklaerung lesen Sie unseren umfassenden Leitfaden darueber, <a href="/de/docs/what-is-pgp/">was PGP ist</a>.</p>

<h2 id="key-concepts-you-need-to-know">Wichtige Konzepte</h2>

<h3 id="public-key-your-address">Oeffentlicher Schluessel: Ihre Adresse</h3>

<p>Ihr oeffentlicher Schluessel ist wie Ihre Postadresse. Sie verteilen ihn frei, damit Ihnen Leute etwas schicken koennen. Bei PGP teilen Sie Ihren oeffentlichen Schluessel, damit andere Nachrichten verschluesseln koennen, die nur Sie lesen koennen.</p>

<h3 id="private-key-your-password">Privater Schluessel: Ihr Passwort</h3>

<p>Ihr privater Schluessel ist wie Ihr Hausteurschluessel. Er ist das Einzige, mit dem Sie Nachrichten oeffnen koennen, die mit Ihrem oeffentlichen Schluessel verschluesselt wurden. Sie duerfen Ihren privaten Schluessel <strong>niemals teilen</strong>.</p>

<h3 id="encryption-vs-signing">Verschluesselung vs. Signatur</h3>

<p>PGP kann zwei Dinge tun: <strong>verschluesseln</strong> und <strong>signieren</strong>.</p>

<ul>
<li><strong>Verschluesselung</strong> — verwandelt eine Nachricht in unlesbaren Text, den nur der Empfaenger lesen kann. Sie verwenden den oeffentlichen Schluessel des Empfaengers zum Verschluesseln, und dieser nutzt seinen privaten Schluessel zum Entschluesseln.</li>
<li><strong>Signatur</strong> — beweist, dass eine Nachricht von Ihnen stammt und nicht veraendert wurde. Sie verwenden Ihren eigenen privaten Schluessel zum Signieren, und jeder mit Ihrem oeffentlichen Schluessel kann die Signatur ueberpruefen.</li>
</ul>

<h3 id="key-fingerprints">Schluessel-Fingerprints</h3>

<p>Ein Schluessel-Fingerprint ist eine kurze Zeichenfolge, die einen PGP-Schluessel eindeutig identifiziert. Fingerprints dienen dazu, zu <strong>ueberpruefen</strong>, ob ein oeffentlicher Schluessel wirklich der Person gehoert, fuer die Sie ihn halten. Vergleichen Sie den Fingerprint immer ueber einen separaten vertrauenswuerdigen Kanal.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Wenn Sie einen PGP-Schluessel oder eine verschluesselte Nachricht als Textblock sehen, der mit <code>-----BEGIN PGP MESSAGE-----</code> beginnt, handelt es sich um <strong>ASCII Armor</strong>. Das ist einfach eine Methode, Binaerdaten als druckbare Textzeichen zu kodieren, damit sie in E-Mails, Chat-Fenster oder Webformulare kopiert werden koennen.</p>

<h2 id="your-first-pgp-message">Ihre erste PGP-Nachricht</h2>

<p>Gehen wir die Schritte durch, um Ihre erste Nachricht mit der <a href="https://keychainpgp.github.io">KeychainPGP-Web-App</a> zu verschluesseln. Es ist ein kostenloses <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a>, das vollstaendig in Ihrem Browser laeuft.</p>

<p><strong>Schritt 1: Web-App oeffnen.</strong> Gehen Sie zu <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. Die App wird ueber WebAssembly geladen; die PGP-Engine laeuft lokal auf Ihrem Computer.</p>

<p><strong>Schritt 2: Schluesselpaar generieren.</strong> Erstellen Sie im Tab Schluessel einen neuen Schluessel. KeychainPGP generiert ein modernes Ed25519- + X25519-Schluesselpaar.</p>

<p><strong>Schritt 3: Oeffentlichen Schluessel exportieren und teilen.</strong> Nutzen Sie die Exportfunktion, um Ihren oeffentlichen Schluessel im ASCII-Armor-Format zu kopieren.</p>

<p><strong>Schritt 4: Oeffentlichen Schluessel des Empfaengers importieren.</strong> Fuegen Sie im Tab Schluessel den oeffentlichen Schluesselblock Ihres Kontakts ein.</p>

<p><strong>Schritt 5: Nachricht schreiben und verschluesseln.</strong> Gehen Sie zum Tab Verschluesseln, tippen Sie Ihre Nachricht, waehlen Sie den Empfaenger und klicken Sie auf <strong>"In Zwischenablage verschluesseln"</strong>.</p>

<p><strong>Schritt 6: Verschluesselte Nachricht senden.</strong> Fuegen Sie den verschluesselten Text in eine beliebige E-Mail, einen Chat oder eine Messaging-App ein.</p>

<p><strong>Schritt 7: Antwort entschluesseln.</strong> Kopieren Sie den verschluesselten PGP-Nachrichtenblock, gehen Sie zum Tab Entschluesseln, fuegen Sie ein und klicken Sie auf Entschluesseln.</p>

<p>Fuer eine ausfuehrlichere Anleitung lesen Sie unser Tutorial <a href="/de/docs/how-to-use-pgp/">PGP verwenden</a>.</p>

<h2 id="common-beginner-mistakes">Haeufige Anfaengerfehler</h2>

<p><strong>1. Privaten Schluessel teilen.</strong> Ihr privater Schluessel darf niemals an andere gesendet werden. Teilen Sie nur Ihren <strong>oeffentlichen</strong> Schluessel.</p>

<p><strong>2. Fingerprints nicht ueberpruefen.</strong> Verifizieren Sie den Schluessel-Fingerprint immer ueber einen separaten, vertrauenswuerdigen Kanal — ein Telefonat, einen Videoanruf oder ein persoenliches Treffen.</p>

<p><strong>3. Privaten Schluessel ohne Backup verlieren.</strong> Wenn Sie Ihren privaten Schluessel verlieren, sind alle damit verschluesselten Nachrichten fuer immer verloren. Sichern Sie Ihren privaten Schluessel an einem geschuetzten Ort.</p>

<p><strong>4. Widerrufszertifikat nicht sichern.</strong> Ein Widerrufszertifikat ermoeglicht es Ihnen, oeffentlich zu erklaeren, dass Ihr Schluessel nicht mehr gueltig ist, falls er kompromittiert wird.</p>

<p><strong>5. Veraltete oder schwache Schluessel verwenden.</strong> Wenn Sie heute neue Schluessel erzeugen, verwenden Sie moderne Algorithmen. KeychainPGP nutzt standardmaessig Ed25519 + X25519.</p>

<h2 id="next-steps">Naechste Schritte</h2>

<ul>
<li><strong>Vollstaendigen Leitfaden lesen:</strong> <a href="/de/docs/how-to-use-pgp/">PGP verwenden</a> behandelt Signierung, Verifikation, Schluesselverwaltung und fortgeschrittene Themen.</li>
<li><strong>Verstehen, was PGP ist:</strong> Fuer eine Vertiefung lesen Sie <a href="/de/docs/what-is-pgp/">Was ist PGP</a>.</li>
<li><strong>Zwischenablage-Verschluesselung lernen:</strong> Erfahren Sie, wie die <a href="/de/docs/clipboard-encryption/">Zwischenablage-Verschluesselung</a> Ihnen erlaubt, PGP mit jeder Anwendung zu nutzen.</li>
<li><strong>Online-Tool ausprobieren:</strong> Oeffnen Sie das <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a> und ueben Sie.</li>
<li><strong>Desktop-App holen:</strong> Die <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGP-Desktop-App</a> bietet globale Tastenkuerzel, Taskleisten-Integration und automatische Zwischenablage-Loesung.</li>
</ul>

<h2 id="faq">Haeufig gestellte Fragen</h2>

<h3>Ist PGP schwer zu lernen?</h3>
<p>Nein. Das Grundkonzept ist einfach: ein oeffentlicher Schluessel zum Teilen, ein privater Schluessel zum Geheimhalten. Eine Nachricht zu verschluesseln erfordert nur wenige Klicks mit einem modernen Tool wie KeychainPGP.</p>

<h3>Muss man Software installieren, um PGP zu nutzen?</h3>
<p>Nicht unbedingt. Sie koennen das <a href="/de/pgp-online-encrypt/">Online-PGP-Tool</a> von KeychainPGP direkt im Browser verwenden. Es laeuft vollstaendig auf Ihrem Geraet ueber WebAssembly.</p>

<h3>Kann jemand meine PGP-verschluesselten Nachrichten knacken?</h3>
<p>Mit modernen Algorithmen (wie Ed25519 + X25519 in KeychainPGP) wuerde das Knacken der Verschluesselung per Brute Force laenger dauern als das Alter des Universums — mit der heutigen Technologie. Die tatsaechlichen Risiken sind praktischer Natur: privaten Schluessel verlieren, schwache Passphrase verwenden oder Malware auf dem Geraet haben.</p>

<h3>Was ist der Unterschied zwischen PGP, GPG und OpenPGP?</h3>
<p><strong>PGP</strong> ist das 1991 entwickelte Originalprogramm. <strong>OpenPGP</strong> ist der offene Standard (RFC 4880), der die Formate definiert. <strong>GPG</strong> (GNU Privacy Guard) ist eine freie Implementierung des OpenPGP-Standards. KeychainPGP ist eine weitere Implementierung, gebaut auf Sequoia-PGP in Rust. Alle sind kompatibel, da sie demselben Standard folgen.</p>

<h3>Wie teile ich meinen oeffentlichen Schluessel?</h3>
<p>Exportieren Sie Ihren oeffentlichen Schluessel im ASCII-Armor-Format — ein Textblock, der mit <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code> beginnt. Fuegen Sie ihn in eine E-Mail ein, veroeffentlichen Sie ihn auf Ihrer Website, teilen Sie ihn in einem Chat oder laden Sie ihn auf einen Schluesselserver hoch. Vergessen Sie nicht, die Fingerprints mit Ihren Kontakten ueber einen separaten Kanal abzugleichen.</p>
`
};

export default doc;
