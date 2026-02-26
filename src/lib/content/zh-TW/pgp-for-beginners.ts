import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP 入門指南：簡單上手 PGP 加密的新手教學',
	description: '從零開始學習 PGP 加密。本新手指南解釋 PGP 的運作方式，帶您完成第一則加密訊息並介紹核心概念。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: '為什麼加密很重要', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: '簡單解釋什麼是 PGP', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: '您需要知道的核心概念', level: 2 },
		{ id: 'public-key-your-address', text: '公開金鑰：您的地址', level: 3 },
		{ id: 'private-key-your-password', text: '私密金鑰：您的密碼', level: 3 },
		{ id: 'encryption-vs-signing', text: '加密 vs 簽署', level: 3 },
		{ id: 'key-fingerprints', text: '金鑰指紋', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: '您的第一則 PGP 訊息', level: 2 },
		{ id: 'common-beginner-mistakes', text: '常見的新手錯誤', level: 2 },
		{ id: 'next-steps', text: '下一步', level: 2 },
		{ id: 'faq', text: '常見問題', level: 2 }
	],
	html: `
<h1>PGP 入門指南：簡單上手</h1>

<p>開始使用 PGP 比您想像的還容易。您產生一個金鑰對 — 一把公開、一把私密 — 將公開金鑰分享給想要通訊的對象，然後使用私密金鑰解密他們傳給您的訊息。您不需要安裝任何軟體就能嘗試。使用像 KeychainPGP 這樣的免費<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>，您可以在五分鐘內直接從瀏覽器加密第一則訊息。</p>

<h2 id="why-encryption-matters">為什麼加密很重要</h2>

<p>每天有數十億則訊息在網際網路上傳輸。電子郵件、聊天訊息、文件 — 大多數都以明文傳送，意味著任何截獲它們的人都可以閱讀。這包括網際網路服務提供商、公共 Wi-Fi 上的駭客，甚至政府監控計畫。</p>

<p><strong>資料外洩不是罕見事件。</strong>它們持續發生。如果您的訊息未加密，它們就以可讀的明文形式儲存在資料庫中，等待下一次外洩。</p>

<p>加密解決了這個問題。當您使用 PGP 加密訊息時，它會被打亂成無法辨識的亂碼。只有持有正確私密金鑰的人才能將其還原。</p>

<h2 id="what-is-pgp-explained-simply">簡單解釋什麼是 PGP</h2>

<p>PGP 代表 <strong>Pretty Good Privacy</strong>。由 Phil Zimmermann 於 1991 年創建，它已成為加密訊息和檔案的全球標準。</p>

<p>以下是理解 PGP 最簡單的方式。把它想成一個<strong>有投遞口的信箱</strong>。</p>

<p>想像街上有一個特殊的信箱。任何人都可以走過來，從投遞口塞進一封信。但一旦信件進去，只有您能打開它，因為只有您有信箱門的鑰匙。</p>

<ul>
<li><strong>信箱的投遞口</strong>就是您的<strong>公開金鑰</strong>。您把它給任何想要傳送私人訊息給您的人。分享它是安全的。</li>
<li><strong>信箱的鑰匙</strong>就是您的<strong>私密金鑰</strong>。您絕不與任何人分享。</li>
</ul>

<p>這就是所謂的<strong>非對稱加密</strong> — 一把鑰匙鎖定，另一把鑰匙解鎖。如需更深入的技術解釋，請閱讀我們的完整指南<a href="/zh-TW/docs/what-is-pgp/">什麼是 PGP</a>。</p>

<h2 id="key-concepts-you-need-to-know">您需要知道的核心概念</h2>

<h3 id="public-key-your-address">公開金鑰：您的地址</h3>

<p>您的公開金鑰就像您的郵寄地址。您自由分發它，讓人們可以寄東西給您。在 PGP 中，您分享公開金鑰，讓他人可以加密只有您才能讀取的訊息。</p>

<h3 id="private-key-your-password">私密金鑰：您的密碼</h3>

<p>您的私密金鑰就像您家大門的鑰匙。它是唯一能開啟以您的公開金鑰加密的訊息的東西。您<strong>絕不應該將私密金鑰分享</strong>給任何人。</p>

<h3 id="encryption-vs-signing">加密 vs 簽署</h3>

<p>PGP 可以做兩件事：<strong>加密</strong>和<strong>簽署</strong>。</p>

<ul>
<li><strong>加密</strong> — 將訊息打亂，使只有收件人才能閱讀。您使用收件人的公開金鑰加密，他們使用私密金鑰解密。</li>
<li><strong>簽署</strong> — 證明訊息來自您且未被篡改。您使用自己的私密金鑰簽署，任何擁有您公開金鑰的人都可以驗證簽章。</li>
</ul>

<h3 id="key-fingerprints">金鑰指紋</h3>

<p>金鑰指紋是唯一識別一把 PGP 金鑰的短字串。指紋用於<strong>驗證</strong>公開金鑰確實屬於您認為的那個人。請務必透過獨立的可信管道比對指紋。</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>當您看到 PGP 金鑰或加密訊息以 <code>-----BEGIN PGP MESSAGE-----</code> 開頭的文字區塊形式呈現時，那就是 <strong>ASCII armor</strong>。它只是將二進位資料編碼為可列印文字字元的方式，方便您在電子郵件、聊天視窗或網頁表單中複製貼上。</p>

<h2 id="your-first-pgp-message">您的第一則 PGP 訊息</h2>

<p>讓我們一步步用 <a href="https://keychainpgp.github.io">KeychainPGP 網頁應用程式</a>加密您的第一則訊息。這是一個完全在瀏覽器中運行的免費<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>。</p>

<p><strong>步驟 1：開啟網頁應用程式。</strong>前往 <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>。應用程式透過 WebAssembly 載入，PGP 引擎在您的電腦本機運行。</p>

<p><strong>步驟 2：產生您的金鑰對。</strong>在「金鑰」分頁中，建立新金鑰。KeychainPGP 會產生現代的 Ed25519 + X25519 金鑰對。</p>

<p><strong>步驟 3：匯出並分享您的公開金鑰。</strong>使用匯出功能以 ASCII-armored 格式複製您的公開金鑰。</p>

<p><strong>步驟 4：匯入收件人的公開金鑰。</strong>在「金鑰」分頁中，貼上聯絡人的公開金鑰區塊。</p>

<p><strong>步驟 5：撰寫並加密您的訊息。</strong>前往「加密」分頁，輸入您的訊息，選擇收件人，然後點擊<strong>「加密至剪貼簿」</strong>。</p>

<p><strong>步驟 6：傳送加密訊息。</strong>將加密文字貼到任何電子郵件、聊天或通訊應用程式中。</p>

<p><strong>步驟 7：解密回覆。</strong>複製加密的 PGP 訊息區塊，前往「解密」分頁，貼上並點擊「解密」。</p>

<p>如需更詳細的指南，請查看我們的<a href="/zh-TW/docs/how-to-use-pgp/">如何使用 PGP</a> 教學。</p>

<h2 id="common-beginner-mistakes">常見的新手錯誤</h2>

<p><strong>1. 分享私密金鑰。</strong>您的私密金鑰絕不能傳送給任何人。只分享您的<strong>公開</strong>金鑰。</p>

<p><strong>2. 未驗證指紋。</strong>請務必透過獨立且可信的管道驗證金鑰指紋 — 電話、視訊通話或當面見面。</p>

<p><strong>3. 遺失私密金鑰且無備份。</strong>如果您遺失了私密金鑰，所有以該金鑰加密的訊息都將永遠無法恢復。請將私密金鑰備份到安全的地方。</p>

<p><strong>4. 未備份撤銷憑證。</strong>撤銷憑證讓您可以公開宣告您的金鑰不再有效（如果金鑰被洩露）。</p>

<p><strong>5. 使用過時或薄弱的金鑰。</strong>如果您今天產生新金鑰，請使用現代演算法。KeychainPGP 預設使用 Ed25519 + X25519。</p>

<h2 id="next-steps">下一步</h2>

<ul>
<li><strong>閱讀完整指南：</strong><a href="/zh-TW/docs/how-to-use-pgp/">如何使用 PGP</a> 涵蓋簽署、驗證、金鑰管理和進階主題。</li>
<li><strong>了解什麼是 PGP：</strong>深入了解請閱讀<a href="/zh-TW/docs/what-is-pgp/">什麼是 PGP</a>。</li>
<li><strong>學習剪貼簿加密：</strong>了解<a href="/zh-TW/docs/clipboard-encryption/">剪貼簿加密</a>如何讓您在任何應用程式中使用 PGP。</li>
<li><strong>嘗試線上工具：</strong>開啟<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>並練習。</li>
<li><strong>取得桌面應用程式：</strong><a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGP 桌面應用程式</a>新增全域快捷鍵、系統匣和剪貼簿自動清除。</li>
</ul>

<h2 id="faq">常見問題</h2>

<h3>PGP 難學嗎？</h3>
<p>不難。基本概念很簡單：一把公開金鑰用來分享，一把私密金鑰用來保密。使用像 KeychainPGP 這樣的現代工具，加密一則訊息只需幾次點擊。</p>

<h3>使用 PGP 需要安裝軟體嗎？</h3>
<p>不一定。您可以直接在瀏覽器中使用 KeychainPGP 的<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>。它完全透過 WebAssembly 在您的裝置上運行。</p>

<h3>有人能破解我的 PGP 加密訊息嗎？</h3>
<p>使用現代演算法（如 KeychainPGP 使用的 Ed25519 + X25519），以當前技術暴力破解加密所需的時間將超過宇宙的年齡。真正的風險是實際操作層面的：遺失私密金鑰、使用弱密碼或裝置上有惡意軟體。</p>

<h3>PGP、GPG 和 OpenPGP 有什麼區別？</h3>
<p><strong>PGP</strong> 是 1991 年創建的原始程式。<strong>OpenPGP</strong> 是定義格式的開放標準（RFC 4880）。<strong>GPG</strong>（GNU Privacy Guard）是 OpenPGP 標準的自由實作。KeychainPGP 是另一個實作，建構在 Rust 的 Sequoia-PGP 上。它們全都相容，因為遵循相同的標準。</p>

<h3>如何分享我的公開金鑰？</h3>
<p>將公開金鑰匯出為 ASCII-armored 格式 — 這是一個以 <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code> 開頭的文字區塊。貼到電子郵件中、發布在網站上、在聊天中分享或上傳到金鑰伺服器。記得透過獨立管道與聯絡人驗證指紋。</p>
`
};

export default doc;
