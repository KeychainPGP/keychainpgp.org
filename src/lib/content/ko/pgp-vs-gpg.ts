import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP vs GPG: PGP와 GPG의 차이점은 무엇인가?',
	description: 'PGP와 GPG의 차이점을 알아보세요. Pretty Good Privacy, GnuPG 및 OpenPGP 표준을 비교하여 적합한 암호화 도구를 찾으세요.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: '차이점은 무엇인가?', level: 2 },
		{ id: 'what-is-pgp', text: 'PGP란?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'GPG(GnuPG)란?', level: 2 },
		{ id: 'what-is-openpgp', text: 'OpenPGP란?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'PGP vs GPG 비교표', level: 2 },
		{ id: 'key-differences-explained', text: '주요 차이점 설명', level: 2 },
		{ id: 'which-should-you-use', text: '어떤 것을 사용해야 하나?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'KeychainPGP의 위치', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP vs GPG: PGP와 GPG의 차이점은 무엇인가?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">PGP와 GPG의 차이점은 무엇인가?</h2>

<p>PGP와 GPG의 차이점은 출처와 라이선스에 있습니다. <strong>PGP</strong>(Pretty Good Privacy)는 1991년 Phil Zimmermann이 만든 원래의 독점 암호화 프로그램입니다. <strong>GPG</strong>(GNU Privacy Guard, GnuPG라고도 함)는 GNU 프로젝트의 일환으로 개발된 동일한 개념의 무료 오픈소스 재구현체입니다. 두 프로그램 모두 <strong>OpenPGP</strong> 표준을 구현하므로, 호환되는 암호화 메시지를 생성하고 서로의 키와 함께 작동할 수 있습니다. 실제로 GPG는 무료이고, 활발히 유지되며, 모든 주요 운영 체제에서 사용할 수 있기 때문에 오늘날 대부분의 사람들이 사용하는 도구입니다. 암호화가 처음이라면, <a href="/ko/docs/pgp-for-beginners/">PGP 초보자 가이드</a>에서 기본 개념을 단계별로 소개합니다.</p>

<h2 id="what-is-pgp">PGP란?</h2>

<p>PGP는 <strong>Pretty Good Privacy</strong>의 약자입니다. Phil Zimmermann이 1991년에 첫 번째 버전을 작성하여 강력한 암호화가 필요한 활동가와 일반 시민을 위한 무료 도구로 공개했습니다. 이 소프트웨어는 대칭 키 암호화와 공개키 암호화를 결합했습니다.</p>

<p>3년간의 연방 수사(1996년에 기각) 후, Zimmermann은 PGP Inc.를 설립했습니다. 이 회사는 여러 차례 소유권이 변경되었습니다: 1997년 Network Associates, 2002년 PGP Corporation, 그리고 2010년 Symantec(현 Broadcom). 오늘날 PGP는 주로 기업을 대상으로 한 상용 제품 제품군으로 존재합니다.</p>

<p>기반 기술에 대해 더 알아보려면 <a href="/ko/docs/what-is-pgp/">PGP란 무엇이고 어떻게 작동하는가</a>에 대한 종합 기사를 참조하세요.</p>

<h2 id="what-is-gpg-gnupg">GPG(GnuPG)란?</h2>

<p>GPG, 즉 <strong>GNU Privacy Guard(GnuPG)</strong>는 OpenPGP 표준의 무료 오픈소스 구현체입니다. Werner Koch가 1997년에 독일 정부의 자금 지원으로 프로젝트를 시작하여 1999년에 버전 1.0을 발표했습니다. GnuPG는 독점 PGP 소프트웨어에 대한 완전한 무료 대안을 제공하기 위해 특별히 만들어졌습니다.</p>

<p>GnuPG는 GNU 프로젝트의 일부이며 GNU 일반 공중 사용 허가서(GPL) 하에 라이선스됩니다. 대부분의 Linux 배포판에 기본적으로 포함되어 있습니다. <code>gpg</code> 명령줄 도구가 대부분의 개발자와 시스템 관리자가 상호 작용하는 인터페이스입니다. 사용 가능한 도구에 대한 개요는 <a href="/ko/docs/pgp-tools/">PGP 도구 비교</a>를 참조하세요.</p>

<h2 id="what-is-openpgp">OpenPGP란?</h2>

<p><strong>OpenPGP</strong>는 제품도 소프트웨어도 아닙니다. PGP 호환 도구가 따라야 하는 메시지 형식, 키 형식 및 암호화 절차를 정의하는 개방 표준입니다. IETF는 1998년에 원래 사양을 <strong>RFC 2440</strong>으로 발표했으며, 가장 많이 참조되는 버전은 <strong>RFC 4880</strong>(2007)입니다. 주요 업데이트인 <strong>RFC 9580</strong>(2024)은 Ed25519 지원과 AEAD 암호화로 표준을 현대화합니다.</p>

<p>OpenPGP의 존재가 상호 운용성을 가능하게 합니다. PGP와 GPG가 동일한 표준을 구현하기 때문에, GPG로 암호화된 메시지는 PGP로 복호화할 수 있으며 그 반대도 마찬가지입니다.</p>

<h2 id="pgp-vs-gpg-comparison-table">PGP vs GPG 비교표</h2>

<table>
<tr><th>특성</th><th>PGP(Broadcom)</th><th>GPG(GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>유형</strong></td><td>상용 소프트웨어</td><td>자유/오픈소스 소프트웨어</td><td>개방 표준</td></tr>
<tr><td><strong>라이선스</strong></td><td>독점</td><td>GPL(무료)</td><td>IETF 사양</td></tr>
<tr><td><strong>비용</strong></td><td>유료 라이선스</td><td>무료</td><td>해당 없음</td></tr>
<tr><td><strong>플랫폼</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>해당 없음</td></tr>
<tr><td><strong>GUI 포함</strong></td><td>예(기업 콘솔)</td><td>아니요(타사 GUI 사용 가능)</td><td>해당 없음</td></tr>
<tr><td><strong>소스 공개</strong></td><td>아니요</td><td>예</td><td>공개 표준</td></tr>
</table>

<h2 id="key-differences-explained">주요 차이점 설명</h2>

<h3>라이선스 및 비용</h3>

<p>PGP는 상용 라이선스로 판매되는 독점 소프트웨어입니다. GPG는 GPL 하에 발표되어 누구나 무료로 다운로드, 사용, 수정 및 재배포할 수 있습니다. 개인, 소규모 팀 및 오픈소스 프로젝트의 경우 비용 면에서 GPG가 분명한 선택입니다.</p>

<h3>플랫폼 지원</h3>

<p>GnuPG는 사실상 모든 Unix 시스템에서 작동하며 Windows와 macOS용 공식 빌드가 있습니다. 크로스 플랫폼이 필요한 경우, KeychainPGP와 같은 현대적 도구는 단일 코드베이스에서 Windows, macOS, Linux 및 Android용 네이티브 빌드를 제공합니다.</p>

<h3>사용자 경험</h3>

<p>상용 PGP는 기업 배포를 위한 그래픽 인터페이스를 포함합니다. GnuPG는 기본적으로 명령줄 도구입니다. KeychainPGP와 같은 도구는 명령줄 옵션을 기억하지 않고도 키 관리, 암호화, 복호화 및 서명을 처리하는 네이티브 그래픽 인터페이스를 제공합니다. <a href="/ko/pgp-online-encrypt/">온라인 PGP 암호화 도구</a>로 브라우저에서 직접 PGP 암호화를 시도해 볼 수 있습니다.</p>

<h2 id="which-should-you-use">어떤 것을 사용해야 하나?</h2>

<ul>
<li><strong>기존 Broadcom/Symantec 인프라가 있는 기업:</strong> 상용 PGP가 가장 쉬운 경로일 수 있습니다.</li>
<li><strong>개발자 및 시스템 관리자:</strong> GnuPG는 대부분의 서버에 기본 설치된 표준 도구입니다.</li>
<li><strong>GUI를 원하는 프라이버시 의식적 사용자:</strong> KeychainPGP와 같은 현대적 OpenPGP 앱을 고려하세요.</li>
<li><strong>웹 또는 빠른 암호화 필요:</strong> <a href="/ko/pgp-online-encrypt/">온라인 PGP 암호화 도구</a>로 아무것도 설치하지 않고 일회성 작업을 처리할 수 있습니다.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">KeychainPGP의 위치</h2>

<p><a href="/">KeychainPGP</a>는 Rust로 처음부터 작성된 OpenPGP 라이브러리인 <strong>Sequoia-PGP</strong>를 사용하여 OpenPGP 표준을 구현하는 현대적 오픈소스 데스크톱 앱입니다. PGP(상용 제품)도 GPG(GnuPG)도 아닙니다. OpenPGP 생태계에서 두 가지와 공존하는 독립적인 구현체입니다.</p>

<p>KeychainPGP를 고려해야 할 주요 이유:</p>

<ul>
<li><strong>크로스 플랫폼:</strong> Windows, macOS, Linux 및 Android용 네이티브 빌드, 웹 앱 및 CLI</li>
<li><strong>현대적 암호화:</strong> Curve25519/Ed25519 및 AEAD 지원이 있는 Sequoia-PGP 기반</li>
<li><strong>오픈소스:</strong> MIT / Apache-2.0 이중 라이선스, 완전히 감사 가능</li>
<li><strong>사용자 친화적:</strong> 클립보드 워크플로우 및 글로벌 단축키가 있는 그래픽 인터페이스</li>
<li><strong>자동화를 위한 CLI:</strong> <code>keychainpgp</code> CLI는 키 생성, 암호화, 복호화, 서명, 검증 및 키링 관리를 지원</li>
<li><strong>OpenPGP 호환:</strong> 키와 메시지가 GPG, PGP 및 기타 모든 OpenPGP 도구와 상호 운용 가능</li>
</ul>

<h2 id="frequently-asked-questions">자주 묻는 질문</h2>

<h3>GPG는 PGP와 같은 것인가요?</h3>

<p>아닙니다. GPG(GnuPG)와 PGP는 다른 사람이 만든 별개의 소프트웨어입니다. PGP는 1991년 Phil Zimmermann이 만들었으며 현재 Broadcom의 상용 제품입니다. GPG는 1997년 Werner Koch가 무료 오픈소스 대안으로 만들었습니다. 둘 다 OpenPGP 표준을 구현하므로 기능적으로 호환됩니다.</p>

<h3>GPG 키와 PGP 키는 함께 작동하나요?</h3>

<p>네. GPG와 PGP는 IETF 표준에서 정의된 OpenPGP 키 형식을 사용합니다. GPG에서 공개키를 내보내서 PGP 또는 KeychainPGP와 같은 OpenPGP 호환 도구에 가져올 수 있습니다.</p>

<h3>2026년에도 GPG가 안전한가요?</h3>

<p>GnuPG는 안전하고 활발히 유지되는 도구입니다. Ed25519와 같은 현대적 키 유형을 사용하고, 소프트웨어를 최신 상태로 유지하고, 키 관리 모범 사례를 따르세요. 단계별 가이드는 <a href="/ko/docs/pgp-for-beginners/">PGP 초보자 가이드</a>를 참조하세요.</p>

<h3>OpenPGP는 무엇을 의미하나요?</h3>

<p>OpenPGP는 PGP 호환 암호화가 어떻게 작동하는지를 정의하는 IETF에서 발표한 개방 표준입니다. 메시지 형식, 키 형식, 알고리즘 요구 사항 및 서명 구조를 지정합니다.</p>

<h3>KeychainPGP를 사용하려면 PGP나 GPG가 필요한가요?</h3>

<p>아닙니다. KeychainPGP는 PGP 또는 GnuPG 설치에 의존하지 않는 독립 실행형 앱입니다. Rust로 작성된 OpenPGP 표준의 독립적 구현체인 Sequoia-PGP 라이브러리를 사용합니다. 그러나 KeychainPGP에서 생성된 키와 암호화된 메시지는 GPG 및 PGP와 완전히 호환됩니다.</p>
`
};

export default doc;
