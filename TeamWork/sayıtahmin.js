let tutulanSayi = Math.floor(Math.random() * 100);
console.log(tutulanSayi);
for (let i = 4; i < 5; i--) {
  let tahmin = prompt("0-100 arasında bir sayı giriniz :", "");
  if (tahmin == tutulanSayi) {
    alert("Tebrikler, doğru tahmin!");
    break;
  } else {
    if (tahmin > tutulanSayi) {
      alert("Daha küçük bir sayı giriniz");
    } else {
      alert("Daha büyük bir sayı giriniz");
    }
    // hak--;
    alert(`Kalan hakkınız ${i}`);
    if (i == 0) {
      alert(`Tahmin hakkınız bitti. Tutulan sayı: ${tutulanSayi} `);
      break;
    }
  }
}


// ****************************************************

let roll= Math.round(Math.random()*100)
let trial=+prompt("lütfen kaç deneme yapmak istediğinizi seçiniz")
let guess=""
do {
    guess=+prompt("1 ile 100 arasindaki tahmini giriniz ")
    // console.log(roll);
    if(guess===roll) {
        alert("tebrikler cok iyisin");
        break;
    }else if(guess>roll){
        trial-=1
        alert(`daha küçük at
         kalan deneme sayisi=${trial}`);
    }else if(guess<roll){
        trial-=1
        alert(`daha büyük at
         kalan deneme sayisi=${trial}`);
    }
    console.log(trial);
} while (trial>0);
// console.log(guess);
// console.log(roll);
if (guess !== roll) {alert("üzgünüm elendiniz")}