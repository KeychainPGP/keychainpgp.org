import type { DocContent } from '../types';

const doc: DocContent = {
	title: '什麼是 PGP？Pretty Good Privacy 加密完整指南',
	description: '了解什麼是 PGP（Pretty Good Privacy）、PGP 加密如何透過公開金鑰密碼學運作、OpenPGP 標準、數位簽章及現代用途。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: '什麼是 PGP 加密？', level: 2 },
		{ id: 'history-of-pgp', text: 'PGP 的歷史', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'PGP 加密如何運作', level: 2 },
		{ id: 'public-key-cryptography', text: '公開金鑰密碼學', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: '混合加密模型', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'PGP 數位簽章', level: 2 },
		{ id: 'the-openpgp-standard', text: 'OpenPGP 標準', level: 2 },
		{ id: 'web-of-trust', text: '信任網路', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGP 演算法與金鑰類型', level: 2 },
		{ id: 'classic-algorithms', text: '經典演算法', level: 3 },
		{ id: 'modern-algorithms', text: '現代演算法', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'PGP 常見使用情境', level: 2 },
		{ id: 'pgp-today', text: '今日的 PGP', level: 2 },
		{ id: 'getting-started-with-pgp', text: '開始使用 PGP', level: 2 }
	],
	html: `
<h1>什麼是 PGP？Pretty Good Privacy 加密完整指南</h1>

<h2 id="what-is-pgp-encryption">什麼是 PGP 加密？</h2>

<p><strong>PGP（Pretty Good Privacy）</strong>是一個為資料通訊提供隱私保護和密碼學驗證的加密程式。PGP 加密使用對稱金鑰密碼學和公開金鑰密碼學的組合，讓使用者能夠加密訊息、檔案和其他資料，使得只有預期的收件人才能讀取。PGP 最初由 Phil Zimmermann 於 1991 年創建，現已成為全球使用最廣泛的電子郵件加密標準，並構成 <strong>OpenPGP</strong> 規範（RFC 4880）的基礎。無論您需要發送機密電子郵件、驗證軟體發布者的身份，還是保護敏感檔案，PGP 都提供了一個經過驗證的密碼學框架，受到記者、資安研究人員、政府和日常使用者的信賴。</p>

<p>如果您想立即嘗試 PGP 加密而無需安裝軟體，KeychainPGP 提供一個完全在瀏覽器中運行的<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>。</p>

<h2 id="history-of-pgp">PGP 的歷史</h2>

<p>Phil Zimmermann 於 1991 年 6 月發布了 PGP 1.0 作為免費軟體，他深信強大的密碼學應該讓所有公民都能使用 — 而不僅限於政府和軍方。當時，強加密被美國出口管制法規歸類為軍需品，Zimmermann 因在國際間分發 PGP 而遭到美國海關署長達三年的刑事調查。調查最終於 1996 年撤銷而未提起公訴，此案成為數位自由歷史上的里程碑事件。</p>

<p>PGP 經歷了多次商業化變遷。Zimmermann 於 1996 年創立 PGP Inc.，該公司於 1997 年被 Network Associates（後來的 McAfee）收購，最終於 2010 年被 Symantec 收購。在這些轉手過程中，底層的密碼學協議已經以 <strong>OpenPGP</strong> 的名義由網際網路工程任務組（IETF）標準化，確保該協議在不受商業所有權影響的情況下保持開放和互通。</p>

<p>OpenPGP 標準的發布意味著任何人都可以建立相容的實作。這促成了 GNU Privacy Guard（GnuPG 或 GPG）的誕生，一個自由開源的實作，至今仍是使用最廣泛的 PGP 工具之一。要了解這些實作之間的差異，請參閱我們的 <a href="/zh-TW/docs/pgp-vs-gpg/">PGP vs GPG</a> 指南。</p>

<h2 id="how-pgp-encryption-works">PGP 加密如何運作</h2>

<p>PGP 加密依賴於多種密碼學技術的精密組合。PGP 並非使用單一方法，而是採用<strong>混合加密模型</strong>，結合對稱加密的速度優勢和非對稱（公開金鑰）加密的金鑰分發優勢。</p>

<h3 id="public-key-cryptography">公開金鑰密碼學</h3>

<p>PGP 的核心是<strong>公開金鑰密碼學</strong>，也稱為非對稱密碼學。每個 PGP 使用者會產生一個由兩把數學相關金鑰組成的<strong>金鑰對</strong>：</p>

<ul>
<li><strong>公開金鑰</strong> — 公開分享給任何人。他人使用此金鑰來加密發給您的訊息以及驗證您的數位簽章。</li>
<li><strong>私密金鑰</strong>（又稱秘密金鑰）— 嚴格保密。您使用此金鑰來解密收到的訊息以及建立數位簽章。</li>
</ul>

<p>此系統的基本特性是：以公開金鑰加密的資料只能用對應的私密金鑰解密，反之亦然。這消除了通訊雙方在進行私密通訊前需要傳遞共用秘密的需求。</p>

<h3 id="the-hybrid-encryption-model">混合加密模型</h3>

<p>雖然公開金鑰密碼學解決了金鑰分發問題，但像 RSA 這樣的非對稱演算法在加密大量資料時計算成本很高。PGP 透過混合方式解決此問題：</p>

<ol>
<li><strong>會話金鑰產生</strong> — PGP 為每則訊息產生一個隨機且唯一的<strong>對稱會話金鑰</strong>（通常為 128 或 256 位元）。</li>
<li><strong>資料加密</strong> — 訊息內容使用快速的對稱加密演算法（如 AES-256）以會話金鑰加密。</li>
<li><strong>會話金鑰加密</strong> — 會話金鑰本身接著使用收件人的公開金鑰加密（非對稱操作）。</li>
<li><strong>封裝</strong> — 加密後的訊息和加密後的會話金鑰被打包在一起發送給收件人。</li>
</ol>

<p>當收件人收到訊息時，過程反向進行：使用其<strong>私密金鑰</strong>解密會話金鑰，然後使用解密後的會話金鑰來解密訊息內容。</p>

<h2 id="pgp-digital-signatures">PGP 數位簽章</h2>

<p>除了加密之外，PGP 還提供<strong>數位簽章</strong>，履行兩項關鍵功能：<strong>驗證</strong>（證明訊息是誰發送的）和<strong>完整性</strong>（證明訊息在傳輸過程中未被篡改）。</p>

<p>簽章過程如下：</p>

<ol>
<li>PGP 使用 SHA-256 或 SHA-512 等演算法計算訊息內容的<strong>密碼學雜湊值</strong>（固定長度的摘要）。</li>
<li>該雜湊值接著使用發送者的<strong>私密金鑰</strong>加密，產生數位簽章。</li>
<li>簽章附加到訊息上。</li>
</ol>

<p>任何收件人都可以驗證簽章：使用發送者的<strong>公開金鑰</strong>解密簽章以取得原始雜湊值，獨立計算收到訊息的雜湊值，然後比較兩個雜湊值。如果匹配，則訊息是真實且未被修改的。</p>

<h2 id="the-openpgp-standard">OpenPGP 標準</h2>

<p><strong>OpenPGP</strong> 是定義 PGP 相容軟體所使用的訊息格式、演算法和程序的開放標準。它本身不是軟體產品，而是任何開發者都可以實作的規範。</p>

<p>關鍵參考文件包括：</p>

<ul>
<li><strong>RFC 4880</strong>（2007 年 11 月）— 現行的 OpenPGP 訊息格式主要規範。</li>
<li><strong>RFC 6637</strong>（2012 年 6 月）— 擴展 OpenPGP 以支援橢圓曲線密碼學（ECC）。</li>
<li><strong>RFC 9580</strong>（2024 年）— 最新修訂版，以強制支援 Ed25519/X25519、AEAD 加密模式和改進的金鑰指紋來現代化標準。</li>
</ul>

<p>OpenPGP 確保互通性：使用 KeychainPGP 加密的訊息可以被 GnuPG、Mailvelope 或任何其他符合標準的實作解密。</p>

<h2 id="web-of-trust">信任網路</h2>

<p>PGP 的一個顯著特徵是其去中心化的<strong>信任網路</strong>（Web of Trust）模型，用於建立公開金鑰的真實性。與 TLS/SSL 使用的中心化憑證授權（CA）模型不同，PGP 允許使用者之間相互擔保。</p>

<p>信任網路透過<strong>金鑰簽署</strong>運作：當您驗證了某人的身份並確認他們控制特定的公開金鑰時，您用自己的金鑰簽署他們的金鑰。這個簽章是一個公開聲明，表示您相信該金鑰確實屬於它所聲稱代表的人。</p>

<p>像 <a href="/zh-TW/pgp-online-encrypt/">KeychainPGP</a> 這樣的工具透過直覺化介面簡化了此過程，讓使用者可以直接操作金鑰，並使用<a href="/zh-TW/docs/clipboard-encryption/">剪貼簿加密</a>輕鬆分享加密訊息和公開金鑰。</p>

<h2 id="pgp-algorithms-and-key-types">PGP 演算法與金鑰類型</h2>

<p>PGP 支援一系列隨著密碼學領域進展而演進的密碼學演算法。</p>

<h3 id="classic-algorithms">經典演算法</h3>

<ul>
<li><strong>RSA（Rivest-Shamir-Adleman）</strong> — PGP 歷史上部署最廣泛的非對稱演算法。2048 位元的 RSA 金鑰被認為是當前的最低安全要求，建議使用 4096 位元金鑰以獲得長期保護。</li>
<li><strong>DSA（Digital Signature Algorithm）</strong> — 用於簽章，與 ElGamal 結合進行加密。目前已較少使用。</li>
<li><strong>AES（Advanced Encryption Standard）</strong> — 用於加密訊息內容的主流對稱加密演算法。支援 AES-128 和 AES-256。</li>
<li><strong>SHA-2（SHA-256、SHA-384、SHA-512）</strong> — 用於數位簽章中摘要計算的密碼學雜湊函數。</li>
</ul>

<h3 id="modern-algorithms">現代演算法</h3>

<p>最新一代的 OpenPGP 實作支援<strong>橢圓曲線密碼學（ECC）</strong>，以顯著更小的金鑰大小提供與 RSA 同等的安全性：</p>

<ul>
<li><strong>Ed25519</strong> — 基於 Curve25519 的數位簽章演算法。產生快速且精簡的簽章。在 RFC 9580 中推薦使用。</li>
<li><strong>X25519（Curve25519 ECDH）</strong> — 用於金鑰交換（加密）。以優異的效能提供強大的安全特性。</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — NIST 標準化的橢圓曲線。OpenPGP 支援但通常不如基於 Curve25519 的演算法受青睞。</li>
</ul>

<p>像 KeychainPGP 這樣的現代工具支援這些當代演算法，使得使用 Ed25519 和 X25519 產生金鑰變得簡單直接。</p>

<h2 id="common-use-cases-for-pgp">PGP 常見使用情境</h2>

<ul>
<li><strong>安全電子郵件</strong> — 最早且最知名的使用情境。PGP 可加密電子郵件內容並簽署訊息以證明真實性。</li>
<li><strong>檔案加密</strong> — PGP 可加密單一檔案或整個封存檔，用於安全儲存或傳輸。</li>
<li><strong>軟體驗證</strong> — 開源專案定期使用 PGP 金鑰簽署其發布版本。使用者可以驗證這些簽章以確認下載的真實性。</li>
<li><strong>安全通訊</strong> — PGP 可用於加密任何文字訊息，在不提供端對端加密的平台上特別有用。</li>
<li><strong>身份驗證</strong> — PGP 金鑰指紋可作為可驗證的數位身份。GitHub 上的開發者可以使用 PGP 簽署其 commit。</li>
<li><strong>文件簽署</strong> — 法律工作流程有時使用 PGP 簽章來建立不可否認性。</li>
</ul>

<h2 id="pgp-today">今日的 PGP</h2>

<p>在問世超過三十年後，PGP 仍然是最重要的密碼學工具之一。OpenPGP 標準持續演進，RFC 9580 引入了重大現代化改進，包括強制支援現代橢圓曲線演算法和 AEAD 加密模式。</p>

<p>PGP 工具生態系統已大幅豐富。GnuPG 仍然是命令列使用的參考實作。像 KeychainPGP 這樣的現代工具提供原生桌面應用程式（Windows、macOS、Linux）、Android 應用程式、用於腳本的 CLI 和瀏覽器內網頁應用程式 — 全部建構在相同的 Rust Sequoia-PGP 引擎上。</p>

<h2 id="getting-started-with-pgp">開始使用 PGP</h2>

<p>準備好開始使用 PGP 加密了嗎？以下是最佳的下一步：</p>

<ol>
<li><strong>在瀏覽器中嘗試</strong> — 使用 KeychainPGP 的<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 工具</a>來產生金鑰對、加密訊息或驗證簽章，無需安裝任何東西。</li>
<li><strong>閱讀入門指南</strong> — 如果您是密碼學新手，我們的 <a href="/zh-TW/docs/pgp-for-beginners/">PGP 入門指南</a>將逐步帶您上手。</li>
<li><strong>學習實務工作流程</strong> — 我們的<a href="/zh-TW/docs/how-to-use-pgp/">如何使用 PGP</a> 指南涵蓋金鑰產生、加密和解密、金鑰鏈管理及最佳實踐。</li>
<li><strong>了解剪貼簿加密</strong> — 探索 <a href="/zh-TW/docs/clipboard-encryption/">PGP 剪貼簿加密</a>，直接從剪貼簿加密和解密文字。</li>
<li><strong>認識工具</strong> — 了解 <a href="/zh-TW/docs/pgp-vs-gpg/">PGP 和 GPG 之間的差異</a>，為您的工作流程選擇合適的工具。</li>
</ol>

<p>PGP 加密已保護敏感通訊超過三十年。借助現代工具和標準，它比以往更容易使用。</p>
`
};

export default doc;
