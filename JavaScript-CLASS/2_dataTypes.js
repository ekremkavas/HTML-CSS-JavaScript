/*

tırnak işareti içerisindeki değerler string ifadelerdir '' ""  ``
{}  işareti içerisindeki değerler  obje
[] işareti içerisindeki değerler arayy

string içerisinde yazılan sayılar string kabul edili

*/
// yüksek seviyeli dil olması
// nesne yönelimli
// ve dinamik
// çok fazla yerde kullanılır

//! DATA TYPES
//? typeof veri türünü gösterir

x = 15;
console.log(typeof x);

//!                      PRIMITIVE DATA TYPES                                 */

// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür

sayi = 23;
console.log(sayi * 5);

const pi = Math.PI;
console.log(pi);
sonuc = sayi + 6;
console.log(sonuc);

//? ondalıklı kısmı düzenleme
// round

let yuvarlanmisSonuc = Math.round(sonuc);

console.log("sonuc :", sonuc);

let truncSonuc = Math.trunc(sonuc);
console.log(truncSonuc);

//virülgen sonra gelen ondalıklı kısımda kaç hane göstermesini istiyorsanız toFixed (sayı)

let fixedSonuc = sonuc.toFixed(2);
console.log(fixedSonuc);

//!RANDOM METODU

//rastegele sayı üretmek için kullanılır 0-1 arasında bir sayı üretir

console.log(Math.random() * 10);

//! STRİNG DATA TYPE
ad = "george";
let str1 = "merhaba dünya";
let str2 = "hello world1";
let str3 = `hello world1`;
let str4 = `hello world1 ${ad}`;
console.log(str4);
console.log(typeof str4);
console.log(str3);

let kimlik = 12312323332;
let adSoyad = "Cenkeri Esat";
console.log(`Bizim evin tatlısı ${adSoyad}`);

//! BOOLEAN

let deger = undefined;
console.log(Boolean(deger));

//!NULL
let personel = null;
console.log(personel);

//! NaN - Not a number

//NON PRiMİTİVE
//Array, object ,function
