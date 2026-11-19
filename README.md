# Kişisel Tanıtım ve Portfolyo Sayfası Proje Ödevi

## Öğrenci Bilgileri
- **Adı Soyadı:** Kazım Efe Taşdemir
- **Öğrenci Numarası:** 25901010
- **Bölüm / Program:** Bilgi Güvenliği Teknolojisi (Kapadokya Üniversitesi Bilgisayar ve Bilişim Teknolojileri Fakültesi)
- **Sınıf:** 2. Sınıf
- **Ders:** BGY207 – Web Tasarımı
- **Öğretim Elemanı:** Dr. Mustafa FENERCİ
- **Akademik Dönem:** 2026-2027 / Güz Dönemi

---

## 1. Projenin Amacı ve Kısa Tanıtımı
Bu proje, modern web standartlarına uygun olarak HTML5, CSS3 ve saf (Vanilla) JavaScript kullanılarak hazırlanmış tek sayfalık bir kişisel tanıtım ve portfolyo web sitesidir. Sayfa; semantik etiketleme, duyarlı (responsive) tasarım, dinamik form doğrulaması, açık/koyu tema desteği ve erişilebilirlik (WCAG 2.2 AA) ilkeleri gözetilerek harici bir kütüphane ya da çerçeve (framework) kullanılmadan sıfırdan geliştirilmiştir.

---

## 2. Projeyi Çalıştırma / Nasıl Açılır?
1. Proje klasöründeki `index.html` dosyasını bulunuz.
2. Dosyaya çift tıklayarak veya sağ tıklayıp herhangi bir güncel web tarayıcısıyla (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari) açınız.
3. Sayfa tamamen istemci taraflı (client-side) çalıştığı için herhangi bir sunucu veya veritabanı kurulumuna ihtiyaç duymaz.

---

## 3. Görsel Kaynağı ve Telif / Lisans Beyanı
- **Dosya:** `assets/img/profil.jpg`
- **Kaynak:** Öğrencinin (Kazım Efe Taşdemir) kendi şahsi vesikalık/profil fotoğrafıdır.
- **Lisans:** Telif hakkı öğrenciye aittir; bu ders ve proje ödevi kapsamında kişisel portfolyo tanıtımı için kullanılmıştır.

---

## 4. Kullanılan Yapay Zekâ Araçları Beyanı
- Bu projenin kod mimarisinin planlanması, erişilebilirlik kontrolü ve dokümantasyon sürecinde **Google Antigravity / Gemini** yapay zekâ asistanından teknik danışmanlık ve kodlama desteği alınmıştır.

---

## 5. Kişisel Veri Güvenliği Beyanı
- Şartname kuralları (Ölçüt 5 - K5) ve KVKK/etik ilkeleri gereğince, sayfada kesinlikle gerçek ev adresi, cep telefonu numarası veya T.C. kimlik numarası gibi hassas kişisel verilere yer verilmemiştir. Sadece ad-soyad, kurumsal e-posta, şehir ve akademik bilgiler yer almaktadır.

---

## 6. Proje Dosya ve Klasör Hiyerarşisi
```text
tanitim-sayfasi/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── img/
        └── profil.jpg
```

---

## 7. Teslim Formatı
- Şartnameye uygun olarak ALMS'ye yüklenecek arşiv dosyası adı:
  **`25901010_KazimEfeTasdemir.zip`**
  (Türkçe karakter ve boşluk kullanılmamıştır).

---

## 8. Sunum ve Sözlü Soru Hazırlık Rehberi (3 Dakikalık Canlı Gösterim)

### Canlı Gösterim Adımları:
1. **Bölümler ve Menü:** Navigasyon menüsündeki "Hakkımda", "Eğitim ve Beceriler", "İletişim" linklerine tıklayarak ilgili bölümlere kaydığını ve okul harici bağlantısının yeni sekmede açıldığını gösterin.
2. **Görsel ve Tablo:** Profil görselini ve 3 sütunlu / 3 veri satırlı yetkinlik tablosunu gösterin.
3. **Tema Düğmesi:** "Koyu Tema" butonuna tıklayarak renklerin koyu temaya geçtiğini ve buton metninin "Açık Tema" olduğunu; tekrar tıklayınca eski haline döndüğünü gösterin.
4. **Form Doğrulaması:**
   - Alanlar boşken "Gönder" butonuna basın -> Ekranda `"Lütfen tüm alanları eksiksiz doldurunuz."` uyarısı çıkar.
   - E-posta alanına `@` içermeyen bir metin yazıp basın -> Ekranda `"Geçerli bir e-posta yazın."` uyarısı çıkar.
   - Tüm alanları doğru doldurup basın -> `"Teşekkürler, [Ad Soyad], mesajınız alındı."` mesajı çıkar ve form temizlenir.
5. **Duyarlı (Responsive) Görünüm:** Tarayıcı geliştirici araçlarını açıp (F12) pencere genişliğini 600px altına çekin; menünün dikey dizildiğini, hiçbir yatay kaydırma çubuğunun oluşmadığını gösterin.

### Olası Sözlü Sorular ve Yanıtları:
- **Soru 1: HTML, CSS ve JavaScript'in bu sayfadaki rolleri nelerdir?**
  - **HTML:** Sayfanın iskeletini ve anlamsal (semantik: header, nav, main, section, footer vb.) yapısını oluşturur, içerikleri düzenler.
  - **CSS:** Sayfanın görsel tasarımını, renklerini, yazı tiplerini, Flexbox/Grid yerleşimlerini ve mobil uyumlu duyarlı (responsive) kurallarını belirler.
  - **JavaScript:** Sayfaya etkileşim kazandırır; form verilerini denetler, sayfa yenilenmeden uyarıları ekrana yazar ve tek tıklamayla koyu tema geçişini sağlar.
- **Soru 2: Kodunuzdaki bir satır veya kuralın işlevi nedir?**
  - Tüm CSS kural bloklarının ve JavaScript kodlarının her satırında Türkçe açıklamalar mevcuttur; sunum anında gösterilecek satır bu açıklamalar yardımıyla kolayca açıklanabilir.
