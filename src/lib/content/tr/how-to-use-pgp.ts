import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP Nasıl Kullanılır: Adım Adım Şifreleme Öğreticisi (2026)',
	description: 'PGP şifrelemeyi adım adım nasıl kullanacağınızı öğrenin. Anahtar oluşturma, mesaj şifreleme ve şifre çözme, dijital imzalar ve anahtar paylaşımı hakkında kapsamlı PGP öğreticisi.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'how-to-use-pgp-overview', text: 'PGP Nasıl Kullanılır', level: 1 },
		{ id: 'what-you-need-before-you-start', text: 'Başlamadan Önce Gerekenler', level: 2 },
		{ id: 'step-1-generate-a-pgp-key-pair', text: 'Adım 1: Anahtar Çifti Oluşturun', level: 2 },
		{ id: 'step-2-share-your-public-key', text: 'Adım 2: Açık Anahtarınızı Paylaşın', level: 2 },
		{ id: 'step-3-import-your-contacts-public-keys', text: 'Adım 3: Kişilerinizin Anahtarlarını İçe Aktarın', level: 2 },
		{ id: 'step-4-encrypt-a-message', text: 'Adım 4: Mesaj Şifreleyin', level: 2 },
		{ id: 'step-5-decrypt-a-message', text: 'Adım 5: Mesaj Şifresini Çözün', level: 2 },
		{ id: 'step-6-sign-a-message', text: 'Adım 6: Mesaj İmzalayın', level: 2 },
		{ id: 'step-7-verify-a-signature', text: 'Adım 7: İmza Doğrulayın', level: 2 },
		{ id: 'keychainpgp-clipboard-workflow', text: 'KeychainPGP Pano İş Akışı', level: 2 },
		{ id: 'web-app-vs-desktop-app', text: 'Web Uygulaması ve Masaüstü Uygulaması', level: 2 },
		{ id: 'frequently-asked-questions', text: 'SSS', level: 2 }
	],
	html: `
<h1>PGP Nasıl Kullanılır</h1>

<p>PGP kullanmak için bir anahtar çifti (açık anahtar ve özel anahtar) oluşturur, açık anahtarınızı iletişim kurmak istediğiniz kişilerle paylaşır, onların açık anahtarlarını içe aktarır, ardından bu anahtarları mesajları şifrelemek, şifresini çözmek, imzalamak ve doğrulamak için kullanırsınız. PGP şifreleme, yalnızca hedeflenen alıcının mesajınızı okuyabilmesini sağlarken, dijital imzalar mesajın gerçekten sizden geldiğini kanıtlar. <a href="/tr/pgp-online-encrypt/">KeychainPGP</a> gibi araçlar, pano tabanlı bir iş akışı ile bu süreci erişilebilir hale getirir — komut satırı gerekmez.</p>

<p>Bu PGP öğreticisi, ilk anahtar çiftinizi oluşturmaktan şifrelenmiş mesaj gönderip almaya kadar her adımda size rehberlik eder. Açık anahtar kriptografisi kavramına yeniyseniz, önce <a href="/tr/docs/what-is-pgp/">PGP Nedir?</a> veya <a href="/tr/docs/pgp-for-beginners/">Yeni Başlayanlar İçin PGP</a> rehberlerini okumayı düşünün.</p>

<hr>

<h2 id="what-you-need-before-you-start">Başlamadan Önce Gerekenler</h2>

<p>İlk PGP mesajınızı şifrelemeden önce bir PGP uygulamasına ihtiyacınız var:</p>

<ul>
<li><strong>KeychainPGP Web Uygulaması</strong> — Herhangi bir modern tarayıcıda <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracını</a> açın. Her şey Rust'tan derlenen WebAssembly aracılığıyla yerel olarak çalışır. Kurulum yok, hesap yok, sunucuya veri gönderilmez.</li>
<li><strong>KeychainPGP Masaüstü Uygulaması</strong> — <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">GitHub releases sayfasından</a> Windows, macOS, Linux veya Android için yerel uygulamayı indirin. Masaüstü uygulaması genel kısayollar, sistem tepsisi entegrasyonu, otomatik pano temizleme ve QR kod senkronizasyonu ekler.</li>
<li><strong>KeychainPGP CLI</strong> — <code>keychainpgp</code> CLI, anahtar oluşturma, şifreleme, şifre çözme, imzalama, doğrulama ve anahtar halkası yönetimi için komutlar sağlar. Betik yazma ve otomasyon için idealdir.</li>
<li><strong>GnuPG (GPG)</strong> — Geleneksel komut satırı aracı. Güçlü ama terminal bilgisi gerektirir. Ayrıntılı karşılaştırma için <a href="/tr/docs/pgp-vs-gpg/">PGP ve GPG</a> sayfasına bakın.</li>
</ul>

<blockquote><p><strong>İpucu:</strong> Hiçbir şey kurmadan PGP şifrelemeyi hemen denemek istiyorsanız, <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracını</a> açın ve bu öğreticiyi takip edin.</p></blockquote>

<hr>

<h2 id="step-1-generate-a-pgp-key-pair">Adım 1: PGP Anahtar Çifti Oluşturun</h2>

<p>Bir PGP anahtar çifti, matematiksel olarak birbiriyle ilişkili iki anahtardan oluşur:</p>

<ul>
<li><strong>Açık Anahtar</strong> — Serbestçe paylaşırsınız. Herkes bunu size mesaj şifrelemek veya imzalarınızı doğrulamak için kullanabilir.</li>
<li><strong>Özel Anahtar</strong> — Gizli tutarsınız. Açık anahtarınızla şifrelenen mesajların şifresini çözer ve dijital imzalar oluşturur.</li>
</ul>

<h3>KeychainPGP'de Anahtar Oluşturma</h3>

<ol>
<li>KeychainPGP'yi açın (web veya masaüstü uygulaması).</li>
<li><strong>Anahtarlar</strong> sekmesine gidin.</li>
<li><strong>Yeni Anahtar Oluştur</strong> düğmesine tıklayın.</li>
<li>Adınızı ve e-posta adresinizi girin.</li>
<li><strong>Oluştur</strong> düğmesine tıklayın. KeychainPGP bir <strong>Ed25519 + X25519</strong> anahtar çifti oluşturur — OpenPGP'de mevcut en modern ve güvenli algoritma.</li>
</ol>

<h3>GPG ile Anahtar Oluşturma (komut satırı)</h3>

<pre><code>gpg --full-generate-key</code></pre>

<p>Anahtar türünü (RSA veya ECC), boyutunu ve geçerlilik süresini seçin. Modern güvenlik için GPG sürümünüz destekliyorsa Ed25519'u seçin.</p>

<hr>

<h2 id="step-2-share-your-public-key">Adım 2: Açık Anahtarınızı Paylaşın</h2>

<p>Açık anahtarınız <strong>ASCII-armored</strong> formatında bir metin bloğudur. Her yerde paylaşabilirsiniz:</p>

<ul>
<li><strong>E-posta</strong> — E-posta gövdesine yapıştırın veya <code>.asc</code> dosyası olarak ekleyin.</li>
<li><strong>Mesajlaşma uygulamaları</strong> — Signal, WhatsApp, Matrix veya herhangi bir sohbet platformu üzerinden gönderin.</li>
<li><strong>Web siteniz</strong> — Kişisel web sitenizde, GitHub profilinizde veya Twitter biyografinizde yayınlayın.</li>
<li><strong>Anahtar sunucuları</strong> — <code>keys.openpgp.org</code> gibi genel bir anahtar sunucusuna yükleyin.</li>
</ul>

<p><strong>Önemli:</strong> Yalnızca <strong>açık</strong> anahtarınızı paylaşın. Özel anahtarınızı hiçbir koşulda, hiç kimseyle paylaşmayın.</p>

<hr>

<h2 id="step-3-import-your-contacts-public-keys">Adım 3: Kişilerinizin Açık Anahtarlarını İçe Aktarın</h2>

<p>Birine şifrelenmiş mesaj gönderebilmek için onun açık anahtarına ihtiyacınız var. Kişinizden ASCII-armored açık anahtarını göndermesini isteyin veya bir anahtar sunucusunda arayın.</p>

<h3>KeychainPGP'de Anahtar İçe Aktarma</h3>

<ol>
<li>Kişinin açık anahtar bloğunu panoya kopyalayın.</li>
<li>KeychainPGP'yi açın ve <strong>Anahtarlar</strong> sekmesine gidin.</li>
<li><strong>Anahtar İçe Aktar</strong> düğmesine tıklayın ve anahtarı yapıştırın.</li>
<li>Kişi, anahtar listenizde adı ve e-postasıyla görünür.</li>
</ol>

<hr>

<h2 id="step-4-encrypt-a-message">Adım 4: Mesaj Şifreleyin</h2>

<h3>KeychainPGP'de Şifreleme (web veya masaüstü)</h3>

<ol>
<li><strong>Şifrele</strong> sekmesine gidin.</li>
<li>Şifrelemek istediğiniz mesajı yazın veya yapıştırın.</li>
<li>Anahtar listenizden alıcıyı seçin.</li>
<li><strong>Panoya Şifrele</strong> düğmesine tıklayın. Şifrelenmiş mesaj panoya kopyalanır.</li>
<li>Şifrelenmiş mesajı e-postanıza, sohbetinize veya herhangi bir iletişim kanalına yapıştırın.</li>
</ol>

<h3>Masaüstü Kısayolu ile Şifreleme</h3>

<p>KeychainPGP masaüstü uygulamasıyla <a href="/tr/docs/clipboard-encryption/">pano iş akışı</a> sayesinde süreç daha da hızlıdır:</p>

<ol>
<li>Mesajınızı herhangi bir uygulamada yazın.</li>
<li>Metni seçin ve kopyalayın (<code>Ctrl+C</code>).</li>
<li><strong><code>Ctrl+Shift+E</code></strong> tuşuna basın — KeychainPGP pano içeriğini şifreler.</li>
<li>Şifrelenmiş mesajı yapıştırın (<code>Ctrl+V</code>).</li>
</ol>

<hr>

<h2 id="step-5-decrypt-a-message">Adım 5: Mesaj Şifresini Çözün</h2>

<h3>KeychainPGP'de Şifre Çözme (web veya masaüstü)</h3>

<ol>
<li>Şifrelenmiş mesaj bloğunun tamamını kopyalayın.</li>
<li>KeychainPGP'de <strong>Şifre Çöz</strong> sekmesine gidin.</li>
<li>Şifrelenmiş metni yapıştırın.</li>
<li><strong>Şifre Çöz</strong> düğmesine tıklayın. Düz metin anında görünür.</li>
</ol>

<h3>Masaüstü Kısayolu ile Şifre Çözme</h3>

<ol>
<li>Şifrelenmiş mesaj bloğunu seçin ve kopyalayın (<code>Ctrl+C</code>).</li>
<li><strong><code>Ctrl+Shift+D</code></strong> tuşuna basın — KeychainPGP pano içeriğinin şifresini çözer.</li>
<li>Düz metin panodaki şifrelenmiş metnin yerini alır. İhtiyacınız olan yere yapıştırın.</li>
</ol>

<p>Masaüstü uygulaması ayrıca <strong>otomatik pano temizleme</strong> özelliğine sahiptir: 30 saniye sonra şifresi çözülmüş metin panodan otomatik olarak silinir.</p>

<hr>

<h2 id="step-6-sign-a-message">Adım 6: Mesaj İmzalayın</h2>

<p>Bir PGP dijital imzası iki şeyi kanıtlar:</p>

<ol>
<li><strong>Özgünlük</strong> — Mesaj, imzalama anahtarının sahibi tarafından yazılmıştır.</li>
<li><strong>Bütünlük</strong> — Mesaj imzalandığından beri değiştirilmemiştir.</li>
</ol>

<p>İmzalamak mesajı şifrelemez. Herkes imzalanmış bir mesajı okuyabilir, ancak mesajın gerçekten sizden geldiğini ve değiştirilmediğini doğrulayabilir.</p>

<h3>Mesajları Ne Zaman İmzalamalı</h3>

<ul>
<li>Yazılım sürümleri veya güvenlik duyuruları paylaşırken</li>
<li>Kamusal forumlarda kimliğinizi doğrulamak için</li>
<li>E-postaların kaynağını kanıtlamak için imzalarken</li>
<li>Kod bütünlüğü için Git commit imzalama</li>
</ul>

<hr>

<h2 id="step-7-verify-a-signature">Adım 7: İmza Doğrulayın</h2>

<p>İmzalanmış bir mesaj aldığınızda, özgün ve değiştirilmemiş olduğunu doğrulayabilirsiniz.</p>

<h3>KeychainPGP'de Doğrulama</h3>

<ol>
<li>İmzalanmış mesajın tamamını (imza bloğu dahil) kopyalayın.</li>
<li><strong>Doğrula</strong> sekmesine gidin.</li>
<li>İmzalanmış mesajı yapıştırın.</li>
<li><strong>Doğrula</strong> düğmesine tıklayın. KeychainPGP imzanın geçerli olup olmadığını onaylar.</li>
</ol>

<hr>

<h2 id="keychainpgp-clipboard-workflow">KeychainPGP Pano İş Akışı</h2>

<p>KeychainPGP'yi geleneksel PGP araçlarından ayıran şey <a href="/tr/docs/clipboard-encryption/">pano şifreleme iş akışıdır</a>. Dosyalar üzerinde çalışmak veya özel bir e-posta istemcisi gerektirmek yerine, KeychainPGP sistem panosu aracılığıyla herhangi bir uygulama ile çalışır.</p>

<table>
<tr><th>İşlem</th><th>Web Uygulaması</th><th>Masaüstü Uygulaması</th></tr>
<tr><td>Şifrele</td><td>Metin yapıştır, Şifrele'ye tıkla</td><td>Metin kopyala, <code>Ctrl+Shift+E</code>'ye bas</td></tr>
<tr><td>Şifre Çöz</td><td>Şifreli metin yapıştır, Şifre Çöz'e tıkla</td><td>Şifreli metin kopyala, <code>Ctrl+Shift+D</code>'ye bas</td></tr>
<tr><td>İmzala</td><td>Metin yapıştır, İmzala'ya tıkla</td><td>Uygulama penceresinden erişilebilir</td></tr>
<tr><td>Doğrula</td><td>İmzalı metin yapıştır, Doğrula'ya tıkla</td><td>Uygulama penceresinden erişilebilir</td></tr>
</table>

<p>Masaüstü uygulamasının ek güvenlik özellikleri:</p>

<ul>
<li><strong>Otomatik pano temizleme</strong> — Şifresi çözülmüş metin 30 saniye sonra panodan silinir.</li>
<li><strong>OPSEC modu</strong> — Gizlenmiş pencere başlığı, yalnızca RAM'de anahtar depolama ve acil silme düğmesi.</li>
<li><strong>İşletim sistemi kimlik bilgisi deposu</strong> — Özel anahtarlar Windows Credential Manager, macOS Keychain veya Linux Secret Service aracılığıyla güvenle saklanır.</li>
</ul>

<hr>

<h2 id="web-app-vs-desktop-app">Web Uygulaması ve Masaüstü Uygulaması</h2>

<p><strong>Web uygulaması</strong> (<a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracı</a>):</p>

<ul>
<li>WebAssembly aracılığıyla tamamen tarayıcıda çalışır</li>
<li>Kurulum veya hesap gerektirmez</li>
<li>Hızlı şifreleme görevleri için mükemmeldir</li>
<li>Anahtarlar tarayıcının yerel depolamasında saklanır</li>
</ul>

<p><strong>Masaüstü uygulaması</strong> (Windows, macOS, Linux, Android):</p>

<ul>
<li>Şifreleme ve şifre çözme için genel kısayollar</li>
<li>Sistem tepsisi entegrasyonu</li>
<li>Otomatik pano temizleme</li>
<li>Yalnızca RAM'de anahtarlar ve acil silme ile OPSEC modu</li>
<li>İşletim sistemi kimlik bilgisi yöneticisi aracılığıyla güvenli anahtar depolama</li>
<li>Günlük kullanım ve uzun vadeli anahtar yönetimi için daha uygundur</li>
</ul>

<p>Her iki uygulama da ücretsiz, açık kaynak (MIT / Apache-2.0) ve telemetri içermez.</p>

<hr>

<h2 id="frequently-asked-questions">Sıkça Sorulan Sorular</h2>

<h3>Özel anahtarımı paylaşmalı mıyım?</h3>

<p>Hayır. Özel anahtarınızı <strong>asla</strong> hiç kimseyle paylaşmamalısınız. Özel anahtarınız, size gönderilen mesajların şifresini çözmenizi ve dijital imzalar oluşturmanızı sağlayan şeydir. Başka biri özel anahtarınıza erişirse, size şifrelenen tüm mesajları okuyabilir ve sizin kimliğinize bürünebilir.</p>

<h3>Özel anahtarımı kaybedersem ne olur?</h3>

<p>Özel anahtarınızı kaybederseniz, ilgili açık anahtarla şifrelenen tüm mesajların şifresini çözme yeteneğinizi kalıcı olarak kaybedersiniz. Kurtarma mekanizması yoktur. Özel anahtarınızın güvenli bir yedeğini her zaman saklayın.</p>

<h3>PGP ile dosya şifreleyebilir miyim?</h3>

<p>Evet. PGP hem metin mesajlarını hem de ikili dosyaları şifreleyebilir. KeychainPGP pano tabanlı metin şifrelemeye odaklanırken, GnuPG gibi araçlar doğrudan dosya şifrelemeyi destekler. Ayrıntılı karşılaştırma için <a href="/tr/docs/pgp-vs-gpg/">PGP ve GPG</a> rehberine bakın.</p>

<h3>PGP şifreleme güvenli midir?</h3>

<p>Modern algoritmalarla PGP şifreleme son derece güvenlidir. KeychainPGP, imzalar için Ed25519 ve anahtar değişimi için X25519 kullanır — anahtar boyutunun çok küçük bir kısmıyla RSA-3072'ye eşdeğer güvenlik sunan eliptik eğri algoritmaları. Asıl riskler kriptografik değil operasyoneldir: zayıf parolalar, ele geçirilmiş cihazlar veya ihmal edilen anahtar yönetimi.</p>

<h3>PGP parmak izi nedir?</h3>

<p>PGP parmak izi, bir PGP anahtarını benzersiz şekilde tanımlayan 40 karakterlik onaltılık bir dizedir. Parmak izleri, bir açık anahtarın düşündüğünüz kişiye ait olduğunu doğrulamak için kullanılır. Ortadaki adam saldırılarını önlemek için parmak izini her zaman ayrı, güvenilir bir kanal (telefon görüşmesi, yüz yüze buluşma) üzerinden karşılaştırın.</p>
`
};

export default doc;
