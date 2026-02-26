import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Herramienta de cifrado PGP en linea gratuita',
	heroSubtitle: 'Cifre y descifre mensajes con OpenPGP directamente en su navegador. Sin instalacion, sin cuenta, sin datos enviados a un servidor.',
	trustLine: 'Gratuito y de codigo abierto. Licencia MIT / Apache-2.0. Sin telemetria.',
	ctaOpen: 'Abrir la herramienta PGP en el navegador',
	ctaHow: 'Como funciona',
	whatIsTitle: '\u00bfQue es el cifrado PGP?',
	whatIsText: 'PGP (Pretty Good Privacy) es el estandar de referencia para el cifrado de mensajes, correos electronicos y archivos. Utiliza criptografia de clave publica — usted comparte una clave publica que cualquiera puede usar para cifrar mensajes dirigidos a usted, y solo su clave privada puede descifrarlos. Creado en 1991, PGP es utilizado por periodistas, investigadores de seguridad, activistas y millones de usuarios en todo el mundo. KeychainPGP hace que PGP sea accesible para todos gracias a una interfaz moderna y un flujo de trabajo basado en el portapapeles — sin linea de comandos, sin configuracion, sin complejidad.',
	howToTitle: 'Como cifrar un mensaje con PGP en linea',
	steps: [
		{ title: 'Abrir la herramienta PGP en linea', text: 'Visite la aplicacion web KeychainPGP. Se carga completamente en su navegador — no requiere instalacion ni cuenta. Todo funciona localmente mediante WebAssembly.' },
		{ title: 'Generar o importar una clave PGP', text: 'Cree un nuevo par de claves Ed25519 + X25519 (la opcion mas moderna y segura), o importe una clave PGP existente en formato ASCII.' },
		{ title: 'Importar la clave publica del destinatario', text: 'Agregue la clave publica de su contacto pegandola en la pestana Claves. Esta es la clave que se usara para cifrar sus mensajes.' },
		{ title: 'Escribir su mensaje', text: 'Vaya a la pestana Cifrar y escriba o pegue el mensaje que desea proteger.' },
		{ title: 'Seleccionar el destinatario y cifrar', text: 'Elija el destinatario de su lista de claves y haga clic en \u00abCifrar al portapapeles\u00bb. El mensaje cifrado PGP se copia instantaneamente.' },
		{ title: 'Enviar el mensaje cifrado', text: 'Pegue el mensaje cifrado en cualquier correo electronico, chat o aplicacion de mensajeria. Solo el destinatario previsto puede descifrarlo con su clave privada.' }
	],
	featuresTitle: '\u00bfPor que usar KeychainPGP para el cifrado PGP?',
	features: [
		{ icon: '\ud83c\udf10', title: '100 % en el navegador', text: 'Todo funciona localmente en su navegador mediante WebAssembly compilado desde Rust. Cero comunicacion con el servidor. Sus mensajes y claves nunca abandonan su dispositivo.' },
		{ icon: '\ud83d\udd12', title: 'Criptografia moderna', text: 'Claves de curva eliptica Ed25519 + X25519 por defecto. Impulsado por Sequoia-PGP, una implementacion Rust de OpenPGP sin dependencia de OpenSSL.' },
		{ icon: '\ud83d\udcbb', title: 'Multiplataforma', text: 'Disponible como aplicacion web, ademas de aplicaciones nativas para Windows, macOS, Linux y Android. Sus claves, en todas partes.' },
		{ icon: '\ud83d\udcc2', title: 'Codigo abierto', text: 'Codigo completamente auditable bajo licencia MIT / Apache-2.0. Sin telemetria, sin rastreo, sin cuentas. Consulte el codigo en GitHub.' },
		{ icon: '\ud83d\udccb', title: 'Portapapeles primero', text: 'Copie texto, cifre con un atajo (Ctrl+Shift+E), pegue el mensaje cifrado. Funciona con cualquier aplicacion — correo, chat, notas, en cualquier lugar.' },
		{ icon: '\u26a1', title: 'Cero configuracion', text: 'Sin eleccion de algoritmo, sin tamano de clave que decidir, sin archivos de configuracion. Seguro por defecto. Genere una clave y comience a cifrar en segundos.' }
	],
	desktopTitle: 'Obtenga la aplicacion de escritorio para uso diario',
	desktopText: 'La aplicacion web es perfecta para un cifrado rapido, pero la aplicacion de escritorio ofrece una experiencia PGP completa con funciones de seguridad adicionales:',
	desktopFeatures: [
		'Atajos globales — Ctrl+Shift+E para cifrar, Ctrl+Shift+D para descifrar, desde cualquier aplicacion',
		'Bandeja del sistema — Siempre disponible en su barra de tareas, funciona silenciosamente en segundo plano',
		'Borrado automatico del portapapeles — El texto descifrado se elimina automaticamente del portapapeles despues de 30 segundos',
		'Modo OPSEC — Oculte el titulo de la ventana, claves solo en RAM y boton de borrado de emergencia',
		'Almacen de credenciales del SO — Claves almacenadas de forma segura en Windows Credential Manager, macOS Keychain o Linux Secret Service',
		'Aplicacion Android — La misma interfaz en el movil, con sincronizacion de claves por codigo QR entre dispositivos',
		'CLI — Herramienta de linea de comandos keychainpgp para scripting y automatizacion'
	],
	ctaDownload: 'Descargar KeychainPGP',
	ctaAllPlatforms: 'Todas las plataformas',
	learnMoreTitle: 'Aprenda mas sobre el cifrado PGP',
	learnMoreLinks: [
		{ href: '/es/docs/what-is-pgp/', title: '\u00bfQue es PGP?', text: 'Guia completa sobre Pretty Good Privacy, la criptografia de clave publica y las firmas digitales.' },
		{ href: '/es/docs/how-to-use-pgp/', title: 'Como usar PGP', text: 'Tutorial paso a paso para generar claves, cifrar mensajes y verificar firmas.' },
		{ href: '/es/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Comprenda la diferencia entre PGP, GPG (GnuPG) y el estandar OpenPGP.' },
		{ href: '/es/docs/pgp-for-beginners/', title: 'PGP para principiantes', text: 'Todo lo que necesita saber sobre el cifrado PGP, explicado de forma sencilla.' },
		{ href: '/es/docs/clipboard-encryption/', title: 'Cifrado por portapapeles', text: 'Como funciona el cifrado PGP por portapapeles, consideraciones de seguridad y funciones OPSEC.' },
		{ href: '/es/blog/best-pgp-tools-2026/', title: 'Mejores herramientas PGP en 2026', text: 'Comparativa completa y ranking de los mejores programas de cifrado PGP disponibles.' }
	]
};
