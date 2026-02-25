import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Criptografia pela área de transferência com PGP: a abordagem clipboard-first para mensagens seguras',
	description: 'Saiba como a criptografia PGP pela área de transferência funciona, por que supera a criptografia baseada em arquivos para OPSEC diário e como o KeychainPGP usa a área de transferência para criptografar mensagens em qualquer app.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'O que é criptografia pela área de transferência?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Por que clipboard-first?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Como o KeychainPGP usa a área de transferência', level: 2 },
		{ id: 'the-encryption-workflow', text: 'O fluxo de criptografia', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Descriptografia ao contrário', level: 3 },
		{ id: 'security-considerations', text: 'Considerações de segurança', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Histórico e gerenciadores de área de transferência', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Limpeza automática após 30 segundos', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Gerenciamento de memória e zeroização', level: 3 },
		{ id: 'opsec-mode', text: 'Modo OPSEC', level: 2 },
		{ id: 'window-title-disguise', text: 'Disfarce do título da janela', level: 3 },
		{ id: 'ram-only-keys', text: 'Chaves somente em RAM', level: 3 },
		{ id: 'panic-wipe', text: 'Limpeza de emergência', level: 3 },
		{ id: 'tor-proxy-support', text: 'Suporte a proxy Tor', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Área de transferência vs. criptografia de arquivos', level: 2 },
		{ id: 'threat-model', text: 'Modelo de ameaça', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Contra o que protege', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Contra o que não protege', level: 3 },
		{ id: 'best-practices', text: 'Boas práticas para PGP pela área de transferência', level: 2 }
	],
	html: `
<h1>Criptografia pela área de transferência com PGP</h1>

<h2 id="what-is-clipboard-encryption">O que é criptografia pela área de transferência?</h2>

<p>A criptografia PGP pela área de transferência é um método de criptografar e descriptografar texto lendo e escrevendo diretamente na área de transferência do sistema operacional, em vez de operar em arquivos salvos no disco. Em vez de salvar uma mensagem em texto puro em um arquivo <code>.txt</code>, passá-lo para uma ferramenta de linha de comando e recuperar uma saída <code>.asc</code> criptografada, você simplesmente copia seu texto, aciona a criptografia com um atalho e cola a mensagem PGP criptografada onde precisar. A área de transferência funciona como buffer de entrada e saída, tornando a criptografia parte natural de qualquer fluxo de trabalho baseado em texto. Esta abordagem é a base de como o <a href="/pt-BR/pgp-online-encrypt/">KeychainPGP</a> funciona no desktop.</p>

<p>Se você é novo no PGP, comece com <a href="/pt-BR/docs/what-is-pgp/">O que é PGP?</a> para uma introdução aos conceitos criptográficos fundamentais.</p>

<h2 id="why-clipboard-first">Por que clipboard-first?</h2>

<ul>
<li><strong>Independência de aplicativo.</strong> Funciona com qualquer app que suporte copiar e colar.</li>
<li><strong>Sem arquivos em texto puro no disco.</strong> O texto puro permanece apenas na memória volátil.</li>
<li><strong>Menos atrito.</strong> Um fluxo de três passos (copiar, atalho, colar) tem muito menos atrito.</li>
<li><strong>Compatibilidade com comunicações modernas.</strong> Webmail, Signal, Slack, Discord — todos suportam colar texto.</li>
</ul>

<p>Para um guia passo a passo, veja <a href="/pt-BR/docs/how-to-use-pgp/">Como usar PGP</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Como o KeychainPGP usa a área de transferência</h2>

<h3 id="the-encryption-workflow">O fluxo de criptografia</h3>

<ol>
<li><strong>Copie</strong> sua mensagem de qualquer aplicativo.</li>
<li><strong>Pressione <code>Ctrl+Shift+E</code></strong>. O KeychainPGP lê a área de transferência, criptografa o texto e escreve o resultado PGP ASCII-armored de volta.</li>
<li><strong>Cole</strong> a mensagem criptografada no destino.</li>
</ol>

<p>O KeychainPGP usa a biblioteca <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> em Rust. As chaves usam Ed25519 para assinatura e X25519 para criptografia por padrão.</p>

<h3 id="decryption-in-reverse">Descriptografia ao contrário</h3>

<p>Copie o bloco PGP criptografado, pressione <code>Ctrl+Shift+D</code>, e o KeychainPGP substitui o conteúdo da área de transferência pelo texto descriptografado. O texto descriptografado existe apenas na memória e é limpo automaticamente após um tempo configurável.</p>

<h2 id="security-considerations">Considerações de segurança</h2>

<h3 id="clipboard-history-and-managers">Histórico e gerenciadores de área de transferência</h3>
<p>Desative o histórico da área de transferência do SO e evite gerenciadores de terceiros em dispositivos com conteúdo sensível.</p>

<h3 id="auto-clear-after-30-seconds">Limpeza automática após 30 segundos</h3>
<p>O KeychainPGP limpa automaticamente a área de transferência 30 segundos após escrever texto descriptografado. O timer é configurável até 5 segundos.</p>

<h3 id="memory-handling-and-zeroization">Gerenciamento de memória e zeroização</h3>
<p>Escrito em Rust com garantias de zeroização do Sequoia-PGP. Dados sensíveis são sobrescritos com zeros antes de liberar a memória.</p>

<h2 id="opsec-mode">Modo OPSEC</h2>

<h3 id="window-title-disguise">Disfarce do título da janela</h3>
<p>No modo OPSEC, o KeychainPGP muda o título da janela para algo inócuo como "Calculadora" ou "Notas".</p>

<h3 id="ram-only-keys">Chaves somente em RAM</h3>
<p>Chaves privadas são mantidas exclusivamente em RAM e nunca escritas no disco.</p>

<h3 id="panic-wipe">Limpeza de emergência</h3>
<p>Zera imediatamente todo o material criptográfico na memória e limpa a área de transferência.</p>

<h3 id="tor-proxy-support">Suporte a proxy Tor</h3>
<p>Roteia consultas a servidores de chaves através de um proxy Tor SOCKS.</p>

<h2 id="clipboard-encryption-vs-file-encryption">Área de transferência vs. criptografia de arquivos</h2>

<table>
<tr><th>Aspecto</th><th>Criptografia pela área de transferência</th><th>Criptografia de arquivos</th></tr>
<tr><td><strong>Entrada/saída</strong></td><td>Área de transferência do SO (memória volátil)</td><td>Arquivos no disco (armazenamento persistente)</td></tr>
<tr><td><strong>Artefatos em texto puro</strong></td><td>Nenhum no disco</td><td>Arquivo original, arquivos temporários podem persistir</td></tr>
<tr><td><strong>Suporte a apps</strong></td><td>Qualquer app com copiar/colar</td><td>Requer acesso ao sistema de arquivos</td></tr>
<tr><td><strong>Passos</strong></td><td>3 (copiar, atalho, colar)</td><td>5+ (salvar, executar CLI, especificar saída, abrir, transferir)</td></tr>
<tr><td><strong>Pegada forense</strong></td><td>Mínima (somente RAM)</td><td>Significativa</td></tr>
</table>

<h2 id="threat-model">Modelo de ameaça</h2>

<h3 id="what-clipboard-encryption-protects-against">Contra o que protege</h3>
<ul>
<li><strong>Vigilância de rede.</strong> Mensagens criptografadas são opacas para qualquer monitor de rede.</li>
<li><strong>Interceptação de emails e mensagens.</strong> Sem a chave privada, o conteúdo é irrecuperável.</li>
<li><strong>Comprometimento do armazenamento.</strong> Mensagens PGP permanecem protegidas.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Contra o que não protege</h3>
<ul>
<li><strong>Keylogger no dispositivo.</strong></li>
<li><strong>Acesso físico a um dispositivo desbloqueado.</strong></li>
<li><strong>Chaves privadas comprometidas.</strong></li>
<li><strong>Análise de tráfego.</strong> PGP criptografa o conteúdo, não os padrões de comunicação.</li>
</ul>

<p>Para uma introdução mais ampla, <a href="/pt-BR/docs/pgp-for-beginners/">PGP para iniciantes</a> cobre os fundamentos.</p>

<h2 id="best-practices">Boas práticas para PGP pela área de transferência</h2>

<ol>
<li><strong>Desative o histórico da área de transferência.</strong></li>
<li><strong>Mantenha a limpeza automática ativada.</strong> 5-15 segundos são suficientes.</li>
<li><strong>Use o modo OPSEC quando necessário.</strong></li>
<li><strong>Verifique as chaves dos destinatários por um canal separado.</strong></li>
<li><strong>Use frases-senha fortes.</strong></li>
<li><strong>Mantenha seu dispositivo seguro.</strong> SO atualizado e criptografia de disco.</li>
<li><strong>Prefira chaves Ed25519/X25519.</strong></li>
<li><strong>Teste seu fluxo de trabalho.</strong></li>
</ol>

<p><a href="/pt-BR/pgp-online-encrypt/">Experimente o KeychainPGP no navegador</a> para ver o workflow clipboard-first em ação.</p>
`
};

export default doc;
