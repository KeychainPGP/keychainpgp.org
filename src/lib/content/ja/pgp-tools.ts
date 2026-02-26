import type { DocContent } from '../types';

const doc: DocContent = {
	title: '2026年最高のPGPツールと暗号化ソフトウェア — 完全ガイド',
	description: 'PGPツールと暗号化ソフトウェアの完全ガイド。デスクトップ、ウェブ、モバイル、CLIのOpenPGPツールを比較して、あなたのニーズに合ったものを見つけましょう。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'PGPツールとは？', level: 2 },
		{ id: 'desktop-pgp-software', text: 'デスクトップPGPソフトウェア', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG（GPG）', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'ウェブベースのPGPツール', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'モバイルPGPツール', level: 2 },
		{ id: 'cli-pgp-tools', text: 'コマンドラインPGPツール', level: 2 },
		{ id: 'email-pgp-integration', text: 'メールPGP統合', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'PGPツール比較', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: '適切なPGPツールの選択', level: 2 },
		{ id: 'why-keychainpgp', text: 'KeychainPGPの理由', level: 2 },
		{ id: 'getting-started', text: '始める', level: 2 }
	],
	html: `
<h1>2026年最高のPGPツールと暗号化ソフトウェア</h1>

<p>メッセージの暗号化、ファイルの署名、OpenPGP鍵の管理のために、幅広いPGPツールが利用可能です。これらのツールはデスクトップアプリケーション、ウェブユーティリティ、モバイルアプリ、コマンドラインインターフェース、メールプラグインにわたります。このガイドでは、PGPソフトウェアの主要カテゴリをすべてカバーし、情報に基づいた選択ができるようにします。</p>

<h2 id="what-are-pgp-tools">PGPツールとは？</h2>

<p>PGPツールは、公開鍵暗号のための<a href="/ja/docs/what-is-pgp/">OpenPGP標準</a>（RFC 4880およびその後継）を実装するソフトウェアアプリケーションです。鍵ペアの生成、メッセージの暗号化・復号、デジタル署名の作成・検証、鍵リングの管理が可能です。<a href="/ja/docs/pgp-vs-gpg/">PGPとGPGの違い</a>を理解することで、なぜこれほど多くの異なるツールが存在するのかが明確になります。</p>

<h2 id="desktop-pgp-software">デスクトップPGPソフトウェア</h2>

<h3 id="gnupg-gpg">GnuPG（GPG）</h3>

<p><strong>GnuPG</strong>（GNU Privacy Guard）はOpenPGP標準のリファレンスオープンソース実装です。事実上すべてのオペレーティングシステムで利用可能で、非常に強力ですが主にコマンドラインベースです。RSA、DSA、ECDSA、EdDSA、および幅広い対称暗号をサポートしています。</p>

<ul>
<li><strong>プラットフォーム：</strong>Windows、macOS、Linux、BSD</li>
<li><strong>インターフェース：</strong>コマンドライン（オプションのGUIフロントエンドあり）</li>
<li><strong>ライセンス：</strong>GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong>はGnuPGとKleopatraというWindows向けネイティブGUIをバンドルしています。証明書管理、Windows Explorer統合によるファイル暗号化、OpenPGPに加えてS/MIMEサポートを提供します。</p>

<ul>
<li><strong>プラットフォーム：</strong>Windows</li>
<li><strong>ライセンス：</strong>GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong>はGpg4winのmacOS版です。鍵管理用のGPG Keychain、GPGServicesコンテキストメニュー、Apple Mail統合用のGPG Mailが含まれています。</p>

<ul>
<li><strong>プラットフォーム：</strong>macOS</li>
<li><strong>ライセンス：</strong>オープンソース（Mailプラグインは有料）</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong>はPGP暗号化に根本的に異なるアプローチを採用しています。GnuPGをGUIでラップするのではなく、Rustで書かれた<strong>Sequoia-PGP</strong>ライブラリを使用して、モダンなクリップボードベースのワークフローを提供します。テキストをコピーし、グローバルショートカット（暗号化は<code>Ctrl+Shift+E</code>、復号は<code>Ctrl+Shift+D</code>）を押し、結果を貼り付けます — システム上のあらゆるアプリケーションで動作します。</p>

<ul>
<li><strong>プラットフォーム：</strong>Windows、macOS、Linux、Android、Web、CLI</li>
<li><strong>インターフェース：</strong>GUI + システムトレイ + グローバルショートカット + CLI</li>
<li><strong>ライセンス：</strong>MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">ウェブベースのPGPツール</h2>

<p><a href="/ja/pgp-online-encrypt/">KeychainPGPウェブアプリ</a>は同じRustベースのSequoia-PGPエンジンをWebAssemblyにコンパイルするため、すべての暗号操作がブラウザ内でローカルに行われます。サーバーにデータは送信されません。<strong>Mailvelope</strong>はGmailやOutlook.comなどのウェブメールプロバイダーにOpenPGP暗号化を直接統合するブラウザ拡張機能です。</p>

<h2 id="mobile-pgp-tools">モバイルPGPツール</h2>

<p><strong>OpenKeychain</strong>はAndroid向けの成熟したオープンソースOpenPGPアプリで、K-9 Mailとの統合があります。<strong>KeychainPGP for Android</strong>はEd25519/X25519鍵生成によるモダンな暗号技術をモバイルにもたらし、デスクトップアプリとのQRコードによる鍵同期が可能です。</p>

<h2 id="cli-pgp-tools">コマンドラインPGPツール</h2>

<p><strong>GnuPG</strong>（<code>gpg</code>）が主要なCLIツールです。<strong>KeychainPGP</strong>は鍵生成、暗号化、復号、署名、検証、鍵検査、鍵管理のコマンドを持つ独自のCLI（<code>keychainpgp</code>）を提供します。<strong>Sequoia-PGP</strong>も<code>sq</code>という別のモダンなRustベースのCLIを提供しています。</p>

<h2 id="email-pgp-integration">メールPGP統合</h2>

<p><strong>Mozilla Thunderbird</strong>はバージョン78からネイティブのOpenPGPサポートが組み込まれています。<strong>ProtonMail</strong>は内部でOpenPGPを使用したエンドツーエンド暗号化を提供しますが、鍵管理をすべて抽象化しています。</p>

<h2 id="pgp-tools-comparison">PGPツール比較</h2>

<table>
<tr><th>ツール</th><th>プラットフォーム</th><th>インターフェース</th><th>デフォルト鍵</th><th>オープンソース</th><th>最適な用途</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>はい（GPLv3）</td><td>上級ユーザー、スクリプティング</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>はい（GPLv3）</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>一部</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + ショートカット + CLI</td><td>Ed25519/X25519</td><td>はい（MIT/Apache-2.0）</td><td>クリップボードワークフロー</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>ブラウザ拡張</td><td>ウェブメールオーバーレイ</td><td>RSA-4096</td><td>はい（AGPLv3）</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>ネイティブGUI</td><td>RSA-3072</td><td>はい（GPLv3）</td><td>Android鍵管理</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>メールクライアント</td><td>RSA-3072</td><td>はい（MPL 2.0）</td><td>暗号化メール</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>ウェブメール</td><td>X25519</td><td>一部</td><td>設定不要メール</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">適切なPGPツールの選択</h2>

<h3>使いやすさ</h3>
<p>GnuPGのような従来のツールは技術者向けに設計されています。KeychainPGPはアルゴリズムの選択や設定ファイルを排除し、鍵を生成してすぐに暗号化を開始できます。</p>

<h3>セキュリティと暗号デフォルト</h3>
<p>KeychainPGPやSequoiaの<code>sq</code>のようなモダンなツールはデフォルトで<strong>Ed25519/X25519</strong>を使用し、はるかに小さな鍵で同等以上のセキュリティを提供します。基盤となるライブラリも重要です：Sequoia-PGP（Rust）は強力なメモリ安全性の保証を提供します。</p>

<h3>プラットフォームカバレッジ</h3>
<p>KeychainPGPは一貫したインターフェースでWindows、macOS、Linux、Android、ウェブをカバーします。GnuPGはどこでも利用可能ですが、各プラットフォームで異なるGUIフロントエンドが必要です。</p>

<h2 id="why-keychainpgp">KeychainPGPの理由</h2>

<p>KeychainPGPは何十年もの間PGP暗号化をアクセスしにくくしていた問題を解決するために設計されました：</p>

<ul>
<li><strong>クリップボードワークフロー。</strong>単一のアプリケーションと統合する代わりに、KeychainPGPは<em>すべての</em>アプリケーションで動作します。テキストをコピーし、単一のショートカットで暗号化または復号し、結果を貼り付けます。</li>
<li><strong>デフォルトでモダンな暗号技術。</strong><strong>Ed25519</strong>署名鍵と<strong>X25519</strong>暗号化サブキーを自動的に使用。</li>
<li><strong>単一コードベースでマルチプラットフォーム。</strong>Tauriで構築されたデスクトップアプリ、WebAssemblyでコンパイルされたウェブアプリ。Windows、macOS、Linux、Android、ブラウザで同一のインターフェースと暗号動作。</li>
<li><strong>Sequoia-PGP搭載。</strong>脆弱性のクラス全体を排除するメモリ安全性保証を持つRust暗号エンジン。</li>
<li><strong>真のフリーでオープンソース。</strong>MIT / Apache-2.0ライセンス、有料ティアなし、アカウント不要、テレメトリなし。</li>
</ul>

<h2 id="getting-started">始める</h2>

<ul>
<li><strong>今すぐ試す</strong>（インストール不要）：ブラウザで<a href="/ja/pgp-online-encrypt/">KeychainPGPオンラインPGPツール</a>を開きます。</li>
<li><strong>基礎を学ぶ</strong>：<a href="/ja/docs/what-is-pgp/">PGPとは？</a>を読みます。</li>
<li><strong>エコシステムを理解する</strong>：<a href="/ja/docs/pgp-vs-gpg/">PGP vs GPG</a>の記事で標準、プロトコル、ツールの関係を解説しています。</li>
<li><strong>選択肢を比較する</strong>：<a href="/ja/blog/best-pgp-tools-2026/">2026年最高のPGPツール</a>ランキングまたは<a href="/ja/blog/pgp-software-comparison/">PGPソフトウェア完全比較</a>をご覧ください。</li>
<li><strong>KeychainPGPをダウンロード</strong>：<a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHubリリース</a>からデスクトップアプリを入手します。</li>
</ul>
`
};

export default doc;
