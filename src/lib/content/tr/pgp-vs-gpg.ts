import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP ve GPG: PGP ile GPG Arasındaki Fark Nedir?',
	description: 'PGP ve GPG arasındaki farkı keşfedin. Pretty Good Privacy, GnuPG ve OpenPGP standardını karşılaştırarak doğru şifreleme aracını bulun.',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-the-difference-between-pgp-and-gpg', text: 'Fark Nedir?', level: 2 },
		{ id: 'what-is-pgp', text: 'PGP Nedir?', level: 2 },
		{ id: 'what-is-gpg-gnupg', text: 'GPG (GnuPG) Nedir?', level: 2 },
		{ id: 'what-is-openpgp', text: 'OpenPGP Nedir?', level: 2 },
		{ id: 'pgp-vs-gpg-comparison-table', text: 'PGP ve GPG Karşılaştırma Tablosu', level: 2 },
		{ id: 'key-differences-explained', text: 'Temel Farklar', level: 2 },
		{ id: 'which-should-you-use', text: 'Hangisini Kullanmalısınız?', level: 2 },
		{ id: 'where-keychainpgp-fits-in', text: 'KeychainPGP\'nin Yeri', level: 2 },
		{ id: 'frequently-asked-questions', text: 'SSS', level: 2 }
	],
	html: `
<h1>PGP ve GPG: PGP ile GPG Arasındaki Fark Nedir?</h1>

<h2 id="what-is-the-difference-between-pgp-and-gpg">PGP ile GPG Arasındaki Fark Nedir?</h2>

<p>PGP ile GPG arasındaki fark, kökenlerine ve lisanslarına dayanır. <strong>PGP</strong> (Pretty Good Privacy), 1991 yılında Phil Zimmermann tarafından oluşturulan orijinal tescilli şifreleme programıdır. <strong>GPG</strong> (GNU Privacy Guard, GnuPG olarak da bilinir), GNU projesi kapsamında geliştirilen aynı konseptin özgür ve açık kaynaklı yeniden uygulamasıdır. Her iki program da <strong>OpenPGP</strong> standardını uyguladığından, uyumlu şifreli mesajlar üretir ve birbirlerinin anahtarlarıyla çalışabilir. Pratikte, GPG günümüzde çoğu kişinin kullandığı araçtır çünkü ücretsizdir, aktif olarak geliştirilmektedir ve tüm büyük işletim sistemlerinde mevcuttur. Şifreleme konusunda yeniyseniz, <a href="/tr/docs/pgp-for-beginners/">Yeni Başlayanlar İçin PGP</a> rehberimiz temel kavramları adım adım açıklar.</p>

<h2 id="what-is-pgp">PGP Nedir?</h2>

<p>PGP, <strong>Pretty Good Privacy</strong> anlamına gelir. Phil Zimmermann ilk sürümü 1991'de yazdı ve güçlü şifrelemeye ihtiyaç duyan aktivistler ve sıradan vatandaşlar için ücretsiz bir araç olarak yayınladı. Yazılım, simetrik anahtar şifrelemeyi açık anahtar kriptografisiyle birleştiriyordu.</p>

<p>Üç yıllık bir federal soruşturmanın (1996'da düşürülen) ardından Zimmermann PGP Inc.'i kurdu. Şirket birçok kez el değiştirdi: 1997'de Network Associates, 2002'de PGP Corporation, ardından 2010'da Symantec (şimdi Broadcom). Bugün PGP, ağırlıklı olarak kurumlara yönelik ticari ürün paketleri olarak varlığını sürdürmektedir.</p>

<p>Altta yatan teknoloji hakkında daha fazla bilgi için <a href="/tr/docs/what-is-pgp/">PGP nedir ve nasıl çalışır</a> makalemize bakın.</p>

<h2 id="what-is-gpg-gnupg">GPG (GnuPG) Nedir?</h2>

<p>GPG veya <strong>GNU Privacy Guard (GnuPG)</strong>, OpenPGP standardının özgür ve açık kaynaklı bir uygulamasıdır. Werner Koch, projeyi 1997'de Alman hükümetinin finansmanıyla başlattı ve 1.0 sürümünü 1999'da yayınladı. GnuPG, özellikle tescilli PGP yazılımına tamamen özgür bir alternatif sağlamak amacıyla oluşturuldu.</p>

<p>GnuPG, GNU projesinin bir parçasıdır ve GNU Genel Kamu Lisansı (GPL) altında lisanslanmıştır. Çoğu Linux dağıtımında varsayılan olarak gelir. <code>gpg</code> komut satırı aracı, çoğu geliştiricinin ve sistem yöneticisinin etkileşimde bulunduğu arayüzdür. Mevcut araçlara genel bir bakış için <a href="/tr/docs/pgp-tools/">PGP araçları karşılaştırmamıza</a> bakın.</p>

<h2 id="what-is-openpgp">OpenPGP Nedir?</h2>

<p><strong>OpenPGP</strong> ne bir ürün ne de bir yazılımdır. PGP uyumlu araçların uyması gereken mesaj formatlarını, anahtar formatlarını ve kriptografik prosedürleri tanımlayan açık bir standarttır. IETF orijinal spesifikasyonu 1998'de <strong>RFC 2440</strong> olarak yayınladı ve en çok başvurulan sürüm <strong>RFC 4880</strong>'dir (2007). <strong>RFC 9580</strong> (2024) ise Ed25519 desteği ve AEAD şifreleme ile standardı modernize eden büyük bir güncellemedir.</p>

<p>OpenPGP'nin varlığı birlikte çalışabilirliği mümkün kılar. PGP ve GPG aynı standardı uyguladığından, GPG ile şifrelenen bir mesaj PGP ile çözülebilir ve tersi de geçerlidir.</p>

<h2 id="pgp-vs-gpg-comparison-table">PGP ve GPG Karşılaştırma Tablosu</h2>

<table>
<tr><th>Özellik</th><th>PGP (Broadcom)</th><th>GPG (GnuPG)</th><th>OpenPGP</th></tr>
<tr><td><strong>Tür</strong></td><td>Ticari yazılım</td><td>Özgür/açık kaynak yazılım</td><td>Açık standart</td></tr>
<tr><td><strong>Lisans</strong></td><td>Tescilli</td><td>GPL (ücretsiz)</td><td>IETF spesifikasyonu</td></tr>
<tr><td><strong>Maliyet</strong></td><td>Ücretli lisans</td><td>Ücretsiz</td><td>Yok</td></tr>
<tr><td><strong>Platformlar</strong></td><td>Windows, macOS</td><td>Windows, macOS, Linux, BSD</td><td>Yok</td></tr>
<tr><td><strong>Dahili GUI</strong></td><td>Evet (kurumsal konsol)</td><td>Hayır (üçüncü taraf GUI mevcut)</td><td>Yok</td></tr>
<tr><td><strong>Kaynak kodu</strong></td><td>Hayır</td><td>Evet</td><td>Kamusal standart</td></tr>
</table>

<h2 id="key-differences-explained">Temel Farklar</h2>

<h3>Lisans ve Maliyet</h3>

<p>PGP, ticari lisans altında satılan tescilli bir yazılımdır. GPG ise GPL altında yayınlanır, yani herkes ücretsiz olarak indirebilir, kullanabilir, değiştirebilir ve yeniden dağıtabilir. Bireyler, küçük ekipler ve açık kaynak projeleri için GPG maliyet açısından bariz tercihtir.</p>

<h3>Platform Desteği</h3>

<p>GnuPG neredeyse tüm Unix sistemlerinde çalışır ve Windows ile macOS için resmi derlemelere sahiptir. Çapraz platform ihtiyaçları için KeychainPGP gibi modern araçlar, tek bir kod tabanından Windows, macOS, Linux ve Android için yerel derlemeler sağlar.</p>

<h3>Kullanıcı Deneyimi</h3>

<p>Ticari PGP, kurumsal dağıtım için grafik arayüz içerir. GnuPG temelde bir komut satırı aracıdır. KeychainPGP gibi araçlar, komut satırı seçeneklerini ezberlemeye gerek kalmadan anahtar yönetimi, şifreleme, şifre çözme ve imzalamayı yöneten yerel bir grafik arayüz sunar. <a href="/tr/pgp-online-encrypt/">Çevrimiçi PGP şifreleme aracımızla</a> PGP şifrelemeyi doğrudan tarayıcınızda deneyebilirsiniz.</p>

<h2 id="which-should-you-use">Hangisini Kullanmalısınız?</h2>

<ul>
<li><strong>Mevcut Broadcom/Symantec altyapısı olan kurumlar:</strong> Ticari PGP en kolay yol olabilir.</li>
<li><strong>Geliştiriciler ve sistem yöneticileri:</strong> GnuPG, çoğu sunucuda varsayılan olarak yüklü standart araçtır.</li>
<li><strong>GUI isteyen gizlilik bilincindeki kullanıcılar:</strong> KeychainPGP gibi modern bir OpenPGP uygulamasını değerlendirin.</li>
<li><strong>Web tabanlı veya hızlı şifreleme ihtiyaçları:</strong> <a href="/tr/pgp-online-encrypt/">Çevrimiçi PGP şifreleme aracı</a>, hiçbir şey kurmadan tek seferlik görevleri halledebilir.</li>
</ul>

<h2 id="where-keychainpgp-fits-in">KeychainPGP'nin Yeri</h2>

<p><a href="/">KeychainPGP</a>, Rust ile sıfırdan yazılmış bir OpenPGP kütüphanesi olan <strong>Sequoia-PGP</strong> kullanarak OpenPGP standardını uygulayan modern, açık kaynaklı bir masaüstü uygulamasıdır. Ne PGP (ticari ürün) ne de GPG (GnuPG) ile aynıdır. OpenPGP ekosisteminde her ikisiyle de bir arada var olan bağımsız bir uygulamadır.</p>

<p>KeychainPGP'yi değerlendirmenin başlıca nedenleri:</p>

<ul>
<li><strong>Çapraz platform:</strong> Windows, macOS, Linux ve Android için yerel derlemeler, ayrıca web uygulaması ve CLI</li>
<li><strong>Modern kriptografi:</strong> Curve25519/Ed25519 ve AEAD desteğiyle Sequoia-PGP üzerine inşa edilmiştir</li>
<li><strong>Açık kaynak:</strong> Çift MIT / Apache-2.0 lisansı, tamamen denetlenebilir</li>
<li><strong>Kullanıcı dostu:</strong> Pano iş akışı ve genel kısayollarla grafik arayüz</li>
<li><strong>Otomasyon için CLI:</strong> <code>keychainpgp</code> CLI, anahtar oluşturma, şifreleme, şifre çözme, imzalama, doğrulama ve anahtar halkası yönetimini destekler</li>
<li><strong>OpenPGP uyumlu:</strong> Anahtarlar ve mesajlar GPG, PGP ve diğer tüm OpenPGP araçlarıyla birlikte çalışabilir</li>
</ul>

<h2 id="frequently-asked-questions">Sıkça Sorulan Sorular</h2>

<h3>GPG, PGP ile aynı şey midir?</h3>

<p>Hayır. GPG (GnuPG) ve PGP, farklı kişiler tarafından oluşturulmuş ayrı yazılımlardır. PGP, 1991'de Phil Zimmermann tarafından oluşturuldu ve bugün Broadcom'un ticari bir ürünüdür. GPG, 1997'de Werner Koch tarafından özgür ve açık kaynaklı bir alternatif olarak oluşturuldu. Her ikisi de OpenPGP standardını uyguladığından işlevsel olarak uyumludur.</p>

<h3>GPG ve PGP anahtarları birlikte çalışabilir mi?</h3>

<p>Evet. GPG ve PGP, IETF standardı tarafından tanımlanan OpenPGP anahtar formatını kullanır. GPG'den bir açık anahtar dışa aktarıp PGP'ye veya KeychainPGP gibi herhangi bir OpenPGP uyumlu araca içe aktarabilirsiniz.</p>

<h3>GPG 2026'da hâlâ güvenli mi?</h3>

<p>GnuPG güvenli ve aktif olarak bakımı yapılan bir araç olmaya devam etmektedir. Modern anahtar türlerini (Ed25519 gibi) kullanın, yazılımınızı güncel tutun ve iyi anahtar yönetimi uygulamalarını takip edin. Adım adım rehber için <a href="/tr/docs/pgp-for-beginners/">Yeni Başlayanlar İçin PGP</a> makalemize bakın.</p>

<h3>OpenPGP ne anlama gelir?</h3>

<p>OpenPGP, PGP uyumlu şifrelemenin nasıl çalıştığını tanımlayan, IETF tarafından yayınlanan açık bir standarttır. Mesaj formatlarını, anahtar formatlarını, algoritma gereksinimlerini ve imza yapılarını belirtir.</p>

<h3>KeychainPGP kullanmak için PGP veya GPG'ye ihtiyacım var mı?</h3>

<p>Hayır. KeychainPGP, PGP veya GnuPG kurulumuna bağlı olmayan bağımsız bir uygulamadır. Rust ile yazılmış OpenPGP standardının bağımsız bir uygulaması olan Sequoia-PGP kütüphanesini kullanır. Ancak KeychainPGP'de oluşturulan anahtarlar ve şifreli mesajlar GPG ve PGP ile tamamen uyumludur.</p>
`
};

export default doc;
