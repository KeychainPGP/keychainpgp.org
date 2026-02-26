import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Ferramenta de criptografia PGP online gratuita',
	heroSubtitle: 'Criptografe e descriptografe mensagens com OpenPGP diretamente no seu navegador. Sem instalacao, sem conta, sem dados enviados a um servidor.',
	trustLine: 'Gratuito e open source. Licenca MIT / Apache-2.0. Sem telemetria.',
	ctaOpen: 'Abrir a ferramenta PGP no navegador',
	ctaHow: 'Como funciona',
	whatIsTitle: 'O que e criptografia PGP?',
	whatIsText: 'PGP (Pretty Good Privacy) e o padrao de referencia para criptografia de mensagens, e-mails e arquivos. Ele usa criptografia de chave publica — voce compartilha uma chave publica que qualquer pessoa pode usar para criptografar mensagens para voce, e somente sua chave privada pode descriptografa-las. Criado em 1991, o PGP e usado por jornalistas, pesquisadores de seguranca, ativistas e milhoes de usuarios no mundo todo. O KeychainPGP torna o PGP acessivel a todos com uma interface moderna e um fluxo de trabalho baseado na area de transferencia — sem linha de comando, sem configuracao, sem complexidade.',
	howToTitle: 'Como criptografar uma mensagem com PGP online',
	steps: [
		{ title: 'Abrir a ferramenta PGP online', text: 'Acesse o aplicativo web KeychainPGP. Ele carrega inteiramente no seu navegador — sem instalacao ou conta necessaria. Tudo funciona localmente via WebAssembly.' },
		{ title: 'Gerar ou importar uma chave PGP', text: 'Crie um novo par de chaves Ed25519 + X25519 (a opcao mais moderna e segura), ou importe uma chave PGP existente no formato ASCII.' },
		{ title: 'Importar a chave publica do destinatario', text: 'Adicione a chave publica do seu contato colando-a na aba Chaves. Essa e a chave que sera usada para criptografar suas mensagens.' },
		{ title: 'Digitar sua mensagem', text: 'Va ate a aba Criptografar e digite ou cole a mensagem que deseja proteger.' },
		{ title: 'Selecionar o destinatario e criptografar', text: 'Escolha o destinatario na sua lista de chaves e clique em "Criptografar para a area de transferencia". A mensagem criptografada PGP e copiada instantaneamente.' },
		{ title: 'Enviar a mensagem criptografada', text: 'Cole a mensagem criptografada em qualquer e-mail, chat ou aplicativo de mensagens. Somente o destinatario pretendido pode descriptografa-la com sua chave privada.' }
	],
	featuresTitle: 'Por que usar o KeychainPGP para criptografia PGP?',
	features: [
		{ icon: '🌐', title: '100% no navegador', text: 'Tudo funciona localmente no seu navegador via WebAssembly compilado a partir de Rust. Zero comunicacao com servidor. Suas mensagens e chaves nunca saem do seu dispositivo.' },
		{ icon: '🔒', title: 'Criptografia moderna', text: 'Chaves de curva eliptica Ed25519 + X25519 por padrao. Desenvolvido com Sequoia-PGP, uma implementacao Rust do OpenPGP sem dependencia do OpenSSL.' },
		{ icon: '💻', title: 'Multiplataforma', text: 'Disponivel como aplicativo web, alem de aplicativos nativos para Windows, macOS, Linux e Android. Suas chaves, em qualquer lugar.' },
		{ icon: '📂', title: 'Open source', text: 'Codigo totalmente auditavel sob licenca MIT / Apache-2.0. Sem telemetria, sem rastreamento, sem contas. Confira o codigo no GitHub.' },
		{ icon: '📋', title: 'Area de transferencia em primeiro lugar', text: 'Copie o texto, criptografe com um atalho (Ctrl+Shift+E), cole a mensagem criptografada. Funciona com qualquer aplicativo — e-mail, chat, notas, em qualquer lugar.' },
		{ icon: '⚡', title: 'Zero configuracao', text: 'Sem escolha de algoritmo, sem tamanho de chave para decidir, sem arquivos de configuracao. Seguro por padrao. Gere uma chave e comece a criptografar em segundos.' }
	],
	desktopTitle: 'Obtenha o aplicativo desktop para uso diario',
	desktopText: 'O aplicativo web e perfeito para criptografia rapida, mas o aplicativo desktop oferece uma experiencia PGP completa com recursos de seguranca adicionais:',
	desktopFeatures: [
		'Atalhos globais — Ctrl+Shift+E para criptografar, Ctrl+Shift+D para descriptografar, de qualquer aplicativo',
		'Bandeja do sistema — Sempre disponivel na sua barra de tarefas, funciona silenciosamente em segundo plano',
		'Limpeza automatica da area de transferencia — O texto descriptografado e automaticamente removido da area de transferencia apos 30 segundos',
		'Modo OPSEC — Oculte o titulo da janela, chaves somente em RAM e botao de exclusao de emergencia',
		'Armazenamento de credenciais do SO — Chaves armazenadas com seguranca no Windows Credential Manager, macOS Keychain ou Linux Secret Service',
		'Aplicativo Android — A mesma interface no celular, com sincronizacao de chaves por QR code entre dispositivos',
		'CLI — Ferramenta de linha de comando keychainpgp para scripting e automacao'
	],
	ctaDownload: 'Baixar KeychainPGP',
	ctaAllPlatforms: 'Todas as plataformas',
	learnMoreTitle: 'Saiba mais sobre criptografia PGP',
	learnMoreLinks: [
		{ href: '/pt-BR/docs/what-is-pgp/', title: 'O que e PGP?', text: 'Guia completo sobre Pretty Good Privacy, criptografia de chave publica e assinaturas digitais.' },
		{ href: '/pt-BR/docs/how-to-use-pgp/', title: 'Como usar PGP', text: 'Tutorial passo a passo para gerar chaves, criptografar mensagens e verificar assinaturas.' },
		{ href: '/pt-BR/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Entenda a diferenca entre PGP, GPG (GnuPG) e o padrao OpenPGP.' },
		{ href: '/pt-BR/docs/pgp-for-beginners/', title: 'PGP para iniciantes', text: 'Tudo o que voce precisa saber sobre criptografia PGP, explicado de forma simples.' },
		{ href: '/pt-BR/docs/clipboard-encryption/', title: 'Criptografia por area de transferencia', text: 'Como funciona a criptografia PGP por area de transferencia, consideracoes de seguranca e funcionalidades OPSEC.' },
		{ href: '/pt-BR/blog/best-pgp-tools-2026/', title: 'Melhores ferramentas PGP em 2026', text: 'Comparativo completo e ranking das melhores ferramentas de criptografia PGP disponiveis.' }
	]
};
