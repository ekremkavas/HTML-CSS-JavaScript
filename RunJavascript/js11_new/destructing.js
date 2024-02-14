//? Elbette, "destructuring" (yapı parçalama) bir JavaScript özelliğidir ve ES6 ile birlikte tanıtılmıştır. Bu özellik, karmaşık veri yapılarını (nesneleri ve dizileri) parçalara ayırarak, içlerindeki değerlere erişmeyi ve bu değerleri değişkenlere atamayı sağlar. Destructuring, kodu daha okunabilir ve daha kısa hale getirebilir.
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