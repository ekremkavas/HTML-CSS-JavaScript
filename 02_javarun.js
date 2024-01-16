//! VAR - LET - CONST

function selamVEr() {
  var selam = "herkese selam "; // Function scope ;REM BELLEKTE COK YER KAPLAR
  console.log(selam);
  if (true) {
    var b = 10;
  }
}

selamVEr();
// let ve const BLOK SCOPE özelliğine sahiptir

//?_______________________________________

// let a = 5;
// let a = 10;
// console.log(a); //hata verdi çünkü let  ideğiştiremezsiniz

// let c = 5; // burda c karar değiştirdim algılar değitirir
// c = 12;
// console.log(c);

// const user= {
//     username:"ekrem"
//     password:"123"  //hata verir user ile değitrdikim kısmı süslü parantesin dışında değitiremem
// }

// user = "cenkeri";

// console.log(uaer);

//! TYPEOF ile veri türünü görüntüleme

//? String

let sayistring = "10";
console.log(sayistring);
console.log(typeof sayistring);

let strigDeğşken = "Yaşınız";
let yas = 23;
console.log(strigDeğşken + yas);

//?Number

let sayi1 = 10;
console.log(sayi1);
console.log(typeof sayi1);

//?Boolean
// True ve False çin kullanılır
console.log(5 < 2);
