//! 1-Function Decleration

// Function Declaration (Fonksiyon Deklarasyonu):ile Tanımlama'da fomksiyonun yerinin önemi yok nereye yazarsanız orda çağırır

function myFunction() {
  // Fonksiyonun işlemleri burada tanımlanır
}

function Cenkeri() {
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

var myFunction = function () {
  // Fonksiyonun işlemleri burada tanımlanır
};

var greet = function (name) {
  console.log("Merhaba, " + name + "!");
};

// Fonksiyonu çağırma
greet("Özlem"); // Çıktı: Merhaba, Özlem!

function selamVer(mesaj) {
  console.log(`Merhaba ${mesaj}`);
}
selamVer("Esat");
selamVer("Ekrem");

function topla(s1, s2) {
  console.log("toplam :", s1 + s2);
}

topla(7, 5);

//!3-Arrow Function (Ok Fonksiyonu):

var myFunction = () => {
  // Fonksiyonun işlemleri burada tanımlanır
};

// süslü parantez kullanırsanız return kullanmanız lazım
const kareAliver = (x) => {
  return x * x;
};
console.log(kareAliver(5));

const kareAl = (x) => x * x;
console.log(kareAl(7));




function findMax(a, b) {
  if (a > b) {
      return a;
  } else {
      return b;
  }
}

console.log(findMax(10, 5)); // 10
console.log(findMax(3, 8)); // 8

// findMax adında bir fonksiyon tanımlanır.
// Fonksiyon, iki parametre alır (a ve b) ve bu parametreler arasındaki maksimum değeri bulur.
// if koşuluyla, a ve b değerleri karşılaştırılır ve büyük olan değer return ifadesiyle döndürülür.
// Eğer a ve b eşitse veya a küçükse, else bloğu çalışır ve b değeri döndürülür.