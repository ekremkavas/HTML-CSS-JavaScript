//! GERİYE DEĞER DÖNDÜREN(RETURN) FONKISYON


//? 1-return bır değeri metodun dısırısına cıkarmak ve tasımak ıcın kullanılır
//? 2-return bır metodu bıtıren anahtar kelımedır sonra gelen kodu yazdırmaz
function usAl(rakam1, rakam2) {
  let sonuc = rakam1 ** rakam2;
  console.log(sonuc); // clh metodun ıcınde kaldı
  // return yazmazsak sonuc u cagırsan bıle fonkısyon gelmez
}

usAl(5, 2);

function kareAl(değer) {
  let sonuc = değer * değer;
  return sonuc; // return  döndürdüğü değer metodun çağırdığı yere gider
  // ek bilgi return anahtarkelımesınden sonra yazmıs oldugunuz hıcbır kod calısmaz
}

console.log(kareAl(6));


