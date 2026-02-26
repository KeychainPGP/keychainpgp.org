import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'Documentacion PGP',
	description: 'Aprenda todo sobre el cifrado PGP — desde guias para principiantes hasta temas avanzados como el cifrado por portapapeles y la gestion de claves.',
	intro: 'Todo lo que necesita saber sobre el cifrado PGP. Ya sea que este comenzando o buscando temas avanzados, estas guias cubren lo esencial.',
	docs: [
		{
			title: '\u00bfQue es PGP?',
			description: 'Comprenda los fundamentos del cifrado PGP — criptografia de clave publica, firmas digitales, red de confianza y casos de uso.',
			href: '/es/docs/what-is-pgp/',
			icon: '\ud83d\udd11'
		},
		{
			title: 'Como usar PGP',
			description: 'Tutorial paso a paso: generacion de claves, cifrado de mensajes, descifrado, firmas digitales e intercambio de claves.',
			href: '/es/docs/how-to-use-pgp/',
			icon: '\ud83d\udcd6'
		},
		{
			title: 'PGP vs GPG',
			description: 'Comprenda las diferencias entre PGP, GPG (GnuPG) y el estandar OpenPGP — historia, implementaciones y cual herramienta elegir.',
			href: '/es/docs/pgp-vs-gpg/',
			icon: '\u2696\ufe0f'
		},
		{
			title: 'Herramientas PGP',
			description: 'Panorama de las herramientas PGP — clientes de escritorio, utilidades CLI, extensiones de navegador y soluciones web.',
			href: '/es/docs/pgp-tools/',
			icon: '\ud83d\udee0\ufe0f'
		},
		{
			title: 'PGP para principiantes',
			description: '\u00bfNuevo con PGP? Comience aqui. Aprenda los conceptos clave en lenguaje sencillo y envie su primer mensaje cifrado.',
			href: '/es/docs/pgp-for-beginners/',
			icon: '\ud83d\ude80'
		},
		{
			title: 'Cifrado por portapapeles',
			description: 'Domine el flujo de trabajo PGP por portapapeles — cifre y descifre texto desde cualquier aplicacion con atajos globales.',
			href: '/es/docs/clipboard-encryption/',
			icon: '\ud83d\udccb'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'Blog PGP',
	description: 'Articulos detallados sobre herramientas de cifrado PGP, comparativas de software y buenas practicas para la comunicacion segura.',
	intro: 'Articulos detallados sobre herramientas de cifrado PGP, comparativas de software y buenas practicas para la comunicacion segura.',
	posts: [
		{
			title: 'Mejores herramientas PGP en 2026',
			description: 'Un ranking completo de las mejores herramientas de cifrado PGP disponibles — desde aplicaciones de escritorio hasta soluciones en linea.',
			href: '/es/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Comparativa de software PGP',
			description: 'Comparacion detallada de software PGP — funcionalidades, seguridad, plataformas soportadas y facilidad de uso.',
			href: '/es/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
