// 20 den 1 kadar inelim bu sayıların toplamını bulalım

// let toplam = 0 ;
// for(let i = 20; i >= 1; i--){
//     toplam = toplam + i
//     console.log(i);

// }
// console.log("Toplam", toplam);

// ***********ÇARPIM TABLOSU*****************

// for(let i = 1; i <= 10; i++){
//     for(let c =1; c <= 10; c++){
//         console.log(i+ "x" +c + "=" + (i*c));

//     }
// }

// **************************

// // Çarpım tablosunun örnek2
// const tabloBoyutu = 10;

// // Çarpım tablosunu oluşturma
// for (let i = 1; i <= tabloBoyutu; i++) {
//   let satir = "";
//   for (let j = 1; j <= tabloBoyutu; j++) {
//     satir += (i * j) + "\t"; // \t ile hücreler arası boşluk bırakılıyor
//   }
//   console.log(satir);
// }

// *****************************

//Pratik 8

//Sistemde kayıtlı id ve password bu olsun

let kayitli_ID = "Clarusway";
let kayitli_password = "fullstack16";
let girisHakki = 3;

while (girisHakki > 0) {
  let ID = prompt("Lütfen kullanıcı adınızı giriniz:");
  let password = prompt("Lütfen şifrenizi giriniz:");
  if(ID == kayitli_ID && password == kayitli_password) {
    console.log("Clarusway kariyer yolculuğuna hoş geldiniz")
    break;
  }else {
    girisHakki--;
    if(girisHakki > 0){
      console.log(`Kullanıcı adı veya şifre yanlış. ${girisHakki} giriş hakkınız kaldı.`);
    }else {
    console.log("Giriş hakkınız tükendi.");
    }
  }
}
