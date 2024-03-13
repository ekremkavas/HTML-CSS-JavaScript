//* ============================================
//*                 (OBJECTS)
//* =============================================

//!JavaScript'te bir nesne (object), birden fazla değeri tek bir değişken altında saklamak için kullanılan bir veri yapısıdır. Nesneler, anahtar-değer çiftlerini içerir ve bu çiftlerin her birine özellik (property) denir. Anahtarlar bir string veya sembol olabilirken, değerler herhangi bir veri türünden olabilir.
//?Nesneler, süslü parantezler {} içinde tanımlanır ve özellikler virgülle ayrılarak belirtilir.
//!---------------------------------------
let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
// Yukarıdaki örnekte, person adında bir nesne tanımlanmıştır. Bu nesne üç özelliğe (name, age, city) sahiptir ve her özellik bir anahtar-değer çifti şeklinde belirtilmiştir. name özelliğinin değeri "Alice", age özelliğinin değeri 30 ve city özelliğinin değeri "New York" olarak belirlenmiştir.
console.log(person.name); // "Alice"
console.log(person["age"]); // 30

//!---------------------------------------
// key(property)-value 
// property-value aynı şey javascripte böyle tanımlanıyor
//! Objeler süslü parantez ile gösterilir {}
//! Arraylar köşeli parantez ile gösterilir []

/* 
array.forEach(element => { 
  foreach void Function return YOK , döndürmek istiyorsan map(array döndürür) kullan ,seçme yapacaksan filter kullan(indirgenmiş kopya)
  
}); */

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("*** Objects ***")


//! 3 farkli yontem ile Object olusturulabilir

//* ------------------------------------
//* 1- Object literal(En cok tercih edilen yontem)
//* ----------------------------------

const kisi = {
  isim: "Ahmet", //ilk yazılan key :'den sonrası value
  soyİsim: "Yılmaz",
  kimlikNo: "123123341112",
  maas: 70000,
  ehliyet: true,
  diller: ["english", "arabic", "urartuca"],
  notlar: { mat101: "AA", tur101: "BB", ece101: "AA" },
  dogumTarihi: 1990,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi
  },
}
console.log(kisi)
console.log(kisi.diller); 
console.log(Object.values(kisi));

//! this keywordu iiçerisinde bulundğumuz objeyi temsil-refere eder.
//! Global alanda yazılan this ise haliyle global objeyi refere eder.
//! window tarayacının herşeyini barından temel bir objedir.

console.log(this) //? global alanda (Window nesnesi gösterir.)


//*  ---------- OKUMA  ----------------

//? A-) . notasyonu ile erişim

console.log(kisi.isim)
console.log(kisi.maas) //.maaş ile key e eriştim
console.log(kisi.diller[2]) //diller keyin indeksi 2 olan valuesune eriştim
console.log(kisi.notlar.ece101) //? AA

console.log(kisi.yasHesapla())
// console.log(new Date().getDay())

// Nokta notasyonu ile square bracet farkı şu [bunun içine bir değişken verebiliyoruz(stataement)] kodla dinamik erişebiliyoruz

//? B-) Square bracket ile erişim

console.log(kisi["kimlikNo"])
console.log(kisi.kimlikNo)
console.log(kisi["notlar"]["tur101"]) //? AA

// const secici = prompt(
//   "kisinin hangi bilgisini ogrenmek istersiniz?isim,soyİsim,kimlikNo,maas,dogum, yasHesapla ??"
// )

// console.log(kisi[secici]) //! square bracket yönteminde key bir degisken olabilir.
// // console.log(kisi.kimlikNo)
// // console.log(kisi.dogum)
// console.log(kisi.secici) //! . notasyonunda key bir degisken olamaz.

//*  ---------- YAZMA  ----------------

console.log(kisi)
kisi.dogumTarihi = 2000
kisi.diller = "Türkçe-İnglizce"
kisi.kilo = 80

kisi["ehliyet"] = false


//* ============================================
//*               NESTED OBJECTS
//* ============================================

//! objeler itere edilebilr yapılar değildir.(klasik mantıkla bir döngüyle objeyi dolaşamazsınız)

const kisiler = {
  ahmet: {
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",
    maas: 70000,
  },
  mehmet: {
    soyİsim: "Ozturk",
    kimlikNo: "1696571112",
    maas: 50000,
  },
}

console.log(kisiler.ahmet.kimlikNo)
console.log(kisiler["mehmet"]["maas"])

const isim = "ahmet"
console.log(kisiler[isim])

//***********************************
//* JSON => Javascript Object Notation
//***************************************
//! DİZİ içerisindeki OBJELERE JSON diyoruz
//? JSON JavaScript Object Notation" veya kısaltmasıyla JSON, veri saklamak ve değiş tokuş etmek için kullanılan bir veri biçimidir. JSON, JavaScript diline özgü bir veri biçimi olmasına rağmen, dil bağımsızdır ve birçok programlama dili tarafından desteklenir.

// JSON Yapısı:
//JSON, anahtar-değer çiftlerinden oluşan bir veri yapısına dayanır ve iki ana veri türünü destekler: nesneler (objects) ve diziler (arrays). JSON'da veri, bir anahtar (key) ve ona karşılık gelen bir değer (value) arasında bir çift oluşturularak temsil edilir. Bu anahtar-değer çiftleri virgülle ayrılır ve nesneler süslü parantezler {} içine, diziler ise köşeli parantezler [] içine alınır.
const people = [
  {
    isim: "Ahmet",
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",
    maas: 70000,
    job: "developer",
  },
  {
    isim: "Mehmet",
    soyİsim: "Ozturk",
    kimlikNo: "1696571112",
    maas: 50000,
    job: "developer",
  },
  {
    isim: "Canan",
    soyİsim: "Can",
    kimlikNo: "33344571112",
    maas: 90000,
    job: "tester",
  },
]

// const key = prompt(
//   "Kisilerini hangi bilgisini ogrenmek istersiniz: isim, soyİsim,kimlikNo, maas?"
// )
// people.forEach((p) => console.log(p.isim))
// people.forEach((p) => console.log(p.maas))
// people.forEach((p) => console.log(p["kimlikNo"]))
// people.forEach((p) => console.log(p[key]))

//? Maasların toplami

const toplamMaas = people.reduce((t, p) => t + p.maas, 0)
console.log(toplamMaas)

//? job, developer olanların isim+soyisim yazdirinz

const devs = people.filter((p) => p.job === "developer")
console.log(devs)

const devNames = people
  .filter((p) => p.job === "developer")
  .map((p) => `${p.isim} ${p.soyİsim}`)
console.log(devNames)
