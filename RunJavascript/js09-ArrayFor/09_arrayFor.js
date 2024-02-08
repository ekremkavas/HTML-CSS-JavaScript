var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// -----------------------------------------------
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " çift sayıdır.");
    }
}


// ---------------------------------------------

var ogrenciNotlari = [80, 65, 90, 75, 85];
var sinirNotu = 70;
var gecenOgrenciSayisi = 0;

for (var i = 0; i < ogrenciNotlari.length; i++) {
    if (ogrenciNotlari[i] >= sinirNotu) {
        gecenOgrenciSayisi++;
    }
}


// --------------------------------------------

var ogrenciNotlari = [80, 65, 90, 75, 85];
var enYuksekNot = ogrenciNotlari[0];
var enDusukNot = ogrenciNotlari[0];

for (var i = 1; i < ogrenciNotlari.length; i++) {
    if (ogrenciNotlari[i] > enYuksekNot) {
        enYuksekNot = ogrenciNotlari[i];
    }
    if (ogrenciNotlari[i] < enDusukNot) {
        enDusukNot = ogrenciNotlari[i];
    }
}

console.log("En Yüksek Not: " + enYuksekNot);
console.log("En Düşük Not: " + enDusukNot);


console.log("Geçen Öğrenci Sayısı: " + gecenOgrenciSayisi);

// -----------------------------------------

// Öğrenci notlarını içeren bir dizi oluşturun
var ogrenciNotlari = [80, 65, 90, 75, 85];

// Notları toplamak için bir değişken oluşturun
var toplamNot = 0;

// Her bir öğrencinin notunu dizi üzerinde döngü kullanarak işleyin
for (var i = 0; i < ogrenciNotlari.length; i++) {
    // Her bir öğrencinin notunu toplam not ile toplayın
    toplamNot += ogrenciNotlari[i];
}

// Ortalamayı hesaplayın
var ortalamaNot = toplamNot / ogrenciNotlari.length;

// Sonucu ekrana yazdırın
console.log("Toplam Not: " + toplamNot);
console.log("Ortalama Not: " + ortalamaNot);


//! FOR İN

var cars = ["BMW", "Mercedes", "Audi", "Toyota"];

for (var index in cars) {
    console.log(cars[index]);
}

// ------------------------------------

var person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (var key in person) {
    console.log(key + ": " + person[key]);
}

// ------------------------------------

var numbers = [10, 20, 30, 40, 50];

for (var index in numbers) {
    console.log("Index: " + index);
}

// ------------------------------------
