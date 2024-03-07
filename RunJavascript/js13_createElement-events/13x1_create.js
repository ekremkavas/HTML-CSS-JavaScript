
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

//! Öznitelik eklemek için setAttribute kullanımı
element.setAttribute("class", "newClass");


const thirdItem = document.querySelector("li:nth-child(3)")
thirdItem.setAttribute("id" , "new-li3")

//!classList ile eklemek
element.classList.add("border" , "border-danger" , "border-2" , "bg-warning")

//kaldırmak ıcın remove
element.classList.remove("border-2")

//toggle varsa kaldırır yoksa ekler
element.classList.toggle("border-5")

//! innerHTML ile YENİ ELEMENT OLUŞTURMA

document.querySelector(".mainblok").innerHTML = `
<div>
<input type="text" />
<button class="btn btn-danger">Submit</button>
</div>

`
