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


todo.style.color = "red"; // W3Sholls da var DOM style özellıklerı
todo.style.background = "purple";
todo.style.fontWeight = "bold";
todo.style.paddingTop = "10px";
todo.style.paddingLeft = "60px";


