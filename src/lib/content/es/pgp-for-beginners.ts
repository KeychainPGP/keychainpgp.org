import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP para principiantes: guía sencilla para empezar con el cifrado PGP',
	description: 'Aprenda cifrado PGP desde cero. Esta guía para principiantes explica cómo funciona PGP, le acompaña en su primer mensaje cifrado y cubre los conceptos clave.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Por qué importa el cifrado', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'Qué es PGP, explicado simplemente', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Conceptos clave que necesita saber', level: 2 },
		{ id: 'public-key-your-address', text: 'Clave pública: su dirección', level: 3 },
		{ id: 'private-key-your-password', text: 'Clave privada: su contraseña', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Cifrado vs firma', level: 3 },
		{ id: 'key-fingerprints', text: 'Huellas de claves', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Su primer mensaje PGP', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Errores comunes de principiante', level: 2 },
		{ id: 'next-steps', text: 'Próximos pasos', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP para principiantes: guía sencilla para empezar</h1>

<p>Empezar con PGP es más fácil de lo que piensa. Genera un par de claves — una pública, una privada — comparte la clave pública con las personas con quienes quiere comunicarse y usa la clave privada para descifrar los mensajes que le envían. No necesita instalar software para probar. Con una <a href="/es/pgp-online-encrypt/">herramienta PGP en línea</a> gratuita como KeychainPGP, puede cifrar su primer mensaje en menos de cinco minutos, directamente desde su navegador.</p>

<h2 id="why-encryption-matters">Por qué importa el cifrado</h2>

<p>Cada día, miles de millones de mensajes transitan por Internet. La mayoría se envían en texto plano, lo que significa que cualquiera que los intercepte puede leerlos. El cifrado resuelve este problema: cuando cifra un mensaje con PGP, se codifica en texto ilegible que solo la persona con la clave privada correcta puede descifrar.</p>

<h2 id="what-is-pgp-explained-simply">Qué es PGP, explicado simplemente</h2>

<p>PGP significa <strong>Pretty Good Privacy</strong>. Piense en un <strong>buzón con ranura</strong>: cualquiera puede depositar una carta por la ranura (su <strong>clave pública</strong>), pero solo usted puede abrir el buzón con su llave (su <strong>clave privada</strong>). Esto se llama <strong>cifrado asimétrico</strong>. Para una explicación técnica más profunda, lea nuestra guía sobre <a href="/es/docs/what-is-pgp/">qué es PGP</a>.</p>

<h2 id="key-concepts-you-need-to-know">Conceptos clave que necesita saber</h2>

<h3 id="public-key-your-address">Clave pública: su dirección</h3>
<p>Su clave pública es como su dirección postal. La distribuye libremente para que la gente pueda cifrar mensajes que solo usted puede leer.</p>

<h3 id="private-key-your-password">Clave privada: su contraseña</h3>
<p>Su clave privada es lo único que le permite abrir los mensajes cifrados con su clave pública. <strong>Nunca comparta su clave privada</strong>.</p>

<h3 id="encryption-vs-signing">Cifrado vs firma</h3>
<ul>
<li><strong>Cifrado</strong> — codifica un mensaje para que solo el destinatario pueda leerlo.</li>
<li><strong>Firma</strong> — demuestra que un mensaje proviene de usted y no ha sido alterado.</li>
</ul>

<h3 id="key-fingerprints">Huellas de claves</h3>
<p>Una huella de clave identifica de manera única una clave PGP. Siempre compare la huella a través de un canal de confianza separado.</p>

<h3 id="ascii-armor">ASCII Armor</h3>
<p>Cuando ve un bloque de texto que comienza con <code>-----BEGIN PGP MESSAGE-----</code>, es <strong>ASCII armor</strong>: una forma de codificar datos binarios en caracteres de texto imprimibles.</p>

<h2 id="your-first-pgp-message">Su primer mensaje PGP</h2>

<p>Siga estos pasos con la <a href="https://keychainpgp.github.io">aplicación web KeychainPGP</a>:</p>

<ol>
<li><strong>Abra la aplicación web.</strong> Vaya a <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>.</li>
<li><strong>Genere su par de claves.</strong> En la pestaña Claves, cree una nueva clave Ed25519 + X25519.</li>
<li><strong>Exporte y comparta su clave pública.</strong></li>
<li><strong>Importe la clave pública del destinatario.</strong></li>
<li><strong>Escriba y cifre su mensaje.</strong> En la pestaña Cifrar, seleccione el destinatario y haga clic en Cifrar.</li>
<li><strong>Envíe el mensaje cifrado.</strong> Pegue el texto cifrado en cualquier email, chat o app de mensajería.</li>
<li><strong>Descifre una respuesta.</strong> Copie el bloque PGP, vaya a Descifrar y haga clic en Descifrar.</li>
</ol>

<p>Para una guía más detallada, consulte <a href="/es/docs/how-to-use-pgp/">cómo usar PGP</a>.</p>

<h2 id="common-beginner-mistakes">Errores comunes de principiante</h2>

<ol>
<li><strong>Compartir la clave privada.</strong> Solo comparta su clave <strong>pública</strong>.</li>
<li><strong>No verificar las huellas.</strong> Siempre verifique la huella a través de un canal separado.</li>
<li><strong>Perder la clave privada sin respaldo.</strong> Si pierde su clave privada, los mensajes cifrados se pierden para siempre.</li>
<li><strong>No guardar el certificado de revocación.</strong></li>
<li><strong>Usar claves obsoletas o débiles.</strong> Use algoritmos modernos como Ed25519 + X25519.</li>
</ol>

<h2 id="next-steps">Próximos pasos</h2>

<ul>
<li><a href="/es/docs/how-to-use-pgp/">Cómo usar PGP</a> — guía completa con firma, verificación y gestión de claves.</li>
<li><a href="/es/docs/what-is-pgp/">¿Qué es PGP?</a> — para profundizar.</li>
<li><a href="/es/docs/clipboard-encryption/">Cifrado por portapapeles</a> — cómo usar PGP con cualquier aplicación.</li>
<li><a href="/es/pgp-online-encrypt/">Herramienta PGP en línea</a> — practique ahora.</li>
</ul>

<h2 id="faq">Preguntas frecuentes</h2>

<h3>¿Es difícil aprender PGP?</h3>
<p>No. El concepto básico es simple: una clave pública para compartir, una clave privada para guardar en secreto. Cifrar un mensaje toma unos pocos clics con una herramienta moderna como KeychainPGP.</p>

<h3>¿Se necesita instalar software para usar PGP?</h3>
<p>No necesariamente. Puede usar la <a href="/es/pgp-online-encrypt/">herramienta PGP en línea</a> de KeychainPGP directamente en su navegador via WebAssembly.</p>

<h3>¿Alguien puede descifrar mis mensajes PGP?</h3>
<p>Con algoritmos modernos (como Ed25519 + X25519), descifrar por fuerza bruta tomaría más que la edad del universo con la tecnología actual.</p>

<h3>¿Cuál es la diferencia entre PGP, GPG y OpenPGP?</h3>
<p><strong>PGP</strong> es el programa original de 1991. <strong>OpenPGP</strong> es el estándar abierto (RFC 4880). <strong>GPG</strong> es una implementación libre del estándar. KeychainPGP es otra implementación, construida sobre Sequoia-PGP en Rust. Todos son compatibles.</p>
`
};

export default doc;
