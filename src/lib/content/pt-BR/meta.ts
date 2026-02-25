import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'Documentacao PGP',
	description: 'Aprenda tudo sobre criptografia PGP — de guias para iniciantes a topicos avancados como criptografia por area de transferencia e gerenciamento de chaves.',
	intro: 'Tudo o que voce precisa saber sobre criptografia PGP. Seja voce iniciante ou esteja buscando topicos avancados, estes guias cobrem o essencial.',
	docs: [
		{
			title: 'O que e PGP?',
			description: 'Entenda os fundamentos da criptografia PGP — criptografia de chave publica, assinaturas digitais, rede de confianca e casos de uso.',
			href: '/pt-BR/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'Como usar PGP',
			description: 'Tutorial passo a passo: geracao de chaves, criptografia de mensagens, descriptografia, assinaturas digitais e compartilhamento de chaves.',
			href: '/pt-BR/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'Entenda as diferencas entre PGP, GPG (GnuPG) e o padrao OpenPGP — historia, implementacoes e qual ferramenta escolher.',
			href: '/pt-BR/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'Ferramentas PGP',
			description: 'Panorama das ferramentas PGP — clientes desktop, utilitarios CLI, extensoes de navegador e solucoes web.',
			href: '/pt-BR/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP para iniciantes',
			description: 'Novo com PGP? Comece aqui. Aprenda os conceitos-chave em linguagem simples e envie sua primeira mensagem criptografada.',
			href: '/pt-BR/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Criptografia por area de transferencia',
			description: 'Domine o fluxo de trabalho PGP por area de transferencia — criptografe e descriptografe texto de qualquer aplicativo com atalhos globais.',
			href: '/pt-BR/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'Blog PGP',
	description: 'Artigos aprofundados sobre ferramentas de criptografia PGP, comparativos de software e boas praticas para comunicacao segura.',
	intro: 'Artigos aprofundados sobre ferramentas de criptografia PGP, comparativos de software e boas praticas para comunicacao segura.',
	posts: [
		{
			title: 'Melhores ferramentas PGP em 2026',
			description: 'Um ranking completo das melhores ferramentas de criptografia PGP disponiveis — de aplicativos desktop a solucoes online.',
			href: '/pt-BR/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Comparativo de software PGP',
			description: 'Comparacao detalhada de softwares PGP — funcionalidades, seguranca, plataformas suportadas e facilidade de uso.',
			href: '/pt-BR/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
