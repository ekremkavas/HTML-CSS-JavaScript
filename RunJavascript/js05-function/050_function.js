
//! 1-Function Decleration 

// Function Declaration (Fonksiyon Deklarasyonu):ile Tanımlama'da fomksiyonun yerinin önemi yok nereye yazarsanız orda çağırır

function myFunction() {
    // Fonksiyonun işlemleri burada tanımlanır
  }
  

function Cenkeri(){
    console.log("Ben 5 yaşındayım");
}
//invoke (call)
Cenkeri(); 


function greet(name) {
    console.log("Merhaba, " + name + "!");
  }
  
  // Fonksiyonu çağırma
  greet("Ahmet"); // Çıktı: Merhaba, Ahmet!

  
//! 2-Function Expression (Fonksiyon İfadesi): 

var myFunction = function() {
    // Fonksiyonun işlemleri burada tanımlanır
  };
  

var greet = function(name) {
    console.log("Merhaba, " + name + "!");
  };
  
  // Fonksiyonu çağırma
  greet("Ayşe"); // Çıktı: Merhaba, Ayşe!
  

function selamVer(mesaj){
    console.log(`Merhaba ${mesaj}`);
}
selamVer("Esat")
selamVer("Ekrem")

function topla(s1, s2){
    console.log("toplam :", s1 + s2);
}

topla(7,5)

//!3-Arrow Function (Ok Fonksiyonu):

var myFunction = () => {
    // Fonksiyonun işlemleri burada tanımlanır
  };
  

var greet = (name) => {
    console.log("Merhaba, " + name + "!");
  };
  
  // Fonksiyonu çağırma
  greet("Mehmet"); // Çıktı: Merhaba, Mehmet!

//!4- Function Constructor (Fonksiyon Oluşturucu):

var myFunction = new Function('a', 'b', 'return a + b');


var greet = new Function('name', 'console.log("Merhaba, " + name + "!");');

// Fonksiyonu çağırma
greet("Fatma"); // Çıktı: Merhaba, Fatma!

  