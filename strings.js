/****************STRİNGS******************** */
deger = "F-string gibi backtick"
//? String oluşturma yöntemleri
let str1 = 'Bu bir dize';
let str2 = "Bu da bir dize";
let str3 = `Bu da bir dize ${deger}`;
let str4 = new String("new string ")
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log("🎂❤🎁");


/*******ESCAPE KARAKTER(TERS SLAŞH)***** */
console.log("Merhaba\nDünya");   // Yeni satıra geçer
console.log("Bir\tiki\tüç");     // Sekme boşluğu ekler
console.log("Bir\biki");         // Bir karakter geriye gider
console.log('Tek tırnak: \' ');  // Tek tırnak kullanımı
console.log("Cift tırnak: \" "); // Çift tırnak kullanımı
console.log("Ters eğik çizgi: \\ "); // Ters eğik çizgi kullanımı

/* unicode karakterler*/
console.log("\u2615")
console.log("\uD83C\uDF39")
console.log("\uD83D\uDCB2")
console.log("\u00A9")


/* -------------------------------------------------------------------------- */
//!                         STRING PROPERTY AND METHODS                       */
/* -------------------------------------------------------------------------- */

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? lenght
//? prototype