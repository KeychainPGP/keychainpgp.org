import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'תיעוד PGP',
	description: 'למדו הכל על הצפנת PGP — ממדריכים למתחילים ועד נושאים מתקדמים כמו הצפנת לוח העתקה וניהול מפתחות.',
	intro: 'כל מה שצריך לדעת על הצפנת PGP. בין אם אתם מתחילים או מחפשים נושאים מתקדמים, המדריכים האלה מכסים את הנושאים החשובים.',
	docs: [
		{
			title: 'מהו PGP?',
			description: 'הבנת יסודות הצפנת PGP — קריפטוגרפיית מפתח ציבורי, חתימות דיגיטליות, רשת אמון ומקרי שימוש.',
			href: '/he/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'כיצד להשתמש ב-PGP',
			description: 'מדריך צעד אחר צעד: יצירת מפתחות, הצפנת הודעות, פענוח, חתימות דיגיטליות ושיתוף מפתחות.',
			href: '/he/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP מול GPG',
			description: 'הבנת ההבדלים בין PGP, GPG (GnuPG) ותקן OpenPGP — היסטוריה, מימושים ואיזה כלי לבחור.',
			href: '/he/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'כלי PGP',
			description: 'סקירה כוללת של כלי PGP — לקוחות שולחניים, כלי שורת פקודה, תוספי דפדפן ופתרונות מבוססי אינטרנט.',
			href: '/he/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP למתחילים',
			description: 'חדשים ב-PGP? התחילו כאן. למדו את המושגים המרכזיים בשפה פשוטה ושלחו את ההודעה המוצפנת הראשונה שלכם.',
			href: '/he/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'הצפנת לוח העתקה',
			description: 'שלטו בזרימת העבודה של PGP דרך לוח ההעתקה — הצפינו ופענחו טקסט מכל יישום באמצעות קיצורי מקלדת גלובליים.',
			href: '/he/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'בלוג PGP',
	description: 'מאמרים מעמיקים על כלי הצפנת PGP, השוואות תוכנה ושיטות עבודה מומלצות לתקשורת מאובטחת.',
	intro: 'מאמרים מעמיקים על כלי הצפנת PGP, השוואות תוכנה ושיטות עבודה מומלצות לתקשורת מאובטחת.',
	posts: [
		{
			title: 'כלי PGP המובילים ב-2026',
			description: 'דירוג מקיף של כלי הצפנת PGP המובילים הזמינים כיום — מיישומי שולחן עבודה ועד פתרונות מקוונים.',
			href: '/he/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'השוואת תוכנות PGP',
			description: 'השוואה מפורטת של תוכנות PGP — תכונות, אבטחה, פלטפורמות נתמכות וקלות שימוש.',
			href: '/he/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
