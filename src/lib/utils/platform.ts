export type Platform = 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'unknown';

export function detectPlatform(): Platform {
	if (typeof navigator === 'undefined') return 'unknown';

	const ua = navigator.userAgent.toLowerCase();
	const platform = (navigator as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() ?? '';

	if (/android/.test(ua)) return 'android';
	if (/iphone|ipad|ipod/.test(ua)) return 'ios';
	if (/win/.test(platform) || /windows/.test(ua)) return 'windows';
	if (/mac/.test(platform) || /macintosh|mac os/.test(ua)) return 'macos';
	if (/linux/.test(platform) || /linux/.test(ua)) return 'linux';

	return 'unknown';
}

export const platformLabels: Record<Platform, string> = {
	windows: 'Windows',
	macos: 'macOS',
	linux: 'Linux',
	android: 'Android',
	ios: 'iOS',
	unknown: ''
};
