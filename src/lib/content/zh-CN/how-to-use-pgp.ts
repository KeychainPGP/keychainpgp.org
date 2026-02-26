import type { DocContent } from '../types';

const doc: DocContent = {
	title: '如何使用 PGP：加密分步教程（2026）',
	description: '逐步学习如何使用 PGP 加密。生成密钥、加密和解密消息、签名和验证数据，尽在这篇完整的 PGP 教程中。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: '如何使用 PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: '开始前的准备', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: '第一步：生成密钥对', level: 2 },
		{ id: 'step-2-share-your-public-key', text: '第二步：分享您的公钥', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: '第三步：导入联系人的公钥', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: '第四步：加密消息', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: '第五步：解密消息', level: 2 },
		{ id: 'step-6-sign-a-message', text: '第六步：签名消息', level: 2 },
		{ id: 'step-7-verify-a-signature', text: '第七步：验证签名', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGP 剪贴板工作流', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: '网页应用与桌面应用', level: 2 },
		{ id: 'frequently-asked-questions', text: '常见问题', level: 2 }
	],
	html: `
<h1>如何使用 PGP</h1>

<p>要使用 PGP，您需要生成一个密钥对（一个公钥和一个私钥），将公钥分享给您想要通信的人，导入他们的公钥，然后使用这些密钥来加密、解密、签名和验证消息。PGP 加密确保只有预期的收件人能够阅读您的消息，而数字签名则证明消息确实来自您。像 <a href="/zh-CN/pgp-online-encrypt/">KeychainPGP</a> 这样的工具通过基于剪贴板的工作流使这个过程变得简单——无需命令行操作。</p>

<p>本 PGP 教程将引导您完成每一个步骤，从生成您的第一个密钥对到收发加密消息。如果您对公钥密码学的概念还不熟悉，建议先阅读<a href="/zh-CN/docs/what-is-pgp/">什么是 PGP？</a>或<a href="/zh-CN/docs/pgp-for-beginners/">PGP 入门指南</a>。</p>

<hr>

<h2 id="what-you-need-before-you-start">开始前的准备</h2>

<p>在使用 PGP 加密第一条消息之前，您需要一个 PGP 应用：</p>

<ul>
<li><strong>KeychainPGP 网页应用</strong>——在任何现代浏览器中打开<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>。所有操作通过由 Rust 编译的 WebAssembly 在本地完成。无需安装、无需账户，数据不会发送到任何服务器。</li>
<li><strong>KeychainPGP 桌面应用</strong>——从 <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases 页面</a>下载 Windows、macOS、Linux 或 Android 原生应用。桌面应用增加了全局快捷键、系统托盘集成、自动清除剪贴板和 QR 码同步功能。</li>
<li><strong>KeychainPGP CLI</strong>——<code>keychainpgp</code> CLI 提供密钥生成、加密、解密、签名、验证和密钥环管理命令。非常适合脚本和自动化。</li>
<li><strong>GnuPG (GPG)</strong>——传统的命令行工具。功能强大但需要熟悉终端。参见<a href="/zh-CN/docs/pgp-vs-gpg/">PGP 与 GPG 的区别</a>了解详细对比。</li>
</ul>

<blockquote><p><strong>提示：</strong>如果您只想立即尝试 PGP 加密而不安装任何软件，请打开<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>并跟随本教程操作。</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">第一步：生成 PGP 密钥对</h2>

<p>一个 PGP 密钥对由两个数学相关的密钥组成：</p>

<ul>
<li><strong>公钥</strong>——您可以自由分享。任何人都可以用它来加密发给您的消息或验证您的签名。</li>
<li><strong>私钥</strong>——您必须保密。它用于解密用您公钥加密的消息和创建数字签名。</li>
</ul>

<h3>在 KeychainPGP 中生成密钥</h3>

<ol>
<li>打开 KeychainPGP（网页应用或桌面应用）。</li>
<li>导航到<strong>密钥</strong>选项卡。</li>
<li>点击<strong>生成新密钥</strong>。</li>
<li>输入您的姓名和电子邮件地址。</li>
<li>点击<strong>生成</strong>。KeychainPGP 将创建一个 <strong>Ed25519 + X25519</strong> 密钥对——OpenPGP 中最现代、最安全的算法。</li>
</ol>

<h3>使用 GPG（命令行）生成密钥</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>选择密钥类型（RSA 或 ECC）、大小和过期时间。如果您的 GPG 版本支持，建议选择 Ed25519 以获得现代安全性。</p>

<hr>

<h2 id="step-2-share-your-public-key">第二步：分享您的公钥</h2>

<p>您的公钥是一个 <strong>ASCII-armored</strong> 格式的文本块。您可以在任何地方分享它：</p>

<ul>
<li><strong>电子邮件</strong>——粘贴在邮件正文中或作为 <code>.asc</code> 文件附件。</li>
<li><strong>即时通讯应用</strong>——通过 Signal、WhatsApp、Matrix 或任何聊天平台发送。</li>
<li><strong>您的网站</strong>——发布在个人网站、GitHub 个人资料或 Twitter 简介上。</li>
<li><strong>密钥服务器</strong>——上传到公共密钥服务器，如 <code>keys.openpgp.org</code>。</li>
</ul>

<p><strong>重要：</strong>只分享您的<strong>公钥</strong>。任何情况下都不要将私钥分享给任何人。</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">第三步：导入联系人的公钥</h2>

<p>在向某人发送加密消息之前，您需要他们的公钥。请联系人向您发送他们的 ASCII-armored 公钥，或在密钥服务器上搜索。</p>

<h3>在 KeychainPGP 中导入密钥</h3>

<ol>
<li>将联系人的公钥文本块复制到剪贴板。</li>
<li>打开 KeychainPGP，进入<strong>密钥</strong>选项卡。</li>
<li>点击<strong>导入密钥</strong>并粘贴密钥。</li>
<li>联系人将出现在您的密钥列表中，显示其姓名和电子邮件。</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">第四步：加密消息</h2>

<h3>在 KeychainPGP 中加密（网页或桌面）</h3>

<ol>
<li>转到<strong>加密</strong>选项卡。</li>
<li>输入或粘贴您想要加密的消息。</li>
<li>从密钥列表中选择收件人。</li>
<li>点击<strong>加密到剪贴板</strong>。加密后的消息将被复制到您的剪贴板。</li>
<li>将加密消息粘贴到电子邮件、聊天或任何其他通信渠道中。</li>
</ol>

<h3>使用桌面快捷键加密</h3>

<p>使用 KeychainPGP 桌面应用，通过<a href="/zh-CN/docs/clipboard-encryption/">剪贴板工作流</a>操作更加快捷：</p>

<ol>
<li>在任何应用中输入您的消息。</li>
<li>选中并复制文本（<code>Ctrl+C</code>）。</li>
<li>按下 <strong><code>Ctrl+Shift+E</code></strong>——KeychainPGP 加密剪贴板内容。</li>
<li>粘贴加密后的消息（<code>Ctrl+V</code>）。</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">第五步：解密消息</h2>

<h3>在 KeychainPGP 中解密（网页或桌面）</h3>

<ol>
<li>复制完整的加密消息文本块。</li>
<li>在 KeychainPGP 中转到<strong>解密</strong>选项卡。</li>
<li>粘贴加密文本。</li>
<li>点击<strong>解密</strong>。明文将立即显示。</li>
</ol>

<h3>使用桌面快捷键解密</h3>

<ol>
<li>选中并复制加密消息文本块（<code>Ctrl+C</code>）。</li>
<li>按下 <strong><code>Ctrl+Shift+D</code></strong>——KeychainPGP 解密剪贴板内容。</li>
<li>明文替换剪贴板中的加密文本。粘贴到您需要的地方。</li>
</ol>

<p>桌面应用还具有<strong>自动清除剪贴板</strong>功能：30 秒后，解密的文本会自动从剪贴板中删除。</p>

<hr>

<h2 id="step-6-sign-a-message">第六步：签名消息</h2>

<p>PGP 数字签名证明两件事：</p>

<ol>
<li><strong>真实性</strong>——消息由签名密钥的持有者编写。</li>
<li><strong>完整性</strong>——消息自签名以来未被篡改。</li>
</ol>

<p>签名不会加密消息。任何人都可以阅读签名的消息，但可以验证它确实来自您且未被篡改。</p>

<h3>何时签名消息</h3>

<ul>
<li>发布软件版本或安全公告</li>
<li>在公共论坛上验证您的身份</li>
<li>签名电子邮件以证明来源</li>
<li>Git 提交签名以确保代码完整性</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">第七步：验证签名</h2>

<p>当您收到签名消息时，可以验证其真实性和未被修改。</p>

<h3>在 KeychainPGP 中验证</h3>

<ol>
<li>复制完整的签名消息（包括签名块）。</li>
<li>转到<strong>验证</strong>选项卡。</li>
<li>粘贴签名消息。</li>
<li>点击<strong>验证</strong>。KeychainPGP 将确认签名是否有效。</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGP 剪贴板工作流</h2>

<p>KeychainPGP 与传统 PGP 工具的区别在于其<a href="/zh-CN/docs/clipboard-encryption/">剪贴板加密工作流</a>。它不是操作文件或需要专用的电子邮件客户端，而是通过系统剪贴板与任何应用配合使用。</p>

<table>
<tr><th>操作</th><th>网页应用</th><th>桌面应用</th></tr>
<tr><td>加密</td><td>粘贴文本，点击加密</td><td>复制文本，按 <code>Ctrl+Shift+E</code></td></tr>
<tr><td>解密</td><td>粘贴加密文本，点击解密</td><td>复制加密文本，按 <code>Ctrl+Shift+D</code></td></tr>
<tr><td>签名</td><td>粘贴文本，点击签名</td><td>在应用窗口中操作</td></tr>
<tr><td>验证</td><td>粘贴签名文本，点击验证</td><td>在应用窗口中操作</td></tr>
</table>

<p>桌面应用的额外安全功能：</p>

<ul>
<li><strong>自动清除剪贴板</strong>——解密后的文本在 30 秒后从剪贴板中删除。</li>
<li><strong>OPSEC 模式</strong>——伪装窗口标题、密钥仅存于内存、紧急销毁按钮。</li>
<li><strong>系统凭据存储</strong>——私钥通过 Windows 凭据管理器、macOS 钥匙串或 Linux Secret Service 安全存储。</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">网页应用与桌面应用</h2>

<p><strong>网页应用</strong>（<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>）：</p>

<ul>
<li>通过 WebAssembly 完全在浏览器中运行</li>
<li>无需安装、无需账户</li>
<li>非常适合快速加密任务</li>
<li>密钥存储在浏览器本地存储中</li>
</ul>

<p><strong>桌面应用</strong>（Windows、macOS、Linux、Android）：</p>

<ul>
<li>用于加密和解密的全局快捷键</li>
<li>系统托盘集成</li>
<li>自动清除剪贴板</li>
<li>OPSEC 模式，密钥仅存于内存和紧急销毁功能</li>
<li>通过操作系统凭据管理器安全存储密钥</li>
<li>更适合日常使用和长期密钥管理</li>
</ul>

<p>两个应用都是免费、开源（MIT / Apache-2.0）且无任何遥测追踪。</p>

<hr>

<h2 id="frequently-asked-questions">常见问题</h2>

<h3>我需要分享我的私钥吗？</h3>

<p>不需要。您<strong>绝对不能</strong>与任何人分享您的私钥。您的私钥是用来解密发给您的消息和创建数字签名的。如果其他人获得了您的私钥，他们就可以阅读所有加密给您的消息并冒充您。</p>

<h3>如果我丢失了私钥怎么办？</h3>

<p>如果您丢失了私钥，您将永久失去解密所有用对应公钥加密的消息的能力。没有任何恢复机制。请始终安全地备份您的私钥。</p>

<h3>我可以用 PGP 加密文件吗？</h3>

<p>可以。PGP 可以加密文本消息和二进制文件。KeychainPGP 专注于剪贴板文本加密，而 GnuPG 等工具直接支持文件加密。详细对比请参见 <a href="/zh-CN/docs/pgp-vs-gpg/">PGP 与 GPG 的区别</a>指南。</p>

<h3>PGP 加密安全吗？</h3>

<p>使用现代算法的 PGP 加密是极其安全的。KeychainPGP 使用 Ed25519 进行签名，X25519 进行密钥交换——这些椭圆曲线算法以极小的密钥尺寸提供等同于 RSA-3072 的安全性。主要风险不是密码学层面的，而是操作层面的：弱密码短语、被入侵的设备或粗心的密钥管理。</p>

<h3>什么是 PGP 指纹？</h3>

<p>PGP 指纹是一个 40 个字符的十六进制字符串，用于唯一标识一个 PGP 密钥。指纹用于验证公钥确实属于您认为的那个人。请始终通过单独的可信渠道（电话、视频通话或面对面会议）比较指纹，以防止中间人攻击。</p>
`
};

export default doc;
