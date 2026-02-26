import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGPドキュメント',
	description: 'PGP暗号化について学ぶ — 初心者向けガイドからクリップボード暗号化や鍵管理などの高度なトピックまで。',
	intro: 'PGP暗号化について知っておくべきすべてのこと。初めての方も、高度なトピックをお探しの方も、これらのガイドが基本をカバーします。',
	docs: [
		{
			title: 'PGPとは？',
			description: 'PGP暗号化の基本を理解する — 公開鍵暗号、デジタル署名、信頼のウェブ、ユースケース。',
			href: '/ja/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'PGPの使い方',
			description: 'ステップバイステップのチュートリアル：鍵の生成、メッセージの暗号化、復号、デジタル署名、鍵の共有。',
			href: '/ja/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'PGP、GPG（GnuPG）、OpenPGP標準の違いを理解する — 歴史、実装、どのツールを選ぶべきか。',
			href: '/ja/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGPツール',
			description: 'PGPツールの全体像 — デスクトップクライアント、CLIユーティリティ、ブラウザ拡張機能、ウェブベースのソリューション。',
			href: '/ja/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP入門ガイド',
			description: 'PGPが初めてですか？ここから始めましょう。わかりやすい言葉で主要な概念を学び、最初の暗号化メッセージを送信しましょう。',
			href: '/ja/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'クリップボード暗号化',
			description: 'PGPクリップボードワークフローをマスターする — グローバルショートカットであらゆるアプリケーションからテキストを暗号化・復号。',
			href: '/ja/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGPブログ',
	description: 'PGP暗号化ツール、ソフトウェア比較、安全な通信のベストプラクティスに関する詳細記事。',
	intro: 'PGP暗号化ツール、ソフトウェア比較、安全な通信のベストプラクティスに関する詳細記事。',
	posts: [
		{
			title: '2026年最高のPGPツール',
			description: '利用可能な最高のPGP暗号化ツールの包括的なランキング — デスクトップアプリからオンラインソリューションまで。',
			href: '/ja/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGPソフトウェア比較',
			description: 'PGPソフトウェアの詳細比較 — 機能、セキュリティ、対応プラットフォーム、使いやすさ。',
			href: '/ja/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
