import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Como usar PGP: tutorial de cifrado paso a paso (2026)',
	description: 'Aprenda a usar el cifrado PGP paso a paso. Genere claves, cifre y descifre mensajes, firme y verifique datos con este tutorial PGP completo.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Como usar PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Lo que necesita', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Paso 1: Generar un par de claves', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Paso 2: Compartir su clave publica', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Paso 3: Importar las claves de sus contactos', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Paso 4: Cifrar un mensaje', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Paso 5: Descifrar un mensaje', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Paso 6: Firmar un mensaje', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Paso 7: Verificar una firma', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'Flujo de trabajo por portapapeles KeychainPGP', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Aplicacion web vs aplicacion de escritorio', level: 2 },
		{ id: 'frequently-asked-questions', text: 'Preguntas frecuentes', level: 2 }
	],
	html: `
<h1>C\u00f3mo usar PGP</h1>

<p>Para usar PGP, genere un par de claves (una clave p\u00fablica y una clave privada), comparta su clave p\u00fablica con las personas con las que desea comunicarse, importe sus claves p\u00fablicas y luego use esas claves para cifrar, descifrar, firmar y verificar mensajes. El cifrado PGP garantiza que solo el destinatario previsto pueda leer su mensaje, mientras que las firmas digitales demuestran que un mensaje proviene realmente de usted. Herramientas como <a href="/es/pgp-online-encrypt/">KeychainPGP</a> hacen este proceso accesible gracias a un flujo de trabajo basado en el portapapeles, sin l\u00ednea de comandos.</p>

<p>Este tutorial PGP le gu\u00eda a trav\u00e9s de cada paso, desde la generaci\u00f3n de su primer par de claves hasta el env\u00edo y recepci\u00f3n de mensajes cifrados. Si es nuevo en el concepto de criptograf\u00eda de clave p\u00fablica, considere leer primero <a href="/es/docs/what-is-pgp/">\u00bfQu\u00e9 es PGP?</a> o <a href="/es/docs/pgp-for-beginners/">PGP para principiantes</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">Lo que necesita antes de empezar</h2>

<p>Antes de cifrar su primer mensaje con PGP, necesita una aplicaci\u00f3n PGP:</p>

<ul>
<li><strong>Aplicaci\u00f3n web KeychainPGP</strong> \u2014 Abra la <a href="/es/pgp-online-encrypt/">herramienta PGP en l\u00ednea</a> en cualquier navegador moderno. Todo funciona localmente mediante WebAssembly compilado desde Rust. Sin instalaci\u00f3n, sin cuenta, ning\u00fan dato enviado a un servidor.</li>
<li><strong>Aplicaci\u00f3n de escritorio KeychainPGP</strong> \u2014 Descargue la aplicaci\u00f3n nativa para Windows, macOS, Linux o Android desde la <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">p\u00e1gina de releases en GitHub</a>. La aplicaci\u00f3n de escritorio agrega atajos globales, integraci\u00f3n en la bandeja del sistema, borrado autom\u00e1tico del portapapeles y sincronizaci\u00f3n por c\u00f3digo QR.</li>
<li><strong>CLI KeychainPGP</strong> \u2014 El CLI <code>keychainpgp</code> proporciona comandos para la generaci\u00f3n de claves, cifrado, descifrado, firma, verificaci\u00f3n y gesti\u00f3n del llavero. Ideal para scripting y automatizaci\u00f3n.</li>
<li><strong>GnuPG (GPG)</strong> \u2014 La herramienta de l\u00ednea de comandos tradicional. Potente pero requiere familiaridad con la terminal. Consulte <a href="/es/docs/pgp-vs-gpg/">PGP vs GPG</a> para una comparaci\u00f3n detallada.</li>
</ul>

<blockquote><p><strong>Consejo:</strong> Si solo quiere probar el cifrado PGP ahora sin instalar nada, abra la <a href="/es/pgp-online-encrypt/">herramienta PGP en l\u00ednea</a> y siga este tutorial.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Paso 1: Generar un par de claves PGP</h2>

<p>Un par de claves PGP se compone de dos claves matem\u00e1ticamente relacionadas:</p>

<ul>
<li><strong>Clave p\u00fablica</strong> \u2014 La comparte libremente. Cualquiera puede usarla para cifrar mensajes dirigidos a usted o para verificar sus firmas.</li>
<li><strong>Clave privada</strong> \u2014 La mantiene en secreto. Descifra los mensajes cifrados con su clave p\u00fablica y crea firmas digitales.</li>
</ul>

<h3>Generar una clave en KeychainPGP</h3>

<ol>
<li>Abra KeychainPGP (aplicaci\u00f3n web o de escritorio).</li>
<li>Navegue a la pesta\u00f1a <strong>Claves</strong>.</li>
<li>Haga clic en <strong>Generar nueva clave</strong>.</li>
<li>Introduzca su nombre y direcci\u00f3n de correo electr\u00f3nico.</li>
<li>Haga clic en <strong>Generar</strong>. KeychainPGP crea un par de claves <strong>Ed25519 + X25519</strong> \u2014 el algoritmo m\u00e1s moderno y seguro disponible en OpenPGP.</li>
</ol>

<h3>Generar una clave con GPG (l\u00ednea de comandos)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Seleccione el tipo de clave (RSA o ECC), el tama\u00f1o y el per\u00edodo de expiraci\u00f3n. Para seguridad moderna, elija Ed25519 si su versi\u00f3n de GPG lo soporta.</p>

<hr>

<h2 id="step-2-share-your-public-key">Paso 2: Compartir su clave p\u00fablica</h2>

<p>Su clave p\u00fablica es un bloque de texto en formato <strong>ASCII-armored</strong>. Puede compartirla en cualquier lugar:</p>

<ul>
<li><strong>Correo electr\u00f3nico</strong> \u2014 P\u00e9guela en el cuerpo de un correo o adj\u00fantela como archivo <code>.asc</code>.</li>
<li><strong>Aplicaciones de mensajer\u00eda</strong> \u2014 Env\u00edela a trav\u00e9s de Signal, WhatsApp, Matrix o cualquier plataforma de chat.</li>
<li><strong>Su sitio web</strong> \u2014 Publ\u00edquela en su sitio personal, perfil de GitHub o biograf\u00eda de Twitter.</li>
<li><strong>Servidores de claves</strong> \u2014 S\u00fabala a un servidor de claves p\u00fablico como <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Importante:</strong> Comparta \u00fanicamente su clave <strong>p\u00fablica</strong>. Nunca comparta su clave privada con nadie, bajo ninguna circunstancia.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Paso 3: Importar las claves p\u00fablicas de sus contactos</h2>

<p>Antes de poder enviar un mensaje cifrado a alguien, necesita su clave p\u00fablica. Pida a su contacto que le env\u00ede su clave p\u00fablica ASCII-armored, o b\u00fasquela en un servidor de claves.</p>

<h3>Importar una clave en KeychainPGP</h3>

<ol>
<li>Copie el bloque de clave p\u00fablica del contacto en su portapapeles.</li>
<li>Abra KeychainPGP y vaya a la pesta\u00f1a <strong>Claves</strong>.</li>
<li>Haga clic en <strong>Importar una clave</strong> y pegue la clave.</li>
<li>El contacto aparece en su lista de claves con su nombre y correo electr\u00f3nico.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Paso 4: Cifrar un mensaje</h2>

<h3>Cifrado en KeychainPGP (web o escritorio)</h3>

<ol>
<li>Vaya a la pesta\u00f1a <strong>Cifrar</strong>.</li>
<li>Escriba o pegue el mensaje que desea cifrar.</li>
<li>Seleccione el destinatario de su lista de claves.</li>
<li>Haga clic en <strong>Cifrar al portapapeles</strong>. El mensaje cifrado se copia en su portapapeles.</li>
<li>Pegue el mensaje cifrado en su correo electr\u00f3nico, chat o cualquier otro canal de comunicaci\u00f3n.</li>
</ol>

<h3>Cifrado con el atajo de escritorio</h3>

<p>Con la aplicaci\u00f3n de escritorio KeychainPGP, el proceso es a\u00fan m\u00e1s r\u00e1pido gracias al <a href="/es/docs/clipboard-encryption/">flujo de trabajo por portapapeles</a>:</p>

<ol>
<li>Escriba su mensaje en cualquier aplicaci\u00f3n.</li>
<li>Seleccione y copie el texto (<code>Ctrl+C</code>).</li>
<li>Pulse <strong><code>Ctrl+Shift+E</code></strong> \u2014 KeychainPGP cifra el contenido del portapapeles.</li>
<li>Pegue el mensaje cifrado (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Paso 5: Descifrar un mensaje</h2>

<h3>Descifrado en KeychainPGP (web o escritorio)</h3>

<ol>
<li>Copie el bloque de mensaje cifrado completo.</li>
<li>Vaya a la pesta\u00f1a <strong>Descifrar</strong> de KeychainPGP.</li>
<li>Pegue el texto cifrado.</li>
<li>Haga clic en <strong>Descifrar</strong>. El texto en claro aparece inmediatamente.</li>
</ol>

<h3>Descifrado con el atajo de escritorio</h3>

<ol>
<li>Seleccione y copie el bloque de mensaje cifrado (<code>Ctrl+C</code>).</li>
<li>Pulse <strong><code>Ctrl+Shift+D</code></strong> \u2014 KeychainPGP descifra el contenido del portapapeles.</li>
<li>El texto en claro reemplaza el texto cifrado en su portapapeles. P\u00e9guelo donde lo necesite.</li>
</ol>

<p>La aplicaci\u00f3n de escritorio tambi\u00e9n cuenta con el <strong>borrado autom\u00e1tico del portapapeles</strong>: despu\u00e9s de 30 segundos, el texto descifrado se elimina autom\u00e1ticamente del portapapeles.</p>

<hr>

<h2 id="step-6-sign-a-message">Paso 6: Firmar un mensaje</h2>

<p>Una firma digital PGP demuestra dos cosas:</p>

<ol>
<li><strong>Autenticidad</strong> \u2014 El mensaje fue escrito por el titular de la clave de firma.</li>
<li><strong>Integridad</strong> \u2014 El mensaje no ha sido alterado desde que se firm\u00f3.</li>
</ol>

<p>Firmar no cifra el mensaje. Cualquiera puede leer un mensaje firmado, pero puede verificar que proviene de usted y que no ha sido falsificado.</p>

<h3>Cu\u00e1ndo firmar mensajes</h3>

<ul>
<li>Anunciar versiones de software o avisos de seguridad</li>
<li>Verificar su identidad en foros p\u00fablicos</li>
<li>Firmar correos electr\u00f3nicos para demostrar su origen</li>
<li>Firma de commits Git para la integridad del c\u00f3digo</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Paso 7: Verificar una firma</h2>

<p>Cuando recibe un mensaje firmado, puede verificar que es aut\u00e9ntico y no ha sido modificado.</p>

<h3>Verificaci\u00f3n en KeychainPGP</h3>

<ol>
<li>Copie el mensaje firmado completo (incluyendo el bloque de firma).</li>
<li>Vaya a la pesta\u00f1a <strong>Verificar</strong>.</li>
<li>Pegue el mensaje firmado.</li>
<li>Haga clic en <strong>Verificar</strong>. KeychainPGP confirma si la firma es v\u00e1lida.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">Flujo de trabajo por portapapeles de KeychainPGP</h2>

<p>Lo que distingue a KeychainPGP de las herramientas PGP tradicionales es su <a href="/es/docs/clipboard-encryption/">flujo de trabajo de cifrado por portapapeles</a>. En lugar de operar con archivos o requerir un cliente de correo electr\u00f3nico dedicado, KeychainPGP funciona con cualquier aplicaci\u00f3n a trav\u00e9s del portapapeles del sistema.</p>

<table>
<tr><th>Acci\u00f3n</th><th>Aplicaci\u00f3n web</th><th>Aplicaci\u00f3n de escritorio</th></tr>
<tr><td>Cifrar</td><td>Pegar texto, clic en Cifrar</td><td>Copiar texto, pulsar <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Descifrar</td><td>Pegar texto cifrado, clic en Descifrar</td><td>Copiar texto cifrado, pulsar <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Firmar</td><td>Pegar texto, clic en Firmar</td><td>Disponible en la ventana de la aplicaci\u00f3n</td></tr>
<tr><td>Verificar</td><td>Pegar texto firmado, clic en Verificar</td><td>Disponible en la ventana de la aplicaci\u00f3n</td></tr>
</table>

<p>Funciones de seguridad adicionales de la aplicaci\u00f3n de escritorio:</p>

<ul>
<li><strong>Borrado autom\u00e1tico del portapapeles</strong> \u2014 El texto descifrado se elimina del portapapeles despu\u00e9s de 30 segundos.</li>
<li><strong>Modo OPSEC</strong> \u2014 T\u00edtulo de ventana disfrazado, almacenamiento de claves solo en RAM y bot\u00f3n de borrado de emergencia.</li>
<li><strong>Almac\u00e9n de credenciales del SO</strong> \u2014 Las claves privadas se almacenan de forma segura mediante Windows Credential Manager, macOS Keychain o Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Aplicaci\u00f3n web vs aplicaci\u00f3n de escritorio</h2>

<p><strong>Aplicaci\u00f3n web</strong> (<a href="/es/pgp-online-encrypt/">herramienta PGP en l\u00ednea</a>):</p>

<ul>
<li>Funciona completamente en el navegador mediante WebAssembly</li>
<li>Sin instalaci\u00f3n, sin cuenta requerida</li>
<li>Perfecta para tareas de cifrado r\u00e1pidas</li>
<li>Las claves se almacenan en el almacenamiento local del navegador</li>
</ul>

<p><strong>Aplicaci\u00f3n de escritorio</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Atajos globales para cifrar y descifrar</li>
<li>Integraci\u00f3n en la bandeja del sistema</li>
<li>Borrado autom\u00e1tico del portapapeles</li>
<li>Modo OPSEC con claves solo en RAM y borrado de emergencia</li>
<li>Almacenamiento seguro de claves mediante el gestor de credenciales del SO</li>
<li>M\u00e1s adecuada para el uso diario y la gesti\u00f3n de claves a largo plazo</li>
</ul>

<p>Ambas aplicaciones son gratuitas, de c\u00f3digo abierto (MIT / Apache-2.0) y sin telemetr\u00eda alguna.</p>

<hr>

<h2 id="frequently-asked-questions">Preguntas frecuentes</h2>

<h3>\u00bfDebo compartir mi clave privada?</h3>

<p>No. <strong>Nunca</strong> debe compartir su clave privada con nadie. Su clave privada es lo que le permite descifrar los mensajes que le env\u00edan y crear firmas digitales. Si otra persona obtiene su clave privada, puede leer todos los mensajes cifrados para usted y hacerse pasar por usted.</p>

<h3>\u00bfQu\u00e9 pasa si pierdo mi clave privada?</h3>

<p>Si pierde su clave privada, pierde permanentemente la capacidad de descifrar todos los mensajes cifrados con la clave p\u00fablica correspondiente. No existe ning\u00fan mecanismo de recuperaci\u00f3n. Mantenga siempre una copia de seguridad de su clave privada en un lugar seguro.</p>

<h3>\u00bfPuedo cifrar archivos con PGP?</h3>

<p>S\u00ed. PGP puede cifrar tanto mensajes de texto como archivos binarios. KeychainPGP se enfoca en el cifrado de texto por portapapeles, mientras que herramientas como GnuPG soportan el cifrado de archivos directamente. Para una comparaci\u00f3n detallada, consulte la gu\u00eda <a href="/es/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>\u00bfEl cifrado PGP es seguro?</h3>

<p>El cifrado PGP con algoritmos modernos es extremadamente seguro. KeychainPGP utiliza Ed25519 para firmas y X25519 para el intercambio de claves \u2014 algoritmos de curva el\u00edptica que ofrecen seguridad equivalente a RSA-3072 con una fracci\u00f3n del tama\u00f1o de clave. Los principales riesgos no son criptogr\u00e1ficos sino operacionales: frases de contrase\u00f1a d\u00e9biles, dispositivos comprometidos o gesti\u00f3n de claves descuidada.</p>

<h3>\u00bfQu\u00e9 es una huella PGP?</h3>

<p>Una huella PGP es una cadena hexadecimal de 40 caracteres que identifica de forma \u00fanica una clave PGP. Las huellas se utilizan para verificar que una clave p\u00fablica pertenece realmente a la persona que usted cree. Compare siempre la huella a trav\u00e9s de un canal de confianza separado (llamada telef\u00f3nica, videollamada, encuentro en persona) para prevenir ataques de intermediario.</p>
`
};

export default doc;
