//**forEach JavaScript dizilerinde kullanılan bir dizi yöntemidir. Bu yöntem, bir dizi üzerindeki her bir eleman için belirtilen bir işlevi çağırır. İşlev, dizi içindeki her bir elemanın değerini ve dizideki sırasını parametre olarak alır.
let numberx = [1, 2, 3, 4, 5];

numberx.forEach(function(item, index) {
    console.log("Index:", index, "Value:", item);
});
// Yukarıdaki örnekte:
// numberx adında bir dizi tanımlanmıştır.
// forEach yöntemi kullanılarak dizi üzerinde bir döngü başlatılmıştır.
// Her döngü adımında, belirtilen işlev çağrılır. Bu işlev iki parametre alır: item (dizideki elemanın değeri) ve index (dizideki elemanın indeksi).
// İşlev, her döngü adımında çağrıldığında, dizideki o anki elemanın değeri ve indeksi konsola yazdırılır.
// forEach yöntemi, döngü sırasında dizinin elemanlarını değiştirmez veya yeni bir dizi döndürmez. Sadece dizi üzerindeki her bir eleman için belirtilen işlevi çağırır.

let numbers = [1, 2, 3, 4, 5];
let squares = [];

numbers.forEach(function(item) {
    squares.push(item * item);
});

console.log(squares);

//* Bu örnek, numbers dizisindeki her bir elemanın karesini hesaplar ve bunları squares adlı bir diziye ekler. Her döngü adımında, elemanın karesi hesaplanır ve squares dizisine push() yöntemiyle eklenir. Sonuç olarak, squares dizisi, numbers dizisindeki her bir elemanın karesini içerir.

let fruits = ["apple", "banana", "orange"];
let capitalizedFruits = [];

fruits.forEach(function(item) {
    capitalizedFruits.push(item.toUpperCase());
});

console.log(capitalizedFruits);

// Bu örnek, fruits dizisindeki her bir meyve ismini büyük harfe dönüştürür ve bunları capitalizedFruits adlı bir diziye ekler. Her döngü adımında, toUpperCase() yöntemi kullanılarak meyve ismi büyük harfe dönüştürülür ve capitalizedFruits dizisine eklenir. Sonuç olarak, capitalizedFruits dizisi, fruits dizisindeki her bir meyve isminin büyük harfle yazılmış halini içerir.

//! forEach() yöntemi bir dizi üzerinde döngü yapmak ve her elemana belirli bir işlemi uygulamak için kullanılırken, map() yöntemi aynı işlevi yerine getirirken aynı zamanda her elemana uygulanan işlemin sonucunda yeni bir dizi oluşturur.
//?forEach return beklemez map return bekler

let numberr = [1, 2, 3, 4, 5];
let squaress = numberr.map(function(item) {
    return item * item;
});
console.log(squaress); // [1, 4, 9, 16, 25]


//** */ filter ve find JavaScript'in iki farklı dizi işleme yöntemidir. İkisi de bir dizi üzerinde işlem yapar, ancak farklı sonuçlar üretirler.

//! filter: filter metodu, bir dizi içinde belirli bir koşulu sağlayan tüm öğeleri içeren yeni bir dizi döndürür. Yani, belirli bir koşulu sağlayan tüm öğeleri bulmak için kullanılır ve bu öğeleri yeni bir diziye ekler.

const nuumbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = nuumbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Çıktı: [2, 4, 6]
//* Yukarıdaki örnekte, filter yöntemi, sayıların içindeki çift sayıları bulur.

//! find: find metodu, bir dizi içinde belirli bir koşulu sağlayan ilk öğeyi bulur ve bu öğeyi döndürür. Yani, belirli bir koşulu sağlayan ilk öğeyi bulmak için kullanılır ve bu öğeyi döndürür.

const nnumbers = [1, 2, 3, 4, 5, 6];

const firstEvenNumber = nnumbers.find(num => num % 2 === 0);

console.log(firstEvenNumber); // Çıktı: 2

//* Yukarıdaki örnekte, find yöntemi, dizideki ilk çift sayı olan 2'yi bulur ve döndürür.

//? Özetle, filter, bir dizi içinde belirli bir koşulu sağlayan tüm öğeleri bulurken, find, bir dizi içinde belirli bir koşulu sağlayan ilk öğeyi bulur.