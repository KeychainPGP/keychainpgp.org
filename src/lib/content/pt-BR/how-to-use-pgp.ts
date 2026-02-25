import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Como usar PGP: tutorial de criptografia passo a passo (2026)',
	description: 'Aprenda a usar a criptografia PGP passo a passo. Gere chaves, criptografe e descriptografe mensagens, assine e verifique dados com este tutorial PGP completo.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'Como usar PGP', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'O que voce precisa', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Passo 1: Gerar um par de chaves', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Passo 2: Compartilhar sua chave publica', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Passo 3: Importar as chaves dos seus contatos', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Passo 4: Criptografar uma mensagem', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Passo 5: Descriptografar uma mensagem', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Passo 6: Assinar uma mensagem', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Passo 7: Verificar uma assinatura', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'Fluxo de trabalho por area de transferencia do KeychainPGP', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Aplicativo web vs aplicativo desktop', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>Como usar PGP</h1>

<p>Para usar PGP, voce gera um par de chaves (uma chave publica e uma chave privada), compartilha sua chave publica com as pessoas com quem deseja se comunicar, importa as chaves publicas delas e usa essas chaves para criptografar, descriptografar, assinar e verificar mensagens. A criptografia PGP garante que somente o destinatario pretendido possa ler sua mensagem, enquanto as assinaturas digitais provam que uma mensagem realmente veio de voce. Ferramentas como o <a href="/pt-BR/pgp-online-encrypt/">KeychainPGP</a> tornam esse processo acessivel com um fluxo de trabalho baseado na area de transferencia — sem linha de comando.</p>

<p>Este tutorial PGP guia voce por cada etapa, desde a geracao do seu primeiro par de chaves ate o envio e recebimento de mensagens criptografadas. Se voce e novo no conceito de criptografia de chave publica, considere ler primeiro <a href="/pt-BR/docs/what-is-pgp/">O que e PGP?</a> ou <a href="/pt-BR/docs/pgp-for-beginners/">PGP para iniciantes</a>.</p>

<hr>

<h2 id="what-you-need-before-you-start">O que voce precisa antes de comecar</h2>

<p>Antes de criptografar sua primeira mensagem com PGP, voce precisa de um aplicativo PGP:</p>

<ul>
<li><strong>Aplicativo web KeychainPGP</strong> — Abra a <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> em qualquer navegador moderno. Tudo funciona localmente via WebAssembly compilado a partir de Rust. Sem instalacao, sem conta, nenhum dado enviado a um servidor.</li>
<li><strong>Aplicativo desktop KeychainPGP</strong> — Baixe o aplicativo nativo para Windows, macOS, Linux ou Android na <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">pagina de releases do GitHub</a>. O aplicativo desktop adiciona atalhos globais, integracao com a bandeja do sistema, limpeza automatica da area de transferencia e sincronizacao por QR code.</li>
<li><strong>CLI KeychainPGP</strong> — O CLI <code>keychainpgp</code> fornece comandos para geracao de chaves, criptografia, descriptografia, assinatura, verificacao e gerenciamento do chaveiro. Ideal para scripting e automacao.</li>
<li><strong>GnuPG (GPG)</strong> — A ferramenta de linha de comando tradicional. Poderosa, mas requer familiaridade com o terminal. Veja <a href="/pt-BR/docs/pgp-vs-gpg/">PGP vs GPG</a> para uma comparacao detalhada.</li>
</ul>

<blockquote><p><strong>Dica:</strong> Se voce quer apenas experimentar a criptografia PGP agora sem instalar nada, abra a <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> e siga este tutorial.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Passo 1: Gerar um par de chaves PGP</h2>

<p>Um par de chaves PGP e composto por duas chaves matematicamente vinculadas:</p>

<ul>
<li><strong>Chave publica</strong> — Voce compartilha livremente. Qualquer pessoa pode usa-la para criptografar mensagens para voce ou verificar suas assinaturas.</li>
<li><strong>Chave privada</strong> — Voce mantem em segredo. Ela descriptografa mensagens criptografadas com sua chave publica e cria assinaturas digitais.</li>
</ul>

<h3>Gerar uma chave no KeychainPGP</h3>

<ol>
<li>Abra o KeychainPGP (aplicativo web ou desktop).</li>
<li>Navegue ate a aba <strong>Chaves</strong>.</li>
<li>Clique em <strong>Gerar nova chave</strong>.</li>
<li>Insira seu nome e endereco de e-mail.</li>
<li>Clique em <strong>Gerar</strong>. O KeychainPGP cria um par de chaves <strong>Ed25519 + X25519</strong> — o algoritmo mais moderno e seguro disponivel no OpenPGP.</li>
</ol>

<h3>Gerar uma chave com GPG (linha de comando)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Selecione o tipo de chave (RSA ou ECC), o tamanho e o periodo de expiracao. Para seguranca moderna, escolha Ed25519 se sua versao do GPG suportar.</p>

<hr>

<h2 id="step-2-share-your-public-key">Passo 2: Compartilhar sua chave publica</h2>

<p>Sua chave publica e um bloco de texto no formato <strong>ASCII-armored</strong>. Voce pode compartilha-la em qualquer lugar:</p>

<ul>
<li><strong>E-mail</strong> — Cole-a no corpo de um e-mail ou anexe como arquivo <code>.asc</code>.</li>
<li><strong>Aplicativos de mensagens</strong> — Envie via Signal, WhatsApp, Matrix ou qualquer plataforma de chat.</li>
<li><strong>Seu site</strong> — Publique no seu site pessoal, perfil do GitHub ou bio do Twitter.</li>
<li><strong>Servidores de chaves</strong> — Envie para um servidor de chaves publico como <code>keys.openpgp.org</code>.</li>
</ul>

<p><strong>Importante:</strong> Compartilhe apenas sua chave <strong>publica</strong>. Nunca compartilhe sua chave privada com ninguem, em nenhuma circunstancia.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Passo 3: Importar as chaves publicas dos seus contatos</h2>

<p>Antes de poder enviar uma mensagem criptografada para alguem, voce precisa da chave publica dessa pessoa. Peca ao seu contato que envie a chave publica ASCII-armored, ou procure-a em um servidor de chaves.</p>

<h3>Importar uma chave no KeychainPGP</h3>

<ol>
<li>Copie o bloco da chave publica do contato para sua area de transferencia.</li>
<li>Abra o KeychainPGP e va ate a aba <strong>Chaves</strong>.</li>
<li>Clique em <strong>Importar chave</strong> e cole a chave.</li>
<li>O contato aparece na sua lista de chaves com seu nome e e-mail.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Passo 4: Criptografar uma mensagem</h2>

<h3>Criptografia no KeychainPGP (web ou desktop)</h3>

<ol>
<li>Va ate a aba <strong>Criptografar</strong>.</li>
<li>Digite ou cole a mensagem que deseja criptografar.</li>
<li>Selecione o destinatario na sua lista de chaves.</li>
<li>Clique em <strong>Criptografar para a area de transferencia</strong>. A mensagem criptografada e copiada para sua area de transferencia.</li>
<li>Cole a mensagem criptografada no seu e-mail, chat ou qualquer outro canal de comunicacao.</li>
</ol>

<h3>Criptografia com o atalho do desktop</h3>

<p>Com o aplicativo desktop KeychainPGP, o processo e ainda mais rapido gracas ao <a href="/pt-BR/docs/clipboard-encryption/">fluxo de trabalho por area de transferencia</a>:</p>

<ol>
<li>Digite sua mensagem em qualquer aplicativo.</li>
<li>Selecione e copie o texto (<code>Ctrl+C</code>).</li>
<li>Pressione <strong><code>Ctrl+Shift+E</code></strong> — o KeychainPGP criptografa o conteudo da area de transferencia.</li>
<li>Cole a mensagem criptografada (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Passo 5: Descriptografar uma mensagem</h2>

<h3>Descriptografia no KeychainPGP (web ou desktop)</h3>

<ol>
<li>Copie o bloco completo da mensagem criptografada.</li>
<li>Va ate a aba <strong>Descriptografar</strong> do KeychainPGP.</li>
<li>Cole o texto criptografado.</li>
<li>Clique em <strong>Descriptografar</strong>. O texto em claro aparece imediatamente.</li>
</ol>

<h3>Descriptografia com o atalho do desktop</h3>

<ol>
<li>Selecione e copie o bloco da mensagem criptografada (<code>Ctrl+C</code>).</li>
<li>Pressione <strong><code>Ctrl+Shift+D</code></strong> — o KeychainPGP descriptografa o conteudo da area de transferencia.</li>
<li>O texto em claro substitui o texto criptografado na sua area de transferencia. Cole onde precisar.</li>
</ol>

<p>O aplicativo desktop tambem possui <strong>limpeza automatica da area de transferencia</strong>: apos 30 segundos, o texto descriptografado e automaticamente removido da area de transferencia.</p>

<hr>

<h2 id="step-6-sign-a-message">Passo 6: Assinar uma mensagem</h2>

<p>Uma assinatura digital PGP prova duas coisas:</p>

<ol>
<li><strong>Autenticidade</strong> — A mensagem foi escrita pelo detentor da chave de assinatura.</li>
<li><strong>Integridade</strong> — A mensagem nao foi alterada desde a assinatura.</li>
</ol>

<p>Assinar nao criptografa a mensagem. Qualquer pessoa pode ler uma mensagem assinada, mas pode verificar que ela veio de voce e nao foi falsificada.</p>

<h3>Quando assinar mensagens</h3>

<ul>
<li>Anunciar versoes de software ou avisos de seguranca</li>
<li>Verificar sua identidade em foruns publicos</li>
<li>Assinar e-mails para provar sua origem</li>
<li>Assinatura de commits Git para integridade do codigo</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Passo 7: Verificar uma assinatura</h2>

<p>Quando voce recebe uma mensagem assinada, pode verificar que ela e autentica e nao foi modificada.</p>

<h3>Verificacao no KeychainPGP</h3>

<ol>
<li>Copie a mensagem assinada completa (incluindo o bloco de assinatura).</li>
<li>Va ate a aba <strong>Verificar</strong>.</li>
<li>Cole a mensagem assinada.</li>
<li>Clique em <strong>Verificar</strong>. O KeychainPGP confirma se a assinatura e valida.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">Fluxo de trabalho por area de transferencia do KeychainPGP</h2>

<p>O que diferencia o KeychainPGP das ferramentas PGP tradicionais e seu <a href="/pt-BR/docs/clipboard-encryption/">fluxo de trabalho de criptografia por area de transferencia</a>. Em vez de operar com arquivos ou exigir um cliente de e-mail dedicado, o KeychainPGP funciona com qualquer aplicativo atraves da area de transferencia do sistema.</p>

<table>
<tr><th>Acao</th><th>Aplicativo web</th><th>Aplicativo desktop</th></tr>
<tr><td>Criptografar</td><td>Colar o texto, clicar em Criptografar</td><td>Copiar o texto, pressionar <code>Ctrl+Shift+E</code></td></tr>
<tr><td>Descriptografar</td><td>Colar o texto criptografado, clicar em Descriptografar</td><td>Copiar o texto criptografado, pressionar <code>Ctrl+Shift+D</code></td></tr>
<tr><td>Assinar</td><td>Colar o texto, clicar em Assinar</td><td>Disponivel na janela do aplicativo</td></tr>
<tr><td>Verificar</td><td>Colar o texto assinado, clicar em Verificar</td><td>Disponivel na janela do aplicativo</td></tr>
</table>

<p>Recursos de seguranca adicionais do aplicativo desktop:</p>

<ul>
<li><strong>Limpeza automatica da area de transferencia</strong> — O texto descriptografado e removido da area de transferencia apos 30 segundos.</li>
<li><strong>Modo OPSEC</strong> — Titulo de janela disfarçado, armazenamento de chaves somente em RAM e botao de exclusao de emergencia.</li>
<li><strong>Armazenamento de credenciais do SO</strong> — As chaves privadas sao armazenadas com seguranca via Windows Credential Manager, macOS Keychain ou Linux Secret Service.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Aplicativo web vs aplicativo desktop</h2>

<p><strong>Aplicativo web</strong> (<a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a>):</p>

<ul>
<li>Funciona inteiramente no navegador via WebAssembly</li>
<li>Sem instalacao, sem conta necessaria</li>
<li>Perfeito para tarefas rapidas de criptografia</li>
<li>As chaves sao armazenadas no armazenamento local do navegador</li>
</ul>

<p><strong>Aplicativo desktop</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Atalhos globais para criptografar e descriptografar</li>
<li>Integracao com a bandeja do sistema</li>
<li>Limpeza automatica da area de transferencia</li>
<li>Modo OPSEC com chaves somente em RAM e exclusao de emergencia</li>
<li>Armazenamento seguro de chaves via gerenciador de credenciais do SO</li>
<li>Mais adequado para uso diario e gerenciamento de chaves a longo prazo</li>
</ul>

<p>Ambos os aplicativos sao gratuitos, open source (MIT / Apache-2.0) e sem nenhuma telemetria.</p>

<hr>

<h2 id="frequently-asked-questions">Perguntas frequentes</h2>

<h3>Devo compartilhar minha chave privada?</h3>

<p>Nao. Voce <strong>nunca</strong> deve compartilhar sua chave privada com ninguem. Sua chave privada e o que permite descriptografar mensagens enviadas a voce e criar assinaturas digitais. Se outra pessoa obtiver sua chave privada, ela podera ler todas as mensagens criptografadas para voce e se passar por voce.</p>

<h3>O que acontece se eu perder minha chave privada?</h3>

<p>Se voce perder sua chave privada, perdera definitivamente a capacidade de descriptografar todas as mensagens criptografadas com a chave publica correspondente. Nao existe mecanismo de recuperacao. Sempre mantenha um backup seguro da sua chave privada.</p>

<h3>Posso criptografar arquivos com PGP?</h3>

<p>Sim. O PGP pode criptografar tanto mensagens de texto quanto arquivos binarios. O KeychainPGP foca na criptografia de texto por area de transferencia, enquanto ferramentas como o GnuPG suportam criptografia de arquivos diretamente. Para uma comparacao detalhada, veja o guia <a href="/pt-BR/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h3>A criptografia PGP e segura?</h3>

<p>A criptografia PGP com algoritmos modernos e extremamente segura. O KeychainPGP usa Ed25519 para assinaturas e X25519 para troca de chaves — algoritmos de curva eliptica que oferecem seguranca equivalente ao RSA-3072 com uma fracao do tamanho da chave. Os principais riscos nao sao criptograficos, mas operacionais: senhas fracas, dispositivos comprometidos ou gerenciamento negligente de chaves.</p>

<h3>O que e uma impressao digital PGP?</h3>

<p>Uma impressao digital PGP e uma sequencia hexadecimal de 40 caracteres que identifica de forma unica uma chave PGP. As impressoes digitais sao usadas para verificar que uma chave publica pertence a pessoa que voce pensa. Sempre compare a impressao digital por um canal de confianca separado (chamada telefonica, encontro presencial) para prevenir ataques man-in-the-middle.</p>
`
};

export default doc;
