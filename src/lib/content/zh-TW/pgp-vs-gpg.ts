import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG：PGP 和 GPG 有什麼區別？',
	description: '了解 PGP 和 GPG 之間的區別。比較 Pretty Good Privacy、GnuPG 和 OpenPGP 標準，找到適合的加密工具。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: '有什麼區別？', level: 2 },
		{ id: 'what-is-pgp', text: '什麼是 PGP？', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: '什麼是 GPG (GnuPG)？', level: 2 },
		{ id: 'what-is-openpgp', text: '什麼是 OpenPGP？', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'PGP vs GPG 比較表', level: 2 },
		{ id: 'key-differences-explained', text: '主要差異說明', level: 2 },
		{ id: 'which-should-you-use', text: '您應該使用哪個？', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'KeychainPGP 的定位', level: 2 },
		{ id: 'frequently-asked-questions', text: '常見問題', level: 2 }
	],
	html: `
<h1>PGP vs GPG：PGP 和 GPG 有什麼區別？</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">PGP 和 GPG 有什麼區別？</h2>

<p>PGP 和 GPG 之間的區別在於它們的來源和授權方式。<strong>PGP</strong>（Pretty Good Privacy）是 Phil Zimmermann 於 1991 年創建的原始專有加密程式。<strong>GPG</strong>（GNU Privacy Guard，又稱 GnuPG）是同一概念的自由開源重新實作，作為 GNU 計畫的一部分開發。兩個程式都實作了 <strong>OpenPGP</strong> 標準，這意味著它們產生的加密訊息彼此相容，可以互相使用對方的金鑰。在實務中，GPG 是大多數人今天使用的工具，因為它免費、持續維護且可在所有主要作業系統上使用。如果您是加密新手，我們的 <a href="/zh-TW/docs/pgp-for-beginners/">PGP 入門指南</a>逐步介紹基礎概念。</p>

<h2 id="what-is-pgp">什麼是 PGP？</h2>

<p>PGP 代表 <strong>Pretty Good Privacy</strong>。Phil Zimmermann 於 1991 年撰寫了第一個版本，作為免費工具發布，供社運人士和普通公民使用強加密。該軟體結合了對稱金鑰加密和公開金鑰密碼學。</p>

<p>在經歷三年的聯邦調查（1996 年撤銷）後，Zimmermann 創立了 PGP Inc.。該公司多次易手：1997 年 Network Associates、2002 年 PGP Corporation，然後 2010 年 Symantec（現為 Broadcom）。如今，PGP 作為主要面向企業的商業產品套件而存在。</p>

<p>要深入了解底層技術，請參閱我們關於<a href="/zh-TW/docs/what-is-pgp/">什麼是 PGP 及其運作方式</a>的完整文章。</p>

<h2 id="what-is-gpg-gnupg">什麼是 GPG (GnuPG)？</h2>

<p>GPG，或稱 <strong>GNU Privacy Guard (GnuPG)</strong>，是 OpenPGP 標準的自由開源實作。Werner Koch 於 1997 年在德國政府資助下啟動了該專案，並於 1999 年發布 1.0 版。GnuPG 專門為提供專有 PGP 軟體的完全自由替代方案而建立。</p>

<p>GnuPG 是 GNU 計畫的一部分，以 GNU 通用公共授權（GPL）發布。它預設包含在大多數 Linux 發行版中。命令列工具 <code>gpg</code> 是大多數開發者和系統管理員使用的介面。如需可用工具的概覽，請參閱我們的 <a href="/zh-TW/docs/pgp-tools/">PGP 工具比較</a>。</p>

<h2 id="what-is-openpgp">什麼是 OpenPGP？</h2>

<p><strong>OpenPGP</strong> 既不是產品也不是軟體。它是一個開放標準，定義了 PGP 相容工具必須遵循的訊息格式、金鑰格式和密碼學程序。IETF 於 1998 年發布了原始規範 <strong>RFC 2440</strong>，最被廣泛引用的版本是 <strong>RFC 4880</strong>（2007 年）。一個重大更新 <strong>RFC 9580</strong>（2024 年）以 Ed25519 支援和 AEAD 加密現代化了該標準。</p>

<p>OpenPGP 的存在使互通性成為可能。因為 PGP 和 GPG 實作了相同的標準，用 GPG 加密的訊息可以被 PGP 解密，反之亦然。</p>

<h2 id="pgp-vs-gpg-comparison-table">PGP vs GPG 比較表</h2>

<table>
<tr><th>特性</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>類型</strong></td><td>商業軟體</td><td>自由/開源軟體</td><td>開放標準</td></tr>
<tr><td><strong>授權</strong></td><td>專有</td><td>GPL（免費）</td><td>IETF 規範</td></tr>
<tr><td><strong>費用</strong></td><td>付費授權</td><td>免費</td><td>不適用</td></tr>
<tr><td><strong>平台</strong></td><td>Windows、macOS</td><td>Windows、macOS、Linux、BSD</td><td>不適用</td></tr>
<tr><td><strong>內建 GUI</strong></td><td>是（企業控制台）</td><td>否（可用第三方 GUI）</td><td>不適用</td></tr>
<tr><td><strong>原始碼可用</strong></td><td>否</td><td>是</td><td>公開標準</td></tr>
</table>

<h2 id="key-differences-explained">主要差異說明</h2>

<h3>授權和費用</h3>

<p>PGP 是以商業授權銷售的專有軟體。GPG 以 GPL 發布，意味著任何人都可以免費下載、使用、修改和重新分發。對於個人、小型團隊和開源專案，GPG 在費用方面是顯而易見的選擇。</p>

<h3>平台支援</h3>

<p>GnuPG 可在幾乎所有 Unix 系統上運行，並有 Windows 和 macOS 的官方版本。若需跨平台使用，像 KeychainPGP 這樣的現代工具從單一程式碼庫為 Windows、macOS、Linux 和 Android 提供原生版本。</p>

<h3>使用者體驗</h3>

<p>商業版 PGP 包含用於企業部署的圖形介面。GnuPG 本質上是命令列工具。像 KeychainPGP 這樣的工具提供原生圖形介面，處理金鑰管理、加密、解密和簽署，無需記憶命令列選項。您可以直接在瀏覽器中使用我們的<a href="/zh-TW/pgp-online-encrypt/">線上 PGP 加密工具</a>嘗試 PGP 加密。</p>

<h2 id="which-should-you-use">您應該使用哪個？</h2>

<ul>
<li><strong>擁有現有 Broadcom/Symantec 基礎架構的企業：</strong>商業版 PGP 可能是阻力最小的路徑。</li>
<li><strong>開發者和系統管理員：</strong>GnuPG 是標準工具，預設安裝在大多數伺服器上。</li>
<li><strong>注重隱私且需要 GUI 的使用者：</strong>考慮使用像 KeychainPGP 這樣的現代 OpenPGP 應用程式。</li>
<li><strong>網頁或快速加密需求：</strong><a href="/zh-TW/pgp-online-encrypt/">線上 PGP 加密工具</a>可以處理一次性任務而無需安裝任何東西。</li>
</ul>

<h2 id="where-keychainpgp-fits-in">KeychainPGP 的定位</h2>

<p><a href="/">KeychainPGP</a> 是一個現代的開源桌面應用程式，使用 <strong>Sequoia-PGP</strong>（一個從零開始用 Rust 編寫的 OpenPGP 函式庫）實作 OpenPGP 標準。它既不是 PGP（商業產品）也不是 GPG (GnuPG)。它是一個獨立實作，在 OpenPGP 生態系統中與兩者共存。</p>

<p>考慮 KeychainPGP 的主要原因：</p>

<ul>
<li><strong>跨平台：</strong>Windows、macOS、Linux 和 Android 的原生版本，加上網頁應用程式和 CLI</li>
<li><strong>現代密碼學：</strong>基於 Sequoia-PGP 構建，支援 Curve25519/Ed25519 和 AEAD</li>
<li><strong>開放原始碼：</strong>MIT / Apache-2.0 雙重授權，完整可審計</li>
<li><strong>使用者友善：</strong>圖形介面搭配剪貼簿工作流程和全域快捷鍵</li>
<li><strong>CLI 自動化：</strong><code>keychainpgp</code> CLI 支援金鑰產生、加密、解密、簽署、驗證和金鑰鏈管理</li>
<li><strong>符合 OpenPGP：</strong>金鑰和訊息與 GPG、PGP 及任何其他 OpenPGP 工具互通</li>
</ul>

<h2 id="frequently-asked-questions">常見問題</h2>

<h3>GPG 和 PGP 是一樣的嗎？</h3>

<p>不是。GPG (GnuPG) 和 PGP 是由不同人創建的不同軟體。PGP 由 Phil Zimmermann 於 1991 年創建，現為 Broadcom 的商業產品。GPG 由 Werner Koch 於 1997 年創建，作為自由開源的替代方案。兩者都實作了 OpenPGP 標準，因此在功能上是相容的。</p>

<h3>GPG 和 PGP 的金鑰可以互相使用嗎？</h3>

<p>可以。GPG 和 PGP 使用 IETF 標準定義的 OpenPGP 金鑰格式。您可以從 GPG 匯出公開金鑰並匯入到 PGP 中，或匯入到任何符合 OpenPGP 的工具（如 KeychainPGP）中。</p>

<h3>GPG 在 2026 年還安全嗎？</h3>

<p>GnuPG 仍然是一個安全且持續維護的工具。使用現代金鑰類型（如 Ed25519），保持軟體更新，並遵循良好的金鑰管理實踐。如需逐步指南，請參閱我們的 <a href="/zh-TW/docs/pgp-for-beginners/">PGP 入門指南</a>。</p>

<h3>OpenPGP 是什麼意思？</h3>

<p>OpenPGP 是 IETF 發布的開放標準，定義了 PGP 相容加密的運作方式。它規定了訊息格式、金鑰格式、演算法要求和簽章結構。</p>

<h3>使用 KeychainPGP 需要 PGP 或 GPG 嗎？</h3>

<p>不需要。KeychainPGP 是一個獨立的應用程式，不依賴 PGP 或 GnuPG 的安裝。它使用 Sequoia-PGP 函式庫，一個以 Rust 編寫的獨立 OpenPGP 標準實作。但是，在 KeychainPGP 中建立的金鑰和加密訊息與 GPG 和 PGP 完全相容。</p>
`
};

export default doc;
