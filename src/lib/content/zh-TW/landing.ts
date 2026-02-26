import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: '免費線上 PGP 加密工具',
	heroSubtitle: '直接在瀏覽器中使用 OpenPGP 加密和解密訊息。無需安裝、無需帳號、無任何資料傳送至伺服器。',
	trustLine: '免費且開源。MIT / Apache-2.0 授權。無任何遙測。',
	ctaOpen: '在瀏覽器中開啟 PGP 工具',
	ctaHow: '運作方式',
	whatIsTitle: '什麼是 PGP 加密？',
	whatIsText: 'PGP（Pretty Good Privacy）是加密訊息、電子郵件和檔案的業界標準。它使用公開金鑰密碼學 — 您分享一把任何人都可以用來為您加密訊息的公開金鑰，而只有您的私密金鑰才能解密。PGP 自 1991 年問世以來，已被記者、資安研究人員、社運人士和全球數百萬用戶使用。KeychainPGP 透過現代化介面和剪貼簿工作流程讓所有人都能輕鬆使用 PGP — 無需命令列、無需設定、無需複雜操作。',
	howToTitle: '如何在線上使用 PGP 加密訊息',
	steps: [
		{ title: '開啟線上 PGP 工具', text: '前往 KeychainPGP 網頁應用程式。它完全在您的瀏覽器中載入 — 無需安裝或帳號。所有操作都透過 WebAssembly 在本機執行。' },
		{ title: '產生或匯入 PGP 金鑰', text: '建立新的 Ed25519 + X25519 金鑰對（最現代且安全的選項），或匯入現有的 ASCII 格式 PGP 金鑰。' },
		{ title: '匯入收件人的公開金鑰', text: '將聯絡人的公開金鑰貼到「金鑰」分頁中。這把金鑰將用於加密您的訊息。' },
		{ title: '輸入您的訊息', text: '前往「加密」分頁，輸入或貼上您想要保護的訊息。' },
		{ title: '選擇收件人並加密', text: '從金鑰清單中選擇收件人，然後點擊「加密至剪貼簿」。PGP 加密訊息將立即複製到剪貼簿。' },
		{ title: '傳送加密訊息', text: '將加密訊息貼到任何電子郵件、聊天或通訊應用程式中。只有目標收件人才能使用其私密金鑰解密。' }
	],
	featuresTitle: '為什麼選擇 KeychainPGP 進行 PGP 加密？',
	features: [
		{ icon: '🌐', title: '100% 瀏覽器運行', text: '所有操作都透過從 Rust 編譯的 WebAssembly 在瀏覽器本機執行。零伺服器通訊。您的訊息和金鑰永遠不會離開您的裝置。' },
		{ icon: '🔒', title: '現代密碼學', text: '預設使用 Ed25519 + X25519 橢圓曲線金鑰。由 Sequoia-PGP 驅動，一個不依賴 OpenSSL 的 Rust OpenPGP 實作。' },
		{ icon: '💻', title: '跨平台', text: '提供網頁應用程式，以及 Windows、macOS、Linux 和 Android 原生應用程式。隨時隨地使用您的金鑰。' },
		{ icon: '📂', title: '開放原始碼', text: '完整可審計的程式碼，MIT / Apache-2.0 授權。無遙測、無追蹤、無帳號。在 GitHub 上查看原始碼。' },
		{ icon: '📋', title: '剪貼簿優先', text: '複製文字，使用快捷鍵（Ctrl+Shift+E）加密，貼上加密訊息。適用於任何應用程式 — 電子郵件、聊天、筆記，無處不在。' },
		{ icon: '⚡', title: '零設定', text: '無需選擇演算法、無需決定金鑰大小、無需設定檔。開箱即安全。產生金鑰，幾秒內即可開始加密。' }
	],
	desktopTitle: '取得桌面應用程式以供日常使用',
	desktopText: '網頁應用程式非常適合快速加密，但桌面應用程式提供完整的 PGP 體驗和額外的安全功能：',
	desktopFeatures: [
		'全域快捷鍵 — Ctrl+Shift+E 加密，Ctrl+Shift+D 解密，在任何應用程式中使用',
		'系統匣 — 始終在工作列中可用，靜默在背景執行',
		'剪貼簿自動清除 — 解密文字在 30 秒後自動從剪貼簿中清除',
		'OPSEC 模式 — 偽裝視窗標題、金鑰僅存於記憶體中及緊急清除按鈕',
		'作業系統認證存放區 — 金鑰安全儲存在 Windows 認證管理員、macOS 鑰匙圈或 Linux Secret Service 中',
		'Android 應用程式 — 行動裝置上相同的介面，支援透過 QR code 在裝置間同步金鑰',
		'CLI — keychainpgp 命令列工具，用於腳本和自動化'
	],
	ctaDownload: '下載 KeychainPGP',
	ctaAllPlatforms: '所有平台',
	learnMoreTitle: '深入了解 PGP 加密',
	learnMoreLinks: [
		{ href: '/zh-TW/docs/what-is-pgp/', title: '什麼是 PGP？', text: 'Pretty Good Privacy、公開金鑰密碼學和數位簽章的完整指南。' },
		{ href: '/zh-TW/docs/how-to-use-pgp/', title: '如何使用 PGP', text: '產生金鑰、加密訊息和驗證簽章的逐步教學。' },
		{ href: '/zh-TW/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: '了解 PGP、GPG (GnuPG) 和 OpenPGP 標準之間的區別。' },
		{ href: '/zh-TW/docs/pgp-for-beginners/', title: 'PGP 入門指南', text: '關於 PGP 加密您需要知道的一切，以簡單易懂的方式說明。' },
		{ href: '/zh-TW/docs/clipboard-encryption/', title: '剪貼簿加密', text: 'PGP 剪貼簿加密的運作方式、安全考量和 OPSEC 功能。' },
		{ href: '/zh-TW/blog/best-pgp-tools-2026/', title: '2026 年最佳 PGP 工具', text: '最佳 PGP 加密軟體的完整評比和排名。' }
	]
};
