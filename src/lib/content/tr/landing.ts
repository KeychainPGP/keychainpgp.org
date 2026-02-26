import type { LandingContent } from '../types';

export const landing: LandingContent = {
	heroTitle: 'Ücretsiz Çevrimiçi PGP Şifreleme Aracı',
	heroSubtitle: 'Mesajlarınızı doğrudan tarayıcınızda OpenPGP ile şifreleyin ve şifresini çözün. Kurulum yok, hesap yok, sunucuya veri gönderilmez.',
	trustLine: 'Ücretsiz ve açık kaynak. MIT / Apache-2.0 lisansı. Telemetri yok.',
	ctaOpen: 'Tarayıcıda PGP Aracını Aç',
	ctaHow: 'Nasıl Çalışır',
	whatIsTitle: 'PGP Şifreleme Nedir?',
	whatIsText: 'PGP (Pretty Good Privacy), mesajları, e-postaları ve dosyaları şifrelemek için altın standarttır. Açık anahtar kriptografisi kullanır — herkesin size mesaj şifrelemek için kullanabileceği bir açık anahtar paylaşırsınız ve yalnızca özel anahtarınız bu mesajların şifresini çözebilir. 1991 yılında oluşturulan PGP, gazeteciler, güvenlik araştırmacıları, aktivistler ve dünya genelinde milyonlarca kullanıcı tarafından kullanılmaktadır. KeychainPGP, modern bir arayüz ve pano tabanlı iş akışıyla PGP\'yi herkes için erişilebilir kılar — komut satırı yok, yapılandırma yok, karmaşıklık yok.',
	howToTitle: 'PGP ile Çevrimiçi Mesaj Nasıl Şifrelenir',
	steps: [
		{ title: 'Çevrimiçi PGP aracını açın', text: 'KeychainPGP web uygulamasına gidin. Tamamen tarayıcınızda yüklenir — kurulum veya hesap gerekmez. Her şey WebAssembly aracılığıyla yerel olarak çalışır.' },
		{ title: 'PGP anahtarı oluşturun veya içe aktarın', text: 'Yeni bir Ed25519 + X25519 anahtar çifti oluşturun (en modern ve güvenli seçenek) veya mevcut bir PGP anahtarını ASCII formatında içe aktarın.' },
		{ title: 'Alıcının açık anahtarını içe aktarın', text: 'Kişinizin açık anahtarını Anahtarlar sekmesine yapıştırarak ekleyin. Bu anahtar mesajlarınızı şifrelemek için kullanılacaktır.' },
		{ title: 'Mesajınızı yazın', text: 'Şifrele sekmesine gidin ve korumak istediğiniz mesajı yazın veya yapıştırın.' },
		{ title: 'Alıcıyı seçin ve şifreleyin', text: 'Anahtar listenizden alıcıyı seçin ve "Panoya Şifrele" düğmesine tıklayın. Şifrelenmiş PGP mesajı anında kopyalanır.' },
		{ title: 'Şifrelenmiş mesajı gönderin', text: 'Şifrelenmiş mesajı herhangi bir e-posta, sohbet veya mesajlaşma uygulamasına yapıştırın. Yalnızca hedeflenen alıcı özel anahtarıyla şifresini çözebilir.' }
	],
	featuresTitle: 'PGP Şifreleme İçin Neden KeychainPGP Kullanmalısınız?',
	features: [
		{ icon: '🌐', title: '%100 Tarayıcıda', text: 'Her şey Rust\'tan derlenen WebAssembly aracılığıyla tarayıcınızda yerel olarak çalışır. Sıfır sunucu iletişimi. Mesajlarınız ve anahtarlarınız cihazınızdan asla ayrılmaz.' },
		{ icon: '🔒', title: 'Modern Kriptografi', text: 'Varsayılan olarak Ed25519 + X25519 eliptik eğri anahtarları. OpenSSL bağımlılığı olmayan Rust tabanlı bir OpenPGP uygulaması olan Sequoia-PGP tarafından desteklenir.' },
		{ icon: '💻', title: 'Çapraz Platform', text: 'Web uygulaması olarak ve Windows, macOS, Linux ve Android için yerel uygulamalar olarak kullanılabilir. Anahtarlarınız her yerde.' },
		{ icon: '📂', title: 'Açık Kaynak', text: 'MIT / Apache-2.0 lisansı altında tamamen denetlenebilir kod. Telemetri yok, takip yok, hesap yok. Kodu GitHub\'da inceleyin.' },
		{ icon: '📋', title: 'Önce Pano', text: 'Metin kopyalayın, kısayolla şifreleyin (Ctrl+Shift+E), şifrelenmiş mesajı yapıştırın. Herhangi bir uygulama ile çalışır — e-posta, sohbet, notlar, her yerde.' },
		{ icon: '⚡', title: 'Sıfır Yapılandırma', text: 'Algoritma seçimi yok, anahtar boyutu kararı yok, yapılandırma dosyası yok. Varsayılan olarak güvenli. Bir anahtar oluşturun ve saniyeler içinde şifrelemeye başlayın.' }
	],
	desktopTitle: 'Günlük Kullanım İçin Masaüstü Uygulamasını Edinin',
	desktopText: 'Web uygulaması hızlı şifreleme için mükemmeldir, ancak masaüstü uygulaması ek güvenlik özellikleriyle tam bir PGP deneyimi sunar:',
	desktopFeatures: [
		'Genel kısayollar — Herhangi bir uygulamadan şifrelemek için Ctrl+Shift+E, şifre çözmek için Ctrl+Shift+D',
		'Sistem tepsisi — Görev çubuğunuzda her zaman erişilebilir, arka planda sessizce çalışır',
		'Otomatik pano temizleme — Şifresi çözülmüş metin 30 saniye sonra panodan otomatik olarak silinir',
		'OPSEC modu — Pencere başlığını gizle, yalnızca RAM\'de anahtarlar ve acil silme düğmesi',
		'İşletim sistemi kimlik bilgisi deposu — Anahtarlar Windows Credential Manager, macOS Keychain veya Linux Secret Service\'de güvenle saklanır',
		'Android uygulaması — Mobilde aynı arayüz, cihazlar arası QR kod ile anahtar senkronizasyonu',
		'CLI — Betik yazma ve otomasyon için keychainpgp komut satırı aracı'
	],
	ctaDownload: 'KeychainPGP\'yi İndirin',
	ctaAllPlatforms: 'Tüm Platformlar',
	learnMoreTitle: 'PGP Şifreleme Hakkında Daha Fazla Bilgi',
	learnMoreLinks: [
		{ href: '/tr/docs/what-is-pgp/', title: 'PGP Nedir?', text: 'Pretty Good Privacy, açık anahtar kriptografisi ve dijital imzalar hakkında kapsamlı rehber.' },
		{ href: '/tr/docs/how-to-use-pgp/', title: 'PGP Nasıl Kullanılır', text: 'Anahtar oluşturma, mesaj şifreleme ve imza doğrulama için adım adım öğretici.' },
		{ href: '/tr/docs/pgp-vs-gpg/', title: 'PGP ve GPG Karşılaştırması', text: 'PGP, GPG (GnuPG) ve OpenPGP standardı arasındaki farkı anlayın.' },
		{ href: '/tr/docs/pgp-for-beginners/', title: 'Yeni Başlayanlar İçin PGP', text: 'PGP şifreleme hakkında bilmeniz gereken her şey, basitçe anlatılmıştır.' },
		{ href: '/tr/docs/clipboard-encryption/', title: 'Pano Şifreleme', text: 'Pano ile PGP şifreleme nasıl çalışır, güvenlik hususları ve OPSEC özellikleri.' },
		{ href: '/tr/blog/best-pgp-tools-2026/', title: '2026\'nın En İyi PGP Araçları', text: 'Mevcut en iyi PGP şifreleme yazılımlarının kapsamlı karşılaştırması ve sıralaması.' }
	]
};
