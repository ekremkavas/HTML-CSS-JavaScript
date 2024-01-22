x = 15;
ad = "helen";
yaş = 40;
console.log(ad);

// javascript değişkenler

//  const -- sabit değiştirilmeyenlet değiştirilebilir
// var değiştirilir fakat çok kullanılmaz

//! CONST
// const tckimlik = 443434343444;
// tckimlik = 42244434441;

// değiştiremezsiniz hatası aldık_variable.js:12 Uncaught TypeError: Assignment to constant variable.

//! LET

let toplam = 0;

x = 60;
y = 70;
toplam = x + y;
console.log(toplam);

 //+ nın concatinate ve toplama görevi vardır. diğer matematik ifadelerinin tek görevi vardır
//? GLOBAL ALAN

// Program içinde her ortamdan ulaşılabilen bir alandır

const sayi = 5;

//? LOCAL ALAN

// Bir blok içindir. {} ile ifade edilen bölümler blokalrdır ,if while bloğu gibi
{
  console.log(sayi);
}

//!VAR

// Her yerden ulaşılabılıyor
