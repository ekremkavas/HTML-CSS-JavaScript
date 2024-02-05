console.log("**********ARRAY*********");

const names = []
console.log(names);
console.log(typeof names);


// Bir dizi oluşturmak
let colors = ["Red", "Green", "Blue", "Yellow"];

// Dizinin elemanlarına erişmek
console.log(colors[0]); // "Red"
console.log(colors[2]); // "Blue"

// Dizi elemanlarını değiştirmek
colors[1] = "Orange";
console.log(colors); // ["Red", "Orange", "Blue", "Yellow"]

// Dizinin uzunluğunu almak
console.log(colors.length); // 4

// Diziye eleman eklemek
colors.push("Purple");
console.log(colors); // ["Red", "Orange", "Blue", "Yellow", "Purple"]

// Dizi elemanını çıkarmak
let removedColor = colors.pop();
console.log(removedColor); // "Purple"
console.log(colors); // ["Red", "Orange", "Blue", "Yellow"]

// Dizi elemanlarını sıralamak
colors.sort();
console.log(colors); // ["Blue", "Orange", "Red", "Yellow"]
