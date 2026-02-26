import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: '免费在线 PGP 加密工具',
	heroSubtitle: '直接在浏览器中使用 OpenPGP 加密和解密消息。无需安装、无需账户、数据不会发送到任何服务器。',
	trustLine: '免费开源。MIT / Apache-2.0 许可证。无遥测追踪。',
	ctaOpen: '在浏览器中打开 PGP 工具',
	ctaHow: '工作原理',
	whatIsTitle: '什么是 PGP 加密？',
	whatIsText: 'PGP（Pretty Good Privacy）是加密消息、电子邮件和文件的标准方案。它使用公钥密码学——您分享一个公钥，任何人都可以用它来加密发给您的消息，而只有您的私钥才能解密这些消息。PGP 诞生于 1991 年，被记者、安全研究人员、活动人士以及全球数百万用户广泛使用。KeychainPGP 通过现代化的界面和基于剪贴板的工作流，让每个人都能轻松使用 PGP——无需命令行、无需配置、无需复杂操作。',
	howToTitle: '如何在线使用 PGP 加密消息',
	steps: [
		{ title: '打开在线 PGP 工具', text: '访问 KeychainPGP 网页应用。它完全在浏览器中加载——无需安装或注册账户。所有操作通过 WebAssembly 在本地完成。' },
		{ title: '生成或导入 PGP 密钥', text: '创建新的 Ed25519 + X25519 密钥对（最现代、最安全的选项），或导入 ASCII 格式的现有 PGP 密钥。' },
		{ title: '导入收件人的公钥', text: '在"密钥"选项卡中粘贴联系人的公钥来添加对方。该密钥将用于加密您的消息。' },
		{ title: '输入您的消息', text: '转到"加密"选项卡，输入或粘贴您想要保护的消息。' },
		{ title: '选择收件人并加密', text: '从密钥列表中选择收件人，点击"加密到剪贴板"。加密后的 PGP 消息会立即被复制。' },
		{ title: '发送加密消息', text: '将加密消息粘贴到任何电子邮件、聊天或即时通讯应用中。只有预期的收件人才能用其私钥解密该消息。' }
	],
	featuresTitle: '为什么选择 KeychainPGP 进行 PGP 加密？',
	features: [
		{ icon: '🌐', title: '100% 浏览器端运行', text: '所有操作通过由 Rust 编译的 WebAssembly 在浏览器中本地完成。零服务器通信。您的消息和密钥永远不会离开您的设备。' },
		{ icon: '🔒', title: '现代密码学', text: '默认使用 Ed25519 + X25519 椭圆曲线密钥。由 Sequoia-PGP 提供支持——一个不依赖 OpenSSL 的 Rust 语言 OpenPGP 实现。' },
		{ icon: '💻', title: '跨平台', text: '提供网页应用，以及 Windows、macOS、Linux 和 Android 原生应用。随时随地使用您的密钥。' },
		{ icon: '📂', title: '开源', text: '完全可审计的代码，采用 MIT / Apache-2.0 许可证。无遥测、无追踪、无账户。在 GitHub 上查看源代码。' },
		{ icon: '📋', title: '剪贴板优先', text: '复制文本，通过快捷键 (Ctrl+Shift+E) 加密，粘贴加密后的消息。适用于任何应用——电子邮件、聊天、笔记，无处不在。' },
		{ icon: '⚡', title: '零配置', text: '无需选择算法、无需决定密钥长度、无需配置文件。默认即安全。生成密钥后几秒钟即可开始加密。' }
	],
	desktopTitle: '获取桌面应用，满足日常使用',
	desktopText: '网页应用非常适合快速加密，但桌面应用提供完整的 PGP 体验和额外的安全功能：',
	desktopFeatures: [
		'全局快捷键——Ctrl+Shift+E 加密，Ctrl+Shift+D 解密，可在任何应用中使用',
		'系统托盘——始终在任务栏中可用，在后台静默运行',
		'自动清除剪贴板——解密后的文本会在 30 秒后自动从剪贴板中删除',
		'OPSEC 模式——隐藏窗口标题、密钥仅存于内存、紧急销毁按钮',
		'系统凭据存储——密钥安全存储在 Windows 凭据管理器、macOS 钥匙串或 Linux Secret Service 中',
		'Android 应用——相同的界面在移动端使用，支持 QR 码跨设备同步密钥',
		'CLI——keychainpgp 命令行工具，用于脚本和自动化'
	],
	ctaDownload: '下载 KeychainPGP',
	ctaAllPlatforms: '所有平台',
	learnMoreTitle: '了解更多关于 PGP 加密的知识',
	learnMoreLinks: [
		{ href: '/zh-CN/docs/what-is-pgp/', title: '什么是 PGP？', text: '关于 Pretty Good Privacy、公钥密码学和数字签名的完整指南。' },
		{ href: '/zh-CN/docs/how-to-use-pgp/', title: '如何使用 PGP', text: '生成密钥、加密消息和验证签名的分步教程。' },
		{ href: '/zh-CN/docs/pgp-vs-gpg/', title: 'PGP 与 GPG 的区别', text: '了解 PGP、GPG (GnuPG) 和 OpenPGP 标准之间的区别。' },
		{ href: '/zh-CN/docs/pgp-for-beginners/', title: 'PGP 入门指南', text: '关于 PGP 加密的一切，用通俗易懂的语言解释。' },
		{ href: '/zh-CN/docs/clipboard-encryption/', title: '剪贴板加密', text: 'PGP 剪贴板加密的工作原理、安全注意事项和 OPSEC 功能。' },
		{ href: '/zh-CN/blog/best-pgp-tools-2026/', title: '2026 年最佳 PGP 工具', text: '最佳 PGP 加密软件的全面对比和排名。' }
	]
};
