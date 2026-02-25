import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Mejores herramientas PGP y software de cifrado en 2026 — Guía completa',
	description: 'Guía completa de herramientas PGP y software de cifrado. Compare herramientas OpenPGP de escritorio, web, móviles y CLI para encontrar la adecuada para sus necesidades.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: '¿Qué son las herramientas PGP?', level: 2 },
		{ id: 'desktop-pgp-software', text: 'Software PGP de escritorio', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'Herramientas PGP en línea', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'Herramientas PGP móviles', level: 2 },
		{ id: 'cli-pgp-tools', text: 'Herramientas PGP de línea de comandos', level: 2 },
		{ id: 'email-pgp-integration', text: 'Integración PGP en email', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'Comparativa de herramientas PGP', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'Elegir la herramienta PGP correcta', level: 2 },
		{ id: 'why-keychainpgp', text: 'Por qué KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'Comenzar', level: 2 }
	],
	html: `
<h1>Mejores herramientas PGP y software de cifrado en 2026</h1>

<p>Hoy en día existe una amplia gama de herramientas PGP para cifrar mensajes, firmar archivos y gestionar claves OpenPGP. Estas herramientas abarcan aplicaciones de escritorio, utilidades web, aplicaciones móviles, interfaces de línea de comandos y plugins de email. Esta guía cubre cada categoría principal de software PGP para ayudarle a tomar una decisión informada.</p>

<h2 id="what-are-pgp-tools">¿Qué son las herramientas PGP?</h2>

<p>Las herramientas PGP son aplicaciones de software que implementan el <a href="/es/docs/what-is-pgp/">estándar OpenPGP</a> (RFC 4880 y sus sucesores) para criptografía de clave pública. Permiten generar pares de claves, cifrar y descifrar mensajes, crear y verificar firmas digitales y gestionar anillos de claves. Comprender la <a href="/es/docs/pgp-vs-gpg/">diferencia entre PGP y GPG</a> ayuda a clarificar por qué existen tantas herramientas diferentes.</p>

<h2 id="desktop-pgp-software">Software PGP de escritorio</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>
<p><strong>GnuPG</strong> (GNU Privacy Guard) es la implementación de referencia del estándar OpenPGP. Extremadamente potente pero principalmente de línea de comandos.</p>
<ul>
<li><strong>Plataformas:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>Interfaz:</strong> Línea de comandos</li>
<li><strong>Licencia:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>
<p><strong>Gpg4win</strong> agrupa GnuPG con una interfaz gráfica nativa de Windows llamada Kleopatra, con integración en el Explorador de Windows y soporte S/MIME.</p>

<h3 id="gpg-suite">GPG Suite</h3>
<p><strong>GPG Suite</strong> es el equivalente macOS de Gpg4win, incluyendo GPG Keychain para gestión de claves y GPG Mail para integración con Apple Mail.</p>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>
<p><strong>KeychainPGP</strong> adopta un enfoque fundamentalmente diferente. Utiliza la biblioteca <strong>Sequoia-PGP</strong> en Rust para proporcionar un flujo de trabajo moderno basado en el portapapeles. Copie texto, presione un atajo global (<code>Ctrl+Shift+E</code> para cifrar, <code>Ctrl+Shift+D</code> para descifrar) y pegue el resultado — funciona con cualquier aplicación.</p>
<ul>
<li><strong>Plataformas:</strong> Windows, macOS, Linux, Android, Web, CLI</li>
<li><strong>Licencia:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">Herramientas PGP en línea</h2>
<p>La <a href="/es/pgp-online-encrypt/">aplicación web KeychainPGP</a> compila el mismo motor Sequoia-PGP en Rust a WebAssembly, de modo que todas las operaciones criptográficas se realizan localmente en su navegador. <strong>Mailvelope</strong> es una extensión de navegador que integra el cifrado OpenPGP directamente en proveedores de webmail.</p>

<h2 id="mobile-pgp-tools">Herramientas PGP móviles</h2>
<p><strong>OpenKeychain</strong> es una aplicación OpenPGP madura para Android con integración K-9 Mail. <strong>KeychainPGP para Android</strong> ofrece la misma criptografía moderna en móvil con Ed25519/X25519 y sincronización de claves por QR code.</p>

<h2 id="cli-pgp-tools">Herramientas PGP de línea de comandos</h2>
<p><strong>GnuPG</strong> (<code>gpg</code>) es la herramienta CLI dominante. <strong>KeychainPGP</strong> proporciona su propio CLI (<code>keychainpgp</code>). <strong>Sequoia-PGP</strong> también ofrece <code>sq</code>, otro CLI moderno en Rust.</p>

<h2 id="email-pgp-integration">Integración PGP en email</h2>
<p><strong>Mozilla Thunderbird</strong> tiene soporte OpenPGP nativo integrado desde la versión 78. <strong>ProtonMail</strong> proporciona cifrado de extremo a extremo usando OpenPGP internamente.</p>

<h2 id="pgp-tools-comparison">Comparativa de herramientas PGP</h2>

<table>
<tr><th>Herramienta</th><th>Plataformas</th><th>Interfaz</th><th>Claves por defecto</th><th>Open Source</th><th>Ideal para</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>Sí (GPLv3)</td><td>Usuarios avanzados, scripting</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>Sí (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>Parcial</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + Atajos + CLI</td><td>Ed25519/X25519</td><td>Sí (MIT/Apache-2.0)</td><td>Flujo de portapapeles</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>Extensión navegador</td><td>Overlay webmail</td><td>RSA-4096</td><td>Sí (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>GUI nativa</td><td>RSA-3072</td><td>Sí (GPLv3)</td><td>Gestión claves Android</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>Cliente email</td><td>RSA-3072</td><td>Sí (MPL 2.0)</td><td>Email cifrado</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>Webmail</td><td>X25519</td><td>Parcial</td><td>Email sin configuración</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">Elegir la herramienta PGP correcta</h2>

<h3>Facilidad de uso</h3>
<p>Las herramientas tradicionales como GnuPG están diseñadas para usuarios técnicos. KeychainPGP elimina las elecciones de algoritmos y los archivos de configuración.</p>

<h3>Seguridad y valores criptográficos por defecto</h3>
<p>Las herramientas modernas como KeychainPGP y <code>sq</code> de Sequoia usan por defecto <strong>Ed25519/X25519</strong>, que ofrecen seguridad equivalente o superior con claves mucho más pequeñas.</p>

<h2 id="why-keychainpgp">Por qué KeychainPGP</h2>

<ul>
<li><strong>Flujo de portapapeles.</strong> Funciona con <em>todas</em> las aplicaciones. Copie texto, cifre o descifre con un atajo y pegue el resultado.</li>
<li><strong>Criptografía moderna por defecto.</strong> Ed25519 y X25519 automáticamente.</li>
<li><strong>Multiplataforma con una sola base de código.</strong> Tauri para escritorio, WebAssembly para web.</li>
<li><strong>Impulsado por Sequoia-PGP.</strong> Motor criptográfico en Rust con garantías de seguridad de memoria.</li>
<li><strong>Verdaderamente libre y de código abierto.</strong> Licencia MIT / Apache-2.0.</li>
</ul>

<h2 id="getting-started">Comenzar</h2>

<ul>
<li><strong>Pruebe ahora</strong> sin instalación: abra la <a href="/es/pgp-online-encrypt/">herramienta PGP en línea KeychainPGP</a> en su navegador.</li>
<li><strong>Aprenda los fundamentos:</strong> lea <a href="/es/docs/what-is-pgp/">¿Qué es PGP?</a></li>
<li><strong>Entienda el ecosistema:</strong> nuestro artículo sobre <a href="/es/docs/pgp-vs-gpg/">PGP vs GPG</a> explica cómo se relacionan el estándar, el protocolo y las herramientas.</li>
<li><strong>Compare sus opciones:</strong> vea nuestro ranking de las <a href="/es/blog/best-pgp-tools-2026/">mejores herramientas PGP de 2026</a> o el <a href="/es/blog/pgp-software-comparison/">comparativo completo de software PGP</a>.</li>
<li><strong>Descargue KeychainPGP:</strong> obtenga la app de escritorio en <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a>.</li>
</ul>
`
};

export default doc;
