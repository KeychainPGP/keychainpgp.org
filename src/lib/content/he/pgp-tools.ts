import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'כלי PGP ותוכנות הצפנה המובילים ב-2026 — מדריך מקיף',
	description: 'מדריך מקיף של כלי PGP ותוכנות הצפנה. השוו כלי OpenPGP לשולחן העבודה, לאינטרנט, למובייל ולשורת הפקודה כדי למצוא את המתאים לצרכים שלכם.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'מהם כלי PGP?', level: 2 },
		{ id: 'desktop-pgp-software', text: 'תוכנות PGP לשולחן העבודה', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'כלי PGP מקוונים', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'כלי PGP למובייל', level: 2 },
		{ id: 'cli-pgp-tools', text: 'כלי PGP לשורת הפקודה', level: 2 },
		{ id: 'email-pgp-integration', text: 'שילוב PGP בדואר אלקטרוני', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'השוואת כלי PGP', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'בחירת כלי ה-PGP הנכון', level: 2 },
		{ id: 'why-keychainpgp', text: 'מדוע KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'תחילת העבודה', level: 2 }
	],
	html: `
<h1>כלי PGP ותוכנות הצפנה המובילים ב-2026</h1>

<p>מגוון רחב של כלי PGP זמין כיום להצפנת הודעות, חתימה על קבצים וניהול מפתחות OpenPGP. כלים אלה מכסים יישומי שולחן עבודה, כלים מבוססי אינטרנט, יישומי מובייל, ממשקי שורת פקודה ותוספי דואר אלקטרוני. מדריך זה מכסה כל קטגוריה עיקרית של תוכנות PGP כדי לעזור לכם לעשות בחירה מושכלת.</p>

<h2 id="what-are-pgp-tools">מהם כלי PGP?</h2>

<p>כלי PGP הם יישומי תוכנה המממשים את <a href="/he/docs/what-is-pgp/">תקן OpenPGP</a> (RFC 4880 ויורשיו) עבור קריפטוגרפיית מפתח ציבורי. הם מאפשרים ליצור זוגות מפתחות, להצפין ולפענח הודעות, ליצור ולאמת חתימות דיגיטליות ולנהל מחזיקי מפתחות. הבנת <a href="/he/docs/pgp-vs-gpg/">ההבדל בין PGP ל-GPG</a> עוזרת להבהיר מדוע קיימים כל כך הרבה כלים שונים.</p>

<h2 id="desktop-pgp-software">תוכנות PGP לשולחן העבודה</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong> (GNU Privacy Guard) הוא מימוש קוד פתוח הסטנדרטי של תקן OpenPGP. זמין כמעט בכל מערכת הפעלה, הוא חזק ביותר אך מבוסס בעיקר על שורת פקודה. הוא תומך ב-RSA, DSA, ECDSA, EdDSA ומגוון רחב של הצפנות סימטריות.</p>

<ul>
<li><strong>פלטפורמות:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>ממשק:</strong> שורת פקודה (עם חזיתות ממשק גרפי אופציונליות)</li>
<li><strong>רישיון:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong> מאגד את GnuPG עם ממשק גרפי מקורי ל-Windows בשם Kleopatra. הוא מספק ניהול אישורים, הצפנת קבצים באמצעות שילוב ב-Windows Explorer ותמיכה ב-S/MIME בנוסף ל-OpenPGP.</p>

<ul>
<li><strong>פלטפורמות:</strong> Windows</li>
<li><strong>רישיון:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong> הוא המקביל ל-Gpg4win עבור macOS. הוא כולל את GPG Keychain לניהול מפתחות, תפריט הקשר GPGServices ו-GPG Mail לשילוב עם Apple Mail.</p>

<ul>
<li><strong>פלטפורמות:</strong> macOS</li>
<li><strong>רישיון:</strong> קוד פתוח (תוסף Mail בתשלום)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong> נוקט גישה שונה מהותית להצפנת PGP. במקום לעטוף את GnuPG בממשק גרפי, הוא משתמש בספריית <strong>Sequoia-PGP</strong> שנכתבה ב-Rust כדי לספק זרימת עבודה מודרנית מבוססת לוח העתקה. אתם מעתיקים טקסט, לוחצים קיצור מקלדת גלובלי (<code>Ctrl+Shift+E</code> להצפנה, <code>Ctrl+Shift+D</code> לפענוח), ומדביקים את התוצאה — זה עובד עם כל יישום במערכת שלכם.</p>

<ul>
<li><strong>פלטפורמות:</strong> Windows, macOS, Linux, Android, Web, CLI</li>
<li><strong>ממשק:</strong> ממשק גרפי עם מגש מערכת + קיצורי מקלדת גלובליים + CLI</li>
<li><strong>רישיון:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">כלי PGP מקוונים</h2>

<p><a href="/he/pgp-online-encrypt/">יישום האינטרנט של KeychainPGP</a> מקמפל את אותו מנוע Sequoia-PGP ב-Rust ל-WebAssembly, כך שכל הפעולות הקריפטוגרפיות מתבצעות באופן מקומי בדפדפן שלכם. שום מידע לא מועבר לשרת. <strong>Mailvelope</strong> הוא תוסף דפדפן המשלב הצפנת OpenPGP ישירות בספקי דואר אינטרנט כמו Gmail ו-Outlook.com.</p>

<h2 id="mobile-pgp-tools">כלי PGP למובייל</h2>

<p><strong>OpenKeychain</strong> הוא יישום OpenPGP בוגר וקוד פתוח עבור Android, עם שילוב ב-K-9 Mail. <strong>KeychainPGP ל-Android</strong> מביא את אותה קריפטוגרפיה מודרנית למובייל, עם יצירת מפתחות Ed25519/X25519 וסנכרון מפתחות באמצעות קוד QR עם יישום שולחן העבודה.</p>

<h2 id="cli-pgp-tools">כלי PGP לשורת הפקודה</h2>

<p><strong>GnuPG</strong> (<code>gpg</code>) הוא כלי ה-CLI הדומיננטי. <strong>KeychainPGP</strong> מספק CLI משלו (<code>keychainpgp</code>) עם פקודות ליצירת מפתחות, הצפנה, פענוח, חתימה, אימות, בדיקת מפתחות וניהול מחזיק מפתחות. <strong>Sequoia-PGP</strong> מספק גם את <code>sq</code>, CLI מודרני נוסף מבוסס Rust.</p>

<h2 id="email-pgp-integration">שילוב PGP בדואר אלקטרוני</h2>

<p><strong>Mozilla Thunderbird</strong> כולל תמיכה מובנית ב-OpenPGP מאז גרסה 78. <strong>ProtonMail</strong> מספק הצפנה מקצה לקצה באמצעות OpenPGP מאחורי הקלעים, אך מפשט את כל ניהול המפתחות.</p>

<h2 id="pgp-tools-comparison">השוואת כלי PGP</h2>

<table>
<tr><th>כלי</th><th>פלטפורמות</th><th>ממשק</th><th>מפתחות ברירת מחדל</th><th>קוד פתוח</th><th>אידיאלי עבור</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>כן (GPLv3)</td><td>משתמשים מתקדמים, סקריפטים</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>ממשק גרפי + CLI</td><td>RSA-3072</td><td>כן (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>ממשק גרפי + CLI</td><td>RSA-3072</td><td>חלקי</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>ממשק גרפי + קיצורים + CLI</td><td>Ed25519/X25519</td><td>כן (MIT/Apache-2.0)</td><td>זרימת עבודה של לוח העתקה</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>תוסף דפדפן</td><td>שכבת-על לדואר אינטרנט</td><td>RSA-4096</td><td>כן (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>ממשק מקורי</td><td>RSA-3072</td><td>כן (GPLv3)</td><td>ניהול מפתחות Android</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>לקוח דואר</td><td>RSA-3072</td><td>כן (MPL 2.0)</td><td>דואר מוצפן</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>דואר אינטרנט</td><td>X25519</td><td>חלקי</td><td>דואר ללא הגדרות</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">בחירת כלי ה-PGP הנכון</h2>

<h3>קלות שימוש</h3>
<p>כלים מסורתיים כמו GnuPG מיועדים למשתמשים טכניים. KeychainPGP מבטל את בחירת האלגוריתמים וקבצי ההגדרות — צרו מפתח והתחילו להצפין מיד.</p>

<h3>אבטחה וברירות מחדל קריפטוגרפיות</h3>
<p>כלים מודרניים כמו KeychainPGP ו-<code>sq</code> של Sequoia משתמשים כברירת מחדל ב-<strong>Ed25519/X25519</strong>, המציעים אבטחה שוות ערך או טובה יותר עם מפתחות קטנים בהרבה. גם הספרייה הבסיסית חשובה: Sequoia-PGP (Rust) מציעה אחריות חזקה לבטיחות זיכרון.</p>

<h3>כיסוי פלטפורמות</h3>
<p>KeychainPGP מכסה Windows, macOS, Linux, Android ואינטרנט עם ממשק אחיד. GnuPG זמין בכל מקום אך דורש חזיתות ממשק גרפי שונות בכל פלטפורמה.</p>

<h2 id="why-keychainpgp">מדוע KeychainPGP</h2>

<p>KeychainPGP תוכנן כדי לפתור את הבעיות שהפכו את הצפנת PGP ללא נגישה במשך עשורים:</p>

<ul>
<li><strong>זרימת עבודה של לוח העתקה.</strong> במקום להשתלב ביישום אחד, KeychainPGP עובד עם <em>כל</em> היישומים. העתיקו טקסט, הצפינו או פענחו בקיצור מקשים אחד, והדביקו את התוצאה.</li>
<li><strong>קריפטוגרפיה מודרנית כברירת מחדל.</strong> מפתחות חתימה <strong>Ed25519</strong> ומפתחות משנה להצפנה <strong>X25519</strong> באופן אוטומטי.</li>
<li><strong>חוצה פלטפורמות עם בסיס קוד אחד.</strong> יישום שולחן עבודה בנוי עם Tauri, יישום אינטרנט מקומפל באמצעות WebAssembly. ממשק והתנהגות קריפטוגרפית זהים ב-Windows, macOS, Linux, Android או דפדפן.</li>
<li><strong>מופעל על ידי Sequoia-PGP.</strong> מנוע קריפטוגרפי ב-Rust עם אחריות לבטיחות זיכרון המבטלת מחלקות שלמות של פגיעויות.</li>
<li><strong>חופשי וקוד פתוח באמת.</strong> רישיון MIT / Apache-2.0 ללא רמות בתשלום, ללא חשבונות, ללא טלמטריה.</li>
</ul>

<h2 id="getting-started">תחילת העבודה</h2>

<ul>
<li><strong>נסו עכשיו</strong> ללא התקנה: פתחו את <a href="/he/pgp-online-encrypt/">כלי ה-PGP המקוון של KeychainPGP</a> בדפדפן שלכם.</li>
<li><strong>למדו את היסודות</strong>: קראו <a href="/he/docs/what-is-pgp/">מהו PGP?</a></li>
<li><strong>הבינו את המערכת האקולוגית</strong>: המאמר שלנו על <a href="/he/docs/pgp-vs-gpg/">PGP מול GPG</a> מסביר כיצד התקן, הפרוטוקול והכלים קשורים.</li>
<li><strong>השוו את האפשרויות שלכם</strong>: ראו את הדירוג שלנו של <a href="/he/blog/best-pgp-tools-2026/">כלי PGP המובילים ב-2026</a> או את <a href="/he/blog/pgp-software-comparison/">ההשוואה המקיפה של תוכנות PGP</a>.</li>
<li><strong>הורידו את KeychainPGP</strong>: קבלו את יישום שולחן העבודה ב-<a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a>.</li>
</ul>
`
};

export default doc;
