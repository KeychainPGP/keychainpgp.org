import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGP 문서',
	description: 'PGP 암호화에 대한 모든 것을 알아보세요 — 초보자 가이드부터 클립보드 암호화 및 키 관리와 같은 고급 주제까지.',
	intro: 'PGP 암호화에 대해 알아야 할 모든 것. 처음 시작하든 고급 주제를 찾고 있든, 이 가이드가 핵심을 다룹니다.',
	docs: [
		{
			title: 'PGP란 무엇인가?',
			description: 'PGP 암호화의 기초 이해 — 공개키 암호화, 전자 서명, 신뢰 네트워크 및 활용 사례.',
			href: '/ko/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'PGP 사용 방법',
			description: '단계별 튜토리얼: 키 생성, 메시지 암호화, 복호화, 전자 서명 및 키 공유.',
			href: '/ko/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP vs GPG',
			description: 'PGP, GPG(GnuPG) 및 OpenPGP 표준의 차이점 이해 — 역사, 구현체 및 어떤 도구를 선택해야 하는지.',
			href: '/ko/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP 도구',
			description: 'PGP 도구 개요 — 데스크톱 클라이언트, CLI 유틸리티, 브라우저 확장 프로그램 및 웹 솔루션.',
			href: '/ko/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP 초보자 가이드',
			description: 'PGP가 처음이신가요? 여기서 시작하세요. 핵심 개념을 쉬운 말로 배우고 첫 암호화 메시지를 보내보세요.',
			href: '/ko/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: '클립보드 암호화',
			description: 'PGP 클립보드 워크플로우 마스터하기 — 글로벌 단축키로 모든 앱에서 텍스트를 암호화하고 복호화하세요.',
			href: '/ko/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGP 블로그',
	description: 'PGP 암호화 도구, 소프트웨어 비교 및 안전한 통신을 위한 모범 사례에 대한 심층 기사.',
	intro: 'PGP 암호화 도구, 소프트웨어 비교 및 안전한 통신을 위한 모범 사례에 대한 심층 기사.',
	posts: [
		{
			title: '2026년 최고의 PGP 도구',
			description: '현재 사용 가능한 최고의 PGP 암호화 도구에 대한 종합 순위 — 데스크톱 앱부터 온라인 솔루션까지.',
			href: '/ko/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGP 소프트웨어 비교',
			description: 'PGP 소프트웨어 상세 비교 — 기능, 보안, 지원 플랫폼 및 사용 편의성.',
			href: '/ko/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
