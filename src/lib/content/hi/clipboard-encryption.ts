import type { DocContent } from '../types';

const doc: DocContent = {
	title: 'PGP के साथ क्लिपबोर्ड एन्क्रिप्शन: सुरक्षित मैसेजिंग के लिए clipboard-first दृष्टिकोण',
	description: 'जानें कि PGP क्लिपबोर्ड एन्क्रिप्शन कैसे काम करता है, यह दैनिक OPSEC के लिए फ़ाइल-आधारित एन्क्रिप्शन से बेहतर क्यों है और KeychainPGP किसी भी ऐप में संदेशों को एन्क्रिप्ट करने के लिए क्लिपबोर्ड का उपयोग कैसे करता है।',
	lastUpdated: '2026-02-25',
	toc: [
		{ id: 'what-is-clipboard-encryption', text: 'क्लिपबोर्ड एन्क्रिप्शन क्या है?', level: 2 },
		{ id: 'why-clipboard-first', text: 'clipboard-first क्यों?', level: 2 },
		{ id: 'how-keychainpgp-uses-the-clipboard', text: 'KeychainPGP क्लिपबोर्ड का उपयोग कैसे करता है', level: 2 },
		{ id: 'security-considerations', text: 'सुरक्षा विचार', level: 2 },
		{ id: 'opsec-mode', text: 'OPSEC मोड', level: 2 },
		{ id: 'clipboard-encryption-vs-file-encryption', text: 'क्लिपबोर्ड बनाम फ़ाइल एन्क्रिप्शन', level: 2 },
		{ id: 'threat-model', text: 'खतरा मॉडल', level: 2 },
		{ id: 'best-practices', text: 'सर्वोत्तम प्रथाएं', level: 2 }
	],
	html: `
<h1>PGP के साथ क्लिपबोर्ड एन्क्रिप्शन</h1>

<h2 id="what-is-clipboard-encryption">क्लिपबोर्ड एन्क्रिप्शन क्या है?</h2>
<p>PGP क्लिपबोर्ड एन्क्रिप्शन डिस्क पर फ़ाइलों के बजाय ऑपरेटिंग सिस्टम के क्लिपबोर्ड से सीधे पढ़कर और लिखकर टेक्स्ट को एन्क्रिप्ट और डिक्रिप्ट करने की एक विधि है। बस अपना टेक्स्ट कॉपी करें, शॉर्टकट से एन्क्रिप्शन सक्रिय करें और एन्क्रिप्टेड PGP संदेश जहां चाहें पेस्ट करें। यह <a href="/hi/pgp-online-encrypt/">KeychainPGP</a> के डेस्कटॉप कामकाज का आधार है।</p>

<p>अगर आप PGP में नए हैं, तो <a href="/hi/docs/what-is-pgp/">PGP क्या है?</a> से शुरू करें।</p>

<h2 id="why-clipboard-first">clipboard-first क्यों?</h2>
<ul>
<li><strong>ऐप्लिकेशन स्वतंत्रता।</strong> कॉपी-पेस्ट सपोर्ट करने वाली किसी भी ऐप के साथ काम करता है।</li>
<li><strong>डिस्क पर कोई प्लेनटेक्स्ट फ़ाइल नहीं।</strong> प्लेनटेक्स्ट केवल वोलेटाइल मेमोरी में रहता है।</li>
<li><strong>कम घर्षण।</strong> तीन कदम: कॉपी, शॉर्टकट, पेस्ट।</li>
<li><strong>आधुनिक संचार संगतता।</strong> Webmail, Signal, Slack, Discord — सभी टेक्स्ट पेस्ट सपोर्ट करते हैं।</li>
</ul>

<h2 id="how-keychainpgp-uses-the-clipboard">KeychainPGP क्लिपबोर्ड का उपयोग कैसे करता है</h2>
<ol>
<li><strong>कॉपी करें</strong> किसी भी ऐप्लिकेशन से अपना संदेश।</li>
<li><strong><code>Ctrl+Shift+E</code> दबाएं</strong>। KeychainPGP क्लिपबोर्ड पढ़ता है, एन्क्रिप्ट करता है और PGP ASCII-armored परिणाम वापस लिखता है।</li>
<li><strong>पेस्ट करें</strong> एन्क्रिप्टेड संदेश गंतव्य पर।</li>
</ol>

<p>KeychainPGP Rust में <a href="https://sequoia-pgp.org/">Sequoia-PGP</a> का उपयोग करता है जिसमें Ed25519/X25519 डिफ़ॉल्ट है।</p>

<h2 id="security-considerations">सुरक्षा विचार</h2>
<p>OS क्लिपबोर्ड इतिहास अक्षम करें और संवेदनशील सामग्री वाले उपकरणों पर थर्ड-पार्टी क्लिपबोर्ड प्रबंधकों से बचें। KeychainPGP डिक्रिप्टेड टेक्स्ट लिखने के 30 सेकंड बाद स्वचालित रूप से क्लिपबोर्ड साफ़ करता है। 5 सेकंड तक कॉन्फ़िगर करने योग्य। Rust में Sequoia-PGP की zerification गारंटी के साथ लिखा गया।</p>

<h2 id="opsec-mode">OPSEC मोड</h2>
<p>शत्रुतापूर्ण वातावरण में उपयोगकर्ताओं के लिए: छिपी विंडो शीर्षक, केवल RAM में कुंजियां, आपातकालीन सफाई बटन और Tor प्रॉक्सी सपोर्ट।</p>

<h2 id="clipboard-encryption-vs-file-encryption">क्लिपबोर्ड बनाम फ़ाइल एन्क्रिप्शन</h2>

<table>
<tr><th>पहलू</th><th>क्लिपबोर्ड एन्क्रिप्शन</th><th>फ़ाइल एन्क्रिप्शन</th></tr>
<tr><td><strong>इनपुट/आउटपुट</strong></td><td>OS क्लिपबोर्ड (वोलेटाइल मेमोरी)</td><td>डिस्क पर फ़ाइलें (स्थायी भंडारण)</td></tr>
<tr><td><strong>प्लेनटेक्स्ट अवशेष</strong></td><td>डिस्क पर कोई नहीं</td><td>मूल फ़ाइल, अस्थायी फ़ाइलें बची रह सकती हैं</td></tr>
<tr><td><strong>ऐप सपोर्ट</strong></td><td>कॉपी/पेस्ट वाली कोई भी ऐप</td><td>फ़ाइल सिस्टम एक्सेस आवश्यक</td></tr>
<tr><td><strong>कदम</strong></td><td>3</td><td>5+</td></tr>
<tr><td><strong>फोरेंसिक फुटप्रिंट</strong></td><td>न्यूनतम (केवल RAM)</td><td>महत्वपूर्ण</td></tr>
</table>

<h2 id="threat-model">खतरा मॉडल</h2>

<h3>क्लिपबोर्ड एन्क्रिप्शन किससे बचाता है</h3>
<ul>
<li><strong>नेटवर्क निगरानी।</strong> एन्क्रिप्टेड संदेश किसी भी नेटवर्क मॉनिटर के लिए अपारदर्शी हैं।</li>
<li><strong>ईमेल और संदेश अवरोधन।</strong> निजी कुंजी के बिना, सामग्री अप्राप्य है।</li>
<li><strong>स्टोरेज समझौता।</strong> PGP संदेश सुरक्षित रहते हैं।</li>
</ul>

<h3>क्लिपबोर्ड एन्क्रिप्शन किससे नहीं बचाता</h3>
<ul>
<li><strong>डिवाइस पर कीलॉगर।</strong></li>
<li><strong>अनलॉक डिवाइस तक भौतिक पहुंच।</strong></li>
<li><strong>समझौता की गई निजी कुंजियां।</strong></li>
<li><strong>ट्रैफ़िक विश्लेषण।</strong></li>
</ul>

<h2 id="best-practices">सर्वोत्तम प्रथाएं</h2>

<ol>
<li><strong>क्लिपबोर्ड इतिहास अक्षम करें।</strong></li>
<li><strong>ऑटो-क्लीयर चालू रखें।</strong> 5-15 सेकंड पर्याप्त हैं।</li>
<li><strong>जरूरत पड़ने पर OPSEC मोड का उपयोग करें।</strong></li>
<li><strong>प्राप्तकर्ता कुंजियों को आउट-ऑफ-बैंड सत्यापित करें।</strong></li>
<li><strong>मजबूत पासफ़्रेज़ का उपयोग करें।</strong></li>
<li><strong>अपना डिवाइस सुरक्षित रखें।</strong></li>
<li><strong>Ed25519/X25519 कुंजियां पसंद करें।</strong></li>
<li><strong>अपने वर्कफ़्लो का परीक्षण करें।</strong></li>
</ol>

<p><a href="/hi/pgp-online-encrypt/">अपने ब्राउज़र में KeychainPGP आज़माएं</a> clipboard-first वर्कफ़्लो को क्रिया में देखने के लिए।</p>
`
};

export default doc;
