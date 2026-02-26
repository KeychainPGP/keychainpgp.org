import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Darmowe narz\u0119dzie do szyfrowania PGP online',
	heroSubtitle: 'Szyfruj i deszyfruj wiadomo\u015bci za pomoc\u0105 OpenPGP bezpo\u015brednio w przegl\u0105darce. Bez instalacji, bez konta, bez wysy\u0142ania danych na serwer.',
	trustLine: 'Darmowe i open source. Licencja MIT / Apache-2.0. Bez telemetrii.',
	ctaOpen: 'Otw\u00f3rz narz\u0119dzie PGP w przegl\u0105darce',
	ctaHow: 'Jak to dzia\u0142a',
	whatIsTitle: 'Czym jest szyfrowanie PGP?',
	whatIsText: 'PGP (Pretty Good Privacy) to z\u0142oty standard szyfrowania wiadomo\u015bci, e-maili i plik\u00f3w. Wykorzystuje kryptografi\u0119 klucza publicznego \u2014 udost\u0119pniasz klucz publiczny, kt\u00f3rego ka\u017cdy mo\u017ce u\u017cy\u0107 do zaszyfrowania wiadomo\u015bci przeznaczonych dla Ciebie, a tylko Tw\u00f3j klucz prywatny mo\u017ce je odszyfrowa\u0107. Stworzone w 1991 roku, PGP jest u\u017cywane przez dziennikarzy, badaczy bezpiecze\u0144stwa, aktywist\u00f3w i miliony u\u017cytkownik\u00f3w na ca\u0142ym \u015bwiecie. KeychainPGP sprawia, \u017ce PGP jest dost\u0119pne dla ka\u017cdego dzi\u0119ki nowoczesnemu interfejsowi i workflow opartemu na schowku \u2014 bez linii polece\u0144, bez konfiguracji, bez komplikacji.',
	howToTitle: 'Jak zaszyfrowa\u0107 wiadomo\u015b\u0107 za pomoc\u0105 PGP online',
	steps: [
		{ title: 'Otw\u00f3rz narz\u0119dzie PGP online', text: 'Przejd\u017a do aplikacji webowej KeychainPGP. \u0141aduje si\u0119 ca\u0142kowicie w Twojej przegl\u0105darce \u2014 nie wymaga instalacji ani konta. Wszystko dzia\u0142a lokalnie przez WebAssembly.' },
		{ title: 'Wygeneruj lub zaimportuj klucz PGP', text: 'Utw\u00f3rz now\u0105 par\u0119 kluczy Ed25519 + X25519 (najnowocze\u015bniejsza i najbezpieczniejsza opcja) lub zaimportuj istniej\u0105cy klucz PGP w formacie ASCII.' },
		{ title: 'Zaimportuj klucz publiczny odbiorcy', text: 'Dodaj klucz publiczny swojego kontaktu, wklejaj\u0105c go w zak\u0142adce Klucze. Ten klucz pos\u0142u\u017cy do szyfrowania Twoich wiadomo\u015bci.' },
		{ title: 'Wpisz swoj\u0105 wiadomo\u015b\u0107', text: 'Przejd\u017a do zak\u0142adki Szyfruj i wpisz lub wklej wiadomo\u015b\u0107, kt\u00f3r\u0105 chcesz zabezpieczy\u0107.' },
		{ title: 'Wybierz odbiorc\u0119 i zaszyfruj', text: 'Wybierz odbiorc\u0119 z listy kluczy i kliknij \u201eSzyfruj do schowka\u201d. Zaszyfrowana wiadomo\u015b\u0107 PGP zostanie natychmiast skopiowana.' },
		{ title: 'Wy\u015blij zaszyfrowan\u0105 wiadomo\u015b\u0107', text: 'Wklej zaszyfrowan\u0105 wiadomo\u015b\u0107 do dowolnego e-maila, czatu lub komunikatora. Tylko zamierzony odbiorca mo\u017ce j\u0105 odszyfrowa\u0107 za pomoc\u0105 swojego klucza prywatnego.' }
	],
	featuresTitle: 'Dlaczego warto u\u017cywa\u0107 KeychainPGP do szyfrowania PGP?',
	features: [
		{ icon: '\ud83c\udf10', title: '100% w przegl\u0105darce', text: 'Wszystko dzia\u0142a lokalnie w Twojej przegl\u0105darce przez WebAssembly skompilowany z Rust. Zero komunikacji z serwerem. Twoje wiadomo\u015bci i klucze nigdy nie opuszczaj\u0105 Twojego urz\u0105dzenia.' },
		{ icon: '\ud83d\udd12', title: 'Nowoczesna kryptografia', text: 'Klucze na krzywych eliptycznych Ed25519 + X25519 domy\u015blnie. Nap\u0119dzane przez Sequoia-PGP, implementacj\u0119 OpenPGP w Rust bez zale\u017cno\u015bci od OpenSSL.' },
		{ icon: '\ud83d\udcbb', title: 'Wieloplatformowo\u015b\u0107', text: 'Dost\u0119pne jako aplikacja webowa oraz natywne aplikacje dla Windows, macOS, Linux i Android. Twoje klucze wsz\u0119dzie.' },
		{ icon: '\ud83d\udcc2', title: 'Open source', text: 'Kod w pe\u0142ni dost\u0119pny do audytu na licencji MIT / Apache-2.0. Bez telemetrii, bez \u015bledzenia, bez kont. Sprawd\u017a kod na GitHub.' },
		{ icon: '\ud83d\udccb', title: 'Schowek przede wszystkim', text: 'Skopiuj tekst, zaszyfruj skr\u00f3tem (Ctrl+Shift+E), wklej zaszyfrowan\u0105 wiadomo\u015b\u0107. Dzia\u0142a z ka\u017cd\u0105 aplikacj\u0105 \u2014 e-mail, czat, notatki, wsz\u0119dzie.' },
		{ icon: '\u26a1', title: 'Zero konfiguracji', text: 'Bez wybierania algorytm\u00f3w, bez decydowania o rozmiarze klucza, bez plik\u00f3w konfiguracyjnych. Bezpieczne domy\u015blnie. Wygeneruj klucz i zacznij szyfrowa\u0107 w kilka sekund.' }
	],
	desktopTitle: 'Pobierz aplikacj\u0119 desktopow\u0105 do codziennego u\u017cytku',
	desktopText: 'Aplikacja webowa jest idealna do szybkiego szyfrowania, ale aplikacja desktopowa oferuje pe\u0142ne do\u015bwiadczenie PGP z dodatkowymi funkcjami bezpiecze\u0144stwa:',
	desktopFeatures: [
		'Globalne skr\u00f3ty klawiszowe \u2014 Ctrl+Shift+E do szyfrowania, Ctrl+Shift+D do deszyfrowania, z dowolnej aplikacji',
		'Zasobnik systemowy \u2014 Zawsze dost\u0119pny na pasku zada\u0144, dzia\u0142a cicho w tle',
		'Automatyczne czyszczenie schowka \u2014 Odszyfrowany tekst jest automatycznie usuwany ze schowka po 30 sekundach',
		'Tryb OPSEC \u2014 Ukryj tytu\u0142 okna, klucze tylko w RAM i przycisk awaryjnego kasowania',
		'Magazyn po\u015bwiadcze\u0144 systemu \u2014 Klucze bezpiecznie przechowywane w Windows Credential Manager, macOS Keychain lub Linux Secret Service',
		'Aplikacja na Android \u2014 Ten sam interfejs na urz\u0105dzeniu mobilnym, z synchronizacj\u0105 kluczy przez QR kod mi\u0119dzy urz\u0105dzeniami',
		'CLI \u2014 Narz\u0119dzie wiersza polece\u0144 keychainpgp do skrypt\u00f3w i automatyzacji'
	],
	ctaDownload: 'Pobierz KeychainPGP',
	ctaAllPlatforms: 'Wszystkie platformy',
	learnMoreTitle: 'Dowiedz si\u0119 wi\u0119cej o szyfrowaniu PGP',
	learnMoreLinks: [
		{ href: '/pl/docs/what-is-pgp/', title: 'Czym jest PGP?', text: 'Kompleksowy przewodnik po Pretty Good Privacy, kryptografii klucza publicznego i podpisach cyfrowych.' },
		{ href: '/pl/docs/how-to-use-pgp/', title: 'Jak u\u017cywa\u0107 PGP', text: 'Poradnik krok po kroku: generowanie kluczy, szyfrowanie wiadomo\u015bci i weryfikacja podpis\u00f3w.' },
		{ href: '/pl/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Zrozum r\u00f3\u017cnic\u0119 mi\u0119dzy PGP, GPG (GnuPG) a standardem OpenPGP.' },
		{ href: '/pl/docs/pgp-for-beginners/', title: 'PGP dla pocz\u0105tkuj\u0105cych', text: 'Wszystko, co musisz wiedzie\u0107 o szyfrowaniu PGP, wyja\u015bnione prostym j\u0119zykiem.' },
		{ href: '/pl/docs/clipboard-encryption/', title: 'Szyfrowanie przez schowek', text: 'Jak dzia\u0142a szyfrowanie PGP przez schowek, aspekty bezpiecze\u0144stwa i funkcje OPSEC.' },
		{ href: '/pl/blog/best-pgp-tools-2026/', title: 'Najlepsze narz\u0119dzia PGP w 2026', text: 'Kompleksowe por\u00f3wnanie i ranking najlepszych program\u00f3w do szyfrowania PGP.' }
	]
};
