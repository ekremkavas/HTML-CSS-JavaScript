console.log("intro js içindeyiz");
console.error("hata mesajı");
console.warn("uyarı");

//alert-uyarı vermek için

// alert("lütfen adınızı girin");

document.write("javascript intro");

cevap = confirm("çıkmak istediğinize eminmisiniz");

// console.log("F1496-Ekrem");
// document write ile çıktı verme

// document.write("Hello Word <br>");
// document.write("Hello Word");

console.log("Hello Word");
console.log(3.53);
console.log(true);
console.log({ name: "ekrem", surname: "cenkeri" });

// console.clear();

let a = 5;
let b = 10;

console.log("ikii sayının toplamı :", a + b);

// alert ile uyarı verme
// console.log(window);

alert("F5 e basmayınız");

console.log(window);

console.log("Hello Word");
debugger;
// hata ayıklamada kullanılır
console.looog("Hello Word");
console.log("Hello Word");
console.log("Hello Word");

/* SCOPE KAVRAMI

 --->Global scope
 --->Function scope
 --->Block scope

 */
//  --->Global scope 
// Hiçbir sınırı olmayan her yerden erişilebilen skope dur

//  sen bu değişkene her yerden erişebilirşin demek
// tanımladığınız değer süslü parantezin dışında olmalı
var değişkentanımla = 10;
console.log(değişkentanımla);

// --->function scope

// Function scope" veya "fonksiyon kapsamı", bir değişkenin sadece tanımlandığı fonksiyon içinde erişilebilir olduğu kapsam türünü ifade eder. Yani, bir değişkenin kapsamı, tanımlandığı fonksiyonun içindedir ve bu değişken dışındaki diğer yerlerden erişilemez.

/*
--->Block scope
JavaScript'te, block scope veya blok kapsamı, değişkenlerin tanımlandığı ve sadece belirli bir kod bloğu içinde erişilebildiği bir kapsam türüdür. JavaScript'te var, let, ve const anahtar kelimeleri kullanılarak değişkenler tanımlanabilir, ancak bunlar farklı kapsama sahiptir.*/


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
  
  //? Null
  
  // içerisine herhangi bir değer ataması yapmayıp belki sonra yapmaya karar verdiğimiz yer
  let a = null;
  console.log(a);
  
  //? Undefined
  // tanımlanamayan , değer ataması yapılmayan demektir
  
  let d;
  console.log(d);
  
  console.log(typeof d);
  
  //? OBJECT veri tipleri
  
  let rakamlar = [1, 2, 3, 4, 5, 6];
  console.log(rakamlar);
  console.log(typeof rakamlar);
  