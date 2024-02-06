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

//!Splice
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

//!Reverse
// reverse yöntemi, bir dizinin öğelerini tersine çevirir. İlk örnekte olduğu gibi, bir dizinin öğelerini tersine çevirir. İkinci örnekte, bir metnin karakterlerini tersine çevirmek için dizeyi ayrıştırıp (split), tersine çevirip (reverse) ardından birleştirir (join). Üçüncü örnekte, karmaşık bir diziyi tersine çevirir.

let dizi = [1, 2, 3, 4, 5];
dizi.reverse();

console.log(dizi); // Çıktı: [5, 4, 3, 2, 1]

let metin = "Merhaba";
let tersMetin = metin.split("").reverse().join("");

console.log(tersMetin); // Çıktı: "abahreM"

//! Split yöntemi
// split yöntemi, bir dizeyi belirli bir ayraçla böler ve alt dize parçalarını bir diziye yerleştirir. Örneğin, bir boşluk karakteri veya virgül gibi belirli bir karaktere göre dizeyi bölebilirsiniz. Bu örneklerde, split yöntemi kullanılarak metinler parçalanmış ve belirli ayraçlara göre diziye dönüştürülmüştür.

let veri = "ali,veli,deli";
let liste = veri.split(","); // Virgülle ayrılmış veriyi parçalar

console.log(liste); // Çıktı: ["ali", "veli", "deli"]

let adres = "istanbul/üsküdar/çengelköy";
let parcalar = adres.split("/"); // / karakterine göre adresi parçalar

console.log(parcalar); // Çıktı: ["istanbul", "üsküdar", "çengelköy"]

let metin = "Merhaba";
let harfler = metin.split(""); // Her karakteri ayrı bir dizi öğesi olarak parçalar

console.log(harfler); // Çıktı: ["M", "e", "r", "h", "a", "b", "a"]

//!indexof
// indexOf yöntemi, bir dize içinde belirli bir alt dizenin ilk bulunduğu dizin konumunu döndürür. Eğer alt dize bulunamazsa, -1 değeri döndürülür. İşte birkaç örnek

let metin = "Merhaba, dünya!";
let pozisyon = metin.indexOf("dünya");

console.log(pozisyon); // Çıktı: 9 (dünya alt dizesi metin içinde 9. pozisyonda bulunuyor)

let metin = "Merhaba, dünya!";
let pozisyon = metin.indexOf("xyz");

console.log(pozisyon); // Çıktı: -1 (xyz alt dizesi metin içinde bulunamadı)

let metin = "Merhaba, dünya!";
let pozisyon = metin.indexOf("a", 3); // 3. pozisyondan itibaren arama yapar

console.log(pozisyon); // Çıktı: 5 (a alt dizesi 3. pozisyondan sonra 5. pozisyonda bulunuyor)

let metin = "Merhaba, dünya! Merhaba, evren!";
let pozisyon = metin.indexOf("Merhaba");

console.log(pozisyon); // Çıktı: 0 (ilk "Merhaba" alt dizesi metin içinde 0. pozisyonda bulunuyor)

//!İncludes

// Bu örneklerde görüldüğü gibi, includes yöntemi belirli bir alt dizenin ana dizide bulunup bulunmadığını kontrol eder. Eğer alt dize bulunursa true, bulunamazsa false döndürür. Ayrıca, ikinci bir parametre belirterek aramanın belirli bir konumdan başlayacağını belirtebilirsiniz.

let metin = "Merhaba, dünya!";
let sonuc = metin.includes("dünya");

console.log(sonuc); // Çıktı: true

let metin = "Merhaba, dünya!";
let sonuc = metin.includes("xyz");

console.log(sonuc); // Çıktı: false

let metin = "Merhaba, dünya!";
let sonuc = metin.includes("a", 3); // 3. pozisyondan itibaren arama yapar

console.log(sonuc); // Çıktı: true
