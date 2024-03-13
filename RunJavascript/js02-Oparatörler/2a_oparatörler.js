/* -------------------------------------------------------------------------- */
/*                                  OPERATORS                                 */
/* -------------------------------------------------------------------------- */

//! ARİTMATİK OPERATÖRLER

// Math.
//?yazarak matematik operatörlerine ulaşabilirsin logaritma sinüs vs

/* ------------->  = atama operatörüdür */

let not1 = 60;
let not2 = 70;
console.log(not1 + not2);

let sonuc = (not1 + not2) / 2;
console.log(sonuc);

//% modülüs kalan verir 7 bölü 3 mesela kalan 1 sonuc

let artiarti = 10; // a++ ay'ı 1 artır demek

console.log(artiarti);

// 2**7    2 üzeri 7 demek


/* == eşittir demek mesela 5 == 5 sonuc true gelir , burda parantez içinde de olsa string içindekideğere bakar
console.log(5 == "5") sonuc true gelir

Hem değerlere hem tiplere baksın diyorsanız === kullanmanız gerek console.log(5 ==0 "5") sonuc false gelir

sayi = sayi + 2;  yada sayi +=2 ; sayima 2 ekle demek

sayi *=3 ; demek sayıyı 3 ile çarp demek

sayi %=5 ; sayının 5 e göre modunu al sonucu ver demek

sayi **=4 ; sayıın 4 uncu kuvvetını al demek */

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                            ASSIGNMENT OPERATORS                            */
/* -------------------------------------------------------------------------- */

let t=10
let y=5

console.log(t)
console.log(y)

console.log(t=t+y)
console.log(t+=y)
console.log(t-=y)
console.log(t*=y)
console.log(t/=y)
console.log(t**=y)
console.log(t%=y)

let k=18
let h=3
console.log(h +=k)

let sayi=45.986
console.log(Math.trunc(sayi))
console.log(sayi)

/* -------------------------------------------------------------------------- */
//!  JavaScript'te, bir ifade veya değişken değeri bir koşul içinde değerlendirildiğinde, bazı değerler "falsy" olarak kabul edilir. Bir değerin "falsy" olması, bu değerin false olarak kabul edilmesi anlamına gelir. JavaScript'te, aşağıdaki değerler "falsy" olarak kabul edilir:

//?  false: Boolean türünde false.
//? 0: Number türünde sıfır.
//? -0: Number türünde negatif sıfır.
//? 0n: BigInt türünde sıfır.
//? "": Boş string.
//? null: Null değeri.
//? undefined: Tanımsız değer.
//? NaN: "Not-a-Number" değeri, sayısal olmayan bir işlem sonucu.
//? Bunlar dışında, yukarıdaki değerler dışındaki tüm diğer değerler "truthy" olarak kabul edilir ve bir koşul içinde true olarak değerlendirilir.

//----------------------------------- */
//      COMPARISON OPERATORS            */
/* --
----------------------------------------- */

//! Karşılaştırma operatörleri bize Boolean sonuç döndürür.

let c=2
let d="2"

console.log(typeof c)
console.log(typeof d)
console.log(c==d) //içindeki değer eşit mi türü önemli değil

console.log(c===d) //hem ifade hemde ifade türü eşit olacak

console.log(c!=d) // eşit değil mi - false 2  2 ye eşit
console.log(c!==d) // eşit değil mi - true biri string biri number olduğu için eşit değil
console.log(3>=2)

let isim = "ekrem"
console.log(Number("ekrem")); // NaN sonuc
//------------------------------------- */
/*              LOGICAL OPERATORS        */
/* -----------------------------------------------

//! AND  - && ( ve anlamındadır)
// ANd mükemmeliyetçidir
// Herşey true olmalı  yoksa true değer dönmez

console.log(Boolean("Merhaba") )
console.log(Boolean(0))
console.log(Boolean(2))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean([]))

console.clear()
//VE , AND ; &&
console.log([] && 0 && 2) // arada false varsa ilk gördüğü false alır
console.log([] && "M" && 5) // true true gittiğinde sonuncu true yazar

console.log(true && "ekrem");
console.log(false && "ekrem");
console.log(Boolean(false && "ekrem"));
console.log(true && "ekrem" && 17);
console.log(true && 82 && "ahmet" && "ekrem" && 17);
console.log(Boolean(false && 82 && "ahmet" && "ekrem" && 17));
// console.clear()
//! OR - ||
// Herşey false olsa bile bir tane true, true döndermeye yeter
// Hepsi false ise en son false değerini verir

console.log(0 || null || 2 ||  undefined )

console.log(null);
console.log(!null)

console.log(true || "ekrem");
console.log(false || "ekrem");
console.log(Boolean(false || "ekrem"));
console.log(false || "ekrem" || 17);
console.log(false || 82 || "ahmet" || "ekrem" || 17);
console.log(Boolean(false || 82 || "ahmet" || "ekrem" || 17));








