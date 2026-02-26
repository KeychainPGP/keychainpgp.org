import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP ile Pano Şifreleme: Güvenli Mesajlaşma İçin Clipboard-First Yaklaşımı',
	description: 'PGP pano şifrelemenin nasıl çalıştığını, dosya şifrelemeden neden günlük OPSEC için daha iyi olduğunu ve KeychainPGP\'nin herhangi bir uygulamada mesaj şifrelemek için panoyu nasıl kullandığını keşfedin.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'Pano Şifreleme Nedir?', level: 2 },
		{ id: 'why-clipboard-first', text: 'Neden Önce Pano?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'KeychainPGP Panoyu Nasıl Kullanır', level: 2 },
		{ id: 'the-encryption-workflow', text: 'Şifreleme İş Akışı', level: 3 },
		{ id: 'decryption-in-reverse', text: 'Tersine Şifre Çözme', level: 3 },
		{ id: 'security-considerations', text: 'Güvenlik Hususları', level: 2 },
		{ id: 'clipboard-history-and-managers', text: 'Pano Geçmişi ve Yöneticileri', level: 3 },
		{ id: 'auto-clear-after-30-seconds', text: '30 Saniye Sonra Otomatik Temizleme', level: 3 },
		{ id: 'memory-handling-and-zeroization', text: 'Bellek Yönetimi ve Sıfırlama', level: 3 },
		{ id: 'opsec-mode', text: 'OPSEC Modu', level: 2 },
		{ id: 'window-title-disguise', text: 'Pencere Başlığı Gizleme', level: 3 },
		{ id: 'ram-only-keys', text: 'Yalnızca RAM\'de Anahtarlar', level: 3 },
		{ id: 'panic-wipe', text: 'Acil Silme', level: 3 },
		{ id: 'tor-proxy-support', text: 'Tor Proxy Desteği', level: 3 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'Pano Şifreleme ve Dosya Şifreleme', level: 2 },
		{ id: 'threat-model', text: 'Tehdit Modeli', level: 2 },
		{ id: 'what-clipboard-encryption-protects-against', text: 'Pano Şifrelemenin Koruduğu Durumlar', level: 3 },
		{ id: 'what-clipboard-encryption-does-not-protect-against', text: 'Pano Şifrelemenin Korumadığı Durumlar', level: 3 },
		{ id: 'best-practices', text: 'Pano PGP İçin En İyi Uygulamalar', level: 2 }
	],
	html: `
<h1>PGP ile Pano Şifreleme</h1>

<h2 id="what-is-clipboard-encryption">Pano Şifreleme Nedir?</h2>

<p>PGP pano şifreleme, diskte saklanan dosyalar üzerinde işlem yapmak yerine, doğrudan işletim sistemi panosundan okuyarak ve panoya yazarak metni şifreleme ve şifresini çözme yöntemidir. Düz metin mesajı bir <code>.txt</code> dosyasına kaydetmek, bir komut satırı aracına geçirmek, ardından şifreli bir <code>.asc</code> dosyasını almak yerine, metninizi kopyalar, bir klavye kısayoluyla şifrelemeyi tetikler ve şifrelenmiş PGP mesajını istediğiniz yere yapıştırırsınız. Pano hem giriş hem de çıkış tamponu olarak hizmet eder ve şifrelemeyi metin tabanlı herhangi bir iş akışının ayrılmaz bir parçası haline getirir. Bu yaklaşım, <a href="/tr/pgp-online-encrypt/">KeychainPGP</a>'nin masaüstünde nasıl çalıştığının temelidir ve kopyala-yapıştır destekleyen herhangi bir uygulama ile entegre olmasını sağlar — e-posta istemcileri, sohbet uygulamaları, not alma araçları, web formları ve daha fazlası.</p>

<p>PGP dünyasında yeniyseniz, panoya özel iş akışlarına dalmadan önce altta yatan kriptografik kavramlara giriş için <a href="/tr/docs/what-is-pgp/">PGP Nedir?</a> ile başlayın.</p>

<h2 id="why-clipboard-first">Neden Önce Pano?</h2>

<p>GnuPG gibi geleneksel PGP araçları dosyalar etrafında tasarlanmıştır. Bir dosyayı <code>gpg --encrypt</code> komutuna geçirir, şifreli bir dosya alır ve onu elle aktarırsınız. Bu model, PGP'nin ağırlıklı olarak e-posta ekleri ve dosya arşivleri için kullanıldığı 1990'larda mantıklıydı. Hassas iletişimin çoğunun web platformlarında, anlık mesajlaşma uygulamalarında ve dosya sistemi arayüzü sunmayan hizmetlerde gerçekleştiği günümüzde çok daha az anlamlıdır.</p>

<p>Önce pano yaklaşımı birçok sorunu aynı anda çözer:</p>

<ul>
<li><strong>Uygulama bağımsızlığı.</strong> Pano işletim sistemi düzeyinde bir soyutlama olduğundan, pano şifreleme herhangi bir uygulama ile çalışır. Belirli bir e-posta istemcisine, tarayıcı eklentisine veya eklenti ekosistemine bağımlı olmazsınız. Kopyalayıp yapıştırabiliyorsanız, şifreleyebilirsiniz.</li>
<li><strong>Diskte düz metin dosyası yok.</strong> Dosya şifreleme, dosya sisteminizde zorunlu olarak düz metin kalıntıları oluşturur — orijinal şifrelenmemiş dosya, geçici dosyalar, editör takas dosyaları ve potansiyel olarak şifresi çözülmüş çıktı. Bunların her biri bir adli tıp sorumluluğudur. Pano şifreleme, düz metni yalnızca geçici bellekte tutar.</li>
<li><strong>Daha az sürtünme.</strong> "Bunu şifrelemek istiyorum" ile "şifrelendi" arasındaki adım sayısı ne kadar azsa, kullanıcının mesajlarını gerçekten şifreleme olasılığı o kadar yüksektir. Üç adımlı bir iş akışı (kopyala, kısayol, yapıştır), dosya tabanlı bir boru hattından önemli ölçüde daha az sürtünmeye sahiptir.</li>
<li><strong>Modern iletişimle uyumluluk.</strong> Webmail, Signal masaüstü, Slack, Discord, Matrix istemcileri — bunların hiçbiri yerel olarak PGP desteklemez, ancak hepsi metin yapıştırmayı destekler. Pano PGP'si, protokol düzeyinde entegrasyon gerektirmeden bu boşluğu doldurur.</li>
</ul>

<p>Bu iş akışını kullanma konusunda adım adım rehber için <a href="/tr/docs/how-to-use-pgp/">PGP Nasıl Kullanılır</a>'a bakın.</p>

<h2 id="how-keychainpgp-uses-the-clipboard">KeychainPGP Panoyu Nasıl Kullanır</h2>

<p>KeychainPGP, baştan sona önce pano felsefesi etrafında inşa edilmiştir. Pano erişimini bir dosya şifreleme aracına eklenmiş bir kolaylık özelliği olarak ele almak yerine, kriptografik boru hattından kullanıcı arayüzüne kadar tüm mimari panonun birincil veri kanalı olduğunu varsayar.</p>

<h3 id="the-encryption-workflow">Şifreleme İş Akışı</h3>

<p>KeychainPGP ile bir mesajı şifreleme süreci üç adımdan oluşur:</p>

<ol>
<li><strong>Kopyalayın</strong> — düz metin mesajınızı herhangi bir uygulamadan (e-posta taslağı, sohbet penceresi, metin editörü, web formu).</li>
<li><strong><code>Ctrl+Shift+E</code>'ye basın</strong> (varsayılan genel kısayol). KeychainPGP pano içeriğinizi okur, seçili alıcının açık anahtarıyla metni şifreler ve ASCII-armored PGP şifreli metnini panoya yazar.</li>
<li><strong>Yapıştırın</strong> — şifreli mesajı hedefine. Gelen, <code>-----BEGIN PGP MESSAGE-----</code> ile başlayan standart bir OpenPGP ASCII-armored bloğudur ve herhangi bir OpenPGP uyumlu araç tarafından çözülebilir.</li>
</ol>

<p>Arka planda KeychainPGP, OpenPGP standardının modern bir Rust uygulaması olan <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> kütüphanesini kullanır. Anahtarlar varsayılan olarak imzalama için Ed25519 ve şifreleme için X25519 kullanır — kompakt anahtar boyutları ve hızlı işlemlerle güçlü güvenlik sunan eliptik eğri algoritmaları. Algoritma seçim diyalogları veya anahtar boyutu kararları yoktur. Kriptografi, kurulumdan itibaren güvenlidir.</p>

<h3 id="decryption-in-reverse">Tersine Şifre Çözme</h3>

<p>Şifre çözme, şifreleme akışını tersine çevirir. Şifreli bir PGP mesajı aldığınızda, tüm armored bloğu kopyalar, <code>Ctrl+Shift+D</code>'ye (varsayılan şifre çözme kısayolu) basarsınız ve KeychainPGP pano içeriğini çözülmüş düz metinle değiştirir. Ardından okumak için herhangi bir uygulamaya yapıştırabilirsiniz. Çözülmüş metin yalnızca bellekte ve pano tamponunda bulunur ve yapılandırılabilir bir gecikme sonra otomatik olarak temizlenir.</p>

<h2 id="security-considerations">Güvenlik Hususları</h2>

<p>Panoyu veri kanalı olarak kullanmak, KeychainPGP'nin birkaç savunma mekanizmasıyla ele aldığı özel güvenlik hususlarını ortaya çıkarır.</p>

<h3 id="clipboard-history-and-managers">Pano Geçmişi ve Yöneticileri</h3>

<p>Modern işletim sistemleri ve üçüncü taraf araçlar genellikle pano geçmişi tutar. Windows 10 ve sonrası yerleşik bir pano geçmişi özelliği içerir (<code>Win+V</code>). macOS yerel olarak geçmiş tutmaz, ancak Alfred, Raycast ve Paste gibi popüler araçlar tutar. Linux'ta CopyQ, Clipman ve GPaste gibi pano yöneticileri yaygındır.</p>

<p>Bu pano yöneticileri, şifrelemeden önceki düz metni ve şifre çözmeden sonraki çözülmüş çıktıyı yakalayabilir, böylece şifrelemenin faydasını tamamen ortadan kaldırır. PGP pano şifreleme kullanırken:</p>

<ul>
<li>İşletim sisteminizde pano geçmişini devre dışı bırakın (Windows'ta Ayarlar > Sistem > Pano'ya gidin ve Pano Geçmişi'ni kapatın).</li>
<li>Hassas içerik işlediğiniz makinelerde üçüncü taraf pano yöneticilerinden kaçının veya yönetici izin veriyorsa dışlama kuralları yapılandırın.</li>
<li>Maruz kalma penceresini en aza indirmek için KeychainPGP'nin yerleşik otomatik temizleme özelliğine güvenin.</li>
</ul>

<h3 id="auto-clear-after-30-seconds">30 Saniye Sonra Otomatik Temizleme</h3>

<p>KeychainPGP, çözülmüş düz metni panoya yazdıktan 30 saniye sonra panoyu otomatik olarak temizler. Bu gecikme uygulama ayarlarında yapılandırılabilir. Otomatik temizleme, çözülmüş içeriğin panoda süresiz olarak kalmamasını sağlar ve sonraki bir yapıştırma işleminin veya pano yöneticisinin hassas metni okumayı bitirdikten çok sonra yakalaması riskini azaltır.</p>

<p>Varsayılan 30 saniyelik gecikme, kullanılabilirlik ve güvenlik arasında bir dengedir. Çözülmüş metni ihtiyacınız olan yere yapıştırmanız için yeterli süre verir, ancak düz metnin erişilebilir olduğu pencereyi sınırlar. Yüksek güvenlikli ortamlar için bu gecikmeyi 5 saniyeye kadar düşürebilirsiniz.</p>

<h3 id="memory-handling-and-zeroization">Bellek Yönetimi ve Sıfırlama</h3>

<p>Pano şifreleme, hassas verilerin — özel anahtarlar, parolalar, çözülmüş düz metin — sürecin belleğinde bulunduğu anlamına gelir. KeychainPGP Rust ile yazılmıştır ve Sequoia-PGP'nin yok olma sırasında sıfırlama garantilerinden yararlanır. Gizli bir değer kapsam dışına çıktığında, belleği serbest bırakılmadan önce sıfırlarla üzerine yazılır. Bu, en iyi çaba temelli bir silme değildir; Rust'ın sahiplik modeli, sıfırlama yıkıcısının belirleyici şekilde çalışmasını garanti eder. <code>zeroize</code> crate'inin optimize edicinin üzerine yazmayı ortadan kaldırmasını engelleyen derleyici engelleriyle birleştirildiğinde, sırların kullanımdan sonra bellekte kalmaması konusunda güçlü güvence sağlar.</p>

<p>Bu, gizli verilerin çöp toplayıcı tarafından geri alınana ve (belki) üzerine yazılana kadar süresiz olarak bellekte kalabildiği çöp toplayıcılı dillerde (Java, Python, JavaScript) yazılmış araçlarla tezat oluşturur.</p>

<h2 id="opsec-mode">OPSEC Modu</h2>

<p>Düşman ortamlarda çalışan kullanıcılar — kaynaklarla iletişim kuran gazeteciler, gözetim altındaki aktivistler, hassas ifşaları ele alan güvenlik araştırmacıları — için KeychainPGP, uygulamayı varsayılan güvenlik duruşunun ötesinde güçlendiren bir OPSEC modu içerir.</p>

<h3 id="window-title-disguise">Pencere Başlığı Gizleme</h3>

<p>OPSEC modu etkinleştirildiğinde, KeychainPGP pencere başlığını "Hesap Makinesi" veya "Notlar" gibi sıradan bir şeye değiştirir. Bu, sıradan omuz sörfünü önler ve pencere başlıklarını kaydeden otomatik ekran yakalama araçlarını yanıltır. Ekran görüntülerini veya video kayıtlarını inceleyen bir düşman, herhangi bir pencere başlık çubuğunda "KeychainPGP" veya "PGP" görmez.</p>

<h3 id="ram-only-keys">Yalnızca RAM'de Anahtarlar</h3>

<p>OPSEC modunda, özel anahtarlar yalnızca RAM'de tutulur ve dosya sistemine asla yazılmaz. Bu, cihaza el konulursa veya disk görüntüsü alınırsa, kurtarılacak anahtar dosyası olmadığı anlamına gelir. Karşılığında, anahtarların her uygulama başlatılışında — genellikle bir donanım tokeninden, QR kodundan veya başka bir cihazdan güvenli aktarımla — yeniden içe aktarılması gerekir.</p>

<h3 id="panic-wipe">Acil Silme</h3>

<p>Acil silme düğmesi (veya ilişkili klavye kısayolu), bellekteki tüm kriptografik materyali anında sıfırlar, panoyu temizler ve isteğe bağlı olarak uygulamayı kapatır. Bu, tüm hassas durumu anında yok etmeniz gereken durumlar için tasarlanmıştır — örneğin, cihazınıza yakın zamanda el konulacağını öngörüyorsanız. Silme anında ve geri dönüşümsüzdür; başka yere yedeklenmemiş yalnızca RAM'de olan anahtarlar kalıcı olarak kaybolur.</p>

<h3 id="tor-proxy-support">Tor Proxy Desteği</h3>

<p>OPSEC modu, anahtar sunucusu aramalarını ve diğer ağ trafiğini Tor SOCKS proxy üzerinden yönlendirme yeteneğini içerir. Bu, ISS'nizin veya ağ düzeyindeki bir düşmanın PGP açık anahtarları aldığınızı gözlemlemesini önler; bu bilgi, iletişim ortaklarınızı tanımlamak için meta veri olarak kullanılabilir. Tor proxy desteği etkinleştirildiğinde, KeychainPGP'den giden tüm bağlantılar yapılandırılmış SOCKS5 proxy üzerinden yönlendirilir (Tor yerel olarak çalıştırılıyorsa tipik olarak <code>127.0.0.1:9050</code>).</p>

<h2 id="clipboard-encryption-vs-file-encryption">Pano Şifreleme ve Dosya Şifreleme</h2>

<p>PGP pano şifreleme ve dosya şifreleme, aynı altta yatan OpenPGP standardını kullanır ve birlikte çalışabilir şifreli metin üretir. Fark iş akışında ve bundan kaynaklanan güvenlik özelliklerindedir.</p>

<table>
<tr><th>Boyut</th><th>Pano Şifreleme</th><th>Dosya Şifreleme</th></tr>
<tr><td><strong>Giriş/çıkış</strong></td><td>Sistem panosu (geçici bellek)</td><td>Diskteki dosyalar (kalıcı depolama)</td></tr>
<tr><td><strong>Düz metin kalıntıları</strong></td><td>Diskte yok; gecikmeden sonra panodan temizlenir</td><td>Orijinal dosya, geçici dosyalar, editör yedekleri kalabilir</td></tr>
<tr><td><strong>Uygulama desteği</strong></td><td>Kopyala/yapıştır destekleyen herhangi bir uygulama</td><td>Dosya sistemi erişimi veya CLI entegrasyonu gerektirir</td></tr>
<tr><td><strong>İş akışı adımları</strong></td><td>3 (kopyala, kısayol, yapıştır)</td><td>5+ (dosya kaydet, CLI çalıştır, çıktı belirt, çıktıyı aç, aktar)</td></tr>
<tr><td><strong>Toplu işleme</strong></td><td>Büyük hacimler için pratik değil</td><td>Toplu dosya ve arşiv şifreleme için uygundur</td></tr>
<tr><td><strong>Büyük veri hacimleri</strong></td><td>Panoya sığan metinle sınırlı</td><td>İsteğe bağlı boyutta dosyaları işler</td></tr>
<tr><td><strong>Adli tıp izi</strong></td><td>Minimum (yalnızca RAM)</td><td>Önemli (disk kalıntıları, dosya sistemi meta verileri)</td></tr>
</table>

<p>Pano şifreleme, günlük iletişimde mesaj düzeyinde şifreleme için en iyi seçimdir. Dosya şifreleme, ikili verileri, büyük arşivleri şifrelemeniz gerektiğinde veya alıcının bir <code>.pgp</code> eki beklediğinde gerekli olmaya devam eder. KeychainPGP her iki modu da destekler, ancak pano iş akışı konusunda üstündür.</p>

<h2 id="threat-model">Tehdit Modeli</h2>

<p>PGP pano şifrelemenin neyi koruduğunu ve neyi korumadığını anlamak, bilinçli güvenlik kararları vermek için önemlidir. Tek bir araç tüm tehditleri karşılayamaz.</p>

<h3 id="what-clipboard-encryption-protects-against">Pano Şifrelemenin Koruduğu Durumlar</h3>

<ul>
<li><strong>Ağ gözetimi.</strong> Cihazınızı terk etmeden önce şifrelenen mesajlar, ağı izleyen herkes için opaktır — ISS'niz, Wi-Fi dinleyicisi veya derin paket incelemesi yapan devlet aktörü. PGP şifreli metin, düz metni tehlikeye atmadan herhangi bir sayıda güvenilmez ağdan geçebilir.</li>
<li><strong>E-posta ve mesaj müdahalesi.</strong> Bir düşman e-posta sunucunuza, sohbet sağlayıcınızın veritabanına veya iletim halindeki bir mesaja erişirse, yalnızca şifreli metin elde eder. Alıcının özel anahtarı olmadan içeriği kurtarmak hesaplama açısından imkansızdır.</li>
<li><strong>Depolama tehlikeleri.</strong> Bir düşman e-posta arşivlerinizin, sohbet günlüklerinizin veya bulut yedeklerinizin bir kopyasını elde ederse, PGP ile şifrelenen mesajlar korumalı kalır. Bu, düz metnin diske hiç dokunmadığı pano şifreleme için özellikle geçerlidir.</li>
<li><strong>Meta veri azaltma (OPSEC moduyla).</strong> PGP e-posta başlıklarını veya mesaj meta verilerini şifrelemese de, Tor proxy desteği ve pencere başlığı gizleme gibi OPSEC modu özellikleri, şifreleme kullanımınız etrafındaki gözlemlenebilir meta verileri azaltır.</li>
</ul>

<h3 id="what-clipboard-encryption-does-not-protect-against">Pano Şifrelemenin Korumadığı Durumlar</h3>

<ul>
<li><strong>Tuş kaydedici ile terminal güvenliği ihlali.</strong> Bir düşman cihazınıza tuş kaydedici veya ekran yakalama zararlı yazılımı yüklediyse, şifrelemeden önce veya şifre çözmeden sonra düz metni yakalayabilir. Pano şifreleme güvenilir bir terminal varsayar. Cihazınız işletim sistemi düzeyinde tehlikeye girmişse, uygulama düzeyinde hiçbir şifreleme yardımcı olamaz.</li>
<li><strong>Kilidi açık cihaza fiziksel erişim.</strong> Bir düşman, cihazınız kilidi açık ve KeychainPGP anahtarlar yüklü olarak çalışırken fiziksel erişime sahipse, mesajların şifresini çözebilir. Yalnızca RAM'de anahtarlar ve acil silme düğmesi bunu bir ölçüde hafifletir, ancak düşman erişim elde etmeden önce harekete geçmenizi gerektirir.</li>
<li><strong>Ele geçirilmiş özel anahtarlar.</strong> Özel anahtarınız sızdırılırsa (yedekten, ele geçirilmiş cihazdan veya zayıf paroladan), o anahtara şifrelenen tüm mesajlar — geçmiş ve gelecek — tehlikeye girer. Güçlü bir parola kullanın ve özel anahtarınızı mümkün olan en az cihazda tutun.</li>
<li><strong>Trafik analizi.</strong> PGP mesaj içeriğini şifreler, iletişim kalıplarını şifrelemez. Ağ trafiğinizi gözlemleyebilen bir düşman, iletişim kurduğunuzu, ne sıklıkla ve potansiyel olarak kiminle (anahtar sunucusu sorgularına dayalı) iletişim kurduğunuzu belirleyebilir, içeriği okumasa bile. OPSEC modundaki Tor proxy desteği bu sorunu kısmen ele alır.</li>
</ul>

<p>Bu kavramlara daha geniş bir giriş için <a href="/tr/docs/pgp-for-beginners/">Yeni Başlayanlar İçin PGP</a>, açık anahtar kriptografisi ve anahtar yönetiminin temellerini kapsar.</p>

<h2 id="best-practices">Pano PGP İçin En İyi Uygulamalar</h2>

<p>Bu uygulamaları takip etmek, PGP pano şifrelemenin güvenlik faydalarını en üst düzeye çıkaracaktır:</p>

<ol>
<li><strong>Pano geçmişini devre dışı bırakın.</strong> İşletim sistemi düzeyinde pano geçmişini devre dışı bırakın ve şifreli iletişim yönettiğiniz makinelerden üçüncü taraf pano yöneticilerini kaldırın.</li>
<li><strong>Otomatik temizlemeyi açık tutun.</strong> Pano otomatik temizleme zamanlayıcısını devre dışı bırakmayın. Kullanılabilir bulduğunuz en kısa aralığa düşürün. Beş ila on beş saniye çoğu iş akışı için yeterlidir.</li>
<li><strong>Haklı olduğunda OPSEC modunu kullanın.</strong> Şifreleme kullanmanın bile bir risk olduğu bir ortamda çalışıyorsanız, pencere başlığı gizleme, yalnızca RAM'de anahtarlar ve Tor yönlendirme için OPSEC modunu etkinleştirin.</li>
<li><strong>Alıcı anahtarlarını bant dışı doğrulayın.</strong> Birinin açık anahtarına mesaj şifrelemeden önce, anahtar parmak izini ayrı bir kanal üzerinden doğrulayın (yüz yüze, sesli arama, bilinen bir anahtardan imzalanmış mesaj). Bu, anahtar dağıtımında ortadaki adam saldırılarını önler.</li>
<li><strong>Güçlü parolalar kullanın.</strong> Özel anahtarınızı uzun ve tahmin edilmesi zor bir parola ile koruyun. Rastgele oluşturulmuş dört ila altı kelimelik bir parola, kısa bir karışık karakter dizisinden daha güvenli ve yazmak daha kolaydır.</li>
<li><strong>Terminalinizi temiz tutun.</strong> Pano şifreleme güvenilir bir cihaz varsayar. Güncel bir işletim sistemi kullanın, güvenilmeyen yazılımlar kurmaktan kaçının ve durağan verileri korumak için tam disk şifreleme kullanın.</li>
<li><strong>Ed25519/X25519 anahtarlarını tercih edin.</strong> KeychainPGP bu modern eliptik eğri algoritmalarını iyi nedenlerle varsayılan olarak kullanır. Hızlı, kompakt ve eski RSA ve DSA anahtarlarını etkileyen bir dizi uygulama düzeyinde saldırıya karşı dirençlidir. Eski bir anahtardan geçiş yapıyorsanız, yeni bir Ed25519/X25519 anahtar çifti oluşturun ve kişilerinizle geçişi yapın.</li>
<li><strong>İş akışınızı test edin.</strong> Kritik iletişim için pano şifrelemeye güvenmeden önce tam döngüyü pratik yapın: anahtar oluşturun, açık anahtarları değiştirin, test mesajı şifreleyin, diğer tarafta şifresini çözün. Süreçle aşinalık, baskı altında hata riskini azaltır.</li>
</ol>

<p>PGP pano şifreleme sihirli bir çözüm değildir, ancak iyi operasyonel güvenlik uygulamalarıyla birleştirildiğinde, zaten kullandığınız araçlarla entegre olan şifreli iletişime pratik, düşük sürtünmeli bir yol sunar. Pano öncelikli iş akışını çalışırken görmek için <a href="/tr/pgp-online-encrypt/">KeychainPGP'yi tarayıcınızda deneyin</a>.</p>
`
};

export default doc;
