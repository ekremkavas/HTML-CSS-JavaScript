let vize1 = Number(prompt("vize1 notunuzu giriniz"));
let vize2 = Number(prompt("vize2 notunuzu giriniz"));
let final = Number(prompt("final notunuzu giriniz"));

// prompt kullanıcıdan çıktı almaya yarıyan metod
// let ortalama =

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.3;

if (ortalama >= 60) {
  alert("dersten geçtiniz :)");
  console.log("DERSTEN GECTINIZZ TEBRIKLER");
} else {
  alert("dersten kaldınız: ");
  console.log("DESTEN KALDINIZ GECMIS OLSUN");
}
