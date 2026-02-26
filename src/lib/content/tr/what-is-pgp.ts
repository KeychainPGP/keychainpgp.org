import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP Nedir? Pretty Good Privacy Şifreleme Hakkında Kapsamlı Rehber',
	description: 'PGP\'nin (Pretty Good Privacy) ne olduğunu, PGP şifrelemenin açık anahtar kriptografisi ile nasıl çalıştığını, OpenPGP standardını, dijital imzaları ve modern kullanım alanlarını öğrenin.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-pgp-encryption', text: 'PGP Şifreleme Nedir?', level: 2 },
		{ id: 'history-of-pgp', text: 'PGP\'nin Tarihçesi', level: 2 },
		{ id: 'how-pgp-encryption-works', text: 'PGP Şifreleme Nasıl Çalışır', level: 2 },
		{ id: 'public-key-cryptography', text: 'Açık Anahtar Kriptografisi', level: 3 },
		{ id: 'the-hybrid-encryption-model', text: 'Hibrit Şifreleme Modeli', level: 3 },
		{ id: 'pgp-digital-signatures', text: 'PGP Dijital İmzalar', level: 2 },
		{ id: 'the-openpgp-standard', text: 'OpenPGP Standardı', level: 2 },
		{ id: 'web-of-trust', text: 'Güven Ağı', level: 2 },
		{ id: 'pgp-algorithms-and-key-types', text: 'PGP Algoritmaları ve Anahtar Türleri', level: 2 },
		{ id: 'classic-algorithms', text: 'Klasik Algoritmalar', level: 3 },
		{ id: 'modern-algorithms', text: 'Modern Algoritmalar', level: 3 },
		{ id: 'common-use-cases-for-pgp', text: 'PGP\'nin Yaygın Kullanım Alanları', level: 2 },
		{ id: 'pgp-today', text: 'Günümüzde PGP', level: 2 },
		{ id: 'getting-started-with-pgp', text: 'PGP\'ye Başlarken', level: 2 }
	],
	html: `
<h1>PGP Nedir? Pretty Good Privacy Şifreleme Hakkında Kapsamlı Rehber</h1>

<h2 id="what-is-pgp-encryption">PGP Şifreleme Nedir?</h2>

<p><strong>PGP (Pretty Good Privacy)</strong>, veri iletişimi için gizlilik ve kriptografik kimlik doğrulama sağlayan bir şifreleme programıdır. PGP şifreleme, simetrik anahtar kriptografisi ile açık anahtar kriptografisinin bir kombinasyonunu kullanarak kullanıcıların mesajları, dosyaları ve diğer verileri yalnızca hedeflenen alıcının okuyabileceği şekilde şifrelemesini sağlar. İlk olarak 1991 yılında Phil Zimmermann tarafından oluşturulan PGP, dünyanın en yaygın kullanılan e-posta şifreleme standardı haline gelmiş ve RFC 4880'de tanımlanan <strong>OpenPGP</strong> spesifikasyonunun temelini oluşturmuştur. Gizli bir e-posta göndermeniz, bir yazılım yayıncısının kimliğini doğrulamanız veya hassas dosyaları korumanız gerektiğinde, PGP gazeteciler, güvenlik araştırmacıları, hükümetler ve günlük kullanıcılar tarafından güvenilen, kanıtlanmış bir kriptografik çerçeve sağlar.</p>

<p>Yazılım kurmadan PGP şifrelemeyi hemen denemek istiyorsanız, KeychainPGP tamamen tarayıcınızda çalışan bir <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracı</a> sunar.</p>

<h2 id="history-of-pgp">PGP'nin Tarihçesi</h2>

<p>Phil Zimmermann, Haziran 1991'de PGP 1.0'ı ücretsiz yazılım olarak yayınladı. Güçlü kriptografinin yalnızca hükümetlere ve ordulara değil, tüm vatandaşlara erişilebilir olması gerektiği inancıyla hareket etti. O dönemde güçlü şifreleme, ABD ihracat düzenlemelerine göre mühimmat olarak sınıflandırılıyordu ve Zimmermann, PGP'yi uluslararası olarak dağıttığı için ABD Gümrük Servisi tarafından üç yıllık bir cezai soruşturmaya maruz kaldı. Soruşturma 1996'da iddianame olmaksızın sonuçlandırıldı ve dava dijital özgürlükler tarihinde dönüm noktası haline geldi.</p>

<p>PGP birçok ticari evrimden geçti. Zimmermann 1996'da PGP Inc.'i kurdu; şirket 1997'de Network Associates (McAfee) tarafından, ardından 2010'da Symantec tarafından satın alındı. Bu geçişler boyunca altta yatan kriptografik protokol, İnternet Mühendisliği Görev Gücü (IETF) tarafından <strong>OpenPGP</strong> adıyla standardize edildi ve böylece protokolün ticari mülkiyetten bağımsız olarak açık ve birlikte çalışabilir kalması sağlandı.</p>

<p>OpenPGP standardının yayınlanması, herkesin uyumlu uygulamalar oluşturabileceği anlamına geliyordu. Bu durum, bugün hâlâ en yaygın kullanılan PGP araçlarından biri olan GNU Privacy Guard (GnuPG veya GPG) adlı özgür ve açık kaynaklı uygulamanın ortaya çıkmasına yol açtı. Bu uygulamalar arasındaki farkları anlamak için <a href="/tr/docs/pgp-vs-gpg/">PGP ve GPG karşılaştırması</a> rehberimize bakın.</p>

<h2 id="how-pgp-encryption-works">PGP Şifreleme Nasıl Çalışır</h2>

<p>PGP şifreleme, sofistike kriptografik tekniklerin bir kombinasyonuna dayanır. Tek bir yöntem kullanmak yerine PGP, simetrik şifrelemenin hızını asimetrik (açık anahtar) şifrelemenin anahtar dağıtım avantajlarıyla birleştiren bir <strong>hibrit şifreleme modeli</strong> kullanır.</p>

<h3 id="public-key-cryptography">Açık Anahtar Kriptografisi</h3>

<p>PGP'nin merkezinde, asimetrik kriptografi olarak da bilinen <strong>açık anahtar kriptografisi</strong> yer alır. Her PGP kullanıcısı, matematiksel olarak birbiriyle ilişkili iki anahtardan oluşan bir <strong>anahtar çifti</strong> oluşturur:</p>

<ul>
<li><strong>Açık Anahtar</strong> — herkesle açıkça paylaşılır. Diğer kişiler bu anahtarı size mesaj şifrelemek ve dijital imzalarınızı doğrulamak için kullanır.</li>
<li><strong>Özel Anahtar</strong> (gizli anahtar olarak da bilinir) — kesinlikle gizli tutulur. Bu anahtarı size gönderilen mesajların şifresini çözmek ve dijital imzalar oluşturmak için kullanırsınız.</li>
</ul>

<p>Bu sistemin temel özelliği, bir açık anahtarla şifrelenen verilerin yalnızca karşılık gelen özel anahtarla çözülebilmesi ve bunun tersinin de geçerli olmasıdır. Bu, taraflar arasında özel olarak iletişim kurabilmeleri için önceden paylaşılan bir sır iletme ihtiyacını ortadan kaldırır.</p>

<h3 id="the-hybrid-encryption-model">Hibrit Şifreleme Modeli</h3>

<p>Açık anahtar kriptografisi anahtar dağıtım sorununu çözse de, RSA gibi asimetrik algoritmalar büyük miktarda veriyi şifrelemek için hesaplama açısından maliyetlidir. PGP bu sorunu hibrit bir yaklaşım kullanarak çözer:</p>

<ol>
<li><strong>Oturum anahtarı oluşturma</strong> — PGP her mesaj için rastgele ve benzersiz bir <strong>simetrik oturum anahtarı</strong> (genellikle 128 veya 256 bit) oluşturur.</li>
<li><strong>Veri şifreleme</strong> — Mesaj içeriği, oturum anahtarıyla hızlı simetrik şifreleme (AES-256 gibi) kullanılarak şifrelenir.</li>
<li><strong>Oturum anahtarı şifreleme</strong> — Oturum anahtarının kendisi, alıcının açık anahtarı (asimetrik işlem) kullanılarak şifrelenir.</li>
<li><strong>Paketleme</strong> — Şifrelenmiş mesaj ve şifrelenmiş oturum anahtarı bir araya getirilip alıcıya gönderilir.</li>
</ol>

<p>Alıcı mesajı aldığında süreç tersine çevrilir: oturum anahtarının şifresini çözmek için <strong>özel anahtarını</strong> kullanır, ardından çözülen oturum anahtarıyla mesaj içeriğinin şifresini çözer.</p>

<h2 id="pgp-digital-signatures">PGP Dijital İmzalar</h2>

<p>Şifrelemenin ötesinde PGP, iki temel işlevi yerine getiren <strong>dijital imzalar</strong> sağlar: <strong>kimlik doğrulama</strong> (mesajı kimin gönderdiğini kanıtlama) ve <strong>bütünlük</strong> (mesajın iletim sırasında değiştirilmediğini kanıtlama).</p>

<p>İmzalama süreci şu şekilde işler:</p>

<ol>
<li>PGP, SHA-256 veya SHA-512 gibi bir algoritma kullanarak mesaj içeriğinin <strong>kriptografik özetini</strong> (sabit uzunlukta bir özet) hesaplar.</li>
<li>Özet daha sonra gönderenin <strong>özel anahtarıyla</strong> şifrelenerek dijital imza üretilir.</li>
<li>İmza mesaja eklenir.</li>
</ol>

<p>Herhangi bir alıcı, imzayı gönderenin <strong>açık anahtarıyla</strong> çözerek orijinal özeti elde edebilir, alınan mesajın özetini bağımsız olarak hesaplayabilir ve iki özeti karşılaştırabilir. Eşleşirlerse, mesaj özgün ve değiştirilmemiştir.</p>

<h2 id="the-openpgp-standard">OpenPGP Standardı</h2>

<p><strong>OpenPGP</strong>, PGP uyumlu yazılımlar tarafından kullanılan mesaj formatlarını, algoritmaları ve prosedürleri tanımlayan açık standarttır. Kendisi bir yazılım ürünü değil, herhangi bir geliştiricinin uygulayabileceği bir spesifikasyondur.</p>

<p>Referans dokümanları şunlardır:</p>

<ul>
<li><strong>RFC 4880</strong> (Kasım 2007) — Mevcut ana OpenPGP mesaj formatı spesifikasyonu.</li>
<li><strong>RFC 6637</strong> (Haziran 2012) — OpenPGP'yi eliptik eğri kriptografisi (ECC) desteğiyle genişletir.</li>
<li><strong>RFC 9580</strong> (2024) — Ed25519/X25519 zorunlu desteği, AEAD şifreleme modları ve geliştirilmiş anahtar parmak izleriyle standardı modernize eden en son revizyon.</li>
</ul>

<p>OpenPGP birlikte çalışabilirliği garanti eder: KeychainPGP ile şifrelenen bir mesaj GnuPG, Mailvelope veya herhangi bir uyumlu uygulama tarafından çözülebilir.</p>

<h2 id="web-of-trust">Güven Ağı</h2>

<p>PGP'nin ayırt edici özelliklerinden biri, açık anahtarların özgünlüğünü belirlemek için merkezi olmayan <strong>güven ağı</strong> (Web of Trust) modelidir. TLS/SSL tarafından kullanılan merkezi sertifika otoritesi (CA) modelinden farklı olarak PGP, kullanıcıların birbirleri için kefil olmalarına izin verir.</p>

<p>Güven ağı <strong>anahtar imzalama</strong> yoluyla çalışır: birinin kimliğini doğruladığınızda ve belirli bir açık anahtarı kontrol ettiğini onayladığınızda, onun anahtarını kendi anahtarınızla imzalarsınız. Bu imza, anahtarın temsil ettiğini iddia eden kişiye ait olduğuna inandığınıza dair kamuya açık bir beyandır.</p>

<p><a href="/tr/pgp-online-encrypt/">KeychainPGP</a> gibi araçlar, kullanıcıların anahtarlarla doğrudan sezgisel bir arayüz üzerinden çalışmasına olanak tanıyarak ve <a href="/tr/docs/clipboard-encryption/">pano şifreleme</a> kullanarak şifrelenmiş mesajları ve açık anahtarları kolayca paylaşmayı sağlayarak bu süreci basitleştirir.</p>

<h2 id="pgp-algorithms-and-key-types">PGP Algoritmaları ve Anahtar Türleri</h2>

<p>PGP, alanın ilerlemesiyle birlikte evrilen bir dizi kriptografik algoritmayı destekler.</p>

<h3 id="classic-algorithms">Klasik Algoritmalar</h3>

<ul>
<li><strong>RSA (Rivest-Shamir-Adleman)</strong> — PGP tarihinde en yaygın kullanılan asimetrik algoritma. 2048 bit RSA anahtarları bugün minimum güvenlik seviyesi olarak kabul edilir, uzun vadeli koruma için 4096 bit anahtarlar önerilir.</li>
<li><strong>DSA (Digital Signature Algorithm)</strong> — Şifreleme için ElGamal ile birlikte imzalar için kullanılır. Günümüzde daha az tercih edilir.</li>
<li><strong>AES (Advanced Encryption Standard)</strong> — Mesaj içeriğini şifrelemek için kullanılan baskın simetrik şifreleme. AES-128 ve AES-256 desteklenir.</li>
<li><strong>SHA-2 (SHA-256, SHA-384, SHA-512)</strong> — Dijital imzalarda özet hesaplama için kullanılan kriptografik özet fonksiyonları.</li>
</ul>

<h3 id="modern-algorithms">Modern Algoritmalar</h3>

<p>OpenPGP uygulamalarının son nesli, RSA ile eşdeğer güvenliği önemli ölçüde daha küçük anahtar boyutlarıyla sunan <strong>eliptik eğri kriptografisini (ECC)</strong> destekler:</p>

<ul>
<li><strong>Ed25519</strong> — Curve25519 tabanlı bir dijital imza algoritması. Hızlı ve kompakt imzalar üretir. RFC 9580'de önerilir.</li>
<li><strong>X25519 (Curve25519 ECDH)</strong> — Anahtar değişimi (şifreleme) için kullanılır. Güçlü güvenlik özellikleriyle mükemmel performans sunar.</li>
<li><strong>NIST P-256 / P-384 / P-521</strong> — NIST tarafından standartlaştırılmış eliptik eğriler. OpenPGP tarafından desteklenir ancak genellikle Curve25519 tabanlı algoritmalara göre daha az tercih edilir.</li>
</ul>

<p>KeychainPGP gibi modern araçlar bu çağdaş algoritmaları destekler ve Ed25519 ile X25519 ile anahtar oluşturmayı basit ve doğrudan hale getirir.</p>

<h2 id="common-use-cases-for-pgp">PGP'nin Yaygın Kullanım Alanları</h2>

<ul>
<li><strong>Güvenli e-posta</strong> — Orijinal ve en bilinen kullanım alanı. PGP, e-posta içeriğini şifrelemeye ve özgünlüğünü kanıtlamak için mesajları imzalamaya olanak tanır.</li>
<li><strong>Dosya şifreleme</strong> — PGP, güvenli depolama veya aktarım için tek tek dosyaları veya tüm arşivleri şifreleyebilir.</li>
<li><strong>Yazılım doğrulama</strong> — Açık kaynak projeleri düzenli olarak sürümlerini PGP anahtarlarıyla imzalar. Kullanıcılar bir indirmenin özgünlüğünü doğrulamak için bu imzaları kontrol edebilir.</li>
<li><strong>Güvenli mesajlaşma</strong> — PGP, herhangi bir metin mesajını şifrelemek için kullanılabilir; özellikle uçtan uca şifreleme sunmayan platformlarda faydalıdır.</li>
<li><strong>Kimlik doğrulama</strong> — PGP anahtar parmak izleri doğrulanabilir dijital kimlikler olarak hizmet eder. GitHub'daki geliştiriciler PGP ile commit'lerini imzalayabilir.</li>
<li><strong>Belge imzalama</strong> — Hukuki iş akışları bazen inkar edilemezliği sağlamak için PGP imzalarını kullanır.</li>
</ul>

<h2 id="pgp-today">Günümüzde PGP</h2>

<p>Oluşturulmasından otuz yılı aşkın bir süre sonra PGP, mevcut en önemli kriptografik araçlardan biri olmaya devam etmektedir. OpenPGP standardı gelişmeye devam ediyor; RFC 9580 modern eliptik eğri algoritmalarının zorunlu desteği ve AEAD şifreleme modları dahil önemli modernizasyonlar getirmektedir.</p>

<p>PGP araç ekosistemi önemli ölçüde zenginleşmiştir. GnuPG, komut satırı kullanımı için referans uygulama olmaya devam etmektedir. KeychainPGP gibi modern araçlar yerel masaüstü uygulamaları (Windows, macOS, Linux), Android uygulaması, betik yazma için CLI ve tarayıcı içi web uygulaması sunar — hepsi aynı Rust tabanlı Sequoia-PGP motoru üzerine inşa edilmiştir.</p>

<h2 id="getting-started-with-pgp">PGP'ye Başlarken</h2>

<p>PGP şifrelemeye başlamaya hazır mısınız? İşte en iyi sonraki adımlar:</p>

<ol>
<li><strong>Tarayıcınızda deneyin</strong> — Hiçbir şey kurmadan anahtar çifti oluşturmak, mesaj şifrelemek veya imza doğrulamak için KeychainPGP <a href="/tr/pgp-online-encrypt/">çevrimiçi PGP aracını</a> kullanın.</li>
<li><strong>Başlangıç rehberini okuyun</strong> — Kriptografide yeniyseniz, <a href="/tr/docs/pgp-for-beginners/">Yeni Başlayanlar İçin PGP</a> rehberimiz sizi adım adım yönlendirir.</li>
<li><strong>Pratik iş akışını öğrenin</strong> — <a href="/tr/docs/how-to-use-pgp/">PGP Nasıl Kullanılır</a> rehberimiz anahtar oluşturma, şifreleme ve şifre çözme, anahtar halkanızı yönetme ve en iyi uygulamaları kapsar.</li>
<li><strong>Pano şifrelemeyi anlayın</strong> — Metni doğrudan panonuzdan şifrelemek ve şifresini çözmek için <a href="/tr/docs/clipboard-encryption/">pano ile PGP şifrelemeyi</a> keşfedin.</li>
<li><strong>Araçları tanıyın</strong> — İş akışınız için doğru aracı seçmek üzere <a href="/tr/docs/pgp-vs-gpg/">PGP ve GPG arasındaki farkları</a> anlayın.</li>
</ol>

<p>PGP şifreleme, otuz yılı aşkın süredir hassas iletişimleri korumaktadır. Modern araçlar ve standartlarla, her zamankinden daha erişilebilir hale gelmiştir.</p>
`
};

export default doc;
