import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Melhores ferramentas PGP e software de criptografia em 2026 — Guia completo',
	description: 'Guia completo de ferramentas PGP e software de criptografia. Compare ferramentas OpenPGP para desktop, web, mobile e CLI para encontrar a ideal para suas necessidades.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'O que sao ferramentas PGP?', level: 2 },
		{ id: 'desktop-pgp-software', text: 'Software PGP para desktop', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'Ferramentas PGP online', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'Ferramentas PGP para mobile', level: 2 },
		{ id: 'cli-pgp-tools', text: 'Ferramentas PGP de linha de comando', level: 2 },
		{ id: 'email-pgp-integration', text: 'Integracao PGP com e-mail', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'Comparativo de ferramentas PGP', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'Escolhendo a ferramenta PGP certa', level: 2 },
		{ id: 'why-keychainpgp', text: 'Por que KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'Comecando', level: 2 }
	],
	html: `
<h1>Melhores ferramentas PGP e software de criptografia em 2026</h1>

<p>Uma ampla variedade de ferramentas PGP esta disponivel hoje para criptografar mensagens, assinar arquivos e gerenciar chaves OpenPGP. Essas ferramentas abrangem aplicativos desktop, utilitarios web, aplicativos mobile, interfaces de linha de comando e plugins de e-mail. Este guia cobre cada categoria principal de software PGP para ajuda-lo a fazer uma escolha informada.</p>

<h2 id="what-are-pgp-tools">O que sao ferramentas PGP?</h2>

<p>Ferramentas PGP sao aplicativos de software que implementam o <a href="/pt-BR/docs/what-is-pgp/">padrao OpenPGP</a> (RFC 4880 e seus sucessores) para criptografia de chave publica. Elas permitem gerar pares de chaves, criptografar e descriptografar mensagens, criar e verificar assinaturas digitais e gerenciar chaveiros. Entender a <a href="/pt-BR/docs/pgp-vs-gpg/">diferenca entre PGP e GPG</a> ajuda a esclarecer por que tantas ferramentas diferentes existem.</p>

<h2 id="desktop-pgp-software">Software PGP para desktop</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong> (GNU Privacy Guard) e a implementacao open source de referencia do padrao OpenPGP. Disponivel em praticamente todos os sistemas operacionais, e extremamente poderoso, mas predominantemente de linha de comando. Suporta RSA, DSA, ECDSA, EdDSA e uma ampla gama de cifradores simetricos.</p>

<ul>
<li><strong>Plataformas:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>Interface:</strong> Linha de comando (com frontends GUI opcionais)</li>
<li><strong>Licenca:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong> agrupa o GnuPG com uma interface grafica Windows nativa chamada Kleopatra. Fornece gerenciamento de certificados, criptografia de arquivos via integracao com o Windows Explorer e suporte a S/MIME alem do OpenPGP.</p>

<ul>
<li><strong>Plataformas:</strong> Windows</li>
<li><strong>Licenca:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong> e o equivalente macOS do Gpg4win. Inclui GPG Keychain para gerenciamento de chaves, um menu contextual GPGServices e GPG Mail para integracao com o Apple Mail.</p>

<ul>
<li><strong>Plataformas:</strong> macOS</li>
<li><strong>Licenca:</strong> Open source (plugin Mail pago)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong> adota uma abordagem fundamentalmente diferente para criptografia PGP. Em vez de envolver o GnuPG em uma interface grafica, ele usa a biblioteca <strong>Sequoia-PGP</strong> escrita em Rust para fornecer um fluxo de trabalho moderno baseado na area de transferencia. Voce copia o texto, pressiona um atalho global (<code>Ctrl+Shift+E</code> para criptografar, <code>Ctrl+Shift+D</code> para descriptografar) e cola o resultado — funciona com qualquer aplicativo no seu sistema.</p>

<ul>
<li><strong>Plataformas:</strong> Windows, macOS, Linux, Android, Web, CLI</li>
<li><strong>Interface:</strong> GUI com bandeja do sistema + atalhos globais + CLI</li>
<li><strong>Licenca:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">Ferramentas PGP online</h2>

<p>O <a href="/pt-BR/pgp-online-encrypt/">aplicativo web KeychainPGP</a> compila o mesmo motor Sequoia-PGP em Rust para WebAssembly, de forma que todas as operacoes criptograficas sao realizadas localmente no seu navegador. Nenhum dado e transmitido a um servidor. O <strong>Mailvelope</strong> e uma extensao de navegador que integra a criptografia OpenPGP diretamente nos provedores de webmail como Gmail e Outlook.com.</p>

<h2 id="mobile-pgp-tools">Ferramentas PGP para mobile</h2>

<p><strong>OpenKeychain</strong> e um aplicativo OpenPGP maduro e open source para Android, com integracao ao K-9 Mail. <strong>KeychainPGP para Android</strong> traz a mesma criptografia moderna para o celular, com geracao de chaves Ed25519/X25519 e sincronizacao de chaves por QR code com o aplicativo desktop.</p>

<h2 id="cli-pgp-tools">Ferramentas PGP de linha de comando</h2>

<p><strong>GnuPG</strong> (<code>gpg</code>) e a ferramenta CLI dominante. <strong>KeychainPGP</strong> fornece seu proprio CLI (<code>keychainpgp</code>) com comandos para geracao de chaves, criptografia, descriptografia, assinatura, verificacao, inspecao de chaves e gerenciamento do chaveiro. <strong>Sequoia-PGP</strong> tambem fornece <code>sq</code>, outro CLI moderno baseado em Rust.</p>

<h2 id="email-pgp-integration">Integracao PGP com e-mail</h2>

<p><strong>Mozilla Thunderbird</strong> possui suporte OpenPGP nativo integrado desde a versao 78. <strong>ProtonMail</strong> oferece criptografia de ponta a ponta usando OpenPGP internamente, mas abstrai todo o gerenciamento de chaves.</p>

<h2 id="pgp-tools-comparison">Comparativo de ferramentas PGP</h2>

<table>
<tr><th>Ferramenta</th><th>Plataformas</th><th>Interface</th><th>Chaves padrao</th><th>Open Source</th><th>Ideal para</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>Sim (GPLv3)</td><td>Usuarios avancados, scripting</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>Sim (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>Parcial</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + Atalhos + CLI</td><td>Ed25519/X25519</td><td>Sim (MIT/Apache-2.0)</td><td>Fluxo por area de transferencia</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>Extensao de navegador</td><td>Overlay de webmail</td><td>RSA-4096</td><td>Sim (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>GUI nativa</td><td>RSA-3072</td><td>Sim (GPLv3)</td><td>Gerenciamento de chaves Android</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>Cliente de e-mail</td><td>RSA-3072</td><td>Sim (MPL 2.0)</td><td>E-mail criptografado</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>Webmail</td><td>X25519</td><td>Parcial</td><td>E-mail sem configuracao</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">Escolhendo a ferramenta PGP certa</h2>

<h3>Facilidade de uso</h3>
<p>Ferramentas tradicionais como o GnuPG sao projetadas para usuarios tecnicos. O KeychainPGP elimina escolhas de algoritmos e arquivos de configuracao — gere uma chave e comece a criptografar imediatamente.</p>

<h3>Seguranca e padroes criptograficos</h3>
<p>Ferramentas modernas como KeychainPGP e <code>sq</code> do Sequoia usam por padrao <strong>Ed25519/X25519</strong>, que oferecem seguranca equivalente ou superior com chaves muito menores. A biblioteca subjacente tambem importa: o Sequoia-PGP (Rust) oferece solidas garantias de seguranca de memoria.</p>

<h3>Cobertura de plataformas</h3>
<p>O KeychainPGP cobre Windows, macOS, Linux, Android e web com uma interface consistente. O GnuPG esta disponivel em toda parte, mas necessita de frontends GUI diferentes em cada plataforma.</p>

<h2 id="why-keychainpgp">Por que KeychainPGP</h2>

<p>O KeychainPGP foi projetado para resolver os problemas que tornaram a criptografia PGP inacessivel durante decadas:</p>

<ul>
<li><strong>Fluxo de trabalho por area de transferencia.</strong> Em vez de se integrar a um unico aplicativo, o KeychainPGP funciona com <em>todos</em> os aplicativos. Copie o texto, criptografe ou descriptografe com um unico atalho e cole o resultado.</li>
<li><strong>Criptografia moderna por padrao.</strong> Chaves de assinatura <strong>Ed25519</strong> e subchaves de criptografia <strong>X25519</strong> automaticamente.</li>
<li><strong>Multiplataforma com uma unica base de codigo.</strong> Aplicativo desktop construido com Tauri, aplicativo web compilado via WebAssembly. Interface e comportamento criptografico identicos no Windows, macOS, Linux, Android ou navegador.</li>
<li><strong>Desenvolvido com Sequoia-PGP.</strong> Motor criptografico em Rust com garantias de seguranca de memoria que eliminam classes inteiras de vulnerabilidades.</li>
<li><strong>Verdadeiramente livre e open source.</strong> Licenca MIT / Apache-2.0 sem niveis pagos, sem contas, sem telemetria.</li>
</ul>

<h2 id="getting-started">Comecando</h2>

<ul>
<li><strong>Experimente agora</strong> sem instalacao: abra a <a href="/pt-BR/pgp-online-encrypt/">ferramenta PGP online KeychainPGP</a> no seu navegador.</li>
<li><strong>Aprenda os fundamentos</strong>: leia <a href="/pt-BR/docs/what-is-pgp/">O que e PGP?</a></li>
<li><strong>Entenda o ecossistema</strong>: nosso artigo sobre <a href="/pt-BR/docs/pgp-vs-gpg/">PGP vs GPG</a> explica como o padrao, o protocolo e as ferramentas estao relacionados.</li>
<li><strong>Compare suas opcoes</strong>: veja nosso ranking das <a href="/pt-BR/blog/best-pgp-tools-2026/">melhores ferramentas PGP de 2026</a> ou o <a href="/pt-BR/blog/pgp-software-comparison/">comparativo completo de software PGP</a>.</li>
<li><strong>Baixe o KeychainPGP</strong>: obtenha o aplicativo desktop em <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a>.</li>
</ul>
`
};

export default doc;
