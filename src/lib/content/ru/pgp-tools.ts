import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Лучшие инструменты PGP и программы шифрования в 2026 году — полное руководство',
	description: 'Полное руководство по инструментам PGP и программам шифрования. Сравнение настольных, веб, мобильных и CLI инструментов OpenPGP для выбора подходящего решения.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'Что такое инструменты PGP?', level: 2 },
		{ id: 'desktop-pgp-software', text: 'Настольные программы PGP', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'Онлайн-инструменты PGP', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'Мобильные инструменты PGP', level: 2 },
		{ id: 'cli-pgp-tools', text: 'Инструменты PGP для командной строки', level: 2 },
		{ id: 'email-pgp-integration', text: 'Интеграция PGP в электронную почту', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'Сравнение инструментов PGP', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'Выбор подходящего инструмента PGP', level: 2 },
		{ id: 'why-keychainpgp', text: 'Почему KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'Начало работы', level: 2 }
	],
	html: `
<h1>Лучшие инструменты PGP и программы шифрования в 2026 году</h1>

<p>Сегодня доступен широкий ассортимент инструментов PGP для шифрования сообщений, подписания файлов и управления ключами OpenPGP. Эти инструменты охватывают настольные приложения, веб-утилиты, мобильные приложения, интерфейсы командной строки и плагины для электронной почты. Данное руководство рассматривает каждую основную категорию программного обеспечения PGP, чтобы помочь вам сделать осознанный выбор.</p>

<h2 id="what-are-pgp-tools">Что такое инструменты PGP?</h2>

<p>Инструменты PGP — это программные приложения, реализующие <a href="/ru/docs/what-is-pgp/">стандарт OpenPGP</a> (RFC 4880 и последующие) для криптографии с открытым ключом. Они позволяют генерировать пары ключей, шифровать и расшифровывать сообщения, создавать и проверять цифровые подписи и управлять связками ключей. Понимание <a href="/ru/docs/pgp-vs-gpg/">различий между PGP и GPG</a> помогает разобраться, почему существует так много разных инструментов.</p>

<h2 id="desktop-pgp-software">Настольные программы PGP</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong> (GNU Privacy Guard) — это эталонная реализация стандарта OpenPGP с открытым исходным кодом. Доступен практически для всех операционных систем, чрезвычайно мощный, но работает преимущественно через командную строку. Поддерживает RSA, DSA, ECDSA, EdDSA и широкий спектр симметричных шифров.</p>

<ul>
<li><strong>Платформы:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>Интерфейс:</strong> Командная строка (с опциональными графическими оболочками)</li>
<li><strong>Лицензия:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong> объединяет GnuPG с нативным графическим интерфейсом Windows под названием Kleopatra. Он обеспечивает управление сертификатами, шифрование файлов через интеграцию с Проводником Windows и поддержку S/MIME в дополнение к OpenPGP.</p>

<ul>
<li><strong>Платформы:</strong> Windows</li>
<li><strong>Лицензия:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong> — это аналог Gpg4win для macOS. Включает GPG Keychain для управления ключами, контекстное меню GPGServices и GPG Mail для интеграции с Apple Mail.</p>

<ul>
<li><strong>Платформы:</strong> macOS</li>
<li><strong>Лицензия:</strong> Открытый исходный код (плагин Mail платный)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong> использует принципиально иной подход к шифрованию PGP. Вместо обёртки над GnuPG он использует библиотеку <strong>Sequoia-PGP</strong>, написанную на Rust, для обеспечения современного рабочего процесса через буфер обмена. Вы копируете текст, нажимаете глобальную горячую клавишу (<code>Ctrl+Shift+E</code> для шифрования, <code>Ctrl+Shift+D</code> для расшифровки) и вставляете результат — это работает с любым приложением в системе.</p>

<ul>
<li><strong>Платформы:</strong> Windows, macOS, Linux, Android, Web, CLI</li>
<li><strong>Интерфейс:</strong> GUI с системным треем + глобальные горячие клавиши + CLI</li>
<li><strong>Лицензия:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">Онлайн-инструменты PGP</h2>

<p><a href="/ru/pgp-online-encrypt/">Веб-приложение KeychainPGP</a> компилирует тот же движок Sequoia-PGP на Rust в WebAssembly, так что все криптографические операции выполняются локально в браузере. Никакие данные не передаются на сервер. <strong>Mailvelope</strong> — это расширение для браузера, интегрирующее шифрование OpenPGP непосредственно в провайдеров веб-почты, таких как Gmail и Outlook.com.</p>

<h2 id="mobile-pgp-tools">Мобильные инструменты PGP</h2>

<p><strong>OpenKeychain</strong> — это зрелое приложение OpenPGP с открытым исходным кодом для Android с интеграцией в K-9 Mail. <strong>KeychainPGP для Android</strong> предоставляет ту же современную криптографию на мобильных устройствах с генерацией ключей Ed25519/X25519 и синхронизацией ключей через QR-код с настольным приложением.</p>

<h2 id="cli-pgp-tools">Инструменты PGP для командной строки</h2>

<p><strong>GnuPG</strong> (<code>gpg</code>) — основной CLI-инструмент. <strong>KeychainPGP</strong> предоставляет собственный CLI (<code>keychainpgp</code>) с командами для генерации ключей, шифрования, расшифровки, подписания, проверки, инспекции ключей и управления связкой ключей. <strong>Sequoia-PGP</strong> также предоставляет <code>sq</code> — ещё один современный CLI на Rust.</p>

<h2 id="email-pgp-integration">Интеграция PGP в электронную почту</h2>

<p><strong>Mozilla Thunderbird</strong> имеет встроенную поддержку OpenPGP начиная с версии 78. <strong>ProtonMail</strong> обеспечивает сквозное шифрование на основе OpenPGP, но полностью абстрагирует управление ключами.</p>

<h2 id="pgp-tools-comparison">Сравнение инструментов PGP</h2>

<table>
<tr><th>Инструмент</th><th>Платформы</th><th>Интерфейс</th><th>Ключи по умолчанию</th><th>Открытый код</th><th>Лучше всего для</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>Да (GPLv3)</td><td>Продвинутые пользователи, скрипты</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>Да (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>Частично</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + Горячие клавиши + CLI</td><td>Ed25519/X25519</td><td>Да (MIT/Apache-2.0)</td><td>Рабочий процесс через буфер обмена</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>Расширение браузера</td><td>Оверлей веб-почты</td><td>RSA-4096</td><td>Да (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>Нативный GUI</td><td>RSA-3072</td><td>Да (GPLv3)</td><td>Управление ключами на Android</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>Почтовый клиент</td><td>RSA-3072</td><td>Да (MPL 2.0)</td><td>Зашифрованная почта</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>Веб-почта</td><td>X25519</td><td>Частично</td><td>Почта без настройки</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">Выбор подходящего инструмента PGP</h2>

<h3>Простота использования</h3>
<p>Традиционные инструменты, такие как GnuPG, созданы для технических пользователей. KeychainPGP устраняет необходимость выбора алгоритмов и конфигурационных файлов — сгенерируйте ключ и начните шифровать немедленно.</p>

<h3>Безопасность и криптографические параметры по умолчанию</h3>
<p>Современные инструменты, такие как KeychainPGP и <code>sq</code> от Sequoia, по умолчанию используют <strong>Ed25519/X25519</strong>, обеспечивающие эквивалентную или превосходящую безопасность при значительно меньших размерах ключей. Базовая библиотека тоже важна: Sequoia-PGP (Rust) обеспечивает надёжные гарантии безопасности памяти.</p>

<h3>Поддержка платформ</h3>
<p>KeychainPGP охватывает Windows, macOS, Linux, Android и веб с единообразным интерфейсом. GnuPG доступен везде, но требует различных графических оболочек на каждой платформе.</p>

<h2 id="why-keychainpgp">Почему KeychainPGP</h2>

<p>KeychainPGP создан для решения проблем, которые делали шифрование PGP недоступным на протяжении десятилетий:</p>

<ul>
<li><strong>Рабочий процесс через буфер обмена.</strong> Вместо привязки к одному приложению KeychainPGP работает со <em>всеми</em> приложениями. Скопируйте текст, зашифруйте или расшифруйте одной горячей клавишей и вставьте результат.</li>
<li><strong>Современная криптография по умолчанию.</strong> Ключи подписи <strong>Ed25519</strong> и подключи шифрования <strong>X25519</strong> автоматически.</li>
<li><strong>Мультиплатформенность из единой кодовой базы.</strong> Настольное приложение на Tauri, веб-приложение через WebAssembly. Идентичный интерфейс и криптографическое поведение на Windows, macOS, Linux, Android и в браузере.</li>
<li><strong>На основе Sequoia-PGP.</strong> Криптографический движок на Rust с гарантиями безопасности памяти, устраняющими целые классы уязвимостей.</li>
<li><strong>По-настоящему свободный и с открытым исходным кодом.</strong> Лицензия MIT / Apache-2.0, без платных уровней, без учётных записей, без телеметрии.</li>
</ul>

<h2 id="getting-started">Начало работы</h2>

<ul>
<li><strong>Попробуйте прямо сейчас</strong> без установки: откройте <a href="/ru/pgp-online-encrypt/">онлайн-инструмент PGP KeychainPGP</a> в браузере.</li>
<li><strong>Изучите основы</strong>: прочитайте <a href="/ru/docs/what-is-pgp/">Что такое PGP?</a></li>
<li><strong>Поймите экосистему</strong>: наша статья <a href="/ru/docs/pgp-vs-gpg/">PGP vs GPG</a> объясняет, как связаны стандарт, протокол и инструменты.</li>
<li><strong>Сравните варианты</strong>: смотрите наш рейтинг <a href="/ru/blog/best-pgp-tools-2026/">лучших инструментов PGP 2026 года</a> или <a href="/ru/blog/pgp-software-comparison/">полное сравнение программ PGP</a>.</li>
<li><strong>Скачайте KeychainPGP</strong>: получите настольное приложение на <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a>.</li>
</ul>
`
};

export default doc;
