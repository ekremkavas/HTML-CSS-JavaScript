// ? ======================================
// ?              SCOPE
// ? ======================================

console.log("******* SCOPE ********")

//! VAR
sayi1 = 44
var sayi1 //? hoisting özelliği vardir
console.log(sayi1)

//! scope.js:12 Uncaught ReferenceError: Cannot access 'deneme' before initializations (const ve let hoisted olmaz)
// console.log(deneme)
// let deneme = 5

var result = "Hi"

if (sayi1 === 33) {
  let result = "Halo" //? local scope result
  console.log(result) //? Halo
} else {
  var result = "Salut" //? Global scope result
}

console.log(result) //* global scope result (Hi)

//**************************** */

let sayı2 = 5;
const fonk2 = function () {
  sayı2 = 10; 
  console.log(`fonk ıcı ${sayı2}`);
};
fonk2();
console.log(`Fonkdısı ${++sayı2}`);

//***************************** */

let sayı2 = 5;
const fonk2 = function () {
   let sayı2 = 10;  // let verirsen yenı deger ataması olur
  console.log(`fonk ıcı ${sayı2}`);
};
fonk2(); // burda fonk2 yenıden cagırdık
console.log(`Fonkdısı ${++sayı2}`);