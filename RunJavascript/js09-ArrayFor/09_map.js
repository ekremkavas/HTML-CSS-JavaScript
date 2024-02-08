
// Dizideki Her Elemanı İkiyle Çarpma:
var numbers = [1, 2, 3, 4, 5];

var doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);

//Dizideki Her Elemanı Üçle Çarpma ve İndeksleme:

var numbers = [1, 2, 3, 4, 5];

var tripledNumbers = numbers.map(function(number, index) {
    return "Index: " + index + ", Value: " + (number * 3);
});

console.log(tripledNumbers);

//Dizideki Her Elemanın Karekökünü Alma:


var numbers = [1, 4, 9, 16, 25];

var squareRoots = numbers.map(function(number) {
    return Math.sqrt(number);
});

console.log(squareRoots);

//Dizideki String Uzunluklarını Bulma:

var names = ["Alice", "Bob", "Charlie"];

var nameLengths = names.map(function(name) {
    return name.length;
});

console.log(nameLengths);


//Dizideki Her Elemanı İkiyle Bölme ve Yuvarlama:


var numbers = [10, 20, 30, 40, 50];

var roundedNumbers = numbers.map(function(number) {
    return Math.round(number / 2);
});

console.log(roundedNumbers);

