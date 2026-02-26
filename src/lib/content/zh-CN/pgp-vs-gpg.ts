import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP 与 GPG：PGP 和 GPG 有什么区别？',
	description: '了解 PGP 和 GPG 的区别。对比 Pretty Good Privacy、GnuPG 和 OpenPGP 标准，找到适合您的加密工具。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: '有什么区别？', level: 2 },
		{ id: 'what-is-pgp', text: '什么是 PGP？', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: '什么是 GPG (GnuPG)？', level: 2 },
		{ id: 'what-is-openpgp', text: '什么是 OpenPGP？', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'PGP 与 GPG 对比表', level: 2 },
		{ id: 'key-differences-explained', text: '关键区别详解', level: 2 },
		{ id: 'which-should-you-use', text: '您应该使用哪个？', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'KeychainPGP 的定位', level: 2 },
		{ id: 'frequently-asked-questions', text: '常见问题', level: 2 }
	],
	html: `
<h1>PGP 与 GPG：PGP 和 GPG 有什么区别？</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">PGP 和 GPG 有什么区别？</h2>

<p>PGP 和 GPG 的区别在于它们的起源和许可证。<strong>PGP</strong>（Pretty Good Privacy）是 Phil Zimmermann 于 1991 年创建的原始专有加密程序。<strong>GPG</strong>（GNU Privacy Guard，也称为 GnuPG）是同一概念的免费开源重新实现，作为 GNU 项目的一部分开发。两个程序都实现了 <strong>OpenPGP</strong> 标准，这意味着它们生成兼容的加密消息，可以使用彼此的密钥。在实际使用中，GPG 是今天大多数人使用的工具，因为它是免费的、积极维护的，并且可在所有主要操作系统上使用。如果您是加密新手，我们的<a href="/zh-CN/docs/pgp-for-beginners/">PGP 入门指南</a>将逐步介绍基本概念。</p>

<h2 id="what-is-pgp">什么是 PGP？</h2>

<p>PGP 代表 <strong>Pretty Good Privacy</strong>。Phil Zimmermann 于 1991 年编写了第一个版本，作为面向活动人士和普通公民的免费工具发布，为需要强加密的人提供帮助。该软件将对称密钥加密与公钥密码学相结合。</p>

<p>经过三年的联邦调查（1996 年撤销），Zimmermann 创立了 PGP Inc.。该公司几经易手：1997 年被 Network Associates 收购，2002 年成为 PGP Corporation，2010 年被 Symantec（现为 Broadcom）收购。如今，PGP 作为主要面向企业的商业产品套件而存在。</p>

<p>要了解更多关于底层技术的信息，请参阅我们关于<a href="/zh-CN/docs/what-is-pgp/">什么是 PGP 及其工作原理</a>的完整文章。</p>

<h2 id="what-is-gpg-gnupg">什么是 GPG (GnuPG)？</h2>

<p>GPG，即 <strong>GNU Privacy Guard (GnuPG)</strong>，是 OpenPGP 标准的免费开源实现。Werner Koch 在德国政府资助下于 1997 年启动了该项目，并于 1999 年发布了 1.0 版本。GnuPG 的创建专门是为了提供专有 PGP 软件的完全免费替代品。</p>

<p>GnuPG 是 GNU 项目的一部分，采用 GNU 通用公共许可证（GPL）授权。它默认包含在大多数 Linux 发行版中。<code>gpg</code> 命令行工具是大多数开发者和系统管理员交互的界面。有关可用工具的概览，请参阅我们的<a href="/zh-CN/docs/pgp-tools/">PGP 工具对比</a>。</p>

<h2 id="what-is-openpgp">什么是 OpenPGP？</h2>

<p><strong>OpenPGP</strong> 既不是产品也不是软件。它是一个开放标准，定义了 PGP 兼容工具必须遵循的消息格式、密钥格式和密码学程序。IETF 于 1998 年发布了原始规范 <strong>RFC 2440</strong>，最广泛引用的版本是 <strong>RFC 4880</strong>（2007 年）。2024 年的重大更新 <strong>RFC 9580</strong> 通过支持 Ed25519 和 AEAD 加密来现代化标准。</p>

<p>OpenPGP 的存在使互操作成为可能。因为 PGP 和 GPG 实现了相同的标准，用 GPG 加密的消息可以被 PGP 解密，反之亦然。</p>

<h2 id="pgp-vs-gpg-comparison-table">PGP 与 GPG 对比表</h2>

<table>
<tr><th>特征</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>类型</strong></td><td>商业软件</td><td>免费/开源软件</td><td>开放标准</td></tr>
<tr><td><strong>许可证</strong></td><td>专有</td><td>GPL（免费）</td><td>IETF 规范</td></tr>
<tr><td><strong>费用</strong></td><td>付费许可</td><td>免费</td><td>不适用</td></tr>
<tr><td><strong>平台</strong></td><td>Windows、macOS</td><td>Windows、macOS、Linux、BSD</td><td>不适用</td></tr>
<tr><td><strong>内置 GUI</strong></td><td>是（企业控制台）</td><td>否（可用第三方 GUI）</td><td>不适用</td></tr>
<tr><td><strong>源代码可用</strong></td><td>否</td><td>是</td><td>公开标准</td></tr>
</table>

<h2 id="key-differences-explained">关键区别详解</h2>

<h3>许可证和费用</h3>

<p>PGP 是以商业许可证销售的专有软件。GPG 以 GPL 许可证发布，这意味着任何人都可以免费下载、使用、修改和重新分发。对于个人、小团队和开源项目来说，GPG 在成本方面是显而易见的选择。</p>

<h3>平台支持</h3>

<p>GnuPG 可在几乎所有 Unix 系统上运行，并提供 Windows 和 macOS 的官方版本。对于跨平台需求，像 KeychainPGP 这样的现代工具从单一代码库提供 Windows、macOS、Linux 和 Android 的原生版本。</p>

<h3>用户体验</h3>

<p>商业 PGP 包含用于企业部署的图形界面。GnuPG 从根本上来说是一个命令行工具。像 KeychainPGP 这样的工具提供原生图形界面，可以处理密钥管理、加密、解密和签名，无需记住命令行选项。您可以使用我们的<a href="/zh-CN/pgp-online-encrypt/">在线 PGP 加密工具</a>直接在浏览器中尝试 PGP 加密。</p>

<h2 id="which-should-you-use">您应该使用哪个？</h2>

<ul>
<li><strong>拥有现有 Broadcom/Symantec 基础设施的企业：</strong>商业 PGP 可能是阻力最小的路径。</li>
<li><strong>开发者和系统管理员：</strong>GnuPG 是标准工具，默认安装在大多数服务器上。</li>
<li><strong>需要 GUI 的隐私用户：</strong>考虑使用像 KeychainPGP 这样的现代 OpenPGP 应用。</li>
<li><strong>网页或快速加密需求：</strong><a href="/zh-CN/pgp-online-encrypt/">在线 PGP 加密工具</a>无需安装即可处理临时任务。</li>
</ul>

<h2 id="where-keychainpgp-fits-in">KeychainPGP 的定位</h2>

<p><a href="/">KeychainPGP</a> 是一个现代的开源桌面应用，使用 <strong>Sequoia-PGP</strong>（一个完全用 Rust 从头编写的 OpenPGP 库）实现 OpenPGP 标准。它既不是 PGP（商业产品）也不是 GPG（GnuPG）。它是在 OpenPGP 生态系统中与两者共存的独立实现。</p>

<p>考虑 KeychainPGP 的主要理由：</p>

<ul>
<li><strong>跨平台：</strong>Windows、macOS、Linux 和 Android 原生版本，加上网页应用和 CLI</li>
<li><strong>现代密码学：</strong>基于 Sequoia-PGP 构建，支持 Curve25519/Ed25519 和 AEAD</li>
<li><strong>开源：</strong>MIT / Apache-2.0 双许可证，完全可审计</li>
<li><strong>用户友好：</strong>图形界面配合剪贴板工作流和全局快捷键</li>
<li><strong>用于自动化的 CLI：</strong><code>keychainpgp</code> CLI 支持密钥生成、加密、解密、签名、验证和密钥环管理</li>
<li><strong>兼容 OpenPGP：</strong>密钥和消息与 GPG、PGP 及任何其他 OpenPGP 工具互操作</li>
</ul>

<h2 id="frequently-asked-questions">常见问题</h2>

<h3>GPG 和 PGP 是一回事吗？</h3>

<p>不是。GPG (GnuPG) 和 PGP 是由不同人创建的不同软件。PGP 由 Phil Zimmermann 于 1991 年创建，现为 Broadcom 的商业产品。GPG 由 Werner Koch 于 1997 年创建，作为免费开源替代品。两者都实现 OpenPGP 标准，因此功能上兼容。</p>

<h3>GPG 和 PGP 的密钥可以互相使用吗？</h3>

<p>可以。GPG 和 PGP 使用 IETF 标准定义的 OpenPGP 密钥格式。您可以从 GPG 导出公钥，然后导入到 PGP 或任何其他兼容 OpenPGP 的工具（如 KeychainPGP）中。</p>

<h3>2026 年 GPG 还安全吗？</h3>

<p>GnuPG 仍然是一个安全且积极维护的工具。使用现代密钥类型（如 Ed25519），保持软件更新，并遵循密钥管理最佳实践。分步指南请参阅我们的<a href="/zh-CN/docs/pgp-for-beginners/">PGP 入门指南</a>。</p>

<h3>OpenPGP 是什么意思？</h3>

<p>OpenPGP 是 IETF 发布的开放标准，定义了 PGP 兼容加密的工作方式。它指定了消息格式、密钥格式、算法要求和签名结构。</p>

<h3>使用 KeychainPGP 需要安装 PGP 或 GPG 吗？</h3>

<p>不需要。KeychainPGP 是独立应用，不依赖 PGP 或 GnuPG 的安装。它使用 Sequoia-PGP 库——一个用 Rust 编写的 OpenPGP 标准独立实现。但是，在 KeychainPGP 中创建的密钥和加密消息完全兼容 GPG 和 PGP。</p>
`
};

export default doc;
