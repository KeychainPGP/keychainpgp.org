import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Szyfrowanie przez schowek z PGP: podej\u015bcie clipboard-first do bezpiecznej komunikacji',
	description: 'Dowiedz si\u0119, jak dzia\u0142a szyfrowanie PGP przez schowek, dlaczego przewy\u017csza szyfrowanie plikowe w codziennym OPSEC i jak KeychainPGP u\u017cywa schowka do szyfrowania wiadomo\u015bci w dowolnej aplikacji.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'Czym jest szyfrowanie przez schowek?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Dlaczego schowek przede wszystkim?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Jak KeychainPGP u\u017cywa schowka', level: 2 },
		{ id: 'the-encryption-workflow', text: 'Workflow szyfrowania', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Deszyfrowanie w odwrotnym kierunku', level: 3 },
		{ id: 'security-considerations', text: 'Aspekty bezpiecze\u0144stwa', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Historia i mened\u017cerowie schowka', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Automatyczne czyszczenie po 30 sekundach', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Obs\u0142uga pami\u0119ci i zerowanie', level: 3 },
		{ id: 'opsec-mode', text: 'Tryb OPSEC', level: 2 },
		{ id: 'window-title-disguise', text: 'Maskowanie tytu\u0142u okna', level: 3 },
		{ id: 'ram-only-keys', text: 'Klucze tylko w RAM', level: 3 },
		{ id: 'panic-wipe', text: 'Awaryjne kasowanie', level: 3 },
		{ id: 'tor-proxy-support', text: 'Obs\u0142uga proxy Tor', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Szyfrowanie schowkowe vs plikowe', level: 2 },
		{ id: 'threat-model', text: 'Model zagro\u017ce\u0144', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Przed czym chroni szyfrowanie schowkowe', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Przed czym nie chroni szyfrowanie schowkowe', level: 3 },
		{ id: 'best-practices', text: 'Najlepsze praktyki PGP przez schowek', level: 2 }
	],
	html: `
<h1>Szyfrowanie przez schowek z PGP</h1>

<h2 id="what-is-clipboard-encryption">Czym jest szyfrowanie przez schowek?</h2>

<p>Szyfrowanie PGP przez schowek to metoda szyfrowania i deszyfrowania tekstu poprzez bezpo\u015bredni odczyt i zapis ze schowka systemowego, zamiast operowania na plikach przechowywanych na dysku. Zamiast zapisywa\u0107 wiadomo\u015b\u0107 w pliku tekstowym <code>.txt</code>, przepuszcza\u0107 go przez narz\u0119dzie wiersza polece\u0144, a nast\u0119pnie odczytywa\u0107 zaszyfrowany plik <code>.asc</code>, po prostu kopiujesz tekst, uruchamiasz szyfrowanie skr\u00f3tem klawiszowym i wklejasz zaszyfrowan\u0105 wiadomo\u015b\u0107 PGP tam, gdzie chcesz. Schowek s\u0142u\u017cy zar\u00f3wno jako bufor wej\u015bciowy, jak i wyj\u015bciowy, czyni\u0105c szyfrowanie integraln\u0105 cz\u0119\u015bci\u0105 ka\u017cdego workflow opartego na tek\u015bcie. To podej\u015bcie jest fundamentem dzia\u0142ania <a href="/pl/pgp-online-encrypt/">KeychainPGP</a> na desktopie i pozwala mu integrowa\u0107 si\u0119 z ka\u017cd\u0105 aplikacj\u0105 obs\u0142uguj\u0105c\u0105 kopiowanie i wklejanie \u2014 klientami poczty, komunikatorami, notatnikami, formularzami webowymi i wieloma innymi.</p>

<p>Je\u015bli jeste\u015b nowy w \u015bwiecie PGP, zacznij od <a href="/pl/docs/what-is-pgp/">Czym jest PGP?</a>, aby pozna\u0107 podstawowe koncepcje kryptograficzne, zanim zag\u0142\u0119bisz si\u0119 w workflow specyficzne dla schowka.</p>

<h2 id="why-clipboard-first">Dlaczego schowek przede wszystkim?</h2>

<p>Tradycyjne narz\u0119dzia PGP, takie jak GnuPG, zosta\u0142y zaprojektowane wok\u00f3\u0142 plik\u00f3w. Przekazujesz plik do <code>gpg --encrypt</code>, otrzymujesz zaszyfrowany plik i r\u0119cznie go przesy\u0142asz. Ten model mia\u0142 sens w latach 90., kiedy PGP by\u0142o u\u017cywane g\u0142\u00f3wnie do za\u0142\u0105cznik\u00f3w e-mailowych i archiwizacji plik\u00f3w. Ma go znacznie mniej dzi\u015b, gdy wi\u0119kszo\u015b\u0107 poufnej komunikacji odbywa si\u0119 na platformach webowych, w efemerycznych komunikatorach i us\u0142ugach, kt\u00f3re nie udost\u0119pniaj\u0105 interfejsu systemu plik\u00f3w.</p>

<p>Podej\u015bcie schowek przede wszystkim rozwi\u0105zuje kilka problem\u00f3w jednocze\u015bnie:</p>

<ul>
<li><strong>Niezale\u017cno\u015b\u0107 od aplikacji.</strong> Poniewa\u017c schowek to abstrakcja na poziomie systemu operacyjnego, szyfrowanie schowkowe dzia\u0142a z dowoln\u0105 aplikacj\u0105. Nie jeste\u015b zamkni\u0119ty w konkretnym kliencie poczty, rozszerzeniu przegl\u0105darki czy ekosystemie wtyczek. Je\u015bli mo\u017cesz kopiowa\u0107 i wkleja\u0107, mo\u017cesz szyfrowa\u0107.</li>
<li><strong>Brak plik\u00f3w z tekstem jawnym na dysku.</strong> Szyfrowanie plikowe z konieczno\u015bci tworzy artefakty z tekstem jawnym w systemie plik\u00f3w \u2014 oryginalny niezaszyfrowany plik, pliki tymczasowe, pliki swap edytora i potencjalnie odszyfrowane dane wyj\u015bciowe. Ka\u017cdy z nich stanowi ryzyko z perspektywy forensyki. Szyfrowanie schowkowe utrzymuje tekst jawny wy\u0142\u0105cznie w pami\u0119ci ulotnej.</li>
<li><strong>Mniejsze tarcie.</strong> Im mniej krok\u00f3w mi\u0119dzy \u201echc\u0119 to zaszyfrowa\u0107\u201d a \u201ejest zaszyfrowane\u201d, tym bardziej prawdopodobne, \u017ce u\u017cytkownik faktycznie b\u0119dzie szyfrowa\u0107 swoje wiadomo\u015bci. Tr\u00f3jkrokowy workflow (kopiuj, skr\u00f3t, wklej) ma znacznie mniej tarcia ni\u017c pipeline oparty na plikach.</li>
<li><strong>Kompatybilno\u015b\u0107 z nowoczesn\u0105 komunikacj\u0105.</strong> Webmail, Signal desktop, Slack, Discord, klienty Matrix \u2014 \u017cadne z tych narz\u0119dzi nie obs\u0142uguje natywnie PGP, ale wszystkie obs\u0142uguj\u0105 wklejanie tekstu. PGP przez schowek \u0142\u0105czy te \u015bwiaty bez potrzeby integracji na poziomie protoko\u0142u.</li>
</ul>

<p>Poradnik krok po kroku korzystania z tego workflow znajdziesz w <a href="/pl/docs/how-to-use-pgp/">Jak u\u017cywa\u0107 PGP</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Jak KeychainPGP u\u017cywa schowka</h2>

<p>KeychainPGP jest zbudowany od podstaw wok\u00f3\u0142 filozofii schowek przede wszystkim. Zamiast traktowa\u0107 dost\u0119p do schowka jako wygodny dodatek doklejony do narz\u0119dzia szyfrowania plik\u00f3w, ca\u0142a architektura \u2014 od pipeline kryptograficznego po interfejs u\u017cytkownika \u2014 zak\u0142ada, \u017ce schowek jest g\u0142\u00f3wnym kana\u0142em danych.</p>

<h3 id="the-encryption-workflow">Workflow szyfrowania</h3>

<p>Proces szyfrowania wiadomo\u015bci za pomoc\u0105 KeychainPGP sk\u0142ada si\u0119 z trzech krok\u00f3w:</p>

<ol>
<li><strong>Skopiuj</strong> wiadomo\u015b\u0107 z dowolnej aplikacji (szkic e-maila, okno czatu, edytor tekstu, formularz webowy).</li>
<li><strong>Naci\u015bnij <code>Ctrl+Shift+E</code></strong> (domy\u015blny globalny skr\u00f3t). KeychainPGP odczytuje zawarto\u015b\u0107 schowka, szyfruje tekst kluczem publicznym wybranego odbiorcy i zapisuje zaszyfrowany tekst PGP w formacie ASCII-armored do schowka.</li>
<li><strong>Wklej</strong> zaszyfrowan\u0105 wiadomo\u015b\u0107 w miejsce docelowe. To, co trafia do odbiorcy, to standardowy blok OpenPGP ASCII-armored zaczynaj\u0105cy si\u0119 od <code>-----BEGIN PGP MESSAGE-----</code>, kt\u00f3ry mo\u017ce by\u0107 odszyfrowany przez ka\u017cde narz\u0119dzie zgodne z OpenPGP.</li>
</ol>

<p>W tle KeychainPGP u\u017cywa biblioteki <a href="https://sequoia-pgp.org/">Sequoia-PGP</a>, nowoczesnej implementacji standardu OpenPGP w Rust. Klucze domy\u015blnie u\u017cywaj\u0105 Ed25519 do podpis\u00f3w i X25519 do szyfrowania \u2014 algorytm\u00f3w na krzywych eliptycznych oferuj\u0105cych silne bezpiecze\u0144stwo przy kompaktowych rozmiarach kluczy i szybkich operacjach. Nie ma dialog\u00f3w wyboru algorytmu ani decyzji o rozmiarze klucza. Kryptografia jest bezpieczna od razu po instalacji.</p>

<h3 id="decryption-in-reverse">Deszyfrowanie w odwrotnym kierunku</h3>

<p>Deszyfrowanie odwraca przep\u0142yw szyfrowania. Gdy otrzymasz zaszyfrowan\u0105 wiadomo\u015b\u0107 PGP, kopiujesz ca\u0142y blok armored, naciskasz <code>Ctrl+Shift+D</code> (domy\u015blny skr\u00f3t deszyfrowania), a KeychainPGP zast\u0119puje zawarto\u015b\u0107 schowka odszyfrowanym tekstem jawnym. Mo\u017cesz go nast\u0119pnie wklei\u0107 do dowolnej aplikacji, aby go przeczyta\u0107. Odszyfrowany tekst istnieje tylko w pami\u0119ci i w buforze schowka, kt\u00f3ry jest automatycznie czyszczony po konfigurowalnym op\u00f3\u017anieniu.</p>

<h2 id="security-considerations">Aspekty bezpiecze\u0144stwa</h2>

<p>U\u017cycie schowka jako kana\u0142u danych wprowadza specyficzne aspekty bezpiecze\u0144stwa, kt\u00f3re KeychainPGP adresuje za pomoc\u0105 kilku mechanizm\u00f3w obronnych.</p>

<h3 id="clipboard-history-and-managers">Historia i mened\u017cerowie schowka</h3>

<p>Nowoczesne systemy operacyjne i narz\u0119dzia firm trzecich cz\u0119sto utrzymuj\u0105 histori\u0119 schowka. Windows 10 i nowsze maj\u0105 wbudowan\u0105 funkcj\u0119 historii schowka (<code>Win+V</code>). macOS natywnie nie utrzymuje historii, ale popularne narz\u0119dzia jak Alfred, Raycast i Paste tak. Na Linuxie popularne s\u0105 mened\u017cerowie schowka jak CopyQ, Clipman i GPaste.</p>

<p>Mened\u017cerowie schowka mog\u0105 przechwyci\u0107 zar\u00f3wno tekst jawny przed szyfrowaniem, jak i odszyfrowane dane po odszyfrowaniu, ca\u0142kowicie niweczaj\u0105c sens szyfrowania. Podczas u\u017cywania szyfrowania PGP przez schowek nale\u017cy:</p>

<ul>
<li>Wy\u0142\u0105czy\u0107 histori\u0119 schowka w systemie operacyjnym (w Windows przejd\u017a do Ustawienia > System > Schowek i wy\u0142\u0105cz Histori\u0119 schowka).</li>
<li>Unika\u0107 mened\u017cer\u00f3w schowka firm trzecich na maszynach, na kt\u00f3rych obs\u0142ugujesz poufn\u0105 tre\u015b\u0107, lub skonfigurowa\u0107 regu\u0142y wykluczenia, je\u015bli mened\u017cer na to pozwala.</li>
<li>Polega\u0107 na wbudowanej funkcji automatycznego czyszczenia KeychainPGP, aby zminimalizowa\u0107 okno ekspozycji.</li>
</ul>

<h3 id="auto-clear-after-30-seconds">Automatyczne czyszczenie po 30 sekundach</h3>

<p>KeychainPGP automatycznie czy\u015bci schowek 30 sekund po zapisaniu odszyfrowanego tekstu jawnego. Op\u00f3\u017anienie to jest konfigurowalne w ustawieniach aplikacji. Automatyczne czyszczenie zapewnia, \u017ce odszyfrowana tre\u015b\u0107 nie pozostaje w schowku na czas nieokre\u015blony, zmniejszaj\u0105c ryzyko, \u017ce p\u00f3\u017aniejsza operacja wklejenia lub mened\u017cer schowka przechwyci poufny tekst d\u0142ugo po zako\u0144czeniu czytania.</p>

<p>Domy\u015blne 30 sekund to kompromis mi\u0119dzy u\u017cyteczno\u015bci\u0105 a bezpiecze\u0144stwem. Daje wystarczaj\u0105co czasu na wklejenie odszyfrowanego tekstu tam, gdzie jest potrzebny, jednocze\u015bnie ograniczaj\u0105c okno, w kt\u00f3rym tekst jawny jest dost\u0119pny. W \u015brodowiskach o wysokim poziomie bezpiecze\u0144stwa mo\u017cna skr\u00f3ci\u0107 ten czas nawet do 5 sekund.</p>

<h3 id="memory-handling-and-zeroization">Obs\u0142uga pami\u0119ci i zerowanie</h3>

<p>Szyfrowanie schowkowe oznacza, \u017ce wra\u017cliwe dane \u2014 klucze prywatne, has\u0142a, odszyfrowany tekst jawny \u2014 rezyduj\u0105 w pami\u0119ci procesu. KeychainPGP jest napisany w Rust i korzysta z gwarancji zerowania przy destrukcji oferowanych przez Sequoia-PGP. Kiedy warto\u015b\u0107 tajna wychodzi z zasi\u0119gu, jej pami\u0119\u0107 jest nadpisywana zerami przed zwolnieniem. To nie jest kasowanie \u201ena ile si\u0119 da\u201d; model w\u0142asno\u015bci Rust gwarantuje, \u017ce destruktor zeruj\u0105cy jest wywo\u0142ywany deterministycznie. W po\u0142\u0105czeniu z barierami kompilatora z crate'a <code>zeroize</code>, kt\u00f3re uniemo\u017cliwiaj\u0105 optymalizatorowi usuni\u0119cie nadpisywania, zapewnia to silne gwarancje, \u017ce sekrety nie pozostaj\u0105 w pami\u0119ci po u\u017cyciu.</p>

<p>To kontrastuje z narz\u0119dziami napisanymi w j\u0119zykach z garbage collectorem (Java, Python, JavaScript), gdzie tajne dane mog\u0105 pozostawa\u0107 w pami\u0119ci na czas nieokre\u015blony, a\u017c garbage collector je odzyska i (by\u0107 mo\u017ce) nadpisze.</p>

<h2 id="opsec-mode">Tryb OPSEC</h2>

<p>Dla u\u017cytkownik\u00f3w dzia\u0142aj\u0105cych w wrogich \u015brodowiskach \u2014 dziennikarzy komunikuj\u0105cych si\u0119 ze \u017ar\u00f3d\u0142ami, aktywist\u00f3w pod inwigilacj\u0105, badaczy bezpiecze\u0144stwa zajmuj\u0105cych si\u0119 wra\u017cliwymi ujawnieniami \u2014 KeychainPGP zawiera tryb OPSEC wzmacniaj\u0105cy aplikacj\u0119 ponad domy\u015bln\u0105 postaw\u0119 bezpiecze\u0144stwa.</p>

<h3 id="window-title-disguise">Maskowanie tytu\u0142u okna</h3>

<p>Gdy tryb OPSEC jest aktywny, KeychainPGP zmienia tytu\u0142 okna na co\u015b niewinnego, np. \u201eKalkulator\u201d lub \u201eNotatki\u201d. Zapobiega to przypadkowemu shoulder-surfingowi i myli automatyczne narz\u0119dzia przechwytywania ekranu rejestruj\u0105ce tytu\u0142y okien. Przeciwnik analizuj\u0105cy zrzuty ekranu lub nagrania wideo nie zobaczy \u201eKeychainPGP\u201d ani \u201ePGP\u201d w \u017cadnym pasku tytu\u0142owym.</p>

<h3 id="ram-only-keys">Klucze tylko w RAM</h3>

<p>W trybie OPSEC klucze prywatne s\u0105 przechowywane wy\u0142\u0105cznie w RAM i nigdy nie s\u0105 zapisywane w systemie plik\u00f3w. Oznacza to, \u017ce je\u015bli urz\u0105dzenie zostanie przej\u0119te lub dysk b\u0119dzie obrazowany, nie ma plik\u00f3w kluczy do odzyskania. Kompromisem jest to, \u017ce klucze musz\u0105 by\u0107 reimportowane przy ka\u017cdym uruchomieniu aplikacji, zwykle z tokenu sprz\u0119towego, kodu QR lub bezpiecznego transferu z innego urz\u0105dzenia.</p>

<h3 id="panic-wipe">Awaryjne kasowanie</h3>

<p>Przycisk awaryjnego kasowania (lub powi\u0105zany skr\u00f3t klawiszowy) natychmiast zeruje ca\u0142y materia\u0142 kryptograficzny w pami\u0119ci, czy\u015bci schowek i opcjonalnie zamyka aplikacj\u0119. Jest to zaprojektowane na sytuacje, gdy musisz natychmiast zniszczy\u0107 ca\u0142y wra\u017cliwy stan \u2014 na przyk\u0142ad je\u015bli przewidujesz nieuchronne przej\u0119cie urz\u0105dzenia. Kasowanie jest natychmiastowe i nieodwracalne; ka\u017cdy klucz przechowywany tylko w RAM, kt\u00f3ry nie zosta\u0142 zapisany gdzie indziej, jest bezpowrotnie utracony.</p>

<h3 id="tor-proxy-support">Obs\u0142uga proxy Tor</h3>

<p>Tryb OPSEC zawiera mo\u017cliwo\u015b\u0107 kierowania wyszukiwa\u0144 na serwerach kluczy i ca\u0142ego ruchu sieciowego przez proxy SOCKS Tor. Zapobiega to obserwacji przez dostawc\u0119 internetu lub przeciwnika na poziomie sieci, \u017ce pobierasz klucze publiczne PGP, co mog\u0142oby s\u0142u\u017cy\u0107 jako metadane identyfikuj\u0105ce Twoich partner\u00f3w komunikacyjnych. Gdy obs\u0142uga proxy Tor jest aktywna, wszystkie po\u0142\u0105czenia wychodz\u0105ce z KeychainPGP s\u0105 kierowane przez skonfigurowane proxy SOCKS5 (typowo <code>127.0.0.1:9050</code>, je\u015bli Tor dzia\u0142a lokalnie).</p>

<h2 id="clipboard-encryption-vs-file-encryption">Szyfrowanie schowkowe vs szyfrowanie plikowe</h2>

<p>Szyfrowanie PGP przez schowek i przez pliki u\u017cywaj\u0105 tego samego standardu OpenPGP i produkuj\u0105 interoperacyjny zaszyfrowany tekst. R\u00f3\u017cnica le\u017cy w workflow i wynikaj\u0105cych z niego w\u0142a\u015bciwo\u015bciach bezpiecze\u0144stwa.</p>

<table>
<tr><th>Aspekt</th><th>Szyfrowanie schowkowe</th><th>Szyfrowanie plikowe</th></tr>
<tr><td><strong>Wej\u015bcie/wyj\u015bcie</strong></td><td>Schowek systemowy (pami\u0119\u0107 ulotna)</td><td>Pliki na dysku (trwa\u0142e przechowywanie)</td></tr>
<tr><td><strong>Artefakty z tekstem jawnym</strong></td><td>Brak na dysku; czyszczone ze schowka po op\u00f3\u017anieniu</td><td>Oryginalny plik, pliki tymczasowe, kopie zapasowe edytora mog\u0105 pozosta\u0107</td></tr>
<tr><td><strong>Obs\u0142uga aplikacji</strong></td><td>Ka\u017cda aplikacja obs\u0142uguj\u0105ca kopiowanie/wklejanie</td><td>Wymaga dost\u0119pu do systemu plik\u00f3w lub integracji CLI</td></tr>
<tr><td><strong>Kroki workflow</strong></td><td>3 (kopiuj, skr\u00f3t, wklej)</td><td>5+ (zapisz plik, uruchom CLI, okre\u015bl wyj\u015bcie, otw\u00f3rz wyj\u015bcie, prze\u015blij)</td></tr>
<tr><td><strong>Przetwarzanie wsadowe</strong></td><td>Niepraktyczne dla du\u017cych ilo\u015bci</td><td>Dobrze dostosowane do masowego szyfrowania plik\u00f3w i archiw\u00f3w</td></tr>
<tr><td><strong>Du\u017ce ilo\u015bci danych</strong></td><td>Ograniczone do tekstu mieszcz\u0105cego si\u0119 w schowku</td><td>Obs\u0142uguje pliki dowolnej wielko\u015bci</td></tr>
<tr><td><strong>\u015alad forensyczny</strong></td><td>Minimalny (tylko RAM)</td><td>Znacz\u0105cy (artefakty dyskowe, metadane systemu plik\u00f3w)</td></tr>
</table>

<p>Szyfrowanie schowkowe jest najlepszym wyborem do szyfrowania na poziomie wiadomo\u015bci w codziennej komunikacji. Szyfrowanie plikowe pozostaje niezb\u0119dne, gdy trzeba szyfrowa\u0107 dane binarne, du\u017ce archiwa lub gdy odbiorca oczekuje za\u0142\u0105cznika <code>.pgp</code>. KeychainPGP obs\u0142uguje oba tryby, ale to w workflow schowkowym szczeg\u00f3lnie si\u0119 wyr\u00f3\u017cnia.</p>

<h2 id="threat-model">Model zagro\u017ce\u0144</h2>

<p>Zrozumienie, przed czym szyfrowanie PGP przez schowek chroni, a przed czym nie, jest kluczowe dla podejmowania \u015bwiadomych decyzji bezpiecze\u0144stwa. \u017badne pojedyncze narz\u0119dzie nie pokrywa wszystkich zagro\u017ce\u0144.</p>

<h3 id="what-clipboard-encryption-protects-against">Przed czym chroni szyfrowanie schowkowe</h3>

<ul>
<li><strong>Inwigilacja sieciowa.</strong> Wiadomo\u015bci zaszyfrowane przed opuszczeniem urz\u0105dzenia s\u0105 nieprzezroczyste dla ka\u017cdego monitoruj\u0105cego sie\u0107 \u2014 Twojego dostawcy internetu, pods\u0142uchuj\u0105cego w sieci Wi-Fi czy aktora pa\u0144stwowego prowadz\u0105cego g\u0142\u0119bok\u0105 inspekcj\u0119 pakiet\u00f3w. Zaszyfrowany tekst PGP mo\u017ce przechodzi\u0107 przez dowoln\u0105 liczb\u0119 niezaufanych sieci bez kompromitacji tekstu jawnego.</li>
<li><strong>Przechwycenie e-maili i wiadomo\u015bci.</strong> Je\u015bli przeciwnik uzyska dost\u0119p do Twojego serwera poczty, bazy danych dostawcy czatu lub wiadomo\u015bci w tranzycie, otrzyma jedynie zaszyfrowany tekst. Bez klucza prywatnego odbiorcy odzyskanie tre\u015bci jest obliczeniowo niemo\u017cliwe.</li>
<li><strong>Kompromitacja pami\u0119ci masowej.</strong> Je\u015bli przeciwnik uzyska kopi\u0119 Twoich archiw\u00f3w mailowych, log\u00f3w czatu lub kopii zapasowych w chmurze, wiadomo\u015bci zaszyfrowane PGP pozostaj\u0105 chronione. Jest to szczeg\u00f3lnie istotne dla szyfrowania schowkowego, gdzie tekst jawny nigdy nie trafia na dysk.</li>
<li><strong>Redukcja metadanych (z trybem OPSEC).</strong> Cho\u0107 PGP nie szyfruje nag\u0142\u00f3wk\u00f3w e-maili ani metadanych wiadomo\u015bci, funkcje trybu OPSEC jak obs\u0142uga proxy Tor i maskowanie tytu\u0142u okna redukuj\u0105 obserwowalne metadane wok\u00f3\u0142 korzystania z szyfrowania.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Przed czym nie chroni szyfrowanie schowkowe</h3>

<ul>
<li><strong>Kompromitacja terminala z keyloggerem.</strong> Je\u015bli przeciwnik zainstalowa\u0142 keylogger lub z\u0142o\u015bliwe oprogramowanie przechwytuj\u0105ce ekran na Twoim urz\u0105dzeniu, mo\u017ce przechwyci\u0107 tekst jawny przed szyfrowaniem lub po odszyfrowaniu. Szyfrowanie schowkowe zak\u0142ada zaufany terminal. Je\u015bli Twoje urz\u0105dzenie jest skompromitowane na poziomie systemu operacyjnego, \u017cadne szyfrowanie na poziomie aplikacji nie pomo\u017ce.</li>
<li><strong>Fizyczny dost\u0119p do odblokowanego urz\u0105dzenia.</strong> Je\u015bli przeciwnik ma fizyczny dost\u0119p do Twojego urz\u0105dzenia, gdy jest odblokowane, a KeychainPGP dzia\u0142a z za\u0142adowanymi kluczami, mo\u017ce odszyfrowa\u0107 wiadomo\u015bci. Klucze tylko w RAM i przycisk awaryjnego kasowania \u0142agodz\u0105 to w pewnym stopniu, ale wymagaj\u0105, aby\u015b zadzia\u0142a\u0142 zanim przeciwnik uzyska dost\u0119p.</li>
<li><strong>Skompromitowane klucze prywatne.</strong> Je\u015bli Tw\u00f3j klucz prywatny zostanie wyeksfiltrowany (z kopii zapasowej, skompromitowanego urz\u0105dzenia lub s\u0142abego has\u0142a), wszystkie wiadomo\u015bci zaszyfrowane tym kluczem \u2014 przesz\u0142e i przysz\u0142e \u2014 s\u0105 skompromitowane. U\u017cywaj silnego has\u0142a i przechowuj klucz prywatny na jak najmniejszej liczbie urz\u0105dze\u0144.</li>
<li><strong>Analiza ruchu sieciowego.</strong> PGP szyfruje tre\u015b\u0107 wiadomo\u015bci, nie wzorce komunikacji. Przeciwnik obserwuj\u0105cy Tw\u00f3j ruch sieciowy mo\u017ce ustali\u0107, \u017ce si\u0119 komunikujesz, jak cz\u0119sto i potencjalnie z kim (na podstawie zapyta\u0144 do serwer\u00f3w kluczy), nawet bez czytania tre\u015bci. Obs\u0142uga proxy Tor w trybie OPSEC cz\u0119\u015bciowo adresuje ten problem.</li>
</ul>

<p>Szersze wprowadzenie do tych koncepcji znajdziesz w <a href="/pl/docs/pgp-for-beginners/">PGP dla pocz\u0105tkuj\u0105cych</a>, kt\u00f3ry obejmuje podstawy kryptografii klucza publicznego i zarz\u0105dzania kluczami.</p>

<h2 id="best-practices">Najlepsze praktyki PGP przez schowek</h2>

<p>Przestrzeganie tych praktyk zmaksymalizuje korzy\u015bci bezpiecze\u0144stwa szyfrowania PGP przez schowek:</p>

<ol>
<li><strong>Wy\u0142\u0105cz histori\u0119 schowka.</strong> Wy\u0142\u0105cz histori\u0119 schowka na poziomie systemu operacyjnego i usu\u0144 mened\u017cer\u00f3w schowka firm trzecich z maszyn, na kt\u00f3rych obs\u0142ugujesz zaszyfrowan\u0105 komunikacj\u0119.</li>
<li><strong>Zostaw automatyczne czyszczenie w\u0142\u0105czone.</strong> Nie wy\u0142\u0105czaj timera automatycznego czyszczenia schowka. Skr\u00f3\u0107 go do najkr\u00f3tszego interwa\u0142u, kt\u00f3ry jest dla Ciebie u\u017cyteczny. Pi\u0119\u0107 do pi\u0119tnastu sekund wystarcza do wi\u0119kszo\u015bci workflow.</li>
<li><strong>U\u017cywaj trybu OPSEC, gdy to uzasadnione.</strong> Je\u015bli dzia\u0142asz w \u015brodowisku, gdzie samo u\u017cywanie szyfrowania stanowi ryzyko, aktywuj tryb OPSEC dla maskowania tytu\u0142u okna, kluczy tylko w RAM i routingu Tor.</li>
<li><strong>Weryfikuj klucze odbiorc\u00f3w poza pasmem.</strong> Przed zaszyfrowaniem wiadomo\u015bci kluczem publicznym kogo\u015b, zweryfikuj odcisk klucza osobnym kana\u0142em (osobi\u015bcie, rozmow\u0105 g\u0142osow\u0105, podpisan\u0105 wiadomo\u015bci\u0105 od znanego klucza). Zapobiega to atakom man-in-the-middle na dystrybucj\u0119 kluczy.</li>
<li><strong>U\u017cywaj silnych hase\u0142.</strong> Chro\u0144 sw\u00f3j klucz prywatny has\u0142em, kt\u00f3re jest zar\u00f3wno d\u0142ugie, jak i trudne do odgadni\u0119cia. Has\u0142o sk\u0142adaj\u0105ce si\u0119 z czterech do sze\u015bciu losowo wygenerowanych s\u0142\u00f3w jest bezpieczniejsze i \u0142atwiejsze do wpisania ni\u017c kr\u00f3tki ci\u0105g mieszanych znak\u00f3w.</li>
<li><strong>Utrzymuj sw\u00f3j terminal w czysto\u015bci.</strong> Szyfrowanie schowkowe zak\u0142ada zaufane urz\u0105dzenie. U\u017cywaj aktualnego systemu operacyjnego, unikaj instalowania niezaufanego oprogramowania i u\u017cywaj pe\u0142nego szyfrowania dysku do ochrony danych w spoczynku.</li>
<li><strong>Preferuj klucze Ed25519/X25519.</strong> KeychainPGP u\u017cywa tych nowoczesnych algorytm\u00f3w na krzywych eliptycznych domy\u015blnie z dobrych powod\u00f3w. S\u0105 szybkie, kompaktowe i odporne na szereg atak\u00f3w implementacyjnych dotykaj\u0105cych starsze klucze RSA i DSA. Je\u015bli migrujesz ze starszego klucza, wygeneruj now\u0105 par\u0119 kluczy Ed25519/X25519 i przeprowad\u017a tranzycj\u0119 ze swoimi kontaktami.</li>
<li><strong>Przetestuj sw\u00f3j workflow.</strong> Przed poleganiem na szyfrowaniu schowkowym w krytycznej komunikacji, przećwicz pe\u0142ny cykl: wygeneruj klucze, wymie\u0144 klucze publiczne, zaszyfruj testow\u0105 wiadomo\u015b\u0107, odszyfruj j\u0105 po drugiej stronie. Znajomo\u015b\u0107 procesu zmniejsza ryzyko b\u0142\u0119du pod presj\u0105.</li>
</ol>

<p>Szyfrowanie PGP przez schowek nie jest panaceum, ale w po\u0142\u0105czeniu z dobrymi praktykami bezpiecze\u0144stwa operacyjnego oferuje praktyczn\u0105, niskotarciow\u0105 \u015bcie\u017ck\u0119 do zaszyfrowanej komunikacji, kt\u00f3ra integruje si\u0119 z narz\u0119dziami, kt\u00f3rych ju\u017c u\u017cywasz. <a href="/pl/pgp-online-encrypt/">Wypr\u00f3buj KeychainPGP w przegl\u0105darce</a>, aby zobaczy\u0107 workflow schowek przede wszystkim w akcji.</p>
`
};

export default doc;
