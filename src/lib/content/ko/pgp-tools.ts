import type { DocContent } from '../types';

const doc: DocContent = {
	title: '2026년 최고의 PGP 도구 및 암호화 소프트웨어 — 종합 가이드',
	description: 'PGP 도구 및 암호화 소프트웨어 종합 가이드. 데스크톱, 웹, 모바일 및 CLI OpenPGP 도구를 비교하여 필요에 맞는 도구를 찾으세요.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'PGP 도구란?', level: 2 },
		{ id: 'desktop-pgp-software', text: '데스크톱 PGP 소프트웨어', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG(GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: '온라인 PGP 도구', level: 2 },
		{ id: 'mobile-pgp-tools', text: '모바일 PGP 도구', level: 2 },
		{ id: 'cli-pgp-tools', text: '명령줄 PGP 도구', level: 2 },
		{ id: 'email-pgp-integration', text: '이메일 PGP 통합', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'PGP 도구 비교', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: '적합한 PGP 도구 선택', level: 2 },
		{ id: 'why-keychainpgp', text: 'KeychainPGP를 선택하는 이유', level: 2 },
		{ id: 'getting-started', text: '시작하기', level: 2 }
	],
	html: `
<h1>2026년 최고의 PGP 도구 및 암호화 소프트웨어</h1>

<p>오늘날 메시지 암호화, 파일 서명 및 OpenPGP 키 관리를 위한 다양한 PGP 도구가 사용 가능합니다. 이 도구들은 데스크톱 앱, 웹 유틸리티, 모바일 앱, 명령줄 인터페이스 및 이메일 플러그인까지 포함합니다. 이 가이드는 PGP 소프트웨어의 각 주요 카테고리를 다루어 정보에 입각한 선택을 할 수 있도록 도와줍니다.</p>

<h2 id="what-are-pgp-tools">PGP 도구란?</h2>

<p>PGP 도구는 공개키 암호화를 위한 <a href="/ko/docs/what-is-pgp/">OpenPGP 표준</a>(RFC 4880 및 그 후속 버전)을 구현하는 소프트웨어 앱입니다. 키 쌍 생성, 메시지 암호화 및 복호화, 전자 서명 생성 및 검증, 키링 관리가 가능합니다. <a href="/ko/docs/pgp-vs-gpg/">PGP와 GPG의 차이점</a>을 이해하면 왜 이렇게 다양한 도구가 존재하는지 명확해집니다.</p>

<h2 id="desktop-pgp-software">데스크톱 PGP 소프트웨어</h2>

<h3 id="gnupg-gpg">GnuPG(GPG)</h3>

<p><strong>GnuPG</strong>(GNU Privacy Guard)는 OpenPGP 표준의 오픈소스 참조 구현체입니다. 거의 모든 운영 체제에서 사용 가능하며, 매우 강력하지만 주로 명령줄 기반입니다. RSA, DSA, ECDSA, EdDSA 및 다양한 대칭 암호를 지원합니다.</p>

<ul>
<li><strong>플랫폼:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>인터페이스:</strong> 명령줄(선택적 GUI 프론트엔드 사용 가능)</li>
<li><strong>라이선스:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong>은 GnuPG와 Kleopatra라는 Windows 네이티브 그래픽 인터페이스를 번들로 제공합니다. 인증서 관리, Windows 탐색기 통합을 통한 파일 암호화 및 OpenPGP 외에 S/MIME 지원을 제공합니다.</p>

<ul>
<li><strong>플랫폼:</strong> Windows</li>
<li><strong>라이선스:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong>는 Gpg4win의 macOS 버전입니다. 키 관리를 위한 GPG Keychain, GPGServices 컨텍스트 메뉴 및 Apple Mail 통합을 위한 GPG Mail을 포함합니다.</p>

<ul>
<li><strong>플랫폼:</strong> macOS</li>
<li><strong>라이선스:</strong> 오픈소스(메일 플러그인 유료)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong>는 PGP 암호화에 근본적으로 다른 접근 방식을 취합니다. GnuPG를 그래픽 인터페이스로 감싸는 대신, Rust로 작성된 <strong>Sequoia-PGP</strong> 라이브러리를 사용하여 현대적 클립보드 기반 워크플로우를 제공합니다. 텍스트를 복사하고, 글로벌 단축키(<code>Ctrl+Shift+E</code>로 암호화, <code>Ctrl+Shift+D</code>로 복호화)를 누르고, 결과를 붙여넣으세요 — 시스템의 모든 앱에서 작동합니다.</p>

<ul>
<li><strong>플랫폼:</strong> Windows, macOS, Linux, Android, 웹, CLI</li>
<li><strong>인터페이스:</strong> 시스템 트레이 GUI + 글로벌 단축키 + CLI</li>
<li><strong>라이선스:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">온라인 PGP 도구</h2>

<p><a href="/ko/pgp-online-encrypt/">KeychainPGP 웹 앱</a>은 동일한 Rust 기반 Sequoia-PGP 엔진을 WebAssembly로 컴파일하여, 모든 암호화 작업이 브라우저에서 로컬로 수행됩니다. 서버로 데이터가 전송되지 않습니다. <strong>Mailvelope</strong>는 Gmail과 Outlook.com과 같은 웹메일 제공업체에 OpenPGP 암호화를 직접 통합하는 브라우저 확장 프로그램입니다.</p>

<h2 id="mobile-pgp-tools">모바일 PGP 도구</h2>

<p><strong>OpenKeychain</strong>은 K-9 Mail과 통합되는 Android용 성숙한 오픈소스 OpenPGP 앱입니다. <strong>KeychainPGP for Android</strong>는 Ed25519/X25519 키 생성과 데스크톱 앱과의 QR 코드 키 동기화를 포함한 동일한 현대적 암호화를 모바일에 제공합니다.</p>

<h2 id="cli-pgp-tools">명령줄 PGP 도구</h2>

<p><strong>GnuPG</strong>(<code>gpg</code>)가 지배적인 CLI 도구입니다. <strong>KeychainPGP</strong>는 키 생성, 암호화, 복호화, 서명, 검증, 키 검사 및 키링 관리를 위한 명령이 있는 자체 CLI(<code>keychainpgp</code>)를 제공합니다. <strong>Sequoia-PGP</strong>는 또 다른 현대적 Rust 기반 CLI인 <code>sq</code>도 제공합니다.</p>

<h2 id="email-pgp-integration">이메일 PGP 통합</h2>

<p><strong>Mozilla Thunderbird</strong>는 버전 78 이후 내장 OpenPGP 지원을 제공합니다. <strong>ProtonMail</strong>은 내부적으로 OpenPGP를 사용하여 종단간 암호화를 제공하지만, 모든 키 관리를 추상화합니다.</p>

<h2 id="pgp-tools-comparison">PGP 도구 비교</h2>

<table>
<tr><th>도구</th><th>플랫폼</th><th>인터페이스</th><th>기본 키</th><th>오픈소스</th><th>적합 대상</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>예(GPLv3)</td><td>고급 사용자, 스크립팅</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>예(GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>부분적</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/웹/CLI</td><td>GUI + 단축키 + CLI</td><td>Ed25519/X25519</td><td>예(MIT/Apache-2.0)</td><td>클립보드 워크플로우</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>브라우저 확장</td><td>웹메일 오버레이</td><td>RSA-4096</td><td>예(AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>네이티브 GUI</td><td>RSA-3072</td><td>예(GPLv3)</td><td>Android 키 관리</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>이메일 클라이언트</td><td>RSA-3072</td><td>예(MPL 2.0)</td><td>암호화된 이메일</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>웹/iOS/Android</td><td>웹메일</td><td>X25519</td><td>부분적</td><td>설정 불필요 이메일</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">적합한 PGP 도구 선택</h2>

<h3>사용 편의성</h3>
<p>GnuPG와 같은 전통적 도구는 기술적 사용자를 위해 설계되었습니다. KeychainPGP는 알고리즘 선택과 설정 파일을 제거합니다 — 키를 생성하고 즉시 암호화를 시작하세요.</p>

<h3>보안 및 암호화 기본값</h3>
<p>KeychainPGP 및 Sequoia의 <code>sq</code>와 같은 현대적 도구는 기본으로 <strong>Ed25519/X25519</strong>를 사용하며, 훨씬 작은 키로 동등하거나 우수한 보안을 제공합니다. 기반 라이브러리도 중요합니다: Sequoia-PGP(Rust)는 강력한 메모리 안전 보장을 제공합니다.</p>

<h3>플랫폼 지원</h3>
<p>KeychainPGP는 일관된 인터페이스로 Windows, macOS, Linux, Android 및 웹을 지원합니다. GnuPG는 어디서나 사용 가능하지만 각 플랫폼에서 다른 GUI 프론트엔드가 필요합니다.</p>

<h2 id="why-keychainpgp">KeychainPGP를 선택하는 이유</h2>

<p>KeychainPGP는 수십 년간 PGP 암호화를 접근하기 어렵게 만든 문제를 해결하기 위해 설계되었습니다:</p>

<ul>
<li><strong>클립보드 워크플로우.</strong> 하나의 앱에 통합하는 대신, KeychainPGP는 <em>모든</em> 앱에서 작동합니다. 텍스트를 복사하고, 하나의 단축키로 암호화 또는 복호화하고, 결과를 붙여넣으세요.</li>
<li><strong>기본으로 현대적 암호화.</strong> <strong>Ed25519</strong> 서명 키와 <strong>X25519</strong> 암호화 서브키가 자동으로 사용됩니다.</li>
<li><strong>단일 코드베이스의 크로스 플랫폼.</strong> Tauri로 구축된 데스크톱 앱, WebAssembly로 컴파일된 웹 앱. Windows, macOS, Linux, Android 또는 브라우저에서 동일한 인터페이스와 암호화 동작.</li>
<li><strong>Sequoia-PGP 기반.</strong> 전체 취약점 클래스를 제거하는 메모리 안전 보장이 있는 Rust 암호화 엔진.</li>
<li><strong>진정한 무료 오픈소스.</strong> 유료 등급, 계정, 원격 분석 없는 MIT / Apache-2.0 라이선스.</li>
</ul>

<h2 id="getting-started">시작하기</h2>

<ul>
<li><strong>설치 없이 지금 시도:</strong> 브라우저에서 <a href="/ko/pgp-online-encrypt/">KeychainPGP 온라인 PGP 도구</a>를 여세요.</li>
<li><strong>기본 배우기:</strong> <a href="/ko/docs/what-is-pgp/">PGP란 무엇인가?</a>를 읽으세요.</li>
<li><strong>생태계 이해:</strong> <a href="/ko/docs/pgp-vs-gpg/">PGP vs GPG</a> 기사에서 표준, 프로토콜 및 도구가 어떻게 연결되는지 설명합니다.</li>
<li><strong>옵션 비교:</strong> <a href="/ko/blog/best-pgp-tools-2026/">2026년 최고의 PGP 도구</a> 순위 또는 <a href="/ko/blog/pgp-software-comparison/">PGP 소프트웨어 종합 비교</a>를 참조하세요.</li>
<li><strong>KeychainPGP 다운로드:</strong> <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub 릴리스</a>에서 데스크톱 앱을 받으세요.</li>
</ul>
`
};

export default doc;
