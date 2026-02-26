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
