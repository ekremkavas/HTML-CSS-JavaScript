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

// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/

//! expression.js:10 Uncaught ReferenceError: Cannot access 'tekVeyaCift' before initialization
// console.log(tekVeyaCift(7))

const tekVeyaCift = function (num) {
  let sonuc = ""

  if (num % 2 === 0) {
    sonuc = `${num} ciftir`
  } else {
    sonuc = `${num} tektir`
  }
  return sonuc
}

const bilgi = tekVeyaCift(5)
console.log(bilgi)
console.log(tekVeyaCift(4))

//* ORNEK2:
//***********************************************/

function usAlma(taban, us) {
  return taban ** us
}

const usAl = function (taban, us) {
  return taban ** us
}

const us = usAl(3, 4)
console.log(us)
console.log(usAlma(3, 4))

//* ORNEK3:
//***********************************************/
const daireAlanıHesapla = function (r) {
  return Math.PI * r * r
}

const r = Number(prompt("r:"))
const sonuc = daireAlanıHesapla(r)
console.log(` Dairenin alani=${sonuc}`)

daireAlanıHesapla = 5

console.log(daireAlanıHesapla(4))

