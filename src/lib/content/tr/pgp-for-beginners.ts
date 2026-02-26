import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'Yeni Başlayanlar İçin PGP: PGP Şifrelemeye Başlamanın Basit Rehberi',
	description: 'PGP şifrelemeyi sıfırdan öğrenin. Bu başlangıç rehberi PGP\'nin nasıl çalıştığını açıklar, ilk şifreli mesajınızda size rehberlik eder ve temel kavramları kapsar.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'why-encryption-matters', text: 'Şifreleme Neden Önemlidir', level: 2 },
		{ id: 'what-is-pgp-explained-simply', text: 'PGP Nedir, Basitçe', level: 2 },
		{ id: 'key-concepts-you-need-to-know', text: 'Bilmeniz Gereken Temel Kavramlar', level: 2 },
		{ id: 'public-key-your-address', text: 'Açık Anahtar: Adresiniz', level: 3 },
		{ id: 'private-key-your-password', text: 'Özel Anahtar: Şifreniz', level: 3 },
		{ id: 'encryption-vs-signing', text: 'Şifreleme ve İmzalama', level: 3 },
		{ id: 'key-fingerprints', text: 'Anahtar Parmak İzleri', level: 3 },
		{ id: 'ascii-armor', text: 'ASCII Armor', level: 3 },
		{ id: 'your-first-pgp-message', text: 'İlk PGP Mesajınız', level: 2 },
		{ id: 'common-beginner-mistakes', text: 'Yaygın Başlangıç Hataları', level: 2 },
		{ id: 'next-steps', text: 'Sonraki Adımlar', level: 2 },
		{ id: 'faq', text: 'SSS', level: 2 }
	],
	html: `
<h1>Yeni Başlayanlar İçin PGP: Başlamanın Basit Rehberi</h1>

<p>PGP'ye başlamak düşündüğünüzden daha kolaydır. Bir anahtar çifti oluşturursunuz — biri açık, biri özel — açık anahtarınızı iletişim kurmak istediğiniz kişilerle paylaşırsınız ve özel anahtarınızı onların size gönderdiği mesajların şifresini çözmek için kullanırsınız. Denemek için yazılım kurmanıza gerek yoktur. KeychainPGP gibi ücretsiz bir <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracıyla</a>, ilk mesajınızı beş dakikadan kısa sürede, doğrudan tarayıcınızdan şifreleyebilirsiniz.</p>

<h2 id="why-encryption-matters">Şifreleme Neden Önemlidir</h2>

<p>Her gün milyarlarca mesaj internet üzerinden iletilir. E-postalar, sohbet mesajları, belgeler — çoğu düz metin olarak gönderilir, yani bunları ele geçiren herkes okuyabilir. Bu internet servis sağlayıcılarını, halka açık Wi-Fi ağlarındaki bilgisayar korsanlarını ve hatta devlet gözetim programlarını kapsar.</p>

<p><strong>Veri ihlalleri nadir olaylar değildir.</strong> Sürekli yaşanır. Mesajlarınız şifrelenmemişse, okunabilir metin olarak veritabanlarında saklanır ve bir sonraki ihlali bekler.</p>

<p>Şifreleme bu sorunu çözer. PGP ile bir mesajı şifrelediğinizde, okunamaz bir karmaşaya dönüşür. Yalnızca doğru özel anahtara sahip kişi onu çözebilir.</p>

<h2 id="what-is-pgp-explained-simply">PGP Nedir, Basitçe</h2>

<p>PGP, <strong>Pretty Good Privacy</strong> anlamına gelir. 1991 yılında Phil Zimmermann tarafından oluşturulmuş olup mesajları ve dosyaları şifrelemek için dünya standardı haline gelmiştir.</p>

<p>PGP'yi anlamanın en basit yolu: bir <strong>yarıklı posta kutusu</strong> olarak düşünün.</p>

<p>Sokakta özel bir posta kutusu hayal edin. Herkes yaklaşıp yarıktan bir mektup atabilir. Ama mektup bir kez içeri girdiğinde, yalnızca siz açabilirsiniz çünkü posta kutusu kapısının anahtarı yalnızca sizde.</p>

<ul>
<li>Posta kutusunun <strong>yarığı</strong>, <strong>açık anahtarınızdır</strong>. Size özel mesaj göndermek isteyen herkese verirsiniz. Paylaşmak güvenlidir.</li>
<li>Posta kutusunun <strong>kilidi</strong>, <strong>özel anahtarınızdır</strong>. Hiç kimseyle paylaşmazsınız.</li>
</ul>

<p>Buna <strong>asimetrik şifreleme</strong> denir — bir anahtar kilitler, diğeri açar. Daha derin bir teknik açıklama için <a href="/tr/docs/what-is-pgp/">PGP nedir</a> kapsamlı rehberimizi okuyun.</p>

<h2 id="key-concepts-you-need-to-know">Bilmeniz Gereken Temel Kavramlar</h2>

<h3 id="public-key-your-address">Açık Anahtar: Adresiniz</h3>

<p>Açık anahtarınız posta adresiniz gibidir. İnsanların size bir şey gönderebilmesi için serbestçe dağıtırsınız. PGP'de, başkalarının yalnızca sizin okuyabileceğiniz mesajları şifreleyebilmesi için açık anahtarınızı paylaşırsınız.</p>

<h3 id="private-key-your-password">Özel Anahtar: Şifreniz</h3>

<p>Özel anahtarınız ön kapınızın anahtarı gibidir. Açık anahtarınızla şifrelenen mesajları açmanızı sağlayan tek şeydir. Özel anahtarınızı <strong>asla hiç kimseyle paylaşmamalısınız</strong>.</p>

<h3 id="encryption-vs-signing">Şifreleme ve İmzalama</h3>

<p>PGP iki şey yapabilir: <strong>şifreleme</strong> ve <strong>imzalama</strong>.</p>

<ul>
<li><strong>Şifreleme</strong> — bir mesajı yalnızca alıcının okuyabilmesi için karıştırır. Şifrelemek için alıcının açık anahtarını kullanırsınız, alıcı şifresini çözmek için özel anahtarını kullanır.</li>
<li><strong>İmzalama</strong> — mesajın sizden geldiğini ve değiştirilmediğini kanıtlar. İmzalamak için kendi özel anahtarınızı kullanırsınız, açık anahtarınıza sahip herkes imzayı doğrulayabilir.</li>
</ul>

<h3 id="key-fingerprints">Anahtar Parmak İzleri</h3>

<p>Anahtar parmak izi, bir PGP anahtarını benzersiz şekilde tanımlayan kısa bir karakter dizisidir. Parmak izleri, bir açık anahtarın düşündüğünüz kişiye ait olduğunu <strong>doğrulamak</strong> için kullanılır. Parmak izini her zaman ayrı, güvenilir bir kanal üzerinden karşılaştırın.</p>

<h3 id="ascii-armor">ASCII Armor</h3>

<p>Bir PGP anahtarını veya şifreli mesajı <code>-----BEGIN PGP MESSAGE-----</code> ile başlayan bir metin bloğu olarak gördüğünüzde, bu <strong>ASCII armor</strong>'dır. İkili verileri yazdırılabilir metin karakterlerine kodlamanın bir yoludur; böylece e-postalara, sohbet pencerelerine veya web formlarına kopyalayıp yapıştırabilirsiniz.</p>

<h2 id="your-first-pgp-message">İlk PGP Mesajınız</h2>

<p><a href="https://keychainpgp.github.io">KeychainPGP web uygulamasıyla</a> ilk mesajınızı şifrelemenin adımlarını takip edelim. Bu, tamamen tarayıcınızda çalışan ücretsiz bir <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracıdır</a>.</p>

<p><strong>Adım 1: Web uygulamasını açın.</strong> <a href="https://keychainpgp.github.io">keychainpgp.github.io</a> adresine gidin. Uygulama WebAssembly aracılığıyla yüklenir, PGP motoru bilgisayarınızda yerel olarak çalışır.</p>

<p><strong>Adım 2: Anahtar çiftinizi oluşturun.</strong> Anahtarlar sekmesinde yeni bir anahtar oluşturun. KeychainPGP modern bir Ed25519 + X25519 anahtar çifti oluşturur.</p>

<p><strong>Adım 3: Açık anahtarınızı dışa aktarın ve paylaşın.</strong> Açık anahtarınızı ASCII-armored formatında kopyalamak için dışa aktarma işlevini kullanın.</p>

<p><strong>Adım 4: Alıcının açık anahtarını içe aktarın.</strong> Anahtarlar sekmesinde kişinizin açık anahtar bloğunu yapıştırın.</p>

<p><strong>Adım 5: Mesajınızı yazın ve şifreleyin.</strong> Şifrele sekmesine gidin, mesajınızı yazın, alıcıyı seçin ve <strong>"Panoya Şifrele"</strong> düğmesine tıklayın.</p>

<p><strong>Adım 6: Şifreli mesajı gönderin.</strong> Şifrelenmiş metni herhangi bir e-posta, sohbet veya mesajlaşma uygulamasına yapıştırın.</p>

<p><strong>Adım 7: Yanıtın şifresini çözün.</strong> Şifrelenmiş PGP mesaj bloğunu kopyalayın, Şifre Çöz sekmesine gidin, yapıştırın ve Şifre Çöz'e tıklayın.</p>

<p>Daha ayrıntılı bir rehber için <a href="/tr/docs/how-to-use-pgp/">PGP nasıl kullanılır</a> öğreticimize bakın.</p>

<h2 id="common-beginner-mistakes">Yaygın Başlangıç Hataları</h2>

<p><strong>1. Özel anahtarını paylaşmak.</strong> Özel anahtarınız asla kimseye gönderilmemelidir. Yalnızca <strong>açık</strong> anahtarınızı paylaşın.</p>

<p><strong>2. Parmak izlerini doğrulamamak.</strong> Anahtar parmak izini her zaman ayrı, güvenilir bir kanal üzerinden doğrulayın — telefon görüşmesi, görüntülü arama veya yüz yüze buluşma.</p>

<p><strong>3. Özel anahtarı yedeksiz kaybetmek.</strong> Özel anahtarınızı kaybederseniz, o anahtarla şifrelenen her mesaj sonsuza dek kaybolur. Özel anahtarınızı güvenli bir yerde yedekleyin.</p>

<p><strong>4. İptal sertifikasını yedeklememek.</strong> İptal sertifikası, anahtarınız ele geçirildiğinde artık geçerli olmadığını kamuoyu önünde ilan etmenizi sağlar.</p>

<p><strong>5. Eski veya zayıf anahtarlar kullanmak.</strong> Bugün yeni anahtar oluşturuyorsanız, modern algoritmalar kullanın. KeychainPGP varsayılan olarak Ed25519 + X25519 kullanır.</p>

<h2 id="next-steps">Sonraki Adımlar</h2>

<ul>
<li><strong>Kapsamlı rehberi okuyun:</strong> <a href="/tr/docs/how-to-use-pgp/">PGP Nasıl Kullanılır</a> — imzalama, doğrulama, anahtar yönetimi ve ileri düzey konuları kapsar.</li>
<li><strong>PGP'nin ne olduğunu anlayın:</strong> Derinlemesine bilgi için <a href="/tr/docs/what-is-pgp/">PGP Nedir</a> rehberini okuyun.</li>
<li><strong>Pano şifrelemeyi öğrenin:</strong> <a href="/tr/docs/clipboard-encryption/">Pano şifrelemenin</a> herhangi bir uygulamayla PGP kullanmanızı nasıl sağladığını keşfedin.</li>
<li><strong>Çevrimiçi aracı deneyin:</strong> <a href="/tr/pgp-online-encrypt/">Çevrimiçi PGP aracını</a> açın ve pratik yapın.</li>
<li><strong>Masaüstü uygulamasını edinin:</strong> <a href="https://github.com/keychainpgp/keychainpgp/releases/latest">KeychainPGP masaüstü uygulaması</a> genel kısayollar, sistem tepsisi ve otomatik pano temizleme ekler.</li>
</ul>

<h2 id="faq">Sıkça Sorulan Sorular</h2>

<h3>PGP öğrenmesi zor mudur?</h3>
<p>Hayır. Temel kavram basittir: paylaşmak için bir açık anahtar, gizli tutmak için bir özel anahtar. KeychainPGP gibi modern bir araçla bir mesajı şifrelemek birkaç tıklama alır.</p>

<h3>PGP kullanmak için yazılım kurmak gerekir mi?</h3>
<p>Şart değil. KeychainPGP'nin <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracını</a> doğrudan tarayıcınızdan kullanabilirsiniz. WebAssembly aracılığıyla tamamen cihazınızda çalışır.</p>

<h3>Birisi PGP şifreli mesajlarımı kırabilir mi?</h3>
<p>KeychainPGP'nin kullandığı Ed25519 + X25519 gibi modern algoritmalarla, şifrelemeyi kaba kuvvetle kırmak mevcut teknolojiyle evrenin yaşından daha uzun sürer. Gerçek riskler pratiktir: özel anahtarı kaybetmek, zayıf parola kullanmak veya cihazda zararlı yazılım bulunması.</p>

<h3>PGP, GPG ve OpenPGP arasındaki fark nedir?</h3>
<p><strong>PGP</strong>, 1991'de oluşturulan orijinal programdır. <strong>OpenPGP</strong>, formatları tanımlayan açık standarttır (RFC 4880). <strong>GPG</strong> (GNU Privacy Guard), OpenPGP standardının özgür bir uygulamasıdır. KeychainPGP, Rust tabanlı Sequoia-PGP üzerine inşa edilmiş başka bir uygulamadır. Hepsi aynı standardı takip ettikleri için uyumludur.</p>

<h3>Açık anahtarımı nasıl paylaşırım?</h3>
<p>Açık anahtarınızı ASCII-armored formatında dışa aktarın — bu <code>-----BEGIN PGP PUBLIC KEY BLOCK-----</code> ile başlayan bir metin bloğudur. E-postaya yapıştırın, web sitenizde yayınlayın, sohbette paylaşın veya bir anahtar sunucusuna yükleyin. Kişilerinizle parmak izlerini ayrı bir kanal üzerinden doğrulamayı unutmayın.</p>
`
};

export default doc;
