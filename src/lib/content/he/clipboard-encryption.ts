import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'הצפנה באמצעות לוח העתקה עם PGP: גישת clipboard-first להודעות מאובטחות',
	description: 'למדו כיצד עובדת הצפנת PGP באמצעות לוח ההעתקה, למה היא עדיפה על הצפנה מבוססת קבצים ל-OPSEC יומיומי וכיצד KeychainPGP משתמש בלוח ההעתקה להצפנת הודעות בכל אפליקציה.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'מה זה הצפנת לוח העתקה?', level: 2 },
		{ id: 'why-clipboard-first', text: 'למה clipboard-first?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'כיצד KeychainPGP משתמש בלוח ההעתקה', level: 2 },
		{ id: 'security-considerations', text: 'שיקולי אבטחה', level: 2 },
		{ id: 'opsec-mode', text: 'מצב OPSEC', level: 2 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'לוח העתקה מול הצפנת קבצים', level: 2 },
		{ id: 'threat-model', text: 'מודל איום', level: 2 },
		{ id: 'best-practices', text: 'שיטות עבודה מומלצות', level: 2 }
	],
	html: `
<h1>הצפנה באמצעות לוח העתקה עם PGP</h1>

<h2 id="what-is-clipboard-encryption">מה זה הצפנת לוח העתקה?</h2>
<p>הצפנת PGP באמצעות לוח העתקה היא שיטה להצפנה ופענוח טקסט על ידי קריאה וכתיבה ישירה מלוח ההעתקה של מערכת ההפעלה, במקום לעבוד עם קבצים בדיסק. פשוט העתיקו את הטקסט, הפעילו הצפנה בקיצור מקשים והדביקו את ההודעה המוצפנת היכן שצריך. זה הבסיס של אופן הפעולה של <a href="/he/pgp-online-encrypt/">KeychainPGP</a> בשולחן העבודה.</p>

<p>אם אתם חדשים ב-PGP, התחילו עם <a href="/he/docs/what-is-pgp/">מה זה PGP?</a></p>

<h2 id="why-clipboard-first">למה clipboard-first?</h2>
<ul>
<li><strong>עצמאות מאפליקציות.</strong> עובד עם כל אפליקציה שתומכת בהעתק-הדבק.</li>
<li><strong>ללא קבצי טקסט רגיל בדיסק.</strong> הטקסט הרגיל נשאר רק בזיכרון נדיף.</li>
<li><strong>פחות חיכוך.</strong> שלושה שלבים: העתק, קיצור מקשים, הדבק.</li>
<li><strong>תאימות לתקשורת מודרנית.</strong> Webmail, Signal, Slack, Discord — כולם תומכים בהדבקת טקסט.</li>
</ul>

<h2 id="how-keychainpgp-uses-the-clipboard">כיצד KeychainPGP משתמש בלוח ההעתקה</h2>
<ol>
<li><strong>העתיקו</strong> את ההודעה מכל אפליקציה.</li>
<li><strong>לחצו <code>Ctrl+Shift+E</code></strong>. KeychainPGP קורא מלוח ההעתקה, מצפין וכותב את התוצאה בפורמט PGP ASCII-armored בחזרה.</li>
<li><strong>הדביקו</strong> את ההודעה המוצפנת ביעד.</li>
</ol>

<p>KeychainPGP משתמש ב-<a href="https://sequoia-pgp.org/">Sequoia-PGP</a> ב-Rust עם Ed25519/X25519 כברירת מחדל.</p>

<h2 id="security-considerations">שיקולי אבטחה</h2>
<p>השביתו את היסטוריית לוח ההעתקה של מערכת ההפעלה והימנעו ממנהלי לוח העתקה של צד שלישי. KeychainPGP מנקה אוטומטית את לוח ההעתקה 30 שניות לאחר כתיבת טקסט מפוענח. ניתן להגדיר עד 5 שניות. כתוב ב-Rust עם אחריות zerification של Sequoia-PGP.</p>

<h2 id="opsec-mode">מצב OPSEC</h2>
<p>למשתמשים בסביבות עוינות: כותרת חלון מוסווית, מפתחות רק ב-RAM, כפתור ניקוי חירום ותמיכה ב-proxy Tor.</p>

<h2 id="clipboard-encryption-vs-file-encryption">לוח העתקה מול הצפנת קבצים</h2>

<table>
<tr><th>היבט</th><th>הצפנת לוח העתקה</th><th>הצפנת קבצים</th></tr>
<tr><td><strong>קלט/פלט</strong></td><td>לוח ההעתקה (זיכרון נדיף)</td><td>קבצים בדיסק (אחסון קבוע)</td></tr>
<tr><td><strong>עקבות טקסט רגיל</strong></td><td>אין בדיסק</td><td>קובץ מקורי, קבצים זמניים עלולים להישאר</td></tr>
<tr><td><strong>תמיכה באפליקציות</strong></td><td>כל אפליקציה עם העתק/הדבק</td><td>דורש גישה למערכת קבצים</td></tr>
<tr><td><strong>שלבים</strong></td><td>3</td><td>5+</td></tr>
<tr><td><strong>טביעה פורנזית</strong></td><td>מינימלית (רק RAM)</td><td>משמעותית</td></tr>
</table>

<h2 id="threat-model">מודל איום</h2>

<h3>נגד מה הצפנת לוח העתקה מגינה</h3>
<ul>
<li><strong>מעקב רשת.</strong> הודעות מוצפנות אטומות לכל צופה ברשת.</li>
<li><strong>יירוט אימיילים והודעות.</strong> ללא המפתח הפרטי, התוכן בלתי ניתן לשחזור.</li>
<li><strong>פריצת אחסון.</strong> הודעות PGP נשארות מוגנות.</li>
</ul>

<h3>נגד מה הצפנת לוח העתקה לא מגינה</h3>
<ul>
<li><strong>מקליט מקשים במכשיר.</strong></li>
<li><strong>גישה פיזית למכשיר לא נעול.</strong></li>
<li><strong>מפתחות פרטיים שנפרצו.</strong></li>
<li><strong>ניתוח תעבורה.</strong></li>
</ul>

<h2 id="best-practices">שיטות עבודה מומלצות</h2>

<ol>
<li><strong>השביתו את היסטוריית לוח ההעתקה.</strong></li>
<li><strong>השאירו ניקוי אוטומטי מופעל.</strong> 5-15 שניות מספיקים.</li>
<li><strong>השתמשו במצב OPSEC כשצריך.</strong></li>
<li><strong>אמתו מפתחות נמענים מחוץ לערוץ.</strong></li>
<li><strong>השתמשו בביטויי סיסמה חזקים.</strong></li>
<li><strong>שמרו על המכשיר מאובטח.</strong></li>
<li><strong>העדיפו מפתחות Ed25519/X25519.</strong></li>
<li><strong>בדקו את זרימת העבודה שלכם.</strong></li>
</ol>

<p><a href="/he/pgp-online-encrypt/">נסו את KeychainPGP בדפדפן</a> כדי לראות את workflow ה-clipboard-first בפעולה.</p>
`
};

export default doc;
