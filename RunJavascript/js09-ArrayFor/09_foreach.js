var colors = ["Red", "Green", "Blue"];

colors.forEach(function(color) {
    console.log(color);
});

// -----------------------------------------------

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(number) {
    sum += number;
});

console.log("Toplam: " + sum);


// -----------------------------------------------

var fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(function(fruit, index) {
    console.log("Index: " + index + ", Fruit: " + fruit);
});

// -----------------------------------------------

var names = ["Alice", "Bob", "Charlie"];

names.forEach(function(name) {
    console.log(name.length);
});

// -----------------------------------------------

var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index, array) {
    array[index] = number * 2;
});

console.log(numbers);

// -----------------------------------------------

var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

// -----------------------------------------------

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(number) {
    if (number % 2 === 0) {
        sum += number;
    }
});

console.log("Çift Sayıların Toplamı: " + sum);

// -----------------------------------------------

var names = ["alice", "bob", "charlie"];

names.forEach(function(name, index, array) {
    array[index] = name.toUpperCase();
});

console.log(names);

// -----------------------------------------------

var numbers = [5, 2, 8, 1, 9];

numbers.forEach(function(number, index, array) {
    array.sort();
});

console.log(numbers);


// -----------------------------------------------

var numbers = [1, 2, 3, 4, 5];

var evenNumbers = [];
numbers.forEach(function(number) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

console.log(evenNumbers);
