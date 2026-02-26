import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: '무료 온라인 PGP 암호화 도구',
	heroSubtitle: '브라우저에서 직접 OpenPGP로 메시지를 암호화하고 복호화하세요. 설치 불필요, 계정 불필요, 서버로 전송되는 데이터 없음.',
	trustLine: '무료 오픈소스. MIT / Apache-2.0 라이선스. 원격 분석 없음.',
	ctaOpen: '브라우저에서 PGP 도구 열기',
	ctaHow: '작동 방식',
	whatIsTitle: 'PGP 암호화란 무엇인가?',
	whatIsText: 'PGP(Pretty Good Privacy)는 메시지, 이메일 및 파일 암호화의 표준입니다. 공개키 암호화를 사용합니다 — 누구나 사용할 수 있는 공개키를 공유하면, 오직 개인키만이 메시지를 복호화할 수 있습니다. 1991년에 만들어진 PGP는 기자, 보안 연구원, 활동가 및 전 세계 수백만 사용자가 사용하고 있습니다. KeychainPGP는 현대적인 인터페이스와 클립보드 기반 워크플로우를 통해 PGP를 누구나 접근할 수 있도록 만듭니다 — 명령줄 없이, 설정 없이, 복잡함 없이.',
	howToTitle: 'PGP로 온라인에서 메시지를 암호화하는 방법',
	steps: [
		{ title: '온라인 PGP 도구 열기', text: 'KeychainPGP 웹 앱으로 이동하세요. 브라우저에서 완전히 로드됩니다 — 설치나 계정이 필요 없습니다. 모든 것이 WebAssembly를 통해 로컬에서 작동합니다.' },
		{ title: 'PGP 키 생성 또는 가져오기', text: '새로운 Ed25519 + X25519 키 쌍을 생성하거나(가장 현대적이고 안전한 옵션), 기존 PGP 키를 ASCII 형식으로 가져오세요.' },
		{ title: '수신자의 공개키 가져오기', text: '연락처의 공개키를 키 탭에 붙여넣어 추가하세요. 이 키가 메시지를 암호화하는 데 사용됩니다.' },
		{ title: '메시지 입력', text: '암호화 탭으로 이동하여 보호하려는 메시지를 입력하거나 붙여넣으세요.' },
		{ title: '수신자 선택 및 암호화', text: '키 목록에서 수신자를 선택하고 "클립보드로 암호화"를 클릭하세요. 암호화된 PGP 메시지가 즉시 복사됩니다.' },
		{ title: '암호화된 메시지 전송', text: '암호화된 메시지를 이메일, 채팅 또는 메시징 앱에 붙여넣으세요. 의도된 수신자만이 자신의 개인키로 복호화할 수 있습니다.' }
	],
	featuresTitle: 'PGP 암호화에 KeychainPGP를 사용해야 하는 이유',
	features: [
		{ icon: '🌐', title: '100% 브라우저 내 작동', text: 'Rust에서 컴파일된 WebAssembly를 통해 브라우저에서 모든 것이 로컬로 작동합니다. 서버 통신 없음. 메시지와 키가 장치를 떠나지 않습니다.' },
		{ icon: '🔒', title: '현대적 암호화', text: '기본으로 Ed25519 + X25519 타원 곡선 키. OpenSSL에 의존하지 않는 Rust 기반 OpenPGP 구현체인 Sequoia-PGP로 구동됩니다.' },
		{ icon: '💻', title: '크로스 플랫폼', text: '웹 앱과 Windows, macOS, Linux 및 Android용 네이티브 앱으로 사용 가능. 어디서나 키를 사용하세요.' },
		{ icon: '📂', title: '오픈소스', text: 'MIT / Apache-2.0 라이선스로 완전히 감사 가능한 코드. 원격 분석 없음, 추적 없음, 계정 없음. GitHub에서 코드를 확인하세요.' },
		{ icon: '📋', title: '클립보드 우선', text: '텍스트를 복사하고, 단축키(Ctrl+Shift+E)로 암호화하고, 암호화된 메시지를 붙여넣으세요. 모든 앱에서 작동합니다 — 이메일, 채팅, 메모, 어디서나.' },
		{ icon: '⚡', title: '설정 불필요', text: '알고리즘 선택 없음, 키 크기 결정 없음, 설정 파일 없음. 기본으로 안전합니다. 키를 생성하고 몇 초 만에 암호화를 시작하세요.' }
	],
	desktopTitle: '일상적인 사용을 위해 데스크톱 앱을 받으세요',
	desktopText: '웹 앱은 빠른 암호화에 완벽하지만, 데스크톱 앱은 추가 보안 기능과 함께 완전한 PGP 경험을 제공합니다:',
	desktopFeatures: [
		'글로벌 단축키 — 어떤 앱에서든 Ctrl+Shift+E로 암호화, Ctrl+Shift+D로 복호화',
		'시스템 트레이 — 작업 표시줄에서 항상 사용 가능, 백그라운드에서 조용히 작동',
		'클립보드 자동 지우기 — 복호화된 텍스트가 30초 후 클립보드에서 자동 삭제',
		'OPSEC 모드 — 창 제목 숨기기, RAM 전용 키 및 긴급 삭제 버튼',
		'OS 자격 증명 저장소 — Windows 자격 증명 관리자, macOS 키체인 또는 Linux Secret Service에 안전하게 키 저장',
		'Android 앱 — 모바일에서 동일한 인터페이스, QR 코드로 기기 간 키 동기화',
		'CLI — 스크립팅 및 자동화를 위한 keychainpgp 명령줄 도구'
	],
	ctaDownload: 'KeychainPGP 다운로드',
	ctaAllPlatforms: '모든 플랫폼',
	faqTitle: '자주 묻는 질문',
	faqItems: [
		{ question: '온라인에서 PGP 메시지를 암호화하는 것이 안전한가요?', answer: '네, KeychainPGP 웹 앱을 사용하면 안전합니다. 모든 암호화 및 복호화가 Rust에서 컴파일된 WebAssembly를 통해 브라우저에서 로컬로 수행됩니다. 서버로 데이터가 전송되지 않습니다. 앱은 완전히 클라이언트 측에서 작동하며, 메시지와 키가 장치를 떠나지 않습니다.' },
		{ question: 'PGP 암호화는 무엇에 사용되나요?', answer: 'PGP(Pretty Good Privacy)는 개인 메시지, 이메일, 파일 및 전자 서명을 보호하는 데 사용됩니다. 공개키 암호화를 사용합니다: 상대방의 공개키로 메시지를 암호화하면, 그 사람의 개인키만이 복호화할 수 있습니다. PGP는 기자, 활동가, 보안 전문가 및 통신 프라이버시를 중요시하는 모든 사람이 널리 사용합니다.' },
		{ question: 'PGP 암호화는 어떻게 작동하나요?', answer: 'PGP는 대칭 및 비대칭 암호화의 조합을 사용합니다. 암호화 시, PGP는 무작위 세션 키를 생성하고, 빠른 대칭 암호화로 메시지를 암호화한 다음, 수신자의 공개키로 세션 키를 암호화합니다. 수신자는 자신의 개인키로 세션 키를 복호화한 다음, 메시지를 복호화합니다. KeychainPGP는 이 과정에 현대적인 Ed25519 + X25519 키를 사용합니다.' },
		{ question: 'PGP와 GPG의 차이점은 무엇인가요?', answer: 'PGP(Pretty Good Privacy)는 1991년 Phil Zimmermann이 만든 원래의 암호화 표준입니다. GPG(GNU Privacy Guard 또는 GnuPG)는 OpenPGP 표준의 무료 오픈소스 구현체입니다. OpenPGP는 메시지 형식을 정의하는 IETF 표준(RFC 4880)입니다. KeychainPGP는 Rust로 작성된 Sequoia-PGP 라이브러리를 통해 OpenPGP 표준을 구현합니다.' },
		{ question: '소프트웨어를 설치하지 않고 PGP를 사용할 수 있나요?', answer: '네. KeychainPGP는 WebAssembly를 통해 브라우저에서 완전히 작동하는 온라인 PGP 도구를 제공합니다. 아무것도 설치하지 않고 키를 생성하고, 메시지를 암호화 및 복호화하고, 연락처를 관리할 수 있습니다. 일상적인 사용을 위해 KeychainPGP는 글로벌 단축키가 있는 네이티브 데스크톱 앱(Windows, macOS, Linux), QR 코드 동기화가 있는 Android 앱, 그리고 스크립팅을 위한 CLI도 제공합니다.' },
		{ question: 'KeychainPGP는 어떤 암호화 알고리즘을 사용하나요?', answer: 'KeychainPGP는 전자 서명에 Ed25519를, 키 교환에 X25519를 사용합니다 — 두 가지 모두 현대적인 타원 곡선 암호화 알고리즘입니다. RSA-3072과 동등한 보안을 훨씬 작은 키 크기로 제공합니다. 암호화 작업은 OpenSSL에 의존하지 않는 Rust 기반 OpenPGP 구현체인 Sequoia-PGP로 구동됩니다.' },
		{ question: '2026년에도 PGP 암호화가 안전한가요?', answer: '네. KeychainPGP가 사용하는 Ed25519/X25519와 같은 현대적인 알고리즘을 사용한 PGP 암호화는 현재 사용 가능한 가장 강력한 암호화 표준 중 하나입니다. 타원 곡선 암호화의 수학적 기반은 아직 깨지지 않았습니다. PGP의 보안은 올바른 키 관리, 강력한 암호문구 및 최신 구현체에 달려 있습니다.' },
		{ question: 'PGP 공개키를 어떻게 공유하나요?', answer: 'ASCII 형식(-----BEGIN PGP PUBLIC KEY BLOCK-----으로 시작하는 텍스트 블록)으로 PGP 공개키를 내보내서 공유할 수 있습니다. 이메일로 보내거나, 채팅에 붙여넣거나, 웹사이트에 게시하거나, 키 서버에 올릴 수 있습니다. KeychainPGP에서 키 탭으로 이동하여 내보내기 기능을 사용하여 공개키를 복사하세요.' },
		{ question: 'PGP 클립보드 암호화란 무엇인가요?', answer: 'PGP 클립보드 암호화는 텍스트를 클립보드에 복사하고, 단축키나 버튼으로 암호화 또는 복호화한 다음, 결과를 붙여넣는 워크플로우입니다. 이 방식은 모든 앱에서 작동합니다 — 이메일, 채팅, 메모 또는 모든 텍스트 필드. KeychainPGP는 글로벌 단축키를 중심으로 이 방식으로 설계되었습니다: Ctrl+Shift+E로 암호화, Ctrl+Shift+D로 복호화.' },
		{ question: 'KeychainPGP는 정말 무료이고 오픈소스인가요?', answer: '네. KeychainPGP는 MIT/Apache-2.0 이중 라이선스 하에 100% 무료 오픈소스입니다. 소스 코드는 GitHub에 공개되어 있습니다. 유료 버전, 프리미엄 기능, 계정, 원격 분석 또는 추적이 없습니다.' }
	],
	learnMoreTitle: 'PGP 암호화에 대해 더 알아보기',
	learnMoreLinks: [
		{ href: '/ko/docs/what-is-pgp/', title: 'PGP란 무엇인가?', text: 'Pretty Good Privacy, 공개키 암호화 및 전자 서명에 대한 종합 가이드.' },
		{ href: '/ko/docs/how-to-use-pgp/', title: 'PGP 사용 방법', text: '키 생성, 메시지 암호화 및 서명 검증을 위한 단계별 튜토리얼.' },
		{ href: '/ko/docs/pgp-vs-gpg/', title: 'PGP vs GPG', text: 'PGP, GPG(GnuPG) 및 OpenPGP 표준의 차이점 이해.' },
		{ href: '/ko/docs/pgp-for-beginners/', title: 'PGP 초보자 가이드', text: 'PGP 암호화에 대해 알아야 할 모든 것, 쉽게 설명.' },
		{ href: '/ko/docs/clipboard-encryption/', title: '클립보드 암호화', text: 'PGP 클립보드 암호화 작동 방식, 보안 고려사항 및 OPSEC 기능.' },
		{ href: '/ko/blog/best-pgp-tools-2026/', title: '2026년 최고의 PGP 도구', text: '현재 사용 가능한 최고의 PGP 암호화 소프트웨어에 대한 종합 비교 및 순위.' }
	]
};
