//? "destructuring" (yapı parçalama) bir JavaScript özelliğidir ve ES6 ile birlikte tanıtılmıştır. Bu özellik, karmaşık veri yapılarını (nesneleri ve dizileri) parçalara ayırarak, içlerindeki değerlere erişmeyi ve bu değerleri değişkenlere atamayı sağlar. Destructuring, kodu daha okunabilir ve daha kısa hale getirebilir.
//* Destructuring, JavaScript'te bir nesne veya dizi içindeki değerlere kolay bir şekilde erişmek için kullanılan bir özelliktir. Hem nesneler hem de diziler için kullanılabilir

//! Array Destructuring:
// Array destructuring, bir dizi içindeki öğeleri tek tek almak için kullanılır. Bu, dizi içindeki değerleri değişkenlere atamak için kullanışlı bir yöntemdir.
const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//! Object Destructuring:
// Object destructuring, bir nesnenin özelliklerine erişmek ve bu özellikleri değişkenlere atamak için kullanılır. Nesne içindeki özelliklerin adlarına göre, değişkenler tanımlanır ve bu değişkenler nesne özelliklerine atanır.

const peerson = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const { name, a1ge, ccity } = peerson;

console.log(name); // John
console.log(a1ge);  // 30
console.log(ccity); // New York


//! ****************************************************
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York'
  };
  
  // Destructuring kullanarak nesne içindeki değerlere erişim:
  const { firstName, lastName, age, city } = person;
  
  console.log(firstName); // 'John'
  console.log(lastName);  // 'Doe'
  console.log(age);       // 30
  console.log(city);      // 'New York'
  
//! ****************************************************
  const colors = ['red', 'green', 'blue'];

// Destructuring kullanarak dizi içindeki değerlere erişim:
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // 'red'
console.log(secondColor); // 'green'
console.log(thirdColor);  // 'blue'

//! ****************************************************
const personel = {
    firstNamee: 'John',
    lastNamee: 'Doe',
  };
  
  // Varsayılan değerlerle destructuring
  const { firstNamee, lastNamee, agee = 30, cityy = 'New York' } = personel;
  
  console.log(firstName); // 'John'
  console.log(lastName);  // 'Doe'
  console.log(age);       // 30 (varsayılan değer)
  console.log(city);      // 'New York' (varsayılan değer)
  
  function printPersonInfo({ firstName, lastName, age }) {
    console.log(`${firstName} ${lastName}, ${age} years old.`);
  }
  //! ****************************************************
  const personx = {
     //Fonksiyon parametrelerinde de destructuring kullanabiliriz:
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  printPersonInfo(personx); // Çıktı: "John Doe, 30 years old."
  
  //! ****************************************************