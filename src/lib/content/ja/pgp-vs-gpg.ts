import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG：PGPとGPGの違いとは？',
	description: 'PGPとGPGの違いを解説。Pretty Good Privacy、GnuPG、OpenPGP標準を比較し、適切な暗号化ツールを見つけましょう。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: '違いは何か？', level: 2 },
		{ id: 'what-is-pgp', text: 'PGPとは？', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'GPG（GnuPG）とは？', level: 2 },
		{ id: 'what-is-openpgp', text: 'OpenPGPとは？', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'PGP vs GPG比較表', level: 2 },
		{ id: 'key-differences-explained', text: '主な違いの解説', level: 2 },
		{ id: 'which-should-you-use', text: 'どちらを使うべきか？', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'KeychainPGPの位置づけ', level: 2 },
		{ id: 'frequently-asked-questions', text: 'よくある質問', level: 2 }
	],
	html: `
<h1>PGP vs GPG：PGPとGPGの違いとは？</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">PGPとGPGの違いは何か？</h2>

<p>PGPとGPGの違いは、その起源とライセンスにあります。<strong>PGP</strong>（Pretty Good Privacy）は、1991年にPhil Zimmermannが作成したオリジナルのプロプライエタリ暗号化プログラムです。<strong>GPG</strong>（GNU Privacy Guard、GnuPGとも呼ばれる）は、GNUプロジェクトの一環として開発された、同じコンセプトのフリーでオープンソースの再実装です。両方のプログラムは<strong>OpenPGP</strong>標準を実装しているため、互換性のある暗号化メッセージを生成し、お互いの鍵を使用できます。実際には、GPGは無料で、積極的にメンテナンスされ、すべての主要オペレーティングシステムで利用可能なため、今日ほとんどの人が使用するツールです。暗号化が初めての方は、<a href="/ja/docs/pgp-for-beginners/">PGP入門ガイド</a>で基本概念をステップバイステップで紹介しています。</p>

<h2 id="what-is-pgp">PGPとは？</h2>

<p>PGPは<strong>Pretty Good Privacy</strong>の略です。Phil Zimmermannが1991年に最初のバージョンを書き、強力な暗号化を必要とする活動家や一般市民のための無料ツールとして公開しました。このソフトウェアは対称鍵暗号と公開鍵暗号を組み合わせていました。</p>

<p>3年間の連邦捜査（1996年に取り下げ）の後、ZimmermannはPGP Inc.を設立しました。会社は何度か所有者が変わりました：1997年にNetwork Associates、2002年にPGP Corporation、そして2010年にSymantec（現Broadcom）。今日、PGPは主に企業向けの商用製品スイートとして存在しています。</p>

<p>基礎技術について詳しくは、<a href="/ja/docs/what-is-pgp/">PGPとは何か、どう機能するか</a>の完全な記事をご覧ください。</p>

<h2 id="what-is-gpg-gnupg">GPG（GnuPG）とは？</h2>

<p>GPG、つまり<strong>GNU Privacy Guard（GnuPG）</strong>は、OpenPGP標準のフリーでオープンソースの実装です。Werner Kochが1997年にドイツ政府の資金援助を受けてプロジェクトを開始し、1999年にバージョン1.0を公開しました。GnuPGはプロプライエタリなPGPソフトウェアの完全に自由な代替を提供するために特別に作られました。</p>

<p>GnuPGはGNUプロジェクトの一部であり、GNU一般公衆利用許諾書（GPL）の下でライセンスされています。ほとんどのLinuxディストリビューションにデフォルトで含まれています。コマンドラインツール<code>gpg</code>は、ほとんどの開発者やシステム管理者が使用するインターフェースです。利用可能なツールの概要は、<a href="/ja/docs/pgp-tools/">PGPツール比較</a>をご覧ください。</p>

<h2 id="what-is-openpgp">OpenPGPとは？</h2>

<p><strong>OpenPGP</strong>は製品でもソフトウェアでもありません。PGP互換ツールが従うべきメッセージ形式、鍵形式、暗号手順を定義するオープン標準です。IETFは1998年に<strong>RFC 2440</strong>として最初の仕様を公開し、最も参照されるバージョンは<strong>RFC 4880</strong>（2007年）です。<strong>RFC 9580</strong>（2024年）はEd25519サポートとAEAD暗号化で標準を近代化する主要なアップデートです。</p>

<p>OpenPGPの存在が相互運用性を可能にします。PGPもGPGも同じ標準を実装しているため、GPGで暗号化されたメッセージはPGPで復号でき、その逆も同様です。</p>

<h2 id="pgp-vs-gpg-comparison-table">PGP vs GPG比較表</h2>

<table>
<tr><th>特性</th><th>PGP（Broadcom）</th><th>GPG（GnuPG）</th><th>OpenPGP</th></tr>
<tr><td><strong>種類</strong></td><td>商用ソフトウェア</td><td>フリー/オープンソースソフトウェア</td><td>オープン標準</td></tr>
<tr><td><strong>ライセンス</strong></td><td>プロプライエタリ</td><td>GPL（無料）</td><td>IETF仕様</td></tr>
<tr><td><strong>コスト</strong></td><td>有料ライセンス</td><td>無料</td><td>該当なし</td></tr>
<tr><td><strong>プラットフォーム</strong></td><td>Windows、macOS</td><td>Windows、macOS、Linux、BSD</td><td>該当なし</td></tr>
<tr><td><strong>GUI搭載</strong></td><td>はい（エンタープライズコンソール）</td><td>いいえ（サードパーティGUI利用可能）</td><td>該当なし</td></tr>
<tr><td><strong>ソース公開</strong></td><td>いいえ</td><td>はい</td><td>公開標準</td></tr>
</table>

<h2 id="key-differences-explained">主な違いの解説</h2>

<h3>ライセンスとコスト</h3>

<p>PGPは商用ライセンスで販売されるプロプライエタリソフトウェアです。GPGはGPLの下で公開されており、誰でも無料でダウンロード、使用、変更、再配布できます。個人、小規模チーム、オープンソースプロジェクトにとって、GPGはコスト面で明白な選択です。</p>

<h3>プラットフォームサポート</h3>

<p>GnuPGは事実上すべてのUnixシステムで動作し、WindowsとmacOS向けの公式ビルドがあります。クロスプラットフォームのニーズには、KeychainPGPのようなモダンなツールが単一のコードベースからWindows、macOS、Linux、Android向けのネイティブビルドを提供します。</p>

<h3>ユーザー体験</h3>

<p>商用PGPにはエンタープライズ展開用のGUIが含まれています。GnuPGは基本的にコマンドラインツールです。KeychainPGPのようなツールは、コマンドラインオプションを覚える必要なく、鍵管理、暗号化、復号、署名を処理するネイティブGUIを提供します。<a href="/ja/pgp-online-encrypt/">オンラインPGP暗号化ツール</a>でブラウザから直接PGP暗号化を試すことができます。</p>

<h2 id="which-should-you-use">どちらを使うべきか？</h2>

<ul>
<li><strong>Broadcom/Symantecの既存インフラがある企業：</strong>商用PGPが最も抵抗の少ない道かもしれません。</li>
<li><strong>開発者とシステム管理者：</strong>GnuPGはほとんどのサーバーにデフォルトでインストールされている標準ツールです。</li>
<li><strong>GUIを求めるプライバシー重視のユーザー：</strong>KeychainPGPのようなモダンなOpenPGPアプリケーションを検討してください。</li>
<li><strong>ウェブベースまたはクイック暗号化のニーズ：</strong><a href="/ja/pgp-online-encrypt/">オンラインPGP暗号化ツール</a>でインストールなしで一回限りのタスクを処理できます。</li>
</ul>

<h2 id="where-keychainpgp-fits-in">KeychainPGPの位置づけ</h2>

<p><a href="/">KeychainPGP</a>は、Rustでゼロから書かれたOpenPGPライブラリである<strong>Sequoia-PGP</strong>を使用してOpenPGP標準を実装するモダンなオープンソースデスクトップアプリケーションです。PGP（商用製品）でもGPG（GnuPG）でもなく、OpenPGPエコシステム内で両者と共存する独立した実装です。</p>

<p>KeychainPGPを検討する主な理由：</p>

<ul>
<li><strong>マルチプラットフォーム：</strong>Windows、macOS、Linux、Android向けのネイティブビルドに加え、ウェブアプリとCLI</li>
<li><strong>モダンな暗号技術：</strong>Curve25519/Ed25519とAEADをサポートするSequoia-PGP上に構築</li>
<li><strong>オープンソース：</strong>MIT / Apache-2.0デュアルライセンス、完全に監査可能</li>
<li><strong>ユーザーフレンドリー：</strong>クリップボードワークフローとグローバルショートカットを備えたGUI</li>
<li><strong>自動化用CLI：</strong><code>keychainpgp</code> CLIは鍵生成、暗号化、復号、署名、検証、鍵管理をサポート</li>
<li><strong>OpenPGP準拠：</strong>鍵とメッセージはGPG、PGP、その他のOpenPGPツールと相互運用可能</li>
</ul>

<h2 id="frequently-asked-questions">よくある質問</h2>

<h3>GPGとPGPは同じものですか？</h3>

<p>いいえ。GPG（GnuPG）とPGPは、異なる人物によって作られた別のソフトウェアです。PGPは1991年にPhil Zimmermannによって作られ、現在はBroadcomの商用製品です。GPGは1997年にWerner Kochによってフリーでオープンソースの代替として作られました。両方ともOpenPGP標準を実装しているため、機能的には互換性があります。</p>

<h3>GPGの鍵とPGPの鍵は連携できますか？</h3>

<p>はい。GPGとPGPはIETF標準で定義されたOpenPGP鍵形式を使用します。GPGから公開鍵をエクスポートしてPGPにインポートしたり、KeychainPGPのようなOpenPGP準拠ツールにインポートしたりできます。</p>

<h3>2026年でもGPGは安全ですか？</h3>

<p>GnuPGは安全で積極的にメンテナンスされているツールです。モダンな鍵タイプ（Ed25519など）を使用し、ソフトウェアを最新に保ち、鍵管理のベストプラクティスに従ってください。ステップバイステップのガイドは、<a href="/ja/docs/pgp-for-beginners/">PGP入門ガイド</a>の記事をご覧ください。</p>

<h3>OpenPGPとは何を意味しますか？</h3>

<p>OpenPGPはIETFが公開したオープン標準で、PGP互換の暗号化の仕組みを定義しています。メッセージ形式、鍵形式、アルゴリズム要件、署名構造を規定しています。</p>

<h3>KeychainPGPを使うにはPGPやGPGが必要ですか？</h3>

<p>いいえ。KeychainPGPはPGPやGnuPGのインストールに依存しないスタンドアロンアプリケーションです。Rustで書かれたOpenPGP標準の独立した実装であるSequoia-PGPライブラリを使用しています。ただし、KeychainPGPで作成された鍵と暗号化メッセージはGPGやPGPと完全に互換性があります。</p>
`
};

export default doc;
