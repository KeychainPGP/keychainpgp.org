import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: '無料のオンラインPGP暗号化ツール',
	heroSubtitle: 'ブラウザ上でOpenPGPを使ってメッセージを暗号化・復号できます。インストール不要、アカウント不要、サーバーへのデータ送信はありません。',
	trustLine: '無料でオープンソース。MIT / Apache-2.0ライセンス。テレメトリなし。',
	ctaOpen: 'ブラウザでPGPツールを開く',
	ctaHow: '使い方',
	whatIsTitle: 'PGP暗号化とは？',
	whatIsText: 'PGP（Pretty Good Privacy）は、メッセージ、メール、ファイルの暗号化における業界標準です。公開鍵暗号を使用します — 誰でもあなたへのメッセージを暗号化できる公開鍵を共有し、あなたの秘密鍵だけがそれを復号できます。1991年に開発されたPGPは、ジャーナリスト、セキュリティ研究者、活動家、そして世界中の何百万ものユーザーに利用されています。KeychainPGPは、モダンなインターフェースとクリップボードベースのワークフローにより、コマンドライン不要、設定不要、複雑さなしでPGPをすべての人に提供します。',
	howToTitle: 'オンラインでPGPメッセージを暗号化する方法',
	steps: [
		{ title: 'オンラインPGPツールを開く', text: 'KeychainPGPウェブアプリにアクセスします。完全にブラウザ内で読み込まれます — インストールもアカウントも不要です。すべてWebAssemblyを通じてローカルで動作します。' },
		{ title: 'PGP鍵を生成またはインポートする', text: '新しいEd25519 + X25519鍵ペア（最もモダンで安全なオプション）を作成するか、既存のPGP鍵をASCII形式でインポートします。' },
		{ title: '受信者の公開鍵をインポートする', text: '連絡先の公開鍵を「鍵」タブに貼り付けて追加します。この鍵がメッセージの暗号化に使用されます。' },
		{ title: 'メッセージを入力する', text: '「暗号化」タブに移動し、保護したいメッセージを入力または貼り付けます。' },
		{ title: '受信者を選択して暗号化する', text: '鍵リストから受信者を選び、「クリップボードに暗号化」をクリックします。暗号化されたPGPメッセージが即座にコピーされます。' },
		{ title: '暗号化されたメッセージを送信する', text: '暗号化されたメッセージをメール、チャット、またはメッセージングアプリに貼り付けます。意図された受信者だけが秘密鍵で復号できます。' }
	],
	featuresTitle: 'PGP暗号化にKeychainPGPを使う理由',
	features: [
		{ icon: '🌐', title: '100%ブラウザ内で完結', text: 'Rustからコンパイルされたwebassemblyにより、すべてがブラウザ内でローカルに動作します。サーバー通信はゼロ。メッセージと鍵がデバイスから外に出ることはありません。' },
		{ icon: '🔒', title: 'モダンな暗号技術', text: 'デフォルトでEd25519 + X25519楕円曲線暗号鍵を使用。OpenSSLに依存しないRustによるOpenPGP実装、Sequoia-PGPを搭載。' },
		{ icon: '💻', title: 'マルチプラットフォーム', text: 'ウェブアプリに加え、Windows、macOS、Linux、Android向けのネイティブアプリが利用可能。どこでもあなたの鍵にアクセスできます。' },
		{ icon: '📂', title: 'オープンソース', text: 'MIT / Apache-2.0ライセンスで完全に監査可能なコード。テレメトリなし、トラッキングなし、アカウント不要。GitHubでコードを確認できます。' },
		{ icon: '📋', title: 'クリップボードファースト', text: 'テキストをコピーし、ショートカット（Ctrl+Shift+E）で暗号化、暗号化メッセージを貼り付け。メール、チャット、メモなど、あらゆるアプリで動作します。' },
		{ icon: '⚡', title: 'ゼロ設定', text: 'アルゴリズムの選択も、鍵サイズの決定も、設定ファイルも不要。デフォルトで安全。鍵を生成して数秒で暗号化を開始できます。' }
	],
	desktopTitle: '日常使いにはデスクトップアプリを',
	desktopText: 'ウェブアプリは素早い暗号化に最適ですが、デスクトップアプリはセキュリティ機能が追加された完全なPGP体験を提供します：',
	desktopFeatures: [
		'グローバルショートカット — Ctrl+Shift+Eで暗号化、Ctrl+Shift+Dで復号、あらゆるアプリから利用可能',
		'システムトレイ — タスクバーに常駐し、バックグラウンドで静かに動作',
		'クリップボード自動消去 — 復号されたテキストは30秒後にクリップボードから自動的に削除',
		'OPSECモード — ウィンドウタイトルの偽装、RAM専用鍵、緊急消去ボタン',
		'OS資格情報ストア — Windows資格情報マネージャー、macOSキーチェーン、Linux Secret Serviceで鍵を安全に保管',
		'Androidアプリ — モバイルでも同じインターフェース、QRコードによるデバイス間の鍵同期',
		'CLI — スクリプティングと自動化のためのkeychainpgpコマンドラインツール'
	],
	ctaDownload: 'KeychainPGPをダウンロード',
	ctaAllPlatforms: 'すべてのプラットフォーム',
	learnMoreTitle: 'PGP暗号化について詳しく学ぶ',
	learnMoreLinks: [
		{ href: '/ja/docs/what-is-pgp/', title: 'PGPとは？', text: 'Pretty Good Privacy、公開鍵暗号、デジタル署名に関する包括的なガイド。' },
		{ href: '/ja/docs/how-to-use-pgp/', title: 'PGPの使い方', text: '鍵の生成、メッセージの暗号化、署名の検証に関するステップバイステップのチュートリアル。' },
		{ href: '/ja/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'PGP、GPG（GnuPG）、OpenPGP標準の違いを理解する。' },
		{ href: '/ja/docs/pgp-for-beginners/', title: 'PGP入門ガイド', text: 'PGP暗号化について知っておくべきすべてを、わかりやすく解説。' },
		{ href: '/ja/docs/clipboard-encryption/', title: 'クリップボード暗号化', text: 'PGPクリップボード暗号化の仕組み、セキュリティ上の考慮事項、OPSEC機能。' },
		{ href: '/ja/blog/best-pgp-tools-2026/', title: '2026年最高のPGPツール', text: '利用可能な最高のPGP暗号化ソフトウェアの包括的な比較とランキング。' }
	]
};
