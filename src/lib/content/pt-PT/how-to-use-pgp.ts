import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Como utilizar PGP: tutorial de encriptacao passo a passo (2026)',
	description: 'Aprenda a utilizar a encriptacao PGP passo a passo. Gere chaves, encripte e desencripte mensagens, assine e verifique dados com este tutorial PGP completo.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Como utilizar PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'O que precisa', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Passo 1: Gerar um par de chaves', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Passo 2: Partilhar a sua chave publica', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Passo 3: Importar as chaves dos seus contactos', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Passo 4: Encriptar uma mensagem', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Passo 5: Desencriptar uma mensagem', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Passo 6: Assinar uma mensagem', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Passo 7: Verificar uma assinatura', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'Workflow de area de transferencia KeychainPGP', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Aplicacao web vs aplicacao de ambiente de trabalho', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>Como utilizar PGP</h1>

<p>Para utilizar PGP, gera um par de chaves (uma chave publica e uma chave privada), partilha a sua chave publica com as pessoas com quem pretende comunicar, importa as chaves publicas dessas pessoas e, em seguida, utiliza essas chaves para encriptar, desencriptar, assinar e verificar mensagens. A encriptacao PGP garante que apenas o destinatario pretendido pode ler a sua mensagem, enquanto as assinaturas digitais provam que uma mensagem vem de facto de si. Ferramentas como o <a href="/pt-PT/pgp-online-encrypt/">KeychainPGP</a> tornam este processo acessivel gracas a um workflow baseado na area de transferencia — sem linha de comandos.</p>

<p>Este tutorial PGP guia-o atraves de cada passo, desde a geracao do seu primeiro par de chaves ate ao envio e rececao de mensagens encriptadas. Se e novo no conceito de criptografia de chave publica, considere ler primeiro <a href="/pt-PT/docs/what-is-pgp/">O que e PGP?</a> ou <a href="/pt-PT/docs/pgp-for-beginners/">PGP para principiantes</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">O que precisa antes de comecar</h2>

<p>Antes de encriptar a sua primeira mensagem com PGP, precisa de uma aplicacao PGP:</p>

<ul>
<li><strong>Aplicacao web KeychainPGP</strong> — Abra a <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> em qualquer navegador moderno. Tudo funciona localmente atraves de WebAssembly compilado a partir de Rust. Sem instalacao, sem conta, sem dados enviados para qualquer servidor.</li>
<li><strong>Aplicacao de ambiente de trabalho KeychainPGP</strong> — Transfira a aplicacao nativa para Windows, macOS, Linux ou Android a partir da <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">pagina de versoes do GitHub</a>. A aplicacao de ambiente de trabalho acrescenta atalhos globais, integracao na barra de sistema, limpeza automatica da area de transferencia e sincronizacao por codigo QR.</li>
<li><strong>CLI KeychainPGP</strong> — O CLI <code>keychainpgp</code> fornece comandos para geracao de chaves, encriptacao, desencriptacao, assinatura, verificacao e gestao do porta-chaves. Ideal para scripting e automacao.</li>
<li><strong>GnuPG (GPG)</strong> — A ferramenta de linha de comandos tradicional. Poderosa mas requer familiaridade com o terminal. Consulte <a href="/pt-PT/docs/pgp-vs-gpg/">PGP vs GPG</a> para uma comparacao detalhada.</li>
</ul>

<blockquote><p><strong>Dica:</strong> Se pretende apenas experimentar a encriptacao PGP agora sem instalar nada, abra a <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> e siga este tutorial.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Passo 1: Gerar um par de chaves PGP</h2>

<p>Um par de chaves PGP e composto por duas chaves matematicamente relacionadas:</p>

<ul>
<li><strong>Chave publica</strong> — Partilha-a livremente. Qualquer pessoa a pode utilizar para encriptar mensagens dirigidas a si ou verificar as suas assinaturas.</li>
<li><strong>Chave privada</strong> — Mantem-na em segredo. Desencripta as mensagens encriptadas com a sua chave publica e cria assinaturas digitais.</li>
</ul>

<h3>Gerar uma chave no KeychainPGP</h3>

<ol>
<li>Abra o KeychainPGP (aplicacao web ou de ambiente de trabalho).</li>
<li>Navegue ate ao separador <strong>Chaves</strong>.</li>
<li>Clique em <strong>Gerar nova chave</strong>.</li>
<li>Introduza o seu nome e endereco de e-mail.</li>
<li>Clique em <strong>Gerar</strong>. O KeychainPGP cria um par de chaves <strong>Ed25519 + X25519</strong> — o algoritmo mais moderno e seguro disponivel no OpenPGP.</li>
</ol>

<h3>Gerar uma chave com GPG (linha de comandos)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Selecione o tipo de chave (RSA ou ECC), o tamanho e o periodo de expiracao. Para seguranca moderna, escolha Ed25519 se a sua versao de GPG o suportar.</p>

<hr>

<h2 id="step-2-share-your-public-key">Passo 2: Partilhar a sua chave publica</h2>

<p>A sua chave publica e um bloco de texto no formato <strong>ASCII-armored</strong>. Pode partilha-la em qualquer lado:</p>

<ul>
<li><strong>E-mail</strong> — Cole-a no corpo de um e-mail ou anexe-a como ficheiro <code>.asc</code>.</li>
<li><strong>Aplicacoes de mensagens</strong> — Envie-a via Signal, WhatsApp, Matrix ou qualquer plataforma de chat.</li>
<li><strong>O seu website</strong> — Publique-a no seu site pessoal, perfil GitHub ou biografia do Twitter.</li>
<li><strong>Servidores de chaves</strong> — Carregue-a para um servidor de chaves publico como <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Importante:</strong> Partilhe apenas a sua chave <strong>publica</strong>. Nunca partilhe a sua chave privada com ninguem, em circunstancia alguma.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Passo 3: Importar as chaves publicas dos seus contactos</h2>

<p>Antes de poder enviar uma mensagem encriptada a alguem, precisa da chave publica dessa pessoa. Peca ao seu contacto que lhe envie a sua chave publica ASCII-armored, ou procure-a num servidor de chaves.</p>

<h3>Importar uma chave no KeychainPGP</h3>

<ol>
<li>Copie o bloco de chave publica do contacto para a sua area de transferencia.</li>
<li>Abra o KeychainPGP e va ao separador <strong>Chaves</strong>.</li>
<li>Clique em <strong>Importar chave</strong> e cole a chave.</li>
<li>O contacto aparece na sua lista de chaves com o seu nome e e-mail.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Passo 4: Encriptar uma mensagem</h2>

<h3>Encriptacao no KeychainPGP (web ou ambiente de trabalho)</h3>

<ol>
<li>Va ao separador <strong>Encriptar</strong>.</li>
<li>Escreva ou cole a mensagem que pretende encriptar.</li>
<li>Selecione o destinatario na sua lista de chaves.</li>
<li>Clique em <strong>Encriptar para a area de transferencia</strong>. A mensagem encriptada e copiada para a sua area de transferencia.</li>
<li>Cole a mensagem encriptada no seu e-mail, chat ou qualquer outro canal de comunicacao.</li>
</ol>

<h3>Encriptacao com o atalho de ambiente de trabalho</h3>

<p>Com a aplicacao de ambiente de trabalho KeychainPGP, o processo e ainda mais rapido gracas ao <a href="/pt-PT/docs/clipboard-encryption/">workflow por area de transferencia</a>:</p>

<ol>
<li>Escreva a sua mensagem em qualquer aplicacao.</li>
<li>Selecione e copie o texto (<code>Ctrl+C</code>).</li>
<li>Prima <strong><code>Ctrl+Shift+E</code></strong> — O KeychainPGP encripta o conteudo da area de transferencia.</li>
<li>Cole a mensagem encriptada (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Passo 5: Desencriptar uma mensagem</h2>

<h3>Desencriptacao no KeychainPGP (web ou ambiente de trabalho)</h3>

<ol>
<li>Copie o bloco completo da mensagem encriptada.</li>
<li>Va ao separador <strong>Desencriptar</strong> do KeychainPGP.</li>
<li>Cole o texto encriptado.</li>
<li>Clique em <strong>Desencriptar</strong>. O texto legivel aparece imediatamente.</li>
</ol>

<h3>Desencriptacao com o atalho de ambiente de trabalho</h3>

<ol>
<li>Selecione e copie o bloco de mensagem encriptada (<code>Ctrl+C</code>).</li>
<li>Prima <strong><code>Ctrl+Shift+D</code></strong> — O KeychainPGP desencripta o conteudo da area de transferencia.</li>
<li>O texto legivel substitui o texto encriptado na sua area de transferencia. Cole-o onde precisar.</li>
</ol>

<p>A aplicacao de ambiente de trabalho dispoe tambem da <strong>limpeza automatica da area de transferencia</strong>: apos 30 segundos, o texto desencriptado e automaticamente removido da area de transferencia.</p>

<hr>

<h2 id="step-6-sign-a-message">Passo 6: Assinar uma mensagem</h2>

<p>Uma assinatura digital PGP prova duas coisas:</p>

<ol>
<li><strong>Autenticidade</strong> — A mensagem foi escrita pelo detentor da chave de assinatura.</li>
<li><strong>Integridade</strong> — A mensagem nao foi alterada desde que foi assinada.</li>
</ol>

<p>Assinar nao encripta a mensagem. Qualquer pessoa pode ler uma mensagem assinada, mas pode verificar que vem de facto de si e que nao foi falsificada.</p>

<h3>Quando assinar mensagens</h3>

<ul>
<li>Anunciar versoes de software ou avisos de seguranca</li>
<li>Verificar a sua identidade em foruns publicos</li>
<li>Assinar e-mails para provar a sua origem</li>
<li>Assinatura de commits Git para integridade do codigo</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Passo 7: Verificar uma assinatura</h2>

<p>Quando recebe uma mensagem assinada, pode verificar que e autentica e nao foi modificada.</p>

<h3>Verificacao no KeychainPGP</h3>

<ol>
<li>Copie a mensagem assinada completa (incluindo o bloco de assinatura).</li>
<li>Va ao separador <strong>Verificar</strong>.</li>
<li>Cole a mensagem assinada.</li>
<li>Clique em <strong>Verificar</strong>. O KeychainPGP confirma se a assinatura e valida.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">Workflow de area de transferencia KeychainPGP</h2>

<p>O que distingue o KeychainPGP das ferramentas PGP tradicionais e o seu <a href="/pt-PT/docs/clipboard-encryption/">workflow de encriptacao por area de transferencia</a>. Em vez de operar sobre ficheiros ou exigir um cliente de e-mail dedicado, o KeychainPGP funciona com qualquer aplicacao atraves da area de transferencia do sistema.</p>

<table>
<tr><th>Acao</th><th>Aplicacao web</th><th>Aplicacao de ambiente de trabalho</th></tr>
<tr><td>Encriptar</td><td>Colar o texto, clicar em Encriptar</td><td>Copiar o texto, premir <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Desencriptar</td><td>Colar o texto encriptado, clicar em Desencriptar</td><td>Copiar o texto encriptado, premir <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Assinar</td><td>Colar o texto, clicar em Assinar</td><td>Disponivel na janela da aplicacao</td></tr>
<tr><td>Verificar</td><td>Colar o texto assinado, clicar em Verificar</td><td>Disponivel na janela da aplicacao</td></tr>
</table>

<p>Funcionalidades de seguranca adicionais da aplicacao de ambiente de trabalho:</p>

<ul>
<li><strong>Limpeza automatica da area de transferencia</strong> — O texto desencriptado e removido da area de transferencia apos 30 segundos.</li>
<li><strong>Modo OPSEC</strong> — Titulo de janela disfarado, armazenamento de chaves apenas em RAM e botao de eliminacao de emergencia.</li>
<li><strong>Armazenamento de credenciais do SO</strong> — As chaves privadas sao armazenadas em seguranca atraves do Windows Credential Manager, macOS Keychain ou Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Aplicacao web vs aplicacao de ambiente de trabalho</h2>

<p><strong>Aplicacao web</strong> (<a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a>):</p>

<ul>
<li>Funciona inteiramente no navegador atraves de WebAssembly</li>
<li>Nenhuma instalacao, nenhuma conta necessaria</li>
<li>Perfeita para tarefas de encriptacao rapidas</li>
<li>As chaves sao armazenadas no armazenamento local do navegador</li>
</ul>

<p><strong>Aplicacao de ambiente de trabalho</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Atalhos globais para encriptar e desencriptar</li>
<li>Integracao na barra de sistema</li>
<li>Limpeza automatica da area de transferencia</li>
<li>Modo OPSEC com chaves apenas em RAM e eliminacao de emergencia</li>
<li>Armazenamento seguro de chaves atraves do gestor de credenciais do SO</li>
<li>Mais adequada para uso diario e gestao de chaves a longo prazo</li>
</ul>

<p>Ambas as aplicacoes sao gratuitas, open source (MIT / Apache-2.0) e sem qualquer telemetria.</p>

<hr>

<h2 id="frequently-asked-questions">Perguntas frequentes</h2>

<h3>Devo partilhar a minha chave privada?</h3>

<p>Nao. <strong>Nunca</strong> deve partilhar a sua chave privada com ninguem. A sua chave privada e o que lhe permite desencriptar as mensagens que lhe sao enviadas e criar assinaturas digitais. Se outra pessoa obtiver a sua chave privada, pode ler todas as mensagens encriptadas para si e fazer-se passar por si.</p>

<h3>O que acontece se eu perder a minha chave privada?</h3>

<p>Se perder a sua chave privada, perde definitivamente a capacidade de desencriptar todas as mensagens encriptadas com a chave publica correspondente. Nao existe qualquer mecanismo de recuperacao. Mantenha sempre uma copia de seguranca da sua chave privada.</p>

<h3>Posso encriptar ficheiros com PGP?</h3>

<p>Sim. O PGP pode encriptar tanto mensagens de texto como ficheiros binarios. O KeychainPGP concentra-se na encriptacao de texto por area de transferencia, enquanto ferramentas como o GnuPG suportam a encriptacao de ficheiros diretamente. Para uma comparacao detalhada, consulte o guia <a href="/pt-PT/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>A encriptacao PGP e segura?</h3>

<p>A encriptacao PGP com algoritmos modernos e extremamente segura. O KeychainPGP utiliza Ed25519 para assinaturas e X25519 para troca de chaves — algoritmos de curva eliptica que oferecem seguranca equivalente a RSA-3072 por uma fracao do tamanho da chave. Os principais riscos nao sao criptograficos mas operacionais: frases-passe fracas, dispositivos comprometidos ou gestao de chaves negligente.</p>

<h3>O que e uma impressao digital PGP?</h3>

<p>Uma impressao digital PGP e uma cadeia hexadecimal de 40 caracteres que identifica de forma unica uma chave PGP. As impressoes digitais sao utilizadas para verificar que uma chave publica pertence de facto a pessoa que se pensa. Compare sempre a impressao digital atraves de um canal de confianca separado (chamada telefonica, encontro presencial) para prevenir ataques de intermediario.</p>
`
};

export default doc;
