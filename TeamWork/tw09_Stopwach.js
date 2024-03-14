//* startStop(): Kronometreyi başlatma veya durdurma işlevini gerçekleştirir.

// *reset(): Kronometreyi sıfırlama işlevini gerçekleştirir.

//* updateTimer(): Kronometrenin sürekli olarak güncellenmesi için zamanı günceller.

//* updateDisplay(): Kronometrenin gösterildiği alanı günceller.

//* pad() ve padMilliseconds(): Sayıları iki veya üç basamaklı hale getirir


let kronometre;
let calisiyor = false;
let baslangicZamani;
let gecenSure = 0;

function basDurdur() {
  if (calisiyor) {
    clearInterval(kronometre);
    calisiyor = false;
  } else {
    baslangicZamani = Date.now() - gecenSure;
    kronometre = setInterval(zamaniGuncelle, 10); // Milisaniye hassasiyeti için 10 milisaniye
    calisiyor = true;
  }
}

function sifirla() {
  clearInterval(kronometre);
  calisiyor = false;
  gecenSure = 0;
  ekranGuncelle();
}

function zamaniGuncelle() {
  gecenSure = Date.now() - baslangicZamani;
  ekranGuncelle();
}

function ekranGuncelle() {
  const toplamMilisaniye = gecenSure;
  const milisaniye = toplamMilisaniye % 1000;
  const toplamSaniye = Math.floor(toplamMilisaniye / 1000);
  const saniye = toplamSaniye % 60;
  const toplamDakika = Math.floor(toplamSaniye / 60);
  const dakika = toplamDakika % 60;
  const saat = Math.floor(toplamDakika / 60);

  const formatliZaman = `${duzelt(saat)}:${duzelt(dakika)}:${duzelt(saniye)}.${duzeltMilisaniye(milisaniye)}`;
  document.getElementById("ekran").textContent = formatliZaman;
}

function duzelt(sayi) {
  return sayi < 10 ? "0" + sayi : sayi;
}

function duzeltMilisaniye(sayi) {
  return sayi < 10 ? "00" + sayi : sayi < 100 ? "0" + sayi : sayi;
}


// Değişken Tanımları:

// kronometre: setInterval fonksiyonu tarafından döndürülen zamanlayıcıyı (timer) depolamak için kullanılır.
// calisiyor: Kronometrenin çalışıp çalışmadığını izlemek için bir bayrak değişkenidir. true ise kronometre çalışıyor, false ise duruyor.
// baslangicZamani: Kronometrenin başlatıldığı zamanı (milisaniye cinsinden) saklamak için kullanılır.
// gecenSure: Kronometrenin başlatıldığı zamandan itibaren geçen süreyi (milisaniye cinsinden) tutar.
// basDurdur() Fonksiyonu:

// Bu fonksiyon, başlat/durdur düğmesine tıklanıldığında çalışır.
// calisiyor değişkenine bağlı olarak, kronometreyi başlatır veya durdurur. Kronometre başlatıldığında, baslangicZamani değişkenini şu anki zamandan (Date.now()) geçen süreyi çıkartarak belirler ve setInterval fonksiyonuyla zamaniGuncelle fonksiyonunu her 10 milisaniyede bir çağırarak kronometreyi günceller.
// sifirla() Fonksiyonu:

// Bu fonksiyon, sıfırla düğmesine tıklandığında çalışır.
// clearInterval fonksiyonu kullanılarak kronometrenin çalışması durdurulur.
// calisiyor değişkeni false olarak ayarlanır ve gecenSure değişkeni sıfırlanır.
// ekranGuncelle fonksiyonu çağrılarak ekran sıfırlanır.
// zamaniGuncelle() Fonksiyonu:

// Bu fonksiyon, kronometrenin çalışması sırasında setInterval fonksiyonu tarafından her 10 milisaniyede bir çağrılır.
// baslangicZamani'ndan şu anki zamana kadar geçen süreyi hesaplar ve gecenSure değişkenine kaydeder.
// Ardından ekranGuncelle fonksiyonunu çağırarak kronometrenin ekrandaki gösterimini günceller.
// ekranGuncelle() Fonksiyonu:

// Bu fonksiyon, kronometrenin ekrandaki gösterimini günceller.
// gecenSure değişkenini kullanarak geçen süreyi saat, dakika, saniye ve milisaniye cinsine ayırır.
// Bu zaman birleştirilerek formatlı bir şekilde gösterilir ve HTML içeriğine yazılır.
// duzelt() ve duzeltMilisaniye() Fonksiyonları:

// Bu iki fonksiyon, sayıları istenen formata dönüştürmek için kullanılır. Örneğin, 1 basamaklı sayıları 2 basamaklı hale getirir. Bu fonksiyonlar, saat, dakika, saniye ve milisaniyeleri düzgün bir şekilde göstermek için kullanılır.