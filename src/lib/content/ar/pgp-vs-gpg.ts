import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP مقابل GPG: ما الفرق بين PGP و GPG؟',
	description: 'اكتشف الفرق بين PGP و GPG. قارن بين Pretty Good Privacy و GnuPG ومعيار OpenPGP للعثور على أداة التشفير المناسبة.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'ما الفرق؟', level: 2 },
		{ id: 'what-is-pgp', text: 'ما هو PGP؟', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'ما هو GPG (GnuPG)؟', level: 2 },
		{ id: 'what-is-openpgp', text: 'ما هو OpenPGP؟', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'جدول مقارنة PGP مقابل GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'الفروقات الرئيسية مشروحة', level: 2 },
		{ id: 'which-should-you-use', text: 'أيهما تستخدم؟', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'أين يقع KeychainPGP', level: 2 },
		{ id: 'frequently-asked-questions', text: 'الأسئلة الشائعة', level: 2 }
	],
	html: `
<h1>PGP مقابل GPG: ما الفرق بين PGP و GPG؟</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">ما الفرق بين PGP و GPG؟</h2>

<p>يكمن الفرق بين PGP و GPG في أصلهما وترخيصهما. <strong>PGP</strong> (Pretty Good Privacy) هو برنامج التشفير الأصلي المملوك الذي أنشأه Phil Zimmermann عام 1991. <strong>GPG</strong> (GNU Privacy Guard، المعروف أيضًا بـ GnuPG) هو إعادة تطبيق حرة ومفتوحة المصدر لنفس المفهوم، طُوّر في إطار مشروع GNU. يُطبّق كلا البرنامجين معيار <strong>OpenPGP</strong>، مما يعني أنهما ينتجان رسائل مشفرة متوافقة ويمكنهما العمل مع مفاتيح بعضهما البعض. عمليًا، GPG هو الأداة التي يستخدمها معظم الأشخاص اليوم لأنها مجانية ومُصانة بنشاط ومتاحة على جميع أنظمة التشغيل الرئيسية. إذا كنت جديدًا على التشفير، يقدم <a href="/ar/docs/pgp-for-beginners/">دليل PGP للمبتدئين</a> المفاهيم الأساسية خطوة بخطوة.</p>

<h2 id="what-is-pgp">ما هو PGP؟</h2>

<p>PGP يعني <strong>Pretty Good Privacy</strong>. كتب Phil Zimmermann النسخة الأولى عام 1991 ونشرها كأداة مجانية للناشطين والمواطنين العاديين الذين يحتاجون تشفيرًا قويًا. جمع البرنامج بين التشفير بالمفتاح المتماثل والتشفير بالمفتاح العام.</p>

<p>بعد تحقيق فيدرالي استمر ثلاث سنوات (أُسقط عام 1996)، أسس Zimmermann شركة PGP Inc. تنقلت الشركة بين عدة ملّاك: Network Associates عام 1997، ثم PGP Corporation عام 2002، ثم Symantec (الآن Broadcom) عام 2010. اليوم، يوجد PGP كمجموعة منتجات تجارية موجهة أساسًا للشركات.</p>

<p>لمعرفة المزيد عن التقنية الأساسية، راجع مقالنا الشامل حول <a href="/ar/docs/what-is-pgp/">ما هو PGP وكيف يعمل</a>.</p>

<h2 id="what-is-gpg-gnupg">ما هو GPG (GnuPG)؟</h2>

<p>GPG، أو <strong>GNU Privacy Guard (GnuPG)</strong>، هو تطبيق حر ومفتوح المصدر لمعيار OpenPGP. بدأ Werner Koch المشروع عام 1997 بتمويل من الحكومة الألمانية وأصدر النسخة 1.0 عام 1999. أُنشئ GnuPG خصيصًا لتوفير بديل حر بالكامل لبرنامج PGP المملوك.</p>

<p>GnuPG هو جزء من مشروع GNU ومرخّص تحت رخصة GNU العامة (GPL). يأتي مثبتًا افتراضيًا في معظم توزيعات Linux. أداة سطر الأوامر <code>gpg</code> هي الواجهة التي يتعامل معها معظم المطورين ومسؤولي الأنظمة. للاطلاع على الأدوات المتاحة، راجع <a href="/ar/docs/pgp-tools/">مقارنة أدوات PGP</a>.</p>

<h2 id="what-is-openpgp">ما هو OpenPGP؟</h2>

<p><strong>OpenPGP</strong> ليس منتجًا ولا برنامجًا. إنه معيار مفتوح يحدد تنسيقات الرسائل وتنسيقات المفاتيح والإجراءات التشفيرية التي يجب أن تتبعها الأدوات المتوافقة مع PGP. نشرت IETF المواصفة الأصلية كـ <strong>RFC 2440</strong> عام 1998، والنسخة الأكثر استشهادًا هي <strong>RFC 4880</strong> (2007). تحديث رئيسي، <strong>RFC 9580</strong> (2024)، يحدّث المعيار مع دعم Ed25519 وتشفير AEAD.</p>

<p>وجود OpenPGP يجعل التشغيل البيني ممكنًا. لأن PGP و GPG يطبّقان نفس المعيار، يمكن فك تشفير رسالة مشفرة بـ GPG بواسطة PGP، والعكس صحيح.</p>

<h2 id="pgp-vs-gpg-comparison-table">جدول مقارنة PGP مقابل GPG</h2>

<table>
<tr><th>الخاصية</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>النوع</strong></td><td>برنامج تجاري</td><td>برنامج حر/مفتوح المصدر</td><td>معيار مفتوح</td></tr>
<tr><td><strong>الترخيص</strong></td><td>مملوك</td><td>GPL (مجاني)</td><td>مواصفة IETF</td></tr>
<tr><td><strong>التكلفة</strong></td><td>ترخيص مدفوع</td><td>مجاني</td><td>غير متاح</td></tr>
<tr><td><strong>المنصات</strong></td><td>Windows و macOS</td><td>Windows و macOS و Linux و BSD</td><td>غير متاح</td></tr>
<tr><td><strong>واجهة رسومية مدمجة</strong></td><td>نعم (وحدة تحكم المؤسسات)</td><td>لا (واجهات رسومية خارجية متاحة)</td><td>غير متاح</td></tr>
<tr><td><strong>الكود المصدري متاح</strong></td><td>لا</td><td>نعم</td><td>معيار عام</td></tr>
</table>

<h2 id="key-differences-explained">الفروقات الرئيسية مشروحة</h2>

<h3>الترخيص والتكلفة</h3>

<p>PGP هو برنامج مملوك يُباع بترخيص تجاري. GPG منشور تحت GPL، مما يعني أن أي شخص يمكنه تنزيله واستخدامه وتعديله وإعادة توزيعه مجانًا. للأفراد والفرق الصغيرة والمشاريع مفتوحة المصدر، GPG هو الخيار البديهي من حيث التكلفة.</p>

<h3>دعم المنصات</h3>

<p>يعمل GnuPG على جميع أنظمة Unix تقريبًا ولديه بناءات رسمية لـ Windows و macOS. لاحتياجات متعددة المنصات، توفر أدوات حديثة مثل KeychainPGP بناءات أصلية لـ Windows و macOS و Linux و Android من قاعدة كود واحدة.</p>

<h3>تجربة المستخدم</h3>

<p>PGP التجاري يتضمن واجهة رسومية للنشر في المؤسسات. GnuPG هو في الأساس أداة سطر أوامر. أدوات مثل KeychainPGP توفر واجهة رسومية أصلية تدير إنشاء المفاتيح والتشفير وفك التشفير والتوقيع دون حفظ خيارات سطر الأوامر. يمكنك تجربة تشفير PGP مباشرة في المتصفح مع <a href="/ar/pgp-online-encrypt/">أداة تشفير PGP عبر الإنترنت</a>.</p>

<h2 id="which-should-you-use">أيهما تستخدم؟</h2>

<ul>
<li><strong>شركة لديها بنية Broadcom/Symantec قائمة:</strong> PGP التجاري قد يكون المسار الأسهل.</li>
<li><strong>المطورون ومسؤولو الأنظمة:</strong> GnuPG هو الأداة القياسية، مثبتة افتراضيًا على معظم الخوادم.</li>
<li><strong>مستخدمون يهتمون بالخصوصية ويريدون واجهة رسومية:</strong> فكّر في تطبيق OpenPGP حديث مثل KeychainPGP.</li>
<li><strong>احتياجات تشفير ويب أو سريعة:</strong> يمكن لـ<a href="/ar/pgp-online-encrypt/">أداة تشفير PGP عبر الإنترنت</a> التعامل مع المهام العرضية دون تثبيت أي شيء.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">أين يقع KeychainPGP</h2>

<p><a href="/">KeychainPGP</a> هو تطبيق سطح مكتب حديث ومفتوح المصدر يُطبّق معيار OpenPGP باستخدام <strong>Sequoia-PGP</strong>، مكتبة OpenPGP مكتوبة من الصفر بلغة Rust. ليس PGP (المنتج التجاري) ولا GPG (GnuPG). إنه تطبيق مستقل يتعايش مع كليهما في منظومة OpenPGP.</p>

<p>الأسباب الرئيسية للنظر في KeychainPGP:</p>

<ul>
<li><strong>متعدد المنصات:</strong> بناءات أصلية لـ Windows و macOS و Linux و Android، بالإضافة إلى تطبيق ويب وأداة CLI</li>
<li><strong>تشفير حديث:</strong> مبني على Sequoia-PGP مع دعم Curve25519/Ed25519 و AEAD</li>
<li><strong>مفتوح المصدر:</strong> رخصة مزدوجة MIT / Apache-2.0، قابل للتدقيق بالكامل</li>
<li><strong>سهل الاستخدام:</strong> واجهة رسومية مع سير عمل حافظة واختصارات عامة</li>
<li><strong>CLI للأتمتة:</strong> يدعم CLI <code>keychainpgp</code> إنشاء المفاتيح والتشفير وفك التشفير والتوقيع والتحقق وإدارة سلسلة المفاتيح</li>
<li><strong>متوافق مع OpenPGP:</strong> المفاتيح والرسائل قابلة للتشغيل البيني مع GPG و PGP وأي أداة OpenPGP أخرى</li>
</ul>

<h2 id="frequently-asked-questions">الأسئلة الشائعة</h2>

<h3>هل GPG هو نفسه PGP؟</h3>

<p>لا. GPG (GnuPG) و PGP هما برنامجان مختلفان أنشأهما أشخاص مختلفون. أنشأ Phil Zimmermann PGP عام 1991 وهو اليوم منتج تجاري من Broadcom. أنشأ Werner Koch GPG عام 1997 كبديل حر ومفتوح المصدر. كلاهما يُطبّق معيار OpenPGP، لذا فهما متوافقان وظيفيًا.</p>

<h3>هل يمكن لمفاتيح GPG و PGP العمل معًا؟</h3>

<p>نعم. يستخدم GPG و PGP تنسيق مفتاح OpenPGP المحدد بمعيار IETF. يمكنك تصدير مفتاح عام من GPG واستيراده في PGP، أو في أي أداة متوافقة مع OpenPGP مثل KeychainPGP.</p>

<h3>هل GPG لا يزال آمنًا في 2026؟</h3>

<p>يظل GnuPG أداة آمنة ومُصانة بنشاط. استخدم أنواع مفاتيح حديثة (مثل Ed25519)، حافظ على تحديث برنامجك واتبع أفضل ممارسات إدارة المفاتيح. لدليل خطوة بخطوة، راجع مقالنا <a href="/ar/docs/pgp-for-beginners/">PGP للمبتدئين</a>.</p>

<h3>ماذا يعني OpenPGP؟</h3>

<p>OpenPGP هو معيار مفتوح نشرته IETF يحدد كيفية عمل التشفير المتوافق مع PGP. يحدد تنسيقات الرسائل وتنسيقات المفاتيح ومتطلبات الخوارزميات وبنى التوقيعات.</p>

<h3>هل أحتاج PGP أو GPG لاستخدام KeychainPGP؟</h3>

<p>لا. KeychainPGP هو تطبيق مستقل لا يعتمد على تثبيت PGP أو GnuPG. يستخدم مكتبة Sequoia-PGP، وهي تطبيق مستقل لمعيار OpenPGP مكتوب بلغة Rust. ومع ذلك، فإن المفاتيح والرسائل المشفرة المنشأة في KeychainPGP متوافقة تمامًا مع GPG و PGP.</p>
`
};

export default doc;
