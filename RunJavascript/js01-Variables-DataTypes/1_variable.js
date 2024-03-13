x = 15;
ad = "helen";
yaş = 40;
console.log(ad);

// javascript değişkenler

//  const -- sabit değiştirilmeyenlet değiştirilebilir
// var değiştirilir fakat çok kullanılmaz

// let durum = "232"
//? let-keyword   durum-variable   232-değişken
//! CONST
//?CONSTANT değişken olmayan sebit
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

//JS ilk başlarından berı kullanılan barıable anımlama yöntemıydı, Her yerden ulaşılabılıyor(GLOBAL SCOPE) hafızayı şişirebilir

//**VARRİBALE İSİM TANIMLAMA KURALLARI

// const 1asas = "rakam ile başlamaz"
// const 1a½½##$sas = "sembol kullanma"
// const for = "özel anlamlı ifadeler kullanılmaz"
// const 1aSas = "Büyük küçük harf duyralılığı var"
// const 1aS-as = "Normal - kullanılmaz"
