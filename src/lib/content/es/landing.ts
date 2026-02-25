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
	faqTitle: 'Preguntas frecuentes',
	faqItems: [
		{ question: '\u00bfEs seguro cifrar mensajes PGP en linea?', answer: 'Si, con la aplicacion web KeychainPGP. Todo el cifrado y descifrado se realizan localmente en su navegador mediante WebAssembly compilado desde Rust. Ningun dato se envia a un servidor. La aplicacion funciona completamente del lado del cliente, sus mensajes y claves nunca abandonan su dispositivo.' },
		{ question: '\u00bfPara que sirve el cifrado PGP?', answer: 'PGP (Pretty Good Privacy) sirve para proteger mensajes privados, correos electronicos, archivos y firmas digitales. Utiliza criptografia de clave publica: usted cifra un mensaje con la clave publica de alguien, y solo su clave privada puede descifrarlo. PGP es ampliamente utilizado por periodistas, activistas, profesionales de seguridad y cualquier persona preocupada por la privacidad de sus comunicaciones.' },
		{ question: '\u00bfComo funciona el cifrado PGP?', answer: 'PGP utiliza una combinacion de criptografia simetrica y asimetrica. Al cifrar, PGP genera una clave de sesion aleatoria, cifra el mensaje con esa clave mediante cifrado simetrico rapido, y luego cifra la clave de sesion con la clave publica del destinatario. El destinatario usa su clave privada para descifrar la clave de sesion y luego descifra el mensaje. KeychainPGP utiliza claves modernas Ed25519 + X25519 para este proceso.' },
		{ question: '\u00bfCual es la diferencia entre PGP y GPG?', answer: 'PGP (Pretty Good Privacy) es el estandar de cifrado original creado por Phil Zimmermann en 1991. GPG (GNU Privacy Guard, o GnuPG) es una implementacion libre y de codigo abierto del estandar OpenPGP. OpenPGP es el estandar IETF (RFC 4880) que define el formato de los mensajes. KeychainPGP implementa el estandar OpenPGP a traves de la biblioteca Sequoia-PGP escrita en Rust.' },
		{ question: '\u00bfSe puede usar PGP sin instalar software?', answer: 'Si. KeychainPGP ofrece una herramienta PGP en linea que funciona completamente en su navegador mediante WebAssembly. Puede generar claves, cifrar y descifrar mensajes, y gestionar sus contactos sin instalar nada. Para uso diario, KeychainPGP tambien cuenta con aplicaciones de escritorio nativas (Windows, macOS, Linux) con atajos globales, una aplicacion Android con sincronizacion por codigo QR, y un CLI para scripting.' },
		{ question: '\u00bfQue algoritmo de cifrado usa KeychainPGP?', answer: 'KeychainPGP utiliza Ed25519 para firmas digitales y X25519 para el intercambio de claves — dos algoritmos de criptografia de curva eliptica modernos. Ofrecen una seguridad equivalente a RSA-3072 con una fraccion del tamano de clave. Las operaciones criptograficas son impulsadas por Sequoia-PGP, una implementacion Rust de OpenPGP sin dependencia de OpenSSL.' },
		{ question: '\u00bfEl cifrado PGP sigue siendo seguro en 2026?', answer: 'Si. El cifrado PGP con algoritmos modernos (como Ed25519/X25519 utilizados por KeychainPGP) sigue siendo uno de los estandares de cifrado mas robustos disponibles. Los fundamentos matematicos de la criptografia de curva eliptica no han sido comprometidos. La seguridad de PGP depende de una buena gestion de claves, frases de contrasena robustas e implementaciones actualizadas.' },
		{ question: '\u00bfComo comparto mi clave publica PGP?', answer: 'Puede compartir su clave publica PGP exportandola en formato ASCII (un bloque de texto que comienza con -----BEGIN PGP PUBLIC KEY BLOCK-----). Enviela por correo electronico, peguela en un chat, publiquela en su sitio web o compartala en un servidor de claves. En KeychainPGP, vaya a la pestana Claves y use la funcion de exportacion para copiar su clave publica.' },
		{ question: '\u00bfQue es el cifrado PGP por portapapeles?', answer: 'El cifrado PGP por portapapeles es un flujo de trabajo en el que copia texto en su portapapeles, lo cifra o descifra con un atajo o un boton, y pega el resultado. Este enfoque funciona con cualquier aplicacion — correo, chat, notas o cualquier campo de texto. KeychainPGP fue disenado en torno a este enfoque con atajos globales: Ctrl+Shift+E para cifrar y Ctrl+Shift+D para descifrar.' },
		{ question: '\u00bfKeychainPGP es realmente gratuito y de codigo abierto?', answer: 'Si. KeychainPGP es 100 % gratuito y de codigo abierto bajo doble licencia MIT/Apache-2.0. El codigo fuente esta disponible publicamente en GitHub. No hay version de pago, no hay funciones premium, no hay cuentas, no hay telemetria y no hay rastreo.' }
	],
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
