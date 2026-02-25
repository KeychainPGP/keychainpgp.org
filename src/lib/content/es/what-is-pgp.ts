import type { DocContent } from '../types';

const doc: DocContent = {
	title: '\u00bfQue es PGP? Guia completa sobre el cifrado Pretty Good Privacy',
	description: 'Descubra que es PGP (Pretty Good Privacy), como funciona el cifrado PGP con criptografia de clave publica, el estandar OpenPGP, las firmas digitales y los usos modernos.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: '\u00bfQue es el cifrado PGP?', level: 2 },
		{ id: 'history-of-pgp', text: 'Historia de PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Como funciona el cifrado PGP', level: 2 },
		{ id: 'public-key-cryptography', text: 'Criptografia de clave publica', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'El modelo de cifrado hibrido', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Firmas digitales PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'El estandar OpenPGP', level: 2 },
		{ id: 'web-of-trust', text: 'Red de confianza', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'Algoritmos y tipos de claves PGP', level: 2 },
		{ id: 'classic-algorithms', text: 'Algoritmos clasicos', level: 3 },
		{ id: 'modern-algorithms', text: 'Algoritmos modernos', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Casos de uso comunes de PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP en la actualidad', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Empezar con PGP', level: 2 }
	],
	html: `
<h1>\u00bfQu\u00e9 es PGP? Gu\u00eda completa sobre el cifrado Pretty Good Privacy</h1>

<h2 id="what-is-pgp-encryption">\u00bfQu\u00e9 es el cifrado PGP?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> es un programa de cifrado que proporciona privacidad y autenticaci\u00f3n criptogr\u00e1ficas para las comunicaciones de datos. El cifrado PGP utiliza una combinaci\u00f3n de criptograf\u00eda de clave sim\u00e9trica y criptograf\u00eda de clave p\u00fablica para permitir a los usuarios cifrar mensajes, archivos y otros datos de modo que solo el destinatario previsto pueda leerlos. Creado originalmente por Phil Zimmermann en 1991, PGP se ha convertido en el est\u00e1ndar de cifrado de correo electr\u00f3nico m\u00e1s utilizado del mundo y constituye la base de la especificaci\u00f3n <strong>OpenPGP</strong> definida en el RFC 4880. Ya sea que necesite enviar un correo electr\u00f3nico confidencial, verificar la identidad de un editor de software o proteger archivos sensibles, PGP proporciona un marco criptogr\u00e1fico probado en el que conf\u00edan periodistas, investigadores de seguridad, gobiernos y usuarios cotidianos.</p>

<p>Si desea probar el cifrado PGP de inmediato sin instalar software, KeychainPGP ofrece una <a href="/es/pgp-online-encrypt/">herramienta PGP en l\u00ednea</a> que funciona completamente en su navegador.</p>

<h2 id="history-of-pgp">Historia de PGP</h2>

<p>Phil Zimmermann public\u00f3 PGP 1.0 en junio de 1991 como software libre, motivado por la convicci\u00f3n de que la criptograf\u00eda fuerte deber\u00eda ser accesible para todos los ciudadanos, no solo para gobiernos y militares. En aquella \u00e9poca, el cifrado fuerte estaba clasificado como munici\u00f3n seg\u00fan las regulaciones estadounidenses de exportaci\u00f3n, y Zimmermann fue objeto de una investigaci\u00f3n criminal de tres a\u00f1os por parte del Servicio de Aduanas de EE.\u00a0UU. por distribuir PGP internacionalmente. La investigaci\u00f3n fue finalmente abandonada en 1996 sin cargos, y el caso se convirti\u00f3 en un momento clave en la historia de las libertades digitales.</p>

<p>PGP evolucion\u00f3 a trav\u00e9s de varias encarnaciones comerciales. Zimmermann fund\u00f3 PGP Inc. en 1996, que fue adquirida por Network Associates (posteriormente McAfee) en 1997 y finalmente por Symantec en 2010. A lo largo de estas transiciones, el protocolo criptogr\u00e1fico subyacente fue estandarizado bajo el nombre de <strong>OpenPGP</strong> por el Internet Engineering Task Force (IETF), garantizando que el protocolo permanezca abierto e interoperable independientemente de la propiedad comercial.</p>

<p>La publicaci\u00f3n del est\u00e1ndar OpenPGP signific\u00f3 que cualquiera pod\u00eda crear implementaciones compatibles. Esto llev\u00f3 a la creaci\u00f3n del GNU Privacy Guard (GnuPG o GPG), una implementaci\u00f3n libre y de c\u00f3digo abierto que sigue siendo una de las herramientas PGP m\u00e1s utilizadas en la actualidad. Para entender las diferencias entre estas implementaciones, consulte nuestra gu\u00eda sobre <a href="/es/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">C\u00f3mo funciona el cifrado PGP</h2>

<p>El cifrado PGP se basa en una combinaci\u00f3n sofisticada de t\u00e9cnicas criptogr\u00e1ficas. En lugar de utilizar un solo m\u00e9todo, PGP emplea un <strong>modelo de cifrado h\u00edbrido</strong> que combina la rapidez del cifrado sim\u00e9trico con las ventajas de distribuci\u00f3n de claves del cifrado asim\u00e9trico (de clave p\u00fablica).</p>

<h3 id="public-key-cryptography">Criptograf\u00eda de clave p\u00fablica</h3>

<p>En el n\u00facleo de PGP se encuentra la <strong>criptograf\u00eda de clave p\u00fablica</strong>, tambi\u00e9n llamada criptograf\u00eda asim\u00e9trica. Cada usuario PGP genera un <strong>par de claves</strong> compuesto por dos claves matem\u00e1ticamente relacionadas:</p>

<ul>
<li><strong>Clave p\u00fablica</strong> \u2014 se comparte abiertamente con cualquiera. Los dem\u00e1s usan esta clave para cifrar los mensajes destinados a usted y para verificar sus firmas digitales.</li>
<li><strong>Clave privada</strong> (tambi\u00e9n llamada clave secreta) \u2014 se mantiene estrictamente confidencial. Usted utiliza esta clave para descifrar los mensajes que le env\u00edan y para crear firmas digitales.</li>
</ul>

<p>La propiedad fundamental de este sistema es que los datos cifrados con una clave p\u00fablica solo pueden ser descifrados con la clave privada correspondiente, y viceversa. Esto elimina la necesidad de transmitir un secreto compartido entre las partes antes de que puedan comunicarse de forma privada.</p>

<h3 id="the-hybrid-encryption-model">El modelo de cifrado h\u00edbrido</h3>

<p>Aunque la criptograf\u00eda de clave p\u00fablica resuelve el problema de distribuci\u00f3n de claves, los algoritmos asim\u00e9tricos como RSA son costosos computacionalmente para cifrar grandes cantidades de datos. PGP resuelve este problema utilizando un enfoque h\u00edbrido:</p>

<ol>
<li><strong>Generaci\u00f3n de clave de sesi\u00f3n</strong> \u2014 PGP genera una <strong>clave sim\u00e9trica de sesi\u00f3n</strong> aleatoria y \u00fanica (generalmente de 128 o 256 bits) para cada mensaje.</li>
<li><strong>Cifrado de datos</strong> \u2014 El contenido del mensaje se cifra mediante un cifrado sim\u00e9trico r\u00e1pido (como AES-256) con la clave de sesi\u00f3n.</li>
<li><strong>Cifrado de la clave de sesi\u00f3n</strong> \u2014 La clave de sesi\u00f3n se cifra a su vez con la clave p\u00fablica del destinatario (operaci\u00f3n asim\u00e9trica).</li>
<li><strong>Empaquetado</strong> \u2014 El mensaje cifrado y la clave de sesi\u00f3n cifrada se agrupan y se env\u00edan al destinatario.</li>
</ol>

<p>Cuando el destinatario recibe el mensaje, el proceso se invierte: utiliza su <strong>clave privada</strong> para descifrar la clave de sesi\u00f3n, y luego la clave de sesi\u00f3n descifrada se usa para descifrar el contenido del mensaje.</p>

<h2 id="pgp-digital-signatures">Firmas digitales PGP</h2>

<p>M\u00e1s all\u00e1 del cifrado, PGP proporciona <strong>firmas digitales</strong> que cumplen dos funciones esenciales: la <strong>autenticaci\u00f3n</strong> (demostrar qui\u00e9n envi\u00f3 un mensaje) y la <strong>integridad</strong> (demostrar que el mensaje no fue alterado en tr\u00e1nsito).</p>

<p>El proceso de firma funciona de la siguiente manera:</p>

<ol>
<li>PGP calcula un <strong>hash criptogr\u00e1fico</strong> (un resumen de longitud fija) del contenido del mensaje utilizando un algoritmo como SHA-256 o SHA-512.</li>
<li>El hash se cifra con la <strong>clave privada</strong> del remitente, produciendo la firma digital.</li>
<li>La firma se adjunta al mensaje.</li>
</ol>

<p>Cualquier destinatario puede verificar la firma descifrando la firma con la <strong>clave p\u00fablica</strong> del remitente para recuperar el hash original, calculando independientemente el hash del mensaje recibido y comparando ambos hashes. Si coinciden, el mensaje es aut\u00e9ntico y no ha sido modificado.</p>

<h2 id="the-openpgp-standard">El est\u00e1ndar OpenPGP</h2>

<p><strong>OpenPGP</strong> es el est\u00e1ndar abierto que define los formatos de mensajes, los algoritmos y los procedimientos utilizados por el software compatible con PGP. No es un producto de software en s\u00ed, sino una especificaci\u00f3n que cualquier desarrollador puede implementar.</p>

<p>Los documentos de referencia son:</p>

<ul>
<li><strong>RFC 4880</strong> (noviembre de 2007) \u2014 La especificaci\u00f3n principal actual del formato de mensaje OpenPGP.</li>
<li><strong>RFC 6637</strong> (junio de 2012) \u2014 Extiende OpenPGP con soporte para criptograf\u00eda de curva el\u00edptica (ECC).</li>
<li><strong>RFC 9580</strong> (2024) \u2014 La \u00faltima revisi\u00f3n que moderniza el est\u00e1ndar con soporte obligatorio de Ed25519/X25519, modos de cifrado AEAD y huellas de claves mejoradas.</li>
</ul>

<p>OpenPGP garantiza la interoperabilidad: un mensaje cifrado con KeychainPGP puede ser descifrado por GnuPG, Mailvelope o cualquier otra implementaci\u00f3n conforme.</p>

<h2 id="web-of-trust">Red de confianza</h2>

<p>Una de las caracter\u00edsticas distintivas de PGP es su modelo descentralizado de <strong>red de confianza</strong> (Web of Trust) para establecer la autenticidad de las claves p\u00fablicas. A diferencia del modelo centralizado de autoridad de certificaci\u00f3n (CA) utilizado por TLS/SSL, PGP permite que los propios usuarios se avalen mutuamente.</p>

<p>La red de confianza funciona mediante la <strong>firma de claves</strong>: cuando verifica la identidad de alguien y confirma que controla una clave p\u00fablica particular, firma su clave con la suya. Esa firma es una declaraci\u00f3n p\u00fablica de que usted cree que la clave pertenece realmente a la persona que dice representar.</p>

<p>Herramientas como <a href="/es/pgp-online-encrypt/">KeychainPGP</a> simplifican este proceso al permitir a los usuarios trabajar con las claves directamente a trav\u00e9s de una interfaz intuitiva, utilizando el <a href="/es/docs/clipboard-encryption/">cifrado por portapapeles</a> para compartir f\u00e1cilmente mensajes cifrados y claves p\u00fablicas.</p>

<h2 id="pgp-algorithms-and-key-types">Algoritmos y tipos de claves PGP</h2>

<p>PGP soporta una gama de algoritmos criptogr\u00e1ficos que han evolucionado con los avances del campo.</p>

<h3 id="classic-algorithms">Algoritmos cl\u00e1sicos</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> \u2014 El algoritmo asim\u00e9trico m\u00e1s desplegado en la historia de PGP. Las claves RSA de 2048 bits se consideran el m\u00ednimo de seguridad hoy en d\u00eda, con claves de 4096 bits recomendadas para protecci\u00f3n a largo plazo.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> \u2014 Utilizado para firmas en combinaci\u00f3n con ElGamal para el cifrado. Menos preferido en la actualidad.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> \u2014 El cifrado sim\u00e9trico dominante utilizado para cifrar el contenido de los mensajes. Se soportan AES-128 y AES-256.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> \u2014 Funciones hash criptogr\u00e1ficas utilizadas para el c\u00e1lculo de res\u00famenes en firmas digitales.</li>
</ul>

<h3 id="modern-algorithms">Algoritmos modernos</h3>

<p>La \u00faltima generaci\u00f3n de implementaciones OpenPGP soporta la <strong>criptograf\u00eda de curva el\u00edptica (ECC)</strong>, que ofrece una seguridad equivalente a RSA con tama\u00f1os de clave considerablemente m\u00e1s peque\u00f1os:</p>

<ul>
<li><strong>Ed25519</strong> \u2014 Un algoritmo de firma digital basado en Curve25519. Produce firmas r\u00e1pidas y compactas. Recomendado en el RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> \u2014 Utilizado para el intercambio de claves (cifrado). Ofrece un excelente rendimiento con s\u00f3lidas propiedades de seguridad.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> \u2014 Curvas el\u00edpticas estandarizadas por el NIST. Soportadas por OpenPGP pero generalmente menos preferidas que los algoritmos basados en Curve25519.</li>
</ul>

<p>Herramientas modernas como KeychainPGP soportan estos algoritmos contempor\u00e1neos, haciendo que la generaci\u00f3n de claves con Ed25519 y X25519 sea sencilla y directa.</p>

<h2 id="common-use-cases-for-pgp">Casos de uso comunes de PGP</h2>

<ul>
<li><strong>Correo electr\u00f3nico seguro</strong> \u2014 El caso de uso original y m\u00e1s conocido. PGP permite cifrar el contenido de los correos electr\u00f3nicos y firmar los mensajes para demostrar su autenticidad.</li>
<li><strong>Cifrado de archivos</strong> \u2014 PGP puede cifrar archivos individuales o archivos comprimidos completos para un almacenamiento o transferencia seguros.</li>
<li><strong>Verificaci\u00f3n de software</strong> \u2014 Los proyectos de c\u00f3digo abierto firman regularmente sus versiones con claves PGP. Los usuarios pueden verificar estas firmas para confirmar la autenticidad de una descarga.</li>
<li><strong>Mensajer\u00eda segura</strong> \u2014 PGP puede utilizarse para cifrar cualquier mensaje de texto, particularmente \u00fatil en plataformas que no ofrecen cifrado de extremo a extremo.</li>
<li><strong>Verificaci\u00f3n de identidad</strong> \u2014 Las huellas de claves PGP sirven como identidades digitales verificables. Los desarrolladores en GitHub pueden firmar sus commits con PGP.</li>
<li><strong>Firma de documentos</strong> \u2014 Los flujos de trabajo legales a veces utilizan firmas PGP para establecer la no repudiaci\u00f3n.</li>
</ul>

<h2 id="pgp-today">PGP en la actualidad</h2>

<p>M\u00e1s de tres d\u00e9cadas despu\u00e9s de su creaci\u00f3n, PGP sigue siendo una de las herramientas criptogr\u00e1ficas m\u00e1s importantes disponibles. El est\u00e1ndar OpenPGP contin\u00faa evolucionando, con el RFC 9580 introduciendo modernizaciones significativas que incluyen soporte obligatorio de algoritmos de curva el\u00edptica modernos y modos de cifrado AEAD.</p>

<p>El ecosistema de herramientas PGP se ha enriquecido considerablemente. GnuPG sigue siendo la implementaci\u00f3n de referencia para el uso en l\u00ednea de comandos. Herramientas modernas como KeychainPGP ofrecen aplicaciones de escritorio nativas (Windows, macOS, Linux), una aplicaci\u00f3n Android, un CLI para scripting y una aplicaci\u00f3n web en el navegador \u2014 todo construido sobre el mismo motor Sequoia-PGP en Rust.</p>

<h2 id="getting-started-with-pgp">Empezar con PGP</h2>

<p>\u00bfListo para comenzar con el cifrado PGP? Estos son los mejores pr\u00f3ximos pasos:</p>

<ol>
<li><strong>Pru\u00e9belo en su navegador</strong> \u2014 Utilice la <a href="/es/pgp-online-encrypt/">herramienta PGP en l\u00ednea</a> de KeychainPGP para generar un par de claves, cifrar un mensaje o verificar una firma sin instalar nada.</li>
<li><strong>Lea la gu\u00eda para principiantes</strong> \u2014 Si es nuevo en criptograf\u00eda, nuestra gu\u00eda <a href="/es/docs/pgp-for-beginners/">PGP para principiantes</a> le acompa\u00f1a paso a paso.</li>
<li><strong>Aprenda el flujo de trabajo pr\u00e1ctico</strong> \u2014 Nuestra gu\u00eda <a href="/es/docs/how-to-use-pgp/">C\u00f3mo usar PGP</a> cubre la generaci\u00f3n de claves, el cifrado y el descifrado, la gesti\u00f3n de su llavero y las buenas pr\u00e1cticas.</li>
<li><strong>Comprenda el cifrado por portapapeles</strong> \u2014 Descubra el <a href="/es/docs/clipboard-encryption/">cifrado PGP por portapapeles</a> para cifrar y descifrar texto directamente desde su portapapeles.</li>
<li><strong>Conozca las herramientas</strong> \u2014 Entienda las <a href="/es/docs/pgp-vs-gpg/">diferencias entre PGP y GPG</a> para elegir la herramienta adecuada para su flujo de trabajo.</li>
</ol>

<p>El cifrado PGP protege las comunicaciones sensibles desde hace m\u00e1s de treinta a\u00f1os. Con las herramientas y est\u00e1ndares modernos, es m\u00e1s accesible que nunca.</p>
`
};

export default doc;
