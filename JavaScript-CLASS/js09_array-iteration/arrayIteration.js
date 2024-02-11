//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

const sayilar = [4, 5, 1, 4, 6, 9]
sayilar.forEach((x) => console.log(x))
console.log("************")

//? alternatif
sayilar.forEach(yazdir)
function yazdir(x) {
  console.log(x)
}

//? ORNEK: 2 parametreli forEach
sayilar.forEach((x, i) => console.log("Deger:", x, "sıra:", i))

//? Ornek: toplam
let sum = 0
sayilar.forEach((sayi) => (sum += sayi))
console.log("SUM:", sum)

//? Ornek: 3-parametreli forEach
const notlar = [40, 50, 10, 40, 60, 90]

//! Süslü parantezli olarak da yazılaabilir
// notlar.forEach((not, indis, array) => {
//   array[indis] = not * 1.1
// })

notlar.forEach((not, indis, array) => (array[indis] = not * 1.1))
console.log(notlar)

//? forEach return yapmaz (void function)
console.log(notlar.forEach((x) => x * x)) //? undefined
const deneme = notlar.forEach((x) => x * x)
console.log(deneme) //? undefined

//* =======================================
//*            MAP METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

const copiedNames = names.map((n) => n.toLowerCase())
console.log(copiedNames, names)

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 32.97
const dolar = 30.5

const iPhoneTL = [90000, 75000, 60000, 40000, 30000]

const iPhoneDolar = iPhoneTL.map((tl) => Math.trunc(tl / dolar))
const iPhoneEuro = iPhoneTL.map((tl) => Math.trunc(tl / euro))

console.log(iPhoneDolar)
console.log(iPhoneEuro)

//* =======================================
//*            FILTER METHOD
//* =======================================
//?-------------- ÖRNEK -------------------

const maaslar = [90000, 75000, 60000, 40000, 30000]

//? maasi 50000 den büyük olanlar
const ortamaMaaslar = maaslar.filter((m) => m >= 50000)
console.log(ortamaMaaslar)

//? maasi 50000 den büyük olanlar
const düsükMaaslar = maaslar.filter((m) => m >= 30000 && m < 50000)
console.log(düsükMaaslar)

//? ORNEK: maasi 50000'den az olanlar %20 zam yapalım (orjinal diziyi degistirerek)
maaslar.map((m, i, arr) => {
  if (m >= 30000 && m < 50000) {
    arr[i] = m * 1.2
  }
})

console.log(maaslar)

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? ORNEK: maasi 50000'den az olanlar %20 zam yapalım (orjinal diziyi degistirerek)

const salary = [90000, 75000, 60000, 40000, 30000]

const zamliMaaslar = salary.filter((m) => m < 50000).map((m) => m * 1.2)
console.log(zamliMaaslar)

// functional programming (declarative programing)
// imperative programming
