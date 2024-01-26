//*********************************************
//* FOOR LOOP
//*********************************************


console.log("****FOR LOOP****");
// for(let i = 1; i <= 50; i++){
//     console.log(i);

// }

/*
for (başlangıç; koşul; artış/azalış) {
     Döngü içinde yapılacak işlemler
}
*/

// for(let i = 1; i <= 50; i += 3){
//     console.log(i);

// }

/*çift sayı yazdırma */
let cift = 0
for (cift = 0; cift <= 10; cift += 2) {
    console.log(cift);
}

for(let geri = 6; geri >= 0; geri = geri-1){
    console.log(geri);
}

/* for döngülerinde koşul cümlelerinde == veya != operatörlerini kullanmak sonsuz veya girilmeyen döngüye yol açması muhtemeldir */

//? Ornek 50 kişinin notu girerek ortalaması hesaplayan kodu yazınız.


/*

************************************************** 
let sum = 0
let i = 0
for (i; i < 5; i++) {
  const grade = Number(prompt(`Enter ${i + 1}. grade:`))
  sum = sum + grade
  console.log(sum)
}
console.log(i)
console.log(`AVG:${sum / i}`)
