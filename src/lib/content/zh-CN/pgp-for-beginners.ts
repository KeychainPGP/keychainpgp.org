import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP 入门指南：开始使用 PGP 加密的简单教程',
	description: '从零开始学习 PGP 加密。本入门指南解释 PGP 的工作原理，引导您发送第一条加密消息，并涵盖关键概念。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: '为什么加密很重要', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: '用简单的语言解释 PGP', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: '您需要了解的关键概念', level: 2 },
		{ id: 'public-key-your-address', text: '公钥：您的地址', level: 3 },
		{ id: 'private-key-your-password', text: '私钥：您的密码', level: 3 },
		{ id: 'encryption-vs-signing', text: '加密与签名', level: 3 },
		{ id: 'key-fingerprints', text: '密钥指纹', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: '您的第一条 PGP 消息', level: 2 },
		{ id: 'common-beginner-mistakes', text: '常见新手错误', level: 2 },
		{ id: 'next-steps', text: '下一步', level: 2 },
		{ id: 'faq', text: '常见问题', level: 2 }
	],
	html: `
<h1>PGP 入门指南：简单上手</h1>

<p>开始使用 PGP 比您想象的要容易。您生成一个密钥对——一个公钥，一个私钥——将公钥分享给您想要通信的人，然后使用私钥来解密他们发给您的消息。您不需要安装任何软件就可以尝试。使用像 KeychainPGP 这样的免费<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>，您可以在五分钟内直接从浏览器加密第一条消息。</p>

<h2 id="why-encryption-matters">为什么加密很重要</h2>

<p>每天，数十亿条消息在互联网上传输。电子邮件、聊天消息、文档——大部分以明文形式发送，这意味着任何拦截它们的人都可以阅读。这包括互联网服务提供商、公共 Wi-Fi 上的黑客，甚至政府监控项目。</p>

<p><strong>数据泄露并非罕见事件。</strong>它们持续不断地发生。如果您的消息没有加密，它们就以可读的明文形式存储在数据库中，等待下一次泄露。</p>

<p>加密解决了这个问题。当您使用 PGP 加密消息时，它会被打乱成无法辨认的乱码。只有持有正确私钥的人才能将其还原。</p>

<h2 id="what-is-pgp-explained-simply">用简单的语言解释 PGP</h2>

<p>PGP 代表 <strong>Pretty Good Privacy</strong>。由 Phil Zimmermann 于 1991 年创建，已成为加密消息和文件的全球标准。</p>

<p>以下是理解 PGP 最简单的方式。把它想象成一个<strong>带投递口的信箱</strong>。</p>

<p>想象街上有一个特殊的信箱。任何人都可以走过来，通过投递口投入一封信。但信一旦进入信箱，只有您能打开它，因为只有您持有信箱门的钥匙。</p>

<ul>
<li><strong>信箱的投递口</strong>就是您的<strong>公钥</strong>。您把它给任何想要发送私人消息给您的人。分享它是安全的。</li>
<li><strong>信箱的钥匙</strong>就是您的<strong>私钥</strong>。您永远不与任何人分享。</li>
</ul>

<p>这就是所谓的<strong>非对称加密</strong>——一个密钥加锁，另一个密钥解锁。如需更深入的技术解释，请阅读我们关于<a href="/zh-CN/docs/what-is-pgp/">什么是 PGP</a> 的完整指南。</p>

<h2 id="key-concepts-you-need-to-know">您需要了解的关键概念</h2>

<h3 id="public-key-your-address">公钥：您的地址</h3>

<p>您的公钥就像您的邮寄地址。您自由分发它，以便人们可以给您寄东西。在 PGP 中，您分享公钥，以便他人可以加密只有您才能阅读的消息。</p>

<h3 id="private-key-your-password">私钥：您的密码</h3>

<p>您的私钥就像您家门的钥匙。它是唯一能打开用您公钥加密的消息的东西。您<strong>绝对不能</strong>与任何人分享您的私钥。</p>

<h3 id="encryption-vs-signing">加密与签名</h3>

<p>PGP 可以做两件事：<strong>加密</strong>和<strong>签名</strong>。</p>

<ul>
<li><strong>加密</strong>——将消息打乱，使只有收件人才能阅读。您使用收件人的公钥加密，他们使用自己的私钥解密。</li>
<li><strong>签名</strong>——证明消息来自您且未被篡改。您使用自己的私钥签名，任何持有您公钥的人都可以验证签名。</li>
</ul>

<h3 id="key-fingerprints">密钥指纹</h3>

<p>密钥指纹是一个唯一标识 PGP 密钥的短字符串。指纹用于<strong>验证</strong>一个公钥确实属于您认为的那个人。请始终通过单独的可信渠道比较指纹。</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>当您看到一个 PGP 密钥或加密消息以 <code>-----BEGIN PGP MESSAGE-----</code> 开头的文本块时，那就是 <strong>ASCII armor</strong>。它只是将二进制数据编码为可打印文本字符的一种方式，以便您可以将其复制粘贴到电子邮件、聊天窗口或网页表单中。</p>

<h2 id="your-first-pgp-message">您的第一条 PGP 消息</h2>

<p>让我们使用 <a href="https://keychainpgp.github.io">KeychainPGP 网页应用</a>来加密您的第一条消息。这是一个完全在浏览器中运行的免费<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>。</p>

<p><strong>第一步：打开网页应用。</strong>访问 <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>。应用通过 WebAssembly 加载，PGP 引擎在您的计算机上本地运行。</p>

<p><strong>第二步：生成您的密钥对。</strong>在"密钥"选项卡中，创建一个新密钥。KeychainPGP 会生成一个现代的 Ed25519 + X25519 密钥对。</p>

<p><strong>第三步：导出并分享您的公钥。</strong>使用导出功能将公钥复制为 ASCII-armored 格式。</p>

<p><strong>第四步：导入收件人的公钥。</strong>在"密钥"选项卡中，粘贴联系人的公钥文本块。</p>

<p><strong>第五步：编写并加密您的消息。</strong>转到"加密"选项卡，输入消息，选择收件人，点击<strong>"加密到剪贴板"</strong>。</p>

<p><strong>第六步：发送加密消息。</strong>将加密文本粘贴到任何电子邮件、聊天或即时通讯应用中。</p>

<p><strong>第七步：解密回复。</strong>复制加密的 PGP 消息块，转到"解密"选项卡，粘贴并点击"解密"。</p>

<p>如需更详细的指南，请参阅我们的<a href="/zh-CN/docs/how-to-use-pgp/">如何使用 PGP</a> 教程。</p>

<h2 id="common-beginner-mistakes">常见新手错误</h2>

<p><strong>1. 分享私钥。</strong>您的私钥绝对不能发送给任何人。只分享您的<strong>公钥</strong>。</p>

<p><strong>2. 不验证指纹。</strong>请始终通过单独的可信渠道——电话、视频通话或面对面会议——验证密钥指纹。</p>

<p><strong>3. 丢失私钥且没有备份。</strong>如果您丢失了私钥，使用该密钥加密的每条消息都将永远丢失。请在安全的地方备份您的私钥。</p>

<p><strong>4. 不保存吊销证书。</strong>吊销证书允许您公开声明您的密钥不再有效（如果密钥被泄露）。</p>

<p><strong>5. 使用过时或弱密钥。</strong>如果您今天生成新密钥，请使用现代算法。KeychainPGP 默认使用 Ed25519 + X25519。</p>

<h2 id="next-steps">下一步</h2>

<ul>
<li><strong>阅读完整指南：</strong><a href="/zh-CN/docs/how-to-use-pgp/">如何使用 PGP</a> 涵盖签名、验证、密钥管理和高级主题。</li>
<li><strong>深入了解 PGP：</strong>阅读<a href="/zh-CN/docs/what-is-pgp/">什么是 PGP</a>。</li>
<li><strong>学习剪贴板加密：</strong>了解<a href="/zh-CN/docs/clipboard-encryption/">剪贴板加密</a>如何让您在任何应用中使用 PGP。</li>
<li><strong>试用在线工具：</strong>打开<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>进行练习。</li>
<li><strong>获取桌面应用：</strong><a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGP 桌面应用</a>增加了全局快捷键、系统托盘和自动清除剪贴板功能。</li>
</ul>

<h2 id="faq">常见问题</h2>

<h3>PGP 难学吗？</h3>
<p>不难。基本概念很简单：一个公钥用于分享，一个私钥用于保密。使用像 KeychainPGP 这样的现代工具，加密一条消息只需几次点击。</p>

<h3>使用 PGP 需要安装软件吗？</h3>
<p>不一定。您可以直接在浏览器中使用 KeychainPGP 的<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>。它通过 WebAssembly 完全在您的设备上运行。</p>

<h3>有人能破解我的 PGP 加密消息吗？</h3>
<p>使用现代算法（如 KeychainPGP 使用的 Ed25519 + X25519），以当前技术暴力破解加密所需的时间将超过宇宙的年龄。真正的风险是实际操作方面的：丢失私钥、使用弱密码短语或设备上存在恶意软件。</p>

<h3>PGP、GPG 和 OpenPGP 有什么区别？</h3>
<p><strong>PGP</strong> 是 1991 年创建的原始程序。<strong>OpenPGP</strong> 是定义格式的开放标准（RFC 4880）。<strong>GPG</strong>（GNU Privacy Guard）是 OpenPGP 标准的免费实现。KeychainPGP 是另一个实现，基于 Rust 语言的 Sequoia-PGP 构建。它们都兼容，因为遵循相同的标准。</p>

<h3>如何分享我的公钥？</h3>
<p>将您的公钥导出为 ASCII-armored 格式——一个以 <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code> 开头的文本块。将它粘贴到电子邮件中、发布在网站上、通过聊天分享或上传到密钥服务器。记得通过单独的渠道与联系人验证指纹。</p>
`
};

export default doc;
