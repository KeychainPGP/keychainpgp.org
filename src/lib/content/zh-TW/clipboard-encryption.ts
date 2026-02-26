import type { DocContent } from '../types';

const doc: DocContent = {
	title: '使用 PGP 的剪貼簿加密：剪貼簿優先的安全通訊方式',
	description: '了解 PGP 剪貼簿加密的運作方式、為什麼它在日常 OPSEC 中優於檔案加密，以及 KeychainPGP 如何使用剪貼簿在任何應用程式中加密訊息。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: '什麼是剪貼簿加密？', level: 2 },
		{ id: 'why-clipboard-first', text: '為什麼剪貼簿優先？', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'KeychainPGP 如何使用剪貼簿', level: 2 },
		{ id: 'the-encryption-workflow', text: '加密工作流程', level: 3 },
		{ id: 'decryption-in-reverse', text: '反向解密', level: 3 },
		{ id: 'security-considerations', text: '安全考量', level: 2 },
		{ id: 'clipboard-history-and-managers', text: '剪貼簿歷史記錄和管理員', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: '30 秒後自動清除', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: '記憶體處理和歸零', level: 3 },
		{ id: 'opsec-mode', text: 'OPSEC 模式', level: 2 },
		{ id: 'window-title-disguise', text: '視窗標題偽裝', level: 3 },
		{ id: 'ram-only-keys', text: '僅 RAM 金鑰', level: 3 },
		{ id: 'panic-wipe', text: '緊急清除', level: 3 },
		{ id: 'tor-proxy-support', text: 'Tor 代理支援', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: '剪貼簿加密 vs 檔案加密', level: 2 },
		{ id: 'threat-model', text: '威脅模型', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: '剪貼簿加密能防護什麼', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: '剪貼簿加密無法防護什麼', level: 3 },
		{ id: 'best-practices', text: 'PGP 剪貼簿最佳實踐', level: 2 }
	],
	html: `
<h1>使用 PGP 的剪貼簿加密</h1>

<h2 id="what-is-clipboard-encryption">什麼是剪貼簿加密？</h2>

<p>PGP 剪貼簿加密是一種直接從作業系統剪貼簿讀取和寫入來加密和解密文字的方法，而非操作儲存在磁碟上的檔案。您不需要將明文訊息儲存為 <code>.txt</code> 檔案，傳遞給命令列工具，然後取回加密的 <code>.asc</code> 檔案，而只需複製文字、用鍵盤快捷鍵觸發加密，然後將 PGP 加密訊息貼到任何您想要的地方。剪貼簿同時作為輸入和輸出緩衝區，使加密成為任何文字工作流程的一部分。這種方式是 <a href="/zh-TW/pgp-online-encrypt/">KeychainPGP</a> 在桌面上運作的基礎，也是它能與所有支援複製貼上的應用程式整合的原因 — 電子郵件用戶端、聊天應用程式、筆記工具、網頁表單等等。</p>

<p>如果您是 PGP 新手，請先從<a href="/zh-TW/docs/what-is-pgp/">什麼是 PGP？</a>開始，了解底層的密碼學概念，再深入剪貼簿的特定工作流程。</p>

<h2 id="why-clipboard-first">為什麼剪貼簿優先？</h2>

<p>傳統的 PGP 工具如 GnuPG 是圍繞檔案設計的。您將檔案傳入 <code>gpg --encrypt</code>，取得加密檔案，然後手動傳輸。這個模型在 1990 年代 PGP 主要用於電子郵件附件和檔案封存時是合理的。但在今天，當大多數敏感通訊發生在網頁平台、即時通訊應用程式和不暴露檔案系統介面的服務中時，這個模型就不太適用了。</p>

<p>剪貼簿優先的方式一次解決了多個問題：</p>

<ul>
<li><strong>應用程式獨立性。</strong>由於剪貼簿是作業系統層級的抽象，剪貼簿加密適用於任何應用程式。您不會被鎖定在特定的電子郵件用戶端、瀏覽器擴充功能或外掛程式生態系統中。只要您能複製貼上，就能加密。</li>
<li><strong>磁碟上沒有明文檔案。</strong>檔案加密必然會在檔案系統上產生明文產物 — 原始的未加密檔案、暫存檔、編輯器的交換檔，以及可能的解密輸出。這些都是數位鑑識的隱患。剪貼簿加密將明文只保留在揮發性記憶體中。</li>
<li><strong>更少的摩擦。</strong>從「我想加密這個」到「已加密」之間的步驟越少，使用者就越有可能實際加密訊息。三步驟的工作流程（複製、快捷鍵、貼上）比基於檔案的流程摩擦少得多。</li>
<li><strong>與現代通訊相容。</strong>網頁郵件、Signal 桌面版、Slack、Discord、Matrix 用戶端 — 這些工具都不原生支援 PGP，但都支援貼上文字。PGP 剪貼簿無需協議層級的整合即可彌補這個差距。</li>
</ul>

<p>如需使用此工作流程的逐步指南，請查看<a href="/zh-TW/docs/how-to-use-pgp/">如何使用 PGP</a>。</p>

<h2 id="how-keychainpgp-uses-the-clipboard">KeychainPGP 如何使用剪貼簿</h2>

<p>KeychainPGP 從頭到尾都圍繞剪貼簿優先的理念構建。它不是將剪貼簿存取視為加在檔案加密工具上的便利功能，而是整個架構 — 從密碼學管線到使用者介面 — 都假設剪貼簿是主要的資料通道。</p>

<h3 id="the-encryption-workflow">加密工作流程</h3>

<p>使用 KeychainPGP 加密訊息的過程只需三個步驟：</p>

<ol>
<li><strong>複製</strong>任何應用程式中的明文訊息（電子郵件草稿、聊天視窗、文字編輯器、網頁表單）。</li>
<li><strong>按下 <code>Ctrl+Shift+E</code></strong>（預設全域快捷鍵）。KeychainPGP 讀取剪貼簿內容，使用選定收件人的公開金鑰加密文字，並將 ASCII-armored PGP 加密文字寫入剪貼簿。</li>
<li><strong>貼上</strong>加密訊息到目的地。收到的是以 <code>-----BEGIN PGP MESSAGE-----</code> 開頭的標準 OpenPGP ASCII-armored 區塊，可由任何 OpenPGP 相容工具解密。</li>
</ol>

<p>在幕後，KeychainPGP 使用 <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> 函式庫，一個現代的 Rust OpenPGP 標準實作。金鑰預設使用 Ed25519 進行簽章和 X25519 進行加密 — 橢圓曲線演算法，以精簡的金鑰大小和快速的操作提供強大的安全性。沒有演算法選擇對話框，也不需要決定金鑰大小。開箱即是安全的密碼學。</p>

<h3 id="decryption-in-reverse">反向解密</h3>

<p>解密反轉了加密的流程。當您收到 PGP 加密訊息時，您複製整個 armored 區塊，按下 <code>Ctrl+Shift+D</code>（預設解密快捷鍵），KeychainPGP 會用解密後的明文替換剪貼簿內容。您隨後可以貼到任何應用程式中閱讀。解密後的文字只存在於記憶體和剪貼簿緩衝區中，而剪貼簿會在可設定的延遲後自動清除。</p>

<h2 id="security-considerations">安全考量</h2>

<p>使用剪貼簿作為資料通道帶來了特定的安全考量，KeychainPGP 透過多種防禦機制加以處理。</p>

<h3 id="clipboard-history-and-managers">剪貼簿歷史記錄和管理員</h3>

<p>現代作業系統和第三方工具通常會維護剪貼簿歷史記錄。Windows 10 及更新版本包含內建的剪貼簿歷史記錄功能（<code>Win+V</code>）。macOS 原生不維護歷史記錄，但 Alfred、Raycast 和 Paste 等流行工具會。在 Linux 上，CopyQ、Clipman 和 GPaste 等剪貼簿管理員很常見。</p>

<p>這些剪貼簿管理員可能會捕獲加密前的明文和解密後的輸出，完全抵消加密的效果。使用 PGP 剪貼簿加密時，您應該：</p>

<ul>
<li>停用作業系統的剪貼簿歷史記錄（在 Windows 上，前往設定 > 系統 > 剪貼簿，停用剪貼簿歷史記錄）。</li>
<li>避免在處理敏感內容的機器上使用第三方剪貼簿管理員，或在管理員允許的情況下設定排除規則。</li>
<li>依賴 KeychainPGP 內建的自動清除功能來最小化暴露視窗。</li>
</ul>

<h3 id="auto-clear-after-30-seconds">30 秒後自動清除</h3>

<p>KeychainPGP 在將解密的明文寫入剪貼簿後 30 秒自動清除剪貼簿。此延遲可在應用程式設定中配置。自動清除確保解密內容不會無限期留在剪貼簿中，降低後續的貼上操作或剪貼簿管理員在您閱讀完畢很久後捕獲敏感文字的風險。</p>

<p>預設的 30 秒延遲是易用性和安全性之間的折衷。它給您足夠的時間將解密文字貼到需要的地方，同時限制了明文可存取的視窗期。對於高安全性環境，您可以將此延遲縮短至最少 5 秒。</p>

<h3 id="memory-handling-and-zeroization">記憶體處理和歸零</h3>

<p>剪貼簿加密意味著敏感資料 — 私密金鑰、密碼、解密的明文 — 駐留在程序記憶體中。KeychainPGP 以 Rust 編寫，利用 Sequoia-PGP 的 drop 時歸零保證。當秘密值離開其作用域時，其記憶體在釋放前會被以零覆寫。這不是盡力而為的清除；Rust 的所有權模型確保歸零解構器以確定性方式執行。結合 <code>zeroize</code> crate 的編譯器屏障（防止優化器消除覆寫），這提供了強大的保證，確保秘密不會在使用後殘留在記憶體中。</p>

<p>這與以垃圾回收語言（Java、Python、JavaScript）編寫的工具形成對比，在那些語言中秘密資料可能無限期殘留在記憶體中，直到垃圾回收器回收並（可能）覆寫它們。</p>

<h2 id="opsec-mode">OPSEC 模式</h2>

<p>對於在敵對環境中操作的使用者 — 與消息來源通訊的記者、受監控的社運人士、處理敏感揭露的資安研究人員 — KeychainPGP 包含一個 OPSEC 模式，將應用程式的安全態勢提升到預設水準之上。</p>

<h3 id="window-title-disguise">視窗標題偽裝</h3>

<p>啟用 OPSEC 模式時，KeychainPGP 會將視窗標題改為無害的名稱，如「計算機」或「記事本」。這可以防止隨意的窺探，並欺騙記錄視窗標題的自動螢幕擷取工具。檢查螢幕截圖或錄影的對手不會在任何視窗標題列中看到「KeychainPGP」或「PGP」。</p>

<h3 id="ram-only-keys">僅 RAM 金鑰</h3>

<p>在 OPSEC 模式下，私密金鑰僅保存在 RAM 中，絕不寫入檔案系統。這意味著如果裝置被扣押或磁碟被鏡像，沒有金鑰檔案可以恢復。代價是每次啟動應用程式時都需要重新匯入金鑰，通常從硬體 Token、QR code 或從另一台裝置安全傳輸。</p>

<h3 id="panic-wipe">緊急清除</h3>

<p>緊急清除按鈕（或其關聯的鍵盤快捷鍵）會立即將記憶體中的所有密碼學材料歸零、清除剪貼簿，並可選擇關閉應用程式。這是為您需要立即銷毀所有敏感狀態的情況設計的 — 例如，如果您預期裝置即將被扣押。清除是即時且不可逆的；任何僅存於 RAM 中且未在其他地方備份的金鑰將永久遺失。</p>

<h3 id="tor-proxy-support">Tor 代理支援</h3>

<p>OPSEC 模式包含透過 Tor SOCKS 代理路由金鑰伺服器查詢和任何其他網路流量的功能。這可以防止您的 ISP 或網路層級的對手觀察到您正在取得 PGP 公開金鑰，這可能作為識別您通訊夥伴的中繼資料。啟用 Tor 代理支援後，KeychainPGP 的所有對外連線都透過設定的 SOCKS5 代理路由（如果 Tor 在本機執行，通常為 <code>127.0.0.1:9050</code>）。</p>

<h2 id="clipboard-encryption-vs-file-encryption">剪貼簿加密 vs 檔案加密</h2>

<p>PGP 剪貼簿加密和檔案加密使用相同的底層 OpenPGP 標準，產生互通的密文。差異在於工作流程及其衍生的安全特性。</p>

<table>
<tr><th>面向</th><th>剪貼簿加密</th><th>檔案加密</th></tr>
<tr><td><strong>輸入/輸出</strong></td><td>系統剪貼簿（揮發性記憶體）</td><td>磁碟上的檔案（持久性儲存）</td></tr>
<tr><td><strong>明文產物</strong></td><td>磁碟上沒有；超時後從剪貼簿清除</td><td>原始檔案、暫存檔、編輯器備份可能殘留</td></tr>
<tr><td><strong>應用程式支援</strong></td><td>任何支援複製/貼上的應用程式</td><td>需要檔案系統存取或 CLI 整合</td></tr>
<tr><td><strong>工作流程步驟</strong></td><td>3 步（複製、快捷鍵、貼上）</td><td>5+ 步（儲存檔案、執行 CLI、指定輸出、開啟輸出、傳輸）</td></tr>
<tr><td><strong>批次處理</strong></td><td>不適合大量操作</td><td>適合大量檔案和封存檔加密</td></tr>
<tr><td><strong>大量資料</strong></td><td>限於剪貼簿能容納的文字</td><td>處理任意大小的檔案</td></tr>
<tr><td><strong>數位鑑識痕跡</strong></td><td>最小（僅 RAM）</td><td>顯著（磁碟產物、檔案系統中繼資料）</td></tr>
</table>

<p>剪貼簿加密是日常通訊中訊息層級加密的最佳選擇。當您需要加密二進位資料、大型封存檔，或收件人期望 <code>.pgp</code> 附件時，檔案加密仍然必要。KeychainPGP 支援兩種模式，但剪貼簿工作流程是它最出色的地方。</p>

<h2 id="threat-model">威脅模型</h2>

<p>了解 PGP 剪貼簿加密能防護和不能防護什麼，對於做出明智的安全決策至關重要。沒有單一工具能涵蓋所有威脅。</p>

<h3 id="what-clipboard-encryption-protects-against">剪貼簿加密能防護什麼</h3>

<ul>
<li><strong>網路監控。</strong>在離開您裝置前加密的訊息對任何監控網路的人都是不透明的 — 您的 ISP、Wi-Fi 竊聽者或執行深度封包檢測的國家行為者。PGP 密文可以穿越任意數量的不受信任網路而不洩露明文。</li>
<li><strong>電子郵件和訊息攔截。</strong>如果對手存取了您的電子郵件伺服器、聊天提供商的資料庫或傳輸中的訊息，他們只能得到密文。沒有收件人的私密金鑰，內容在計算上不可能恢復。</li>
<li><strong>儲存洩露。</strong>如果對手獲得了您的電子郵件封存檔、聊天記錄或雲端備份的副本，PGP 加密的訊息仍受保護。這對剪貼簿加密特別相關，因為明文永遠不會觸及磁碟。</li>
<li><strong>中繼資料減少（搭配 OPSEC 模式）。</strong>雖然 PGP 不加密電子郵件標頭或訊息中繼資料，但 OPSEC 模式的功能（如 Tor 代理支援和視窗標題偽裝）減少了圍繞加密使用的可觀察中繼資料。</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">剪貼簿加密無法防護什麼</h3>

<ul>
<li><strong>裝有鍵盤記錄器的終端洩露。</strong>如果對手在您的裝置上安裝了鍵盤記錄器或螢幕擷取惡意軟體，他們可以在加密前或解密後捕獲明文。剪貼簿加密假設終端是可信的。如果您的裝置在作業系統層級被入侵，沒有應用程式層級的加密能夠幫助。</li>
<li><strong>對解鎖裝置的實體存取。</strong>如果對手在您的裝置解鎖且 KeychainPGP 正在運行並載入金鑰時獲得實體存取，他們可以解密訊息。僅 RAM 金鑰和緊急清除按鈕在一定程度上緩解了這個問題，但它們需要您在對手獲得存取之前採取行動。</li>
<li><strong>私密金鑰洩露。</strong>如果您的私密金鑰被外洩（從備份、被入侵的裝置或弱密碼），所有使用該金鑰加密的訊息 — 過去和未來的 — 都會被洩露。使用強密碼並將私密金鑰保存在盡可能少的裝置上。</li>
<li><strong>流量分析。</strong>PGP 加密的是訊息內容，不是通訊模式。能觀察您網路流量的對手可以確定您正在通訊、頻率如何，以及可能與誰通訊（基於金鑰伺服器查詢），即使無法閱讀內容。OPSEC 模式中的 Tor 代理支援部分解決了這個問題。</li>
</ul>

<p>如需這些概念的更廣泛介紹，<a href="/zh-TW/docs/pgp-for-beginners/">PGP 入門指南</a>涵蓋了公開金鑰密碼學和金鑰管理的基礎知識。</p>

<h2 id="best-practices">PGP 剪貼簿最佳實踐</h2>

<p>遵循這些實踐將最大化 PGP 剪貼簿加密的安全效益：</p>

<ol>
<li><strong>停用剪貼簿歷史記錄。</strong>在作業系統層級停用剪貼簿歷史記錄，並從處理加密通訊的機器上移除第三方剪貼簿管理員。</li>
<li><strong>保持自動清除開啟。</strong>不要停用剪貼簿自動清除計時器。將其縮短到您認為可用的最短間隔。五到十五秒對大多數工作流程來說已足夠。</li>
<li><strong>在合理情況下使用 OPSEC 模式。</strong>如果您在使用加密本身就是風險的環境中操作，請啟用 OPSEC 模式以獲得視窗標題偽裝、僅 RAM 金鑰和 Tor 路由。</li>
<li><strong>透過帶外管道驗證收件人金鑰。</strong>在使用某人的公開金鑰加密訊息之前，透過獨立管道驗證金鑰指紋（當面、語音通話、透過已知金鑰的簽署訊息）。這可以防止金鑰分發上的中間人攻擊。</li>
<li><strong>使用強密碼。</strong>用長且難以猜測的密碼保護您的私密金鑰。四到六個隨機產生的單字組成的密碼比一串短的混合字元更安全且更容易輸入。</li>
<li><strong>保持終端乾淨。</strong>剪貼簿加密假設裝置是可信的。使用最新的作業系統、避免安裝不受信任的軟體，並使用全磁碟加密來保護靜態資料。</li>
<li><strong>優先使用 Ed25519/X25519 金鑰。</strong>KeychainPGP 預設使用這些現代橢圓曲線演算法是有充分理由的。它們快速、精簡，並能抵抗影響舊式 RSA 和 DSA 金鑰的多種實作層級攻擊。如果您從舊金鑰遷移，請產生新的 Ed25519/X25519 金鑰對並與聯絡人進行過渡。</li>
<li><strong>測試您的工作流程。</strong>在依賴剪貼簿加密進行關鍵通訊之前，練習完整的循環：產生金鑰、交換公開金鑰、加密測試訊息、在另一端解密。熟悉流程可以減少壓力下的錯誤風險。</li>
</ol>

<p>PGP 剪貼簿加密不是萬能藥，但結合良好的操作安全實踐，它提供了一條實用且低摩擦的加密通訊途徑，與您已在使用的工具無縫整合。<a href="/zh-TW/pgp-online-encrypt/">在瀏覽器中試用 KeychainPGP</a>，親身體驗剪貼簿優先的工作流程。</p>
`
};

export default doc;
