

//! *****************************************
//!            REDUCE 
//! *****************************************
//; Kümülatif olarak toplama çıkarma yapıyorsanız bu method uygun ,,sonucu değer döndürür(primity) o yüzden devamıda map filter yazılmaz

 // JavaScript'te reduce() fonksiyonu, bir dizi (array) üzerinde döngü yaparak dizi elemanlarını birleştirmek veya işlemek için kullanılır. Bu fonksiyon, bir başlangıç değeri (initial value) ve bir geri çağırma fonksiyonu (callback function) alır. Geri çağırma fonksiyonu, her döngü adımında bir önceki değer ve mevcut öğe üzerinde çalışarak bir sonraki değeri döndürür. 

 //array.reduce(callback[, initialValue]);

 //callback: Her döngü adımında çağrılacak olan fonksiyondur. Bu fonksiyon, dört argüman alır: accumulator (birikimci), currentValue (mevcut değer), currentIndex (mevcut indeks) ve array (dizi).

 //initialValue (opsiyonel): İlk döngü adımında birikimciye atanacak başlangıç değeridir. Eğer belirtilmezse, dizi ilk öğeden başlayarak çalışır.
 
 //Örnek olarak, bir dizi içindeki sayıların toplamını hesaplayalım:

 let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // accumulator(BİRLEŞTİRİCİ_TOPLAYICI) + currentValue(DEĞER_VALUE) ,0 (BAŞLANGIÇ_DEĞERİ)

console.log(sum); // Çıktı: 15


let numberxs = [1, 2, 3, 4, 5];
let summ = numbexrs.reduce((total, num) => total + num, 0);
console.log(summ); // Çıktı: 15


let words = ["apple", "banana", "orange", "kiwi"];
let totalLength = words.reduce((total, word) => total + word.length, 0);
console.log(totalLength); // Çıktı: 21 (5 + 6 + 6 + 4)
