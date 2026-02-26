import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP dla pocz\u0105tkuj\u0105cych: prosty przewodnik, jak zacz\u0105\u0107 z szyfrowaniem PGP',
	description: 'Naucz si\u0119 szyfrowania PGP od podstaw. Ten poradnik dla pocz\u0105tkuj\u0105cych wyja\u015bnia, jak dzia\u0142a PGP, przeprowadzi Ci\u0119 przez pierwsz\u0105 zaszyfrowan\u0105 wiadomo\u015b\u0107 i om\u00f3wi kluczowe poj\u0119cia.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Dlaczego szyfrowanie jest wa\u017cne', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'Czym jest PGP, prosto wyja\u015bnione', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Kluczowe poj\u0119cia, kt\u00f3re musisz zna\u0107', level: 2 },
		{ id: 'public-key-your-address', text: 'Klucz publiczny: Tw\u00f3j adres', level: 3 },
		{ id: 'private-key-your-password', text: 'Klucz prywatny: Twoje has\u0142o', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Szyfrowanie vs podpisywanie', level: 3 },
		{ id: 'key-fingerprints', text: 'Odciski kluczy', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Twoja pierwsza wiadomo\u015b\u0107 PGP', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Typowe b\u0142\u0119dy pocz\u0105tkuj\u0105cych', level: 2 },
		{ id: 'next-steps', text: 'Kolejne kroki', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP dla pocz\u0105tkuj\u0105cych: prosty przewodnik, jak zacz\u0105\u0107</h1>

<p>Rozpocz\u0119cie przygody z PGP jest \u0142atwiejsze, ni\u017c my\u015blisz. Generujesz par\u0119 kluczy \u2014 jeden publiczny, jeden prywatny \u2014 udost\u0119pniasz klucz publiczny osobom, z kt\u00f3rymi chcesz si\u0119 komunikowa\u0107, i u\u017cywasz klucza prywatnego do odszyfrowywania wiadomo\u015bci, kt\u00f3re Ci wysy\u0142aj\u0105. Nie musisz instalowa\u0107 \u017cadnego oprogramowania, \u017ceby spr\u00f3bowa\u0107. Dzi\u0119ki darmowemu <a href="/pl/pgp-online-encrypt/">narz\u0119dziu PGP online</a> KeychainPGP mo\u017cesz zaszyfrowa\u0107 swoj\u0105 pierwsz\u0105 wiadomo\u015b\u0107 w mniej ni\u017c pi\u0119\u0107 minut, bezpo\u015brednio z przegl\u0105darki.</p>

<h2 id="why-encryption-matters">Dlaczego szyfrowanie jest wa\u017cne</h2>

<p>Ka\u017cdego dnia miliardy wiadomo\u015bci przep\u0142ywaj\u0105 przez Internet. E-maile, wiadomo\u015bci na czacie, dokumenty \u2014 wi\u0119kszo\u015b\u0107 wysy\u0142anych jest jako zwyk\u0142y tekst, co oznacza, \u017ce ka\u017cdy, kto je przechwyci, mo\u017ce je przeczyta\u0107. Dotyczy to dostawc\u00f3w internetu, haker\u00f3w w publicznych sieciach Wi-Fi, a nawet rz\u0105dowych program\u00f3w nadzoru.</p>

<p><strong>Wycieki danych nie s\u0105 rzadkimi zdarzeniami.</strong> Zdarzaj\u0105 si\u0119 ca\u0142y czas. Je\u015bli Twoje wiadomo\u015bci nie s\u0105 zaszyfrowane, s\u0105 przechowywane w bazach danych jako czytelny tekst, czekaj\u0105c na kolejny wyciek.</p>

<p>Szyfrowanie rozwi\u0105zuje ten problem. Kiedy szyfrujesz wiadomo\u015b\u0107 za pomoc\u0105 PGP, zostaje ona przerobiona na nieczytelny ci\u0105g znak\u00f3w. Tylko osoba posiadaj\u0105ca odpowiedni klucz prywatny mo\u017ce j\u0105 odczyta\u0107.</p>

<h2 id="what-is-pgp-explained-simply">Czym jest PGP, prosto wyja\u015bnione</h2>

<p>PGP to skr\u00f3t od <strong>Pretty Good Privacy</strong>. Stworzone w 1991 roku przez Phila Zimmermanna, sta\u0142o si\u0119 \u015bwiatowym standardem szyfrowania wiadomo\u015bci i plik\u00f3w.</p>

<p>Oto najprostszy spos\u00f3b na zrozumienie PGP. Pomy\u015bl o tym jak o <strong>skrzynce pocztowej z wrzutni\u0105</strong>.</p>

<p>Wyobra\u017a sobie specjaln\u0105 skrzynk\u0119 pocztow\u0105 na ulicy. Ka\u017cdy mo\u017ce podej\u015b\u0107 i wrzuci\u0107 list przez wrzutni\u0119. Ale kiedy list jest ju\u017c w \u015brodku, tylko Ty mo\u017cesz go wyj\u0105\u0107, bo tylko Ty masz klucz do drzwiczek skrzynki.</p>

<ul>
<li><strong>Wrzutnia skrzynki pocztowej</strong> to Tw\u00f3j <strong>klucz publiczny</strong>. Dajesz go ka\u017cdemu, kto chce wys\u0142a\u0107 Ci prywatn\u0105 wiadomo\u015b\u0107. Bezpiecznie mo\u017cna go udost\u0119pnia\u0107.</li>
<li><strong>Klucz do skrzynki</strong> to Tw\u00f3j <strong>klucz prywatny</strong>. Nigdy nie udost\u0119pniasz go nikomu.</li>
</ul>

<p>To jest to, co nazywamy <strong>szyfrowaniem asymetrycznym</strong> \u2014 jeden klucz zamyka, drugi otwiera. Bardziej szczeg\u00f3\u0142owe wyja\u015bnienie techniczne znajdziesz w naszym kompleksowym przewodniku <a href="/pl/docs/what-is-pgp/">czym jest PGP</a>.</p>

<h2 id="key-concepts-you-need-to-know">Kluczowe poj\u0119cia, kt\u00f3re musisz zna\u0107</h2>

<h3 id="public-key-your-address">Klucz publiczny: Tw\u00f3j adres</h3>

<p>Tw\u00f3j klucz publiczny jest jak Tw\u00f3j adres pocztowy. Rozdajesz go swobodnie, aby ludzie mogli Ci co\u015b wys\u0142a\u0107. W PGP udost\u0119pniasz sw\u00f3j klucz publiczny, aby inni mogli szyfrowa\u0107 wiadomo\u015bci, kt\u00f3re tylko Ty mo\u017cesz odczyta\u0107.</p>

<h3 id="private-key-your-password">Klucz prywatny: Twoje has\u0142o</h3>

<p>Tw\u00f3j klucz prywatny jest jak klucz do drzwi wej\u015bciowych. To jedyna rzecz, kt\u00f3ra pozwala otworzy\u0107 wiadomo\u015bci zaszyfrowane Twoim kluczem publicznym. <strong>Nigdy nie udost\u0119pniaj swojego klucza prywatnego</strong> nikomu.</p>

<h3 id="encryption-vs-signing">Szyfrowanie vs podpisywanie</h3>

<p>PGP potrafi dwie rzeczy: <strong>szyfrowa\u0107</strong> i <strong>podpisywa\u0107</strong>.</p>

<ul>
<li><strong>Szyfrowanie</strong> \u2014 przetwarza wiadomo\u015b\u0107 tak, \u017ce tylko odbiorca mo\u017ce j\u0105 odczyta\u0107. U\u017cywasz klucza publicznego odbiorcy do zaszyfrowania, a on u\u017cywa swojego klucza prywatnego do odszyfrowania.</li>
<li><strong>Podpisywanie</strong> \u2014 dowodzi, \u017ce wiadomo\u015b\u0107 pochodzi od Ciebie i nie zosta\u0142a zmieniona. U\u017cywasz w\u0142asnego klucza prywatnego do podpisania, a ka\u017cdy z Twoim kluczem publicznym mo\u017ce zweryfikowa\u0107 podpis.</li>
</ul>

<h3 id="key-fingerprints">Odciski kluczy</h3>

<p>Odcisk klucza to kr\u00f3tki ci\u0105g znak\u00f3w, kt\u00f3ry jednoznacznie identyfikuje klucz PGP. Odciski s\u0142u\u017c\u0105 do <strong>weryfikacji</strong>, \u017ce klucz publiczny nale\u017cy do osoby, za kt\u00f3r\u0105 si\u0119 uwa\u017ca. Zawsze por\u00f3wnuj odcisk przez oddzielny, zaufany kana\u0142.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Kiedy widzisz klucz PGP lub zaszyfrowan\u0105 wiadomo\u015b\u0107 jako blok tekstu zaczynaj\u0105cy si\u0119 od <code>-----BEGIN PGP MESSAGE-----</code>, to jest <strong>ASCII armor</strong>. To po prostu spos\u00f3b na zakodowanie danych binarnych w drukowalne znaki tekstowe, aby mo\u017cna je by\u0142o kopiowa\u0107 i wkleja\u0107 do e-maili, okien czatu czy formularzy webowych.</p>

<h2 id="your-first-pgp-message">Twoja pierwsza wiadomo\u015b\u0107 PGP</h2>

<p>Przejd\u017amy przez kolejne kroki szyfrowania pierwszej wiadomo\u015bci za pomoc\u0105 <a href="https://keychainpgp.github.io">aplikacji webowej KeychainPGP</a>. To darmowe <a href="/pl/pgp-online-encrypt/">narz\u0119dzie PGP online</a> dzia\u0142aj\u0105ce ca\u0142kowicie w Twojej przegl\u0105darce.</p>

<p><strong>Krok 1: Otw\u00f3rz aplikacj\u0119 webow\u0105.</strong> Wejd\u017a na <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. Aplikacja \u0142aduje si\u0119 przez WebAssembly, silnik PGP dzia\u0142a lokalnie na Twoim komputerze.</p>

<p><strong>Krok 2: Wygeneruj swoj\u0105 par\u0119 kluczy.</strong> W zak\u0142adce Klucze utw\u00f3rz nowy klucz. KeychainPGP generuje nowoczesn\u0105 par\u0119 kluczy Ed25519 + X25519.</p>

<p><strong>Krok 3: Wyeksportuj i udost\u0119pnij sw\u00f3j klucz publiczny.</strong> U\u017cyj funkcji eksportu, aby skopiowa\u0107 sw\u00f3j klucz publiczny w formacie ASCII-armored.</p>

<p><strong>Krok 4: Zaimportuj klucz publiczny odbiorcy.</strong> W zak\u0142adce Klucze wklej blok klucza publicznego swojego kontaktu.</p>

<p><strong>Krok 5: Napisz i zaszyfruj wiadomo\u015b\u0107.</strong> Przejd\u017a do zak\u0142adki Szyfruj, wpisz wiadomo\u015b\u0107, wybierz odbiorc\u0119 i kliknij <strong>\u201eSzyfruj do schowka\u201d</strong>.</p>

<p><strong>Krok 6: Wy\u015blij zaszyfrowan\u0105 wiadomo\u015b\u0107.</strong> Wklej zaszyfrowany tekst do dowolnego e-maila, czatu lub komunikatora.</p>

<p><strong>Krok 7: Odszyfruj odpowied\u017a.</strong> Skopiuj zaszyfrowany blok wiadomo\u015bci PGP, przejd\u017a do zak\u0142adki Deszyfruj, wklej i kliknij Deszyfruj.</p>

<p>Bardziej szczeg\u00f3\u0142owy poradnik znajdziesz w naszym tutorialu <a href="/pl/docs/how-to-use-pgp/">jak u\u017cywa\u0107 PGP</a>.</p>

<h2 id="common-beginner-mistakes">Typowe b\u0142\u0119dy pocz\u0105tkuj\u0105cych</h2>

<p><strong>1. Udost\u0119pnianie klucza prywatnego.</strong> Tw\u00f3j klucz prywatny nigdy nie powinien by\u0107 wysy\u0142any nikomu. Udost\u0119pniaj tylko sw\u00f3j klucz <strong>publiczny</strong>.</p>

<p><strong>2. Brak weryfikacji odcisk\u00f3w.</strong> Zawsze weryfikuj odcisk klucza przez oddzielny, zaufany kana\u0142 \u2014 rozmow\u0119 telefoniczn\u0105, po\u0142\u0105czenie wideo lub spotkanie osobiste.</p>

<p><strong>3. Utrata klucza prywatnego bez kopii zapasowej.</strong> Je\u015bli zgubisz sw\u00f3j klucz prywatny, ka\u017cda wiadomo\u015b\u0107 zaszyfrowana tym kluczem jest stracona na zawsze. Zr\u00f3b kopi\u0119 zapasow\u0105 klucza prywatnego w bezpiecznym miejscu.</p>

<p><strong>4. Brak kopii zapasowej certyfikatu odwo\u0142ania.</strong> Certyfikat odwo\u0142ania pozwala publicznie og\u0142osi\u0107, \u017ce Tw\u00f3j klucz jest niewa\u017cny, je\u015bli zostanie skompromitowany.</p>

<p><strong>5. U\u017cywanie przestarza\u0142ych lub s\u0142abych kluczy.</strong> Je\u015bli generujesz nowe klucze dzi\u015b, u\u017cywaj nowoczesnych algorytm\u00f3w. KeychainPGP domy\u015blnie u\u017cywa Ed25519 + X25519.</p>

<h2 id="next-steps">Kolejne kroki</h2>

<ul>
<li><strong>Przeczytaj pe\u0142ny przewodnik:</strong> <a href="/pl/docs/how-to-use-pgp/">Jak u\u017cywa\u0107 PGP</a> obejmuje podpisywanie, weryfikacj\u0119, zarz\u0105dzanie kluczami i zaawansowane tematy.</li>
<li><strong>Zrozum, czym jest PGP:</strong> Aby zag\u0142\u0119bi\u0107 si\u0119 w temat, przeczytaj <a href="/pl/docs/what-is-pgp/">Czym jest PGP</a>.</li>
<li><strong>Poznaj szyfrowanie przez schowek:</strong> Dowiedz si\u0119, jak <a href="/pl/docs/clipboard-encryption/">szyfrowanie przez schowek</a> pozwala u\u017cywa\u0107 PGP z dowoln\u0105 aplikacj\u0105.</li>
<li><strong>Wypr\u00f3buj narz\u0119dzie online:</strong> Otw\u00f3rz <a href="/pl/pgp-online-encrypt/">narz\u0119dzie PGP online</a> i po\u0107wicz.</li>
<li><strong>Pobierz aplikacj\u0119 desktopow\u0105:</strong> <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">Aplikacja desktopowa KeychainPGP</a> dodaje globalne skr\u00f3ty klawiszowe, zasobnik systemowy i automatyczne czyszczenie schowka.</li>
</ul>

<h2 id="faq">Cz\u0119sto zadawane pytania</h2>

<h3>Czy PGP jest trudne do nauki?</h3>
<p>Nie. Podstawowy koncept jest prosty: klucz publiczny do udost\u0119pniania, klucz prywatny do trzymania w tajemnicy. Zaszyfrowanie wiadomo\u015bci wymaga kilku klikni\u0119\u0107 w nowoczesnym narz\u0119dziu takim jak KeychainPGP.</p>

<h3>Czy trzeba instalowa\u0107 oprogramowanie, aby u\u017cywa\u0107 PGP?</h3>
<p>Niekoniecznie. Mo\u017cesz u\u017cy\u0107 <a href="/pl/pgp-online-encrypt/">narz\u0119dzia PGP online</a> KeychainPGP bezpo\u015brednio w przegl\u0105darce. Dzia\u0142a ca\u0142kowicie na Twoim urz\u0105dzeniu przez WebAssembly.</p>

<h3>Czy kto\u015b mo\u017ce z\u0142ama\u0107 moje zaszyfrowane wiadomo\u015bci PGP?</h3>
<p>Przy nowoczesnych algorytmach (takich jak Ed25519 + X25519 u\u017cywane przez KeychainPGP), z\u0142amanie szyfrowania metod\u0105 brute force zaj\u0119\u0142oby wi\u0119cej ni\u017c wiek Wszech\u015bwiata przy obecnej technologii. Prawdziwe zagro\u017cenia s\u0105 praktyczne: utrata klucza prywatnego, u\u017cycie s\u0142abego has\u0142a lub z\u0142o\u015bliwe oprogramowanie na urz\u0105dzeniu.</p>

<h3>Jaka jest r\u00f3\u017cnica mi\u0119dzy PGP, GPG a OpenPGP?</h3>
<p><strong>PGP</strong> to oryginalny program stworzony w 1991 roku. <strong>OpenPGP</strong> to otwarty standard (RFC 4880) definiuj\u0105cy formaty. <strong>GPG</strong> (GNU Privacy Guard) to wolna implementacja standardu OpenPGP. KeychainPGP to kolejna implementacja, zbudowana na Sequoia-PGP w Rust. Wszystkie s\u0105 kompatybilne, poniewa\u017c stosuj\u0105 ten sam standard.</p>

<h3>Jak udost\u0119pni\u0107 sw\u00f3j klucz publiczny?</h3>
<p>Wyeksportuj sw\u00f3j klucz publiczny w formacie ASCII-armored \u2014 to blok tekstu zaczynaj\u0105cy si\u0119 od <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>. Wklej go do e-maila, opublikuj na stronie internetowej, udost\u0119pnij na czacie lub prze\u015blij na serwer kluczy. Pami\u0119taj o weryfikacji odcisk\u00f3w ze swoimi kontaktami przez oddzielny kana\u0142.</p>
`
};

export default doc;
