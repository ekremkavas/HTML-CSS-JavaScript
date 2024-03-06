
//elemet oluşturduk
const newEkle = document.createElement("li")
//elemet ıcıne not ekledık yazıyı
const textEkle = document.createTextNode("anlar")
// bu yazıyı elemente append ettık
newEkle.appendChild(textEkle)
//selecktor ıle secıp yenı olusan elementı DOM tree ye eklemıs olduk
document.querySelector("ul").appendChild(newEkle)

