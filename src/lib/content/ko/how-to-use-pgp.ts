import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP 사용 방법: 단계별 암호화 튜토리얼 (2026)',
	description: 'PGP 암호화 사용법을 단계별로 배우세요. 키 생성, 메시지 암호화 및 복호화, 전자 서명 및 데이터 검증을 이 종합 PGP 튜토리얼에서 다룹니다.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'PGP 사용 방법', level: 1 },
		{ id: 'what-you-need-before-you-start', text: '시작하기 전에 필요한 것', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: '1단계: 키 쌍 생성', level: 2 },
		{ id: 'step-2-share-your-public-key', text: '2단계: 공개키 공유', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: '3단계: 연락처의 공개키 가져오기', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: '4단계: 메시지 암호화', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: '5단계: 메시지 복호화', level: 2 },
		{ id: 'step-6-sign-a-message', text: '6단계: 메시지 서명', level: 2 },
		{ id: 'step-7-verify-a-signature', text: '7단계: 서명 검증', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGP 클립보드 워크플로우', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: '웹 앱 vs 데스크톱 앱', level: 2 },
		{ id: 'frequently-asked-questions', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP 사용 방법</h1>

<p>PGP를 사용하려면 키 쌍(공개키와 개인키)을 생성하고, 통신하려는 사람에게 공개키를 공유하고, 상대방의 공개키를 가져온 다음, 이 키들을 사용하여 메시지를 암호화, 복호화, 서명 및 검증합니다. PGP 암호화는 의도된 수신자만이 메시지를 읽을 수 있도록 보장하며, 전자 서명은 메시지가 실제로 당신이 보낸 것임을 증명합니다. <a href="/ko/pgp-online-encrypt/">KeychainPGP</a>와 같은 도구는 클립보드 기반 워크플로우를 통해 이 과정을 접근 가능하게 만듭니다 — 명령줄이 필요 없습니다.</p>

<p>이 PGP 튜토리얼은 첫 키 쌍 생성부터 암호화된 메시지 송수신까지 각 단계를 안내합니다. 공개키 암호화 개념이 처음이라면 먼저 <a href="/ko/docs/what-is-pgp/">PGP란 무엇인가?</a> 또는 <a href="/ko/docs/pgp-for-beginners/">PGP 초보자 가이드</a>를 읽어보세요.</p>

<hr>

<h2 id="what-you-need-before-you-start">시작하기 전에 필요한 것</h2>

<p>PGP로 첫 메시지를 암호화하기 전에 PGP 앱이 필요합니다:</p>

<ul>
<li><strong>KeychainPGP 웹 앱</strong> — 모든 최신 브라우저에서 <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 열어보세요. Rust에서 컴파일된 WebAssembly를 통해 모든 것이 로컬에서 작동합니다. 설치 불필요, 계정 불필요, 서버로 전송되는 데이터 없음.</li>
<li><strong>KeychainPGP 데스크톱 앱</strong> — <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub 릴리스 페이지</a>에서 Windows, macOS, Linux 또는 Android용 네이티브 앱을 다운로드하세요. 데스크톱 앱은 글로벌 단축키, 시스템 트레이 통합, 클립보드 자동 지우기 및 QR 코드 동기화를 추가합니다.</li>
<li><strong>KeychainPGP CLI</strong> — <code>keychainpgp</code> CLI는 키 생성, 암호화, 복호화, 서명, 검증 및 키링 관리를 위한 명령을 제공합니다. 스크립팅 및 자동화에 이상적입니다.</li>
<li><strong>GnuPG(GPG)</strong> — 전통적인 명령줄 도구. 강력하지만 터미널에 익숙해야 합니다. 자세한 비교는 <a href="/ko/docs/pgp-vs-gpg/">PGP vs GPG</a>를 참조하세요.</li>
</ul>

<blockquote><p><strong>팁:</strong> 아무것도 설치하지 않고 바로 PGP 암호화를 시도하고 싶다면, <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 열고 이 튜토리얼을 따라하세요.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">1단계: PGP 키 쌍 생성</h2>

<p>PGP 키 쌍은 수학적으로 연결된 두 개의 키로 구성됩니다:</p>

<ul>
<li><strong>공개키</strong> — 자유롭게 공유합니다. 누구나 이 키를 사용하여 당신에게 보내는 메시지를 암호화하거나 당신의 서명을 검증할 수 있습니다.</li>
<li><strong>개인키</strong> — 비밀로 유지합니다. 공개키로 암호화된 메시지를 복호화하고 전자 서명을 생성합니다.</li>
</ul>

<h3>KeychainPGP에서 키 생성</h3>

<ol>
<li>KeychainPGP(웹 앱 또는 데스크톱 앱)를 엽니다.</li>
<li><strong>키</strong> 탭으로 이동합니다.</li>
<li><strong>새 키 생성</strong>을 클릭합니다.</li>
<li>이름과 이메일 주소를 입력합니다.</li>
<li><strong>생성</strong>을 클릭합니다. KeychainPGP는 <strong>Ed25519 + X25519</strong> 키 쌍을 생성합니다 — OpenPGP에서 사용 가능한 가장 현대적이고 안전한 알고리즘입니다.</li>
</ol>

<h3>GPG(명령줄)로 키 생성</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>키 유형(RSA 또는 ECC), 크기 및 만료 기간을 선택합니다. 현대적 보안을 위해 GPG 버전이 지원하는 경우 Ed25519를 선택하세요.</p>

<hr>

<h2 id="step-2-share-your-public-key">2단계: 공개키 공유</h2>

<p>공개키는 <strong>ASCII-armored</strong> 형식의 텍스트 블록입니다. 어디서나 공유할 수 있습니다:</p>

<ul>
<li><strong>이메일</strong> — 이메일 본문에 붙여넣거나 <code>.asc</code> 파일로 첨부합니다.</li>
<li><strong>메시징 앱</strong> — Signal, WhatsApp, Matrix 또는 모든 채팅 플랫폼을 통해 전송합니다.</li>
<li><strong>웹사이트</strong> — 개인 사이트, GitHub 프로필 또는 Twitter 프로필에 게시합니다.</li>
<li><strong>키 서버</strong> — <code>keys.openpgp.org</code>과 같은 공개 키 서버에 업로드합니다.</li>
</ul>

<p><strong>중요:</strong> <strong>공개</strong>키만 공유하세요. 어떤 상황에서도 개인키를 다른 사람과 공유하지 마세요.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">3단계: 연락처의 공개키 가져오기</h2>

<p>누군가에게 암호화된 메시지를 보내려면 먼저 상대방의 공개키가 필요합니다. 연락처에게 ASCII-armored 공개키를 보내달라고 요청하거나, 키 서버에서 검색하세요.</p>

<h3>KeychainPGP에서 키 가져오기</h3>

<ol>
<li>연락처의 공개키 블록을 클립보드에 복사합니다.</li>
<li>KeychainPGP를 열고 <strong>키</strong> 탭으로 이동합니다.</li>
<li><strong>키 가져오기</strong>를 클릭하고 키를 붙여넣습니다.</li>
<li>연락처가 이름과 이메일과 함께 키 목록에 표시됩니다.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">4단계: 메시지 암호화</h2>

<h3>KeychainPGP에서 암호화(웹 또는 데스크톱)</h3>

<ol>
<li><strong>암호화</strong> 탭으로 이동합니다.</li>
<li>암호화하려는 메시지를 입력하거나 붙여넣습니다.</li>
<li>키 목록에서 수신자를 선택합니다.</li>
<li><strong>클립보드로 암호화</strong>를 클릭합니다. 암호화된 메시지가 클립보드에 복사됩니다.</li>
<li>암호화된 메시지를 이메일, 채팅 또는 다른 통신 채널에 붙여넣습니다.</li>
</ol>

<h3>데스크톱 단축키로 암호화</h3>

<p>KeychainPGP 데스크톱 앱의 <a href="/ko/docs/clipboard-encryption/">클립보드 워크플로우</a>를 사용하면 과정이 더 빠릅니다:</p>

<ol>
<li>아무 앱에서 메시지를 입력합니다.</li>
<li>텍스트를 선택하고 복사합니다(<code>Ctrl+C</code>).</li>
<li><strong><code>Ctrl+Shift+E</code></strong>를 누르면 — KeychainPGP가 클립보드 내용을 암호화합니다.</li>
<li>암호화된 메시지를 붙여넣습니다(<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">5단계: 메시지 복호화</h2>

<h3>KeychainPGP에서 복호화(웹 또는 데스크톱)</h3>

<ol>
<li>암호화된 메시지 블록 전체를 복사합니다.</li>
<li>KeychainPGP의 <strong>복호화</strong> 탭으로 이동합니다.</li>
<li>암호화된 텍스트를 붙여넣습니다.</li>
<li><strong>복호화</strong>를 클릭합니다. 평문이 즉시 나타납니다.</li>
</ol>

<h3>데스크톱 단축키로 복호화</h3>

<ol>
<li>암호화된 메시지 블록을 선택하고 복사합니다(<code>Ctrl+C</code>).</li>
<li><strong><code>Ctrl+Shift+D</code></strong>를 누르면 — KeychainPGP가 클립보드 내용을 복호화합니다.</li>
<li>평문이 클립보드에서 암호화된 텍스트를 대체합니다. 필요한 곳에 붙여넣습니다.</li>
</ol>

<p>데스크톱 앱에는 <strong>클립보드 자동 지우기</strong> 기능도 있습니다: 30초 후 복호화된 텍스트가 클립보드에서 자동으로 삭제됩니다.</p>

<hr>

<h2 id="step-6-sign-a-message">6단계: 메시지 서명</h2>

<p>PGP 전자 서명은 두 가지를 증명합니다:</p>

<ol>
<li><strong>인증</strong> — 메시지가 서명 키의 소유자에 의해 작성되었음.</li>
<li><strong>무결성</strong> — 메시지가 서명된 이후 변조되지 않았음.</li>
</ol>

<p>서명은 메시지를 암호화하지 않습니다. 누구나 서명된 메시지를 읽을 수 있지만, 메시지가 당신에게서 온 것이고 변조되지 않았음을 검증할 수 있습니다.</p>

<h3>언제 메시지에 서명하나요</h3>

<ul>
<li>소프트웨어 릴리스 또는 보안 공지 발표</li>
<li>공개 포럼에서 신원 확인</li>
<li>출처를 증명하기 위한 이메일 서명</li>
<li>코드 무결성을 위한 Git 커밋 서명</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">7단계: 서명 검증</h2>

<p>서명된 메시지를 받으면 진본이며 변조되지 않았는지 검증할 수 있습니다.</p>

<h3>KeychainPGP에서 검증</h3>

<ol>
<li>서명 블록을 포함한 전체 서명된 메시지를 복사합니다.</li>
<li><strong>검증</strong> 탭으로 이동합니다.</li>
<li>서명된 메시지를 붙여넣습니다.</li>
<li><strong>검증</strong>을 클릭합니다. KeychainPGP가 서명이 유효한지 확인합니다.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGP 클립보드 워크플로우</h2>

<p>KeychainPGP가 전통적인 PGP 도구와 다른 점은 <a href="/ko/docs/clipboard-encryption/">클립보드 암호화 워크플로우</a>입니다. 파일을 처리하거나 전용 이메일 클라이언트를 필요로 하는 대신, KeychainPGP는 시스템 클립보드를 통해 모든 앱과 작동합니다.</p>

<table>
<tr><th>작업</th><th>웹 앱</th><th>데스크톱 앱</th></tr>
<tr><td>암호화</td><td>텍스트 붙여넣기, 암호화 클릭</td><td>텍스트 복사, <code>Ctrl+Shift+E</code> 누르기</td></tr>
<tr><td>복호화</td><td>암호화된 텍스트 붙여넣기, 복호화 클릭</td><td>암호화된 텍스트 복사, <code>Ctrl+Shift+D</code> 누르기</td></tr>
<tr><td>서명</td><td>텍스트 붙여넣기, 서명 클릭</td><td>앱 창에서 사용 가능</td></tr>
<tr><td>검증</td><td>서명된 텍스트 붙여넣기, 검증 클릭</td><td>앱 창에서 사용 가능</td></tr>
</table>

<p>데스크톱 앱의 추가 보안 기능:</p>

<ul>
<li><strong>클립보드 자동 지우기</strong> — 복호화된 텍스트가 30초 후 클립보드에서 삭제됩니다.</li>
<li><strong>OPSEC 모드</strong> — 창 제목 위장, RAM 전용 키 저장 및 긴급 삭제 버튼.</li>
<li><strong>OS 자격 증명 저장소</strong> — 개인키가 Windows 자격 증명 관리자, macOS 키체인 또는 Linux Secret Service를 통해 안전하게 저장됩니다.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">웹 앱 vs 데스크톱 앱</h2>

<p><strong>웹 앱</strong>(<a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>):</p>

<ul>
<li>WebAssembly를 통해 브라우저에서 완전히 작동</li>
<li>설치 불필요, 계정 불필요</li>
<li>빠른 암호화 작업에 완벽</li>
<li>키가 브라우저 로컬 스토리지에 저장</li>
</ul>

<p><strong>데스크톱 앱</strong>(Windows, macOS, Linux, Android):</p>

<ul>
<li>암호화 및 복호화를 위한 글로벌 단축키</li>
<li>시스템 트레이 통합</li>
<li>클립보드 자동 지우기</li>
<li>RAM 전용 키 및 긴급 삭제가 있는 OPSEC 모드</li>
<li>OS 자격 증명 관리자를 통한 안전한 키 저장</li>
<li>일상적인 사용 및 장기 키 관리에 적합</li>
</ul>

<p>두 앱 모두 무료이며, 오픈소스(MIT / Apache-2.0)이고, 원격 분석이 없습니다.</p>

<hr>

<h2 id="frequently-asked-questions">자주 묻는 질문</h2>

<h3>개인키를 공유해야 하나요?</h3>

<p>아니요. 개인키를 <strong>절대로</strong> 다른 사람과 공유하면 안 됩니다. 개인키는 당신에게 보내진 메시지를 복호화하고 전자 서명을 생성하는 데 사용됩니다. 다른 사람이 개인키를 얻으면 당신에게 온 모든 암호화된 메시지를 읽고 당신을 사칭할 수 있습니다.</p>

<h3>개인키를 잃어버리면 어떻게 되나요?</h3>

<p>개인키를 잃어버리면 해당 공개키로 암호화된 모든 메시지를 복호화할 수 있는 능력을 영구적으로 잃게 됩니다. 복구 메커니즘이 없습니다. 항상 개인키의 안전한 백업을 유지하세요.</p>

<h3>PGP로 파일을 암호화할 수 있나요?</h3>

<p>네. PGP는 텍스트 메시지와 바이너리 파일 모두를 암호화할 수 있습니다. KeychainPGP는 클립보드 기반 텍스트 암호화에 중점을 두고 있으며, GnuPG와 같은 도구는 파일 암호화를 직접 지원합니다. 자세한 비교는 <a href="/ko/docs/pgp-vs-gpg/">PGP vs GPG</a> 가이드를 참조하세요.</p>

<h3>PGP 암호화는 안전한가요?</h3>

<p>현대적 알고리즘을 사용한 PGP 암호화는 매우 안전합니다. KeychainPGP는 서명에 Ed25519를, 키 교환에 X25519를 사용합니다 — RSA-3072과 동등한 보안을 훨씬 작은 키 크기로 제공하는 타원 곡선 알고리즘입니다. 주요 위험은 암호학적이 아니라 운영적입니다: 약한 암호문구, 손상된 장치 또는 부주의한 키 관리.</p>

<h3>PGP 지문이란 무엇인가요?</h3>

<p>PGP 지문은 PGP 키를 고유하게 식별하는 40자리 16진수 문자열입니다. 지문은 공개키가 실제로 해당 사람의 것인지 확인하는 데 사용됩니다. 중간자 공격을 방지하기 위해 항상 별도의 신뢰할 수 있는 채널(전화, 화상 통화 또는 대면)을 통해 지문을 비교하세요.</p>
`
};

export default doc;
