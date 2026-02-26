import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Cifrado por portapapeles con PGP: el enfoque clipboard-first para mensajería segura',
	description: 'Aprenda cómo funciona el cifrado PGP por portapapeles, por qué supera al cifrado basado en archivos para OPSEC diario y cómo KeychainPGP usa el portapapeles para cifrar mensajes en cualquier app.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: '¿Qué es el cifrado por portapapeles?', level: 2 },
		{ id: 'why-clipboard-first', text: '¿Por qué clipboard-first?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Cómo KeychainPGP usa el portapapeles', level: 2 },
		{ id: 'the-encryption-workflow', text: 'El flujo de cifrado', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Descifrado en reversa', level: 3 },
		{ id: 'security-considerations', text: 'Consideraciones de seguridad', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Historial y gestores del portapapeles', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Limpieza automática tras 30 segundos', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Gestión de memoria y zerificación', level: 3 },
		{ id: 'opsec-mode', text: 'Modo OPSEC', level: 2 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Portapapeles vs. cifrado de archivos', level: 2 },
		{ id: 'threat-model', text: 'Modelo de amenaza', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Contra qué protege', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Contra qué no protege', level: 3 },
		{ id: 'best-practices', text: 'Buenas prácticas para PGP por portapapeles', level: 2 }
	],
	html: `
<h1>Cifrado por portapapeles con PGP</h1>

<h2 id="what-is-clipboard-encryption">¿Qué es el cifrado por portapapeles?</h2>

<p>El cifrado PGP por portapapeles es un método para cifrar y descifrar texto leyendo y escribiendo directamente desde el portapapeles del sistema operativo, en lugar de operar con archivos en disco. Simplemente copie su texto, active el cifrado con un atajo y pegue el mensaje PGP cifrado donde lo necesite. El portapapeles actúa como buffer de entrada y salida. Este enfoque es la base de cómo funciona <a href="/es/pgp-online-encrypt/">KeychainPGP</a> en escritorio.</p>

<p>Si es nuevo en PGP, comience con <a href="/es/docs/what-is-pgp/">¿Qué es PGP?</a></p>

<h2 id="why-clipboard-first">¿Por qué clipboard-first?</h2>

<ul>
<li><strong>Independencia de aplicaciones.</strong> Funciona con cualquier app que soporte copiar y pegar.</li>
<li><strong>Sin archivos de texto plano en disco.</strong> El texto plano permanece solo en memoria volátil.</li>
<li><strong>Menor fricción.</strong> Tres pasos: copiar, atajo, pegar.</li>
<li><strong>Compatibilidad con comunicaciones modernas.</strong> Webmail, Signal, Slack, Discord — todos soportan pegar texto.</li>
</ul>

<p>Para una guía paso a paso, vea <a href="/es/docs/how-to-use-pgp/">Cómo usar PGP</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Cómo KeychainPGP usa el portapapeles</h2>

<h3 id="the-encryption-workflow">El flujo de cifrado</h3>
<ol>
<li><strong>Copie</strong> su mensaje de cualquier aplicación.</li>
<li><strong>Presione <code>Ctrl+Shift+E</code></strong>. KeychainPGP lee el portapapeles, cifra y escribe el resultado PGP ASCII-armored de vuelta.</li>
<li><strong>Pegue</strong> el mensaje cifrado en el destino.</li>
</ol>

<p>KeychainPGP usa <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> en Rust con Ed25519/X25519 por defecto.</p>

<h3 id="decryption-in-reverse">Descifrado en reversa</h3>
<p>Copie el bloque PGP cifrado, presione <code>Ctrl+Shift+D</code>, y KeychainPGP reemplaza el contenido del portapapeles con el texto descifrado. Se limpia automáticamente tras un tiempo configurable.</p>

<h2 id="security-considerations">Consideraciones de seguridad</h2>

<h3 id="clipboard-history-and-managers">Historial y gestores del portapapeles</h3>
<p>Desactive el historial del portapapeles del SO y evite gestores de terceros en dispositivos con contenido sensible.</p>

<h3 id="auto-clear-after-30-seconds">Limpieza automática tras 30 segundos</h3>
<p>KeychainPGP limpia automáticamente el portapapeles 30 segundos después de escribir texto descifrado. Configurable hasta 5 segundos.</p>

<h3 id="memory-handling-and-zeroization">Gestión de memoria y zerificación</h3>
<p>Escrito en Rust con garantías de zerificación de Sequoia-PGP. Los datos sensibles se sobrescriben con ceros antes de liberar la memoria.</p>

<h2 id="opsec-mode">Modo OPSEC</h2>
<p>Para usuarios en entornos hostiles: título de ventana disfrazado, claves solo en RAM, botón de limpieza de emergencia y soporte de proxy Tor.</p>

<h2 id="clipboard-encryption-vs-file-encryption">Portapapeles vs. cifrado de archivos</h2>

<table>
<tr><th>Aspecto</th><th>Cifrado por portapapeles</th><th>Cifrado de archivos</th></tr>
<tr><td><strong>Entrada/salida</strong></td><td>Portapapeles del SO (memoria volátil)</td><td>Archivos en disco (almacenamiento persistente)</td></tr>
<tr><td><strong>Artefactos en texto plano</strong></td><td>Ninguno en disco</td><td>Archivo original, archivos temporales pueden persistir</td></tr>
<tr><td><strong>Soporte de apps</strong></td><td>Cualquier app con copiar/pegar</td><td>Requiere acceso al sistema de archivos</td></tr>
<tr><td><strong>Pasos</strong></td><td>3</td><td>5+</td></tr>
<tr><td><strong>Huella forense</strong></td><td>Mínima (solo RAM)</td><td>Significativa</td></tr>
</table>

<h2 id="threat-model">Modelo de amenaza</h2>

<h3 id="what-clipboard-encryption-protects-against">Contra qué protege</h3>
<ul>
<li><strong>Vigilancia de red.</strong> Mensajes cifrados son opacos para cualquier monitor de red.</li>
<li><strong>Intercepción de emails y mensajes.</strong> Sin la clave privada, el contenido es irrecuperable.</li>
<li><strong>Compromiso del almacenamiento.</strong> Los mensajes PGP permanecen protegidos.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Contra qué no protege</h3>
<ul>
<li><strong>Keylogger en el dispositivo.</strong></li>
<li><strong>Acceso físico a un dispositivo desbloqueado.</strong></li>
<li><strong>Claves privadas comprometidas.</strong></li>
<li><strong>Análisis de tráfico.</strong></li>
</ul>

<p>Para una introducción más amplia, <a href="/es/docs/pgp-for-beginners/">PGP para principiantes</a> cubre los fundamentos.</p>

<h2 id="best-practices">Buenas prácticas para PGP por portapapeles</h2>

<ol>
<li><strong>Desactive el historial del portapapeles.</strong></li>
<li><strong>Mantenga la limpieza automática activada.</strong> 5-15 segundos son suficientes.</li>
<li><strong>Use el modo OPSEC cuando sea necesario.</strong></li>
<li><strong>Verifique las claves de los destinatarios fuera de banda.</strong></li>
<li><strong>Use frases de contraseña fuertes.</strong></li>
<li><strong>Mantenga su dispositivo seguro.</strong></li>
<li><strong>Prefiera claves Ed25519/X25519.</strong></li>
<li><strong>Pruebe su flujo de trabajo.</strong></li>
</ol>

<p><a href="/es/pgp-online-encrypt/">Pruebe KeychainPGP en su navegador</a> para ver el workflow clipboard-first en acción.</p>
`
};

export default doc;
