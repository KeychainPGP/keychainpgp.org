import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP 剪贴板加密：剪贴板优先的安全消息方案',
	description: '了解 PGP 剪贴板加密的工作原理、为什么它在日常 OPSEC 中优于文件加密，以及 KeychainPGP 如何使用剪贴板在任何应用中加密消息。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: '什么是剪贴板加密？', level: 2 },
		{ id: 'why-clipboard-first', text: '为什么选择剪贴板优先？', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'KeychainPGP 如何使用剪贴板', level: 2 },
		{ id: 'the-encryption-workflow', text: '加密工作流', level: 3 },
		{ id: 'decryption-in-reverse', text: '反向解密', level: 3 },
		{ id: 'security-considerations', text: '安全注意事项', level: 2 },
		{ id: 'clipboard-history-and-managers', text: '剪贴板历史记录和管理器', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: '30 秒后自动清除', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: '内存管理和清零', level: 3 },
		{ id: 'opsec-mode', text: 'OPSEC 模式', level: 2 },
		{ id: 'window-title-disguise', text: '窗口标题伪装', level: 3 },
		{ id: 'ram-only-keys', text: '仅内存密钥', level: 3 },
		{ id: 'panic-wipe', text: '紧急销毁', level: 3 },
		{ id: 'tor-proxy-support', text: 'Tor 代理支持', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: '剪贴板加密与文件加密', level: 2 },
		{ id: 'threat-model', text: '威胁模型', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: '剪贴板加密能防范什么', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: '剪贴板加密不能防范什么', level: 3 },
		{ id: 'best-practices', text: 'PGP 剪贴板加密最佳实践', level: 2 }
	],
	html: `
<h1>PGP 剪贴板加密</h1>

<h2 id="what-is-clipboard-encryption">什么是剪贴板加密？</h2>

<p>PGP 剪贴板加密是一种直接从操作系统剪贴板读写来加密和解密文本的方法，而不是操作存储在磁盘上的文件。您不必将明文消息保存到 <code>.txt</code> 文件、传给命令行工具、再获取加密的 <code>.asc</code> 文件，而是简单地复制文本、通过键盘快捷键触发加密，然后将加密后的 PGP 消息粘贴到任何地方。剪贴板同时充当输入和输出缓冲区，使加密成为任何基于文本的工作流的无缝组成部分。这种方式是 <a href="/zh-CN/pgp-online-encrypt/">KeychainPGP</a> 在桌面上运行的基础，也是它能够与任何支持复制粘贴的应用集成的原因——电子邮件客户端、聊天应用、笔记工具、网页表单等。</p>

<p>如果您是 PGP 新手，请先阅读<a href="/zh-CN/docs/what-is-pgp/">什么是 PGP？</a>了解底层密码学概念，然后再深入了解剪贴板特定的工作流。</p>

<h2 id="why-clipboard-first">为什么选择剪贴板优先？</h2>

<p>像 GnuPG 这样的传统 PGP 工具是围绕文件设计的。您将文件传给 <code>gpg --encrypt</code>，得到一个加密文件，然后手动传输。这种模式在 1990 年代 PGP 主要用于电子邮件附件和文件归档时是有意义的。但在今天，当大部分敏感通信发生在网页平台、即时消息应用和不暴露文件系统接口的服务中时，这种模式就不太适用了。</p>

<p>剪贴板优先的方法一次解决了几个问题：</p>

<ul>
<li><strong>应用无关性。</strong>由于剪贴板是操作系统级别的抽象，剪贴板加密可与任何应用配合使用。您不会被锁定在特定的电子邮件客户端、浏览器扩展或插件生态系统中。如果您能复制粘贴，就能加密。</li>
<li><strong>磁盘上没有明文文件。</strong>文件加密必然会在文件系统上创建明文痕迹——原始未加密文件、临时文件、编辑器交换文件，可能还有解密后的输出。每一个都是取证隐患。剪贴板加密将明文仅保留在易失性内存中。</li>
<li><strong>更少的摩擦。</strong>从"我想加密这个"到"它已经加密了"之间的步骤越少，用户实际加密消息的可能性就越大。三步工作流（复制、快捷键、粘贴）比基于文件的流程摩擦小得多。</li>
<li><strong>与现代通信兼容。</strong>网页邮件、Signal 桌面版、Slack、Discord、Matrix 客户端——这些工具都不原生支持 PGP，但都支持粘贴文本。PGP 剪贴板加密弥合了这一差距，无需协议级别的集成。</li>
</ul>

<p>有关使用此工作流的分步指南，请参阅<a href="/zh-CN/docs/how-to-use-pgp/">如何使用 PGP</a>。</p>

<h2 id="how-keychainpgp-uses-the-clipboard">KeychainPGP 如何使用剪贴板</h2>

<p>KeychainPGP 从一开始就围绕剪贴板优先的理念构建。它不是将剪贴板访问作为文件加密工具上的便利功能，而是整个架构——从密码学管道到用户界面——都假定剪贴板是主要数据通道。</p>

<h3 id="the-encryption-workflow">加密工作流</h3>

<p>使用 KeychainPGP 加密消息的过程分为三个步骤：</p>

<ol>
<li><strong>复制</strong>您的明文消息，来自任何应用（电子邮件草稿、聊天窗口、文本编辑器、网页表单）。</li>
<li><strong>按下 <code>Ctrl+Shift+E</code></strong>（默认全局快捷键）。KeychainPGP 读取剪贴板内容，使用选定收件人的公钥加密文本，并将 ASCII-armored 格式的 PGP 加密文本写回剪贴板。</li>
<li><strong>粘贴</strong>加密消息到目标位置。粘贴的内容是以 <code>-----BEGIN PGP MESSAGE-----</code> 开头的标准 OpenPGP ASCII-armored 块，可被任何兼容 OpenPGP 的工具解密。</li>
</ol>

<p>在后台，KeychainPGP 使用 <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> 库——一个现代的 Rust 语言 OpenPGP 标准实现。密钥默认使用 Ed25519 进行签名和 X25519 进行加密——这些椭圆曲线算法以紧凑的密钥尺寸和快速操作提供强大的安全性。没有算法选择对话框，也不需要决定密钥大小。密码学从安装时起就是安全的。</p>

<h3 id="decryption-in-reverse">反向解密</h3>

<p>解密与加密流程相反。当您收到 PGP 加密消息时，复制整个 armored 块，按 <code>Ctrl+Shift+D</code>（默认解密快捷键），KeychainPGP 会用解密后的明文替换剪贴板内容。然后您可以将其粘贴到任何应用中阅读。解密文本仅存在于内存和剪贴板缓冲区中，剪贴板在可配置的延迟后会自动清除。</p>

<h2 id="security-considerations">安全注意事项</h2>

<p>使用剪贴板作为数据通道引入了特定的安全考虑，KeychainPGP 通过多种防御机制来应对。</p>

<h3 id="clipboard-history-and-managers">剪贴板历史记录和管理器</h3>

<p>现代操作系统和第三方工具通常会维护剪贴板历史记录。Windows 10 及更高版本包含内置的剪贴板历史记录功能（<code>Win+V</code>）。macOS 不原生维护历史记录，但 Alfred、Raycast 和 Paste 等流行工具会这样做。在 Linux 上，CopyQ、Clipman 和 GPaste 等剪贴板管理器很常见。</p>

<p>这些剪贴板管理器可以捕获加密前的明文和解密后的输出，完全抵消加密的效果。使用 PGP 剪贴板加密时，您应该：</p>

<ul>
<li>在操作系统上禁用剪贴板历史记录（在 Windows 上，转到"设置 > 系统 > 剪贴板"并关闭"剪贴板历史记录"）。</li>
<li>在处理敏感内容的设备上避免使用第三方剪贴板管理器，或在管理器允许的情况下配置排除规则。</li>
<li>依赖 KeychainPGP 内置的自动清除功能来最小化暴露窗口。</li>
</ul>

<h3 id="auto-clear-after-30-seconds">30 秒后自动清除</h3>

<p>KeychainPGP 在将解密明文写入剪贴板后 30 秒自动清除剪贴板。此延迟可在应用设置中配置。自动清除确保解密内容不会无限期地留在剪贴板中，降低后续粘贴操作或剪贴板管理器在您读完后很久还能捕获敏感文本的风险。</p>

<p>默认的 30 秒延迟是可用性和安全性之间的折衷。它给您足够的时间将解密文本粘贴到需要的地方，同时限制明文可访问的时间窗口。对于高安全环境，您可以将此延迟缩短到最少 5 秒。</p>

<h3 id="memory-handling-and-zeroization">内存管理和清零</h3>

<p>剪贴板加密意味着敏感数据——私钥、密码短语、解密明文——驻留在进程内存中。KeychainPGP 使用 Rust 编写，利用 Sequoia-PGP 的析构时清零保证。当一个秘密值离开其作用域时，其内存在释放前会被零覆盖。这不是尽力而为的擦除；Rust 的所有权模型保证清零析构器确定性地运行。结合 <code>zeroize</code> crate 的编译器屏障（防止优化器消除覆写操作），这提供了强有力的保证：秘密在使用后不会持续留在内存中。</p>

<p>这与使用垃圾回收语言（Java、Python、JavaScript）编写的工具形成对比，在那些语言中秘密数据可能无限期地留在内存中，直到垃圾回收器回收并（可能）覆盖它们。</p>

<h2 id="opsec-mode">OPSEC 模式</h2>

<p>对于在敌对环境中操作的用户——与消息源通信的记者、受监视的活动人士、处理敏感披露的安全研究人员——KeychainPGP 包含一个 OPSEC 模式，将应用的安全态势提升到默认设置之上。</p>

<h3 id="window-title-disguise">窗口标题伪装</h3>

<p>启用 OPSEC 模式后，KeychainPGP 会将窗口标题更改为无害的名称，如"计算器"或"笔记"。这可以防止偶然的窥视，并欺骗记录窗口标题的自动截屏工具。检查截图或视频录像的攻击者不会在任何窗口标题栏中看到"KeychainPGP"或"PGP"。</p>

<h3 id="ram-only-keys">仅内存密钥</h3>

<p>在 OPSEC 模式下，私钥完全保留在内存中，永远不会写入文件系统。这意味着如果设备被没收或磁盘被镜像，没有密钥文件可供恢复。代价是每次启动应用时都需要重新导入密钥，通常从硬件令牌、QR 码或从另一设备安全传输。</p>

<h3 id="panic-wipe">紧急销毁</h3>

<p>紧急销毁按钮（或其关联的键盘快捷键）会立即将内存中的所有密码学材料清零、清除剪贴板，并可选择关闭应用。这是为需要立即销毁所有敏感状态的情况设计的——例如，如果您预期设备即将被没收。清除是即时且不可逆的；任何未在其他地方备份的仅内存密钥将永久丢失。</p>

<h3 id="tor-proxy-support">Tor 代理支持</h3>

<p>OPSEC 模式包含通过 Tor SOCKS 代理路由密钥服务器查询和任何其他网络流量的能力。这防止您的 ISP 或网络级别的攻击者观察到您正在获取 PGP 公钥，这可能作为识别您通信伙伴的元数据。当 Tor 代理支持启用时，KeychainPGP 的所有出站连接都通过配置的 SOCKS5 代理路由（如果 Tor 在本地运行，通常是 <code>127.0.0.1:9050</code>）。</p>

<h2 id="clipboard-encryption-vs-file-encryption">剪贴板加密与文件加密</h2>

<p>PGP 剪贴板加密和文件加密使用相同的底层 OpenPGP 标准，生成可互操作的密文。区别在于工作流及由此产生的安全属性。</p>

<table>
<tr><th>方面</th><th>剪贴板加密</th><th>文件加密</th></tr>
<tr><td><strong>输入/输出</strong></td><td>系统剪贴板（易失性内存）</td><td>磁盘文件（持久存储）</td></tr>
<tr><td><strong>明文痕迹</strong></td><td>磁盘上没有；延迟后从剪贴板清除</td><td>原始文件、临时文件、编辑器备份可能残留</td></tr>
<tr><td><strong>应用支持</strong></td><td>任何支持复制/粘贴的应用</td><td>需要文件系统访问或 CLI 集成</td></tr>
<tr><td><strong>工作流步骤</strong></td><td>3 步（复制、快捷键、粘贴）</td><td>5+ 步（保存文件、运行 CLI、指定输出、打开输出、传输）</td></tr>
<tr><td><strong>批量处理</strong></td><td>不适合大量处理</td><td>适合批量加密文件和归档</td></tr>
<tr><td><strong>大数据量</strong></td><td>限于剪贴板可容纳的文本</td><td>可处理任意大小的文件</td></tr>
<tr><td><strong>取证痕迹</strong></td><td>最小化（仅内存）</td><td>显著（磁盘痕迹、文件系统元数据）</td></tr>
</table>

<p>剪贴板加密是日常通信中消息级加密的最佳选择。当您需要加密二进制数据、大型归档文件，或收件人期望 <code>.pgp</code> 附件时，仍需使用文件加密。KeychainPGP 支持两种模式，但剪贴板工作流是其最大优势所在。</p>

<h2 id="threat-model">威胁模型</h2>

<p>了解 PGP 剪贴板加密能防范什么和不能防范什么，对于做出明智的安全决策至关重要。没有单一工具能覆盖所有威胁。</p>

<h3 id="what-clipboard-encryption-protects-against">剪贴板加密能防范什么</h3>

<ul>
<li><strong>网络监控。</strong>在离开设备前加密的消息对任何监控网络的人——您的 ISP、公共 Wi-Fi 窃听者或进行深度包检测的国家行为者——都是不透明的。PGP 密文可以穿越任意数量的不受信网络而不会泄露明文。</li>
<li><strong>电子邮件和消息拦截。</strong>如果攻击者访问了您的邮件服务器、聊天提供商的数据库或传输中的消息，他们只能得到密文。没有收件人的私钥，内容在计算上不可能恢复。</li>
<li><strong>存储泄露。</strong>如果攻击者获得了您的邮件归档、聊天记录或云备份的副本，PGP 加密的消息仍然受到保护。对于剪贴板加密来说这尤其重要，因为明文从不接触磁盘。</li>
<li><strong>元数据减少（配合 OPSEC 模式）。</strong>虽然 PGP 不加密邮件头或消息元数据，但 OPSEC 模式中的 Tor 代理支持和窗口标题伪装等功能减少了围绕您加密使用的可观察元数据。</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">剪贴板加密不能防范什么</h3>

<ul>
<li><strong>带有键盘记录器的终端入侵。</strong>如果攻击者在您的设备上安装了键盘记录器或屏幕捕获恶意软件，他们可以在加密前或解密后捕获明文。剪贴板加密假定终端是可信的。如果您的设备在操作系统层面被入侵，没有应用层加密能够帮助。</li>
<li><strong>对解锁设备的物理访问。</strong>如果攻击者在设备解锁且 KeychainPGP 运行（密钥已加载）时获得物理访问，他们可以解密消息。仅内存密钥和紧急销毁按钮在一定程度上缓解了这个问题，但它们需要您在攻击者获得访问之前采取行动。</li>
<li><strong>私钥泄露。</strong>如果您的私钥被窃取（从备份、被入侵的设备或弱密码短语），所有加密到该密钥的消息——过去和将来——都会被泄露。使用强密码短语，将私钥保存在尽可能少的设备上。</li>
<li><strong>流量分析。</strong>PGP 加密消息内容，而不是通信模式。能观察您网络流量的攻击者可以确定您正在通信、频率如何，以及可能与谁通信（基于密钥服务器查询），即使无法阅读内容。OPSEC 模式中的 Tor 代理支持部分解决了这个问题。</li>
</ul>

<p>有关这些概念的更广泛介绍，<a href="/zh-CN/docs/pgp-for-beginners/">PGP 入门指南</a>涵盖了公钥密码学和密钥管理的基础知识。</p>

<h2 id="best-practices">PGP 剪贴板加密最佳实践</h2>

<p>遵循以下实践将最大化 PGP 剪贴板加密的安全收益：</p>

<ol>
<li><strong>禁用剪贴板历史记录。</strong>禁用操作系统级别的剪贴板历史记录，并从处理加密通信的设备上移除第三方剪贴板管理器。</li>
<li><strong>保持自动清除开启。</strong>不要禁用剪贴板自动清除计时器。将其缩短到您认为可用的最短间隔。对于大多数工作流来说，五到十五秒就足够了。</li>
<li><strong>在合理的情况下使用 OPSEC 模式。</strong>如果您在一个使用加密本身就是风险的环境中操作，请启用 OPSEC 模式以获得窗口标题伪装、仅内存密钥和 Tor 路由。</li>
<li><strong>通过带外渠道验证收件人密钥。</strong>在向某人的公钥加密消息之前，通过单独的渠道验证密钥指纹（面对面、语音通话、通过已知密钥签名的消息）。这可以防止密钥分发中的中间人攻击。</li>
<li><strong>使用强密码短语。</strong>用既长又难以猜测的密码短语保护您的私钥。四到六个随机生成的单词组成的密码短语比短的混合字符串更安全也更易于输入。</li>
<li><strong>保持终端清洁。</strong>剪贴板加密假定设备是可信的。使用最新的操作系统，避免安装不受信的软件，并使用全盘加密来保护静态数据。</li>
<li><strong>优先使用 Ed25519/X25519 密钥。</strong>KeychainPGP 默认使用这些现代椭圆曲线算法是有充分理由的。它们快速、紧凑，并能抵御影响旧 RSA 和 DSA 密钥的一系列实现级攻击。如果您正在从旧密钥迁移，请生成新的 Ed25519/X25519 密钥对并与联系人过渡。</li>
<li><strong>测试您的工作流。</strong>在依赖剪贴板加密进行关键通信之前，练习完整的流程：生成密钥、交换公钥、加密测试消息、在对方解密。熟悉流程可以减少压力下出错的风险。</li>
</ol>

<p>PGP 剪贴板加密不是万能药，但结合良好的操作安全实践，它为加密通信提供了一条实用、低摩擦的路径，与您已在使用的工具无缝集成。<a href="/zh-CN/pgp-online-encrypt/">在浏览器中试用 KeychainPGP</a>，亲身体验剪贴板优先的工作流。</p>
`
};

export default doc;
