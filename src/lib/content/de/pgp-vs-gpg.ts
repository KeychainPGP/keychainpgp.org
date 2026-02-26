import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: Was ist der Unterschied zwischen PGP und GPG?',
	description: 'Erfahren Sie den Unterschied zwischen PGP und GPG. Vergleichen Sie Pretty Good Privacy, GnuPG und den OpenPGP-Standard, um das richtige Verschluesselungstool zu finden.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Was ist der Unterschied?', level: 2 },
		{ id: 'what-is-pgp', text: 'Was ist PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'Was ist GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: 'Was ist OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Vergleichstabelle PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Die wichtigsten Unterschiede erklaert', level: 2 },
		{ id: 'which-should-you-use', text: 'Welches sollten Sie verwenden?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Wo sich KeychainPGP einordnet', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG: Was ist der Unterschied zwischen PGP und GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">Was ist der Unterschied zwischen PGP und GPG?</h2>

<p>Der Unterschied zwischen PGP und GPG liegt in ihrem Ursprung und ihrer Lizenzierung. <strong>PGP</strong> (Pretty Good Privacy) ist das urspruengliche proprietaere Verschluesselungsprogramm, das Phil Zimmermann 1991 entwickelte. <strong>GPG</strong> (GNU Privacy Guard, auch GnuPG genannt) ist eine freie Open-Source-Neuimplementierung desselben Konzepts, entwickelt im Rahmen des GNU-Projekts. Beide Programme implementieren den <strong>OpenPGP</strong>-Standard, was bedeutet, dass sie kompatible verschluesselte Nachrichten erzeugen und gegenseitig mit den Schluesseln des jeweils anderen arbeiten koennen. In der Praxis ist GPG das Tool, das die meisten Menschen heute verwenden, da es kostenlos, aktiv gepflegt und auf allen gaengigen Betriebssystemen verfuegbar ist. Wenn Sie neu in der Verschluesselung sind, stellt unser <a href="/de/docs/pgp-for-beginners/">PGP-fuer-Einsteiger-Leitfaden</a> die grundlegenden Konzepte Schritt fuer Schritt vor.</p>

<h2 id="what-is-pgp">Was ist PGP?</h2>

<p>PGP steht fuer <strong>Pretty Good Privacy</strong>. Phil Zimmermann schrieb die erste Version 1991 und veroeffentlichte sie als kostenloses Tool fuer Aktivisten und Buerger, die starke Verschluesselung benoetigten. Die Software kombinierte symmetrische Verschluesselung mit Public-Key-Kryptografie.</p>

<p>Nach einer dreij\"ahrigen Bundesermittlung (eingestellt 1996) gruendete Zimmermann PGP Inc. Das Unternehmen wechselte mehrfach den Besitzer: Network Associates 1997, PGP Corporation 2002 und schliesslich Symantec (heute Broadcom) 2010. Heute existiert PGP als kommerzielle Produktsuite, die sich vorwiegend an Unternehmen richtet.</p>

<p>Fuer mehr Details zur zugrundeliegenden Technologie lesen Sie unseren ausfuehrlichen Artikel darueber, <a href="/de/docs/what-is-pgp/">was PGP ist und wie es funktioniert</a>.</p>

<h2 id="what-is-gpg-gnupg">Was ist GPG (GnuPG)?</h2>

<p>GPG, oder <strong>GNU Privacy Guard (GnuPG)</strong>, ist eine freie Open-Source-Implementierung des OpenPGP-Standards. Werner Koch startete das Projekt 1997 mit Foerderung der deutschen Bundesregierung und veroeffentlichte Version 1.0 im Jahr 1999. GnuPG wurde eigens als vollstaendig freie Alternative zum proprietaeren PGP-Programm geschaffen.</p>

<p>GnuPG ist Teil des GNU-Projekts und unter der GNU General Public License (GPL) lizenziert. Es ist standardmaessig in den meisten Linux-Distributionen enthalten. Das Kommandozeilen-Tool <code>gpg</code> ist die Schnittstelle, mit der die meisten Entwickler und Systemadministratoren arbeiten. Fuer einen Ueberblick ueber verfuegbare Tools lesen Sie unseren <a href="/de/docs/pgp-tools/">PGP-Tools-Vergleich</a>.</p>

<h2 id="what-is-openpgp">Was ist OpenPGP?</h2>

<p><strong>OpenPGP</strong> ist weder ein Produkt noch eine Software. Es ist ein offener Standard, der die Nachrichtenformate, Schluesselformate und kryptografischen Verfahren definiert, denen PGP-kompatible Tools folgen muessen. Die IETF veroeffentlichte die urspruengliche Spezifikation als <strong>RFC 2440</strong> im Jahr 1998, und die am haeufigsten referenzierte Version ist <strong>RFC 4880</strong> (2007). Ein grosses Update, <strong>RFC 9580</strong> (2024), modernisiert den Standard mit Ed25519-Unterstuetzung und AEAD-Verschluesselung.</p>

<p>Die Existenz von OpenPGP macht Interoperabilitaet moeglich. Da PGP und GPG denselben Standard implementieren, kann eine mit GPG verschluesselte Nachricht von PGP entschluesselt werden — und umgekehrt.</p>

<h2 id="pgp-vs-gpg-comparison-table">Vergleichstabelle PGP vs GPG</h2>

<table>
<tr><th>Eigenschaft</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Typ</strong></td><td>Kommerzielle Software</td><td>Freie/Open-Source-Software</td><td>Offener Standard</td></tr>
<tr><td><strong>Lizenz</strong></td><td>Proprietaer</td><td>GPL (kostenlos)</td><td>IETF-Spezifikation</td></tr>
<tr><td><strong>Kosten</strong></td><td>Kostenpflichtige Lizenz</td><td>Kostenlos</td><td>N/A</td></tr>
<tr><td><strong>Plattformen</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>N/A</td></tr>
<tr><td><strong>GUI enthalten</strong></td><td>Ja (Unternehmenskonsole)</td><td>Nein (Drittanbieter-GUIs verfuegbar)</td><td>N/A</td></tr>
<tr><td><strong>Quellcode verfuegbar</strong></td><td>Nein</td><td>Ja</td><td>Oeffentlicher Standard</td></tr>
</table>

<h2 id="key-differences-explained">Die wichtigsten Unterschiede erklaert</h2>

<h3>Lizenz und Kosten</h3>

<p>PGP ist proprietaere Software mit kommerzieller Lizenz. GPG wird unter der GPL veroeffentlicht, was bedeutet, dass jeder es herunterladen, nutzen, modifizieren und kostenlos weiterverbreiten kann. Fuer Privatpersonen, kleine Teams und Open-Source-Projekte ist GPG die naheliegende Wahl in Bezug auf die Kosten.</p>

<h3>Plattformunterstuetzung</h3>

<p>GnuPG laeuft auf praktisch allen Unix-Systemen und verfuegt ueber offizielle Builds fuer Windows und macOS. Fuer plattformuebergreifende Anforderungen bieten moderne Tools wie KeychainPGP native Builds fuer Windows, macOS, Linux und Android aus einer einzigen Codebasis.</p>

<h3>Benutzererfahrung</h3>

<p>Das kommerzielle PGP beinhaltet eine grafische Oberflaeche fuer den Unternehmenseinsatz. GnuPG ist im Kern ein Kommandozeilen-Tool. Tools wie KeychainPGP bieten eine native grafische Oberflaeche, die Schluesselverwaltung, Verschluesselung, Entschluesselung und Signierung handhabt, ohne dass man sich Kommandozeilenoptionen merken muss. Sie koennen PGP-Verschluesselung direkt im Browser mit unserem <a href="/de/pgp-online-encrypt/">Online-PGP-Verschluesselungstool</a> ausprobieren.</p>

<h2 id="which-should-you-use">Welches sollten Sie verwenden?</h2>

<ul>
<li><strong>Unternehmen mit bestehender Broadcom/Symantec-Infrastruktur:</strong> Das kommerzielle PGP kann der Weg des geringsten Widerstands sein.</li>
<li><strong>Entwickler und Systemadministratoren:</strong> GnuPG ist das Standardtool, das auf den meisten Servern vorinstalliert ist.</li>
<li><strong>Datenschutzbewusste Nutzer mit GUI-Wunsch:</strong> Ziehen Sie eine moderne OpenPGP-Anwendung wie KeychainPGP in Betracht.</li>
<li><strong>Web- oder Schnellverschluesselung:</strong> Ein <a href="/de/pgp-online-encrypt/">Online-PGP-Verschluesselungstool</a> kann einmalige Aufgaben ohne Installation erledigen.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">Wo sich KeychainPGP einordnet</h2>

<p><a href="/">KeychainPGP</a> ist eine moderne Open-Source-Desktop-Anwendung, die den OpenPGP-Standard mithilfe von <strong>Sequoia-PGP</strong> implementiert, einer von Grund auf in Rust geschriebenen OpenPGP-Bibliothek. Es ist weder PGP (das kommerzielle Produkt) noch GPG (GnuPG). Es ist eine unabhaengige Implementierung, die mit beiden im OpenPGP-Oekosystem koexistiert.</p>

<p>Gruende, KeychainPGP in Betracht zu ziehen:</p>

<ul>
<li><strong>Plattformuebergreifend:</strong> Native Builds fuer Windows, macOS, Linux und Android, plus Web-App und CLI</li>
<li><strong>Moderne Kryptografie:</strong> Gebaut auf Sequoia-PGP mit Curve25519/Ed25519- und AEAD-Unterstuetzung</li>
<li><strong>Open Source:</strong> Doppellizenz MIT / Apache-2.0, vollstaendig pruefbar</li>
<li><strong>Benutzerfreundlich:</strong> Grafische Oberflaeche mit Zwischenablage-Workflow und globalen Tastenkuerzeln</li>
<li><strong>CLI fuer Automatisierung:</strong> Das CLI <code>keychainpgp</code> unterstuetzt Schluesselerzeugung, Verschluesselung, Entschluesselung, Signatur, Verifikation und Schluesselbundverwaltung</li>
<li><strong>OpenPGP-konform:</strong> Schluessel und Nachrichten sind interoperabel mit GPG, PGP und jedem anderen OpenPGP-Tool</li>
</ul>

<h2 id="frequently-asked-questions">Haeufig gestellte Fragen</h2>

<h3>Ist GPG dasselbe wie PGP?</h3>

<p>Nein. GPG (GnuPG) und PGP sind unterschiedliche Programme, die von verschiedenen Personen erstellt wurden. PGP wurde 1991 von Phil Zimmermann entwickelt und ist heute ein kommerzielles Produkt von Broadcom. GPG wurde 1997 von Werner Koch als freie Open-Source-Alternative geschaffen. Beide implementieren den OpenPGP-Standard und sind daher funktional kompatibel.</p>

<h3>Koennen GPG- und PGP-Schluessel zusammen verwendet werden?</h3>

<p>Ja. GPG und PGP verwenden das OpenPGP-Schluesselformat, das vom IETF-Standard definiert wird. Sie koennen einen oeffentlichen Schluessel aus GPG exportieren und in PGP importieren — oder in jedes andere OpenPGP-konforme Tool wie KeychainPGP.</p>

<h3>Ist GPG 2026 noch sicher?</h3>

<p>GnuPG bleibt ein sicheres und aktiv gepflegtes Tool. Verwenden Sie moderne Schluesseltypen (wie Ed25519), halten Sie Ihre Software aktuell und befolgen Sie bewerte Praktiken zur Schluesselverwaltung. Fuer eine Schritt-fuer-Schritt-Anleitung lesen Sie unseren Artikel <a href="/de/docs/pgp-for-beginners/">PGP fuer Einsteiger</a>.</p>

<h3>Was bedeutet OpenPGP?</h3>

<p>OpenPGP ist ein offener Standard, der von der IETF veroeffentlicht wurde und definiert, wie PGP-kompatible Verschluesselung funktioniert. Er legt Nachrichtenformate, Schluesselformate, Algorithmusanforderungen und Signaturstrukturen fest.</p>

<h3>Brauche ich PGP oder GPG, um KeychainPGP zu nutzen?</h3>

<p>Nein. KeychainPGP ist eine eigenstaendige Anwendung, die nicht von einer PGP- oder GnuPG-Installation abhaengt. Es verwendet die Sequoia-PGP-Bibliothek, eine unabhaengige Implementierung des OpenPGP-Standards in Rust. Schluessel und verschluesselte Nachrichten, die in KeychainPGP erstellt werden, sind jedoch vollstaendig kompatibel mit GPG und PGP.</p>
`
};

export default doc;
