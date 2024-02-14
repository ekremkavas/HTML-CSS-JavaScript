//!     SPREAD Oparatörü

// spread operatörü (spread operator) da JavaScript'te ES6 ile tanıtılan bir özelliktir. Bu operatör, bir dizi veya nesnenin elemanlarını veya özelliklerini başka bir dizi veya nesneye genişletmek veya yaymak için kullanılır. Spread operatörü üç nokta üst üste (...) şeklinde ifade edilir

//! **********************************

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Çıktı: [1, 2, 3, 4, 5, 6]

// Bu örnekte, spread operatörü kullanılarak arr1 ve arr2 dizilerinin elemanları combinedArray adlı yeni bir diziye birleştirilmiştir.

//! **********************************

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Çıktı: [1, 2, 3]

// Orijinal diziyi değiştirelim
originalArray.push(4);

console.log(originalArray); // Çıktı: [1, 2, 3, 4]
console.log(copiedArray);   // Çıktı: [1, 2, 3] (Kopyalanan dizide değişiklik yok)

//Spread operatörü kullanılarak, originalArray dizisinin elemanları copiedArray adlı yeni bir diziye kopyalanmıştır. Böylece, orijinal dizi üzerinde yapılan değişiklikler kopyalanan diziye yansımaz.

//! **********************************

const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York', country: 'USA' };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); 
// Çıktı: { name: 'John', age: 30, city: 'New York', country: 'USA' }

//Bu örnekte, spread operatörü kullanılarak obj1 ve obj2 nesnelerinin özellikleri mergedObject adlı yeni bir nesneye birleştirilmiştir.

//?Spread operatörü, dizileri veya nesneleri genişletmek veya kopyalamak için çok kullanışlı bir araçtır. Bu operatör, kodunuzu daha okunabilir ve daha temiz hale getirebilir.
