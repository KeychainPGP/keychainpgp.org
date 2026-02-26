import type { DocsIndexContent, BlogIndexContent } from '../types';

export const docsIndex: DocsIndexContent = {
	title: 'PGP Dokümantasyonu',
	description: 'PGP şifreleme hakkında her şeyi öğrenin — başlangıç rehberlerinden pano şifreleme ve anahtar yönetimi gibi ileri düzey konulara kadar.',
	intro: 'PGP şifreleme hakkında bilmeniz gereken her şey. İster yeni başlıyor olun ister ileri düzey konulara bakıyor olun, bu rehberler temelleri kapsar.',
	docs: [
		{
			title: 'PGP Nedir?',
			description: 'PGP şifrelemenin temellerini anlayın — açık anahtar kriptografisi, dijital imzalar, güven ağı ve kullanım alanları.',
			href: '/tr/docs/what-is-pgp/',
			icon: '🔑'
		},
		{
			title: 'PGP Nasıl Kullanılır',
			description: 'Adım adım öğretici: anahtar oluşturma, mesaj şifreleme, şifre çözme, dijital imzalar ve anahtar paylaşımı.',
			href: '/tr/docs/how-to-use-pgp/',
			icon: '📖'
		},
		{
			title: 'PGP ve GPG Karşılaştırması',
			description: 'PGP, GPG (GnuPG) ve OpenPGP standardı arasındaki farkları anlayın — tarihçe, uygulamalar ve hangi aracı seçmelisiniz.',
			href: '/tr/docs/pgp-vs-gpg/',
			icon: '⚖️'
		},
		{
			title: 'PGP Araçları',
			description: 'PGP araçlarına genel bakış — masaüstü istemcileri, CLI yardımcı programları, tarayıcı eklentileri ve web çözümleri.',
			href: '/tr/docs/pgp-tools/',
			icon: '🛠️'
		},
		{
			title: 'Yeni Başlayanlar İçin PGP',
			description: 'PGP\'de yeni misiniz? Buradan başlayın. Temel kavramları sade bir dille öğrenin ve ilk şifreli mesajınızı gönderin.',
			href: '/tr/docs/pgp-for-beginners/',
			icon: '🚀'
		},
		{
			title: 'Pano Şifreleme',
			description: 'PGP pano iş akışına hakim olun — herhangi bir uygulamadan genel kısayollarla metin şifreleyin ve şifresini çözün.',
			href: '/tr/docs/clipboard-encryption/',
			icon: '📋'
		}
	]
};

export const blogIndex: BlogIndexContent = {
	title: 'PGP Blog',
	description: 'PGP şifreleme araçları, yazılım karşılaştırmaları ve güvenli iletişim için en iyi uygulamalar hakkında derinlemesine makaleler.',
	intro: 'PGP şifreleme araçları, yazılım karşılaştırmaları ve güvenli iletişim için en iyi uygulamalar hakkında derinlemesine makaleler.',
	posts: [
		{
			title: '2026\'nın En İyi PGP Araçları',
			description: 'Mevcut en iyi PGP şifreleme araçlarının kapsamlı sıralaması — masaüstü uygulamalarından çevrimiçi çözümlere.',
			href: '/tr/blog/best-pgp-tools-2026/',
			date: '2026-02-25'
		},
		{
			title: 'PGP Yazılım Karşılaştırması',
			description: 'PGP yazılımlarının ayrıntılı karşılaştırması — özellikler, güvenlik, desteklenen platformlar ve kullanım kolaylığı.',
			href: '/tr/blog/pgp-software-comparison/',
			date: '2026-02-25'
		}
	]
};
