import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Encriptacao por area de transferencia com PGP: a abordagem clipboard-first para mensagens seguras',
	description: 'Descubra como funciona a encriptacao PGP por area de transferencia, porque supera a encriptacao por ficheiros para OPSEC diario, e como o KeychainPGP utiliza a area de transferencia para encriptar mensagens em qualquer aplicacao.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'O que e a encriptacao por area de transferencia?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Porque a area de transferencia primeiro?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'Como o KeychainPGP utiliza a area de transferencia', level: 2 },
		{ id: 'the-encryption-workflow', text: 'O workflow de encriptacao', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Desencriptacao em sentido inverso', level: 3 },
		{ id: 'security-considerations', text: 'Consideracoes de seguranca', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Historico e gestores da area de transferencia', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: 'Limpeza automatica apos 30 segundos', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Gestao de memoria e limpeza a zero', level: 3 },
		{ id: 'opsec-mode', text: 'Modo OPSEC', level: 2 },
		{ id: 'window-title-disguise', text: 'Disfarce do titulo de janela', level: 3 },
		{ id: 'ram-only-keys', text: 'Chaves apenas em RAM', level: 3 },
		{ id: 'panic-wipe', text: 'Eliminacao de emergencia', level: 3 },
		{ id: 'tor-proxy-support', text: 'Suporte de proxy Tor', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Encriptacao area de transferencia vs ficheiros', level: 2 },
		{ id: 'threat-model', text: 'Modelo de ameacas', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'O que a encriptacao por area de transferencia protege', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'O que a encriptacao por area de transferencia nao protege', level: 3 },
		{ id: 'best-practices', text: 'Boas praticas para PGP por area de transferencia', level: 2 }
	],
	html: `
<h1>Encriptacao por area de transferencia com PGP</h1>

<h2 id="what-is-clipboard-encryption">O que e a encriptacao por area de transferencia?</h2>

<p>A encriptacao PGP por area de transferencia e um metodo de encriptar e desencriptar texto lendo e escrevendo diretamente de e para a area de transferencia do sistema operativo, em vez de operar sobre ficheiros armazenados em disco. Em vez de guardar uma mensagem em texto claro num ficheiro <code>.txt</code>, passa-lo a uma ferramenta de linha de comandos e depois recuperar um ficheiro <code>.asc</code> encriptado, simplesmente copia o seu texto, aciona a encriptacao com um atalho de teclado e cola a mensagem PGP encriptada onde pretender. A area de transferencia serve simultaneamente como buffer de entrada e de saida, tornando a encriptacao parte integrante de qualquer workflow baseado em texto. Esta abordagem e o fundamento do funcionamento do <a href="/pt-PT/pgp-online-encrypt/">KeychainPGP</a> no ambiente de trabalho e e o que lhe permite integrar-se com qualquer aplicacao que suporte copiar-colar — clientes de e-mail, aplicacoes de chat, ferramentas de notas, formularios web e muito mais.</p>

<p>Se e novo no mundo do PGP, comece por <a href="/pt-PT/docs/what-is-pgp/">O que e PGP?</a> para uma introducao aos conceitos criptograficos subjacentes antes de mergulhar nos workflows especificos da area de transferencia.</p>

<h2 id="why-clipboard-first">Porque a area de transferencia primeiro?</h2>

<p>As ferramentas PGP tradicionais como o GnuPG foram concebidas em torno de ficheiros. Passa um ficheiro ao <code>gpg --encrypt</code>, recebe um ficheiro encriptado e transfere-o manualmente. Este modelo fazia sentido na decada de 1990 quando o PGP era utilizado principalmente para anexos de e-mail e arquivos de ficheiros. Faz muito menos sentido hoje, quando a maioria das comunicacoes sensiveis ocorre em plataformas web, aplicacoes de mensagens efemeras e servicos que nao expoem uma interface de sistema de ficheiros.</p>

<p>A abordagem area de transferencia primeiro resolve varios problemas de uma so vez:</p>

<ul>
<li><strong>Independencia de aplicacoes.</strong> Como a area de transferencia e uma abstracao ao nivel do sistema operativo, a encriptacao por area de transferencia funciona com qualquer aplicacao. Nao esta preso a um cliente de e-mail especifico, extensao de navegador ou ecossistema de extensoes. Se pode copiar-colar, pode encriptar.</li>
<li><strong>Sem ficheiros em texto claro no disco.</strong> A encriptacao de ficheiros cria necessariamente artefactos em texto claro no seu sistema de ficheiros — o ficheiro original nao encriptado, ficheiros temporarios, ficheiros de swap do editor e potencialmente a saida desencriptada. Cada um destes e uma responsabilidade forense. A encriptacao por area de transferencia mantem o texto claro apenas em memoria volatil.</li>
<li><strong>Menos friccao.</strong> Quanto menos passos existirem entre "quero encriptar isto" e "esta encriptado", mais provavel e que um utilizador encripte de facto as suas mensagens. Um workflow de tres passos (copiar, atalho, colar) tem consideravelmente menos friccao do que um pipeline baseado em ficheiros.</li>
<li><strong>Compatibilidade com comunicacoes modernas.</strong> Webmail, Signal desktop, Slack, Discord, clientes Matrix — nenhuma destas ferramentas suporta nativamente PGP, mas todas suportam colar texto. O PGP por area de transferencia preenche esta lacuna sem necessitar de integracao ao nivel do protocolo.</li>
</ul>

<p>Para um guia passo a passo sobre a utilizacao deste workflow, consulte <a href="/pt-PT/docs/how-to-use-pgp/">Como utilizar PGP</a>.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">Como o KeychainPGP utiliza a area de transferencia</h2>

<p>O KeychainPGP e construido de raiz em torno da filosofia area de transferencia primeiro. Em vez de tratar o acesso a area de transferencia como uma funcionalidade de conveniencia anexada a uma ferramenta de encriptacao de ficheiros, toda a arquitetura — desde o pipeline criptografico ate a interface do utilizador — assume que a area de transferencia e o canal de dados principal.</p>

<h3 id="the-encryption-workflow">O workflow de encriptacao</h3>

<p>O processo de encriptar uma mensagem com o KeychainPGP faz-se em tres passos:</p>

<ol>
<li><strong>Copie</strong> a sua mensagem em texto claro a partir de qualquer aplicacao (rascunho de e-mail, janela de chat, editor de texto, formulario web).</li>
<li><strong>Prima <code>Ctrl+Shift+E</code></strong> (o atalho global por defeito). O KeychainPGP le o conteudo da sua area de transferencia, encripta o texto com a chave publica do destinatario selecionado e escreve o texto encriptado PGP em formato ASCII-armored na area de transferencia.</li>
<li><strong>Cole</strong> a mensagem encriptada no destino. O que chega e um bloco OpenPGP ASCII-armored padrao que comeca por <code>-----BEGIN PGP MESSAGE-----</code> e pode ser desencriptado por qualquer ferramenta compativel com OpenPGP.</li>
</ol>

<p>Nos bastidores, o KeychainPGP utiliza a biblioteca <a href="https://sequoia-pgp.org/">Sequoia-PGP</a>, uma implementacao moderna em Rust do padrao OpenPGP. As chaves utilizam por defeito Ed25519 para assinatura e X25519 para encriptacao — algoritmos de curva eliptica que oferecem seguranca forte com tamanhos de chave compactos e operacoes rapidas. Nao ha dialogos de selecao de algoritmos nem decisoes sobre tamanho de chaves. A criptografia e segura logo apos a instalacao.</p>

<h3 id="decryption-in-reverse">Desencriptacao em sentido inverso</h3>

<p>A desencriptacao segue o fluxo de encriptacao em sentido inverso. Quando recebe uma mensagem encriptada PGP, copia o bloco armored inteiro, prime <code>Ctrl+Shift+D</code> (o atalho de desencriptacao por defeito) e o KeychainPGP substitui o conteudo da area de transferencia pelo texto claro desencriptado. Pode entao cola-lo em qualquer aplicacao para o ler. O texto desencriptado existe apenas em memoria e no buffer da area de transferencia, que e automaticamente limpo apos um intervalo configuravel.</p>

<h2 id="security-considerations">Consideracoes de seguranca</h2>

<p>A utilizacao da area de transferencia como canal de dados introduz consideracoes de seguranca especificas que o KeychainPGP aborda com varios mecanismos defensivos.</p>

<h3 id="clipboard-history-and-managers">Historico e gestores da area de transferencia</h3>

<p>Os sistemas operativos modernos e ferramentas de terceiros mantem frequentemente um historico da area de transferencia. O Windows 10 e versoes posteriores incluem uma funcionalidade de historico da area de transferencia integrada (<code>Win+V</code>). O macOS nao mantem nativamente historico, mas ferramentas populares como Alfred, Raycast e Paste fazem-no. No Linux, gestores de area de transferencia como CopyQ, Clipman e GPaste sao comuns.</p>

<p>Estes gestores de area de transferencia podem capturar tanto o texto claro antes da encriptacao como a saida desencriptada apos a desencriptacao, anulando completamente a utilidade da encriptacao. Ao utilizar encriptacao PGP por area de transferencia, devera:</p>

<ul>
<li>Desativar o historico da area de transferencia no seu sistema operativo (no Windows, va a Definicoes > Sistema > Area de transferencia e desative o Historico da area de transferencia).</li>
<li>Evitar gestores de area de transferencia de terceiros nas maquinas onde manipula conteudo sensivel, ou configurar regras de exclusao se o gestor o permitir.</li>
<li>Confiar na funcionalidade de limpeza automatica integrada do KeychainPGP para minimizar a janela de exposicao.</li>
</ul>

<h3 id="auto-clear-after-30-seconds">Limpeza automatica apos 30 segundos</h3>

<p>O KeychainPGP limpa automaticamente a area de transferencia 30 segundos apos ter escrito texto claro desencriptado. Este intervalo e configuravel nas definicoes da aplicacao. A limpeza automatica garante que o conteudo desencriptado nao persiste indefinidamente na area de transferencia, reduzindo o risco de que uma operacao de colar posterior ou um gestor de area de transferencia capture texto sensivel muito depois de ter acabado de o ler.</p>

<p>O intervalo predefinido de 30 segundos e um compromisso entre usabilidade e seguranca. Deixa-lhe tempo suficiente para colar o texto desencriptado onde precisa, ao mesmo tempo que limita a janela durante a qual o texto claro esta acessivel. Para ambientes de alta seguranca, pode reduzir este intervalo ate 5 segundos.</p>

<h3 id="memory-handling-and-zeroization">Gestao de memoria e limpeza a zero</h3>

<p>A encriptacao por area de transferencia implica que dados sensiveis — chaves privadas, frases-passe, texto claro desencriptado — residam na memoria do processo. O KeychainPGP e escrito em Rust e tira partido das garantias de limpeza a zero na destruicao do Sequoia-PGP. Quando um valor secreto sai do seu ambito, a sua memoria e sobrescrita com zeros antes de ser libertada. Nao se trata de uma limpeza ao melhor esforco; o modelo de propriedade do Rust garante que o destrutor de limpeza a zero e executado de forma deterministica. Combinado com as barreiras do compilador do crate <code>zeroize</code> que impedem o otimizador de eliminar a sobrescrita, isto fornece uma forte garantia de que os segredos nao persistem em memoria apos a utilizacao.</p>

<p>Isto contrasta com ferramentas escritas em linguagens com recolha de lixo (Java, Python, JavaScript), onde os dados secretos podem persistir em memoria indefinidamente ate que o coletor de lixo os recupere e (talvez) os sobrescreva.</p>

<h2 id="opsec-mode">Modo OPSEC</h2>

<p>Para utilizadores que operam em ambientes hostis — jornalistas que comunicam com fontes, ativistas sob vigilancia, investigadores de seguranca que lidam com divulgacoes sensiveis — o KeychainPGP inclui um modo OPSEC que reforca a aplicacao para alem da sua postura de seguranca predefinida.</p>

<h3 id="window-title-disguise">Disfarce do titulo de janela</h3>

<p>Quando o modo OPSEC esta ativado, o KeychainPGP altera o titulo da janela para algo inofensivo, como "Calculadora" ou "Notas". Isto impede a observacao casual por cima do ombro e engana ferramentas automatizadas de captura de ecra que registam titulos de janelas. Um adversario que examine capturas de ecra ou gravacoes de video nao vera "KeychainPGP" ou "PGP" em qualquer barra de titulo de janela.</p>

<h3 id="ram-only-keys">Chaves apenas em RAM</h3>

<p>No modo OPSEC, as chaves privadas sao mantidas exclusivamente em RAM e nunca sao escritas no sistema de ficheiros. Isto significa que se o dispositivo for apreendido ou se o disco for clonado, nao ha ficheiros de chave para recuperar. A contrapartida e que as chaves devem ser reimportadas a cada arranque da aplicacao, geralmente a partir de um token de hardware, codigo QR ou transferencia segura a partir de outro dispositivo.</p>

<h3 id="panic-wipe">Eliminacao de emergencia</h3>

<p>O botao de eliminacao de emergencia (ou o atalho de teclado associado) coloca imediatamente a zero todo o material criptografico em memoria, limpa a area de transferencia e fecha opcionalmente a aplicacao. E concebido para situacoes em que precisa de destruir todo o estado sensivel instantaneamente — por exemplo, se antecipa a apreensao iminente do seu dispositivo. A eliminacao e imediata e irreversivel; qualquer chave apenas em RAM que nao tenha sido guardada noutro local e definitivamente perdida.</p>

<h3 id="tor-proxy-support">Suporte de proxy Tor</h3>

<p>O modo OPSEC inclui a possibilidade de encaminhar as consultas a servidores de chaves e qualquer outro trafego de rede atraves de um proxy SOCKS Tor. Isto impede que o seu fornecedor de acesso a Internet ou um adversario ao nivel da rede observe que esta a obter chaves publicas PGP, o que poderia servir como metadados para identificar os seus parceiros de comunicacao. Quando o suporte de proxy Tor esta ativado, todas as ligacoes de saida do KeychainPGP sao encaminhadas atraves do proxy SOCKS5 configurado (tipicamente <code>127.0.0.1:9050</code> se o Tor estiver a correr localmente).</p>

<h2 id="clipboard-encryption-vs-file-encryption">Encriptacao por area de transferencia vs encriptacao de ficheiros</h2>

<p>A encriptacao PGP por area de transferencia e por ficheiros utilizam o mesmo padrao OpenPGP subjacente e produzem texto encriptado interoperavel. A diferenca reside no workflow e nas propriedades de seguranca que dele decorrem.</p>

<table>
<tr><th>Aspeto</th><th>Encriptacao por area de transferencia</th><th>Encriptacao de ficheiros</th></tr>
<tr><td><strong>Entrada/saida</strong></td><td>Area de transferencia do sistema (memoria volatil)</td><td>Ficheiros em disco (armazenamento persistente)</td></tr>
<tr><td><strong>Artefactos em texto claro</strong></td><td>Nenhum em disco; limpo da area de transferencia apos intervalo</td><td>Ficheiro original, ficheiros temp, copias de seguranca do editor podem persistir</td></tr>
<tr><td><strong>Suporte de aplicacoes</strong></td><td>Qualquer app que suporte copiar/colar</td><td>Requer acesso ao sistema de ficheiros ou integracao CLI</td></tr>
<tr><td><strong>Passos do workflow</strong></td><td>3 (copiar, atalho, colar)</td><td>5+ (guardar ficheiro, executar CLI, especificar saida, abrir saida, transferir)</td></tr>
<tr><td><strong>Processamento em lote</strong></td><td>Nao pratico para grandes volumes</td><td>Bem adaptado a encriptacao em massa de ficheiros e arquivos</td></tr>
<tr><td><strong>Grandes volumes de dados</strong></td><td>Limitado ao texto que cabe na area de transferencia</td><td>Processa ficheiros de tamanho arbitrario</td></tr>
<tr><td><strong>Pegada forense</strong></td><td>Minima (apenas RAM)</td><td>Significativa (artefactos em disco, metadados do sistema de ficheiros)</td></tr>
</table>

<p>A encriptacao por area de transferencia e a melhor escolha para encriptacao ao nivel da mensagem na comunicacao diaria. A encriptacao de ficheiros continua a ser necessaria quando precisa de encriptar dados binarios, grandes arquivos, ou quando o destinatario espera um anexo <code>.pgp</code>. O KeychainPGP suporta ambos os modos, mas e no workflow por area de transferencia que brilha.</p>

<h2 id="threat-model">Modelo de ameacas</h2>

<p>Compreender o que a encriptacao PGP por area de transferencia protege e nao protege e essencial para tomar decisoes de seguranca informadas. Nenhuma ferramenta unica cobre todas as ameacas.</p>

<h3 id="what-clipboard-encryption-protects-against">O que a encriptacao por area de transferencia protege</h3>

<ul>
<li><strong>Vigilancia de rede.</strong> As mensagens encriptadas antes de deixarem o seu dispositivo sao opacas para qualquer pessoa a monitorizar a rede — o seu fornecedor de acesso, um espiao numa rede Wi-Fi ou um ator estatal a realizar inspecao profunda de pacotes. O texto encriptado PGP pode atravessar qualquer numero de redes nao confiaveis sem comprometer o texto claro.</li>
<li><strong>Intercecao de e-mails e mensagens.</strong> Se um adversario aceder ao seu servidor de e-mail, a base de dados do seu fornecedor de chat ou a uma mensagem em transito, obtem apenas texto encriptado. Sem a chave privada do destinatario, o conteudo e computacionalmente impossivel de recuperar.</li>
<li><strong>Comprometimento do armazenamento.</strong> Se um adversario obtiver uma copia dos seus arquivos de e-mail, registos de chat ou copias de seguranca na nuvem, as mensagens encriptadas com PGP permanecem protegidas. Isto e particularmente relevante para a encriptacao por area de transferencia, onde o texto claro nunca toca o disco.</li>
<li><strong>Reducao de metadados (com modo OPSEC).</strong> Embora o PGP nao encripte os cabecalhos de e-mail ou os metadados das mensagens, as funcionalidades do modo OPSEC como o suporte de proxy Tor e o disfarce do titulo de janela reduzem os metadados observaveis em torno da sua utilizacao da encriptacao.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">O que a encriptacao por area de transferencia nao protege</h3>

<ul>
<li><strong>Comprometimento do terminal com keylogger.</strong> Se um adversario instalou um keylogger ou malware de captura de ecra no seu dispositivo, pode capturar o texto claro antes da encriptacao ou apos a desencriptacao. A encriptacao por area de transferencia pressupoe um terminal de confianca. Se o seu dispositivo esta comprometido ao nivel do sistema operativo, nenhuma encriptacao ao nivel aplicacional pode ajudar.</li>
<li><strong>Acesso fisico a um dispositivo desbloqueado.</strong> Se um adversario tem acesso fisico ao seu dispositivo enquanto este esta desbloqueado e o KeychainPGP esta em execucao com as chaves carregadas, pode desencriptar mensagens. As chaves apenas em RAM e o botao de eliminacao de emergencia atenuam isto ate certo ponto, mas requerem que atue antes de o adversario obter acesso.</li>
<li><strong>Chaves privadas comprometidas.</strong> Se a sua chave privada for exfiltrada (a partir de uma copia de seguranca, dispositivo comprometido ou frase-passe fraca), todas as mensagens encriptadas para essa chave — passadas e futuras — estao comprometidas. Utilize uma frase-passe forte e mantenha a sua chave privada no menor numero possivel de dispositivos.</li>
<li><strong>Analise de trafego.</strong> O PGP encripta o conteudo das mensagens, nao os padroes de comunicacao. Um adversario que consiga observar o seu trafego de rede pode determinar que esta a comunicar, com que frequencia e potencialmente com quem (com base em consultas a servidores de chaves), mesmo sem ler o conteudo. O suporte de proxy Tor no modo OPSEC aborda parcialmente este problema.</li>
</ul>

<p>Para uma introducao mais alargada a estes conceitos, <a href="/pt-PT/docs/pgp-for-beginners/">PGP para principiantes</a> cobre os fundamentos da criptografia de chave publica e da gestao de chaves.</p>

<h2 id="best-practices">Boas praticas para PGP por area de transferencia</h2>

<p>Seguir estas praticas maximizara os beneficios de seguranca da encriptacao PGP por area de transferencia:</p>

<ol>
<li><strong>Desative o historico da area de transferencia.</strong> Desative o historico da area de transferencia ao nivel do sistema operativo e remova gestores de area de transferencia de terceiros das maquinas onde gere comunicacoes encriptadas.</li>
<li><strong>Mantenha a limpeza automatica ativada.</strong> Nao desative o temporizador de limpeza automatica da area de transferencia. Reduza-o para o intervalo mais curto que considere utilizavel. Cinco a quinze segundos sao suficientes para a maioria dos workflows.</li>
<li><strong>Utilize o modo OPSEC quando se justifique.</strong> Se opera num ambiente onde a propria utilizacao de encriptacao e um risco, ative o modo OPSEC para o disfarce do titulo de janela, chaves apenas em RAM e encaminhamento Tor.</li>
<li><strong>Verifique as chaves dos destinatarios fora de banda.</strong> Antes de encriptar uma mensagem para a chave publica de alguem, verifique a impressao digital da chave por um canal separado (presencialmente, por chamada de voz, atraves de uma mensagem assinada de uma chave conhecida). Isto previne ataques de intermediario na distribuicao de chaves.</li>
<li><strong>Utilize frases-passe fortes.</strong> Proteja a sua chave privada com uma frase-passe simultaneamente longa e dificil de adivinhar. Uma frase-passe de quatro a seis palavras geradas aleatoriamente e mais segura e mais facil de escrever do que uma cadeia curta de caracteres mistos.</li>
<li><strong>Mantenha o seu terminal limpo.</strong> A encriptacao por area de transferencia pressupoe um dispositivo de confianca. Utilize um sistema operativo atualizado, evite instalar software nao confiavel e utilize encriptacao integral do disco para proteger os dados em repouso.</li>
<li><strong>Prefira chaves Ed25519/X25519.</strong> O KeychainPGP utiliza estes algoritmos modernos de curva eliptica por defeito por boas razoes. Sao rapidos, compactos e resistentes a uma gama de ataques ao nivel da implementacao que afetam chaves RSA e DSA mais antigas. Se estiver a migrar de uma chave antiga, gere um novo par de chaves Ed25519/X25519 e faca a transicao com os seus contactos.</li>
<li><strong>Teste o seu workflow.</strong> Antes de contar com a encriptacao por area de transferencia para comunicacoes criticas, pratique o ciclo completo: gere chaves, troque chaves publicas, encripte uma mensagem de teste, desencripte-a do outro lado. A familiaridade com o processo reduz os riscos de erro sob pressao.</li>
</ol>

<p>A encriptacao PGP por area de transferencia nao e uma solucao miraculosa, mas combinada com boas praticas de seguranca operacional, oferece um caminho pratico e de baixa friccao para a comunicacao encriptada que se integra com as ferramentas que ja utiliza. <a href="/pt-PT/pgp-online-encrypt/">Experimente o KeychainPGP no seu navegador</a> para ver o workflow area de transferencia primeiro em acao.</p>
`
};

export default doc;
