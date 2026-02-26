import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'Dokumentacja PGP',
	description: 'Dowiedz si\u0119 wszystkiego o szyfrowaniu PGP \u2014 od poradnik\u00f3w dla pocz\u0105tkuj\u0105cych po zaawansowane tematy, takie jak szyfrowanie przez schowek i zarz\u0105dzanie kluczami.',
	intro: 'Wszystko, co musisz wiedzie\u0107 o szyfrowaniu PGP. Niezale\u017cnie od tego, czy dopiero zaczynasz, czy szukasz zaawansowanych temat\u00f3w, te poradniki obejmuj\u0105 najwa\u017cniejsze zagadnienia.',
	docs: [
		{
			title: 'Czym jest PGP?',
			description: 'Poznaj podstawy szyfrowania PGP \u2014 kryptografia klucza publicznego, podpisy cyfrowe, sie\u0107 zaufania i zastosowania.',
			href: '/pl/docs/what-is-pgp/',
			icon: '\ud83d\udd11'
		},
		{
			title: 'Jak u\u017cywa\u0107 PGP',
			description: 'Poradnik krok po kroku: generowanie kluczy, szyfrowanie wiadomo\u015bci, deszyfrowanie, podpisy cyfrowe i udost\u0119pnianie kluczy.',
			href: '/pl/docs/how-to-use-pgp/',
			icon: '\ud83d\udcd6'
		},
		{
			title: 'PGP vs GPG',
			description: 'Poznaj r\u00f3\u017cnice mi\u0119dzy PGP, GPG (GnuPG) a standardem OpenPGP \u2014 historia, implementacje i kt\u00f3re narz\u0119dzie wybra\u0107.',
			href: '/pl/docs/pgp-vs-gpg/',
			icon: '\u2696\ufe0f'
		},
		{
			title: 'Narz\u0119dzia PGP',
			description: 'Przegl\u0105d narz\u0119dzi PGP \u2014 aplikacje desktopowe, narz\u0119dzia CLI, rozszerzenia przegl\u0105darki i rozwi\u0105zania webowe.',
			href: '/pl/docs/pgp-tools/',
			icon: '\ud83d\udee0\ufe0f'
		},
		{
			title: 'PGP dla pocz\u0105tkuj\u0105cych',
			description: 'Nowy w PGP? Zacznij tutaj. Poznaj kluczowe poj\u0119cia prostym j\u0119zykiem i wy\u015blij swoj\u0105 pierwsz\u0105 zaszyfrowan\u0105 wiadomo\u015b\u0107.',
			href: '/pl/docs/pgp-for-beginners/',
			icon: '\ud83d\ude80'
		},
		{
			title: 'Szyfrowanie przez schowek',
			description: 'Opanuj workflow PGP przez schowek \u2014 szyfruj i deszyfruj tekst z dowolnej aplikacji za pomoc\u0105 globalnych skr\u00f3t\u00f3w klawiszowych.',
			href: '/pl/docs/clipboard-encryption/',
			icon: '\ud83d\udccb'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'Blog PGP',
	description: 'Szczeg\u00f3\u0142owe artyku\u0142y o narz\u0119dziach szyfrowania PGP, por\u00f3wnania oprogramowania i najlepsze praktyki bezpiecznej komunikacji.',
	intro: 'Szczeg\u00f3\u0142owe artyku\u0142y o narz\u0119dziach szyfrowania PGP, por\u00f3wnania oprogramowania i najlepsze praktyki bezpiecznej komunikacji.',
	posts: [
		{
			title: 'Najlepsze narz\u0119dzia PGP w 2026',
			description: 'Kompleksowy ranking najlepszych narz\u0119dzi szyfrowania PGP \u2014 od aplikacji desktopowych po rozwi\u0105zania online.',
			href: '/pl/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Por\u00f3wnanie oprogramowania PGP',
			description: 'Szczeg\u00f3\u0142owe por\u00f3wnanie oprogramowania PGP \u2014 funkcje, bezpiecze\u0144stwo, obs\u0142ugiwane platformy i \u0142atwo\u015b\u0107 u\u017cytkowania.',
			href: '/pl/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
