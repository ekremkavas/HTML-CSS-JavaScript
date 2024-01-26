/*
=======================================================
// *             Örnekler-for
// * =======================================================

break ve continue şart ifadeleri ile birlikte kullanılır

if vb. */

// var toplam = 0;
// for (var i = 1; i <= 5; i++) {
//     toplam += i;
// }
// console.log("1'den 5'e kadar olan sayıların toplamı:", toplam);

let toplam = 0
for(let yas = 37; yas >= 0; yas = yas -1){
    toplam = toplam + yas
}

console.log("Doğduğunuz yıldan itibaren yaşınızın toplamı:", toplam);


//? break - continue

// for (let i = 0; i <= 10; i++) {
//   if (i % 3) {
//     continue
//   }
//   if (i === 6) {
//     break
//   }
//   console.log(i)
// }


