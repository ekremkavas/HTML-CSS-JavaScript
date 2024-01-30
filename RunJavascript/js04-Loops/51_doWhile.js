// let sayac =1;

// do{
//     console.log(sayac);
//     sayac++;

// }while(sayac < 10);

// ****************************************

let sayac2 = 1;

do {
  if (sayac2 % 2 !== 0) {
    console.log(sayac2);
  }
  sayac2++;
} while (sayac2 <= 10);

// **************************************

//? Ornek
let devam = "";
do {
  let vize = Number(prompt("Lütfen vize notunu giriniz:"));
  let final = Number(prompt("Lütfen final notunu giriniz:"));
  let ortalama = vize * 0.3 + final * 0.7;

  const sonuc = ortalama >= 50 ? "Geçti" : "Kaldi";
  console.log(sonuc);
  
  devam = prompt("Hesaplamaya devam etmek ister misiniz? e");
} while (devam === "e" || devam === "E");
console.log("Uygulama kapaniyor");
