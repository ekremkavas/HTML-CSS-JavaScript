let sayi1 = Number(prompt("ders notunuzu giriniz :"));
console.log(sayi1);

if (sayi1 >= 90 && sayi1 <= 100) {
  console.log("tebrikler A aldınız");
} else if (sayi1 >= 80 && sayi1 <= 90) {
  console.log("tebrikler B aldınız");
} else if (sayi1 >= 60 && sayi1 <= 80) {
  console.log("tebrikler C aldınız");
} else if (sayi1 >= 50 && sayi1 <= 80) {
  console.log("tebrikler D aldınız");
} else if (sayi1 < 50 && sayi1 >= 0) {
  console.log(" dersten kaldınız");
} else {
  console.log("yalnış sayı girdiniz 0-100 arası not girin");
}
