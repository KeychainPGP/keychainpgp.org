import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'O que e PGP? Guia completo sobre criptografia Pretty Good Privacy',
	description: 'Descubra o que e PGP (Pretty Good Privacy), como funciona a criptografia PGP com criptografia de chave publica, o padrao OpenPGP, assinaturas digitais e usos modernos.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'O que e criptografia PGP?', level: 2 },
		{ id: 'history-of-pgp', text: 'Historia do PGP', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'Como funciona a criptografia PGP', level: 2 },
		{ id: 'public-key-cryptography', text: 'Criptografia de chave publica', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'O modelo de criptografia hibrida', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'Assinaturas digitais PGP', level: 2 },
		{ id: 'the-openpgp-standard', text: 'O padrao OpenPGP', level: 2 },
		{ id: 'web-of-trust', text: 'Rede de confianca', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'Algoritmos e tipos de chaves PGP', level: 2 },
		{ id: 'classic-algorithms', text: 'Algoritmos classicos', level: 3 },
		{ id: 'modern-algorithms', text: 'Algoritmos modernos', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'Casos de uso comuns do PGP', level: 2 },
		{ id: 'pgp-today', text: 'PGP hoje', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'Comecando com PGP', level: 2 }
	],
	html: `
<h1>O que e PGP? Guia completo sobre criptografia Pretty Good Privacy</h1>

<h2 id="what-is-pgp-encryption">O que e criptografia PGP?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong> e um programa de criptografia que fornece privacidade e autenticacao criptografica para comunicacoes de dados. A criptografia PGP usa uma combinacao de criptografia de chave simetrica e criptografia de chave publica para permitir que usuarios criptografem mensagens, arquivos e outros dados de forma que somente o destinatario pretendido possa le-los. Criado originalmente por Phil Zimmermann em 1991, o PGP se tornou o padrao de criptografia de e-mail mais utilizado no mundo e constitui a base da especificacao <strong>OpenPGP</strong> definida no RFC 4880. Seja para enviar um e-mail confidencial, verificar a identidade de um editor de software ou proteger arquivos sensiveis, o PGP fornece um arcabouco criptografico comprovado, no qual confiam jornalistas, pesquisadores de seguranca, governos e usuarios comuns.</p>

<p>Se voce quiser experimentar a criptografia PGP imediatamente sem instalar software, o KeychainPGP oferece uma <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> que funciona inteiramente no seu navegador.</p>

<h2 id="history-of-pgp">Historia do PGP</h2>

<p>Phil Zimmermann publicou o PGP 1.0 em junho de 1991 como software livre, motivado pela conviccao de que a criptografia forte deveria ser acessivel a todos os cidadaos — nao apenas a governos e militares. Na epoca, a criptografia forte era classificada como municao segundo as regulamentacoes americanas de exportacao, e Zimmermann foi alvo de uma investigacao criminal de tres anos pelo Servico de Alfandega dos EUA por ter distribuido o PGP internacionalmente. A investigacao foi finalmente encerrada em 1996 sem indiciamento, e o caso se tornou um marco na historia das liberdades digitais.</p>

<p>O PGP evoluiu atraves de varias encarnacoes comerciais. Zimmermann fundou a PGP Inc. em 1996, que foi adquirida pela Network Associates (atual McAfee) em 1997, e finalmente pela Symantec em 2010. Ao longo dessas transicoes, o protocolo criptografico subjacente foi padronizado com o nome de <strong>OpenPGP</strong> pela Internet Engineering Task Force (IETF), garantindo que o protocolo permanecesse aberto e interoperavel independentemente da propriedade comercial.</p>

<p>A publicacao do padrao OpenPGP significou que qualquer pessoa poderia criar implementacoes compativeis. Isso levou a criacao do GNU Privacy Guard (GnuPG ou GPG), uma implementacao livre e open source que continua sendo uma das ferramentas PGP mais utilizadas hoje. Para entender as diferencas entre essas implementacoes, consulte nosso guia sobre <a href="/pt-BR/docs/pgp-vs-gpg/">PGP vs GPG</a>.</p>

<h2 id="how-pgp-encryption-works">Como funciona a criptografia PGP</h2>

<p>A criptografia PGP se baseia em uma combinacao sofisticada de tecnicas criptograficas. Em vez de usar um unico metodo, o PGP emprega um <strong>modelo de criptografia hibrida</strong> que combina a velocidade da criptografia simetrica com as vantagens de distribuicao de chaves da criptografia assimetrica (de chave publica).</p>

<h3 id="public-key-cryptography">Criptografia de chave publica</h3>

<p>No nucleo do PGP esta a <strong>criptografia de chave publica</strong>, tambem chamada de criptografia assimetrica. Cada usuario PGP gera um <strong>par de chaves</strong> composto por duas chaves matematicamente vinculadas:</p>

<ul>
<li><strong>Chave publica</strong> — compartilhada abertamente com qualquer pessoa. Outros usam essa chave para criptografar mensagens destinadas a voce e para verificar suas assinaturas digitais.</li>
<li><strong>Chave privada</strong> (tambem chamada de chave secreta) — mantida estritamente confidencial. Voce usa essa chave para descriptografar mensagens enviadas a voce e para criar assinaturas digitais.</li>
</ul>

<p>A propriedade fundamental desse sistema e que os dados criptografados com uma chave publica so podem ser descriptografados com a chave privada correspondente, e vice-versa. Isso elimina a necessidade de transmitir um segredo compartilhado entre as partes antes que possam se comunicar de forma privada.</p>

<h3 id="the-hybrid-encryption-model">O modelo de criptografia hibrida</h3>

<p>Embora a criptografia de chave publica resolva o problema de distribuicao de chaves, algoritmos assimetricos como RSA sao computacionalmente caros para criptografar grandes volumes de dados. O PGP resolve esse problema usando uma abordagem hibrida:</p>

<ol>
<li><strong>Geracao de chave de sessao</strong> — O PGP gera uma <strong>chave simetrica de sessao</strong> aleatoria e unica (geralmente 128 ou 256 bits) para cada mensagem.</li>
<li><strong>Criptografia dos dados</strong> — O conteudo da mensagem e criptografado usando criptografia simetrica rapida (como AES-256) com a chave de sessao.</li>
<li><strong>Criptografia da chave de sessao</strong> — A chave de sessao e entao criptografada usando a chave publica do destinatario (operacao assimetrica).</li>
<li><strong>Empacotamento</strong> — A mensagem criptografada e a chave de sessao criptografada sao agrupadas e enviadas ao destinatario.</li>
</ol>

<p>Quando o destinatario recebe a mensagem, o processo e invertido: ele usa sua <strong>chave privada</strong> para descriptografar a chave de sessao, e entao a chave de sessao descriptografada e usada para descriptografar o conteudo da mensagem.</p>

<h2 id="pgp-digital-signatures">Assinaturas digitais PGP</h2>

<p>Alem da criptografia, o PGP fornece <strong>assinaturas digitais</strong> que cumprem duas funcoes essenciais: a <strong>autenticacao</strong> (provar quem enviou uma mensagem) e a <strong>integridade</strong> (provar que a mensagem nao foi alterada em transito).</p>

<p>O processo de assinatura funciona da seguinte forma:</p>

<ol>
<li>O PGP calcula um <strong>hash criptografico</strong> (um resumo de tamanho fixo) do conteudo da mensagem usando um algoritmo como SHA-256 ou SHA-512.</li>
<li>O hash e entao criptografado com a <strong>chave privada</strong> do remetente, produzindo a assinatura digital.</li>
<li>A assinatura e anexada a mensagem.</li>
</ol>

<p>Qualquer destinatario pode verificar a assinatura descriptografando-a com a <strong>chave publica</strong> do remetente para recuperar o hash original, calculando independentemente o hash da mensagem recebida e comparando os dois hashes. Se eles corresponderem, a mensagem e autentica e nao foi modificada.</p>

<h2 id="the-openpgp-standard">O padrao OpenPGP</h2>

<p><strong>OpenPGP</strong> e o padrao aberto que define os formatos de mensagens, os algoritmos e os procedimentos utilizados por softwares compativeis com PGP. Nao e um produto de software em si, mas sim uma especificacao que qualquer desenvolvedor pode implementar.</p>

<p>Os documentos de referencia sao:</p>

<ul>
<li><strong>RFC 4880</strong> (novembro de 2007) — A especificacao principal atual do formato de mensagem OpenPGP.</li>
<li><strong>RFC 6637</strong> (junho de 2012) — Estende o OpenPGP com suporte a criptografia de curva eliptica (ECC).</li>
<li><strong>RFC 9580</strong> (2024) — A revisao mais recente que moderniza o padrao com suporte obrigatorio a Ed25519/X25519, modos de criptografia AEAD e impressoes digitais de chaves aprimoradas.</li>
</ul>

<p>O OpenPGP garante a interoperabilidade: uma mensagem criptografada com o KeychainPGP pode ser descriptografada pelo GnuPG, Mailvelope ou qualquer outra implementacao compativel.</p>

<h2 id="web-of-trust">Rede de confianca</h2>

<p>Uma das caracteristicas distintivas do PGP e seu modelo descentralizado de <strong>rede de confianca</strong> (Web of Trust) para estabelecer a autenticidade das chaves publicas. Diferentemente do modelo centralizado de autoridade certificadora (CA) usado pelo TLS/SSL, o PGP permite que os proprios usuarios garantam uns pelos outros.</p>

<p>A rede de confianca funciona por meio da <strong>assinatura de chaves</strong>: quando voce verifica a identidade de alguem e confirma que essa pessoa controla uma chave publica especifica, voce assina a chave dela com a sua. Essa assinatura e uma declaracao publica de que voce acredita que a chave pertence a pessoa que ela afirma representar.</p>

<p>Ferramentas como o <a href="/pt-BR/pgp-online-encrypt/">KeychainPGP</a> simplificam esse processo, permitindo que os usuarios trabalhem com chaves diretamente atraves de uma interface intuitiva, utilizando a <a href="/pt-BR/docs/clipboard-encryption/">criptografia por area de transferencia</a> para compartilhar facilmente mensagens criptografadas e chaves publicas.</p>

<h2 id="pgp-algorithms-and-key-types">Algoritmos e tipos de chaves PGP</h2>

<p>O PGP suporta uma variedade de algoritmos criptograficos que evoluiram ao longo dos avancos do campo.</p>

<h3 id="classic-algorithms">Algoritmos classicos</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> — O algoritmo assimetrico mais implantado na historia do PGP. Chaves RSA de 2048 bits sao consideradas o minimo de seguranca atualmente, com chaves de 4096 bits recomendadas para protecao de longo prazo.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> — Usado para assinaturas em combinacao com ElGamal para criptografia. Menos utilizado atualmente.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> — O padrao de criptografia simetrica dominante usado para criptografar o conteudo das mensagens. AES-128 e AES-256 sao suportados.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> — Funcoes de hash criptografico usadas para o calculo de resumos em assinaturas digitais.</li>
</ul>

<h3 id="modern-algorithms">Algoritmos modernos</h3>

<p>A ultima geracao de implementacoes OpenPGP suporta <strong>criptografia de curva eliptica (ECC)</strong>, que oferece seguranca equivalente ao RSA com tamanhos de chave consideravelmente menores:</p>

<ul>
<li><strong>Ed25519</strong> — Um algoritmo de assinatura digital baseado na Curve25519. Produz assinaturas rapidas e compactas. Recomendado no RFC 9580.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> — Usado para troca de chaves (criptografia). Oferece excelente desempenho com solidas propriedades de seguranca.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — Curvas elipticas padronizadas pelo NIST. Suportadas pelo OpenPGP, mas geralmente menos preferidas que os algoritmos baseados na Curve25519.</li>
</ul>

<p>Ferramentas modernas como o KeychainPGP suportam esses algoritmos contemporaneos, tornando a geracao de chaves com Ed25519 e X25519 simples e direta.</p>

<h2 id="common-use-cases-for-pgp">Casos de uso comuns do PGP</h2>

<ul>
<li><strong>E-mail seguro</strong> — O caso de uso original e mais conhecido. O PGP permite criptografar o conteudo de e-mails e assinar mensagens para provar sua autenticidade.</li>
<li><strong>Criptografia de arquivos</strong> — O PGP pode criptografar arquivos individuais ou arquivos compactados inteiros para armazenamento ou transferencia seguros.</li>
<li><strong>Verificacao de software</strong> — Projetos open source assinam regularmente suas versoes com chaves PGP. Os usuarios podem verificar essas assinaturas para confirmar a autenticidade de um download.</li>
<li><strong>Mensagens seguras</strong> — O PGP pode ser usado para criptografar qualquer mensagem de texto, particularmente util em plataformas que nao oferecem criptografia de ponta a ponta.</li>
<li><strong>Verificacao de identidade</strong> — As impressoes digitais de chaves PGP servem como identidades digitais verificaveis. Desenvolvedores no GitHub podem assinar seus commits com PGP.</li>
<li><strong>Assinatura de documentos</strong> — Fluxos de trabalho juridicos as vezes usam assinaturas PGP para estabelecer a nao-repudiacao.</li>
</ul>

<h2 id="pgp-today">PGP hoje</h2>

<p>Mais de tres decadas apos sua criacao, o PGP continua sendo uma das ferramentas criptograficas mais importantes disponiveis. O padrao OpenPGP continua a evoluir, com o RFC 9580 introduzindo modernizacoes significativas, incluindo suporte obrigatorio a algoritmos modernos de curva eliptica e modos de criptografia AEAD.</p>

<p>O ecossistema de ferramentas PGP se enriqueceu consideravelmente. O GnuPG continua sendo a implementacao de referencia para uso em linha de comando. Ferramentas modernas como o KeychainPGP oferecem aplicativos desktop nativos (Windows, macOS, Linux), um aplicativo Android, um CLI para scripting e um aplicativo web no navegador — tudo construido sobre o mesmo motor Sequoia-PGP em Rust.</p>

<h2 id="getting-started-with-pgp">Comecando com PGP</h2>

<p>Pronto para comecar com a criptografia PGP? Aqui estao os melhores proximos passos:</p>

<ol>
<li><strong>Experimente no seu navegador</strong> — Use a <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online</a> do KeychainPGP para gerar um par de chaves, criptografar uma mensagem ou verificar uma assinatura sem instalar nada.</li>
<li><strong>Leia o guia para iniciantes</strong> — Se voce e novo em criptografia, nosso guia <a href="/pt-BR/docs/pgp-for-beginners/">PGP para iniciantes</a> acompanha voce passo a passo.</li>
<li><strong>Aprenda o fluxo de trabalho pratico</strong> — Nosso guia <a href="/pt-BR/docs/how-to-use-pgp/">Como usar PGP</a> cobre a geracao de chaves, criptografia e descriptografia, gerenciamento do chaveiro e boas praticas.</li>
<li><strong>Entenda a criptografia por area de transferencia</strong> — Descubra a <a href="/pt-BR/docs/clipboard-encryption/">criptografia PGP por area de transferencia</a> para criptografar e descriptografar texto diretamente da sua area de transferencia.</li>
<li><strong>Conheca as ferramentas</strong> — Entenda as <a href="/pt-BR/docs/pgp-vs-gpg/">diferencas entre PGP e GPG</a> para escolher a ferramenta certa para seu fluxo de trabalho.</li>
</ol>

<p>A criptografia PGP protege comunicacoes sensiveis ha mais de trinta anos. Com as ferramentas e padroes modernos, ela esta mais acessivel do que nunca.</p>
`
};

export default doc;
