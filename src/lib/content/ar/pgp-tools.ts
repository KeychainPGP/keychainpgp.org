import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'أفضل أدوات PGP وبرامج التشفير في 2026 — دليل شامل',
	description: 'دليل شامل لأدوات PGP وبرامج التشفير. قارن أدوات OpenPGP لسطح المكتب والويب والهاتف وسطر الأوامر للعثور على الأنسب لاحتياجاتك.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'ما هي أدوات PGP؟', level: 2 },
		{ id: 'desktop-pgp-software', text: 'برامج PGP لسطح المكتب', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'أدوات PGP عبر الإنترنت', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'أدوات PGP للهاتف', level: 2 },
		{ id: 'cli-pgp-tools', text: 'أدوات PGP لسطر الأوامر', level: 2 },
		{ id: 'email-pgp-integration', text: 'تكامل PGP مع البريد الإلكتروني', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'مقارنة أدوات PGP', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'اختيار أداة PGP المناسبة', level: 2 },
		{ id: 'why-keychainpgp', text: 'لماذا KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'البدء', level: 2 }
	],
	html: `
<h1>أفضل أدوات PGP وبرامج التشفير في 2026</h1>

<p>تتوفر اليوم مجموعة واسعة من أدوات PGP لتشفير الرسائل وتوقيع الملفات وإدارة مفاتيح OpenPGP. تشمل هذه الأدوات تطبيقات سطح المكتب وأدوات الويب وتطبيقات الهاتف وواجهات سطر الأوامر وإضافات البريد الإلكتروني. يغطي هذا الدليل كل فئة رئيسية من برامج PGP لمساعدتك على اتخاذ قرار مدروس.</p>

<h2 id="what-are-pgp-tools">ما هي أدوات PGP؟</h2>

<p>أدوات PGP هي تطبيقات برمجية تُطبّق <a href="/ar/docs/what-is-pgp/">معيار OpenPGP</a> (RFC 4880 وخلفاؤه) للتشفير بالمفتاح العام. تتيح إنشاء أزواج المفاتيح وتشفير وفك تشفير الرسائل وإنشاء والتحقق من التوقيعات الرقمية وإدارة سلاسل المفاتيح. فهم <a href="/ar/docs/pgp-vs-gpg/">الفرق بين PGP و GPG</a> يساعد في توضيح سبب وجود كل هذه الأدوات المختلفة.</p>

<h2 id="desktop-pgp-software">برامج PGP لسطح المكتب</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong> (GNU Privacy Guard) هو التطبيق مفتوح المصدر المرجعي لمعيار OpenPGP. متوفر على جميع أنظمة التشغيل تقريبًا، وهو قوي للغاية لكنه يعتمد أساسًا على سطر الأوامر. يدعم RSA و DSA و ECDSA و EdDSA ومجموعة واسعة من التشفيرات المتماثلة.</p>

<ul>
<li><strong>المنصات:</strong> Windows و macOS و Linux و BSD</li>
<li><strong>الواجهة:</strong> سطر الأوامر (مع واجهات رسومية اختيارية)</li>
<li><strong>الترخيص:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong> يجمع GnuPG مع واجهة رسومية أصلية لـ Windows تُسمى Kleopatra. يوفر إدارة الشهادات وتشفير الملفات عبر تكامل مستكشف Windows ودعم S/MIME بالإضافة إلى OpenPGP.</p>

<ul>
<li><strong>المنصات:</strong> Windows</li>
<li><strong>الترخيص:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong> هو المعادل لـ Gpg4win على macOS. يتضمن GPG Keychain لإدارة المفاتيح وقائمة سياقية GPGServices وGPG Mail للتكامل مع Apple Mail.</p>

<ul>
<li><strong>المنصات:</strong> macOS</li>
<li><strong>الترخيص:</strong> مفتوح المصدر (إضافة Mail مدفوعة)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong> يتبنى نهجًا مختلفًا جذريًا لتشفير PGP. بدلاً من تغليف GnuPG في واجهة رسومية، يستخدم مكتبة <strong>Sequoia-PGP</strong> المكتوبة بلغة Rust لتوفير سير عمل حديث قائم على الحافظة. تنسخ النص، تضغط اختصارًا عامًا (<code>Ctrl+Shift+E</code> للتشفير، <code>Ctrl+Shift+D</code> لفك التشفير)، وتلصق النتيجة — يعمل مع أي تطبيق على نظامك.</p>

<ul>
<li><strong>المنصات:</strong> Windows و macOS و Linux و Android و Web و CLI</li>
<li><strong>الواجهة:</strong> واجهة رسومية مع شريط نظام + اختصارات عامة + CLI</li>
<li><strong>الترخيص:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">أدوات PGP عبر الإنترنت</h2>

<p><a href="/ar/pgp-online-encrypt/">تطبيق الويب KeychainPGP</a> يُجمّع نفس محرك Sequoia-PGP بلغة Rust إلى WebAssembly، بحيث تتم جميع العمليات التشفيرية محليًا في متصفحك. لا يتم نقل أي بيانات إلى خادم. <strong>Mailvelope</strong> هو إضافة متصفح تدمج تشفير OpenPGP مباشرة في مزودي البريد الإلكتروني مثل Gmail و Outlook.com.</p>

<h2 id="mobile-pgp-tools">أدوات PGP للهاتف</h2>

<p><strong>OpenKeychain</strong> هو تطبيق OpenPGP ناضج ومفتوح المصدر لـ Android، مع تكامل مع K-9 Mail. <strong>KeychainPGP لـ Android</strong> يوفر نفس التشفير الحديث على الهاتف، مع إنشاء مفاتيح Ed25519/X25519 ومزامنة المفاتيح عبر رمز QR مع تطبيق سطح المكتب.</p>

<h2 id="cli-pgp-tools">أدوات PGP لسطر الأوامر</h2>

<p><strong>GnuPG</strong> (<code>gpg</code>) هو أداة CLI المهيمنة. <strong>KeychainPGP</strong> يوفر CLI خاصًا به (<code>keychainpgp</code>) مع أوامر لإنشاء المفاتيح والتشفير وفك التشفير والتوقيع والتحقق وفحص المفاتيح وإدارة سلسلة المفاتيح. <strong>Sequoia-PGP</strong> يوفر أيضًا <code>sq</code>، أداة CLI حديثة أخرى مبنية على Rust.</p>

<h2 id="email-pgp-integration">تكامل PGP مع البريد الإلكتروني</h2>

<p><strong>Mozilla Thunderbird</strong> يتضمن دعم OpenPGP أصلي مدمج منذ الإصدار 78. <strong>ProtonMail</strong> يوفر تشفيرًا من طرف إلى طرف باستخدام OpenPGP تحت الغطاء، لكنه يخفي كل إدارة المفاتيح.</p>

<h2 id="pgp-tools-comparison">مقارنة أدوات PGP</h2>

<table>
<tr><th>الأداة</th><th>المنصات</th><th>الواجهة</th><th>المفاتيح الافتراضية</th><th>مفتوح المصدر</th><th>مثالي لـ</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>نعم (GPLv3)</td><td>المستخدمين المتقدمين، البرمجة النصية</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>واجهة رسومية + CLI</td><td>RSA-3072</td><td>نعم (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>واجهة رسومية + CLI</td><td>RSA-3072</td><td>جزئيًا</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>واجهة رسومية + اختصارات + CLI</td><td>Ed25519/X25519</td><td>نعم (MIT/Apache-2.0)</td><td>سير عمل الحافظة</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>إضافة متصفح</td><td>تراكب بريد إلكتروني</td><td>RSA-4096</td><td>نعم (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>واجهة رسومية أصلية</td><td>RSA-3072</td><td>نعم (GPLv3)</td><td>إدارة مفاتيح Android</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>عميل بريد</td><td>RSA-3072</td><td>نعم (MPL 2.0)</td><td>بريد مشفر</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>بريد ويب</td><td>X25519</td><td>جزئيًا</td><td>بريد بدون إعداد</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">اختيار أداة PGP المناسبة</h2>

<h3>سهولة الاستخدام</h3>
<p>الأدوات التقليدية مثل GnuPG مصممة للمستخدمين التقنيين. يلغي KeychainPGP اختيارات الخوارزميات وملفات التكوين — أنشئ مفتاحًا وابدأ التشفير فورًا.</p>

<h3>الأمان والقيم التشفيرية الافتراضية</h3>
<p>الأدوات الحديثة مثل KeychainPGP و <code>sq</code> من Sequoia تستخدم افتراضيًا <strong>Ed25519/X25519</strong>، التي توفر أمانًا مكافئًا أو أعلى مع مفاتيح أصغر بكثير. المكتبة الأساسية مهمة أيضًا: Sequoia-PGP (Rust) توفر ضمانات قوية لسلامة الذاكرة.</p>

<h3>تغطية المنصات</h3>
<p>يغطي KeychainPGP أنظمة Windows و macOS و Linux و Android والويب بواجهة موحدة. GnuPG متاح في كل مكان لكنه يتطلب واجهات رسومية مختلفة على كل منصة.</p>

<h2 id="why-keychainpgp">لماذا KeychainPGP</h2>

<p>صُمّم KeychainPGP لحل المشاكل التي جعلت تشفير PGP بعيد المنال لعقود:</p>

<ul>
<li><strong>سير عمل الحافظة.</strong> بدلاً من التكامل مع تطبيق واحد، يعمل KeychainPGP مع <em>جميع</em> التطبيقات. انسخ النص، شفّر أو فكّ التشفير باختصار واحد، والصق النتيجة.</li>
<li><strong>تشفير حديث افتراضيًا.</strong> مفاتيح توقيع <strong>Ed25519</strong> ومفاتيح تشفير فرعية <strong>X25519</strong> تلقائيًا.</li>
<li><strong>متعدد المنصات بقاعدة كود واحدة.</strong> تطبيق سطح مكتب مبني بـ Tauri، تطبيق ويب مُجمّع عبر WebAssembly. واجهة وسلوك تشفيري متطابقان على Windows و macOS و Linux و Android أو المتصفح.</li>
<li><strong>مدعوم بـ Sequoia-PGP.</strong> محرك تشفير بلغة Rust مع ضمانات سلامة الذاكرة يقضي على فئات كاملة من الثغرات.</li>
<li><strong>حر ومفتوح المصدر حقًا.</strong> رخصة MIT / Apache-2.0 بدون مستويات مدفوعة، بدون حسابات، بدون قياس عن بُعد.</li>
</ul>

<h2 id="getting-started">البدء</h2>

<ul>
<li><strong>جرّب الآن</strong> بدون تثبيت: افتح <a href="/ar/pgp-online-encrypt/">أداة PGP عبر الإنترنت KeychainPGP</a> في متصفحك.</li>
<li><strong>تعلّم الأساسيات</strong>: اقرأ <a href="/ar/docs/what-is-pgp/">ما هو PGP؟</a></li>
<li><strong>افهم المنظومة</strong>: مقالنا حول <a href="/ar/docs/pgp-vs-gpg/">PGP مقابل GPG</a> يشرح كيف يرتبط المعيار والبروتوكول والأدوات.</li>
<li><strong>قارن خياراتك</strong>: راجع تصنيفنا لـ<a href="/ar/blog/best-pgp-tools-2026/">أفضل أدوات PGP في 2026</a> أو <a href="/ar/blog/pgp-software-comparison/">المقارنة الشاملة لبرامج PGP</a>.</li>
<li><strong>نزّل KeychainPGP</strong>: احصل على تطبيق سطح المكتب من <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">إصدارات GitHub</a>.</li>
</ul>
`
};

export default doc;
