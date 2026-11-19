// HTML belgesindeki tema değiştirme butonunu id üzerinden seçer
const temaDugmesi = document.getElementById("tema-dugmesi");

// HTML belgesindeki iletişim formunu id üzerinden seçer
const iletisimFormu = document.getElementById("iletisim-formu");

// Ad soyad giriş alanını id üzerinden seçer
const adSoyadAlani = document.getElementById("ad-soyad");

// E-posta giriş alanını id üzerinden seçer
const epostaAlani = document.getElementById("eposta");

// Mesaj giriş metin alanını id üzerinden seçer
const mesajAlani = document.getElementById("mesaj");

// Kullanıcıya form doğrulama sonuçlarını gösterecek paragraf öğesini seçer
const bildirimAlani = document.getElementById("form-bildirim");

// Tema değiştirme butonuna tıklama (click) olay dinleyicisi tanımlar
temaDugmesi.addEventListener("click", function () {
  // body etiketine "koyu-tema" sınıfını varsa kaldırır, yoksa ekler
  document.body.classList.toggle("koyu-tema");

  // Gövdede koyu tema sınıfının aktif olup olmadığını kontrol eder
  const koyuTemaAktif = document.body.classList.contains("koyu-tema");

  // Koyu tema aktifse butonda "Açık Tema", değilse "Koyu Tema" yazar
  temaDugmesi.textContent = koyuTemaAktif ? "Açık Tema" : "Koyu Tema";
});

// İletişim formuna gönderme (submit) olay dinleyicisi ekler
iletisimFormu.addEventListener("submit", function (olay) {
  // Formun varsayılan sayfa yenileme veya sunucuya gitme davranışını engeller
  olay.preventDefault();

  // Ad soyad alanındaki metni alır ve başındaki/sonundaki boşlukları temizler
  const adSoyad = adSoyadAlani.value.trim();

  // E-posta alanındaki metni alır ve başındaki/sonundaki boşlukları temizler
  const eposta = epostaAlani.value.trim();

  // Mesaj alanındaki metni alır ve başındaki/sonundaki boşlukları temizler
  const mesaj = mesajAlani.value.trim();

  // Herhangi bir alanın boş bırakılıp bırakılmadığını denetler
  if (!adSoyad || !eposta || !mesaj) {
    // Bildirim paragrafına hata kutusu stil sınıflarını atar
    bildirimAlani.className = "form-bildirim bildirim-hata";

    // Bildirim paragrafına boş alan uyarısı metnini yazar
    bildirimAlani.textContent = "Lütfen tüm alanları eksiksiz doldurunuz.";

    // Doğrulama başarısız olduğu için işlevi burada sonlandırır
    return;
  }

  // E-posta adresinin içinde '@' işareti bulunup bulunmadığını kontrol eder
  if (!eposta.includes("@")) {
    // Bildirim alanına hata stili uygular
    bildirimAlani.className = "form-bildirim bildirim-hata";

    // Şartnamede belirtilen geçerli e-posta uyarısını ekrana yazar
    bildirimAlani.textContent = "Geçerli bir e-posta yazın.";

    // E-posta geçersiz olduğu için işlevi burada sonlandırır
    return;
  }

  // Tüm kontroller sağlandığında bildirim alanına başarı stili uygular
  bildirimAlani.className = "form-bildirim bildirim-basari";

  // Şartnameye uygun şekilde teşekkür ve ad soyad bilgisini içeren mesajı ekrana yazar
  bildirimAlani.textContent = "Teşekkürler, " + adSoyad + ", mesajınız alındı.";

  // Form içindeki giriş alanlarını temizler ve sıfırlar
  iletisimFormu.reset();
});
