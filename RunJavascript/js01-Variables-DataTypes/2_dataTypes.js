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

//!NULL


let bu  ; // atama olmadığı ıcın tanımlanamayan
console.log(bu,bu+5,`Bu iş ${bu}`); //sonuc = NaN       bu+5 tanımlanmayan ıfade ıle 5 ı topladıgında NaN bu number değil çıkar

let personel = null; // bu değerdir başka zaman atama yapabilirsin boş değer gibi  düşün
console.log(personel);
console.log(personel + 5); // sonuc 5

//! NaN - Not a number


//! DATA TYPES
//? typeof veri türünü gösterir

x = 15;
console.log(typeof x);

//!       PRIMITIVE DATA TYPES                                 */

// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür



sayi = 23;
console.log(sayi * 5);
console.log("ekrem" / sayi); // NaN Not a number sayı değil-Hata değil Nan
console.log("dersi" + sayi + "kere tekrar ettim");
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



//NON PRiMİTİVE
//Array, object ,function

//?INCREMENT ve DECREMENT

let a = 5;
let b = a++;
let c = b++;
console.log(c);
console.log(b);
console.log(a);

//?ASSIGMENT OPERATÖRS

//!MANTIKSAL OPARATÖRLER

//? && : ve
//? || : veya
//? ! : değil

// ve de  && hepsi true olmak zorunda tek false false verdirir

// veya || da ikisinde olmasının zorunluluğu yok, içinden birinin ture olması sonucu true verdirir

// başındaki ünlem zıttını almak için kullanılır

console.log(true || "ekrem");
console.log(false || "ekrem");
console.log("5" + 3);
console.log(typeof "5" + 3);
console.log(true || false); // veya
console.log(15 % 6);
console.log(4 < 5 && false); // ve
console.log(Math.round(15.67)); // (En yakın ondalık sayıya yuvarlar)
console.log("55" < 56);
console.log(true && false);
console.log(!false);
console.log("55" < 56 && 67 === "67");
console.log(253 % 11 && !false);
console.log(("55" < 56 && 67 === "67") || (253 % 11 && !false));
console.log(false || 0);

let para = 3500;
console.log(para > 3000 && false);
console.log((para > 3000 && false) || "ekrem");

let yas = 23;
console.log(yas != 18);
