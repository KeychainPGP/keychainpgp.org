import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP מול GPG: מה ההבדל בין PGP ל-GPG?',
	description: 'גלו את ההבדל בין PGP ל-GPG. השוו Pretty Good Privacy, GnuPG ותקן OpenPGP כדי למצוא את כלי ההצפנה הנכון.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'מה ההבדל?', level: 2 },
		{ id: 'what-is-pgp', text: 'מהו PGP?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'מהו GPG (GnuPG)?', level: 2 },
		{ id: 'what-is-openpgp', text: 'מהו OpenPGP?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'טבלת השוואה PGP מול GPG', level: 2 },
		{ id: 'key-differences-explained', text: 'ההבדלים המרכזיים', level: 2 },
		{ id: 'which-should-you-use', text: 'באיזה לבחור?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'היכן KeychainPGP משתלב', level: 2 },
		{ id: 'frequently-asked-questions', text: 'שאלות נפוצות', level: 2 }
	],
	html: `
<h1>PGP מול GPG: מה ההבדל בין PGP ל-GPG?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">מה ההבדל בין PGP ל-GPG?</h2>

<p>ההבדל בין PGP ל-GPG נעוץ במקורם וברישוי שלהם. <strong>PGP</strong> (Pretty Good Privacy) הוא תוכנית ההצפנה הקניינית המקורית שנוצרה על ידי Phil Zimmermann ב-1991. <strong>GPG</strong> (GNU Privacy Guard, הנקרא גם GnuPG) הוא מימוש מחדש חופשי וקוד פתוח של אותו רעיון, שפותח במסגרת פרויקט GNU. שתי התוכנות מממשות את תקן <strong>OpenPGP</strong>, כלומר הן מייצרות הודעות מוצפנות תואמות ויכולות לעבוד עם המפתחות של השנייה. בפועל, GPG הוא הכלי שרוב האנשים משתמשים בו כיום כי הוא חינמי, מתוחזק באופן פעיל וזמין בכל מערכות ההפעלה העיקריות. אם אתם חדשים בהצפנה, המדריך שלנו <a href="/he/docs/pgp-for-beginners/">PGP למתחילים</a> מציג את המושגים הבסיסיים צעד אחר צעד.</p>

<h2 id="what-is-pgp">מהו PGP?</h2>

<p>PGP הוא ראשי תיבות של <strong>Pretty Good Privacy</strong>. Phil Zimmermann כתב את הגרסה הראשונה ב-1991 ופרסם אותה ככלי חינמי לפעילים ואזרחים רגילים שזקוקים להצפנה חזקה. התוכנה שילבה הצפנת מפתח סימטרי עם קריפטוגרפיית מפתח ציבורי.</p>

<p>לאחר חקירה פדרלית של שלוש שנים (שנזנחה ב-1996), זימרמן ייסד את PGP Inc. החברה החליפה ידיים מספר פעמים: Network Associates ב-1997, PGP Corporation ב-2002, ואז Symantec (כיום Broadcom) ב-2010. כיום, PGP קיים כחבילת מוצרים מסחריים המיועדים בעיקר לארגונים.</p>

<p>למידע נוסף על הטכנולוגיה הבסיסית, ראו את המאמר המקיף שלנו על <a href="/he/docs/what-is-pgp/">מהו PGP וכיצד הוא פועל</a>.</p>

<h2 id="what-is-gpg-gnupg">מהו GPG (GnuPG)?</h2>

<p>GPG, או <strong>GNU Privacy Guard (GnuPG)</strong>, הוא מימוש חופשי וקוד פתוח של תקן OpenPGP. Werner Koch התחיל את הפרויקט ב-1997 עם מימון מהממשלה הגרמנית ופרסם את גרסה 1.0 ב-1999. GnuPG נוצר במיוחד כדי לספק חלופה חופשית לחלוטין לתוכנת PGP הקניינית.</p>

<p>GnuPG הוא חלק מפרויקט GNU ומורשה תחת רישיון GNU General Public License (GPL). הוא כלול כברירת מחדל ברוב הפצות Linux. כלי שורת הפקודה <code>gpg</code> הוא הממשק שאיתו רוב המפתחים ומנהלי המערכות מתקשרים. לסקירה של הכלים הזמינים, ראו את <a href="/he/docs/pgp-tools/">השוואת כלי PGP</a> שלנו.</p>

<h2 id="what-is-openpgp">מהו OpenPGP?</h2>

<p><strong>OpenPGP</strong> אינו מוצר או תוכנה. זהו תקן פתוח המגדיר את פורמטי ההודעות, פורמטי המפתחות והנהלים הקריפטוגרפיים שכלים תואמי PGP חייבים לעקוב אחריהם. ה-IETF פרסם את המפרט המקורי כ-<strong>RFC 2440</strong> ב-1998, והגרסה המוזכרת ביותר היא <strong>RFC 4880</strong> (2007). עדכון משמעותי, <strong>RFC 9580</strong> (2024), מחדש את התקן עם תמיכה ב-Ed25519 והצפנת AEAD.</p>

<p>קיומו של OpenPGP מאפשר פעולה הדדית. מכיוון ש-PGP ו-GPG מממשים את אותו תקן, הודעה שהוצפנה עם GPG יכולה להיות מפוענחת על ידי PGP, ולהפך.</p>

<h2 id="pgp-vs-gpg-comparison-table">טבלת השוואה PGP מול GPG</h2>

<table>
<tr><th>מאפיין</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>סוג</strong></td><td>תוכנה מסחרית</td><td>תוכנה חופשית/קוד פתוח</td><td>תקן פתוח</td></tr>
<tr><td><strong>רישיון</strong></td><td>קנייני</td><td>GPL (חינמי)</td><td>מפרט IETF</td></tr>
<tr><td><strong>עלות</strong></td><td>רישיון בתשלום</td><td>חינמי</td><td>לא רלוונטי</td></tr>
<tr><td><strong>פלטפורמות</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>לא רלוונטי</td></tr>
<tr><td><strong>ממשק גרפי כלול</strong></td><td>כן (קונסול ארגוני)</td><td>לא (ממשקים גרפיים של צד שלישי זמינים)</td><td>לא רלוונטי</td></tr>
<tr><td><strong>קוד מקור זמין</strong></td><td>לא</td><td>כן</td><td>תקן ציבורי</td></tr>
</table>

<h2 id="key-differences-explained">ההבדלים המרכזיים</h2>

<h3>רישיון ועלות</h3>

<p>PGP הוא תוכנה קניינית הנמכרת תחת רישיון מסחרי. GPG מפורסם תחת ה-GPL, כלומר כל אחד יכול להוריד אותו, להשתמש בו, לשנות אותו ולהפיץ אותו מחדש בחינם. עבור יחידים, צוותים קטנים ופרויקטי קוד פתוח, GPG הוא הבחירה המובנית מבחינת עלות.</p>

<h3>תמיכה בפלטפורמות</h3>

<p>GnuPG פועל כמעט בכל מערכת Unix ויש לו בניות רשמיות עבור Windows ו-macOS. לצרכים חוצי פלטפורמות, כלים מודרניים כמו KeychainPGP מספקים בניות מקוריות עבור Windows, macOS, Linux ו-Android מבסיס קוד אחד.</p>

<h3>חוויית משתמש</h3>

<p>PGP המסחרי כולל ממשק גרפי לפריסה ארגונית. GnuPG הוא מהותית כלי שורת פקודה. כלים כמו KeychainPGP מציעים ממשק גרפי מקורי שמטפל בניהול מפתחות, הצפנה, פענוח וחתימה ללא שינון אפשרויות שורת פקודה. תוכלו לנסות הצפנת PGP ישירות בדפדפן עם <a href="/he/pgp-online-encrypt/">כלי ההצפנה המקוון של PGP</a> שלנו.</p>

<h2 id="which-should-you-use">באיזה לבחור?</h2>

<ul>
<li><strong>ארגון עם תשתית Broadcom/Symantec קיימת:</strong> PGP מסחרי עשוי להיות הדרך הקלה ביותר.</li>
<li><strong>מפתחים ומנהלי מערכות:</strong> GnuPG הוא הכלי הסטנדרטי, מותקן כברירת מחדל ברוב השרתים.</li>
<li><strong>משתמשים המעוניינים בפרטיות עם ממשק גרפי:</strong> שקלו יישום OpenPGP מודרני כמו KeychainPGP.</li>
<li><strong>צרכי הצפנה באינטרנט או מהירים:</strong> <a href="/he/pgp-online-encrypt/">כלי הצפנת PGP מקוון</a> יכול לטפל במשימות חד-פעמיות ללא התקנת דבר.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">היכן KeychainPGP משתלב</h2>

<p><a href="/">KeychainPGP</a> הוא יישום שולחן עבודה מודרני וקוד פתוח המממש את תקן OpenPGP באמצעות <strong>Sequoia-PGP</strong>, ספריית OpenPGP שנכתבה מאפס ב-Rust. הוא אינו PGP (המוצר המסחרי) וגם לא GPG (GnuPG). זהו מימוש עצמאי המתקיים לצד שניהם במערכת האקולוגית של OpenPGP.</p>

<p>סיבות מרכזיות לשקול את KeychainPGP:</p>

<ul>
<li><strong>חוצה פלטפורמות:</strong> בניות מקוריות עבור Windows, macOS, Linux ו-Android, בנוסף ליישום אינטרנט ו-CLI</li>
<li><strong>קריפטוגרפיה מודרנית:</strong> בנוי על Sequoia-PGP עם תמיכה ב-Curve25519/Ed25519 ו-AEAD</li>
<li><strong>קוד פתוח:</strong> רישיון כפול MIT / Apache-2.0, ניתן לביקורת מלאה</li>
<li><strong>ידידותי למשתמש:</strong> ממשק גרפי עם זרימת עבודה מבוססת לוח העתקה וקיצורי מקלדת גלובליים</li>
<li><strong>CLI לאוטומציה:</strong> ה-CLI <code>keychainpgp</code> תומך ביצירת מפתחות, הצפנה, פענוח, חתימה, אימות וניהול מחזיק מפתחות</li>
<li><strong>תואם OpenPGP:</strong> מפתחות והודעות ניתנים לפעולה הדדית עם GPG, PGP וכל כלי OpenPGP אחר</li>
</ul>

<h2 id="frequently-asked-questions">שאלות נפוצות</h2>

<h3>האם GPG זהה ל-PGP?</h3>

<p>לא. GPG (GnuPG) ו-PGP הן תוכנות נפרדות שנוצרו על ידי אנשים שונים. PGP נוצר על ידי Phil Zimmermann ב-1991 והוא כיום מוצר מסחרי של Broadcom. GPG נוצר על ידי Werner Koch ב-1997 כחלופה חופשית וקוד פתוח. שניהם מממשים את תקן OpenPGP, ולכן הם תואמים פונקציונלית.</p>

<h3>האם מפתחות GPG ו-PGP יכולים לעבוד יחד?</h3>

<p>כן. GPG ו-PGP משתמשים בפורמט מפתח OpenPGP שמוגדר בתקן IETF. תוכלו לייצא מפתח ציבורי מ-GPG ולייבא אותו ל-PGP, או לכל כלי תואם OpenPGP אחר כמו KeychainPGP.</p>

<h3>האם GPG עדיין מאובטח ב-2026?</h3>

<p>GnuPG נשאר כלי מאובטח ומתוחזק באופן פעיל. השתמשו בסוגי מפתחות מודרניים (כמו Ed25519), עדכנו את התוכנה ועקבו אחרי שיטות עבודה מומלצות לניהול מפתחות. למדריך צעד אחר צעד, ראו את המאמר שלנו <a href="/he/docs/pgp-for-beginners/">PGP למתחילים</a>.</p>

<h3>מה המשמעות של OpenPGP?</h3>

<p>OpenPGP הוא תקן פתוח שפורסם על ידי ה-IETF המגדיר כיצד פועלת הצפנה תואמת PGP. הוא מציין פורמטי הודעות, פורמטי מפתחות, דרישות אלגוריתמים ומבני חתימות.</p>

<h3>האם אני צריך PGP או GPG כדי להשתמש ב-KeychainPGP?</h3>

<p>לא. KeychainPGP הוא יישום עצמאי שאינו תלוי בהתקנה של PGP או GnuPG. הוא משתמש בספריית Sequoia-PGP, מימוש עצמאי של תקן OpenPGP שנכתב ב-Rust. עם זאת, מפתחות והודעות מוצפנות שנוצרו ב-KeychainPGP תואמים לחלוטין ל-GPG ו-PGP.</p>
`
};

export default doc;
