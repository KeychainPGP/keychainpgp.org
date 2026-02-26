import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: jaka jest r\u00f3\u017cnica mi\u0119dzy PGP a GPG?',
	description: 'Poznaj r\u00f3\u017cnic\u0119 mi\u0119dzy PGP a GPG. Por\u00f3wnaj Pretty Good Privacy, GnuPG i standard OpenPGP, aby znale\u017a\u0107 odpowiednie narz\u0119dzie szyfrowania.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Jaka jest r\u00f3\u017cnica?', level: 2 },
		{ id: 'what-is-pgp', text: 'Czym jest PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'Czym jest GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: 'Czym jest OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Tabela por\u00f3wnawcza PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Kluczowe r\u00f3\u017cnice wyja\u015bnione', level: 2 },
		{ id: 'which-should-you-use', text: 'Kt\u00f3re narz\u0119dzie wybra\u0107?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Gdzie mie\u015bci si\u0119 KeychainPGP', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG: jaka jest r\u00f3\u017cnica mi\u0119dzy PGP a GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">Jaka jest r\u00f3\u017cnica mi\u0119dzy PGP a GPG?</h2>

<p>R\u00f3\u017cnica mi\u0119dzy PGP a GPG polega na ich pochodzeniu i licencji. <strong>PGP</strong> (Pretty Good Privacy) to oryginalny program szyfruj\u0105cy stworzony przez Phila Zimmermanna w 1991 roku. <strong>GPG</strong> (GNU Privacy Guard, nazywany te\u017c GnuPG) to wolna reimplementacja tego samego konceptu na licencji open source, rozwijana w ramach projektu GNU. Oba programy implementuj\u0105 standard <strong>OpenPGP</strong>, co oznacza, \u017ce produkuj\u0105 kompatybilne zaszyfrowane wiadomo\u015bci i mog\u0105 pracowa\u0107 z kluczami drugiego. W praktyce GPG jest narz\u0119dziem, kt\u00f3rego u\u017cywa wi\u0119kszo\u015b\u0107 ludzi dzi\u015b, poniewa\u017c jest darmowy, aktywnie utrzymywany i dost\u0119pny na wszystkich g\u0142\u00f3wnych systemach operacyjnych. Je\u015bli jeste\u015b nowy w szyfrowaniu, nasz <a href="/pl/docs/pgp-for-beginners/">poradnik PGP dla pocz\u0105tkuj\u0105cych</a> przedstawia fundamentalne koncepcje krok po kroku.</p>

<h2 id="what-is-pgp">Czym jest PGP?</h2>

<p>PGP to skr\u00f3t od <strong>Pretty Good Privacy</strong>. Phil Zimmermann napisa\u0142 pierwsz\u0105 wersj\u0119 w 1991 roku i opublikowa\u0142 j\u0105 jako darmowe narz\u0119dzie dla aktywist\u00f3w i zwyk\u0142ych obywateli potrzebuj\u0105cych silnego szyfrowania. Oprogramowanie \u0142\u0105czy\u0142o szyfrowanie kluczem symetrycznym z kryptografi\u0105 klucza publicznego.</p>

<p>Po trzyletnim \u015bledztwie federalnym (umorzonym w 1996 roku), Zimmermann za\u0142o\u017cy\u0142 PGP Inc. Firma zmienia\u0142a w\u0142a\u015bcicieli kilkakrotnie: Network Associates w 1997, PGP Corporation w 2002, a nast\u0119pnie Symantec (obecnie Broadcom) w 2010 roku. Dzi\u015b PGP istnieje jako zestaw produkt\u00f3w komercyjnych skierowanych g\u0142\u00f3wnie do przedsi\u0119biorstw.</p>

<p>Wi\u0119cej o technologii le\u017c\u0105cej u podstaw znajdziesz w naszym pe\u0142nym artykule o <a href="/pl/docs/what-is-pgp/">czym jest PGP i jak dzia\u0142a</a>.</p>

<h2 id="what-is-gpg-gnupg">Czym jest GPG (GnuPG)?</h2>

<p>GPG, czyli <strong>GNU Privacy Guard (GnuPG)</strong>, to wolna i otwartoźr\u00f3d\u0142owa implementacja standardu OpenPGP. Werner Koch rozpocz\u0105\u0142 projekt w 1997 roku z dofinansowaniem rz\u0105du niemieckiego i opublikowa\u0142 wersj\u0119 1.0 w 1999 roku. GnuPG zosta\u0142 stworzony specjalnie jako w pe\u0142ni wolna alternatywa dla w\u0142asno\u015bciowego oprogramowania PGP.</p>

<p>GnuPG jest cz\u0119\u015bci\u0105 projektu GNU i jest licencjonowany na warunkach GNU General Public License (GPL). Jest domyślnie do\u0142\u0105czony do wi\u0119kszo\u015bci dystrybucji Linux. Narz\u0119dzie wiersza polece\u0144 <code>gpg</code> to interfejs, z kt\u00f3rym wi\u0119kszo\u015b\u0107 programist\u00f3w i administrator\u00f3w system\u00f3w wchodzi w interakcj\u0119. Przegl\u0105d dost\u0119pnych narz\u0119dzi znajdziesz w naszym <a href="/pl/docs/pgp-tools/">por\u00f3wnaniu narz\u0119dzi PGP</a>.</p>

<h2 id="what-is-openpgp">Czym jest OpenPGP?</h2>

<p><strong>OpenPGP</strong> nie jest ani produktem, ani oprogramowaniem. To otwarty standard definiuj\u0105cy formaty wiadomo\u015bci, formaty kluczy i procedury kryptograficzne, kt\u00f3rych narz\u0119dzia kompatybilne z PGP musz\u0105 przestrzega\u0107. IETF opublikowa\u0142o oryginaln\u0105 specyfikacj\u0119 jako <strong>RFC 2440</strong> w 1998 roku, a najcz\u0119\u015bciej przywo\u0142ywana wersja to <strong>RFC 4880</strong> (2007). Istotna aktualizacja, <strong>RFC 9580</strong> (2024), modernizuje standard o obs\u0142ug\u0119 Ed25519 i szyfrowania AEAD.</p>

<p>Istnienie OpenPGP umo\u017cliwia interoperacyjno\u015b\u0107. Poniewa\u017c PGP i GPG implementuj\u0105 ten sam standard, wiadomo\u015b\u0107 zaszyfrowana za pomoc\u0105 GPG mo\u017ce by\u0107 odszyfrowana przez PGP i odwrotnie.</p>

<h2 id="pgp-vs-gpg-comparison-table">Tabela por\u00f3wnawcza PGP vs GPG</h2>

<table>
<tr><th>Cecha</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Typ</strong></td><td>Oprogramowanie komercyjne</td><td>Wolne oprogramowanie open source</td><td>Otwarty standard</td></tr>
<tr><td><strong>Licencja</strong></td><td>W\u0142asno\u015bciowa</td><td>GPL (darmowa)</td><td>Specyfikacja IETF</td></tr>
<tr><td><strong>Koszt</strong></td><td>Licencja p\u0142atna</td><td>Darmowy</td><td>Nie dotyczy</td></tr>
<tr><td><strong>Platformy</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>Nie dotyczy</td></tr>
<tr><td><strong>GUI w zestawie</strong></td><td>Tak (konsola korporacyjna)</td><td>Nie (dost\u0119pne GUI firm trzecich)</td><td>Nie dotyczy</td></tr>
<tr><td><strong>Kod \u017ar\u00f3d\u0142owy</strong></td><td>Niedost\u0119pny</td><td>Tak</td><td>Standard publiczny</td></tr>
</table>

<h2 id="key-differences-explained">Kluczowe r\u00f3\u017cnice wyja\u015bnione</h2>

<h3>Licencja i koszt</h3>

<p>PGP to oprogramowanie w\u0142asno\u015bciowe sprzedawane na licencji komercyjnej. GPG jest wydawany na licencji GPL, co oznacza, \u017ce ka\u017cdy mo\u017ce je pobra\u0107, u\u017cywa\u0107, modyfikowa\u0107 i redystrybuowa\u0107 za darmo. Dla os\u00f3b prywatnych, ma\u0142ych zespo\u0142\u00f3w i projekt\u00f3w open source, GPG jest oczywistym wyborem pod wzgl\u0119dem koszt\u00f3w.</p>

<h3>Obs\u0142uga platform</h3>

<p>GnuPG dzia\u0142a na praktycznie ka\u017cdym systemie Unix i posiada oficjalne buildy dla Windows i macOS. Do potrzeb wieloplatformowych, nowoczesne narz\u0119dzia takie jak KeychainPGP zapewniaj\u0105 natywne buildy dla Windows, macOS, Linux i Android z jednej bazy kodu.</p>

<h3>Do\u015bwiadczenie u\u017cytkownika</h3>

<p>Komercyjne PGP zawiera interfejs graficzny do wdra\u017cania w firmach. GnuPG jest zasadniczo narz\u0119dziem wiersza polece\u0144. Narz\u0119dzia takie jak KeychainPGP oferuj\u0105 natywny interfejs graficzny obs\u0142uguj\u0105cy zarz\u0105dzanie kluczami, szyfrowanie, deszyfrowanie i podpisywanie bez zapami\u0119tywania opcji wiersza polece\u0144. Mo\u017cesz wypr\u00f3bowa\u0107 szyfrowanie PGP bezpo\u015brednio w przegl\u0105darce za pomoc\u0105 naszego <a href="/pl/pgp-online-encrypt/">narz\u0119dzia PGP online</a>.</p>

<h2 id="which-should-you-use">Kt\u00f3re narz\u0119dzie wybra\u0107?</h2>

<ul>
<li><strong>Firma z istniej\u0105c\u0105 infrastruktur\u0105 Broadcom/Symantec:</strong> Komercyjne PGP mo\u017ce by\u0107 najproststz\u0105 drog\u0105.</li>
<li><strong>Programi\u015bci i administratorzy system\u00f3w:</strong> GnuPG jest standardowym narz\u0119dziem, instalowanym domy\u015blnie na wi\u0119kszo\u015bci serwer\u00f3w.</li>
<li><strong>U\u017cytkownicy dbaj\u0105cy o prywatno\u015b\u0107, kt\u00f3rzy chc\u0105 GUI:</strong> Rozwa\u017c nowoczesn\u0105 aplikacj\u0119 OpenPGP, tak\u0105 jak KeychainPGP.</li>
<li><strong>Szybkie szyfrowanie webowe:</strong> <a href="/pl/pgp-online-encrypt/">Narz\u0119dzie PGP online</a> mo\u017ce obs\u0142u\u017cy\u0107 jednorazowe zadania bez instalowania czegokolwiek.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">Gdzie mie\u015bci si\u0119 KeychainPGP</h2>

<p><a href="/">KeychainPGP</a> to nowoczesna, otwartoźr\u00f3d\u0142owa aplikacja desktopowa implementuj\u0105ca standard OpenPGP za pomoc\u0105 <strong>Sequoia-PGP</strong>, biblioteki OpenPGP napisanej od podstaw w Rust. To ani PGP (produkt komercyjny), ani GPG (GnuPG). To niezale\u017cna implementacja wsp\u00f3\u0142istniej\u0105ca z obydwoma w ekosystemie OpenPGP.</p>

<p>G\u0142\u00f3wne powody, by rozwa\u017cy\u0107 KeychainPGP:</p>

<ul>
<li><strong>Wieloplatformowo\u015b\u0107:</strong> Natywne buildy dla Windows, macOS, Linux i Android, plus aplikacja webowa i CLI</li>
<li><strong>Nowoczesna kryptografia:</strong> Zbudowany na Sequoia-PGP z obs\u0142ug\u0105 Curve25519/Ed25519 i AEAD</li>
<li><strong>Open source:</strong> Podw\u00f3jna licencja MIT / Apache-2.0, w pe\u0142ni audytowalny</li>
<li><strong>Przyjazny u\u017cytkownikowi:</strong> Interfejs graficzny z workflow schowkowym i globalnymi skr\u00f3tami klawiszowymi</li>
<li><strong>CLI do automatyzacji:</strong> CLI <code>keychainpgp</code> obs\u0142uguje generowanie kluczy, szyfrowanie, deszyfrowanie, podpisywanie, weryfikacj\u0119 i zarz\u0105dzanie p\u0119kiem kluczy</li>
<li><strong>Zgodno\u015b\u0107 z OpenPGP:</strong> Klucze i wiadomo\u015bci s\u0105 interoperacyjne z GPG, PGP i ka\u017cdym innym narz\u0119dziem OpenPGP</li>
</ul>

<h2 id="frequently-asked-questions">Cz\u0119sto zadawane pytania</h2>

<h3>Czy GPG to to samo co PGP?</h3>

<p>Nie. GPG (GnuPG) i PGP to odr\u0119bne programy stworzone przez r\u00f3\u017cne osoby. PGP zosta\u0142 stworzony przez Phila Zimmermanna w 1991 roku i jest dzi\u015b produktem komercyjnym firmy Broadcom. GPG zosta\u0142 stworzony przez Wernera Kocha w 1997 roku jako wolna i otwartoźr\u00f3d\u0142owa alternatywa. Oba implementuj\u0105 standard OpenPGP, s\u0105 wi\u0119c funkcjonalnie kompatybilne.</p>

<h3>Czy klucze GPG i PGP mog\u0105 ze sob\u0105 wsp\u00f3\u0142dzia\u0142a\u0107?</h3>

<p>Tak. GPG i PGP u\u017cywaj\u0105 formatu kluczy OpenPGP zdefiniowanego przez standard IETF. Mo\u017cesz wyeksportowa\u0107 klucz publiczny z GPG i zaimportowa\u0107 go do PGP lub dowolnego innego narz\u0119dzia zgodnego z OpenPGP, takiego jak KeychainPGP.</p>

<h3>Czy GPG jest nadal bezpieczne w 2026 roku?</h3>

<p>GnuPG pozostaje bezpiecznym i aktywnie utrzymywanym narz\u0119dziem. U\u017cywaj nowoczesnych typ\u00f3w kluczy (takich jak Ed25519), utrzymuj oprogramowanie aktualne i przestrzegaj najlepszych praktyk zarz\u0105dzania kluczami. Poradnik krok po kroku znajdziesz w naszym artykule <a href="/pl/docs/pgp-for-beginners/">PGP dla pocz\u0105tkuj\u0105cych</a>.</p>

<h3>Co oznacza OpenPGP?</h3>

<p>OpenPGP to otwarty standard opublikowany przez IETF, kt\u00f3ry definiuje, jak dzia\u0142a szyfrowanie kompatybilne z PGP. Okre\u015bla formaty wiadomo\u015bci, formaty kluczy, wymagania algorytm\u00f3w i struktury podpis\u00f3w.</p>

<h3>Czy potrzebuj\u0119 PGP lub GPG, aby u\u017cywa\u0107 KeychainPGP?</h3>

<p>Nie. KeychainPGP jest samodzieln\u0105 aplikacj\u0105, kt\u00f3ra nie wymaga instalacji PGP ani GnuPG. U\u017cywa biblioteki Sequoia-PGP, niezale\u017cnej implementacji standardu OpenPGP napisanej w Rust. Jednak klucze i zaszyfrowane wiadomo\u015bci stworzone w KeychainPGP s\u0105 w pe\u0142ni kompatybilne z GPG i PGP.</p>
`
};

export default doc;
