import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGPの使い方：ステップバイステップ暗号化チュートリアル（2026年）',
	description: 'PGP暗号化の使い方をステップバイステップで学びます。鍵の生成、メッセージの暗号化・復号、データの署名・検証をこの包括的なPGPチュートリアルで解説。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'PGPの使い方', level: 1 },
		{ id: 'what-you-need-before-you-start', text: '始める前に必要なもの', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'ステップ1：鍵ペアの生成', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'ステップ2：公開鍵の共有', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'ステップ3：連絡先の公開鍵をインポート', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'ステップ4：メッセージの暗号化', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'ステップ5：メッセージの復号', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'ステップ6：メッセージへの署名', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'ステップ7：署名の検証', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGPクリップボードワークフロー', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'ウェブアプリ vs デスクトップアプリ', level: 2 },
		{ id: 'frequently-asked-questions', text: 'よくある質問', level: 2 }
	],
	html: `
<h1>PGPの使い方</h1>

<p>PGPを使用するには、鍵ペア（公開鍵と秘密鍵）を生成し、通信したい相手と公開鍵を共有し、相手の公開鍵をインポートしてから、それらの鍵を使ってメッセージの暗号化、復号、署名、検証を行います。PGP暗号化は意図された受信者だけがメッセージを読めることを保証し、デジタル署名はメッセージが確実にあなたからのものであることを証明します。<a href="/ja/pgp-online-encrypt/">KeychainPGP</a>のようなツールは、コマンドラインなしで、クリップボードベースのワークフローによってこのプロセスをアクセスしやすくします。</p>

<p>このPGPチュートリアルでは、最初の鍵ペアの生成から暗号化メッセージの送受信まで、各ステップをガイドします。公開鍵暗号の概念に初めて触れる方は、まず<a href="/ja/docs/what-is-pgp/">PGPとは？</a>または<a href="/ja/docs/pgp-for-beginners/">PGP入門ガイド</a>をお読みください。</p>

<hr>

<h2 id="what-you-need-before-you-start">始める前に必要なもの</h2>

<p>PGPで最初のメッセージを暗号化する前に、PGPアプリケーションが必要です：</p>

<ul>
<li><strong>KeychainPGPウェブアプリ</strong> — 任意のモダンブラウザで<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>を開きます。Rustからコンパイルされたwebassemblyを介してすべてがローカルで動作します。インストール不要、アカウント不要、サーバーへのデータ送信なし。</li>
<li><strong>KeychainPGPデスクトップアプリ</strong> — Windows、macOS、Linux、Android向けのネイティブアプリを<a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHubリリースページ</a>からダウンロードできます。デスクトップアプリにはグローバルショートカット、システムトレイ統合、クリップボード自動消去、QRコード同期が追加されています。</li>
<li><strong>KeychainPGP CLI</strong> — <code>keychainpgp</code> CLIは、鍵生成、暗号化、復号、署名、検証、鍵管理のコマンドを提供します。スクリプティングと自動化に最適です。</li>
<li><strong>GnuPG（GPG）</strong> — 伝統的なコマンドラインツール。強力ですがターミナルの知識が必要です。詳細な比較は<a href="/ja/docs/pgp-vs-gpg/">PGP vs GPG</a>をご覧ください。</li>
</ul>

<blockquote><p><strong>ヒント：</strong>何もインストールせずにPGP暗号化を試したいだけなら、<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>を開いてこのチュートリアルに従ってください。</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">ステップ1：PGP鍵ペアの生成</h2>

<p>PGP鍵ペアは、数学的に関連する2つの鍵で構成されます：</p>

<ul>
<li><strong>公開鍵</strong> — 自由に共有します。誰でもこの鍵を使ってあなた宛てのメッセージを暗号化したり、あなたの署名を検証したりできます。</li>
<li><strong>秘密鍵</strong> — 秘密にしておきます。公開鍵で暗号化されたメッセージを復号し、デジタル署名を作成するために使用します。</li>
</ul>

<h3>KeychainPGPでの鍵生成</h3>

<ol>
<li>KeychainPGP（ウェブアプリまたはデスクトップアプリ）を開きます。</li>
<li><strong>鍵</strong>タブに移動します。</li>
<li><strong>新しい鍵を生成</strong>をクリックします。</li>
<li>名前とメールアドレスを入力します。</li>
<li><strong>生成</strong>をクリックします。KeychainPGPは<strong>Ed25519 + X25519</strong>鍵ペアを作成します — OpenPGPで利用可能な最もモダンで安全なアルゴリズムです。</li>
</ol>

<h3>GPG（コマンドライン）での鍵生成</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>鍵の種類（RSAまたはECC）、サイズ、有効期限を選択します。モダンなセキュリティのために、GPGのバージョンがサポートしている場合はEd25519を選択してください。</p>

<hr>

<h2 id="step-2-share-your-public-key">ステップ2：公開鍵の共有</h2>

<p>公開鍵は<strong>ASCII-armored</strong>形式のテキストブロックです。どこでも共有できます：</p>

<ul>
<li><strong>メール</strong> — メール本文に貼り付けるか、<code>.asc</code>ファイルとして添付します。</li>
<li><strong>メッセージングアプリ</strong> — Signal、WhatsApp、Matrixなどのチャットプラットフォームで送信します。</li>
<li><strong>ウェブサイト</strong> — 個人サイト、GitHubプロフィール、Twitterプロフィールに公開します。</li>
<li><strong>鍵サーバー</strong> — <code>keys.openpgp.org</code>のような公開鍵サーバーにアップロードします。</li>
</ul>

<p><strong>重要：</strong><strong>公開鍵</strong>のみを共有してください。秘密鍵は絶対に誰とも共有しないでください。</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">ステップ3：連絡先の公開鍵をインポート</h2>

<p>暗号化メッセージを誰かに送信する前に、その人の公開鍵が必要です。連絡先にASCII-armored形式の公開鍵を送ってもらうか、鍵サーバーで検索します。</p>

<h3>KeychainPGPでの鍵インポート</h3>

<ol>
<li>連絡先の公開鍵ブロックをクリップボードにコピーします。</li>
<li>KeychainPGPを開いて<strong>鍵</strong>タブに移動します。</li>
<li><strong>鍵をインポート</strong>をクリックし、鍵を貼り付けます。</li>
<li>連絡先が名前とメールアドレスとともに鍵リストに表示されます。</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">ステップ4：メッセージの暗号化</h2>

<h3>KeychainPGP（ウェブまたはデスクトップ）での暗号化</h3>

<ol>
<li><strong>暗号化</strong>タブに移動します。</li>
<li>暗号化したいメッセージを入力または貼り付けます。</li>
<li>鍵リストから受信者を選択します。</li>
<li><strong>クリップボードに暗号化</strong>をクリックします。暗号化されたメッセージがクリップボードにコピーされます。</li>
<li>暗号化されたメッセージをメール、チャット、またはその他の通信チャネルに貼り付けます。</li>
</ol>

<h3>デスクトップショートカットでの暗号化</h3>

<p>KeychainPGPデスクトップアプリでは、<a href="/ja/docs/clipboard-encryption/">クリップボードワークフロー</a>によりさらに高速です：</p>

<ol>
<li>任意のアプリケーションでメッセージを入力します。</li>
<li>テキストを選択してコピーします（<code>Ctrl+C</code>）。</li>
<li><strong><code>Ctrl+Shift+E</code></strong>を押します — KeychainPGPがクリップボードの内容を暗号化します。</li>
<li>暗号化されたメッセージを貼り付けます（<code>Ctrl+V</code>）。</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">ステップ5：メッセージの復号</h2>

<h3>KeychainPGP（ウェブまたはデスクトップ）での復号</h3>

<ol>
<li>暗号化されたメッセージブロック全体をコピーします。</li>
<li>KeychainPGPの<strong>復号</strong>タブに移動します。</li>
<li>暗号文を貼り付けます。</li>
<li><strong>復号</strong>をクリックします。平文がすぐに表示されます。</li>
</ol>

<h3>デスクトップショートカットでの復号</h3>

<ol>
<li>暗号化されたメッセージブロックを選択してコピーします（<code>Ctrl+C</code>）。</li>
<li><strong><code>Ctrl+Shift+D</code></strong>を押します — KeychainPGPがクリップボードの内容を復号します。</li>
<li>平文がクリップボード内の暗号文と置き換わります。必要な場所に貼り付けてください。</li>
</ol>

<p>デスクトップアプリには<strong>クリップボード自動消去</strong>機能もあります：30秒後に、復号されたテキストがクリップボードから自動的に削除されます。</p>

<hr>

<h2 id="step-6-sign-a-message">ステップ6：メッセージへの署名</h2>

<p>PGPデジタル署名は2つのことを証明します：</p>

<ol>
<li><strong>真正性</strong> — メッセージが署名鍵の所有者によって書かれたこと。</li>
<li><strong>完全性</strong> — メッセージが署名後に改ざんされていないこと。</li>
</ol>

<p>署名はメッセージを暗号化しません。誰でも署名されたメッセージを読めますが、それがあなたからのものであり改ざんされていないことを検証できます。</p>

<h3>メッセージに署名するタイミング</h3>

<ul>
<li>ソフトウェアリリースやセキュリティ勧告の発表</li>
<li>公開フォーラムでの本人確認</li>
<li>送信元を証明するためのメール署名</li>
<li>コードの完全性のためのGitコミット署名</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">ステップ7：署名の検証</h2>

<p>署名付きメッセージを受信したら、それが本物で改ざんされていないことを検証できます。</p>

<h3>KeychainPGPでの検証</h3>

<ol>
<li>署名付きメッセージ全体（署名ブロックを含む）をコピーします。</li>
<li><strong>検証</strong>タブに移動します。</li>
<li>署名付きメッセージを貼り付けます。</li>
<li><strong>検証</strong>をクリックします。KeychainPGPが署名が有効かどうかを確認します。</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGPクリップボードワークフロー</h2>

<p>KeychainPGPを従来のPGPツールと区別するのは、その<a href="/ja/docs/clipboard-encryption/">クリップボード暗号化ワークフロー</a>です。ファイル操作や専用メールクライアントを必要とする代わりに、KeychainPGPはシステムクリップボードを通じてあらゆるアプリケーションで動作します。</p>

<table>
<tr><th>操作</th><th>ウェブアプリ</th><th>デスクトップアプリ</th></tr>
<tr><td>暗号化</td><td>テキストを貼り付け、暗号化をクリック</td><td>テキストをコピー、<code>Ctrl+Shift+E</code>を押す</td></tr>
<tr><td>復号</td><td>暗号文を貼り付け、復号をクリック</td><td>暗号文をコピー、<code>Ctrl+Shift+D</code>を押す</td></tr>
<tr><td>署名</td><td>テキストを貼り付け、署名をクリック</td><td>アプリウィンドウ内で利用可能</td></tr>
<tr><td>検証</td><td>署名付きテキストを貼り付け、検証をクリック</td><td>アプリウィンドウ内で利用可能</td></tr>
</table>

<p>デスクトップアプリの追加セキュリティ機能：</p>

<ul>
<li><strong>クリップボード自動消去</strong> — 復号されたテキストは30秒後にクリップボードから削除されます。</li>
<li><strong>OPSECモード</strong> — ウィンドウタイトルの偽装、RAM専用鍵ストレージ、緊急消去ボタン。</li>
<li><strong>OS資格情報ストア</strong> — 秘密鍵はWindows資格情報マネージャー、macOSキーチェーン、またはLinux Secret Serviceを通じて安全に保管されます。</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">ウェブアプリ vs デスクトップアプリ</h2>

<p><strong>ウェブアプリ</strong>（<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>）：</p>

<ul>
<li>WebAssemblyを介してブラウザ内で完全に動作</li>
<li>インストール不要、アカウント不要</li>
<li>素早い暗号化タスクに最適</li>
<li>鍵はブラウザのローカルストレージに保存</li>
</ul>

<p><strong>デスクトップアプリ</strong>（Windows、macOS、Linux、Android）：</p>

<ul>
<li>暗号化・復号用のグローバルショートカット</li>
<li>システムトレイ統合</li>
<li>クリップボード自動消去</li>
<li>RAM専用鍵と緊急消去のOPSECモード</li>
<li>OS資格情報マネージャーによる安全な鍵保管</li>
<li>日常的な使用と長期的な鍵管理に最適</li>
</ul>

<p>両方のアプリは無料、オープンソース（MIT / Apache-2.0）で、テレメトリは一切ありません。</p>

<hr>

<h2 id="frequently-asked-questions">よくある質問</h2>

<h3>秘密鍵を共有すべきですか？</h3>

<p>いいえ。秘密鍵は<strong>絶対に</strong>誰とも共有しないでください。秘密鍵はあなた宛てに送信されたメッセージを復号し、デジタル署名を作成するためのものです。他の誰かがあなたの秘密鍵を入手すると、あなた宛てのすべての暗号化メッセージを読み、あなたになりすますことができます。</p>

<h3>秘密鍵を紛失したらどうなりますか？</h3>

<p>秘密鍵を紛失すると、対応する公開鍵で暗号化されたすべてのメッセージを復号する能力が永久に失われます。復旧の仕組みはありません。秘密鍵は常に安全にバックアップしてください。</p>

<h3>PGPでファイルを暗号化できますか？</h3>

<p>はい。PGPはテキストメッセージとバイナリファイルの両方を暗号化できます。KeychainPGPはテキストのクリップボード暗号化に特化していますが、GnuPGのようなツールはファイル暗号化を直接サポートしています。詳細な比較は<a href="/ja/docs/pgp-vs-gpg/">PGP vs GPG</a>ガイドをご覧ください。</p>

<h3>PGP暗号化は安全ですか？</h3>

<p>モダンなアルゴリズムを使用したPGP暗号化は非常に安全です。KeychainPGPは署名にEd25519、鍵交換にX25519を使用しています — 鍵サイズの数分の一でRSA-3072と同等のセキュリティを提供する楕円曲線アルゴリズムです。主なリスクは暗号学的なものではなく運用上のもの：弱いパスフレーズ、侵害されたデバイス、不注意な鍵管理です。</p>

<h3>PGPフィンガープリントとは？</h3>

<p>PGPフィンガープリントは、PGP鍵を一意に識別する40文字の16進数文字列です。フィンガープリントは、公開鍵が想定する人物のものであることを確認するために使用されます。中間者攻撃を防ぐために、別の信頼できるチャネル（電話、ビデオ通話、対面）でフィンガープリントを比較してください。</p>
`
};

export default doc;
