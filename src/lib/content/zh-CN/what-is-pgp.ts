import type { DocContent } from '../types';

const doc: DocContent = {
	title: '什么是 PGP？Pretty Good Privacy 加密完全指南',
	description: '了解什么是 PGP（Pretty Good Privacy），PGP 加密如何通过公钥密码学工作，OpenPGP 标准、数字签名和现代用途。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: '什么是 PGP 加密？', level: 2 },
		{ id: 'history-of-pgp', text: 'PGP 的历史', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'PGP 加密的工作原理', level: 2 },
		{ id: 'public-key-cryptography', text: '公钥密码学', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: '混合加密模型', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'PGP 数字签名', level: 2 },
		{ id: 'the-openpgp-standard', text: 'OpenPGP 标准', level: 2 },
		{ id: 'web-of-trust', text: '信任网络', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGP 算法与密钥类型', level: 2 },
		{ id: 'classic-algorithms', text: '经典算法', level: 3 },
		{ id: 'modern-algorithms', text: '现代算法', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'PGP 的常见用例', level: 2 },
		{ id: 'pgp-today', text: '今天的 PGP', level: 2 },
		{ id: 'getting-started-with-pgp', text: '开始使用 PGP', level: 2 }
	],
	html: `
<h1>什么是 PGP？Pretty Good Privacy 加密完全指南</h1>

<h2 id="what-is-pgp-encryption">什么是 PGP 加密？</h2>

<p><strong>PGP（Pretty Good Privacy）</strong>是一个加密程序，为数据通信提供密码学隐私和身份验证。PGP 加密结合使用对称密钥密码学和公钥密码学，使用户能够加密消息、文件和其他数据，确保只有预期的收件人才能阅读。PGP 最初由 Phil Zimmermann 于 1991 年创建，现已成为世界上使用最广泛的电子邮件加密标准，并且是 RFC 4880 中定义的 <strong>OpenPGP</strong> 规范的基础。无论您需要发送机密电子邮件、验证软件发布者的身份，还是保护敏感文件，PGP 都提供了一个经过验证的密码学框架，受到记者、安全研究人员、政府和普通用户的信赖。</p>

<p>如果您想立即尝试 PGP 加密而无需安装任何软件，KeychainPGP 提供了一个完全在浏览器中运行的<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>。</p>

<h2 id="history-of-pgp">PGP 的历史</h2>

<p>Phil Zimmermann 于 1991 年 6 月发布了 PGP 1.0，作为免费软件发布。他坚信强加密应该对所有公民开放，而不仅仅是政府和军方。当时，强加密在美国出口管制法规中被归类为军需品，Zimmermann 因将 PGP 分发到国际而遭到美国海关三年的刑事调查。该调查最终于 1996 年被撤销，未予起诉，此案成为数字自由历史上的标志性事件。</p>

<p>PGP 经历了多次商业化迭代。Zimmermann 于 1996 年创立了 PGP Inc.，该公司在 1997 年被 Network Associates（后来的 McAfee）收购，最终在 2010 年被 Symantec 收购。在这些变迁中，底层的密码协议以 <strong>OpenPGP</strong> 的名义被互联网工程任务组（IETF）标准化，确保该协议保持开放和互操作，不受商业所有权的影响。</p>

<p>OpenPGP 标准的发布意味着任何人都可以创建兼容的实现。这导致了 GNU Privacy Guard（GnuPG 或 GPG）的诞生，一个免费开源的实现，至今仍是使用最广泛的 PGP 工具之一。要了解这些实现之间的区别，请参阅我们关于 <a href="/zh-CN/docs/pgp-vs-gpg/">PGP 与 GPG 的区别</a>的指南。</p>

<h2 id="how-pgp-encryption-works">PGP 加密的工作原理</h2>

<p>PGP 加密依赖于密码学技术的精妙组合。PGP 不是使用单一方法，而是采用<strong>混合加密模型</strong>，将对称加密的速度与非对称（公钥）加密的密钥分发优势相结合。</p>

<h3 id="public-key-cryptography">公钥密码学</h3>

<p>PGP 的核心是<strong>公钥密码学</strong>，也称为非对称密码学。每个 PGP 用户生成一个由两个数学相关密钥组成的<strong>密钥对</strong>：</p>

<ul>
<li><strong>公钥</strong>——公开分享给任何人。其他人使用此密钥来加密发给您的消息和验证您的数字签名。</li>
<li><strong>私钥</strong>（也称为密钥）——严格保密。您使用此密钥来解密发给您的消息和创建数字签名。</li>
</ul>

<p>这个系统的基本特性是：用公钥加密的数据只能用对应的私钥解密，反之亦然。这消除了在双方进行私密通信之前传递共享密钥的需要。</p>

<h3 id="the-hybrid-encryption-model">混合加密模型</h3>

<p>虽然公钥密码学解决了密钥分发问题，但像 RSA 这样的非对称算法在加密大量数据时计算成本很高。PGP 通过使用混合方法解决了这个问题：</p>

<ol>
<li><strong>生成会话密钥</strong>——PGP 为每条消息生成一个随机的、唯一的<strong>对称会话密钥</strong>（通常为 128 或 256 位）。</li>
<li><strong>数据加密</strong>——使用快速的对称加密算法（如 AES-256）和会话密钥加密消息内容。</li>
<li><strong>会话密钥加密</strong>——然后使用收件人的公钥（非对称操作）加密会话密钥本身。</li>
<li><strong>打包</strong>——加密后的消息和加密后的会话密钥被打包在一起发送给收件人。</li>
</ol>

<p>当收件人收到消息时，过程是相反的：他们使用<strong>私钥</strong>解密会话密钥，然后使用解密后的会话密钥解密消息内容。</p>

<h2 id="pgp-digital-signatures">PGP 数字签名</h2>

<p>除了加密，PGP 还提供<strong>数字签名</strong>，它具有两个关键功能：<strong>身份验证</strong>（证明消息的发送者身份）和<strong>完整性</strong>（证明消息在传输过程中未被篡改）。</p>

<p>签名过程如下：</p>

<ol>
<li>PGP 使用 SHA-256 或 SHA-512 等算法计算消息内容的<strong>密码学哈希</strong>（固定长度的摘要）。</li>
<li>然后用发送者的<strong>私钥</strong>加密哈希值，生成数字签名。</li>
<li>签名附加到消息上。</li>
</ol>

<p>任何收件人都可以通过以下方式验证签名：用发送者的<strong>公钥</strong>解密签名以恢复原始哈希值，独立计算收到消息的哈希值，然后比较两个哈希值。如果匹配，则消息是真实且未被修改的。</p>

<h2 id="the-openpgp-standard">OpenPGP 标准</h2>

<p><strong>OpenPGP</strong> 是定义 PGP 兼容软件所使用的消息格式、算法和程序的开放标准。它本身不是软件产品，而是任何开发者都可以实现的规范。</p>

<p>参考文档包括：</p>

<ul>
<li><strong>RFC 4880</strong>（2007 年 11 月）——当前的 OpenPGP 消息格式主要规范。</li>
<li><strong>RFC 6637</strong>（2012 年 6 月）——扩展 OpenPGP 以支持椭圆曲线密码学（ECC）。</li>
<li><strong>RFC 9580</strong>（2024 年）——最新修订版，通过强制支持 Ed25519/X25519、AEAD 加密模式和改进的密钥指纹来现代化标准。</li>
</ul>

<p>OpenPGP 确保了互操作性：使用 KeychainPGP 加密的消息可以被 GnuPG、Mailvelope 或任何其他兼容实现解密。</p>

<h2 id="web-of-trust">信任网络</h2>

<p>PGP 的一个显著特征是其去中心化的<strong>信任网络</strong>（Web of Trust）模型，用于确立公钥的真实性。与 TLS/SSL 使用的集中式证书颁发机构（CA）模型不同，PGP 允许用户之间相互担保。</p>

<p>信任网络通过<strong>密钥签名</strong>运作：当您验证了某人的身份并确认他们控制着某个特定的公钥后，您用自己的密钥签署他们的密钥。这个签名是一个公开声明，表明您相信该密钥确实属于它所声称代表的人。</p>

<p>像 <a href="/zh-CN/pgp-online-encrypt/">KeychainPGP</a> 这样的工具通过直观的界面简化了这一过程，让用户可以直接操作密钥，使用<a href="/zh-CN/docs/clipboard-encryption/">剪贴板加密</a>轻松共享加密消息和公钥。</p>

<h2 id="pgp-algorithms-and-key-types">PGP 算法与密钥类型</h2>

<p>PGP 支持一系列随密码学发展而演进的密码算法。</p>

<h3 id="classic-algorithms">经典算法</h3>

<ul>
<li><strong>RSA（Rivest-Shamir-Adleman）</strong>——PGP 历史上部署最广泛的非对称算法。2048 位 RSA 密钥被认为是当前的最低安全标准，建议使用 4096 位密钥进行长期保护。</li>
<li><strong>DSA（数字签名算法）</strong>——与 ElGamal 配合用于签名和加密。目前较少被推荐。</li>
<li><strong>AES（高级加密标准）</strong>——用于加密消息内容的主流对称加密算法。支持 AES-128 和 AES-256。</li>
<li><strong>SHA-2（SHA-256、SHA-384、SHA-512）</strong>——用于数字签名中摘要计算的密码学哈希函数。</li>
</ul>

<h3 id="modern-algorithms">现代算法</h3>

<p>最新一代 OpenPGP 实现支持<strong>椭圆曲线密码学（ECC）</strong>，以显著更小的密钥尺寸提供等同于 RSA 的安全性：</p>

<ul>
<li><strong>Ed25519</strong>——基于 Curve25519 的数字签名算法。生成快速且紧凑的签名。在 RFC 9580 中被推荐。</li>
<li><strong>X25519（Curve25519 ECDH）</strong>——用于密钥交换（加密）。以卓越的性能提供强大的安全属性。</li>
<li><strong>NIST P-256 / P-384 / P-521</strong>——由 NIST 标准化的椭圆曲线。OpenPGP 支持，但通常不如基于 Curve25519 的算法受欢迎。</li>
</ul>

<p>像 KeychainPGP 这样的现代工具支持这些当代算法，使使用 Ed25519 和 X25519 生成密钥变得简单直接。</p>

<h2 id="common-use-cases-for-pgp">PGP 的常见用例</h2>

<ul>
<li><strong>安全电子邮件</strong>——最原始也最广为人知的用例。PGP 可以加密电子邮件内容并签名消息以证明其真实性。</li>
<li><strong>文件加密</strong>——PGP 可以加密单个文件或整个归档文件，用于安全存储或传输。</li>
<li><strong>软件验证</strong>——开源项目定期使用 PGP 密钥签名发布版本。用户可以验证这些签名来确认下载的真实性。</li>
<li><strong>安全消息</strong>——PGP 可以加密任何文本消息，在不提供端到端加密的平台上特别有用。</li>
<li><strong>身份验证</strong>——PGP 密钥指纹用作可验证的数字身份。GitHub 上的开发者可以使用 PGP 签名提交。</li>
<li><strong>文档签名</strong>——法律工作流有时使用 PGP 签名来建立不可否认性。</li>
</ul>

<h2 id="pgp-today">今天的 PGP</h2>

<p>自创建以来三十多年，PGP 仍然是最重要的密码学工具之一。OpenPGP 标准持续演进，RFC 9580 引入了重大现代化改进，包括强制支持现代椭圆曲线算法和 AEAD 加密模式。</p>

<p>PGP 工具生态系统已大为丰富。GnuPG 仍然是命令行使用的参考实现。像 KeychainPGP 这样的现代工具提供原生桌面应用（Windows、macOS、Linux）、Android 应用、用于脚本的 CLI 和浏览器中的网页应用——全部基于同一个 Rust 语言的 Sequoia-PGP 引擎构建。</p>

<h2 id="getting-started-with-pgp">开始使用 PGP</h2>

<p>准备好开始使用 PGP 加密了吗？以下是最佳的下一步：</p>

<ol>
<li><strong>在浏览器中试用</strong>——使用 KeychainPGP 的<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 工具</a>生成密钥对、加密消息或验证签名，无需安装任何软件。</li>
<li><strong>阅读入门指南</strong>——如果您是密码学新手，我们的<a href="/zh-CN/docs/pgp-for-beginners/">PGP 入门指南</a>将带您逐步入门。</li>
<li><strong>学习实用工作流</strong>——我们的<a href="/zh-CN/docs/how-to-use-pgp/">如何使用 PGP</a> 指南涵盖密钥生成、加密和解密、密钥环管理和最佳实践。</li>
<li><strong>了解剪贴板加密</strong>——了解如何通过 <a href="/zh-CN/docs/clipboard-encryption/">PGP 剪贴板加密</a>直接从剪贴板加密和解密文本。</li>
<li><strong>了解工具</strong>——了解 <a href="/zh-CN/docs/pgp-vs-gpg/">PGP 与 GPG 的区别</a>，为您的工作流选择合适的工具。</li>
</ol>

<p>PGP 加密保护敏感通信已超过三十年。借助现代工具和标准，它比以往任何时候都更易于使用。</p>
`
};

export default doc;
