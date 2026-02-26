import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Czym jest PGP? Kompleksowy przewodnik po szyfrowaniu Pretty Good Privacy',
	description: 'Dowiedz si\u0119, czym jest PGP (Pretty Good Privacy), jak dzia\u0142a szyfrowanie PGP z kryptografi\u0105 klucza publicznego, standard OpenPGP, podpisy cyfrowe i wsp\u00f3\u0142czesne zastosowania.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'Czym jest szyfrowanie PGP?', level: 2 },
		{ id: 'history-of-pgp', text: 'Historia PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Jak dzia\u0142a szyfrowanie PGP', level: 2 },
		{ id: 'public-key-cryptography', text: 'Kryptografia klucza publicznego', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'Hybrydowy model szyfrowania', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Podpisy cyfrowe PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'Standard OpenPGP', level: 2 },
		{ id: 'web-of-trust', text: 'Sie\u0107 zaufania', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'Algorytmy i typy kluczy PGP', level: 2 },
		{ id: 'classic-algorithms', text: 'Algorytmy klasyczne', level: 3 },
		{ id: 'modern-algorithms', text: 'Algorytmy nowoczesne', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Typowe zastosowania PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP dzisiaj', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Pierwsze kroki z PGP', level: 2 }
	],
	html: `
<h1>Czym jest PGP? Kompleksowy przewodnik po szyfrowaniu Pretty Good Privacy</h1>

<h2 id="what-is-pgp-encryption">Czym jest szyfrowanie PGP?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> to program szyfruj\u0105cy, kt\u00f3ry zapewnia poufno\u015b\u0107 i uwierzytelnianie kryptograficzne dla komunikacji danych. Szyfrowanie PGP wykorzystuje po\u0142\u0105czenie kryptografii klucza symetrycznego i kryptografii klucza publicznego, umo\u017cliwiaj\u0105c u\u017cytkownikom szyfrowanie wiadomo\u015bci, plik\u00f3w i innych danych tak, aby tylko zamierzony odbiorca m\u00f3g\u0142 je odczyta\u0107. Pierwotnie stworzony przez Phila Zimmermanna w 1991 roku, PGP sta\u0142 si\u0119 najszerzej u\u017cywanym standardem szyfrowania e-maili na \u015bwiecie i stanowi podstaw\u0119 specyfikacji <strong>OpenPGP</strong> zdefiniowanej w RFC 4880. Niezale\u017cnie od tego, czy musisz wys\u0142a\u0107 poufny e-mail, zweryfikowa\u0107 to\u017csamo\u015b\u0107 wydawcy oprogramowania czy zabezpieczy\u0107 wra\u017cliwe pliki, PGP dostarcza sprawdzone ramy kryptograficzne, kt\u00f3rym ufaj\u0105 dziennikarze, badacze bezpiecze\u0144stwa, rz\u0105dy i codzienni u\u017cytkownicy.</p>

<p>Je\u015bli chcesz wypr\u00f3bowa\u0107 szyfrowanie PGP od razu bez instalowania oprogramowania, KeychainPGP oferuje <a href="/pl/pgp-online-encrypt/">narz\u0119dzie PGP online</a>, kt\u00f3re dzia\u0142a ca\u0142kowicie w Twojej przegl\u0105darce.</p>

<h2 id="history-of-pgp">Historia PGP</h2>

<p>Phil Zimmermann opublikowa\u0142 PGP 1.0 w czerwcu 1991 roku jako wolne oprogramowanie, motywowany przekonaniem, \u017ce silna kryptografia powinna by\u0107 dost\u0119pna dla wszystkich obywateli \u2014 nie tylko dla rz\u0105d\u00f3w i wojska. W tamtym czasie silne szyfrowanie by\u0142o klasyfikowane jako amunicja zgodnie z ameryka\u0144skimi przepisami eksportowymi, a Zimmermann by\u0142 przedmiotem trzyletniej dochodzenia karnego przez ameryka\u0144ski urz\u0105d celny za dystrybucj\u0119 PGP za granic\u0119. Dochodzenie zosta\u0142o ostatecznie umorzone w 1996 roku bez postawienia zarzut\u00f3w, a sprawa sta\u0142a si\u0119 prze\u0142omowym momentem w historii wolno\u015bci cyfrowych.</p>

<p>PGP ewoluowa\u0142o przez kilka wcielen\u0301 komercyjnych. Zimmermann za\u0142o\u017cy\u0142 PGP Inc. w 1996 roku, kt\u00f3ra zosta\u0142a przej\u0119ta przez Network Associates (p\u00f3\u017aniej McAfee) w 1997 roku, a ostatecznie przez Symantec w 2010 roku. Mimo tych zmian, le\u017c\u0105cy u podstaw protok\u00f3\u0142 kryptograficzny zosta\u0142 ustandaryzowany jako <strong>OpenPGP</strong> przez Internet Engineering Task Force (IETF), co gwarantuje, \u017ce protok\u00f3\u0142 pozostaje otwarty i interoperacyjny niezale\u017cnie od w\u0142asno\u015bci komercyjnej.</p>

<p>Publikacja standardu OpenPGP oznacza\u0142a, \u017ce ka\u017cdy mo\u017ce tworzy\u0107 kompatybilne implementacje. Doprowadzi\u0142o to do powstania GNU Privacy Guard (GnuPG lub GPG), wolnej i otwartej implementacji, kt\u00f3ra pozostaje jednym z najszerzej u\u017cywanych narz\u0119dzi PGP do dzi\u015b. Aby zrozumie\u0107 r\u00f3\u017cnice mi\u0119dzy tymi implementacjami, zapoznaj si\u0119 z naszym przewodnikiem <a href="/pl/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Jak dzia\u0142a szyfrowanie PGP</h2>

<p>Szyfrowanie PGP opiera si\u0119 na wyrafinowanym po\u0142\u0105czeniu technik kryptograficznych. Zamiast u\u017cywa\u0107 jednej metody, PGP stosuje <strong>hybrydowy model szyfrowania</strong>, kt\u00f3ry \u0142\u0105czy szybko\u015b\u0107 szyfrowania symetrycznego z zaletami dystrybucji kluczy szyfrowania asymetrycznego (klucza publicznego).</p>

<h3 id="public-key-cryptography">Kryptografia klucza publicznego</h3>

<p>Sercem PGP jest <strong>kryptografia klucza publicznego</strong>, nazywana r\u00f3wnie\u017c kryptografi\u0105 asymetryczn\u0105. Ka\u017cdy u\u017cytkownik PGP generuje <strong>par\u0119 kluczy</strong> sk\u0142adaj\u0105c\u0105 si\u0119 z dw\u00f3ch matematycznie powi\u0105zanych kluczy:</p>

<ul>
<li><strong>Klucz publiczny</strong> \u2014 udost\u0119pniany otwarcie ka\u017cdemu. Inni u\u017cywaj\u0105 tego klucza do szyfrowania wiadomo\u015bci przeznaczonych dla Ciebie i weryfikacji Twoich podpis\u00f3w cyfrowych.</li>
<li><strong>Klucz prywatny</strong> (nazywany te\u017c kluczem tajnym) \u2014 przechowywany w \u015bcis\u0142ej tajemnicy. U\u017cywasz tego klucza do odszyfrowywania wiadomo\u015bci wys\u0142anych do Ciebie i tworzenia podpis\u00f3w cyfrowych.</li>
</ul>

<p>Fundamentaln\u0105 w\u0142a\u015bciwo\u015bci\u0105 tego systemu jest to, \u017ce dane zaszyfrowane kluczem publicznym mog\u0105 by\u0107 odszyfrowane tylko odpowiadaj\u0105cym kluczem prywatnym i odwrotnie. Eliminuje to potrzeb\u0119 przekazywania wsp\u00f3lnego sekretu mi\u0119dzy stronami, zanim b\u0119d\u0105 mog\u0142y komunikowa\u0107 si\u0119 prywatnie.</p>

<h3 id="the-hybrid-encryption-model">Hybrydowy model szyfrowania</h3>

<p>Chocia\u017c kryptografia klucza publicznego rozwi\u0105zuje problem dystrybucji kluczy, algorytmy asymetryczne takie jak RSA s\u0105 kosztowne obliczeniowo przy szyfrowaniu du\u017cych ilo\u015bci danych. PGP rozwi\u0105zuje ten problem, stosuj\u0105c podej\u015bcie hybrydowe:</p>

<ol>
<li><strong>Generowanie klucza sesji</strong> \u2014 PGP generuje losowy, jednorazowy <strong>symetryczny klucz sesji</strong> (zazwyczaj 128 lub 256 bit\u00f3w) dla ka\u017cdej wiadomo\u015bci.</li>
<li><strong>Szyfrowanie danych</strong> \u2014 Tre\u015b\u0107 wiadomo\u015bci jest szyfrowana za pomoc\u0105 szybkiego szyfru symetrycznego (np. AES-256) z kluczem sesji.</li>
<li><strong>Szyfrowanie klucza sesji</strong> \u2014 Sam klucz sesji jest nast\u0119pnie szyfrowany kluczem publicznym odbiorcy (operacja asymetryczna).</li>
<li><strong>Pakowanie</strong> \u2014 Zaszyfrowana wiadomo\u015b\u0107 i zaszyfrowany klucz sesji s\u0105 \u0142\u0105czone i wysy\u0142ane do odbiorcy.</li>
</ol>

<p>Gdy odbiorca otrzymuje wiadomo\u015b\u0107, proces jest odwracany: u\u017cywa swojego <strong>klucza prywatnego</strong> do odszyfrowania klucza sesji, a nast\u0119pnie odszyfrowany klucz sesji s\u0142u\u017cy do odszyfrowania tre\u015bci wiadomo\u015bci.</p>

<h2 id="pgp-digital-signatures">Podpisy cyfrowe PGP</h2>

<p>Opr\u00f3cz szyfrowania, PGP zapewnia <strong>podpisy cyfrowe</strong>, kt\u00f3re pe\u0142ni\u0105 dwie kluczowe funkcje: <strong>uwierzytelnianie</strong> (udowodnienie, kto wys\u0142a\u0142 wiadomo\u015b\u0107) i <strong>integralno\u015b\u0107</strong> (udowodnienie, \u017ce wiadomo\u015b\u0107 nie zosta\u0142a zmieniona w trakcie przesy\u0142ania).</p>

<p>Proces podpisywania dzia\u0142a nast\u0119puj\u0105co:</p>

<ol>
<li>PGP oblicza <strong>skr\u00f3t kryptograficzny</strong> (hasz o sta\u0142ej d\u0142ugo\u015bci) tre\u015bci wiadomo\u015bci za pomoc\u0105 algorytmu takiego jak SHA-256 lub SHA-512.</li>
<li>Hasz jest nast\u0119pnie szyfrowany <strong>kluczem prywatnym</strong> nadawcy, tworz\u0105c podpis cyfrowy.</li>
<li>Podpis jest do\u0142\u0105czany do wiadomo\u015bci.</li>
</ol>

<p>Ka\u017cdy odbiorca mo\u017ce zweryfikowa\u0107 podpis, odszyfrowuj\u0105c podpis <strong>kluczem publicznym</strong> nadawcy, aby odzyska\u0107 oryginalny hasz, niezale\u017cnie obliczaj\u0105c hasz otrzymanej wiadomo\u015bci, a nast\u0119pnie por\u00f3wnuj\u0105c oba hasze. Je\u015bli s\u0105 zgodne, wiadomo\u015b\u0107 jest autentyczna i niezmieniona.</p>

<h2 id="the-openpgp-standard">Standard OpenPGP</h2>

<p><strong>OpenPGP</strong> to otwarty standard definiuj\u0105cy formaty wiadomo\u015bci, algorytmy i procedury u\u017cywane przez oprogramowanie kompatybilne z PGP. Sam w sobie nie jest produktem programistycznym, lecz specyfikacj\u0105, kt\u00f3r\u0105 ka\u017cdy programista mo\u017ce zaimplementowa\u0107.</p>

<p>Dokumenty referencyjne to:</p>

<ul>
<li><strong>RFC 4880</strong> (listopad 2007) \u2014 Obecna g\u0142\u00f3wna specyfikacja formatu wiadomo\u015bci OpenPGP.</li>
<li><strong>RFC 6637</strong> (czerwiec 2012) \u2014 Rozszerza OpenPGP o obs\u0142ug\u0119 kryptografii na krzywych eliptycznych (ECC).</li>
<li><strong>RFC 9580</strong> (2024) \u2014 Najnowsza rewizja modernizuj\u0105ca standard z obowi\u0105zkow\u0105 obs\u0142ug\u0105 Ed25519/X25519, trybami szyfrowania AEAD i ulepszonymi odciskami kluczy.</li>
</ul>

<p>OpenPGP gwarantuje interoperacyjno\u015b\u0107: wiadomo\u015b\u0107 zaszyfrowana za pomoc\u0105 KeychainPGP mo\u017ce by\u0107 odszyfrowana przez GnuPG, Mailvelope lub dowoln\u0105 inn\u0105 zgodn\u0105 implementacj\u0119.</p>

<h2 id="web-of-trust">Sie\u0107 zaufania</h2>

<p>Jedn\u0105 z wyr\u00f3\u017cniaj\u0105cych cech PGP jest zdecentralizowany model <strong>sieci zaufania</strong> (Web of Trust) s\u0142u\u017c\u0105cy do ustalania autentyczno\u015bci kluczy publicznych. W przeciwie\u0144stwie do scentralizowanego modelu urz\u0119d\u00f3w certyfikacji (CA) u\u017cywanego przez TLS/SSL, PGP pozwala u\u017cytkownikom samodzielnie por\u0119cza\u0107 za siebie nawzajem.</p>

<p>Sie\u0107 zaufania dzia\u0142a poprzez <strong>podpisywanie kluczy</strong>: kiedy weryfikujesz to\u017csamo\u015b\u0107 kogo\u015b i potwierdzasz, \u017ce kontroluje okre\u015blony klucz publiczny, podpisujesz jego klucz swoim w\u0142asnym. Podpis ten jest publicznym o\u015bwiadczeniem, \u017ce wierzysz, i\u017c klucz nale\u017cy do osoby, za kt\u00f3r\u0105 si\u0119 podaje.</p>

<p>Narz\u0119dzia takie jak <a href="/pl/pgp-online-encrypt/">KeychainPGP</a> upraszczaj\u0105 ten proces, umo\u017cliwiaj\u0105c u\u017cytkownikom prac\u0119 z kluczami bezpo\u015brednio przez intuicyjny interfejs, korzystaj\u0105c z <a href="/pl/docs/clipboard-encryption/">szyfrowania przez schowek</a> do \u0142atwego udost\u0119pniania zaszyfrowanych wiadomo\u015bci i kluczy publicznych.</p>

<h2 id="pgp-algorithms-and-key-types">Algorytmy i typy kluczy PGP</h2>

<p>PGP obs\u0142uguje szereg algorytm\u00f3w kryptograficznych, kt\u00f3re ewoluowa\u0142y wraz z post\u0119pem w dziedzinie kryptografii.</p>

<h3 id="classic-algorithms">Algorytmy klasyczne</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> \u2014 Najszerzej wdro\u017cony algorytm asymetryczny w historii PGP. Klucze RSA o d\u0142ugo\u015bci 2048 bit\u00f3w s\u0105 uwa\u017cane za minimum bezpiecze\u0144stwa, a klucze 4096-bitowe s\u0105 zalecane do d\u0142ugoterminowej ochrony.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> \u2014 U\u017cywany do podpis\u00f3w w po\u0142\u0105czeniu z ElGamal do szyfrowania. Dzi\u015b mniej preferowany.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> \u2014 Dominuj\u0105cy szyfr symetryczny u\u017cywany do szyfrowania tre\u015bci wiadomo\u015bci. Obs\u0142ugiwane s\u0105 AES-128 i AES-256.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> \u2014 Kryptograficzne funkcje skr\u00f3tu u\u017cywane do obliczania skr\u00f3t\u00f3w w podpisach cyfrowych.</li>
</ul>

<h3 id="modern-algorithms">Algorytmy nowoczesne</h3>

<p>Najnowsza generacja implementacji OpenPGP obs\u0142uguje <strong>kryptografi\u0119 na krzywych eliptycznych (ECC)</strong>, kt\u00f3ra oferuje bezpiecze\u0144stwo por\u00f3wnywalne z RSA przy znacznie mniejszych rozmiarach kluczy:</p>

<ul>
<li><strong>Ed25519</strong> \u2014 Algorytm podpisu cyfrowego oparty na Curve25519. Produkuje szybkie i kompaktowe podpisy. Zalecany w RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> \u2014 U\u017cywany do wymiany kluczy (szyfrowania). Oferuje doskona\u0142\u0105 wydajno\u015b\u0107 z solidnymi w\u0142a\u015bciwo\u015bciami bezpiecze\u0144stwa.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> \u2014 Krzywe eliptyczne ustandaryzowane przez NIST. Obs\u0142ugiwane przez OpenPGP, ale generalnie mniej preferowane ni\u017c algorytmy oparte na Curve25519.</li>
</ul>

<p>Nowoczesne narz\u0119dzia takie jak KeychainPGP obs\u0142uguj\u0105 te wsp\u00f3\u0142czesne algorytmy, czyni\u0105c generowanie kluczy z Ed25519 i X25519 prostym i intuicyjnym.</p>

<h2 id="common-use-cases-for-pgp">Typowe zastosowania PGP</h2>

<ul>
<li><strong>Bezpieczna poczta e-mail</strong> \u2014 Oryginalne i najbardziej znane zastosowanie. PGP pozwala szyfrowa\u0107 tre\u015b\u0107 e-maili i podpisywa\u0107 wiadomo\u015bci w celu potwierdzenia ich autentyczno\u015bci.</li>
<li><strong>Szyfrowanie plik\u00f3w</strong> \u2014 PGP mo\u017ce szyfrowa\u0107 pojedyncze pliki lub ca\u0142e archiwa do bezpiecznego przechowywania lub przesy\u0142ania.</li>
<li><strong>Weryfikacja oprogramowania</strong> \u2014 Projekty open source regularnie podpisuj\u0105 swoje wydania kluczami PGP. U\u017cytkownicy mog\u0105 weryfikowa\u0107 te podpisy, aby potwierdzi\u0107 autentyczno\u015b\u0107 pobranego pliku.</li>
<li><strong>Bezpieczne wiadomo\u015bci</strong> \u2014 PGP mo\u017ce by\u0107 u\u017cywane do szyfrowania dowolnych wiadomo\u015bci tekstowych, co jest szczeg\u00f3lnie przydatne na platformach nieofferuj\u0105cych szyfrowania end-to-end.</li>
<li><strong>Weryfikacja to\u017csamo\u015bci</strong> \u2014 Odciski kluczy PGP s\u0142u\u017c\u0105 jako weryfikowalne to\u017csamo\u015bci cyfrowe. Programi\u015bci na GitHub mog\u0105 podpisywa\u0107 swoje commity za pomoc\u0105 PGP.</li>
<li><strong>Podpisywanie dokument\u00f3w</strong> \u2014 Workflow prawnicze czasami wykorzystuj\u0105 podpisy PGP do ustalenia niezaprzeczalno\u015bci.</li>
</ul>

<h2 id="pgp-today">PGP dzisiaj</h2>

<p>Ponad trzy dekady po swoim powstaniu, PGP pozostaje jednym z najwa\u017cniejszych dost\u0119pnych narz\u0119dzi kryptograficznych. Standard OpenPGP nadal ewoluuje, a RFC 9580 wprowadza znacz\u0105ce modernizacje, w tym obowi\u0105zkow\u0105 obs\u0142ug\u0119 nowoczesnych algorytm\u00f3w na krzywych eliptycznych i tryb\u00f3w szyfrowania AEAD.</p>

<p>Ekosystem narz\u0119dzi PGP znacznie si\u0119 wzbogaci\u0142. GnuPG pozostaje referencyjn\u0105 implementacj\u0105 do u\u017cytku z linii polece\u0144. Nowoczesne narz\u0119dzia takie jak KeychainPGP oferuj\u0105 natywne aplikacje desktopowe (Windows, macOS, Linux), aplikacj\u0119 na Android, CLI do skrypt\u00f3w i aplikacj\u0119 webow\u0105 w przegl\u0105darce \u2014 wszystko zbudowane na tym samym silniku Sequoia-PGP w Rust.</p>

<h2 id="getting-started-with-pgp">Pierwsze kroki z PGP</h2>

<p>Gotowy, aby zacz\u0105\u0107 z szyfrowaniem PGP? Oto najlepsze kolejne kroki:</p>

<ol>
<li><strong>Wypr\u00f3buj w przegl\u0105darce</strong> \u2014 U\u017cyj <a href="/pl/pgp-online-encrypt/">narz\u0119dzia PGP online</a> KeychainPGP, aby wygenerowa\u0107 par\u0119 kluczy, zaszyfrowa\u0107 wiadomo\u015b\u0107 lub zweryfikowa\u0107 podpis bez instalowania czegokolwiek.</li>
<li><strong>Przeczytaj poradnik dla pocz\u0105tkuj\u0105cych</strong> \u2014 Je\u015bli jeste\u015b nowy w kryptografii, nasz poradnik <a href="/pl/docs/pgp-for-beginners/">PGP dla pocz\u0105tkuj\u0105cych</a> poprowadzi Ci\u0119 krok po kroku.</li>
<li><strong>Poznaj praktyczny workflow</strong> \u2014 Nasz poradnik <a href="/pl/docs/how-to-use-pgp/">Jak u\u017cywa\u0107 PGP</a> obejmuje generowanie kluczy, szyfrowanie i deszyfrowanie, zarz\u0105dzanie p\u0119kiem kluczy i najlepsze praktyki.</li>
<li><strong>Zrozum szyfrowanie przez schowek</strong> \u2014 Odkryj <a href="/pl/docs/clipboard-encryption/">szyfrowanie PGP przez schowek</a>, aby szyfrowa\u0107 i deszyfrowa\u0107 tekst bezpo\u015brednio ze schowka.</li>
<li><strong>Poznaj narz\u0119dzia</strong> \u2014 Zrozum <a href="/pl/docs/pgp-vs-gpg/">r\u00f3\u017cnice mi\u0119dzy PGP a GPG</a>, aby wybra\u0107 odpowiednie narz\u0119dzie do swojego workflow.</li>
</ol>

<p>Szyfrowanie PGP chroni poufn\u0105 komunikacj\u0119 od ponad trzydziestu lat. Dzi\u0119ki nowoczesnym narz\u0119dziom i standardom jest bardziej dost\u0119pne ni\u017c kiedykolwiek.</p>
`
};

export default doc;
