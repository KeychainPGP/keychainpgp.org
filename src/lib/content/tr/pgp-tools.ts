import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'En İyi PGP Araçları ve Şifreleme Yazılımları 2026 — Kapsamlı Rehber',
	description: 'PGP araçları ve şifreleme yazılımlarının kapsamlı rehberi. Masaüstü, web, mobil ve CLI OpenPGP araçlarını karşılaştırarak ihtiyaçlarınıza uygun olanı bulun.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-are-pgp-tools', text: 'PGP Araçları Nedir?', level: 2 },
		{ id: 'desktop-pgp-software', text: 'Masaüstü PGP Yazılımları', level: 2 },
		{ id: 'gnupg-gpg', text: 'GnuPG (GPG)', level: 3 },
		{ id: 'gpg4win', text: 'Gpg4win', level: 3 },
		{ id: 'gpg-suite', text: 'GPG Suite', level: 3 },
		{ id: 'keychainpgp-desktop', text: 'KeychainPGP Desktop', level: 3 },
		{ id: 'web-based-pgp-tools', text: 'Web Tabanlı PGP Araçları', level: 2 },
		{ id: 'mobile-pgp-tools', text: 'Mobil PGP Araçları', level: 2 },
		{ id: 'cli-pgp-tools', text: 'Komut Satırı PGP Araçları', level: 2 },
		{ id: 'email-pgp-integration', text: 'E-posta PGP Entegrasyonu', level: 2 },
		{ id: 'pgp-tools-comparison', text: 'PGP Araçları Karşılaştırması', level: 2 },
		{ id: 'choosing-the-right-pgp-tool', text: 'Doğru PGP Aracını Seçmek', level: 2 },
		{ id: 'why-keychainpgp', text: 'Neden KeychainPGP', level: 2 },
		{ id: 'getting-started', text: 'Başlarken', level: 2 }
	],
	html: `
<h1>En İyi PGP Araçları ve Şifreleme Yazılımları 2026</h1>

<p>Bugün mesajları şifrelemek, dosyaları imzalamak ve OpenPGP anahtarlarını yönetmek için geniş bir PGP araçları yelpazesi mevcuttur. Bu araçlar masaüstü uygulamaları, web yardımcı programları, mobil uygulamalar, komut satırı arayüzleri ve e-posta eklentilerini kapsar. Bu rehber, bilinçli bir seçim yapmanıza yardımcı olmak için her büyük PGP yazılım kategorisini kapsar.</p>

<h2 id="what-are-pgp-tools">PGP Araçları Nedir?</h2>

<p>PGP araçları, açık anahtar kriptografisi için <a href="/tr/docs/what-is-pgp/">OpenPGP standardını</a> (RFC 4880 ve ardılları) uygulayan yazılım uygulamalarıdır. Anahtar çiftleri oluşturmanıza, mesajları şifrelemenize ve şifresini çözmenize, dijital imzalar oluşturup doğrulamanıza ve anahtar halkalarını yönetmenize olanak tanır. <a href="/tr/docs/pgp-vs-gpg/">PGP ile GPG arasındaki farkı</a> anlamak, neden bu kadar farklı aracın var olduğunu netleştirmeye yardımcı olur.</p>

<h2 id="desktop-pgp-software">Masaüstü PGP Yazılımları</h2>

<h3 id="gnupg-gpg">GnuPG (GPG)</h3>

<p><strong>GnuPG</strong> (GNU Privacy Guard), OpenPGP standardının açık kaynaklı referans uygulamasıdır. Neredeyse tüm işletim sistemlerinde mevcuttur, son derece güçlüdür ancak öncelikle komut satırı tabanlıdır. RSA, DSA, ECDSA, EdDSA ve geniş bir simetrik şifreleme yelpazesini destekler.</p>

<ul>
<li><strong>Platformlar:</strong> Windows, macOS, Linux, BSD</li>
<li><strong>Arayüz:</strong> Komut satırı (isteğe bağlı GUI ön yüzleriyle)</li>
<li><strong>Lisans:</strong> GPLv3</li>
</ul>

<h3 id="gpg4win">Gpg4win</h3>

<p><strong>Gpg4win</strong>, GnuPG'yi Kleopatra adlı yerel bir Windows grafik arayüzüyle birlikte paketler. Sertifika yönetimi, Windows Gezgini entegrasyonuyla dosya şifreleme ve OpenPGP'ye ek olarak S/MIME desteği sağlar.</p>

<ul>
<li><strong>Platformlar:</strong> Windows</li>
<li><strong>Lisans:</strong> GPLv3</li>
</ul>

<h3 id="gpg-suite">GPG Suite</h3>

<p><strong>GPG Suite</strong>, Gpg4win'in macOS karşılığıdır. Anahtar yönetimi için GPG Keychain, sağ tıklama menüsü GPGServices ve Apple Mail entegrasyonu için GPG Mail içerir.</p>

<ul>
<li><strong>Platformlar:</strong> macOS</li>
<li><strong>Lisans:</strong> Açık kaynak (Mail eklentisi ücretli)</li>
</ul>

<h3 id="keychainpgp-desktop">KeychainPGP Desktop</h3>

<p><strong>KeychainPGP</strong>, PGP şifrelemeye temelden farklı bir yaklaşım benimser. GnuPG'yi bir grafik arayüzle sarmak yerine, modern pano tabanlı bir iş akışı sağlamak için Rust ile yazılmış <strong>Sequoia-PGP</strong> kütüphanesini kullanır. Metin kopyalarsınız, genel bir kısayola basarsınız (şifrelemek için <code>Ctrl+Shift+E</code>, şifre çözmek için <code>Ctrl+Shift+D</code>) ve sonucu yapıştırırsınız — sisteminizde herhangi bir uygulama ile çalışır.</p>

<ul>
<li><strong>Platformlar:</strong> Windows, macOS, Linux, Android, Web, CLI</li>
<li><strong>Arayüz:</strong> Sistem tepsili GUI + genel kısayollar + CLI</li>
<li><strong>Lisans:</strong> MIT / Apache-2.0</li>
</ul>

<h2 id="web-based-pgp-tools">Web Tabanlı PGP Araçları</h2>

<p><a href="/tr/pgp-online-encrypt/">KeychainPGP web uygulaması</a>, aynı Rust tabanlı Sequoia-PGP motorunu WebAssembly'ye derler, böylece tüm kriptografik işlemler tarayıcınızda yerel olarak gerçekleşir. Sunucuya hiçbir veri iletilmez. <strong>Mailvelope</strong>, Gmail ve Outlook.com gibi webmail sağlayıcılarına doğrudan OpenPGP şifreleme entegre eden bir tarayıcı eklentisidir.</p>

<h2 id="mobile-pgp-tools">Mobil PGP Araçları</h2>

<p><strong>OpenKeychain</strong>, K-9 Mail entegrasyonuyla Android için olgun ve açık kaynaklı bir OpenPGP uygulamasıdır. <strong>Android için KeychainPGP</strong>, Ed25519/X25519 anahtar oluşturma ve masaüstü uygulamasıyla QR kod aracılığıyla anahtar senkronizasyonu ile aynı modern kriptografiyi mobile taşır.</p>

<h2 id="cli-pgp-tools">Komut Satırı PGP Araçları</h2>

<p><strong>GnuPG</strong> (<code>gpg</code>) baskın CLI aracıdır. <strong>KeychainPGP</strong>, anahtar oluşturma, şifreleme, şifre çözme, imzalama, doğrulama, anahtar inceleme ve anahtar halkası yönetimi için komutlar içeren kendi CLI'ını (<code>keychainpgp</code>) sağlar. <strong>Sequoia-PGP</strong> ayrıca modern Rust tabanlı başka bir CLI olan <code>sq</code>'yu da sağlar.</p>

<h2 id="email-pgp-integration">E-posta PGP Entegrasyonu</h2>

<p><strong>Mozilla Thunderbird</strong>, 78. sürümden bu yana yerleşik OpenPGP desteğine sahiptir. <strong>ProtonMail</strong>, arka planda OpenPGP kullanan uçtan uca şifreleme sağlar ancak tüm anahtar yönetimini soyutlar.</p>

<h2 id="pgp-tools-comparison">PGP Araçları Karşılaştırması</h2>

<table>
<tr><th>Araç</th><th>Platformlar</th><th>Arayüz</th><th>Varsayılan Anahtarlar</th><th>Açık Kaynak</th><th>İdeal Kullanım</th></tr>
<tr><td><strong>GnuPG</strong></td><td>Win/Mac/Linux</td><td>CLI</td><td>RSA-3072</td><td>Evet (GPLv3)</td><td>İleri düzey kullanıcılar, betik yazma</td></tr>
<tr><td><strong>Gpg4win</strong></td><td>Windows</td><td>GUI + CLI</td><td>RSA-3072</td><td>Evet (GPLv3)</td><td>Windows + S/MIME</td></tr>
<tr><td><strong>GPG Suite</strong></td><td>macOS</td><td>GUI + CLI</td><td>RSA-3072</td><td>Kısmi</td><td>macOS + Apple Mail</td></tr>
<tr><td><strong>KeychainPGP</strong></td><td>Win/Mac/Linux/Android/Web/CLI</td><td>GUI + Kısayollar + CLI</td><td>Ed25519/X25519</td><td>Evet (MIT/Apache-2.0)</td><td>Pano iş akışı</td></tr>
<tr><td><strong>Mailvelope</strong></td><td>Tarayıcı eklentisi</td><td>Webmail katmanı</td><td>RSA-4096</td><td>Evet (AGPLv3)</td><td>Gmail/Outlook</td></tr>
<tr><td><strong>OpenKeychain</strong></td><td>Android</td><td>Yerel GUI</td><td>RSA-3072</td><td>Evet (GPLv3)</td><td>Android anahtar yönetimi</td></tr>
<tr><td><strong>Thunderbird</strong></td><td>Win/Mac/Linux</td><td>E-posta istemcisi</td><td>RSA-3072</td><td>Evet (MPL 2.0)</td><td>Şifreli e-posta</td></tr>
<tr><td><strong>ProtonMail</strong></td><td>Web/iOS/Android</td><td>Webmail</td><td>X25519</td><td>Kısmi</td><td>Sıfır yapılandırma e-posta</td></tr>
</table>

<h2 id="choosing-the-right-pgp-tool">Doğru PGP Aracını Seçmek</h2>

<h3>Kullanım Kolaylığı</h3>
<p>GnuPG gibi geleneksel araçlar teknik kullanıcılar için tasarlanmıştır. KeychainPGP, algoritma seçimlerini ve yapılandırma dosyalarını ortadan kaldırır — bir anahtar oluşturun ve hemen şifrelemeye başlayın.</p>

<h3>Güvenlik ve Kriptografik Varsayılanlar</h3>
<p>KeychainPGP ve Sequoia'nın <code>sq</code>'su gibi modern araçlar, varsayılan olarak çok daha küçük anahtarlarla eşdeğer veya daha yüksek güvenlik sunan <strong>Ed25519/X25519</strong> kullanır. Altta yatan kütüphane de önemlidir: Sequoia-PGP (Rust) güçlü bellek güvenliği garantileri sunar.</p>

<h3>Platform Kapsamı</h3>
<p>KeychainPGP, Windows, macOS, Linux, Android ve web'i tutarlı bir arayüzle kapsar. GnuPG her yerde mevcuttur ancak her platformda farklı GUI ön yüzleri gerektirir.</p>

<h2 id="why-keychainpgp">Neden KeychainPGP</h2>

<p>KeychainPGP, onlarca yıldır PGP şifrelemeyi erişilmez kılan sorunları çözmek için tasarlanmıştır:</p>

<ul>
<li><strong>Pano iş akışı.</strong> Tek bir uygulamayla entegre olmak yerine KeychainPGP <em>tüm</em> uygulamalarla çalışır. Metin kopyalayın, tek bir kısayolla şifreleyin veya şifresini çözün ve sonucu yapıştırın.</li>
<li><strong>Varsayılan olarak modern kriptografi.</strong> Otomatik olarak <strong>Ed25519</strong> imzalama ve <strong>X25519</strong> şifreleme alt anahtarları.</li>
<li><strong>Tek kod tabanıyla çapraz platform.</strong> Tauri ile oluşturulmuş masaüstü uygulaması, WebAssembly üzerinden derlenen web uygulaması. Windows, macOS, Linux, Android veya tarayıcıda aynı arayüz ve kriptografik davranış.</li>
<li><strong>Sequoia-PGP tarafından desteklenir.</strong> Tüm bellek bozulması güvenlik açığı sınıflarını ortadan kaldıran bellek güvenliği garantileriyle Rust kriptografi motoru.</li>
<li><strong>Gerçekten ücretsiz ve açık kaynak.</strong> Ücretli katman, hesap, telemetri olmadan MIT / Apache-2.0 lisansı.</li>
</ul>

<h2 id="getting-started">Başlarken</h2>

<ul>
<li><strong>Hemen deneyin</strong> kurulum olmadan: tarayıcınızda <a href="/tr/pgp-online-encrypt/">çevrimiçi KeychainPGP PGP aracını</a> açın.</li>
<li><strong>Temelleri öğrenin</strong>: <a href="/tr/docs/what-is-pgp/">PGP Nedir?</a> rehberini okuyun.</li>
<li><strong>Ekosistemi anlayın</strong>: <a href="/tr/docs/pgp-vs-gpg/">PGP ve GPG</a> makalemiz standart, protokol ve araçların nasıl ilişkili olduğunu açıklar.</li>
<li><strong>Seçeneklerinizi karşılaştırın</strong>: <a href="/tr/blog/best-pgp-tools-2026/">2026'nın en iyi PGP araçları</a> sıralamamıza veya <a href="/tr/blog/pgp-software-comparison/">kapsamlı PGP yazılım karşılaştırmasına</a> bakın.</li>
<li><strong>KeychainPGP'yi indirin</strong>: masaüstü uygulamasını <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases</a> sayfasından edinin.</li>
</ul>
`
};

export default doc;
