//Çift Sayıları Filtreleme:


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);

//Belirli Bir Değere Eşit Olanları Filtreleme:

var ages = [25, 30, 35, 40, 45, 50];

var selectedAges = ages.filter(function(age) {
    return age === 30 || age === 40;
});

console.log(selectedAges);


//Belirli Bir Koşulu Sağlayanları Filtreleme:

var students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
    { name: "Emma", age: 45 }
];

var aboveThirty = students.filter(function(student) {
    return student.age > 30;
});

console.log(aboveThirty);

