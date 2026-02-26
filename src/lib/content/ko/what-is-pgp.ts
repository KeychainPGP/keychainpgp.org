import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP란 무엇인가? Pretty Good Privacy 암호화 종합 가이드',
	description: 'PGP(Pretty Good Privacy)가 무엇인지, 공개키 암호화를 이용한 PGP 암호화 작동 방식, OpenPGP 표준, 전자 서명 및 현대적 활용 사례를 알아보세요.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'PGP 암호화란?', level: 2 },
		{ id: 'history-of-pgp', text: 'PGP의 역사', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'PGP 암호화 작동 방식', level: 2 },
		{ id: 'public-key-cryptography', text: '공개키 암호화', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: '하이브리드 암호화 모델', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'PGP 전자 서명', level: 2 },
		{ id: 'the-openpgp-standard', text: 'OpenPGP 표준', level: 2 },
		{ id: 'web-of-trust', text: '신뢰 네트워크', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGP 알고리즘 및 키 유형', level: 2 },
		{ id: 'classic-algorithms', text: '클래식 알고리즘', level: 3 },
		{ id: 'modern-algorithms', text: '현대적 알고리즘', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'PGP의 일반적인 활용 사례', level: 2 },
		{ id: 'pgp-today', text: '오늘날의 PGP', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'PGP 시작하기', level: 2 }
	],
	html: `
<h1>PGP란 무엇인가? Pretty Good Privacy 암호화 종합 가이드</h1>

<h2 id="what-is-pgp-encryption">PGP 암호화란?</h2>

<p><strong>PGP(Pretty Good Privacy)</strong>는 데이터 통신에 대해 암호화적 프라이버시와 인증을 제공하는 암호화 프로그램입니다. PGP 암호화는 대칭 키 암호화와 공개키 암호화의 조합을 사용하여, 의도된 수신자만이 읽을 수 있도록 메시지, 파일 및 기타 데이터를 암호화할 수 있게 합니다. Phil Zimmermann이 1991년에 처음 만든 PGP는 세계에서 가장 널리 사용되는 이메일 암호화 표준이 되었으며, RFC 4880에 정의된 <strong>OpenPGP</strong> 사양의 기초가 됩니다. 기밀 이메일 전송, 소프트웨어 발행자 신원 확인 또는 민감한 파일 보호가 필요하든, PGP는 기자, 보안 연구원, 정부 및 일반 사용자가 신뢰하는 검증된 암호화 프레임워크를 제공합니다.</p>

<p>소프트웨어를 설치하지 않고 바로 PGP 암호화를 시도해 보고 싶다면, KeychainPGP는 브라우저에서 완전히 작동하는 <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 제공합니다.</p>

<h2 id="history-of-pgp">PGP의 역사</h2>

<p>Phil Zimmermann은 1991년 6월에 PGP 1.0을 무료 소프트웨어로 공개했습니다. 이는 강력한 암호화가 정부와 군에만 국한되지 않고 모든 시민에게 접근 가능해야 한다는 신념에서 비롯되었습니다. 당시 강력한 암호화는 미국 수출 규정에 따라 군수물자로 분류되었고, Zimmermann은 PGP를 국제적으로 배포한 것에 대해 미국 관세청으로부터 3년간의 형사 수사를 받았습니다. 이 수사는 1996년에 기소 없이 최종 기각되었으며, 이 사건은 디지털 자유의 역사에서 중요한 순간이 되었습니다.</p>

<p>PGP는 여러 상업적 형태를 거쳐 발전했습니다. Zimmermann은 1996년에 PGP Inc.를 설립했고, 1997년에 Network Associates(현 McAfee)에 인수되었으며, 최종적으로 2010년에 Symantec에 인수되었습니다. 이러한 변화 속에서도 기본 암호화 프로토콜은 Internet Engineering Task Force(IETF)에 의해 <strong>OpenPGP</strong>라는 이름으로 표준화되어, 상업적 소유와 관계없이 프로토콜이 개방적이고 상호 운용 가능하도록 보장되었습니다.</p>

<p>OpenPGP 표준의 발표는 누구나 호환되는 구현체를 만들 수 있다는 것을 의미했습니다. 이로 인해 GNU Privacy Guard(GnuPG 또는 GPG)가 탄생했으며, 이는 오늘날에도 가장 널리 사용되는 PGP 도구 중 하나인 무료 오픈소스 구현체입니다. 이러한 구현체들의 차이점에 대해서는 <a href="/ko/docs/pgp-vs-gpg/">PGP vs GPG</a> 가이드를 참조하세요.</p>

<h2 id="how-pgp-encryption-works">PGP 암호화 작동 방식</h2>

<p>PGP 암호화는 정교한 암호화 기술의 조합에 의존합니다. 단일 방법을 사용하는 대신, PGP는 대칭 암호화의 속도와 비대칭(공개키) 암호화의 키 배포 이점을 결합하는 <strong>하이브리드 암호화 모델</strong>을 사용합니다.</p>

<h3 id="public-key-cryptography">공개키 암호화</h3>

<p>PGP의 핵심에는 비대칭 암호화라고도 불리는 <strong>공개키 암호화</strong>가 있습니다. 각 PGP 사용자는 수학적으로 연결된 두 개의 키로 구성된 <strong>키 쌍</strong>을 생성합니다:</p>

<ul>
<li><strong>공개키</strong> — 누구에게나 공개적으로 공유합니다. 다른 사람들은 이 키를 사용하여 당신에게 보내는 메시지를 암호화하고 당신의 전자 서명을 검증합니다.</li>
<li><strong>개인키</strong>(비밀키라고도 함) — 엄격하게 비밀로 유지합니다. 이 키를 사용하여 당신에게 보내진 메시지를 복호화하고 전자 서명을 생성합니다.</li>
</ul>

<p>이 시스템의 근본적인 특성은 공개키로 암호화된 데이터는 해당하는 개인키로만 복호화할 수 있으며, 그 반대도 마찬가지라는 것입니다. 이는 당사자 간에 비밀을 전송하지 않고도 비공개 통신이 가능하게 합니다.</p>

<h3 id="the-hybrid-encryption-model">하이브리드 암호화 모델</h3>

<p>공개키 암호화가 키 배포 문제를 해결하지만, RSA와 같은 비대칭 알고리즘은 대량의 데이터를 암호화하는 데 계산 비용이 큽니다. PGP는 하이브리드 접근 방식을 사용하여 이 문제를 해결합니다:</p>

<ol>
<li><strong>세션 키 생성</strong> — PGP는 각 메시지에 대해 고유한 무작위 <strong>대칭 세션 키</strong>(일반적으로 128비트 또는 256비트)를 생성합니다.</li>
<li><strong>데이터 암호화</strong> — 메시지 내용은 세션 키를 사용하여 빠른 대칭 암호화(예: AES-256)로 암호화됩니다.</li>
<li><strong>세션 키 암호화</strong> — 세션 키 자체는 수신자의 공개키를 사용하여 암호화됩니다(비대칭 연산).</li>
<li><strong>패키징</strong> — 암호화된 메시지와 암호화된 세션 키가 함께 묶여 수신자에게 전송됩니다.</li>
</ol>

<p>수신자가 메시지를 받으면 과정이 반대로 진행됩니다: <strong>개인키</strong>를 사용하여 세션 키를 복호화한 다음, 복호화된 세션 키를 사용하여 메시지 내용을 복호화합니다.</p>

<h2 id="pgp-digital-signatures">PGP 전자 서명</h2>

<p>암호화 외에도 PGP는 두 가지 핵심 기능을 수행하는 <strong>전자 서명</strong>을 제공합니다: <strong>인증</strong>(메시지를 보낸 사람 증명)과 <strong>무결성</strong>(메시지가 전송 중 변조되지 않았음을 증명).</p>

<p>서명 과정은 다음과 같이 작동합니다:</p>

<ol>
<li>PGP는 SHA-256 또는 SHA-512과 같은 알고리즘을 사용하여 메시지 내용의 <strong>암호화 해시</strong>(고정 길이 다이제스트)를 계산합니다.</li>
<li>해시는 발신자의 <strong>개인키</strong>로 암호화되어 전자 서명이 생성됩니다.</li>
<li>서명이 메시지에 첨부됩니다.</li>
</ol>

<p>모든 수신자는 발신자의 <strong>공개키</strong>로 서명을 복호화하여 원래 해시를 얻고, 받은 메시지의 해시를 독립적으로 계산한 다음, 두 해시를 비교하여 서명을 검증할 수 있습니다. 일치하면 메시지가 진본이며 변조되지 않은 것입니다.</p>

<h2 id="the-openpgp-standard">OpenPGP 표준</h2>

<p><strong>OpenPGP</strong>는 PGP 호환 소프트웨어에서 사용하는 메시지 형식, 알고리즘 및 절차를 정의하는 개방 표준입니다. 그 자체가 소프트웨어 제품은 아니며, 모든 개발자가 구현할 수 있는 사양입니다.</p>

<p>참고 문서:</p>

<ul>
<li><strong>RFC 4880</strong>(2007년 11월) — 현재의 주요 OpenPGP 메시지 형식 사양.</li>
<li><strong>RFC 6637</strong>(2012년 6월) — 타원 곡선 암호화(ECC) 지원으로 OpenPGP를 확장.</li>
<li><strong>RFC 9580</strong>(2024년) — Ed25519/X25519 필수 지원, AEAD 암호화 모드 및 개선된 키 지문으로 표준을 현대화하는 최신 개정판.</li>
</ul>

<p>OpenPGP는 상호 운용성을 보장합니다: KeychainPGP로 암호화된 메시지는 GnuPG, Mailvelope 또는 기타 호환 구현체에서 복호화할 수 있습니다.</p>

<h2 id="web-of-trust">신뢰 네트워크</h2>

<p>PGP의 특징적인 기능 중 하나는 공개키의 진위를 확인하기 위한 분산형 <strong>신뢰 네트워크</strong>(Web of Trust) 모델입니다. TLS/SSL에서 사용되는 중앙집중식 인증 기관(CA) 모델과 달리, PGP는 사용자 자신이 서로를 보증할 수 있도록 합니다.</p>

<p>신뢰 네트워크는 <strong>키 서명</strong>을 통해 작동합니다: 누군가의 신원을 확인하고 특정 공개키를 소유하고 있음을 확인하면, 자신의 키로 그 키에 서명합니다. 이 서명은 해당 키가 주장하는 사람에게 속한다고 믿는다는 공개적 선언입니다.</p>

<p><a href="/ko/pgp-online-encrypt/">KeychainPGP</a>와 같은 도구는 직관적인 인터페이스를 통해 키를 직접 다루고, <a href="/ko/docs/clipboard-encryption/">클립보드 암호화</a>를 사용하여 암호화된 메시지와 공개키를 쉽게 공유할 수 있도록 하여 이 과정을 단순화합니다.</p>

<h2 id="pgp-algorithms-and-key-types">PGP 알고리즘 및 키 유형</h2>

<p>PGP는 암호학 분야의 발전에 따라 진화해 온 다양한 암호화 알고리즘을 지원합니다.</p>

<h3 id="classic-algorithms">클래식 알고리즘</h3>

<ul>
<li><strong>RSA(Rivest-Shamir-Adleman)</strong> — PGP 역사에서 가장 많이 배포된 비대칭 알고리즘. 2048비트 RSA 키가 현재 최소 보안 수준으로 간주되며, 장기적 보호를 위해 4096비트 키가 권장됩니다.</li>
<li><strong>DSA(Digital Signature Algorithm)</strong> — 암호화를 위한 ElGamal과 조합하여 서명에 사용됨. 현재는 덜 선호됩니다.</li>
<li><strong>AES(Advanced Encryption Standard)</strong> — 메시지 내용 암호화에 사용되는 주요 대칭 암호화. AES-128과 AES-256이 지원됩니다.</li>
<li><strong>SHA-2(SHA-256, SHA-384, SHA-512)</strong> — 전자 서명의 다이제스트 계산에 사용되는 암호화 해시 함수.</li>
</ul>

<h3 id="modern-algorithms">현대적 알고리즘</h3>

<p>최신 세대의 OpenPGP 구현체는 RSA와 동등한 보안을 훨씬 작은 키 크기로 제공하는 <strong>타원 곡선 암호화(ECC)</strong>를 지원합니다:</p>

<ul>
<li><strong>Ed25519</strong> — Curve25519 기반의 전자 서명 알고리즘. 빠르고 컴팩트한 서명을 생성합니다. RFC 9580에서 권장됩니다.</li>
<li><strong>X25519(Curve25519 ECDH)</strong> — 키 교환(암호화)에 사용됩니다. 강력한 보안 속성과 우수한 성능을 제공합니다.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — NIST에서 표준화한 타원 곡선. OpenPGP에서 지원되지만 일반적으로 Curve25519 기반 알고리즘보다 덜 선호됩니다.</li>
</ul>

<p>KeychainPGP와 같은 현대적 도구는 이러한 최신 알고리즘을 지원하여 Ed25519와 X25519를 사용한 키 생성을 간단하고 직관적으로 만듭니다.</p>

<h2 id="common-use-cases-for-pgp">PGP의 일반적인 활용 사례</h2>

<ul>
<li><strong>보안 이메일</strong> — 원래이자 가장 잘 알려진 활용 사례. PGP를 통해 이메일 내용을 암호화하고 메시지에 서명하여 진위를 증명할 수 있습니다.</li>
<li><strong>파일 암호화</strong> — PGP는 안전한 저장 또는 전송을 위해 개별 파일이나 전체 아카이브를 암호화할 수 있습니다.</li>
<li><strong>소프트웨어 검증</strong> — 오픈소스 프로젝트는 정기적으로 PGP 키로 릴리스에 서명합니다. 사용자는 이 서명을 검증하여 다운로드의 진위를 확인할 수 있습니다.</li>
<li><strong>보안 메시징</strong> — PGP는 모든 텍스트 메시지를 암호화하는 데 사용할 수 있으며, 종단간 암호화를 제공하지 않는 플랫폼에서 특히 유용합니다.</li>
<li><strong>신원 확인</strong> — PGP 키 지문은 검증 가능한 디지털 신원으로 사용됩니다. GitHub의 개발자는 PGP로 커밋에 서명할 수 있습니다.</li>
<li><strong>문서 서명</strong> — 법적 워크플로우에서 부인 방지를 위해 PGP 서명을 사용하기도 합니다.</li>
</ul>

<h2 id="pgp-today">오늘날의 PGP</h2>

<p>탄생 후 30여 년이 지난 지금, PGP는 사용 가능한 가장 중요한 암호화 도구 중 하나로 남아 있습니다. OpenPGP 표준은 계속 진화하고 있으며, RFC 9580에서 현대적 타원 곡선 알고리즘 필수 지원과 AEAD 암호화 모드를 포함한 중요한 현대화가 도입되었습니다.</p>

<p>PGP 도구 생태계도 크게 풍부해졌습니다. GnuPG는 명령줄 사용을 위한 참조 구현체로 남아 있습니다. KeychainPGP와 같은 현대적 도구는 네이티브 데스크톱 앱(Windows, macOS, Linux), Android 앱, 스크립팅을 위한 CLI 및 브라우저 내 웹 앱을 제공합니다 — 모두 동일한 Rust 기반 Sequoia-PGP 엔진 위에 구축되었습니다.</p>

<h2 id="getting-started-with-pgp">PGP 시작하기</h2>

<p>PGP 암호화를 시작할 준비가 되셨나요? 다음 단계를 추천합니다:</p>

<ol>
<li><strong>브라우저에서 시도하기</strong> — KeychainPGP <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 사용하여 아무것도 설치하지 않고 키 쌍을 생성하거나, 메시지를 암호화하거나, 서명을 검증하세요.</li>
<li><strong>초보자 가이드 읽기</strong> — 암호화가 처음이라면, <a href="/ko/docs/pgp-for-beginners/">PGP 초보자 가이드</a>가 단계별로 안내합니다.</li>
<li><strong>실용적 워크플로우 배우기</strong> — <a href="/ko/docs/how-to-use-pgp/">PGP 사용 방법</a> 가이드에서 키 생성, 암호화 및 복호화, 키링 관리 및 모범 사례를 다룹니다.</li>
<li><strong>클립보드 암호화 이해하기</strong> — 클립보드에서 직접 텍스트를 암호화하고 복호화하는 <a href="/ko/docs/clipboard-encryption/">PGP 클립보드 암호화</a>를 알아보세요.</li>
<li><strong>도구 파악하기</strong> — 워크플로우에 적합한 도구를 선택하기 위해 <a href="/ko/docs/pgp-vs-gpg/">PGP와 GPG의 차이점</a>을 이해하세요.</li>
</ol>

<p>PGP 암호화는 30년 이상 민감한 통신을 보호해 왔습니다. 현대적 도구와 표준으로, 그 어느 때보다 접근하기 쉬워졌습니다.</p>
`
};

export default doc;
