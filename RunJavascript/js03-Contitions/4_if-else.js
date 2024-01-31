//KOŞUL YAPILARI

// let not = 65;
// if (not > 50) {
//   console.log("if bloğunun içi true çalıştı");
// } else {
//   console.log("if bloğu false else bloğu çalıştı");
// }

// let not2 = 35;
// if (not2 > 50) {
//   console.log("if bloğunun içi false çalışmadı");
// } else {
//   console.log("if bloğu false else bloğu çalıştı");
// }

// *************TEK-ÇİFT SORGULAMA**************

// sayi = Number(prompt("bir sayı giriniz"));
// if (sayi == 0 || sayi < 0){
//   console.log("Tekrar deneyin 0 veya pozitif bir sayı giriniz", sayi);

//   sayi = Number(prompt(" Tekrar sıfır harici bir sayı giriniz veya pozitif bir sayı giriniz"));

//   if (sayi % 2 == 0){
//     console.log("çift sayı girdiniz");
//   }else{
//     console.log("tek sayı girdiniz", sayi);
//   }
// }else if (sayi % 2 == 0) {
//   console.log("çift sayı girdiniz");
// }else {
//   console.log("tek sayı girdiniz", sayi);
// }

// *************1-İLA 7 ARASINDA BİR SAYI**********************

// sayi2 = Number(prompt("1-7 arasında 1 sayı giriniz"));
// if (sayi2 <= 7 && sayi2 >= 1) {
//   console.log("istenilen sayiyi girdiniz :", sayi2);
// } else if (sayi2 > 7 || sayi2 < 1) {
//   alert("istenilen sayı değildir yeniden giriniz");
//   sayi2 = Number(prompt("1-7 arasında bir sayı giriniz"));
//   sayi2 = sayi2 <= 7 && sayi2 >= 1  //ternary kullandım
//       ? console.log("istenilen sayıyı girdiniz")
//       : console.log("yanlış sayıyı girdiniz");
// }

// ********************************************************
//if else pratik 2
// gun = Number(prompt("1-7 arasında bir sayı giriniz"));
// if(gun <= 7 && gun >= 1) {
// switch (gun) {
//   case 1:
//     console.log("Pazartesi");
//     break;
//   case 2:
//     console.log("Salı");
//     break;
//   case 3:
//     console.log("Çarşamba");
//     break;3
//   case 4:
//     console.log("Perşembe");
//     break;
//   case 5:
//     console.log("Cuma");
//     break;
//   case 6:
//     console.log("Cumartesi");
//     break;
//   case 7:
//     console.log("Pazar");
//     break;
//   default:
//     console.log("Geçersiz gün numarası!");
// }
// }else if (gun > 7 || gun < 1) {
//   alert("istenilen sayı değildir yeniden giriniz");
// }

// *************EHLİYET SORGULAMA******************************

// //Pratik-3
// let yas = Number(prompt("Lütfen yaşınızı giriniz"))
// let ehliyet = prompt("Ehliyet durumunuzu mevcut ise '+' yok ise '-'şeklinde belirtiniz")
// if(yas >= 18 && ehliyet == "+"){
//   console.log("Araç kullanabilir");
// }else{
//   console.log("Araç kullanamaz");
// }

// *****************KULLANICIDAN ID-PASWORLD ISTEME***********

// //Pratik 4
// let ID = prompt("Lütfen kullanıcı adınızı giriniz:");
// let password = prompt("Lütfen şifrenizi giriniz:");

// //Sistemde kayıtlı id ve password bu olsun

// let kayitli_ID = "Clarusway"
// let kayitli_password = "fullstack16"

// if(ID == kayitli_ID && password == kayitli_password){
//   console.log("Clarusway kariyer yolculuğuna hoş geldiniz");
// }else if(ID == kayitli_ID){
//   console.log("şifrenizi kontrol ediniz");
// }else if(password == kayitli_password){
//   console.log("ID adresiniz hatalıdır");
// }else{
//   console.log("Tekrar deneyiniz");
// }

// *************4 İŞLEM*******************

// //Pratik-5
// let değer1 = Number(prompt("Lütfen bir sayı giriniz"));
// let değer2 = Number(prompt("Lütfen bir sayı giriniz"));
// let islem = prompt("Lütfen yapmak istediğiniz : '+' , '-' , ' '*', '/' işlemi seçiniz ");

// if (true) {
//   switch (islem) {
//     case "+":
//       console.log(değer1 + değer2);
//       break;
//     case "-":
//       console.log(değer1 - değer2);
//       break;
//     case "*":
//       console.log(değer1 * değer2);
//       break;
//     case "/":
//       console.log(değer1 / değer2);
//       break;
//     default:
//       console.log("Geçerli değerleri giriniz");
//   }
// }else{
//   alert("istenilen değerleri giriniz")
// }

// ***************DERS NOTU**************

// // Pratik-6

// let dersnotu = Number(prompt("Ders notunuzu giriniz"))
// if( dersnotu >= 0 && dersnotu <= 20){
//   console.log("Aldığınız not F ");
// }else if( dersnotu >= 21 && dersnotu <= 40){
//   console.log("Aldığınız not D ");
// }else if( dersnotu >= 41 && dersnotu <= 60){
//   console.log("Aldığınız not C ");
// }else if( dersnotu >= 61 && dersnotu <= 80){
//   console.log("Aldığınız not B ");
// }else if( dersnotu >= 81 && dersnotu <= 100){
//   console.log("Aldığınız not A ");
// }else if( dersnotu < 0 || dersnotu > 100){
//   console.log("0-100 arasında değer giriniz");
// }else{
//   alert("Tekrar istenilen değerleri girerek deneyiniz")
// }



