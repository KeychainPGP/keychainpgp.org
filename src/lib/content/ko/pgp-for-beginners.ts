import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP 초보자 가이드: PGP 암호화 시작하기 쉬운 안내서',
	description: '처음부터 PGP 암호화를 배우세요. 이 초보자 가이드는 PGP 작동 방식을 설명하고, 첫 암호화 메시지 작성을 안내하며, 핵심 개념을 다룹니다.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: '왜 암호화가 중요한가', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'PGP란 무엇인가, 쉽게 설명', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: '알아야 할 핵심 개념', level: 2 },
		{ id: 'public-key-your-address', text: '공개키: 당신의 주소', level: 3 },
		{ id: 'private-key-your-password', text: '개인키: 당신의 비밀번호', level: 3 },
		{ id: 'encryption-vs-signing', text: '암호화 vs 서명', level: 3 },
		{ id: 'key-fingerprints', text: '키 지문', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: '첫 PGP 메시지', level: 2 },
		{ id: 'common-beginner-mistakes', text: '흔한 초보자 실수', level: 2 },
		{ id: 'next-steps', text: '다음 단계', level: 2 },
		{ id: 'faq', text: 'FAQ', level: 2 }
	],
	html: `
<h1>PGP 초보자 가이드: 시작하기 쉬운 안내서</h1>

<p>PGP를 시작하는 것은 생각보다 쉽습니다. 키 쌍(하나는 공개, 하나는 비공개)을 생성하고, 통신하려는 사람에게 공개키를 공유하고, 개인키를 사용하여 상대방이 보내는 메시지를 복호화합니다. 소프트웨어를 설치할 필요가 없습니다. KeychainPGP와 같은 무료 <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 사용하면 브라우저에서 직접 5분 이내에 첫 메시지를 암호화할 수 있습니다.</p>

<h2 id="why-encryption-matters">왜 암호화가 중요한가</h2>

<p>매일 수십억 개의 메시지가 인터넷을 통해 전송됩니다. 이메일, 채팅 메시지, 문서 — 대부분은 평문으로 전송되어, 가로채는 사람이라면 누구든 읽을 수 있습니다. 이는 인터넷 서비스 제공업체, 공용 Wi-Fi의 해커, 심지어 정부 감시 프로그램도 포함합니다.</p>

<p><strong>데이터 유출은 드문 일이 아닙니다.</strong> 끊임없이 발생합니다. 메시지가 암호화되지 않으면, 읽을 수 있는 텍스트로 데이터베이스에 저장되어 다음 유출을 기다리고 있습니다.</p>

<p>암호화가 이 문제를 해결합니다. PGP로 메시지를 암호화하면 읽을 수 없는 문자열로 뒤섞입니다. 올바른 개인키를 가진 사람만이 이를 해독할 수 있습니다.</p>

<h2 id="what-is-pgp-explained-simply">PGP란 무엇인가, 쉽게 설명</h2>

<p>PGP는 <strong>Pretty Good Privacy</strong>의 약자입니다. 1991년 Phil Zimmermann이 만들어 메시지와 파일 암호화의 세계적 표준이 되었습니다.</p>

<p>PGP를 가장 쉽게 이해하는 방법입니다. <strong>투입구가 있는 우편함</strong>으로 생각해 보세요.</p>

<p>거리에 특별한 우편함이 있다고 상상해 보세요. 누구나 다가가서 투입구에 편지를 넣을 수 있습니다. 하지만 편지가 안에 들어가면, 우편함 문의 열쇠를 가진 당신만이 열 수 있습니다.</p>

<ul>
<li><strong>우편함의 투입구</strong>가 당신의 <strong>공개키</strong>입니다. 비공개 메시지를 보내고 싶은 사람에게 이것을 줍니다. 공유해도 안전합니다.</li>
<li><strong>우편함의 열쇠</strong>가 당신의 <strong>개인키</strong>입니다. 절대로 누구와도 공유하지 않습니다.</li>
</ul>

<p>이것을 <strong>비대칭 암호화</strong>라고 합니다 — 하나의 키로 잠그고, 다른 키로 엽니다. 더 깊은 기술적 설명은 <a href="/ko/docs/what-is-pgp/">PGP란 무엇인가</a> 종합 가이드를 읽어보세요.</p>

<h2 id="key-concepts-you-need-to-know">알아야 할 핵심 개념</h2>

<h3 id="public-key-your-address">공개키: 당신의 주소</h3>

<p>공개키는 우편 주소와 같습니다. 사람들이 당신에게 물건을 보낼 수 있도록 자유롭게 배포합니다. PGP에서는 공개키를 공유하여 당신만이 읽을 수 있는 메시지를 다른 사람이 암호화할 수 있게 합니다.</p>

<h3 id="private-key-your-password">개인키: 당신의 비밀번호</h3>

<p>개인키는 현관문 열쇠와 같습니다. 공개키로 암호화된 메시지를 열 수 있게 해주는 유일한 것입니다. <strong>절대로 개인키를 다른 사람과 공유하면 안 됩니다.</strong></p>

<h3 id="encryption-vs-signing">암호화 vs 서명</h3>

<p>PGP는 두 가지를 할 수 있습니다: <strong>암호화</strong>와 <strong>서명</strong>.</p>

<ul>
<li><strong>암호화</strong> — 수신자만 읽을 수 있도록 메시지를 뒤섞습니다. 수신자의 공개키로 암호화하고, 수신자는 자신의 개인키로 복호화합니다.</li>
<li><strong>서명</strong> — 메시지가 당신에게서 온 것이며 변조되지 않았음을 증명합니다. 자신의 개인키로 서명하고, 공개키를 가진 누구나 서명을 검증할 수 있습니다.</li>
</ul>

<h3 id="key-fingerprints">키 지문</h3>

<p>키 지문은 PGP 키를 고유하게 식별하는 짧은 문자열입니다. 지문은 공개키가 실제로 해당 사람의 것인지 <strong>확인</strong>하는 데 사용됩니다. 항상 별도의 신뢰할 수 있는 채널을 통해 지문을 비교하세요.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>PGP 키나 암호화된 메시지가 <code>-----BEGIN PGP MESSAGE-----</code>로 시작하는 텍스트 블록으로 보일 때, 이것이 <strong>ASCII armor</strong>입니다. 이진 데이터를 인쇄 가능한 텍스트 문자로 인코딩하는 방식이며, 이메일, 채팅 창 또는 웹 양식에 복사하여 붙여넣을 수 있습니다.</p>

<h2 id="your-first-pgp-message">첫 PGP 메시지</h2>

<p><a href="https://keychainpgp.github.io">KeychainPGP 웹 앱</a>으로 첫 메시지를 암호화하는 단계를 따라가 봅시다. 브라우저에서 완전히 작동하는 무료 <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>입니다.</p>

<p><strong>1단계: 웹 앱을 엽니다.</strong> <a href="https://keychainpgp.github.io">keychainpgp.github.io</a>로 이동하세요. 앱이 WebAssembly로 로드되며, PGP 엔진이 컴퓨터에서 로컬로 작동합니다.</p>

<p><strong>2단계: 키 쌍을 생성합니다.</strong> 키 탭에서 새 키를 만듭니다. KeychainPGP는 현대적인 Ed25519 + X25519 키 쌍을 생성합니다.</p>

<p><strong>3단계: 공개키를 내보내고 공유합니다.</strong> 내보내기 기능을 사용하여 ASCII-armored 형식의 공개키를 복사합니다.</p>

<p><strong>4단계: 수신자의 공개키를 가져옵니다.</strong> 키 탭에서 연락처의 공개키 블록을 붙여넣습니다.</p>

<p><strong>5단계: 메시지를 작성하고 암호화합니다.</strong> 암호화 탭으로 이동하여 메시지를 입력하고, 수신자를 선택하고, <strong>"클립보드로 암호화"</strong>를 클릭합니다.</p>

<p><strong>6단계: 암호화된 메시지를 전송합니다.</strong> 암호화된 텍스트를 이메일, 채팅 또는 메시징 앱에 붙여넣습니다.</p>

<p><strong>7단계: 답장을 복호화합니다.</strong> 암호화된 PGP 메시지 블록을 복사하고, 복호화 탭으로 이동하여 붙여넣고 복호화를 클릭합니다.</p>

<p>더 자세한 가이드는 <a href="/ko/docs/how-to-use-pgp/">PGP 사용 방법</a> 튜토리얼을 참조하세요.</p>

<h2 id="common-beginner-mistakes">흔한 초보자 실수</h2>

<p><strong>1. 개인키 공유.</strong> 개인키는 절대로 다른 사람에게 보내면 안 됩니다. <strong>공개</strong>키만 공유하세요.</p>

<p><strong>2. 지문 미확인.</strong> 항상 별도의 신뢰할 수 있는 채널 — 전화, 화상 통화 또는 대면 만남을 통해 키 지문을 확인하세요.</p>

<p><strong>3. 백업 없이 개인키 분실.</strong> 개인키를 잃어버리면, 해당 키로 암호화된 모든 메시지가 영원히 손실됩니다. 개인키를 안전한 장소에 백업하세요.</p>

<p><strong>4. 폐기 인증서 미저장.</strong> 폐기 인증서를 사용하면 키가 손상된 경우 더 이상 유효하지 않음을 공개적으로 선언할 수 있습니다.</p>

<p><strong>5. 오래되거나 약한 키 사용.</strong> 새 키를 생성할 때는 현대적 알고리즘을 사용하세요. KeychainPGP는 기본으로 Ed25519 + X25519를 사용합니다.</p>

<h2 id="next-steps">다음 단계</h2>

<ul>
<li><strong>종합 가이드 읽기:</strong> <a href="/ko/docs/how-to-use-pgp/">PGP 사용 방법</a>에서 서명, 검증, 키 관리 및 고급 주제를 다룹니다.</li>
<li><strong>PGP가 무엇인지 이해:</strong> 더 깊이 알고 싶다면 <a href="/ko/docs/what-is-pgp/">PGP란 무엇인가</a>를 읽으세요.</li>
<li><strong>클립보드 암호화 배우기:</strong> <a href="/ko/docs/clipboard-encryption/">클립보드 암호화</a>가 어떻게 모든 앱에서 PGP를 사용할 수 있게 하는지 알아보세요.</li>
<li><strong>온라인 도구 시도:</strong> <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 열어 연습하세요.</li>
<li><strong>데스크톱 앱 받기:</strong> <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGP 데스크톱 앱</a>은 글로벌 단축키, 시스템 트레이 및 클립보드 자동 지우기를 추가합니다.</li>
</ul>

<h2 id="faq">자주 묻는 질문</h2>

<h3>PGP가 배우기 어렵나요?</h3>
<p>아닙니다. 기본 개념은 간단합니다: 공유하는 공개키 하나, 비밀로 유지하는 개인키 하나. KeychainPGP와 같은 현대적 도구로 메시지를 암호화하는 것은 몇 번의 클릭이면 됩니다.</p>

<h3>PGP를 사용하려면 소프트웨어를 설치해야 하나요?</h3>
<p>반드시 그렇지는 않습니다. KeychainPGP의 <a href="/ko/pgp-online-encrypt/">온라인 PGP 도구</a>를 브라우저에서 직접 사용할 수 있습니다. WebAssembly를 통해 완전히 장치에서 작동합니다.</p>

<h3>누군가 PGP로 암호화된 메시지를 깨뜨릴 수 있나요?</h3>
<p>KeychainPGP가 사용하는 Ed25519 + X25519와 같은 현대적 알고리즘을 사용하면, 현재 기술로 무차별 대입으로 암호화를 깨는 데 우주의 나이보다 더 오래 걸립니다. 실제 위험은 실용적입니다: 개인키 분실, 약한 암호문구 사용 또는 장치의 맬웨어.</p>

<h3>PGP, GPG, OpenPGP의 차이점은 무엇인가요?</h3>
<p><strong>PGP</strong>는 1991년에 만들어진 원래 프로그램입니다. <strong>OpenPGP</strong>는 형식을 정의하는 개방 표준(RFC 4880)입니다. <strong>GPG</strong>(GNU Privacy Guard)는 OpenPGP 표준의 무료 구현체입니다. KeychainPGP는 Rust 기반 Sequoia-PGP로 구축된 또 다른 구현체입니다. 동일한 표준을 따르므로 모두 호환됩니다.</p>

<h3>공개키를 어떻게 공유하나요?</h3>
<p>공개키를 ASCII-armored 형식으로 내보내세요 — <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code>로 시작하는 텍스트 블록입니다. 이메일에 붙여넣거나, 웹사이트에 게시하거나, 채팅으로 공유하거나, 키 서버에 업로드하세요. 별도의 채널을 통해 연락처와 지문을 확인하는 것을 잊지 마세요.</p>
`
};

export default doc;
