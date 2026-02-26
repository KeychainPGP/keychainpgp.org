import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'O que e PGP? Guia completo sobre encriptacao Pretty Good Privacy',
	description: 'Descubra o que e PGP (Pretty Good Privacy), como funciona a encriptacao PGP com criptografia de chave publica, o padrao OpenPGP, assinaturas digitais e utilizacoes modernas.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'O que e a encriptacao PGP?', level: 2 },
		{ id: 'history-of-pgp', text: 'Historia do PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Como funciona a encriptacao PGP', level: 2 },
		{ id: 'public-key-cryptography', text: 'Criptografia de chave publica', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'O modelo de encriptacao hibrido', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Assinaturas digitais PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'O padrao OpenPGP', level: 2 },
		{ id: 'web-of-trust', text: 'Rede de confianca', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'Algoritmos e tipos de chaves PGP', level: 2 },
		{ id: 'classic-algorithms', text: 'Algoritmos classicos', level: 3 },
		{ id: 'modern-algorithms', text: 'Algoritmos modernos', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Casos de utilizacao comuns do PGP', level: 2 },
		{ id: 'pgp-today', text: 'O PGP hoje', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Comecar com PGP', level: 2 }
	],
	html: `
<h1>O que e PGP? Guia completo sobre encriptacao Pretty Good Privacy</h1>

<h2 id="what-is-pgp-encryption">O que e a encriptacao PGP?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> e um programa de encriptacao que assegura a confidencialidade e a autenticacao criptografica para comunicacoes de dados. A encriptacao PGP utiliza uma combinacao de criptografia de chave simetrica e criptografia de chave publica para permitir que os utilizadores encriptem mensagens, ficheiros e outros dados de modo a que apenas o destinatario pretendido os possa ler. Criado originalmente por Phil Zimmermann em 1991, o PGP tornou-se o padrao de encriptacao de e-mail mais utilizado no mundo e constitui a base da especificacao <strong>OpenPGP</strong> definida no RFC 4880. Quer necessite de enviar um e-mail confidencial, verificar a identidade de um editor de software ou proteger ficheiros sensiveis, o PGP fornece um enquadramento criptografico comprovado, em que confiam jornalistas, investigadores de seguranca, governos e utilizadores comuns.</p>

<p>Se pretende experimentar a encriptacao PGP imediatamente sem instalar software, o KeychainPGP disponibiliza uma <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> que funciona inteiramente no seu navegador.</p>

<h2 id="history-of-pgp">Historia do PGP</h2>

<p>Phil Zimmermann publicou o PGP 1.0 em junho de 1991 como software livre, motivado pela convicao de que a criptografia forte deveria ser acessivel a todos os cidadaos — e nao apenas a governos e forcas militares. Na epoca, a encriptacao forte era classificada como municao segundo as regulamentacoes norte-americanas de exportacao, e Zimmermann foi alvo de uma investigacao criminal de tres anos pelo Servico de Alfandegas dos EUA por ter distribuido o PGP internacionalmente. A investigacao foi encerrada em 1996 sem acusacao, e o caso tornou-se um marco na historia das liberdades digitais.</p>

<p>O PGP evoluiu atraves de varias incarnacoes comerciais. Zimmermann fundou a PGP Inc. em 1996, que foi adquirida pela Network Associates (mais tarde McAfee) em 1997, e finalmente pela Symantec em 2010. Ao longo destas transicoes, o protocolo criptografico subjacente foi padronizado com o nome de <strong>OpenPGP</strong> pela Internet Engineering Task Force (IETF), garantindo que o protocolo permanecesse aberto e interoperavel independentemente da propriedade comercial.</p>

<p>A publicacao do padrao OpenPGP significou que qualquer pessoa podia criar implementacoes compativeis. Isto levou a criacao do GNU Privacy Guard (GnuPG ou GPG), uma implementacao livre e open source que continua a ser uma das ferramentas PGP mais utilizadas atualmente. Para compreender as diferencas entre estas implementacoes, consulte o nosso guia sobre <a href="/pt-PT/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Como funciona a encriptacao PGP</h2>

<p>A encriptacao PGP assenta numa combinacao sofisticada de tecnicas criptograficas. Em vez de utilizar um unico metodo, o PGP emprega um <strong>modelo de encriptacao hibrido</strong> que combina a rapidez da encriptacao simetrica com as vantagens de distribuicao de chaves da encriptacao assimetrica (de chave publica).</p>

<h3 id="public-key-cryptography">Criptografia de chave publica</h3>

<p>No nucleo do PGP esta a <strong>criptografia de chave publica</strong>, tambem chamada criptografia assimetrica. Cada utilizador PGP gera um <strong>par de chaves</strong> composto por duas chaves matematicamente relacionadas:</p>

<ul>
<li><strong>Chave publica</strong> — partilhada abertamente com qualquer pessoa. Os outros utilizam esta chave para encriptar mensagens que lhe sao dirigidas e para verificar as suas assinaturas digitais.</li>
<li><strong>Chave privada</strong> (tambem chamada chave secreta) — mantida estritamente confidencial. Utiliza esta chave para desencriptar mensagens que lhe sao enviadas e para criar assinaturas digitais.</li>
</ul>

<p>A propriedade fundamental deste sistema e que os dados encriptados com uma chave publica so podem ser desencriptados com a chave privada correspondente, e vice-versa. Isto elimina a necessidade de transmitir um segredo partilhado entre as partes antes de poderem comunicar de forma privada.</p>

<h3 id="the-hybrid-encryption-model">O modelo de encriptacao hibrido</h3>

<p>Embora a criptografia de chave publica resolva o problema de distribuicao de chaves, os algoritmos assimetricos como o RSA sao computacionalmente dispendiosos para encriptar grandes quantidades de dados. O PGP resolve este problema utilizando uma abordagem hibrida:</p>

<ol>
<li><strong>Geracao de chave de sessao</strong> — O PGP gera uma <strong>chave simetrica de sessao</strong> aleatoria e unica (geralmente 128 ou 256 bits) para cada mensagem.</li>
<li><strong>Encriptacao dos dados</strong> — O conteudo da mensagem e encriptado utilizando uma cifra simetrica rapida (como AES-256) com a chave de sessao.</li>
<li><strong>Encriptacao da chave de sessao</strong> — A propria chave de sessao e depois encriptada utilizando a chave publica do destinatario (operacao assimetrica).</li>
<li><strong>Empacotamento</strong> — A mensagem encriptada e a chave de sessao encriptada sao agrupadas e enviadas ao destinatario.</li>
</ol>

<p>Quando o destinatario recebe a mensagem, o processo e invertido: utiliza a sua <strong>chave privada</strong> para desencriptar a chave de sessao, e em seguida a chave de sessao desencriptada e utilizada para desencriptar o conteudo da mensagem.</p>

<h2 id="pgp-digital-signatures">Assinaturas digitais PGP</h2>

<p>Para alem da encriptacao, o PGP fornece <strong>assinaturas digitais</strong> que cumprem duas funcoes essenciais: a <strong>autenticacao</strong> (provar quem enviou uma mensagem) e a <strong>integridade</strong> (provar que a mensagem nao foi alterada em transito).</p>

<p>O processo de assinatura funciona da seguinte forma:</p>

<ol>
<li>O PGP calcula um <strong>hash criptografico</strong> (um resumo de comprimento fixo) do conteudo da mensagem utilizando um algoritmo como SHA-256 ou SHA-512.</li>
<li>O hash e depois encriptado com a <strong>chave privada</strong> do remetente, produzindo a assinatura digital.</li>
<li>A assinatura e anexada a mensagem.</li>
</ol>

<p>Qualquer destinatario pode verificar a assinatura desencriptando-a com a <strong>chave publica</strong> do remetente para recuperar o hash original, calculando independentemente o hash da mensagem recebida e comparando os dois hashes. Se coincidirem, a mensagem e autentica e nao foi modificada.</p>

<h2 id="the-openpgp-standard">O padrao OpenPGP</h2>

<p><strong>OpenPGP</strong> e o padrao aberto que define os formatos de mensagem, os algoritmos e os procedimentos utilizados pelo software compativel com PGP. Nao e um produto de software em si, mas uma especificacao que qualquer programador pode implementar.</p>

<p>Os documentos de referencia sao:</p>

<ul>
<li><strong>RFC 4880</strong> (novembro de 2007) — A especificacao principal atual do formato de mensagem OpenPGP.</li>
<li><strong>RFC 6637</strong> (junho de 2012) — Estende o OpenPGP com suporte para criptografia de curva eliptica (ECC).</li>
<li><strong>RFC 9580</strong> (2024) — A revisao mais recente que moderniza o padrao com suporte obrigatorio de Ed25519/X25519, modos de encriptacao AEAD e impressoes digitais de chaves melhoradas.</li>
</ul>

<p>O OpenPGP garante a interoperabilidade: uma mensagem encriptada com o KeychainPGP pode ser desencriptada pelo GnuPG, Mailvelope ou qualquer outra implementacao conforme.</p>

<h2 id="web-of-trust">Rede de confianca</h2>

<p>Uma das caracteristicas distintivas do PGP e o seu modelo descentralizado de <strong>rede de confianca</strong> (Web of Trust) para estabelecer a autenticidade das chaves publicas. Ao contrario do modelo centralizado de autoridade de certificacao (CA) utilizado pelo TLS/SSL, o PGP permite que os proprios utilizadores se certifiquem mutuamente.</p>

<p>A rede de confianca funciona por meio da <strong>assinatura de chaves</strong>: quando verifica a identidade de alguem e confirma que essa pessoa controla uma chave publica especifica, assina a chave dessa pessoa com a sua. Esta assinatura e uma declaracao publica de que acredita que a chave pertence de facto a pessoa que afirma representar.</p>

<p>Ferramentas como o <a href="/pt-PT/pgp-online-encrypt/">KeychainPGP</a> simplificam este processo ao permitir que os utilizadores trabalhem com as chaves diretamente atraves de uma interface intuitiva, utilizando a <a href="/pt-PT/docs/clipboard-encryption/">encriptacao por area de transferencia</a> para partilhar facilmente mensagens encriptadas e chaves publicas.</p>

<h2 id="pgp-algorithms-and-key-types">Algoritmos e tipos de chaves PGP</h2>

<p>O PGP suporta uma gama de algoritmos criptograficos que evoluiram ao longo dos avancos do dominio.</p>

<h3 id="classic-algorithms">Algoritmos classicos</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> — O algoritmo assimetrico mais implantado na historia do PGP. As chaves RSA de 2048 bits sao consideradas o minimo de seguranca atualmente, com chaves de 4096 bits recomendadas para protecao a longo prazo.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> — Utilizado para assinaturas em combinacao com ElGamal para encriptacao. Menos privilegiado atualmente.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> — A cifra simetrica dominante utilizada para encriptar o conteudo das mensagens. AES-128 e AES-256 sao suportados.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> — Funcoes de hash criptografico utilizadas para o calculo de resumos em assinaturas digitais.</li>
</ul>

<h3 id="modern-algorithms">Algoritmos modernos</h3>

<p>A ultima geracao de implementacoes OpenPGP suporta a <strong>criptografia de curva eliptica (ECC)</strong>, que oferece seguranca equivalente ao RSA com tamanhos de chave consideravelmente menores:</p>

<ul>
<li><strong>Ed25519</strong> — Um algoritmo de assinatura digital baseado na Curve25519. Produz assinaturas rapidas e compactas. Recomendado no RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> — Utilizado para troca de chaves (encriptacao). Oferece excelente desempenho com solidas propriedades de seguranca.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — Curvas elipticas padronizadas pelo NIST. Suportadas pelo OpenPGP mas geralmente menos privilegiadas que os algoritmos baseados na Curve25519.</li>
</ul>

<p>Ferramentas modernas como o KeychainPGP suportam estes algoritmos contemporaneos, tornando a geracao de chaves com Ed25519 e X25519 simples e direta.</p>

<h2 id="common-use-cases-for-pgp">Casos de utilizacao comuns do PGP</h2>

<ul>
<li><strong>E-mail seguro</strong> — O caso de utilizacao original e mais conhecido. O PGP permite encriptar o conteudo dos e-mails e assinar as mensagens para provar a sua autenticidade.</li>
<li><strong>Encriptacao de ficheiros</strong> — O PGP pode encriptar ficheiros individuais ou arquivos inteiros para armazenamento ou transferencia seguros.</li>
<li><strong>Verificacao de software</strong> — Os projetos open source assinam regularmente as suas versoes com chaves PGP. Os utilizadores podem verificar estas assinaturas para confirmar a autenticidade de uma transferencia.</li>
<li><strong>Mensagens seguras</strong> — O PGP pode ser utilizado para encriptar qualquer mensagem de texto, particularmente util em plataformas que nao oferecem encriptacao ponta a ponta.</li>
<li><strong>Verificacao de identidade</strong> — As impressoes digitais das chaves PGP servem como identidades digitais verificaveis. Os programadores no GitHub podem assinar os seus commits com PGP.</li>
<li><strong>Assinatura de documentos</strong> — Os workflows juridicos utilizam por vezes assinaturas PGP para estabelecer a nao-repudiacao.</li>
</ul>

<h2 id="pgp-today">O PGP hoje</h2>

<p>Mais de tres decadas apos a sua criacao, o PGP continua a ser uma das ferramentas criptograficas mais importantes disponiveis. O padrao OpenPGP continua a evoluir, com o RFC 9580 a introduzir modernizacoes significativas incluindo o suporte obrigatorio de algoritmos de curva eliptica modernos e os modos de encriptacao AEAD.</p>

<p>O ecossistema de ferramentas PGP enriqueceu-se consideravelmente. O GnuPG continua a ser a implementacao de referencia para utilizacao em linha de comandos. Ferramentas modernas como o KeychainPGP oferecem aplicacoes de ambiente de trabalho nativas (Windows, macOS, Linux), uma aplicacao Android, um CLI para scripting e uma aplicacao web no navegador — tudo construido sobre o mesmo motor Sequoia-PGP em Rust.</p>

<h2 id="getting-started-with-pgp">Comecar com PGP</h2>

<p>Pronto para comecar com a encriptacao PGP? Aqui estao os melhores proximos passos:</p>

<ol>
<li><strong>Experimente no seu navegador</strong> — Utilize a <a href="/pt-PT/pgp-online-encrypt/">ferramenta PGP online</a> do KeychainPGP para gerar um par de chaves, encriptar uma mensagem ou verificar uma assinatura sem instalar nada.</li>
<li><strong>Leia o guia para principiantes</strong> — Se e novo na criptografia, o nosso guia <a href="/pt-PT/docs/pgp-for-beginners/">PGP para principiantes</a> acompanha-o passo a passo.</li>
<li><strong>Aprenda o workflow pratico</strong> — O nosso guia <a href="/pt-PT/docs/how-to-use-pgp/">Como utilizar PGP</a> cobre a geracao de chaves, a encriptacao e desencriptacao, a gestao do seu porta-chaves e as boas praticas.</li>
<li><strong>Compreenda a encriptacao por area de transferencia</strong> — Descubra a <a href="/pt-PT/docs/clipboard-encryption/">encriptacao PGP por area de transferencia</a> para encriptar e desencriptar texto diretamente a partir da sua area de transferencia.</li>
<li><strong>Conheca as ferramentas</strong> — Compreenda as <a href="/pt-PT/docs/pgp-vs-gpg/">diferencas entre PGP e GPG</a> para escolher a ferramenta certa para o seu workflow.</li>
</ol>

<p>A encriptacao PGP protege comunicacoes sensiveis ha mais de trinta anos. Com as ferramentas e padroes modernos, e mais acessivel do que nunca.</p>
`
};

export default doc;
