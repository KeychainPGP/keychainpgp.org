import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP para iniciantes: guia simples para comecar com criptografia PGP',
	description: 'Aprenda criptografia PGP do zero. Este guia para iniciantes explica como o PGP funciona, acompanha voce na sua primeira mensagem criptografada e cobre os conceitos-chave.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Por que a criptografia e importante', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'O que e PGP, de forma simples', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Conceitos-chave que voce precisa saber', level: 2 },
		{ id: 'public-key-your-address', text: 'Chave publica: seu endereco', level: 3 },
		{ id: 'private-key-your-password', text: 'Chave privada: sua senha', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Criptografia vs assinatura', level: 3 },
		{ id: 'key-fingerprints', text: 'Impressoes digitais de chaves', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'Sua primeira mensagem PGP', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Erros comuns de iniciantes', level: 2 },
		{ id: 'next-steps', text: 'Proximos passos', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP para iniciantes: guia simples para comecar</h1>

<p>Comecar com PGP e mais facil do que voce imagina. Voce gera um par de chaves — uma publica, uma privada — compartilha a chave publica com as pessoas com quem deseja se comunicar, e usa a chave privada para descriptografar as mensagens que elas enviam para voce. Voce nao precisa instalar nenhum software para experimentar. Com uma <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> gratuita como o KeychainPGP, voce pode criptografar sua primeira mensagem em menos de cinco minutos, diretamente do seu navegador.</p>

<h2 id="why-encryption-matters">Por que a criptografia e importante</h2>

<p>Todos os dias, bilhoes de mensagens transitam pela internet. E-mails, mensagens de chat, documentos — a maioria e enviada em texto puro, o que significa que qualquer pessoa que as intercepte pode le-las. Isso inclui provedores de internet, hackers em redes Wi-Fi publicas e ate programas de vigilancia governamental.</p>

<p><strong>Vazamentos de dados nao sao eventos raros.</strong> Eles acontecem constantemente. Se suas mensagens nao estao criptografadas, elas ficam armazenadas em bancos de dados em texto legivel, esperando o proximo vazamento.</p>

<p>A criptografia resolve esse problema. Quando voce criptografa uma mensagem com PGP, ela e transformada em texto ilegivel. Somente a pessoa que possui a chave privada correta pode decifra-la.</p>

<h2 id="what-is-pgp-explained-simply">O que e PGP, de forma simples</h2>

<p>PGP significa <strong>Pretty Good Privacy</strong>. Criado em 1991 por Phil Zimmermann, tornou-se o padrao mundial para criptografia de mensagens e arquivos.</p>

<p>Aqui esta a forma mais simples de entender o PGP. Pense nele como uma <strong>caixa de correio com uma abertura</strong>.</p>

<p>Imagine uma caixa de correio especial na rua. Qualquer pessoa pode se aproximar e colocar uma carta pela abertura. Mas uma vez que a carta esta dentro, somente voce pode abri-la, porque so voce tem a chave da porta da caixa de correio.</p>

<ul>
<li>A <strong>abertura da caixa de correio</strong> e sua <strong>chave publica</strong>. Voce a entrega a quem quiser lhe enviar uma mensagem privada. E seguro compartilha-la.</li>
<li>A <strong>chave da caixa de correio</strong> e sua <strong>chave privada</strong>. Voce nunca a compartilha com ninguem.</li>
</ul>

<p>Isso e chamado de <strong>criptografia assimetrica</strong> — uma chave tranca, outra destranca. Para uma explicacao tecnica mais aprofundada, leia nosso guia completo sobre <a href="/pt-BR/docs/what-is-pgp/">o que e PGP</a>.</p>

<h2 id="key-concepts-you-need-to-know">Conceitos-chave que voce precisa saber</h2>

<h3 id="public-key-your-address">Chave publica: seu endereco</h3>

<p>Sua chave publica e como seu endereco postal. Voce a distribui livremente para que as pessoas possam lhe enviar coisas. No PGP, voce compartilha sua chave publica para que outros possam criptografar mensagens que somente voce pode ler.</p>

<h3 id="private-key-your-password">Chave privada: sua senha</h3>

<p>Sua chave privada e como a chave da sua porta de entrada. E a unica coisa que permite abrir as mensagens criptografadas com sua chave publica. Voce <strong>nunca deve compartilhar sua chave privada</strong> com ninguem.</p>

<h3 id="encryption-vs-signing">Criptografia vs assinatura</h3>

<p>O PGP pode fazer duas coisas: <strong>criptografar</strong> e <strong>assinar</strong>.</p>

<ul>
<li><strong>Criptografia</strong> — embaralha uma mensagem para que somente o destinatario possa le-la. Voce usa a chave publica do destinatario para criptografar, e ele usa sua chave privada para descriptografar.</li>
<li><strong>Assinatura</strong> — prova que uma mensagem veio de voce e nao foi alterada. Voce usa sua propria chave privada para assinar, e qualquer pessoa com sua chave publica pode verificar a assinatura.</li>
</ul>

<h3 id="key-fingerprints">Impressoes digitais de chaves</h3>

<p>Uma impressao digital de chave e uma sequencia curta de caracteres que identifica de forma unica uma chave PGP. As impressoes digitais servem para <strong>verificar</strong> que uma chave publica pertence a pessoa que voce pensa. Sempre compare a impressao digital por um canal de confianca separado.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Quando voce ve uma chave PGP ou uma mensagem criptografada como um bloco de texto que comeca com <code>-----BEGIN PGP MESSAGE-----</code>, isso e <strong>ASCII armor</strong>. E simplesmente uma forma de codificar dados binarios em caracteres de texto imprimiveis para que possam ser copiados e colados em e-mails, janelas de chat ou formularios web.</p>

<h2 id="your-first-pgp-message">Sua primeira mensagem PGP</h2>

<p>Vamos seguir os passos para criptografar sua primeira mensagem com o <a href="https://keychainpgp.github.io">aplicativo web KeychainPGP</a>. E uma <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> gratuita que funciona inteiramente no seu navegador.</p>

<p><strong>Passo 1: Abra o aplicativo web.</strong> Acesse <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. O aplicativo carrega via WebAssembly, o motor PGP funciona localmente no seu computador.</p>

<p><strong>Passo 2: Gere seu par de chaves.</strong> Na aba Chaves, crie uma nova chave. O KeychainPGP gera um par de chaves Ed25519 + X25519 moderno.</p>

<p><strong>Passo 3: Exporte e compartilhe sua chave publica.</strong> Use a funcao de exportacao para copiar sua chave publica no formato ASCII-armored.</p>

<p><strong>Passo 4: Importe a chave publica do destinatario.</strong> Na aba Chaves, cole o bloco da chave publica do seu contato.</p>

<p><strong>Passo 5: Escreva e criptografe sua mensagem.</strong> Va ate a aba Criptografar, digite sua mensagem, selecione o destinatario e clique em <strong>"Criptografar para a area de transferencia"</strong>.</p>

<p><strong>Passo 6: Envie a mensagem criptografada.</strong> Cole o texto criptografado em qualquer e-mail, chat ou aplicativo de mensagens.</p>

<p><strong>Passo 7: Descriptografe uma resposta.</strong> Copie o bloco de mensagem PGP criptografada, va ate a aba Descriptografar, cole e clique em Descriptografar.</p>

<p>Para um guia mais detalhado, consulte nosso tutorial <a href="/pt-BR/docs/how-to-use-pgp/">como usar PGP</a>.</p>

<h2 id="common-beginner-mistakes">Erros comuns de iniciantes</h2>

<p><strong>1. Compartilhar a chave privada.</strong> Sua chave privada nunca deve ser enviada a ninguem. Compartilhe apenas sua chave <strong>publica</strong>.</p>

<p><strong>2. Nao verificar as impressoes digitais.</strong> Sempre verifique a impressao digital da chave por um canal separado e confiavel — uma ligacao telefonica, uma videochamada ou um encontro presencial.</p>

<p><strong>3. Perder a chave privada sem backup.</strong> Se voce perder sua chave privada, toda mensagem criptografada com essa chave sera perdida para sempre. Faca backup da sua chave privada em um local seguro.</p>

<p><strong>4. Nao salvar o certificado de revogacao.</strong> Um certificado de revogacao permite que voce declare publicamente que sua chave nao e mais valida caso ela seja comprometida.</p>

<p><strong>5. Usar chaves obsoletas ou fracas.</strong> Se voce estiver gerando novas chaves hoje, use algoritmos modernos. O KeychainPGP usa Ed25519 + X25519 por padrao.</p>

<h2 id="next-steps">Proximos passos</h2>

<ul>
<li><strong>Leia o guia completo:</strong> <a href="/pt-BR/docs/how-to-use-pgp/">Como usar PGP</a> cobre assinatura, verificacao, gerenciamento de chaves e topicos avancados.</li>
<li><strong>Entenda o que e PGP:</strong> Para um aprofundamento, leia <a href="/pt-BR/docs/what-is-pgp/">O que e PGP</a>.</li>
<li><strong>Aprenda sobre criptografia por area de transferencia:</strong> Descubra como a <a href="/pt-BR/docs/clipboard-encryption/">criptografia por area de transferencia</a> permite usar PGP com qualquer aplicativo.</li>
<li><strong>Experimente a ferramenta online:</strong> Abra a <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> e pratique.</li>
<li><strong>Obtenha o aplicativo desktop:</strong> O <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">aplicativo desktop KeychainPGP</a> adiciona atalhos globais, bandeja do sistema e limpeza automatica da area de transferencia.</li>
</ul>

<h2 id="faq">Perguntas frequentes</h2>

<h3>PGP e dificil de aprender?</h3>
<p>Nao. O conceito basico e simples: uma chave publica para compartilhar, uma chave privada para manter em segredo. Criptografar uma mensagem leva poucos cliques com uma ferramenta moderna como o KeychainPGP.</p>

<h3>Preciso instalar um software para usar PGP?</h3>
<p>Nao necessariamente. Voce pode usar a <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> do KeychainPGP diretamente no seu navegador. Ela funciona inteiramente no seu dispositivo via WebAssembly.</p>

<h3>Alguem pode quebrar minhas mensagens criptografadas com PGP?</h3>
<p>Com algoritmos modernos (como Ed25519 + X25519 usados pelo KeychainPGP), quebrar a criptografia por forca bruta levaria mais que a idade do universo com a tecnologia atual. Os riscos reais sao praticos: perder a chave privada, usar uma senha fraca ou ter malware no dispositivo.</p>

<h3>Qual e a diferenca entre PGP, GPG e OpenPGP?</h3>
<p><strong>PGP</strong> e o programa original criado em 1991. <strong>OpenPGP</strong> e o padrao aberto (RFC 4880) que define os formatos. <strong>GPG</strong> (GNU Privacy Guard) e uma implementacao livre do padrao OpenPGP. O KeychainPGP e outra implementacao, construida sobre Sequoia-PGP em Rust. Todos sao compativeis porque seguem o mesmo padrao.</p>

<h3>Como compartilhar minha chave publica?</h3>
<p>Exporte sua chave publica no formato ASCII-armored — e um bloco de texto que comeca com <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>. Cole em um e-mail, publique no seu site, compartilhe em um chat ou envie para um servidor de chaves. Nao esqueca de verificar as impressoes digitais com seus contatos por um canal separado.</p>
`
};

export default doc;
