import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGP 文件',
	description: '全面了解 PGP 加密 — 從入門指南到進階主題，包括剪貼簿加密和金鑰管理。',
	intro: '關於 PGP 加密您需要知道的一切。無論您是初學者還是在尋找進階主題，這些指南涵蓋了所有要點。',
	docs: [
		{
			title: '什麼是 PGP？',
			description: '了解 PGP 加密的基礎知識 — 公開金鑰密碼學、數位簽章、信任網路及使用情境。',
			href: '/zh-TW/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: '如何使用 PGP',
			description: '逐步教學：產生金鑰、加密訊息、解密、數位簽章和金鑰分享。',
			href: '/zh-TW/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: '了解 PGP、GPG (GnuPG) 和 OpenPGP 標準之間的差異 — 歷史、實作和如何選擇。',
			href: '/zh-TW/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP 工具',
			description: 'PGP 工具總覽 — 桌面用戶端、CLI 工具、瀏覽器擴充功能和網頁解決方案。',
			href: '/zh-TW/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP 入門指南',
			description: 'PGP 新手？從這裡開始。用淺顯易懂的語言學習核心概念，並發送您的第一封加密訊息。',
			href: '/zh-TW/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: '剪貼簿加密',
			description: '掌握 PGP 剪貼簿工作流程 — 使用全域快捷鍵在任何應用程式中加密和解密文字。',
			href: '/zh-TW/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGP 部落格',
	description: '深入探討 PGP 加密工具、軟體比較和安全通訊最佳實踐的文章。',
	intro: '深入探討 PGP 加密工具、軟體比較和安全通訊最佳實踐的文章。',
	posts: [
		{
			title: '2026 年最佳 PGP 工具',
			description: '全面評比目前最佳的 PGP 加密工具 — 從桌面應用程式到線上解決方案。',
			href: '/zh-TW/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGP 軟體比較',
			description: 'PGP 軟體詳細比較 — 功能、安全性、平台支援和易用性。',
			href: '/zh-TW/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
