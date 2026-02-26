import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Ferramenta de encriptacao PGP online gratuita',
	heroSubtitle: 'Encripte e desencripte mensagens com OpenPGP diretamente no seu navegador. Sem instalacao, sem conta, sem dados enviados para qualquer servidor.',
	trustLine: 'Gratuito e open source. Licenca MIT / Apache-2.0. Sem telemetria.',
	ctaOpen: 'Abrir a ferramenta PGP no navegador',
	ctaHow: 'Como funciona',
	whatIsTitle: 'O que e a encriptacao PGP?',
	whatIsText: 'PGP (Pretty Good Privacy) e o padrao de referencia para a encriptacao de mensagens, e-mails e ficheiros. Utiliza criptografia de chave publica — partilha uma chave publica que qualquer pessoa pode usar para encriptar mensagens dirigidas a si, e apenas a sua chave privada as pode desencriptar. Criado em 1991, o PGP e utilizado por jornalistas, investigadores de seguranca, ativistas e milhoes de utilizadores em todo o mundo. O KeychainPGP torna o PGP acessivel a todos gracas a uma interface moderna e um workflow baseado na area de transferencia — sem linha de comandos, sem configuracao, sem complexidade.',
	howToTitle: 'Como encriptar uma mensagem com PGP online',
	steps: [
		{ title: 'Abrir a ferramenta PGP online', text: 'Aceda a aplicacao web KeychainPGP. Carrega inteiramente no seu navegador — nenhuma instalacao ou conta necessaria. Tudo funciona localmente atraves de WebAssembly.' },
		{ title: 'Gerar ou importar uma chave PGP', text: 'Crie um novo par de chaves Ed25519 + X25519 (a opcao mais moderna e segura), ou importe uma chave PGP existente em formato ASCII.' },
		{ title: 'Importar a chave publica do destinatario', text: 'Adicione a chave publica do seu contacto colando-a no separador Chaves. Esta e a chave que sera usada para encriptar as suas mensagens.' },
		{ title: 'Introduzir a sua mensagem', text: 'Va ao separador Encriptar e escreva ou cole a mensagem que pretende proteger.' },
		{ title: 'Selecionar o destinatario e encriptar', text: 'Escolha o destinatario na sua lista de chaves e clique em "Encriptar para a area de transferencia". A mensagem encriptada PGP e instantaneamente copiada.' },
		{ title: 'Enviar a mensagem encriptada', text: 'Cole a mensagem encriptada em qualquer e-mail, chat ou aplicacao de mensagens. Apenas o destinatario pretendido a pode desencriptar com a sua chave privada.' }
	],
	featuresTitle: 'Porque utilizar o KeychainPGP para encriptacao PGP?',
	features: [
		{ icon: '\u{1F310}', title: '100% no navegador', text: 'Tudo funciona localmente no seu navegador atraves de WebAssembly compilado a partir de Rust. Zero comunicacao com servidores. As suas mensagens e chaves nunca saem do seu dispositivo.' },
		{ icon: '\u{1F512}', title: 'Criptografia moderna', text: 'Chaves de curva eliptica Ed25519 + X25519 por defeito. Baseado no Sequoia-PGP, uma implementacao Rust do OpenPGP sem dependencia do OpenSSL.' },
		{ icon: '\u{1F4BB}', title: 'Multiplataforma', text: 'Disponivel como aplicacao web, alem de aplicacoes nativas para Windows, macOS, Linux e Android. As suas chaves, em todo o lado.' },
		{ icon: '\u{1F4C2}', title: 'Open source', text: 'Codigo inteiramente auditavel sob licenca MIT / Apache-2.0. Sem telemetria, sem rastreamento, sem contas. Consulte o codigo no GitHub.' },
		{ icon: '\u{1F4CB}', title: 'Area de transferencia primeiro', text: 'Copie texto, encripte com um atalho (Ctrl+Shift+E), cole a mensagem encriptada. Funciona com qualquer aplicacao — e-mail, chat, notas, em todo o lado.' },
		{ icon: '\u{26A1}', title: 'Zero configuracao', text: 'Sem escolha de algoritmos, sem tamanho de chave a decidir, sem ficheiros de configuracao. Seguro por defeito. Gere uma chave e comece a encriptar em segundos.' }
	],
	desktopTitle: 'Obtenha a aplicacao de ambiente de trabalho para uso diario',
	desktopText: 'A aplicacao web e perfeita para uma encriptacao rapida, mas a aplicacao de ambiente de trabalho oferece uma experiencia PGP completa com funcionalidades de seguranca adicionais:',
	desktopFeatures: [
		'Atalhos globais — Ctrl+Shift+E para encriptar, Ctrl+Shift+D para desencriptar, a partir de qualquer aplicacao',
		'Barra de sistema — Sempre disponivel na sua barra de tarefas, funciona silenciosamente em segundo plano',
		'Limpeza automatica da area de transferencia — O texto desencriptado e automaticamente removido da area de transferencia apos 30 segundos',
		'Modo OPSEC — Oculte o titulo da janela, chaves apenas em RAM e botao de eliminacao de emergencia',
		'Armazenamento de credenciais do SO — Chaves armazenadas em seguranca no Windows Credential Manager, macOS Keychain ou Linux Secret Service',
		'Aplicacao Android — A mesma interface no telemovel, com sincronizacao de chaves por codigo QR entre dispositivos',
		'CLI — Ferramenta de linha de comandos keychainpgp para scripting e automacao'
	],
	ctaDownload: 'Transferir KeychainPGP',
	ctaAllPlatforms: 'Todas as plataformas',
	faqTitle: 'Perguntas frequentes',
	faqItems: [
		{ question: 'E seguro encriptar mensagens PGP online?', answer: 'Sim, com a aplicacao web KeychainPGP. Toda a encriptacao e desencriptacao e feita localmente no seu navegador atraves de WebAssembly compilado a partir de Rust. Nenhum dado e enviado para qualquer servidor. A aplicacao funciona inteiramente do lado do cliente, as suas mensagens e chaves nunca saem do seu dispositivo.' },
		{ question: 'Para que serve a encriptacao PGP?', answer: 'PGP (Pretty Good Privacy) serve para proteger mensagens privadas, e-mails, ficheiros e assinaturas digitais. Utiliza criptografia de chave publica: encripta uma mensagem com a chave publica de alguem, e apenas a chave privada dessa pessoa a pode desencriptar. O PGP e amplamente utilizado por jornalistas, ativistas, profissionais de seguranca e qualquer pessoa preocupada com a confidencialidade das suas comunicacoes.' },
		{ question: 'Como funciona a encriptacao PGP?', answer: 'O PGP utiliza uma combinacao de criptografia simetrica e assimetrica. Ao encriptar, o PGP gera uma chave de sessao aleatoria, encripta a mensagem com essa chave atraves de encriptacao simetrica rapida, e depois encripta a chave de sessao com a chave publica do destinatario. O destinatario utiliza a sua chave privada para desencriptar a chave de sessao e, em seguida, desencriptar a mensagem. O KeychainPGP utiliza chaves Ed25519 + X25519 modernas para este processo.' },
		{ question: 'Qual e a diferenca entre PGP e GPG?', answer: 'PGP (Pretty Good Privacy) e o padrao de encriptacao original criado por Phil Zimmermann em 1991. GPG (GNU Privacy Guard, ou GnuPG) e uma implementacao livre e open source do padrao OpenPGP. OpenPGP e o padrao IETF (RFC 4880) que define o formato das mensagens. O KeychainPGP implementa o padrao OpenPGP atraves da biblioteca Sequoia-PGP escrita em Rust.' },
		{ question: 'Pode-se utilizar PGP sem instalar software?', answer: 'Sim. O KeychainPGP disponibiliza uma ferramenta PGP online que funciona inteiramente no seu navegador atraves de WebAssembly. Pode gerar chaves, encriptar e desencriptar mensagens, e gerir os seus contactos sem instalar nada. Para uso diario, o KeychainPGP dispoe tambem de aplicacoes de ambiente de trabalho nativas (Windows, macOS, Linux) com atalhos globais, de uma aplicacao Android com sincronizacao por codigo QR, e de um CLI para scripting.' },
		{ question: 'Que algoritmo de encriptacao utiliza o KeychainPGP?', answer: 'O KeychainPGP utiliza Ed25519 para assinaturas digitais e X25519 para troca de chaves — dois algoritmos de criptografia de curva eliptica modernos. Oferecem uma seguranca equivalente a RSA-3072 por uma fracao do tamanho da chave. As operacoes criptograficas sao baseadas no Sequoia-PGP, uma implementacao Rust do OpenPGP sem dependencia do OpenSSL.' },
		{ question: 'A encriptacao PGP ainda e segura em 2026?', answer: 'Sim. A encriptacao PGP com algoritmos modernos (como Ed25519/X25519 utilizados pelo KeychainPGP) continua a ser um dos padroes de encriptacao mais robustos disponiveis. Os fundamentos matematicos da criptografia de curva eliptica nao foram comprometidos. A seguranca do PGP depende de uma boa gestao de chaves, de frases-passe robustas e de implementacoes atualizadas.' },
		{ question: 'Como partilhar a minha chave publica PGP?', answer: 'Pode partilhar a sua chave publica PGP exportando-a em formato ASCII (um bloco de texto que comeca com -----BEGIN PGP PUBLIC KEY BLOCK-----). Envie-a por e-mail, cole-a num chat, publique-a no seu website ou partilhe-a num servidor de chaves. No KeychainPGP, va ao separador Chaves e utilize a funcao de exportacao para copiar a sua chave publica.' },
		{ question: 'O que e a encriptacao PGP por area de transferencia?', answer: 'A encriptacao PGP por area de transferencia e um workflow em que copia texto para a sua area de transferencia, encripta-o ou desencripta-o com um atalho ou botao, e cola o resultado. Esta abordagem funciona com qualquer aplicacao — e-mail, chat, notas ou qualquer campo de texto. O KeychainPGP foi concebido em torno desta abordagem com atalhos globais: Ctrl+Shift+E para encriptar e Ctrl+Shift+D para desencriptar.' },
		{ question: 'O KeychainPGP e realmente gratuito e open source?', answer: 'Sim. O KeychainPGP e 100% gratuito e open source sob dupla licenca MIT/Apache-2.0. O codigo-fonte esta publicamente disponivel no GitHub. Nao ha versao paga, sem funcionalidades premium, sem contas, sem telemetria e sem rastreamento.' }
	],
	learnMoreTitle: 'Saiba mais sobre encriptacao PGP',
	learnMoreLinks: [
		{ href: '/pt-PT/docs/what-is-pgp/', title: 'O que e PGP?', text: 'Guia completo sobre Pretty Good Privacy, criptografia de chave publica e assinaturas digitais.' },
		{ href: '/pt-PT/docs/how-to-use-pgp/', title: 'Como utilizar PGP', text: 'Tutorial passo a passo para gerar chaves, encriptar mensagens e verificar assinaturas.' },
		{ href: '/pt-PT/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'Compreenda a diferenca entre PGP, GPG (GnuPG) e o padrao OpenPGP.' },
		{ href: '/pt-PT/docs/pgp-for-beginners/', title: 'PGP para principiantes', text: 'Tudo o que precisa de saber sobre encriptacao PGP, explicado de forma simples.' },
		{ href: '/pt-PT/docs/clipboard-encryption/', title: 'Encriptacao por area de transferencia', text: 'Como funciona a encriptacao PGP por area de transferencia, consideracoes de seguranca e funcionalidades OPSEC.' },
		{ href: '/pt-PT/blog/best-pgp-tools-2026/', title: 'Melhores ferramentas PGP em 2026', text: 'Comparativo completo e ranking das melhores ferramentas de encriptacao PGP disponiveis.' }
	]
};
