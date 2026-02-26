import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP入門ガイド：PGP暗号化を始めるためのシンプルガイド',
	description: 'PGP暗号化をゼロから学びます。この入門ガイドでは、PGPの仕組み、最初の暗号化メッセージの手順、主要な概念を解説します。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: '暗号化が重要な理由', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'PGPとは（簡単な説明）', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: '知っておくべき主要概念', level: 2 },
		{ id: 'public-key-your-address', text: '公開鍵：あなたの住所', level: 3 },
		{ id: 'private-key-your-password', text: '秘密鍵：あなたのパスワード', level: 3 },
		{ id: 'encryption-vs-signing', text: '暗号化 vs 署名', level: 3 },
		{ id: 'key-fingerprints', text: '鍵のフィンガープリント', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: '最初のPGPメッセージ', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'よくある初心者の間違い', level: 2 },
		{ id: 'next-steps', text: '次のステップ', level: 2 },
		{ id: 'faq', text: 'よくある質問', level: 2 }
	],
	html: `
<h1>PGP入門ガイド：始めるためのシンプルガイド</h1>

<p>PGPを始めるのは思っているよりも簡単です。鍵ペア（公開鍵と秘密鍵）を生成し、通信したい相手と公開鍵を共有し、秘密鍵を使って相手から送られたメッセージを復号します。試すのにソフトウェアのインストールは必要ありません。KeychainPGPのような無料の<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>を使えば、ブラウザから直接5分以内に最初のメッセージを暗号化できます。</p>

<h2 id="why-encryption-matters">暗号化が重要な理由</h2>

<p>毎日、何十億ものメッセージがインターネット上を流れています。メール、チャットメッセージ、文書 — そのほとんどが平文で送信されており、傍受した人は誰でも読むことができます。これにはインターネットサービスプロバイダー、公共Wi-Fiのハッカー、さらには政府の監視プログラムも含まれます。</p>

<p><strong>データ漏洩は稀な出来事ではありません。</strong>常に起こっています。メッセージが暗号化されていなければ、次の漏洩を待つ読み取り可能なテキストとしてデータベースに保存されています。</p>

<p>暗号化はこの問題を解決します。PGPでメッセージを暗号化すると、読み取り不能な文字列に変換されます。正しい秘密鍵を持つ人だけがそれを解読できます。</p>

<h2 id="what-is-pgp-explained-simply">PGPとは（簡単な説明）</h2>

<p>PGPは<strong>Pretty Good Privacy</strong>の略です。1991年にPhil Zimmermannによって作られ、メッセージやファイルの暗号化における世界標準となりました。</p>

<p>PGPを理解する最も簡単な方法はこうです。<strong>投函口のある郵便受け</strong>を想像してください。</p>

<p>街角に特別な郵便受けがあると想像してください。誰でも近づいて投函口から手紙を入れることができます。しかし手紙が入ったら、郵便受けの鍵を持っているあなただけがそれを開けることができます。</p>

<ul>
<li><strong>投函口</strong>があなたの<strong>公開鍵</strong>です。プライベートメッセージを送りたい人に渡します。共有しても安全です。</li>
<li><strong>郵便受けの鍵</strong>があなたの<strong>秘密鍵</strong>です。絶対に誰とも共有しません。</li>
</ul>

<p>これが<strong>非対称暗号化</strong>と呼ばれるもので、一方の鍵がロックし、もう一方がアンロックします。より技術的な詳細については、<a href="/ja/docs/what-is-pgp/">PGPとは</a>の完全ガイドをお読みください。</p>

<h2 id="key-concepts-you-need-to-know">知っておくべき主要概念</h2>

<h3 id="public-key-your-address">公開鍵：あなたの住所</h3>

<p>公開鍵は郵便の住所のようなものです。自由に配布して、人々があなたにものを送れるようにします。PGPでは、他の人があなただけが読めるメッセージを暗号化できるように公開鍵を共有します。</p>

<h3 id="private-key-your-password">秘密鍵：あなたのパスワード</h3>

<p>秘密鍵は玄関の鍵のようなものです。公開鍵で暗号化されたメッセージを開くことができる唯一のものです。秘密鍵は<strong>絶対に誰とも共有しないでください</strong>。</p>

<h3 id="encryption-vs-signing">暗号化 vs 署名</h3>

<p>PGPは2つのことができます：<strong>暗号化</strong>と<strong>署名</strong>。</p>

<ul>
<li><strong>暗号化</strong> — 受信者だけが読めるようにメッセージをスクランブルします。受信者の公開鍵で暗号化し、受信者が秘密鍵で復号します。</li>
<li><strong>署名</strong> — メッセージがあなたからのもので改ざんされていないことを証明します。自分の秘密鍵で署名し、あなたの公開鍵を持つ誰もが署名を検証できます。</li>
</ul>

<h3 id="key-fingerprints">鍵のフィンガープリント</h3>

<p>鍵のフィンガープリントは、PGP鍵を一意に識別する短い文字列です。フィンガープリントは公開鍵が想定する人物のものであることを<strong>確認</strong>するために使用されます。別の信頼できるチャネルでフィンガープリントを比較してください。</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>PGP鍵や暗号化メッセージが<code>-----BEGIN PGP MESSAGE-----</code>で始まるテキストブロックとして表示される場合、それは<strong>ASCII armor</strong>です。これは単にバイナリデータを印刷可能なテキスト文字にエンコードする方法で、メール、チャットウィンドウ、ウェブフォームにコピー＆ペーストできるようにするためのものです。</p>

<h2 id="your-first-pgp-message">最初のPGPメッセージ</h2>

<p><a href="https://keychainpgp.github.io">KeychainPGPウェブアプリ</a>を使って最初のメッセージを暗号化する手順を見ていきましょう。ブラウザ内で完全に動作する無料の<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>です。</p>

<p><strong>ステップ1：ウェブアプリを開く。</strong><a href="https://keychainpgp.github.io">keychainpgp.github.io</a>にアクセスします。アプリはWebAssemblyを介して読み込まれ、PGPエンジンはあなたのコンピューター上でローカルに動作します。</p>

<p><strong>ステップ2：鍵ペアを生成する。</strong>「鍵」タブで新しい鍵を作成します。KeychainPGPがモダンなEd25519 + X25519鍵ペアを生成します。</p>

<p><strong>ステップ3：公開鍵をエクスポートして共有する。</strong>エクスポート機能を使って、ASCII-armored形式の公開鍵をコピーします。</p>

<p><strong>ステップ4：受信者の公開鍵をインポートする。</strong>「鍵」タブで、連絡先の公開鍵ブロックを貼り付けます。</p>

<p><strong>ステップ5：メッセージを書いて暗号化する。</strong>「暗号化」タブに移動し、メッセージを入力し、受信者を選択して<strong>「クリップボードに暗号化」</strong>をクリックします。</p>

<p><strong>ステップ6：暗号化されたメッセージを送信する。</strong>暗号化テキストをメール、チャット、またはメッセージングアプリに貼り付けます。</p>

<p><strong>ステップ7：返信を復号する。</strong>暗号化されたPGPメッセージブロックをコピーし、「復号」タブに移動し、貼り付けて復号をクリックします。</p>

<p>より詳しいガイドは、<a href="/ja/docs/how-to-use-pgp/">PGPの使い方</a>チュートリアルをご覧ください。</p>

<h2 id="common-beginner-mistakes">よくある初心者の間違い</h2>

<p><strong>1. 秘密鍵を共有する。</strong>秘密鍵は絶対に誰にも送らないでください。<strong>公開鍵</strong>だけを共有してください。</p>

<p><strong>2. フィンガープリントを確認しない。</strong>別の信頼できるチャネル — 電話、ビデオ通話、対面 — で鍵のフィンガープリントを確認してください。</p>

<p><strong>3. バックアップなしで秘密鍵を紛失する。</strong>秘密鍵を紛失すると、その鍵で暗号化されたすべてのメッセージが永久に失われます。安全な場所に秘密鍵をバックアップしてください。</p>

<p><strong>4. 失効証明書をバックアップしない。</strong>失効証明書により、鍵が侵害された場合にその鍵がもはや有効でないことを公開宣言できます。</p>

<p><strong>5. 古いまたは弱い鍵を使用する。</strong>今日新しい鍵を生成する場合は、モダンなアルゴリズムを使用してください。KeychainPGPはデフォルトでEd25519 + X25519を使用します。</p>

<h2 id="next-steps">次のステップ</h2>

<ul>
<li><strong>完全なガイドを読む：</strong><a href="/ja/docs/how-to-use-pgp/">PGPの使い方</a>では署名、検証、鍵管理、高度なトピックをカバーしています。</li>
<li><strong>PGPとは何かを理解する：</strong>より深く知るには<a href="/ja/docs/what-is-pgp/">PGPとは</a>をお読みください。</li>
<li><strong>クリップボード暗号化を学ぶ：</strong><a href="/ja/docs/clipboard-encryption/">クリップボード暗号化</a>でPGPをあらゆるアプリケーションで使う方法を発見しましょう。</li>
<li><strong>オンラインツールを試す：</strong><a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>を開いて練習しましょう。</li>
<li><strong>デスクトップアプリを入手する：</strong><a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGPデスクトップアプリ</a>はグローバルショートカット、システムトレイ、クリップボード自動消去を追加します。</li>
</ul>

<h2 id="faq">よくある質問</h2>

<h3>PGPは学ぶのが難しいですか？</h3>
<p>いいえ。基本概念はシンプルです：共有する公開鍵と、秘密に保つ秘密鍵。KeychainPGPのようなモダンなツールなら、メッセージの暗号化は数クリックで完了します。</p>

<h3>PGPを使うにはソフトウェアをインストールする必要がありますか？</h3>
<p>必ずしも必要ではありません。KeychainPGPの<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>をブラウザで直接使用できます。WebAssemblyを介してデバイス上で完全に動作します。</p>

<h3>PGPで暗号化されたメッセージを解読できますか？</h3>
<p>モダンなアルゴリズム（KeychainPGPが使用するEd25519 + X25519など）を使用した場合、現在の技術では暗号化を総当たりで解読するには宇宙の年齢よりも長い時間がかかります。本当のリスクは実用的なもの：秘密鍵の紛失、弱いパスフレーズの使用、デバイス上のマルウェアです。</p>

<h3>PGP、GPG、OpenPGPの違いは何ですか？</h3>
<p><strong>PGP</strong>は1991年に作られたオリジナルのプログラムです。<strong>OpenPGP</strong>はフォーマットを定義するオープン標準（RFC 4880）です。<strong>GPG</strong>（GNU Privacy Guard）はOpenPGP標準のフリー実装です。KeychainPGPはRustのSequoia-PGP上に構築された別の実装です。すべて同じ標準に従っているため互換性があります。</p>

<h3>公開鍵はどうやって共有しますか？</h3>
<p>公開鍵をASCII-armored形式でエクスポートします — <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>で始まるテキストブロックです。メールに貼り付けたり、ウェブサイトに公開したり、チャットで共有したり、鍵サーバーにアップロードしたりできます。連絡先とは別のチャネルでフィンガープリントを確認することを忘れないでください。</p>
`
};

export default doc;
