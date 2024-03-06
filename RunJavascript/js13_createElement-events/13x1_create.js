
//elemet oluşturduk
const newEkle = document.createElement("li")
//elemet ıcıne not ekledık yazıyı
const textEkle = document.createTextNode("anlar")
// bu yazıyı elemente append ettık
newEkle.appendChild(textEkle)
//selecktor ıle secıp yenı olusan elementı DOM tree ye eklemıs olduk
document.querySelector("ul").appendChild(newEkle)


// Öncelikle bir HTML öğesini seçelim

const element = document.querySelector("li")

// Öznitelik eklemek için setAttribute kullanımı
element.setAttribute("class", "newClass");


const thirdItem = document.querySelector("li:nth-child(3)")
thirdItem.setAttribute("id" , "new-li3")