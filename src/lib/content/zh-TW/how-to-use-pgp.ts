import type { DocContent } from '../types';

const doc: DocContent = {
	title: '如何使用 PGP：逐步加密教學（2026）',
	description: '逐步學習如何使用 PGP 加密。產生金鑰、加密和解密訊息、簽署和驗證資料的完整 PGP 教學。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: '如何使用 PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: '開始前的準備', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: '步驟 1：產生金鑰對', level: 2 },
		{ id: 'step-2-share-your-public-key', text: '步驟 2：分享您的公開金鑰', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: '步驟 3：匯入聯絡人的金鑰', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: '步驟 4：加密訊息', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: '步驟 5：解密訊息', level: 2 },
		{ id: 'step-6-sign-a-message', text: '步驟 6：簽署訊息', level: 2 },
		{ id: 'step-7-verify-a-signature', text: '步驟 7：驗證簽章', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGP 剪貼簿工作流程', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: '網頁應用程式 vs 桌面應用程式', level: 2 },
		{ id: 'frequently-asked-questions', text: '常見問題', level: 2 }
	],
	html: `
<h1>如何使用 PGP</h1>

<p>要使用 PGP，您需要產生一個金鑰對（一把公開金鑰和一把私密金鑰），將公開金鑰分享給您想通訊的對象，匯入他們的公開金鑰，然後使用這些金鑰來加密、解密、簽署和驗證訊息。PGP 加密確保只有預期的收件人才能讀取您的訊息，而數位簽章則證明訊息確實來自您。像 <a href="/zh-TW/pgp-online-encrypt/">KeychainPGP</a> 這樣的工具透過剪貼簿工作流程讓這個過程變得簡單 — 無需命令列。</p>

<p>本 PGP 教學將帶您完成每個步驟，從產生第一個金鑰對到傳送和接收加密訊息。如果您對公開金鑰密碼學的概念還不熟悉，建議先閱讀<a href="/zh-TW/docs/what-is-pgp/">什麼是 PGP？</a>或 <a href="/zh-TW/docs/pgp-for-beginners/">PGP 入門指南</a>。</p>

<hr>

<h2 id="what-you-need-before-you-start">開始前的準備</h2>

<p>在使用 PGP 加密第一則訊息之前，您需要一個 PGP 應用程式：</p>

<ul>
<li><strong>KeychainPGP 網頁應用程式</strong> — 在任何現代瀏覽器中開啟<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>。所有操作都透過從 Rust 編譯的 WebAssembly 在本機執行。無需安裝、無需帳號、無任何資料傳送至伺服器。</li>
<li><strong>KeychainPGP 桌面應用程式</strong> — 從 <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases 頁面</a>下載 Windows、macOS、Linux 或 Android 的原生應用程式。桌面應用程式新增了全域快捷鍵、系統匣整合、剪貼簿自動清除和 QR code 同步功能。</li>
<li><strong>KeychainPGP CLI</strong> — <code>keychainpgp</code> CLI 提供金鑰產生、加密、解密、簽署、驗證和金鑰鏈管理的命令。非常適合腳本和自動化。</li>
<li><strong>GnuPG (GPG)</strong> — 傳統的命令列工具。功能強大但需要熟悉終端機操作。請參閱 <a href="/zh-TW/docs/pgp-vs-gpg/">PGP vs GPG</a> 以獲取詳細比較。</li>
</ul>

<blockquote><p><strong>提示：</strong>如果您只是想立即嘗試 PGP 加密而不安裝任何東西，請開啟<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>並按照本教學操作。</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">步驟 1：產生 PGP 金鑰對</h2>

<p>PGP 金鑰對由兩把數學相關的金鑰組成：</p>

<ul>
<li><strong>公開金鑰</strong> — 您自由分享。任何人都可以用它來加密發給您的訊息或驗證您的簽章。</li>
<li><strong>私密金鑰</strong> — 您保密持有。它解密以您的公開金鑰加密的訊息並建立數位簽章。</li>
</ul>

<h3>在 KeychainPGP 中產生金鑰</h3>

<ol>
<li>開啟 KeychainPGP（網頁或桌面應用程式）。</li>
<li>前往<strong>金鑰</strong>分頁。</li>
<li>點擊<strong>產生新金鑰</strong>。</li>
<li>輸入您的姓名和電子郵件地址。</li>
<li>點擊<strong>產生</strong>。KeychainPGP 會建立 <strong>Ed25519 + X25519</strong> 金鑰對 — OpenPGP 中最現代且安全的演算法。</li>
</ol>

<h3>使用 GPG 產生金鑰（命令列）</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>選擇金鑰類型（RSA 或 ECC）、大小和到期時間。要獲得最現代的安全性，如果您的 GPG 版本支援，請選擇 Ed25519。</p>

<hr>

<h2 id="step-2-share-your-public-key">步驟 2：分享您的公開金鑰</h2>

<p>您的公開金鑰是一段 <strong>ASCII-armored</strong> 格式的文字區塊。您可以在任何地方分享它：</p>

<ul>
<li><strong>電子郵件</strong> — 貼到郵件本文中或附加為 <code>.asc</code> 檔案。</li>
<li><strong>通訊應用程式</strong> — 透過 Signal、WhatsApp、Matrix 或任何聊天平台傳送。</li>
<li><strong>您的網站</strong> — 發布在個人網站、GitHub 個人檔案或 Twitter 簡介上。</li>
<li><strong>金鑰伺服器</strong> — 上傳到公開金鑰伺服器，如 <code>keys.openpgp.org</code>。</li>
</ul>

<p><strong>重要：</strong>只分享您的<strong>公開</strong>金鑰。在任何情況下，絕對不要將私密金鑰分享給任何人。</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">步驟 3：匯入聯絡人的公開金鑰</h2>

<p>在向某人發送加密訊息之前，您需要他們的公開金鑰。請您的聯絡人傳送 ASCII-armored 格式的公開金鑰給您，或在金鑰伺服器上搜尋。</p>

<h3>在 KeychainPGP 中匯入金鑰</h3>

<ol>
<li>將聯絡人的公開金鑰區塊複製到剪貼簿。</li>
<li>開啟 KeychainPGP 並前往<strong>金鑰</strong>分頁。</li>
<li>點擊<strong>匯入金鑰</strong>並貼上金鑰。</li>
<li>聯絡人會出現在您的金鑰清單中，顯示其姓名和電子郵件。</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">步驟 4：加密訊息</h2>

<h3>在 KeychainPGP 中加密（網頁或桌面）</h3>

<ol>
<li>前往<strong>加密</strong>分頁。</li>
<li>輸入或貼上您想加密的訊息。</li>
<li>從金鑰清單中選擇收件人。</li>
<li>點擊<strong>加密至剪貼簿</strong>。加密訊息已複製到您的剪貼簿。</li>
<li>將加密訊息貼到電子郵件、聊天或任何其他通訊管道中。</li>
</ol>

<h3>使用桌面快捷鍵加密</h3>

<p>使用 KeychainPGP 桌面應用程式，透過<a href="/zh-TW/docs/clipboard-encryption/">剪貼簿工作流程</a>，過程更加快速：</p>

<ol>
<li>在任何應用程式中輸入您的訊息。</li>
<li>選取並複製文字（<code>Ctrl+C</code>）。</li>
<li>按下 <strong><code>Ctrl+Shift+E</code></strong> — KeychainPGP 會加密剪貼簿內容。</li>
<li>貼上加密訊息（<code>Ctrl+V</code>）。</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">步驟 5：解密訊息</h2>

<h3>在 KeychainPGP 中解密（網頁或桌面）</h3>

<ol>
<li>複製完整的加密訊息區塊。</li>
<li>前往 KeychainPGP 的<strong>解密</strong>分頁。</li>
<li>貼上加密文字。</li>
<li>點擊<strong>解密</strong>。明文會立即顯示。</li>
</ol>

<h3>使用桌面快捷鍵解密</h3>

<ol>
<li>選取並複製加密訊息區塊（<code>Ctrl+C</code>）。</li>
<li>按下 <strong><code>Ctrl+Shift+D</code></strong> — KeychainPGP 會解密剪貼簿內容。</li>
<li>明文會取代剪貼簿中的加密文字。在需要的地方貼上即可。</li>
</ol>

<p>桌面應用程式還具有<strong>剪貼簿自動清除</strong>功能：30 秒後，解密的文字會自動從剪貼簿中清除。</p>

<hr>

<h2 id="step-6-sign-a-message">步驟 6：簽署訊息</h2>

<p>PGP 數位簽章證明兩件事：</p>

<ol>
<li><strong>真實性</strong> — 訊息由簽署金鑰的持有者撰寫。</li>
<li><strong>完整性</strong> — 訊息自簽署以來未被篡改。</li>
</ol>

<p>簽署不會加密訊息。任何人都可以閱讀已簽署的訊息，但可以驗證它確實來自您且未被竄改。</p>

<h3>何時簽署訊息</h3>

<ul>
<li>公布軟體發布版本或安全公告</li>
<li>在公開論壇上驗證您的身份</li>
<li>簽署電子郵件以證明來源</li>
<li>Git commit 簽署以確保程式碼完整性</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">步驟 7：驗證簽章</h2>

<p>當您收到已簽署的訊息時，可以驗證其真實性和未被修改。</p>

<h3>在 KeychainPGP 中驗證</h3>

<ol>
<li>複製完整的已簽署訊息（包含簽章區塊）。</li>
<li>前往<strong>驗證</strong>分頁。</li>
<li>貼上已簽署的訊息。</li>
<li>點擊<strong>驗證</strong>。KeychainPGP 會確認簽章是否有效。</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGP 剪貼簿工作流程</h2>

<p>KeychainPGP 與傳統 PGP 工具的區別在於其<a href="/zh-TW/docs/clipboard-encryption/">剪貼簿加密工作流程</a>。它不是操作檔案或需要專用的電子郵件用戶端，而是透過系統剪貼簿與任何應用程式配合使用。</p>

<table>
<tr><th>操作</th><th>網頁應用程式</th><th>桌面應用程式</th></tr>
<tr><td>加密</td><td>貼上文字，點擊加密</td><td>複製文字，按下 <code>Ctrl+Shift+E</code></td></tr>
<tr><td>解密</td><td>貼上加密文字，點擊解密</td><td>複製加密文字，按下 <code>Ctrl+Shift+D</code></td></tr>
<tr><td>簽署</td><td>貼上文字，點擊簽署</td><td>在應用程式視窗中操作</td></tr>
<tr><td>驗證</td><td>貼上已簽署文字，點擊驗證</td><td>在應用程式視窗中操作</td></tr>
</table>

<p>桌面應用程式的額外安全功能：</p>

<ul>
<li><strong>剪貼簿自動清除</strong> — 解密文字在 30 秒後從剪貼簿中清除。</li>
<li><strong>OPSEC 模式</strong> — 偽裝視窗標題、金鑰僅存於記憶體中及緊急清除按鈕。</li>
<li><strong>作業系統認證存放區</strong> — 私密金鑰透過 Windows 認證管理員、macOS 鑰匙圈或 Linux Secret Service 安全儲存。</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">網頁應用程式 vs 桌面應用程式</h2>

<p><strong>網頁應用程式</strong>（<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>）：</p>

<ul>
<li>完全透過 WebAssembly 在瀏覽器中運行</li>
<li>無需安裝、無需帳號</li>
<li>非常適合快速加密任務</li>
<li>金鑰儲存在瀏覽器的本機儲存中</li>
</ul>

<p><strong>桌面應用程式</strong>（Windows、macOS、Linux、Android）：</p>

<ul>
<li>全域快捷鍵用於加密和解密</li>
<li>系統匣整合</li>
<li>剪貼簿自動清除</li>
<li>OPSEC 模式，金鑰僅存於記憶體中及緊急清除</li>
<li>透過作業系統認證管理員安全儲存金鑰</li>
<li>更適合日常使用和長期金鑰管理</li>
</ul>

<p>兩個應用程式都是免費、開源（MIT / Apache-2.0）且無任何遙測。</p>

<hr>

<h2 id="frequently-asked-questions">常見問題</h2>

<h3>我應該分享我的私密金鑰嗎？</h3>

<p>不應該。您<strong>絕不</strong>應該將私密金鑰分享給任何人。您的私密金鑰是用來解密發給您的訊息和建立數位簽章的。如果其他人取得了您的私密金鑰，他們就能閱讀所有加密給您的訊息並冒充您。</p>

<h3>如果我遺失了私密金鑰會怎樣？</h3>

<p>如果您遺失了私密金鑰，您將永久失去解密所有以對應公開金鑰加密的訊息的能力。沒有任何恢復機制。請務必安全備份您的私密金鑰。</p>

<h3>我可以使用 PGP 加密檔案嗎？</h3>

<p>可以。PGP 可以加密文字訊息和二進位檔案。KeychainPGP 專注於剪貼簿文字加密，而 GnuPG 等工具直接支援檔案加密。如需詳細比較，請參閱 <a href="/zh-TW/docs/pgp-vs-gpg/">PGP vs GPG</a> 指南。</p>

<h3>PGP 加密安全嗎？</h3>

<p>使用現代演算法的 PGP 加密非常安全。KeychainPGP 使用 Ed25519 進行簽章和 X25519 進行金鑰交換 — 這些橢圓曲線演算法以極小的金鑰大小提供等同於 RSA-3072 的安全性。主要風險不在於密碼學，而在於操作層面：弱密碼、已遭入侵的裝置或疏忽的金鑰管理。</p>

<h3>什麼是 PGP 指紋？</h3>

<p>PGP 指紋是一個 40 個字元的十六進位字串，用於唯一識別一把 PGP 金鑰。指紋用於驗證公開金鑰確實屬於您認為的那個人。請務必透過獨立的可信管道（電話、視訊通話、當面見面）比對指紋，以防止中間人攻擊。</p>
`
};

export default doc;
