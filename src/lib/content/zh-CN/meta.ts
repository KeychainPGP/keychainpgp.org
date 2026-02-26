import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGP 文档',
	description: '全面了解 PGP 加密——从入门指南到剪贴板加密和密钥管理等高级主题。',
	intro: '关于 PGP 加密的一切。无论您是初学者还是在寻找高级主题，这些指南涵盖了所有要点。',
	docs: [
		{
			title: '什么是 PGP？',
			description: '了解 PGP 加密的基础知识——公钥密码学、数字签名、信任网络和常见用例。',
			href: '/zh-CN/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: '如何使用 PGP',
			description: '分步教程：生成密钥、加密消息、解密、数字签名和密钥共享。',
			href: '/zh-CN/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP 与 GPG 的区别',
			description: '了解 PGP、GPG (GnuPG) 和 OpenPGP 标准之间的区别——历史、实现和如何选择工具。',
			href: '/zh-CN/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP 工具',
			description: '全面了解 PGP 工具——桌面客户端、命令行工具、浏览器扩展和在线解决方案。',
			href: '/zh-CN/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP 入门指南',
			description: '初次接触 PGP？从这里开始。用通俗易懂的语言学习关键概念，并发送您的第一条加密消息。',
			href: '/zh-CN/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: '剪贴板加密',
			description: '掌握 PGP 剪贴板工作流——通过全局快捷键在任何应用中加密和解密文本。',
			href: '/zh-CN/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGP 博客',
	description: '关于 PGP 加密工具、软件对比和安全通信最佳实践的深度文章。',
	intro: '关于 PGP 加密工具、软件对比和安全通信最佳实践的深度文章。',
	posts: [
		{
			title: '2026 年最佳 PGP 工具',
			description: '全面排名和对比当前最佳的 PGP 加密工具——从桌面应用到在线解决方案。',
			href: '/zh-CN/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGP 软件对比',
			description: '详细对比各类 PGP 软件——功能特性、安全性、支持平台和易用性。',
			href: '/zh-CN/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
