import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'وثائق PGP',
	description: 'تعلّم كل شيء عن تشفير PGP — من أدلة المبتدئين إلى المواضيع المتقدمة مثل التشفير عبر الحافظة وإدارة المفاتيح.',
	intro: 'كل ما تحتاج معرفته عن تشفير PGP. سواء كنت مبتدئًا أو تبحث عن مواضيع متقدمة، هذه الأدلة تغطي الأساسيات.',
	docs: [
		{
			title: 'ما هو PGP؟',
			description: 'فهم أساسيات تشفير PGP — التشفير بالمفتاح العام، التوقيعات الرقمية، شبكة الثقة وحالات الاستخدام.',
			href: '/ar/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'كيفية استخدام PGP',
			description: 'دليل تعليمي خطوة بخطوة: إنشاء المفاتيح، تشفير الرسائل، فك التشفير، التوقيعات الرقمية ومشاركة المفاتيح.',
			href: '/ar/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP مقابل GPG',
			description: 'فهم الفروقات بين PGP و GPG (GnuPG) ومعيار OpenPGP — التاريخ، التطبيقات وأي أداة تختار.',
			href: '/ar/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'أدوات PGP',
			description: 'نظرة شاملة على أدوات PGP — تطبيقات سطح المكتب، أدوات سطر الأوامر، إضافات المتصفح والحلول عبر الويب.',
			href: '/ar/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'PGP للمبتدئين',
			description: 'جديد على PGP؟ ابدأ من هنا. تعلّم المفاهيم الأساسية بلغة بسيطة وأرسل أول رسالة مشفرة لك.',
			href: '/ar/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'التشفير عبر الحافظة',
			description: 'أتقن سير عمل PGP عبر الحافظة — شفّر وفكّ تشفير النصوص من أي تطبيق باستخدام اختصارات عامة.',
			href: '/ar/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'مدوّنة PGP',
	description: 'مقالات معمّقة حول أدوات تشفير PGP، مقارنات البرامج وأفضل الممارسات للتواصل الآمن.',
	intro: 'مقالات معمّقة حول أدوات تشفير PGP، مقارنات البرامج وأفضل الممارسات للتواصل الآمن.',
	posts: [
		{
			title: 'أفضل أدوات PGP في 2026',
			description: 'تصنيف شامل لأفضل أدوات تشفير PGP المتاحة — من تطبيقات سطح المكتب إلى الحلول عبر الإنترنت.',
			href: '/ar/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'مقارنة برامج PGP',
			description: 'مقارنة تفصيلية لبرامج PGP — الميزات، الأمان، المنصات المدعومة وسهولة الاستخدام.',
			href: '/ar/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
