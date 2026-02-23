import en from './en.json';
import fr from './fr.json';
import de from './de.json';
import es from './es.json';
import ptBR from './pt-BR.json';
import ptPT from './pt-PT.json';
import it from './it.json';
import nl from './nl.json';
import ru from './ru.json';
import uk from './uk.json';
import zhCN from './zh-CN.json';
import zhTW from './zh-TW.json';
import ja from './ja.json';
import ko from './ko.json';
import ar from './ar.json';
import he from './he.json';
import tr from './tr.json';
import pl from './pl.json';
import hi from './hi.json';
import th from './th.json';

export const locales = [
	'en', 'fr', 'de', 'es', 'pt-BR', 'pt-PT', 'it', 'nl',
	'ru', 'uk', 'zh-CN', 'zh-TW', 'ja', 'ko', 'ar', 'he',
	'tr', 'pl', 'hi', 'th'
] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	'en': 'English',
	'fr': 'Fran\u00e7ais',
	'de': 'Deutsch',
	'es': 'Espa\u00f1ol',
	'pt-BR': 'Portugu\u00eas (BR)',
	'pt-PT': 'Portugu\u00eas (PT)',
	'it': 'Italiano',
	'nl': 'Nederlands',
	'ru': '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
	'uk': '\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430',
	'zh-CN': '\u7b80\u4f53\u4e2d\u6587',
	'zh-TW': '\u7e41\u9ad4\u4e2d\u6587',
	'ja': '\u65e5\u672c\u8a9e',
	'ko': '\ud55c\uad6d\uc5b4',
	'ar': '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
	'he': '\u05e2\u05d1\u05e8\u05d9\u05ea',
	'tr': 'T\u00fcrk\u00e7e',
	'pl': 'Polski',
	'hi': '\u0939\u093f\u0928\u094d\u0926\u0940',
	'th': '\u0e44\u0e17\u0e22'
};

const messages: Record<string, Record<string, string>> = {
	en, fr, de, es,
	'pt-BR': ptBR, 'pt-PT': ptPT,
	it, nl, ru, uk,
	'zh-CN': zhCN, 'zh-TW': zhTW,
	ja, ko, ar, he, tr, pl, hi, th
};

export function t(locale: string, key: string): string {
	return messages[locale]?.[key] ?? messages.en[key] ?? key;
}

export function isRtl(locale: string): boolean {
	return locale === 'ar' || locale === 'he';
}

/**
 * Detect the best matching locale from the browser's language preferences.
 * Returns null if the best match is English (no redirect needed).
 */
export function detectLocale(): Locale | null {
	const stored = localStorage.getItem('locale');
	if (stored) {
		return stored === 'en' ? null : (locales.includes(stored as Locale) ? stored as Locale : null);
	}

	const browserLangs = navigator.languages ?? [navigator.language];

	for (const lang of browserLangs) {
		const normalized = lang.trim();

		// Exact match (e.g. "pt-BR" → "pt-BR")
		if (locales.includes(normalized as Locale)) {
			return normalized === 'en' ? null : normalized as Locale;
		}

		// Try with region variants for Chinese/Portuguese
		const lower = normalized.toLowerCase();
		if (lower.startsWith('zh-hans') || lower === 'zh-cn') {
			return 'zh-CN';
		}
		if (lower.startsWith('zh-hant') || lower === 'zh-tw' || lower === 'zh-hk') {
			return 'zh-TW';
		}
		if (lower.startsWith('pt-br')) {
			return 'pt-BR';
		}
		if (lower.startsWith('pt')) {
			return 'pt-PT';
		}

		// Prefix match (e.g. "fr-FR" → "fr", "de-AT" → "de")
		const prefix = normalized.split('-')[0];
		if (prefix === 'en') return null;
		if (locales.includes(prefix as Locale)) {
			return prefix as Locale;
		}
	}

	return null;
}
