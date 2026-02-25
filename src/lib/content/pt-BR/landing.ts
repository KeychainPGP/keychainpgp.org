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
	faqTitle: 'Perguntas frequentes',
	faqItems: [
		{ question: 'E seguro criptografar mensagens PGP online?', answer: 'Sim, com o aplicativo web KeychainPGP. Toda a criptografia e descriptografia acontecem localmente no seu navegador via WebAssembly compilado a partir de Rust. Nenhum dado e enviado a um servidor. O aplicativo funciona inteiramente no lado do cliente, suas mensagens e chaves nunca saem do seu dispositivo.' },
		{ question: 'Para que serve a criptografia PGP?', answer: 'PGP (Pretty Good Privacy) serve para proteger mensagens privadas, e-mails, arquivos e assinaturas digitais. Ele usa criptografia de chave publica: voce criptografa uma mensagem com a chave publica de alguem, e somente a chave privada dessa pessoa pode descriptografa-la. O PGP e amplamente usado por jornalistas, ativistas, profissionais de seguranca e qualquer pessoa preocupada com a privacidade de suas comunicacoes.' },
		{ question: 'Como funciona a criptografia PGP?', answer: 'O PGP usa uma combinacao de criptografia simetrica e assimetrica. Ao criptografar, o PGP gera uma chave de sessao aleatoria, criptografa a mensagem com essa chave usando criptografia simetrica rapida, e entao criptografa a chave de sessao com a chave publica do destinatario. O destinatario usa sua chave privada para descriptografar a chave de sessao e depois descriptografa a mensagem. O KeychainPGP usa chaves modernas Ed25519 + X25519 para esse processo.' },
		{ question: 'Qual e a diferenca entre PGP e GPG?', answer: 'PGP (Pretty Good Privacy) e o padrao de criptografia original criado por Phil Zimmermann em 1991. GPG (GNU Privacy Guard, ou GnuPG) e uma implementacao livre e open source do padrao OpenPGP. OpenPGP e o padrao IETF (RFC 4880) que define o formato das mensagens. O KeychainPGP implementa o padrao OpenPGP atraves da biblioteca Sequoia-PGP escrita em Rust.' },
		{ question: 'E possivel usar PGP sem instalar software?', answer: 'Sim. O KeychainPGP oferece uma ferramenta PGP online que funciona inteiramente no seu navegador via WebAssembly. Voce pode gerar chaves, criptografar e descriptografar mensagens e gerenciar seus contatos sem instalar nada. Para uso diario, o KeychainPGP tambem possui aplicativos desktop nativos (Windows, macOS, Linux) com atalhos globais, um aplicativo Android com sincronizacao por QR code, e um CLI para scripting.' },
		{ question: 'Qual algoritmo de criptografia o KeychainPGP usa?', answer: 'O KeychainPGP usa Ed25519 para assinaturas digitais e X25519 para troca de chaves — dois algoritmos modernos de criptografia de curva eliptica. Eles oferecem seguranca equivalente ao RSA-3072 com uma fracao do tamanho da chave. As operacoes criptograficas sao realizadas pelo Sequoia-PGP, uma implementacao Rust do OpenPGP sem dependencia do OpenSSL.' },
		{ question: 'A criptografia PGP ainda e segura em 2026?', answer: 'Sim. A criptografia PGP com algoritmos modernos (como Ed25519/X25519 usados pelo KeychainPGP) continua sendo um dos padroes de criptografia mais robustos disponiveis. Os fundamentos matematicos da criptografia de curva eliptica nao foram comprometidos. A seguranca do PGP depende de um bom gerenciamento de chaves, senhas fortes e implementacoes atualizadas.' },
		{ question: 'Como compartilhar minha chave publica PGP?', answer: 'Voce pode compartilhar sua chave publica PGP exportando-a no formato ASCII (um bloco de texto que comeca com -----BEGIN PGP PUBLIC KEY BLOCK-----). Envie por e-mail, cole em um chat, publique no seu site ou compartilhe em um servidor de chaves. No KeychainPGP, va ate a aba Chaves e use a funcao de exportacao para copiar sua chave publica.' },
		{ question: 'O que e criptografia PGP por area de transferencia?', answer: 'A criptografia PGP por area de transferencia e um fluxo de trabalho onde voce copia o texto para a area de transferencia, criptografa ou descriptografa com um atalho ou botao, e cola o resultado. Essa abordagem funciona com qualquer aplicativo — e-mail, chat, notas ou qualquer campo de texto. O KeychainPGP foi projetado em torno dessa abordagem com atalhos globais: Ctrl+Shift+E para criptografar e Ctrl+Shift+D para descriptografar.' },
		{ question: 'O KeychainPGP e realmente gratuito e open source?', answer: 'Sim. O KeychainPGP e 100% gratuito e open source sob dupla licenca MIT/Apache-2.0. O codigo-fonte esta publicamente disponivel no GitHub. Nao ha versao paga, funcionalidades premium, contas, telemetria ou rastreamento.' }
	],
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
