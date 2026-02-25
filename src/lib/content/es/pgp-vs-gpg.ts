import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: \u00bfcual es la diferencia entre PGP y GPG?',
	description: 'Descubra la diferencia entre PGP y GPG. Compare Pretty Good Privacy, GnuPG y el estandar OpenPGP para encontrar la herramienta de cifrado adecuada.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: '\u00bfCual es la diferencia?', level: 2 },
		{ id: 'what-is-pgp', text: '\u00bfQue es PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: '\u00bfQue es GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: '\u00bfQue es OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Tabla comparativa PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Diferencias clave explicadas', level: 2 },
		{ id: 'which-should-you-use', text: '\u00bfCual deberia usar?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Donde se ubica KeychainPGP', level: 2 },
		{ id: 'frequently-asked-questions', text: 'Preguntas frecuentes', level: 2 }
	],
	html: `
<h1>PGP vs GPG: \u00bfcu\u00e1l es la diferencia entre PGP y GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">\u00bfCu\u00e1l es la diferencia entre PGP y GPG?</h2>

<p>La diferencia entre PGP y GPG radica en su origen y licencia. <strong>PGP</strong> (Pretty Good Privacy) es el programa de cifrado propietario original creado por Phil Zimmermann en 1991. <strong>GPG</strong> (GNU Privacy Guard, tambi\u00e9n llamado GnuPG) es una reimplementaci\u00f3n libre y de c\u00f3digo abierto del mismo concepto, desarrollada en el marco del proyecto GNU. Ambos programas implementan el est\u00e1ndar <strong>OpenPGP</strong>, lo que significa que producen mensajes cifrados compatibles y pueden trabajar con las claves del otro. En la pr\u00e1ctica, GPG es la herramienta que la mayor\u00eda de las personas utilizan hoy porque es gratuita, se mantiene activamente y est\u00e1 disponible en todos los sistemas operativos principales. Si es nuevo en el cifrado, nuestra <a href="/es/docs/pgp-for-beginners/">gu\u00eda PGP para principiantes</a> presenta los conceptos fundamentales paso a paso.</p>

<h2 id="what-is-pgp">\u00bfQu\u00e9 es PGP?</h2>

<p>PGP significa <strong>Pretty Good Privacy</strong>. Phil Zimmermann escribi\u00f3 la primera versi\u00f3n en 1991 y la public\u00f3 como herramienta gratuita para activistas y ciudadanos comunes que necesitaban un cifrado fuerte. El software combinaba cifrado de clave sim\u00e9trica con criptograf\u00eda de clave p\u00fablica.</p>

<p>Tras una investigaci\u00f3n federal de tres a\u00f1os (abandonada en 1996), Zimmermann fund\u00f3 PGP Inc. La empresa cambi\u00f3 de manos varias veces: Network Associates en 1997, PGP Corporation en 2002 y finalmente Symantec (ahora Broadcom) en 2010. Hoy, PGP existe como un conjunto de productos comerciales destinados principalmente a empresas.</p>

<p>Para saber m\u00e1s sobre la tecnolog\u00eda subyacente, consulte nuestro art\u00edculo completo sobre <a href="/es/docs/what-is-pgp/">qu\u00e9 es PGP y c\u00f3mo funciona</a>.</p>

<h2 id="what-is-gpg-gnupg">\u00bfQu\u00e9 es GPG (GnuPG)?</h2>

<p>GPG, o <strong>GNU Privacy Guard (GnuPG)</strong>, es una implementaci\u00f3n libre y de c\u00f3digo abierto del est\u00e1ndar OpenPGP. Werner Koch inici\u00f3 el proyecto en 1997 con financiaci\u00f3n del gobierno alem\u00e1n y public\u00f3 la versi\u00f3n 1.0 en 1999. GnuPG fue creado espec\u00edficamente para proporcionar una alternativa completamente libre al software propietario PGP.</p>

<p>GnuPG forma parte del proyecto GNU y tiene licencia bajo la Licencia P\u00fablica General de GNU (GPL). Est\u00e1 incluido por defecto en la mayor\u00eda de las distribuciones Linux. La herramienta de l\u00ednea de comandos <code>gpg</code> es la interfaz con la que interact\u00faan la mayor\u00eda de los desarrolladores y administradores de sistemas. Para un panorama de las herramientas disponibles, consulte nuestro <a href="/es/docs/pgp-tools/">comparativo de herramientas PGP</a>.</p>

<h2 id="what-is-openpgp">\u00bfQu\u00e9 es OpenPGP?</h2>

<p><strong>OpenPGP</strong> no es ni un producto ni un software. Es un est\u00e1ndar abierto que define los formatos de mensajes, formatos de claves y procedimientos criptogr\u00e1ficos que las herramientas compatibles con PGP deben seguir. El IETF public\u00f3 la especificaci\u00f3n original como <strong>RFC 2440</strong> en 1998, y la versi\u00f3n m\u00e1s referenciada es el <strong>RFC 4880</strong> (2007). Una actualizaci\u00f3n importante, el <strong>RFC 9580</strong> (2024), moderniza el est\u00e1ndar con soporte de Ed25519 y cifrado AEAD.</p>

<p>La existencia de OpenPGP hace posible la interoperabilidad. Dado que PGP y GPG implementan el mismo est\u00e1ndar, un mensaje cifrado con GPG puede ser descifrado por PGP, y viceversa.</p>

<h2 id="pgp-vs-gpg-comparison-table">Tabla comparativa PGP vs GPG</h2>

<table>
<tr><th>Caracter\u00edstica</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Tipo</strong></td><td>Software comercial</td><td>Software libre/c\u00f3digo abierto</td><td>Est\u00e1ndar abierto</td></tr>
<tr><td><strong>Licencia</strong></td><td>Propietaria</td><td>GPL (gratuito)</td><td>Especificaci\u00f3n IETF</td></tr>
<tr><td><strong>Costo</strong></td><td>Licencia de pago</td><td>Gratuito</td><td>N/A</td></tr>
<tr><td><strong>Plataformas</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>N/A</td></tr>
<tr><td><strong>GUI incluida</strong></td><td>S\u00ed (consola empresarial)</td><td>No (GUI de terceros disponibles)</td><td>N/A</td></tr>
<tr><td><strong>C\u00f3digo disponible</strong></td><td>No</td><td>S\u00ed</td><td>Est\u00e1ndar p\u00fablico</td></tr>
</table>

<h2 id="key-differences-explained">Diferencias clave explicadas</h2>

<h3>Licencia y costo</h3>

<p>PGP es un software propietario que se vende bajo licencia comercial. GPG se publica bajo la GPL, lo que significa que cualquiera puede descargarlo, usarlo, modificarlo y redistribuirlo de forma gratuita. Para individuos, equipos peque\u00f1os y proyectos de c\u00f3digo abierto, GPG es la opci\u00f3n obvia en t\u00e9rminos de costo.</p>

<h3>Soporte de plataformas</h3>

<p>GnuPG funciona en pr\u00e1cticamente todos los sistemas Unix y dispone de compilaciones oficiales para Windows y macOS. Para necesidades multiplataforma, herramientas modernas como KeychainPGP proporcionan compilaciones nativas para Windows, macOS, Linux y Android desde una sola base de c\u00f3digo.</p>

<h3>Experiencia de usuario</h3>

<p>PGP comercial incluye una interfaz gr\u00e1fica para despliegue empresarial. GnuPG es fundamentalmente una herramienta de l\u00ednea de comandos. Herramientas como KeychainPGP ofrecen una interfaz gr\u00e1fica nativa que gestiona la administraci\u00f3n de claves, el cifrado, el descifrado y la firma sin memorizar opciones de l\u00ednea de comandos. Puede probar el cifrado PGP directamente en el navegador con nuestra <a href="/es/pgp-online-encrypt/">herramienta de cifrado PGP en l\u00ednea</a>.</p>

<h2 id="which-should-you-use">\u00bfCu\u00e1l deber\u00eda usar?</h2>

<ul>
<li><strong>Empresa con infraestructura Broadcom/Symantec existente:</strong> PGP comercial puede ser el camino de menor resistencia.</li>
<li><strong>Desarrolladores y administradores de sistemas:</strong> GnuPG es la herramienta est\u00e1ndar, instalada por defecto en la mayor\u00eda de los servidores.</li>
<li><strong>Usuarios preocupados por su privacidad que desean una GUI:</strong> Considere una aplicaci\u00f3n OpenPGP moderna como KeychainPGP.</li>
<li><strong>Necesidades de cifrado web o r\u00e1pido:</strong> Una <a href="/es/pgp-online-encrypt/">herramienta de cifrado PGP en l\u00ednea</a> puede manejar las tareas puntuales sin instalar nada.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">D\u00f3nde se ubica KeychainPGP</h2>

<p><a href="/">KeychainPGP</a> es una aplicaci\u00f3n de escritorio moderna y de c\u00f3digo abierto que implementa el est\u00e1ndar OpenPGP utilizando <strong>Sequoia-PGP</strong>, una biblioteca OpenPGP escrita desde cero en Rust. No es ni PGP (el producto comercial) ni GPG (GnuPG). Es una implementaci\u00f3n independiente que coexiste con ambos en el ecosistema OpenPGP.</p>

<p>Razones principales para considerar KeychainPGP:</p>

<ul>
<li><strong>Multiplataforma:</strong> Compilaciones nativas para Windows, macOS, Linux y Android, m\u00e1s una aplicaci\u00f3n web y un CLI</li>
<li><strong>Criptograf\u00eda moderna:</strong> Construido sobre Sequoia-PGP con soporte de Curve25519/Ed25519 y AEAD</li>
<li><strong>C\u00f3digo abierto:</strong> Doble licencia MIT / Apache-2.0, completamente auditable</li>
<li><strong>F\u00e1cil de usar:</strong> Interfaz gr\u00e1fica con flujo de trabajo por portapapeles y atajos globales</li>
<li><strong>CLI para automatizaci\u00f3n:</strong> El CLI <code>keychainpgp</code> soporta generaci\u00f3n de claves, cifrado, descifrado, firma, verificaci\u00f3n y gesti\u00f3n del llavero</li>
<li><strong>Conforme a OpenPGP:</strong> Las claves y mensajes son interoperables con GPG, PGP y cualquier otra herramienta OpenPGP</li>
</ul>

<h2 id="frequently-asked-questions">Preguntas frecuentes</h2>

<h3>\u00bfGPG es lo mismo que PGP?</h3>

<p>No. GPG (GnuPG) y PGP son software distintos creados por personas diferentes. PGP fue creado por Phil Zimmermann en 1991 y hoy es un producto comercial de Broadcom. GPG fue creado por Werner Koch en 1997 como alternativa libre y de c\u00f3digo abierto. Ambos implementan el est\u00e1ndar OpenPGP, por lo que son funcionalmente compatibles.</p>

<h3>\u00bfLas claves GPG y PGP pueden funcionar juntas?</h3>

<p>S\u00ed. GPG y PGP utilizan el formato de clave OpenPGP definido por el est\u00e1ndar IETF. Puede exportar una clave p\u00fablica desde GPG e importarla en PGP, o en cualquier otra herramienta conforme con OpenPGP como KeychainPGP.</p>

<h3>\u00bfGPG sigue siendo seguro en 2026?</h3>

<p>GnuPG sigue siendo una herramienta segura y mantenida activamente. Utilice tipos de claves modernos (como Ed25519), mantenga su software actualizado y siga las buenas pr\u00e1cticas de gesti\u00f3n de claves. Para una gu\u00eda paso a paso, consulte nuestro art\u00edculo <a href="/es/docs/pgp-for-beginners/">PGP para principiantes</a>.</p>

<h3>\u00bfQu\u00e9 significa OpenPGP?</h3>

<p>OpenPGP es un est\u00e1ndar abierto publicado por el IETF que define c\u00f3mo funciona el cifrado compatible con PGP. Especifica los formatos de mensajes, los formatos de claves, los requisitos de algoritmos y las estructuras de firmas.</p>

<h3>\u00bfNecesito PGP o GPG para usar KeychainPGP?</h3>

<p>No. KeychainPGP es una aplicaci\u00f3n aut\u00f3noma que no depende de la instalaci\u00f3n de PGP o GnuPG. Utiliza la biblioteca Sequoia-PGP, una implementaci\u00f3n independiente del est\u00e1ndar OpenPGP escrita en Rust. Sin embargo, las claves y mensajes cifrados creados en KeychainPGP son totalmente compatibles con GPG y PGP.</p>
`
};

export default doc;
