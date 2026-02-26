import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP para principiantes: guia simples para comecar com a encriptacao PGP',
	description: 'Aprenda encriptacao PGP a partir do zero. Este guia para principiantes explica como funciona o PGP, acompanha-o na sua primeira mensagem encriptada e cobre os conceitos-chave.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Porque e que a encriptacao importa', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'O que e PGP, de forma simples', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Conceitos-chave a conhecer', level: 2 },
		{ id: 'public-key-your-address', text: 'Chave publica: o seu endereco', level: 3 },
		{ id: 'private-key-your-password', text: 'Chave privada: a sua palavra-passe', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Encriptacao vs assinatura', level: 3 },
		{ id: 'key-fingerprints', text: 'Impressoes digitais de chaves', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'A sua primeira mensagem PGP', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Erros comuns de principiante', level: 2 },
		{ id: 'next-steps', text: 'Proximos passos', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP para principiantes: guia simples para comecar</h1>

<p>Comecar com PGP e mais facil do que pensa. Gera um par de chaves — uma publica, uma privada — partilha a chave publica com as pessoas com quem pretende comunicar e utiliza a chave privada para desencriptar as mensagens que lhe enviam. Nao precisa de instalar software para experimentar. Com uma <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> gratuita como o KeychainPGP, pode encriptar a sua primeira mensagem em menos de cinco minutos, diretamente a partir do seu navegador.</p>

<h2 id="why-encryption-matters">Porque e que a encriptacao importa</h2>

<p>Todos os dias, milhares de milhoes de mensagens circulam pela Internet. E-mails, mensagens de chat, documentos — a maioria e enviada em texto claro, o que significa que qualquer pessoa que os intercete pode le-los. Isto inclui fornecedores de acesso a Internet, piratas informaticos em redes Wi-Fi publicas e ate programas de vigilancia governamentais.</p>

<p><strong>As fugas de dados nao sao eventos raros.</strong> Acontecem constantemente. Se as suas mensagens nao estao encriptadas, sao armazenadas em bases de dados em texto legivel, a espera da proxima fuga.</p>

<p>A encriptacao resolve este problema. Quando encripta uma mensagem com PGP, esta e transformada em texto ilegivel. Apenas a pessoa que detem a chave privada correta a pode decifrar.</p>

<h2 id="what-is-pgp-explained-simply">O que e PGP, de forma simples</h2>

<p>PGP significa <strong>Pretty Good Privacy</strong>. Criado em 1991 por Phil Zimmermann, tornou-se o padrao mundial para a encriptacao de mensagens e ficheiros.</p>

<p>Eis a forma mais simples de compreender o PGP. Pense nele como uma <strong>caixa de correio com ranhura</strong>.</p>

<p>Imagine uma caixa de correio especial na rua. Qualquer pessoa pode aproximar-se e depositar uma carta pela ranhura. Mas uma vez a carta la dentro, apenas voce a pode abrir, porque so voce tem a chave da porta da caixa de correio.</p>

<ul>
<li>A <strong>ranhura da caixa de correio</strong> e a sua <strong>chave publica</strong>. Da-a a quem lhe quiser enviar uma mensagem privada. E seguro partilha-la.</li>
<li>A <strong>chave da caixa de correio</strong> e a sua <strong>chave privada</strong>. Nunca a partilha com ninguem.</li>
</ul>

<p>Isto e o que se chama <strong>encriptacao assimetrica</strong> — uma chave tranca, outra destranca. Para uma explicacao tecnica mais aprofundada, leia o nosso guia completo sobre <a href="/pt-PT/docs/what-is-pgp/">o que e PGP</a>.</p>

<h2 id="key-concepts-you-need-to-know">Conceitos-chave a conhecer</h2>

<h3 id="public-key-your-address">Chave publica: o seu endereco</h3>

<p>A sua chave publica e como a sua morada postal. Distribui-a livremente para que as pessoas lhe possam enviar coisas. Em PGP, partilha a sua chave publica para que outros possam encriptar mensagens que so voce pode ler.</p>

<h3 id="private-key-your-password">Chave privada: a sua palavra-passe</h3>

<p>A sua chave privada e como a chave da sua porta de entrada. E a unica coisa que lhe permite abrir as mensagens encriptadas com a sua chave publica. <strong>Nunca deve partilhar a sua chave privada</strong> com ninguem.</p>

<h3 id="encryption-vs-signing">Encriptacao vs assinatura</h3>

<p>O PGP pode fazer duas coisas: <strong>encriptar</strong> e <strong>assinar</strong>.</p>

<ul>
<li><strong>Encriptacao</strong> — transforma uma mensagem em texto ilegivel para que apenas o destinatario a possa ler. Utiliza a chave publica do destinatario para encriptar, e ele utiliza a sua chave privada para desencriptar.</li>
<li><strong>Assinatura</strong> — prova que uma mensagem vem de si e nao foi alterada. Utiliza a sua propria chave privada para assinar, e qualquer pessoa com a sua chave publica pode verificar a assinatura.</li>
</ul>

<h3 id="key-fingerprints">Impressoes digitais de chaves</h3>

<p>Uma impressao digital de chave e uma curta cadeia de caracteres que identifica de forma unica uma chave PGP. As impressoes digitais servem para <strong>verificar</strong> que uma chave publica pertence de facto a pessoa que se pensa. Compare sempre a impressao digital atraves de um canal de confianca separado.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Quando ve uma chave PGP ou uma mensagem encriptada como um bloco de texto que comeca por <code>-----BEGIN PGP MESSAGE-----</code>, isso e <strong>ASCII armor</strong>. E simplesmente uma forma de codificar dados binarios em caracteres de texto imprimiveis para poder copia-los e cola-los em e-mails, janelas de chat ou formularios web.</p>

<h2 id="your-first-pgp-message">A sua primeira mensagem PGP</h2>

<p>Vamos percorrer os passos para encriptar a sua primeira mensagem com a <a href="https://keychainpgp.github.io">aplicacao web KeychainPGP</a>. E uma <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> gratuita que funciona inteiramente no seu navegador.</p>

<p><strong>Passo 1: Abra a aplicacao web.</strong> Va a <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>. A aplicacao carrega via WebAssembly, o motor PGP funciona localmente no seu computador.</p>

<p><strong>Passo 2: Gere o seu par de chaves.</strong> No separador Chaves, crie uma nova chave. O KeychainPGP gera um par de chaves Ed25519 + X25519 moderno.</p>

<p><strong>Passo 3: Exporte e partilhe a sua chave publica.</strong> Utilize a funcao de exportacao para copiar a sua chave publica em formato ASCII-armored.</p>

<p><strong>Passo 4: Importe a chave publica do destinatario.</strong> No separador Chaves, cole o bloco de chave publica do seu contacto.</p>

<p><strong>Passo 5: Escreva e encripte a sua mensagem.</strong> Va ao separador Encriptar, escreva a sua mensagem, selecione o destinatario e clique em <strong>"Encriptar para a area de transferencia"</strong>.</p>

<p><strong>Passo 6: Envie a mensagem encriptada.</strong> Cole o texto encriptado em qualquer e-mail, chat ou aplicacao de mensagens.</p>

<p><strong>Passo 7: Desencripte uma resposta.</strong> Copie o bloco de mensagem PGP encriptada, va ao separador Desencriptar, cole e clique em Desencriptar.</p>

<p>Para um guia mais detalhado, consulte o nosso tutorial <a href="/pt-PT/docs/how-to-use-pgp/">como utilizar PGP</a>.</p>

<h2 id="common-beginner-mistakes">Erros comuns de principiante</h2>

<p><strong>1. Partilhar a chave privada.</strong> A sua chave privada nunca deve ser enviada a ninguem. Partilhe apenas a sua chave <strong>publica</strong>.</p>

<p><strong>2. Nao verificar as impressoes digitais.</strong> Verifique sempre a impressao digital da chave atraves de um canal separado e de confianca — uma chamada telefonica, uma videochamada ou um encontro presencial.</p>

<p><strong>3. Perder a chave privada sem copia de seguranca.</strong> Se perder a sua chave privada, todas as mensagens encriptadas com essa chave estao perdidas para sempre. Faca uma copia de seguranca da sua chave privada num local seguro.</p>

<p><strong>4. Nao guardar o certificado de revogacao.</strong> Um certificado de revogacao permite-lhe declarar publicamente que a sua chave ja nao e valida se for comprometida.</p>

<p><strong>5. Utilizar chaves obsoletas ou fracas.</strong> Se estiver a gerar novas chaves hoje, utilize algoritmos modernos. O KeychainPGP utiliza Ed25519 + X25519 por defeito.</p>

<h2 id="next-steps">Proximos passos</h2>

<ul>
<li><strong>Leia o guia completo:</strong> <a href="/pt-PT/docs/how-to-use-pgp/">Como utilizar PGP</a> cobre assinatura, verificacao, gestao de chaves e topicos avancados.</li>
<li><strong>Compreenda o que e PGP:</strong> Para um aprofundamento, leia <a href="/pt-PT/docs/what-is-pgp/">O que e PGP</a>.</li>
<li><strong>Aprenda a encriptacao por area de transferencia:</strong> Descubra como a <a href="/pt-PT/docs/clipboard-encryption/">encriptacao por area de transferencia</a> lhe permite utilizar PGP com qualquer aplicacao.</li>
<li><strong>Experimente a ferramenta online:</strong> Abra a <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> e pratique.</li>
<li><strong>Obtenha a aplicacao de ambiente de trabalho:</strong> A <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">aplicacao de ambiente de trabalho KeychainPGP</a> acrescenta atalhos globais, barra de sistema e limpeza automatica da area de transferencia.</li>
</ul>

<h2 id="faq">Perguntas frequentes</h2>

<h3>O PGP e dificil de aprender?</h3>
<p>Nao. O conceito basico e simples: uma chave publica para partilhar, uma chave privada para guardar em segredo. Encriptar uma mensagem requer apenas alguns cliques com uma ferramenta moderna como o KeychainPGP.</p>

<h3>E preciso instalar software para utilizar PGP?</h3>
<p>Nao necessariamente. Pode utilizar a <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> do KeychainPGP diretamente no seu navegador. Funciona inteiramente no seu dispositivo atraves de WebAssembly.</p>

<h3>Alguem pode decifrar as minhas mensagens encriptadas com PGP?</h3>
<p>Com algoritmos modernos (como Ed25519 + X25519 utilizados pelo KeychainPGP), decifrar a encriptacao por forca bruta demoraria mais do que a idade do universo com a tecnologia atual. Os verdadeiros riscos sao praticos: perder a chave privada, utilizar uma frase-passe fraca ou ter malware no dispositivo.</p>

<h3>Qual e a diferenca entre PGP, GPG e OpenPGP?</h3>
<p><strong>PGP</strong> e o programa original criado em 1991. <strong>OpenPGP</strong> e o padrao aberto (RFC 4880) que define os formatos. <strong>GPG</strong> (GNU Privacy Guard) e uma implementacao livre do padrao OpenPGP. O KeychainPGP e outra implementacao, construida sobre Sequoia-PGP em Rust. Todos sao compativeis porque seguem o mesmo padrao.</p>

<h3>Como partilhar a minha chave publica?</h3>
<p>Exporte a sua chave publica em formato ASCII-armored — e um bloco de texto que comeca por <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>. Cole-a num e-mail, publique-a no seu website, partilhe-a num chat ou carregue-a para um servidor de chaves. Nao se esqueca de verificar as impressoes digitais com os seus contactos atraves de um canal separado.</p>
`
};

export default doc;
