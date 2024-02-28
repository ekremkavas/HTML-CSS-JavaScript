//Document Objesi

// console.log(window);

let value ;

console.log(document);

// value = document.location.href;
// value = document.location.hostname;
// value = document.location.port;
// value = document.location.pathname;


// value = document.all;
// value = document.characterSet;

// value = document.title;
// value = document.links.item(4);
// value = document.links.item(4).id;
//! 4.item attrıbute lerı getır
//! 4.itemdekı attrubute id olanı getir
// value = document.links.item(4).getAttribute("id");
// value = document.links.item(4).getAttribute("class");
//! 4.itemdekı attrubute id olanı getir
// value = document.links.item(4).classList[3];

// value  = document.forms.item(1).children;

// value = document.domain;
// value = document.contentType;

console.log(value);

//!STYLE ÖZELLIĞİ

// style özellıgı ıle stıllerndırmeler degıstırerılebılır

const todo = document.querySelector(".list-group-item")[0];
// console.log(todo);
const clearButton = document.querySelector(#todoClearButton)
console.log(clearButton);

todo.style.color = "red"; // W3Sholls da var DOM style özellıklerı
todo.style.background = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "10px";
todo.style.paddingLeft = "60px";

clearButton.style.padding= "50px";

//! HTML etiketleri üzerinde gezinmek

//? HTML -parend child
//  a->HEAD ->title ->script
//  a->BODY ->h1

const todo = document.querySelector(".list-group-item");
const todo = document.querySelector(".list-group");
const todo = document.querySelector(".card");
console.log(card);

// Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[1];
value = todoList.children[1].textContent = "değiştirdik";
value = todoList.children[todoList.children.lenght - 1];

value = Array.from(to.children) // ARRAY ee cevırmek ıcın


console.log(value);

//çocuktan anneye erısmek , parentElement

value= todo.parentElement
console.log(value);

//kardeşler arasında gezınmek ,nextElementSibling

value = todo;
value = todo.nextElementSibling; //kardeşe erişim


console.log(value);
