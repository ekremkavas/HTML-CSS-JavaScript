console.log("**********ARRAY*********");

//!JavaScript'te bir dizi array [], birden fazla değeri tek bir değişken altında saklamak için kullanılan bir veri yapısıdır. Bir dizi, farklı veri türlerinden öğeleri içerebilir ve bu öğelerin her birine dizi içindeki konumlarına (index) göre erişilebilir.

//?arrayde kullanılan push pop slice gibi yöntemler varolan array bozmaz(mutet etmez) ana tanımlanan array cagırdıgınızda aynen gelır


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

//!indexOf-indeksine ulaşmak

// indexOf() fonksiyonu, bir dizide belirli bir öğenin ilk bulunduğu konumunun indeksini döndürür
let fruits = ["Apple", "Banana", "Orange", "Apple", "Mango"];

// "Orange" öğesinin indeksini bulma
let orangeIndex = fruits.indexOf("Orange");
console.log(orangeIndex); // 2

// "Grape" öğesinin indeksini bulma (bulunmadığı için -1 döner)
let grapeIndex = fruits.indexOf("Grape");
console.log(grapeIndex); // -1

// "Apple" öğesinin indeksini bulma (ilk bulunanın indeksini döner)
let appleIndex = fruits.indexOf("Apple");
console.log(appleIndex); // 0




//! push 
// Diziye en sonuna eleman eklemek
colors.push("Purple");
console.log(colors); // ["Red", "Orange", "Blue", "Yellow", "Purple"]

//! unshift en başa eleman ekle
colors.unshift("Purple")
console.log(colors); // (6) ['Purple', 'Red', 'Orange', 'Blue', 'Yellow', 'Purple']


//! pop
// Dizi sonunda eleman çıkarmak
let removedColor = colors.pop();
console.log(removedColor); 
console.log(colors); // ['Purple', 'Red', 'Orange', 'Blue', 'Yellow']


//!shift dizinin başından eleman çıkarmak
colors.shift()
console.log(colors); // ['Red', 'Orange', 'Blue', 'Yellow']



//! Short

// Dizi elemanlarını sıralamak
colors.sort();
console.log(colors); // ['Blue', 'Orange', 'Red', 'Yellow']


//!Splice
//?Siler 
// Bir dizi oluşturalım
let meyvelera = ["Elma", "Armut", "Muz", "Portakal", "Üzüm"];

// splice yöntemiyle diziden bir öğe silme
let silinen = meyvelera.splice(2, 1); // 2. indexten sonra kaç öğeyi silmek itiyorum  1("Muz") öğeyi siler

// splice (burdan başla , bukadar sil ,)
console.log("Silinen meyve:", silinen); // Çıktı: ["Muz"]
console.log("Yeni meyve dizisi:", meyvelera); // Çıktı: ["Elma", "Armut", "Portakal", "Üzüm"]

// splice yöntemiyle dizinin belirli bir konumuna yeni öğeler ekleme
meyvelera.splice(2, 0, "Çilek", "Karpuz"); // 2. indexten başlayarak 0 hiçbir öğe silmeden "Çilek" ve "Karpuz" öğelerini ekler

console.log("Yeni meyve dizisi:", meyvelera); // Çıktı: ["Elma", "Armut", "Çilek", "Karpuz", "Portakal", "Üzüm"]

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

//!Slice kesme
// slice yöntemi, bir diziden belirli bir aralıktaki öğeleri seçmek için kullanılır. İlk parametre, kesmeye başlanacak dizin konumunu belirtir, ikinci parametre ise kesmenin sonlanacağı dizin konumunu belirtir (bu indis dahil değildir). Bu örnekte, 1. indexten başlayarak 4. indexe kadar olan öğeleri (4. index dahil değil) seçer.

// Bir dizi oluşturalım
let meyveler = ["Elma", "Armut", "Muz", "Portakal", "Üzüm"];
// slice yöntemiyle belirli bir aralıktaki öğeleri seçme
let dilimlenmisMeyveler = meyveler.slice(1, 4); // 1. indexten başlayarak 4. indexe kadar olan öğeleri seçer (4. index dahil değil)
console.log(dilimlenmisMeyveler); // Çıktı: ["Armut", "Muz", "Portakal"]

//!Join dizi elemanlarının arasına istenilen ekleme
// Bir dizi oluşturalım
let meyvelerx = ["Elma", "Armut", "Muz", "Portakal", "Üzüm"];

// join yöntemiyle dizi öğelerini birleştirme
let birlesikMeyveler = meyvelerx.join("*****"); // Dizi öğelerini virgülle ayırarak birleştirir

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



//!Reverse
// reverse yöntemi, bir dizinin öğelerini tersine çevirir. İlk örnekte olduğu gibi, bir dizinin öğelerini tersine çevirir. İkinci örnekte, bir metnin karakterlerini tersine çevirmek için dizeyi ayrıştırıp (split), tersine çevirip (reverse) ardından birleştirir (join). Üçüncü örnekte, karmaşık bir diziyi tersine çevirir.

let dizi = [1, 2, 3, 4, 5];
dizi.reverse();

console.log(dizi); // Çıktı: [5, 4, 3, 2, 1]

let metinx = "Merhaba";
let tersMetin = metinx.split("").reverse().join("");

console.log(tersMetin); // Çıktı: "abahreM"

//! Split yöntemi
// split yöntemi, bir dizeyi belirli bir ayraçla böler ve alt dize parçalarını bir diziye yerleştirir. Örneğin, bir boşluk karakteri veya virgül gibi belirli bir karaktere göre dizeyi bölebilirsiniz. Bu örneklerde, split yöntemi kullanılarak metinler parçalanmış ve belirli ayraçlara göre diziye dönüştürülmüştür.

let veri = "ali,veli,deli";
let liste = veri.split(","); // Virgülle ayrılmış veriyi parçalar

console.log(liste); // Çıktı: ["ali", "veli", "deli"]

let adres = "istanbul/üsküdar/çengelköy";
let parcalar = adres.split("/"); // / karakterine göre adresi parçalar

console.log(parcalar); // Çıktı: ["istanbul", "üsküdar", "çengelköy"]

let metiny = "Merhaba";
let harfler = metiny.split(""); // Her karakteri ayrı bir dizi öğesi olarak parçalar

console.log(harfler); // Çıktı: ["M", "e", "r", "h", "a", "b", "a"]

//!indexof
// indexOf yöntemi, bir dize içinde belirli bir alt dizenin ilk bulunduğu dizin konumunu döndürür. Eğer alt dize bulunamazsa, -1 değeri döndürülür. İşte birkaç örnek

let metinz = ["Merhaba", "dünya" , "jüpiter"];
let pozisyonx = metinz.indexOf("dünya");

console.log(pozisyonx); // Çıktı: 1 (dünya alt dizesi metin içinde 1. pozisyonda bulunuyor)

let metinn = "Merhaba, dünya!";
let pozisyonn = metinn.indexOf("xyz");

console.log(pozisyonn); // Çıktı: -1 (xyz alt dizesi metin içinde bulunamadı)


//!İncludes

// Bu örneklerde görüldüğü gibi, includes yöntemi belirli bir alt dizenin ana dizide bulunup bulunmadığını kontrol eder. Eğer alt dize bulunursa true, bulunamazsa false döndürür. Ayrıca, ikinci bir parametre belirterek aramanın belirli bir konumdan başlayacağını belirtebilirsiniz.

let mettin = "Merhaba, dünya!";
let sonucc = mettin.includes("dünya");

console.log(sonucc); // Çıktı: true

let metiiin = "Merhaba, dünya!";
let sonuuc = metiiin.includes("xyz");

console.log(sonuuc); // Çıktı: false

let metin = "Merhaba, dünya!";
let sonuc = metin.includes("a", 3); // 3. pozisyondan itibaren arama yapar

console.log(sonuc); // Çıktı: true

//? Array'lerde ilişkisel veriler

const ogrİsim = ["ahmet", "ismet", "saffet"]
const ogrSoyisim = ["yılmaz", "can", "baki"]
const ogrAdres = ["kadıköy", "şebinkarahisar", "seferihisar"]

console.log(`${ogrİsim[0]} - ${ogrSoyisim[0]} - ${ogrAdres[0]} `)
