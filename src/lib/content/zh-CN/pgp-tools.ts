import type { DocContent } from '../types';

const doc: DocContent = {
	title: '2026 年最佳 PGP 工具和加密软件——完全指南',
	description: 'PGP 工具和加密软件完全指南。对比桌面、网页、移动和命令行 OpenPGP 工具，找到最适合您需求的工具。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: '什么是 PGP 工具？', level: 2 },
		{ id: 'desktop-pgp-software', text: '桌面 PGP 软件', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: '在线 PGP 工具', level: 2 },
		{ id: 'mobile-pgp-tools', text: '移动 PGP 工具', level: 2 },
		{ id: 'cli-pgp-tools', text: '命令行 PGP 工具', level: 2 },
		{ id: 'email-pgp-integration', text: '电子邮件 PGP 集成', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'PGP 工具对比', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: '选择合适的 PGP 工具', level: 2 },
		{ id: 'why-keychainpgp', text: '为什么选择 KeychainPGP', level: 2 },
		{ id: 'getting-started', text: '开始使用', level: 2 }
	],
	html: `
<h1>2026 年最佳 PGP 工具和加密软件</h1>

<p>如今有各种各样的 PGP 工具可用于加密消息、签名文件和管理 OpenPGP 密钥。这些工具涵盖桌面应用、网页工具、移动应用、命令行界面和电子邮件插件。本指南涵盖每个主要类别的 PGP 软件，帮助您做出明智的选择。</p>

<h2 id="what-are-pgp-tools">什么是 PGP 工具？</h2>

<p>PGP 工具是实现 <a href="/zh-CN/docs/what-is-pgp/">OpenPGP 标准</a>（RFC 4880 及其后续版本）的公钥密码学软件应用。它们可以用来生成密钥对、加密和解密消息、创建和验证数字签名，以及管理密钥环。了解 <a href="/zh-CN/docs/pgp-vs-gpg/">PGP 和 GPG 之间的区别</a>有助于理解为什么会有这么多不同的工具。</p>

<h2 id="desktop-pgp-software">桌面 PGP 软件</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong>（GNU Privacy Guard）是 OpenPGP 标准的参考开源实现。几乎可在所有操作系统上使用，功能极其强大但主要是命令行操作。支持 RSA、DSA、ECDSA、EdDSA 和多种对称加密算法。</p>

<ul>
<li><strong>平台：</strong>Windows、macOS、Linux、BSD</li>
<li><strong>界面：</strong>命令行（可选 GUI 前端）</li>
<li><strong>许可证：</strong>GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong> 将 GnuPG 与 Windows 原生图形界面 Kleopatra 打包在一起。它提供证书管理、通过 Windows 资源管理器集成的文件加密，以及除 OpenPGP 外的 S/MIME 支持。</p>

<ul>
<li><strong>平台：</strong>Windows</li>
<li><strong>许可证：</strong>GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong> 是 Gpg4win 的 macOS 对应版本。包含用于密钥管理的 GPG Keychain、GPGServices 右键菜单和用于 Apple Mail 集成的 GPG Mail。</p>

<ul>
<li><strong>平台：</strong>macOS</li>
<li><strong>许可证：</strong>开源（Mail 插件付费）</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong> 采用了根本不同的 PGP 加密方式。它不是用图形界面包装 GnuPG，而是使用 Rust 编写的 <strong>Sequoia-PGP</strong> 库提供现代的基于剪贴板的工作流。您复制文本，按下全局快捷键（<code>Ctrl+Shift+E</code> 加密，<code>Ctrl+Shift+D</code> 解密），然后粘贴结果——适用于系统上的任何应用。</p>

<ul>
<li><strong>平台：</strong>Windows、macOS、Linux、Android、Web、CLI</li>
<li><strong>界面：</strong>GUI + 系统托盘 + 全局快捷键 + CLI</li>
<li><strong>许可证：</strong>MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">在线 PGP 工具</h2>

<p><a href="/zh-CN/pgp-online-encrypt/">KeychainPGP 网页应用</a>将同一个 Rust 语言的 Sequoia-PGP 引擎编译为 WebAssembly，因此所有密码学操作都在浏览器中本地完成。没有任何数据被传输到服务器。<strong>Mailvelope</strong> 是一个浏览器扩展，将 OpenPGP 加密直接集成到 Gmail 和 Outlook.com 等网页邮件提供商中。</p>

<h2 id="mobile-pgp-tools">移动 PGP 工具</h2>

<p><strong>OpenKeychain</strong> 是一个成熟的 Android 开源 OpenPGP 应用，与 K-9 Mail 集成。<strong>KeychainPGP Android 版</strong>将同样的现代密码学带到移动端，支持 Ed25519/X25519 密钥生成，并通过 QR 码与桌面应用同步密钥。</p>

<h2 id="cli-pgp-tools">命令行 PGP 工具</h2>

<p><strong>GnuPG</strong>（<code>gpg</code>）是主流的 CLI 工具。<strong>KeychainPGP</strong> 提供自己的 CLI（<code>keychainpgp</code>），包含密钥生成、加密、解密、签名、验证、密钥检查和密钥环管理命令。<strong>Sequoia-PGP</strong> 还提供 <code>sq</code>，另一个基于 Rust 的现代 CLI。</p>

<h2 id="email-pgp-integration">电子邮件 PGP 集成</h2>

<p><strong>Mozilla Thunderbird</strong> 从 78 版本开始内置原生 OpenPGP 支持。<strong>ProtonMail</strong> 底层使用 OpenPGP 提供端到端加密，但完全抽象了所有密钥管理。</p>

<h2 id="pgp-tools-comparison">PGP 工具对比</h2>

<table>
<tr><th>工具</th><th>平台</th><th>界面</th><th>默认密钥</th><th>开源</th><th>适合场景</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>是 (GPLv3)</td><td>高级用户、脚本</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>是 (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>部分</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + 快捷键 + CLI</td><td>Ed25519/X25519</td><td>是 (MIT/Apache-2.0)</td><td>剪贴板工作流</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>浏览器扩展</td><td>网页邮件覆盖层</td><td>RSA-4096</td><td>是 (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>原生 GUI</td><td>RSA-3072</td><td>是 (GPLv3)</td><td>Android 密钥管理</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>电子邮件客户端</td><td>RSA-3072</td><td>是 (MPL 2.0)</td><td>加密邮件</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>网页邮件</td><td>X25519</td><td>部分</td><td>零配置邮件</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">选择合适的 PGP 工具</h2>

<h3>易用性</h3>
<p>GnuPG 等传统工具专为技术用户设计。KeychainPGP 消除了算法选择和配置文件的烦恼——生成密钥后即可立即开始加密。</p>

<h3>安全性和默认密码学设置</h3>
<p>KeychainPGP 和 Sequoia 的 <code>sq</code> 等现代工具默认使用 <strong>Ed25519/X25519</strong>，以更小的密钥提供同等或更高的安全性。底层库也很重要：Sequoia-PGP（Rust）提供强大的内存安全保证。</p>

<h3>平台覆盖</h3>
<p>KeychainPGP 覆盖 Windows、macOS、Linux、Android 和网页，提供统一的界面。GnuPG 随处可用，但在每个平台上需要不同的 GUI 前端。</p>

<h2 id="why-keychainpgp">为什么选择 KeychainPGP</h2>

<p>KeychainPGP 旨在解决几十年来使 PGP 加密难以普及的问题：</p>

<ul>
<li><strong>剪贴板工作流。</strong>KeychainPGP 不是集成到单个应用，而是与<em>所有</em>应用配合使用。复制文本，通过一个快捷键加密或解密，然后粘贴结果。</li>
<li><strong>默认使用现代密码学。</strong>自动使用 <strong>Ed25519</strong> 签名密钥和 <strong>X25519</strong> 加密子密钥。</li>
<li><strong>单一代码库跨平台。</strong>桌面应用使用 Tauri 构建，网页应用通过 WebAssembly 编译。在 Windows、macOS、Linux、Android 或浏览器上拥有相同的界面和密码学行为。</li>
<li><strong>由 Sequoia-PGP 驱动。</strong>Rust 语言密码学引擎，内存安全保证消除了整类漏洞。</li>
<li><strong>真正的自由开源。</strong>MIT / Apache-2.0 许可证，无付费层级、无账户、无遥测。</li>
</ul>

<h2 id="getting-started">开始使用</h2>

<ul>
<li><strong>立即试用</strong>，无需安装：在浏览器中打开 <a href="/zh-CN/pgp-online-encrypt/">KeychainPGP 在线 PGP 工具</a>。</li>
<li><strong>学习基础知识</strong>：阅读<a href="/zh-CN/docs/what-is-pgp/">什么是 PGP？</a></li>
<li><strong>了解生态系统</strong>：我们关于 <a href="/zh-CN/docs/pgp-vs-gpg/">PGP 与 GPG 的区别</a>的文章解释了标准、协议和工具之间的关系。</li>
<li><strong>对比您的选择</strong>：查看我们的 <a href="/zh-CN/blog/best-pgp-tools-2026/">2026 年最佳 PGP 工具</a>排名或<a href="/zh-CN/blog/pgp-software-comparison/">完整 PGP 软件对比</a>。</li>
<li><strong>下载 KeychainPGP</strong>：从 <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a> 获取桌面应用。</li>
</ul>
`
};

export default doc;
