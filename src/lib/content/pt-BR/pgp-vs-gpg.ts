import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: qual e a diferenca entre PGP e GPG?',
	description: 'Descubra a diferenca entre PGP e GPG. Compare Pretty Good Privacy, GnuPG e o padrao OpenPGP para encontrar a ferramenta de criptografia certa.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Qual e a diferenca?', level: 2 },
		{ id: 'what-is-pgp', text: 'O que e PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'O que e GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: 'O que e OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'Tabela comparativa PGP vs GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'Diferencas principais explicadas', level: 2 },
		{ id: 'which-should-you-use', text: 'Qual voce deve usar?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'Onde o KeychainPGP se encaixa', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG: qual e a diferenca entre PGP e GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">Qual e a diferenca entre PGP e GPG?</h2>

<p>A diferenca entre PGP e GPG esta na sua origem e licenciamento. <strong>PGP</strong> (Pretty Good Privacy) e o programa de criptografia proprietario original criado por Phil Zimmermann em 1991. <strong>GPG</strong> (GNU Privacy Guard, tambem conhecido como GnuPG) e uma reimplementacao livre e open source do mesmo conceito, desenvolvida como parte do projeto GNU. Ambos os programas implementam o padrao <strong>OpenPGP</strong>, o que significa que produzem mensagens criptografadas compativeis e podem funcionar com as chaves um do outro. Na pratica, o GPG e a ferramenta que a maioria das pessoas usa hoje, pois e gratuito, ativamente mantido e disponivel em todos os principais sistemas operacionais. Se voce e novo em criptografia, nosso <a href="/pt-BR/docs/pgp-for-beginners/">guia PGP para iniciantes</a> apresenta os conceitos fundamentais passo a passo.</p>

<h2 id="what-is-pgp">O que e PGP?</h2>

<p>PGP significa <strong>Pretty Good Privacy</strong>. Phil Zimmermann escreveu a primeira versao em 1991 e a publicou como ferramenta gratuita para ativistas e cidadaos comuns que precisavam de criptografia forte. O software combinava criptografia de chave simetrica com criptografia de chave publica.</p>

<p>Apos uma investigacao federal de tres anos (encerrada em 1996), Zimmermann fundou a PGP Inc. A empresa mudou de maos varias vezes: Network Associates em 1997, PGP Corporation em 2002, e depois Symantec (agora Broadcom) em 2010. Hoje, o PGP existe como suite de produtos comerciais destinados principalmente a empresas.</p>

<p>Para saber mais sobre a tecnologia subjacente, veja nosso artigo completo sobre <a href="/pt-BR/docs/what-is-pgp/">o que e PGP e como funciona</a>.</p>

<h2 id="what-is-gpg-gnupg">O que e GPG (GnuPG)?</h2>

<p>GPG, ou <strong>GNU Privacy Guard (GnuPG)</strong>, e uma implementacao livre e open source do padrao OpenPGP. Werner Koch iniciou o projeto em 1997 com financiamento do governo alemao e lancou a versao 1.0 em 1999. O GnuPG foi criado especificamente para fornecer uma alternativa totalmente livre ao software proprietario PGP.</p>

<p>O GnuPG faz parte do projeto GNU e e licenciado sob a Licenca Publica Geral GNU (GPL). Ele esta incluido por padrao na maioria das distribuicoes Linux. A ferramenta de linha de comando <code>gpg</code> e a interface com a qual a maioria dos desenvolvedores e administradores de sistema interage. Para uma visao geral das ferramentas disponiveis, veja nosso <a href="/pt-BR/docs/pgp-tools/">comparativo de ferramentas PGP</a>.</p>

<h2 id="what-is-openpgp">O que e OpenPGP?</h2>

<p><strong>OpenPGP</strong> nao e um produto nem um software. E um padrao aberto que define os formatos de mensagens, formatos de chaves e procedimentos criptograficos que as ferramentas compativeis com PGP devem seguir. O IETF publicou a especificacao original como <strong>RFC 2440</strong> em 1998, e a versao mais referenciada e o <strong>RFC 4880</strong> (2007). Uma atualizacao importante, o <strong>RFC 9580</strong> (2024), moderniza o padrao com suporte a Ed25519 e criptografia AEAD.</p>

<p>A existencia do OpenPGP torna a interoperabilidade possivel. Como PGP e GPG implementam o mesmo padrao, uma mensagem criptografada com GPG pode ser descriptografada por PGP, e vice-versa.</p>

<h2 id="pgp-vs-gpg-comparison-table">Tabela comparativa PGP vs GPG</h2>

<table>
<tr><th>Caracteristica</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Tipo</strong></td><td>Software comercial</td><td>Software livre/open source</td><td>Padrao aberto</td></tr>
<tr><td><strong>Licenca</strong></td><td>Proprietaria</td><td>GPL (gratuito)</td><td>Especificacao IETF</td></tr>
<tr><td><strong>Custo</strong></td><td>Licenca paga</td><td>Gratuito</td><td>N/A</td></tr>
<tr><td><strong>Plataformas</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>N/A</td></tr>
<tr><td><strong>GUI incluida</strong></td><td>Sim (console empresarial)</td><td>Nao (GUIs de terceiros disponiveis)</td><td>N/A</td></tr>
<tr><td><strong>Codigo disponivel</strong></td><td>Nao</td><td>Sim</td><td>Padrao publico</td></tr>
</table>

<h2 id="key-differences-explained">Diferencas principais explicadas</h2>

<h3>Licenca e custo</h3>

<p>O PGP e um software proprietario vendido sob licenca comercial. O GPG e publicado sob a GPL, o que significa que qualquer pessoa pode baixa-lo, usa-lo, modifica-lo e redistribui-lo gratuitamente. Para individuos, pequenas equipes e projetos open source, o GPG e a escolha obvia em termos de custo.</p>

<h3>Suporte a plataformas</h3>

<p>O GnuPG funciona em praticamente todos os sistemas Unix e possui builds oficiais para Windows e macOS. Para necessidades multiplataforma, ferramentas modernas como o KeychainPGP fornecem builds nativos para Windows, macOS, Linux e Android a partir de uma unica base de codigo.</p>

<h3>Experiencia do usuario</h3>

<p>O PGP comercial inclui uma interface grafica para implantacao empresarial. O GnuPG e fundamentalmente uma ferramenta de linha de comando. Ferramentas como o KeychainPGP oferecem uma interface grafica nativa que gerencia chaves, criptografia, descriptografia e assinatura sem memorizar opcoes de linha de comando. Voce pode experimentar a criptografia PGP diretamente no navegador com nossa <a href="/pt-BR/pgp-online-encrypt/">ferramenta de criptografia PGP online</a>.</p>

<h2 id="which-should-you-use">Qual voce deve usar?</h2>

<ul>
<li><strong>Empresa com infraestrutura Broadcom/Symantec existente:</strong> O PGP comercial pode ser o caminho de menor resistencia.</li>
<li><strong>Desenvolvedores e administradores de sistema:</strong> O GnuPG e a ferramenta padrao, instalada por padrao na maioria dos servidores.</li>
<li><strong>Usuarios preocupados com privacidade que querem uma GUI:</strong> Considere um aplicativo OpenPGP moderno como o KeychainPGP.</li>
<li><strong>Necessidades de criptografia web ou rapida:</strong> Uma <a href="/pt-BR/pgp-online-encrypt/">ferramenta de criptografia PGP online</a> pode lidar com tarefas pontuais sem instalar nada.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">Onde o KeychainPGP se encaixa</h2>

<p><a href="/">KeychainPGP</a> e um aplicativo desktop moderno e open source que implementa o padrao OpenPGP usando <strong>Sequoia-PGP</strong>, uma biblioteca OpenPGP escrita do zero em Rust. Nao e PGP (o produto comercial) nem GPG (GnuPG). E uma implementacao independente que coexiste com ambos no ecossistema OpenPGP.</p>

<p>Razoes principais para considerar o KeychainPGP:</p>

<ul>
<li><strong>Multiplataforma:</strong> Builds nativos para Windows, macOS, Linux e Android, alem de aplicativo web e CLI</li>
<li><strong>Criptografia moderna:</strong> Construido sobre Sequoia-PGP com suporte a Curve25519/Ed25519 e AEAD</li>
<li><strong>Open source:</strong> Dupla licenca MIT / Apache-2.0, totalmente auditavel</li>
<li><strong>Facil de usar:</strong> Interface grafica com fluxo de trabalho por area de transferencia e atalhos globais</li>
<li><strong>CLI para automacao:</strong> O CLI <code>keychainpgp</code> suporta geracao de chaves, criptografia, descriptografia, assinatura, verificacao e gerenciamento do chaveiro</li>
<li><strong>Compativel com OpenPGP:</strong> As chaves e mensagens sao interoperaveis com GPG, PGP e qualquer outra ferramenta OpenPGP</li>
</ul>

<h2 id="frequently-asked-questions">Perguntas frequentes</h2>

<h3>GPG e a mesma coisa que PGP?</h3>

<p>Nao. GPG (GnuPG) e PGP sao softwares distintos criados por pessoas diferentes. O PGP foi criado por Phil Zimmermann em 1991 e hoje e um produto comercial da Broadcom. O GPG foi criado por Werner Koch em 1997 como alternativa livre e open source. Ambos implementam o padrao OpenPGP, portanto sao funcionalmente compativeis.</p>

<h3>As chaves GPG e PGP podem funcionar juntas?</h3>

<p>Sim. GPG e PGP usam o formato de chave OpenPGP definido pelo padrao IETF. Voce pode exportar uma chave publica do GPG e importa-la no PGP, ou em qualquer outra ferramenta compativel com OpenPGP como o KeychainPGP.</p>

<h3>O GPG ainda e seguro em 2026?</h3>

<p>O GnuPG continua sendo uma ferramenta segura e ativamente mantida. Use tipos de chaves modernas (como Ed25519), mantenha seu software atualizado e siga boas praticas de gerenciamento de chaves. Para um guia passo a passo, veja nosso artigo <a href="/pt-BR/docs/pgp-for-beginners/">PGP para iniciantes</a>.</p>

<h3>O que significa OpenPGP?</h3>

<p>OpenPGP e um padrao aberto publicado pelo IETF que define como funciona a criptografia compativel com PGP. Ele especifica os formatos de mensagens, formatos de chaves, requisitos de algoritmos e estruturas de assinaturas.</p>

<h3>Preciso do PGP ou GPG para usar o KeychainPGP?</h3>

<p>Nao. O KeychainPGP e um aplicativo autonomo que nao depende da instalacao do PGP ou GnuPG. Ele usa a biblioteca Sequoia-PGP, uma implementacao independente do padrao OpenPGP escrita em Rust. No entanto, as chaves e mensagens criptografadas criadas no KeychainPGP sao totalmente compativeis com GPG e PGP.</p>
`
};

export default doc;
