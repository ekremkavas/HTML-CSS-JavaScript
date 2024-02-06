console.log("**********ARRAY*********");

const names = [];
console.log(names);
console.log(typeof names);

// Bir dizi oluşturmak
let colors = ["Red", "Green", "Blue", "Yellow"];

// Dizinin elemanlarına erişmek
console.log(colors[0]); // "Red"
console.log(colors[2]); // "Blue"

// Dizi elemanlarını değiştirmek
colors[1] = "Orange";
console.log(colors); // ["Red", "Orange", "Blue", "Yellow"]

// Dizinin uzunluğunu almak
console.log(colors.length); // 4

// Diziye eleman eklemek
colors.push("Purple");
console.log(colors); // ["Red", "Orange", "Blue", "Yellow", "Purple"]

// Dizi elemanını çıkarmak
let removedColor = colors.pop();
console.log(removedColor); // "Purple"
console.log(colors); // ["Red", "Orange", "Blue", "Yellow"]

// Dizi elemanlarını sıralamak
colors.sort();
console.log(colors); // ["Blue", "Orange", "Red", "Yellow"]

// Bir dizi oluşturalım
let meyveler = ["Elma", "Armut", "Muz", "Portakal", "Üzüm"];

// splice yöntemiyle diziden bir öğe silme
let silinen = meyveler.splice(2, 1); // 2. indexteki ("Muz") öğeyi siler

// splice (burdan başla , bukadar sil ,)
console.log("Silinen meyve:", silinen); // Çıktı: ["Muz"]
console.log("Yeni meyve dizisi:", meyveler); // Çıktı: ["Elma", "Armut", "Portakal", "Üzüm"]

// splice yöntemiyle dizinin belirli bir konumuna yeni öğeler ekleme
meyveler.splice(2, 0, "Çilek", "Karpuz"); // 2. indexten başlayarak hiçbir öğe silmeden "Çilek" ve "Karpuz" öğelerini ekler

console.log("Yeni meyve dizisi:", meyveler); // Çıktı: ["Elma", "Armut", "Çilek", "Karpuz", "Portakal", "Üzüm"]

// Bir dizi oluşturalım
let arabalar = ["BMW", "Mercedes", "Audi", "Toyota", "Honda"];

// splice yöntemiyle diziden öğe silme ve yerine yeni öğeler ekleme
let silinenArabalar = arabalar.splice(1, 2, "Tesla", "Ford"); // 1. indexten başlayarak 2 öğeyi siler ve yerine "Tesla" ve "Ford" ekler

console.log("Silinen arabalar:", silinenArabalar); // Çıktı: ["Mercedes", "Audi"]
console.log("Yeni arabalar dizisi:", arabalar); // Çıktı: ["BMW", "Tesla", "Ford", "Toyota", "Honda"]

// splice yöntemiyle belirli bir konumdan başlayarak sonuna kadar tüm öğeleri silme
let silinenHondalar = arabalar.splice(3); // 3. indexten başlayarak sonuna kadar tüm öğeleri siler

console.log("Silinen arabalar (sondan itibaren):", silinenHondalar); // Çıktı: ["Toyota", "Honda"]
console.log("Yeni arabalar dizisi (sondan itibaren):", arabalar); // Çıktı: ["BMW", "Tesla", "Ford"]

//!Join araya eleman ekleme
// Bir dizi oluşturalım
let meyveler = ["Elma", "Armut", "Muz", "Portakal", "Üzüm"];

// join yöntemiyle dizi öğelerini birleştirme
let birlesikMeyveler = meyveler.join(", "); // Dizi öğelerini virgülle ayırarak birleştirir

console.log(birlesikMeyveler); // Çıktı: "Elma, Armut, Muz, Portakal, Üzüm"

//!concat birleştirme
// İlk dizi
let dizi1 = [1, 2, 3];
// İkinci dizi
let dizi2 = [4, 5, 6];
// Üçüncü dizi
let dizi3 = [7, 8, 9];

// concat yöntemiyle dizileri birleştirme
let birlesikDizi = dizi1.concat(dizi2, dizi3);

console.log(birlesikDizi); // Çıktı: [1, 2, 3, 4, 5, 6, 7, 8, 9]


//!Slice kesme
// slice yöntemi, bir diziden belirli bir aralıktaki öğeleri seçmek için kullanılır. İlk parametre, kesmeye başlanacak dizin konumunu belirtir, ikinci parametre ise kesmenin sonlanacağı dizin konumunu belirtir (bu indis dahil değildir). Bu örnekte, 1. indexten başlayarak 4. indexe kadar olan öğeleri (4. index dahil değil) seçer.

// Bir dizi oluşturalım
let meyveler = ["Elma", "Armut", "Muz", "Portakal", "Üzüm"];
// slice yöntemiyle belirli bir aralıktaki öğeleri seçme
let dilimlenmisMeyveler = meyveler.slice(1, 4); // 1. indexten başlayarak 4. indexe kadar olan öğeleri seçer (4. index dahil değil)
console.log(dilimlenmisMeyveler); // Çıktı: ["Armut", "Muz", "Portakal"]