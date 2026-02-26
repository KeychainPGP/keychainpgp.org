import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Jak u\u017cywa\u0107 PGP: poradnik szyfrowania krok po kroku (2026)',
	description: 'Naucz si\u0119 u\u017cywa\u0107 szyfrowania PGP krok po kroku. Generuj klucze, szyfruj i deszyfruj wiadomo\u015bci, podpisuj i weryfikuj dane z tym kompleksowym poradnikiem PGP.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Jak u\u017cywa\u0107 PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Co b\u0119dzie potrzebne', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Krok 1: Wygeneruj par\u0119 kluczy', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Krok 2: Udost\u0119pnij sw\u00f3j klucz publiczny', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Krok 3: Zaimportuj klucze kontakt\u00f3w', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Krok 4: Zaszyfruj wiadomo\u015b\u0107', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Krok 5: Odszyfruj wiadomo\u015b\u0107', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Krok 6: Podpisz wiadomo\u015b\u0107', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Krok 7: Zweryfikuj podpis', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'Workflow schowka KeychainPGP', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Aplikacja webowa vs desktopowa', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>Jak u\u017cywa\u0107 PGP</h1>

<p>Aby u\u017cywa\u0107 PGP, generujesz par\u0119 kluczy (klucz publiczny i klucz prywatny), udost\u0119pniasz sw\u00f3j klucz publiczny osobom, z kt\u00f3rymi chcesz si\u0119 komunikowa\u0107, importujesz ich klucze publiczne, a nast\u0119pnie u\u017cywasz tych kluczy do szyfrowania, deszyfrowania, podpisywania i weryfikacji wiadomo\u015bci. Szyfrowanie PGP gwarantuje, \u017ce tylko zamierzony odbiorca mo\u017ce przeczyta\u0107 Twoj\u0105 wiadomo\u015b\u0107, a podpisy cyfrowe dowodz\u0105, \u017ce wiadomo\u015b\u0107 pochodzi od Ciebie. Narz\u0119dzia takie jak <a href="/pl/pgp-online-encrypt/">KeychainPGP</a> czyni\u0105 ten proces dost\u0119pnym dzi\u0119ki workflow opartemu na schowku \u2014 bez linii polece\u0144.</p>

<p>Ten poradnik PGP przeprowadzi Ci\u0119 przez ka\u017cdy krok, od wygenerowania pierwszej pary kluczy po wysy\u0142anie i odbieranie zaszyfrowanych wiadomo\u015bci. Je\u015bli jeste\u015b nowy w koncepcji kryptografii klucza publicznego, rozwa\u017c najpierw przeczytanie <a href="/pl/docs/what-is-pgp/">Czym jest PGP?</a> lub <a href="/pl/docs/pgp-for-beginners/">PGP dla pocz\u0105tkuj\u0105cych</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">Co b\u0119dzie potrzebne przed rozpocz\u0119ciem</h2>

<p>Przed zaszyfrowaniem pierwszej wiadomo\u015bci PGP potrzebujesz aplikacji PGP:</p>

<ul>
<li><strong>Aplikacja webowa KeychainPGP</strong> \u2014 Otw\u00f3rz <a href="/pl/pgp-online-encrypt/">narz\u0119dzie PGP online</a> w dowolnej nowoczesnej przegl\u0105darce. Wszystko dzia\u0142a lokalnie przez WebAssembly skompilowany z Rust. Bez instalacji, bez konta, \u017cadne dane nie s\u0105 wysy\u0142ane na serwer.</li>
<li><strong>Aplikacja desktopowa KeychainPGP</strong> \u2014 Pobierz natywn\u0105 aplikacj\u0119 dla Windows, macOS, Linux lub Android ze <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">strony wydania na GitHub</a>. Aplikacja desktopowa dodaje globalne skr\u00f3ty klawiszowe, integracj\u0119 z zasobnikiem systemowym, automatyczne czyszczenie schowka i synchronizacj\u0119 przez QR kod.</li>
<li><strong>CLI KeychainPGP</strong> \u2014 CLI <code>keychainpgp</code> udost\u0119pnia komendy do generowania kluczy, szyfrowania, deszyfrowania, podpisywania, weryfikacji i zarz\u0105dzania p\u0119kiem kluczy. Idealne do skrypt\u00f3w i automatyzacji.</li>
<li><strong>GnuPG (GPG)</strong> \u2014 Tradycyjne narz\u0119dzie wiersza polece\u0144. Pot\u0119\u017cne, ale wymaga znajomo\u015bci terminala. Zobacz <a href="/pl/docs/pgp-vs-gpg/">PGP vs GPG</a> dla szczeg\u00f3\u0142owego por\u00f3wnania.</li>
</ul>

<blockquote><p><strong>Wskaz\u00f3wka:</strong> Je\u015bli chcesz po prostu wypr\u00f3bowa\u0107 szyfrowanie PGP teraz bez instalowania czegokolwiek, otw\u00f3rz <a href="/pl/pgp-online-encrypt/">narz\u0119dzie PGP online</a> i pod\u0105\u017caj za tym poradnikiem.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Krok 1: Wygeneruj par\u0119 kluczy PGP</h2>

<p>Para kluczy PGP sk\u0142ada si\u0119 z dw\u00f3ch matematycznie powi\u0105zanych kluczy:</p>

<ul>
<li><strong>Klucz publiczny</strong> \u2014 Udost\u0119pniasz go swobodnie. Ka\u017cdy mo\u017ce go u\u017cy\u0107, aby zaszyfrowa\u0107 wiadomo\u015bci do Ciebie lub zweryfikowa\u0107 Twoje podpisy.</li>
<li><strong>Klucz prywatny</strong> \u2014 Trzymasz go w tajemnicy. Odszyfrowuje wiadomo\u015bci zaszyfrowane Twoim kluczem publicznym i tworzy podpisy cyfrowe.</li>
</ul>

<h3>Generowanie klucza w KeychainPGP</h3>

<ol>
<li>Otw\u00f3rz KeychainPGP (aplikacja webowa lub desktopowa).</li>
<li>Przejd\u017a do zak\u0142adki <strong>Klucze</strong>.</li>
<li>Kliknij <strong>Wygeneruj nowy klucz</strong>.</li>
<li>Wpisz swoje imi\u0119 i adres e-mail.</li>
<li>Kliknij <strong>Generuj</strong>. KeychainPGP tworzy par\u0119 kluczy <strong>Ed25519 + X25519</strong> \u2014 najnowocze\u015bniejszy i najbezpieczniejszy algorytm dost\u0119pny w OpenPGP.</li>
</ol>

<h3>Generowanie klucza za pomoc\u0105 GPG (wiersz polece\u0144)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Wybierz typ klucza (RSA lub ECC), rozmiar i okres wa\u017cno\u015bci. Dla nowoczesnego bezpiecze\u0144stwa wybierz Ed25519, je\u015bli Twoja wersja GPG go obs\u0142uguje.</p>

<hr>

<h2 id="step-2-share-your-public-key">Krok 2: Udost\u0119pnij sw\u00f3j klucz publiczny</h2>

<p>Tw\u00f3j klucz publiczny to blok tekstu w formacie <strong>ASCII-armored</strong>. Mo\u017cesz go udost\u0119pni\u0107 wsz\u0119dzie:</p>

<ul>
<li><strong>E-mail</strong> \u2014 Wklej go w tre\u015bci e-maila lub za\u0142\u0105cz jako plik <code>.asc</code>.</li>
<li><strong>Komunikatory</strong> \u2014 Wy\u015blij przez Signal, WhatsApp, Matrix lub dowoln\u0105 platform\u0119 czatu.</li>
<li><strong>Twoja strona internetowa</strong> \u2014 Opublikuj na swojej stronie osobistej, profilu GitHub lub bio na Twitterze.</li>
<li><strong>Serwery kluczy</strong> \u2014 Prze\u015blij na publiczny serwer kluczy, taki jak <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Wa\u017cne:</strong> Udost\u0119pniaj tylko sw\u00f3j klucz <strong>publiczny</strong>. Nigdy nie udost\u0119pniaj swojego klucza prywatnego nikomu, w \u017cadnych okoliczno\u015bciach.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Krok 3: Zaimportuj klucze publiczne swoich kontakt\u00f3w</h2>

<p>Zanim b\u0119dziesz m\u00f3g\u0142 wys\u0142a\u0107 zaszyfrowany wiadomo\u015b\u0107 do kogo\u015b, potrzebujesz jego klucza publicznego. Popro\u015b kontakt o przes\u0142anie klucza publicznego w formacie ASCII-armored lub poszukaj go na serwerze kluczy.</p>

<h3>Import klucza w KeychainPGP</h3>

<ol>
<li>Skopiuj blok klucza publicznego kontaktu do schowka.</li>
<li>Otw\u00f3rz KeychainPGP i przejd\u017a do zak\u0142adki <strong>Klucze</strong>.</li>
<li>Kliknij <strong>Importuj klucz</strong> i wklej klucz.</li>
<li>Kontakt pojawi si\u0119 na li\u015bcie kluczy z imieniem i adresem e-mail.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Krok 4: Zaszyfruj wiadomo\u015b\u0107</h2>

<h3>Szyfrowanie w KeychainPGP (web lub desktop)</h3>

<ol>
<li>Przejd\u017a do zak\u0142adki <strong>Szyfruj</strong>.</li>
<li>Wpisz lub wklej wiadomo\u015b\u0107, kt\u00f3r\u0105 chcesz zaszyfrowa\u0107.</li>
<li>Wybierz odbiorc\u0119 z listy kluczy.</li>
<li>Kliknij <strong>Szyfruj do schowka</strong>. Zaszyfrowana wiadomo\u015b\u0107 zostanie skopiowana do schowka.</li>
<li>Wklej zaszyfrowan\u0105 wiadomo\u015b\u0107 do e-maila, czatu lub dowolnego kana\u0142u komunikacji.</li>
</ol>

<h3>Szyfrowanie za pomoc\u0105 skr\u00f3tu desktopowego</h3>

<p>Z aplikacj\u0105 desktopow\u0105 KeychainPGP proces jest jeszcze szybszy dzi\u0119ki <a href="/pl/docs/clipboard-encryption/">workflow przez schowek</a>:</p>

<ol>
<li>Wpisz wiadomo\u015b\u0107 w dowolnej aplikacji.</li>
<li>Zaznacz i skopiuj tekst (<code>Ctrl+C</code>).</li>
<li>Naci\u015bnij <strong><code>Ctrl+Shift+E</code></strong> \u2014 KeychainPGP zaszyfruje zawarto\u015b\u0107 schowka.</li>
<li>Wklej zaszyfrowan\u0105 wiadomo\u015b\u0107 (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Krok 5: Odszyfruj wiadomo\u015b\u0107</h2>

<h3>Deszyfrowanie w KeychainPGP (web lub desktop)</h3>

<ol>
<li>Skopiuj ca\u0142y blok zaszyfrowanej wiadomo\u015bci.</li>
<li>Przejd\u017a do zak\u0142adki <strong>Deszyfruj</strong> w KeychainPGP.</li>
<li>Wklej zaszyfrowany tekst.</li>
<li>Kliknij <strong>Deszyfruj</strong>. Tekst jawny pojawi si\u0119 natychmiast.</li>
</ol>

<h3>Deszyfrowanie za pomoc\u0105 skr\u00f3tu desktopowego</h3>

<ol>
<li>Zaznacz i skopiuj blok zaszyfrowanej wiadomo\u015bci (<code>Ctrl+C</code>).</li>
<li>Naci\u015bnij <strong><code>Ctrl+Shift+D</code></strong> \u2014 KeychainPGP odszyfruje zawarto\u015b\u0107 schowka.</li>
<li>Tekst jawny zast\u0105pi zaszyfrowany tekst w schowku. Wklej go tam, gdzie potrzebujesz.</li>
</ol>

<p>Aplikacja desktopowa posiada r\u00f3wnie\u017c <strong>automatyczne czyszczenie schowka</strong>: po 30 sekundach odszyfrowany tekst jest automatycznie usuwany ze schowka.</p>

<hr>

<h2 id="step-6-sign-a-message">Krok 6: Podpisz wiadomo\u015b\u0107</h2>

<p>Podpis cyfrowy PGP dowodzi dw\u00f3ch rzeczy:</p>

<ol>
<li><strong>Autentyczno\u015b\u0107</strong> \u2014 Wiadomo\u015b\u0107 zosta\u0142a napisana przez posiadacza klucza podpisu.</li>
<li><strong>Integralno\u015b\u0107</strong> \u2014 Wiadomo\u015b\u0107 nie zosta\u0142a zmieniona od momentu podpisania.</li>
</ol>

<p>Podpisywanie nie szyfruje wiadomo\u015bci. Ka\u017cdy mo\u017ce przeczyta\u0107 podpisan\u0105 wiadomo\u015b\u0107, ale mo\u017ce zweryfikowa\u0107, \u017ce pochodzi od Ciebie i nie zosta\u0142a sfa\u0142szowana.</p>

<h3>Kiedy podpisywa\u0107 wiadomo\u015bci</h3>

<ul>
<li>Og\u0142aszanie wyda\u0144 oprogramowania lub alert\u00f3w bezpiecze\u0144stwa</li>
<li>Weryfikacja to\u017csamo\u015bci na forach publicznych</li>
<li>Podpisywanie e-maili w celu potwierdzenia ich pochodzenia</li>
<li>Podpisywanie commit\u00f3w Git dla integralno\u015bci kodu</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Krok 7: Zweryfikuj podpis</h2>

<p>Gdy otrzymasz podpisan\u0105 wiadomo\u015b\u0107, mo\u017cesz sprawdzi\u0107, czy jest autentyczna i niezmieniona.</p>

<h3>Weryfikacja w KeychainPGP</h3>

<ol>
<li>Skopiuj ca\u0142\u0105 podpisan\u0105 wiadomo\u015b\u0107 (\u0142\u0105cznie z blokiem podpisu).</li>
<li>Przejd\u017a do zak\u0142adki <strong>Weryfikuj</strong>.</li>
<li>Wklej podpisan\u0105 wiadomo\u015b\u0107.</li>
<li>Kliknij <strong>Weryfikuj</strong>. KeychainPGP potwierdzi, czy podpis jest poprawny.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">Workflow schowka KeychainPGP</h2>

<p>To, co wyr\u00f3\u017cnia KeychainPGP spo\u015br\u00f3d tradycyjnych narz\u0119dzi PGP, to <a href="/pl/docs/clipboard-encryption/">workflow szyfrowania przez schowek</a>. Zamiast operowa\u0107 na plikach lub wymaga\u0107 dedykowanego klienta poczty, KeychainPGP dzia\u0142a z dowoln\u0105 aplikacj\u0105 przez systemowy schowek.</p>

<table>
<tr><th>Akcja</th><th>Aplikacja webowa</th><th>Aplikacja desktopowa</th></tr>
<tr><td>Szyfruj</td><td>Wklej tekst, kliknij Szyfruj</td><td>Skopiuj tekst, naci\u015bnij <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Deszyfruj</td><td>Wklej zaszyfrowany tekst, kliknij Deszyfruj</td><td>Skopiuj zaszyfrowany tekst, naci\u015bnij <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Podpisz</td><td>Wklej tekst, kliknij Podpisz</td><td>Dost\u0119pne w oknie aplikacji</td></tr>
<tr><td>Weryfikuj</td><td>Wklej podpisany tekst, kliknij Weryfikuj</td><td>Dost\u0119pne w oknie aplikacji</td></tr>
</table>

<p>Dodatkowe funkcje bezpiecze\u0144stwa aplikacji desktopowej:</p>

<ul>
<li><strong>Automatyczne czyszczenie schowka</strong> \u2014 Odszyfrowany tekst jest usuwany ze schowka po 30 sekundach.</li>
<li><strong>Tryb OPSEC</strong> \u2014 Zamaskowany tytu\u0142 okna, przechowywanie kluczy tylko w RAM i przycisk awaryjnego kasowania.</li>
<li><strong>Magazyn po\u015bwiadcze\u0144 systemu</strong> \u2014 Klucze prywatne s\u0105 bezpiecznie przechowywane przez Windows Credential Manager, macOS Keychain lub Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Aplikacja webowa vs aplikacja desktopowa</h2>

<p><strong>Aplikacja webowa</strong> (<a href="/pl/pgp-online-encrypt/">narz\u0119dzie PGP online</a>):</p>

<ul>
<li>Dzia\u0142a ca\u0142kowicie w przegl\u0105darce przez WebAssembly</li>
<li>Bez instalacji, bez konta</li>
<li>Idealna do szybkich zada\u0144 szyfrowania</li>
<li>Klucze przechowywane w lokalnej pami\u0119ci przegl\u0105darki</li>
</ul>

<p><strong>Aplikacja desktopowa</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Globalne skr\u00f3ty klawiszowe do szyfrowania i deszyfrowania</li>
<li>Integracja z zasobnikiem systemowym</li>
<li>Automatyczne czyszczenie schowka</li>
<li>Tryb OPSEC z kluczami tylko w RAM i awaryjnym kasowaniem</li>
<li>Bezpieczne przechowywanie kluczy przez mened\u017cer po\u015bwiadcze\u0144 systemu</li>
<li>Lepiej dostosowana do codziennego u\u017cytku i d\u0142ugoterminowego zarz\u0105dzania kluczami</li>
</ul>

<p>Obie aplikacje s\u0105 darmowe, open source (MIT / Apache-2.0) i bez \u017cadnej telemetrii.</p>

<hr>

<h2 id="frequently-asked-questions">Cz\u0119sto zadawane pytania</h2>

<h3>Czy powinienem udost\u0119pnia\u0107 sw\u00f3j klucz prywatny?</h3>

<p>Nie. <strong>Nigdy</strong> nie udost\u0119pniaj swojego klucza prywatnego nikomu. Tw\u00f3j klucz prywatny pozwala odszyfrowa\u0107 wiadomo\u015bci wysy\u0142ane do Ciebie i tworzy\u0107 podpisy cyfrowe. Je\u015bli kto\u015b inny uzyska Tw\u00f3j klucz prywatny, mo\u017ce czyta\u0107 wszystkie wiadomo\u015bci zaszyfrowane dla Ciebie i podszywać si\u0119 pod Ciebie.</p>

<h3>Co si\u0119 stanie, je\u015bli zgubi\u0119 sw\u00f3j klucz prywatny?</h3>

<p>Je\u015bli zgubisz sw\u00f3j klucz prywatny, bezpowrotnie utracisz mo\u017cliwo\u015b\u0107 odszyfrowania wszystkich wiadomo\u015bci zaszyfrowanych odpowiadaj\u0105cym kluczem publicznym. Nie istnieje \u017caden mechanizm odzyskiwania. Zawsze przechowuj bezpieczn\u0105 kopi\u0119 zapasow\u0105 swojego klucza prywatnego.</p>

<h3>Czy mog\u0119 szyfrowa\u0107 pliki za pomoc\u0105 PGP?</h3>

<p>Tak. PGP mo\u017ce szyfrowa\u0107 zar\u00f3wno wiadomo\u015bci tekstowe, jak i pliki binarne. KeychainPGP skupia si\u0119 na szyfrowaniu tekstu przez schowek, natomiast narz\u0119dzia takie jak GnuPG obs\u0142uguj\u0105 szyfrowanie plik\u00f3w bezpo\u015brednio. Szczeg\u00f3\u0142owe por\u00f3wnanie znajdziesz w przewodniku <a href="/pl/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>Czy szyfrowanie PGP jest bezpieczne?</h3>

<p>Szyfrowanie PGP z nowoczesnymi algorytmami jest niezwykle bezpieczne. KeychainPGP u\u017cywa Ed25519 do podpis\u00f3w i X25519 do wymiany kluczy \u2014 algorytm\u00f3w na krzywych eliptycznych, kt\u00f3re oferuj\u0105 bezpiecze\u0144stwo r\u00f3wnowa\u017cne RSA-3072 przy u\u0142amku rozmiaru klucza. G\u0142\u00f3wne zagro\u017cenia nie s\u0105 kryptograficzne, lecz operacyjne: s\u0142abe has\u0142a, skompromitowane urz\u0105dzenia lub zaniedbane zarz\u0105dzanie kluczami.</p>

<h3>Czym jest odcisk klucza PGP?</h3>

<p>Odcisk klucza PGP to 40-znakowy ci\u0105g szesnastkowy, kt\u00f3ry jednoznacznie identyfikuje klucz PGP. Odciski s\u0142u\u017c\u0105 do weryfikacji, \u017ce klucz publiczny nale\u017cy do osoby, kt\u00f3r\u0105 my\u015blisz. Zawsze por\u00f3wnuj odcisk przez osobny zaufany kana\u0142 (rozmowa telefoniczna, spotkanie osobiste), aby zapobiec atakom man-in-the-middle.</p>
`
};

export default doc;
