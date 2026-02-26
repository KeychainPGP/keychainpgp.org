import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'Documentacao PGP',
	description: 'Aprenda tudo sobre encriptacao PGP — desde guias para principiantes ate topicos avancados como encriptacao por area de transferencia e gestao de chaves.',
	intro: 'Tudo o que precisa de saber sobre encriptacao PGP. Quer esteja a comecar ou a procurar topicos avancados, estes guias cobrem o essencial.',
	docs: [
		{
			title: 'O que e PGP?',
			description: 'Compreenda os fundamentos da encriptacao PGP — criptografia de chave publica, assinaturas digitais, rede de confianca e casos de utilizacao.',
			href: '/pt-PT/docs/what-is-pgp/',
			icon: '\u{1F511}'
		},
		{
			title: 'Como utilizar PGP',
			description: 'Tutorial passo a passo: geracao de chaves, encriptacao de mensagens, desencriptacao, assinaturas digitais e partilha de chaves.',
			href: '/pt-PT/docs/how-to-use-pgp/',
			icon: '\u{1F4D6}'
		},
		{
			title: 'PGP vs GPG',
			description: 'Compreenda as diferencas entre PGP, GPG (GnuPG) e o padrao OpenPGP — historia, implementacoes e qual ferramenta escolher.',
			href: '/pt-PT/docs/pgp-vs-gpg/',
			icon: '\u{2696}\u{FE0F}'
		},
		{
			title: 'Ferramentas PGP',
			description: 'Panorama das ferramentas PGP — clientes de ambiente de trabalho, utilitarios CLI, extensoes de navegador e solucoes web.',
			href: '/pt-PT/docs/pgp-tools/',
			icon: '\u{1F6E0}\u{FE0F}'
		},
		{
			title: 'PGP para principiantes',
			description: 'Novo no PGP? Comece aqui. Aprenda os conceitos-chave em linguagem simples e envie a sua primeira mensagem encriptada.',
			href: '/pt-PT/docs/pgp-for-beginners/',
			icon: '\u{1F680}'
		},
		{
			title: 'Encriptacao por area de transferencia',
			description: 'Domine o workflow PGP por area de transferencia — encripte e desencripte texto a partir de qualquer aplicacao com atalhos globais.',
			href: '/pt-PT/docs/clipboard-encryption/',
			icon: '\u{1F4CB}'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'Blog PGP',
	description: 'Artigos aprofundados sobre ferramentas de encriptacao PGP, comparativos de software e boas praticas para comunicacao segura.',
	intro: 'Artigos aprofundados sobre ferramentas de encriptacao PGP, comparativos de software e boas praticas para comunicacao segura.',
	posts: [
		{
			title: 'Melhores ferramentas PGP em 2026',
			description: 'Um ranking completo das melhores ferramentas de encriptacao PGP disponiveis — desde aplicacoes de ambiente de trabalho ate solucoes online.',
			href: '/pt-PT/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'Comparativo de software PGP',
			description: 'Comparacao detalhada de software PGP — funcionalidades, seguranca, plataformas suportadas e facilidade de utilizacao.',
			href: '/pt-PT/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
