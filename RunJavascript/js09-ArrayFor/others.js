//* =======================================
//*               OTHERS
//* =======================================

//* every()
//*-----------------------------------------------------------
//? "JavaScript every()" yöntemi, bir dizi içindeki her öğe için belirli bir koşulun doğruluğunu kontrol eder. Bu yöntem, dizi içindeki tüm öğelerin belirli bir koşulu karşılaması gerektiğinde kullanışlıdırTum diziyi itere eder ve aldigi  callback fonksiyonuna gore test gerceklestirir.Tum elemanlar icin test basarili ise true aksi takdirde false deger dondurur.

// Tüm Öğeler Pozitif mi?

const numberss = [1, 2, 3, 4, 5];
const allPositive = numberss.every((num) => num > 0);
console.log(allPositive); // true

//Tüm Stringler Belirli Bir Uzunlukta mı?

const words = ["apple", "banana", "orange", "grape"];
const allThreeLetters = words.every((word) => word.length === 5);
console.log(allThreeLetters); // false

const ages = [18, 22, 78, 44, 78, 89, 25];
const check = ages.every((age) => age >= 18);

check ? console.log("All ages are over 18") : console.log("Some are under 18");

// Tüm Sayılar Asal mı?


function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  
  const numbers = [2, 3, 5, 7, 11];
  const allPrimes = numbers.every(isPrime);
  console.log(allPrimes); // true
  
//   Bu örnekte, isPrime() fonksiyonu her bir sayının asal olup olmadığını kontrol eder ve every() yöntemi tüm sayıların asal olup olmadığını kontrol eder. Tüm sayılar asal olduğu için true döner.



//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80);
console.log(over80); //? true

//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30);
const ageBigThan30Last = ages.findLast((age) => age >= 30);
console.log(ageBigThan30First, ageBigThan30Last);

console.log(ages.find((age) => age >= 80)); //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18);
console.log(foundIndex); //? 1
