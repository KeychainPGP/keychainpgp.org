import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGPとは？Pretty Good Privacy暗号化の完全ガイド',
	description: 'PGP（Pretty Good Privacy）とは何か、公開鍵暗号によるPGP暗号化の仕組み、OpenPGP標準、デジタル署名、現代的な活用法について解説します。',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'PGP暗号化とは？', level: 2 },
		{ id: 'history-of-pgp', text: 'PGPの歴史', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'PGP暗号化の仕組み', level: 2 },
		{ id: 'public-key-cryptography', text: '公開鍵暗号', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'ハイブリッド暗号化モデル', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'PGPデジタル署名', level: 2 },
		{ id: 'the-openpgp-standard', text: 'OpenPGP標準', level: 2 },
		{ id: 'web-of-trust', text: '信頼のウェブ', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGPのアルゴリズムと鍵の種類', level: 2 },
		{ id: 'classic-algorithms', text: 'クラシックアルゴリズム', level: 3 },
		{ id: 'modern-algorithms', text: 'モダンアルゴリズム', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'PGPの一般的なユースケース', level: 2 },
		{ id: 'pgp-today', text: '今日のPGP', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'PGPを始める', level: 2 }
	],
	html: `
<h1>PGPとは？Pretty Good Privacy暗号化の完全ガイド</h1>

<h2 id="what-is-pgp-encryption">PGP暗号化とは？</h2>

<p><strong>PGP（Pretty Good Privacy）</strong>は、データ通信の機密性と暗号認証を提供する暗号化プログラムです。PGP暗号化は、対称鍵暗号と公開鍵暗号の組み合わせを使用して、意図された受信者だけが読めるようにメッセージ、ファイル、その他のデータを暗号化することを可能にします。1991年にPhil Zimmermannによって開発されたPGPは、世界で最も広く使用されているメール暗号化の標準となり、RFC 4880で定義された<strong>OpenPGP</strong>仕様の基礎となっています。機密メールの送信、ソフトウェア発行者のID検証、機密ファイルの保護など、PGPはジャーナリスト、セキュリティ研究者、政府、一般ユーザーから信頼される実績のある暗号フレームワークを提供します。</p>

<p>ソフトウェアをインストールせずにすぐにPGP暗号化を試したい場合、KeychainPGPはブラウザ内で完全に動作する<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>を提供しています。</p>

<h2 id="history-of-pgp">PGPの歴史</h2>

<p>Phil Zimmermannは1991年6月にPGP 1.0をフリーソフトウェアとして公開しました。強力な暗号技術は政府や軍だけでなく、すべての市民がアクセスできるべきだという信念に基づいていました。当時、強力な暗号化はアメリカの輸出規制で軍需品として分類されており、Zimmermannは国際的にPGPを配布したことで、アメリカ税関局から3年間の刑事捜査を受けました。捜査は最終的に1996年に起訴なしで終了し、この事件はデジタル自由の歴史における重要な転換点となりました。</p>

<p>PGPはいくつかの商業的な形態を経て進化しました。Zimmermannは1996年にPGP Inc.を設立し、1997年にNetwork Associates（後のMcAfee）に買収され、最終的に2010年にSymantecに買収されました。これらの変遷を通じて、基礎となる暗号プロトコルはInternet Engineering Task Force（IETF）によって<strong>OpenPGP</strong>として標準化され、商業的な所有権に関係なくプロトコルがオープンで相互運用可能であることが保証されました。</p>

<p>OpenPGP標準の公開は、誰でも互換性のある実装を作成できることを意味しました。これにより、GNU Privacy Guard（GnuPGまたはGPG）というフリーでオープンソースの実装が生まれ、今日でも最も広く使用されているPGPツールの一つです。これらの実装の違いについては、<a href="/ja/docs/pgp-vs-gpg/">PGP vs GPG</a>ガイドをご覧ください。</p>

<h2 id="how-pgp-encryption-works">PGP暗号化の仕組み</h2>

<p>PGP暗号化は、暗号技術の洗練された組み合わせに基づいています。単一の方式を使用するのではなく、PGPは対称暗号の速度と非対称（公開鍵）暗号の鍵配布の利点を組み合わせた<strong>ハイブリッド暗号化モデル</strong>を採用しています。</p>

<h3 id="public-key-cryptography">公開鍵暗号</h3>

<p>PGPの中核にあるのは、非対称暗号とも呼ばれる<strong>公開鍵暗号</strong>です。各PGPユーザーは、数学的に関連する2つの鍵で構成される<strong>鍵ペア</strong>を生成します：</p>

<ul>
<li><strong>公開鍵</strong> — 誰とでもオープンに共有します。他のユーザーはこの鍵を使って、あなた宛てのメッセージを暗号化し、あなたのデジタル署名を検証します。</li>
<li><strong>秘密鍵</strong>（プライベートキーとも呼ばれる） — 厳重に機密を保持します。この鍵を使って、あなた宛てに送られたメッセージを復号し、デジタル署名を作成します。</li>
</ul>

<p>このシステムの基本的な特性は、公開鍵で暗号化されたデータは対応する秘密鍵でのみ復号でき、その逆も同様であることです。これにより、当事者間でプライベートな通信を行う前に共有秘密を送信する必要がなくなります。</p>

<h3 id="the-hybrid-encryption-model">ハイブリッド暗号化モデル</h3>

<p>公開鍵暗号は鍵配布の問題を解決しますが、RSAのような非対称アルゴリズムは大量のデータを暗号化するには計算コストが高くなります。PGPはハイブリッドアプローチを使用してこの問題を解決します：</p>

<ol>
<li><strong>セッション鍵の生成</strong> — PGPは各メッセージに対して、ランダムでユニークな<strong>対称セッション鍵</strong>（通常128ビットまたは256ビット）を生成します。</li>
<li><strong>データの暗号化</strong> — メッセージの内容は、セッション鍵を使用した高速な対称暗号（AES-256など）で暗号化されます。</li>
<li><strong>セッション鍵の暗号化</strong> — セッション鍵自体が受信者の公開鍵を使用して暗号化されます（非対称操作）。</li>
<li><strong>パッケージング</strong> — 暗号化されたメッセージと暗号化されたセッション鍵がまとめられて受信者に送信されます。</li>
</ol>

<p>受信者がメッセージを受け取ると、プロセスは逆になります：<strong>秘密鍵</strong>を使ってセッション鍵を復号し、復号されたセッション鍵を使ってメッセージの内容を復号します。</p>

<h2 id="pgp-digital-signatures">PGPデジタル署名</h2>

<p>暗号化に加えて、PGPは<strong>デジタル署名</strong>を提供し、2つの重要な機能を果たします：<strong>認証</strong>（誰がメッセージを送信したかを証明）と<strong>完全性</strong>（メッセージが転送中に改ざんされていないことを証明）です。</p>

<p>署名のプロセスは次のように動作します：</p>

<ol>
<li>PGPは、SHA-256やSHA-512などのアルゴリズムを使用して、メッセージ内容の<strong>暗号ハッシュ</strong>（固定長のダイジェスト）を計算します。</li>
<li>ハッシュは送信者の<strong>秘密鍵</strong>で暗号化され、デジタル署名が生成されます。</li>
<li>署名がメッセージに添付されます。</li>
</ol>

<p>受信者は、送信者の<strong>公開鍵</strong>で署名を復号して元のハッシュを取得し、受信したメッセージのハッシュを独立に計算し、2つのハッシュを比較することで署名を検証できます。一致すれば、メッセージは本物であり改ざんされていません。</p>

<h2 id="the-openpgp-standard">OpenPGP標準</h2>

<p><strong>OpenPGP</strong>は、PGP互換ソフトウェアが使用するメッセージ形式、アルゴリズム、手順を定義するオープン標準です。ソフトウェア製品ではなく、どの開発者でも実装できる仕様です。</p>

<p>主要な参照文書は：</p>

<ul>
<li><strong>RFC 4880</strong>（2007年11月） — OpenPGPメッセージ形式の現在の主要仕様。</li>
<li><strong>RFC 6637</strong>（2012年6月） — 楕円曲線暗号（ECC）のサポートでOpenPGPを拡張。</li>
<li><strong>RFC 9580</strong>（2024年） — Ed25519/X25519の必須サポート、AEAD暗号化モード、改善された鍵フィンガープリントで標準を近代化する最新の改訂版。</li>
</ul>

<p>OpenPGPは相互運用性を保証します：KeychainPGPで暗号化されたメッセージは、GnuPG、Mailvelope、またはその他の準拠実装で復号できます。</p>

<h2 id="web-of-trust">信頼のウェブ</h2>

<p>PGPの特徴的な機能の一つは、公開鍵の真正性を確立するための分散型<strong>信頼のウェブ</strong>（Web of Trust）モデルです。TLS/SSLで使用される中央集権型の認証局（CA）モデルとは異なり、PGPではユーザー自身が互いの身元を保証できます。</p>

<p>信頼のウェブは<strong>鍵の署名</strong>によって機能します：誰かの身元を確認し、その人が特定の公開鍵を管理していることを確認すると、自分の鍵でその人の鍵に署名します。この署名は、その鍵がその人物のものであると信じるという公開された声明です。</p>

<p><a href="/ja/pgp-online-encrypt/">KeychainPGP</a>のようなツールは、直感的なインターフェースを通じてユーザーが鍵を直接操作できるようにし、<a href="/ja/docs/clipboard-encryption/">クリップボード暗号化</a>を使用して暗号化メッセージや公開鍵を簡単に共有できるようにすることで、このプロセスを簡素化します。</p>

<h2 id="pgp-algorithms-and-key-types">PGPのアルゴリズムと鍵の種類</h2>

<p>PGPは暗号学の進歩とともに進化してきた幅広い暗号アルゴリズムをサポートしています。</p>

<h3 id="classic-algorithms">クラシックアルゴリズム</h3>

<ul>
<li><strong>RSA（Rivest-Shamir-Adleman）</strong> — PGPの歴史で最も広く展開されている非対称アルゴリズム。2048ビットのRSA鍵は今日の最低限のセキュリティと見なされ、長期的な保護には4096ビットの鍵が推奨されます。</li>
<li><strong>DSA（Digital Signature Algorithm）</strong> — ElGamalとの組み合わせで暗号化の署名に使用。現在はあまり推奨されていません。</li>
<li><strong>AES（Advanced Encryption Standard）</strong> — メッセージ内容の暗号化に使用される主要な対称暗号。AES-128とAES-256がサポートされています。</li>
<li><strong>SHA-2（SHA-256、SHA-384、SHA-512）</strong> — デジタル署名のダイジェスト計算に使用される暗号ハッシュ関数。</li>
</ul>

<h3 id="modern-algorithms">モダンアルゴリズム</h3>

<p>最新世代のOpenPGP実装は、RSAと同等のセキュリティをはるかに小さな鍵サイズで提供する<strong>楕円曲線暗号（ECC）</strong>をサポートしています：</p>

<ul>
<li><strong>Ed25519</strong> — Curve25519に基づくデジタル署名アルゴリズム。高速でコンパクトな署名を生成します。RFC 9580で推奨されています。</li>
<li><strong>X25519（Curve25519 ECDH）</strong> — 鍵交換（暗号化）に使用。優れたパフォーマンスと強力なセキュリティ特性を提供します。</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — NISTが標準化した楕円曲線。OpenPGPでサポートされていますが、一般的にCurve25519ベースのアルゴリズムよりは推奨度が低くなります。</li>
</ul>

<p>KeychainPGPのようなモダンなツールはこれらの最新アルゴリズムをサポートしており、Ed25519とX25519での鍵生成をシンプルで直感的にしています。</p>

<h2 id="common-use-cases-for-pgp">PGPの一般的なユースケース</h2>

<ul>
<li><strong>セキュアメール</strong> — 最も古く、最もよく知られたユースケース。PGPはメール内容の暗号化とメッセージへの署名による真正性の証明を可能にします。</li>
<li><strong>ファイル暗号化</strong> — PGPは個々のファイルやアーカイブ全体を安全な保存や転送のために暗号化できます。</li>
<li><strong>ソフトウェア検証</strong> — オープンソースプロジェクトはリリースにPGP鍵で定期的に署名します。ユーザーはこれらの署名を検証してダウンロードの真正性を確認できます。</li>
<li><strong>セキュアメッセージング</strong> — PGPはあらゆるテキストメッセージの暗号化に使用でき、エンドツーエンド暗号化を提供しないプラットフォームで特に有用です。</li>
<li><strong>ID検証</strong> — PGP鍵のフィンガープリントは検証可能なデジタルIDとして機能します。GitHub上の開発者はPGPでコミットに署名できます。</li>
<li><strong>文書署名</strong> — 法的ワークフローではPGP署名を使用して否認防止を確立することがあります。</li>
</ul>

<h2 id="pgp-today">今日のPGP</h2>

<p>誕生から30年以上経った今日も、PGPは利用可能な最も重要な暗号ツールの一つです。OpenPGP標準は進化を続けており、RFC 9580ではモダンな楕円曲線アルゴリズムの必須サポートやAEAD暗号化モードなどの重要な近代化が導入されています。</p>

<p>PGPツールのエコシステムは大幅に充実しました。GnuPGはコマンドライン利用のリファレンス実装として残っています。KeychainPGPのようなモダンなツールは、ネイティブデスクトップアプリ（Windows、macOS、Linux）、Androidアプリ、スクリプティング用CLI、ブラウザ内ウェブアプリを提供し、すべて同じRustベースのSequoia-PGPエンジン上に構築されています。</p>

<h2 id="getting-started-with-pgp">PGPを始める</h2>

<p>PGP暗号化を始める準備はできましたか？おすすめの次のステップはこちらです：</p>

<ol>
<li><strong>ブラウザで試す</strong> — KeychainPGPの<a href="/ja/pgp-online-encrypt/">オンラインPGPツール</a>を使って、何もインストールせずに鍵ペアの生成、メッセージの暗号化、署名の検証ができます。</li>
<li><strong>入門ガイドを読む</strong> — 暗号技術が初めての方は、<a href="/ja/docs/pgp-for-beginners/">PGP入門ガイド</a>がステップバイステップでご案内します。</li>
<li><strong>実践的なワークフローを学ぶ</strong> — <a href="/ja/docs/how-to-use-pgp/">PGPの使い方</a>ガイドでは、鍵生成、暗号化・復号、鍵管理、ベストプラクティスをカバーしています。</li>
<li><strong>クリップボード暗号化を理解する</strong> — <a href="/ja/docs/clipboard-encryption/">PGPクリップボード暗号化</a>を使って、クリップボードから直接テキストを暗号化・復号する方法を学びましょう。</li>
<li><strong>ツールを知る</strong> — <a href="/ja/docs/pgp-vs-gpg/">PGPとGPGの違い</a>を理解して、ワークフローに適したツールを選びましょう。</li>
</ol>

<p>PGP暗号化は30年以上にわたり機密通信を保護してきました。モダンなツールと標準により、かつてないほどアクセスしやすくなっています。</p>
`
};

export default doc;
