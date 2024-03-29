console.log("***** SELECTORS *****")

document.title = "FS16 🚧"
//*===========================================
//*          getElementById()
//*===========================================
//!id E GÖRE ELEMENTİ YAKALAR



console.log(document.getElementById("add-new-item"))

// id'si add-new-item olan elementi secer

const headerText = document.getElementById("add-new-item")
console.log(headerText)


//****************************************** */

//! secilen elementin style propertysini manipule ettik
//? her sey key-value şeklinde yazılır.
headerText.style.color = "blue"
headerText.style.backgroundColor = "yellow"
headerText.style.border = "2px solid red"
//! NOTE: property 'ler de kebap-case değil camelCase notasyonu kullanılır.

//? NOTE
// headerText.style = "font-family: tahoma; font-size: 30px" //? CSS vari erişim

//? id'si btn olan elementi secer
const addBtn = document.getElementById("btn")
console.log(addBtn)

//? HTML elementlerininin İçerikleri okuma ve değiştirme
//?----------------------------------------
const htmlLi = document.getElementById("html-li")
htmlLi.style.color = "red"

//? bir text elementinin içeriği aşağıdaki attribute'ler ile degisitirlebilir.


//! textContent, innerText, innerHTML

// textContent strıng olarak ıcerıdekı metnı alır "<h2>HTML5</h2>" bunla beraber yazar

// innerText dersek kenarlarındakı HTML etıketını de algılar  "<h2>JS</h2>" dırek html olarak alır

console.log(htmlLi.textContent)

htmlLi.textContent = "HTML5"
htmlLi.textContent = "<h2>HTML5</h2>"

document.getElementById("js-li").innerText = "JS"
document.getElementById("js-li").innerText = "<h2>JS</h2>"

document.getElementById("react-li").innerHTML = "React JS"
document.getElementById("react-li").innerHTML =
  "<h2 style='color: blue'>REACT JS</h2>"

//?! input'ların degerinin okunması/yazılması

const myInput = document.getElementById("input")
console.log(myInput.value)

addBtn.value = "SUBMIT"


//*===========================================
//*          getElementsByTagName()
//*===========================================

// etiket ismine göre yakalar


const allLi = document.getElementsByTagName("li")
console.log(allLi) //? HTML Collection

//?HTML collection'daki her bir elemente indisleme ile erişilebilir.
console.log(allLi[1].textContent)
allLi[2].textContent = "JS-React"

//? Toplu bir şekilde erişim için for yapıları kullanılabilir.
for (let li of allLi) {
  console.log(li.textContent)
}

//! array-like grubunda direk array metotları kulanılamamz.
// allLi.forEach((li) => console.log(li))

//? Çözüm olarak array-like grubu array'e çevirilebilir.

//? 1-spread
const arrAllLi = [...allLi]
console.log(arrAllLi)
arrAllLi.forEach((li) => (li.style.color = "fuchsia"))

//? 2-array.from()
console.log(Array.from(allLi))
Array.from(allLi).map((li) => (li.style.backgroundColor = "green"))


//*===========================================
//*          getElementsByClassName()
//*===========================================
// class ısmıne göre yakalar

const myList = document.getElementsByClassName("list")
console.log(myList) //? HTML Collection

myList[0].innerText = "HTML Dersleri"

//? Ornek
document.getElementsByClassName("item-list")[0].style.color = "hotpink"



//* ========================================
//*              querySelector()
//* ========================================

// getElementById, getElementsByClassName() , getElementsByTagName()  ,üçünün yaptığı işi tek başına yapar

// ! Query Selector ile id, tag, class seçilebilir.
//**  bu secici akısta gördügü ilk elementi secer, hepsini seçeçekseniz querySelectorAll kullanılır. */

//? id almak için (#)
console.log(document.querySelector("#btn"))

//? class almak için (.)
console.log(document.querySelector(".item-list"))

//? tag almak için
console.log(document.querySelector("li")) //? ilk gördugu elementi secer

//? CSS selectorleri querySelector ile kullanılabilir.
const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3)

const xyz = document.querySelector(".item-list ul li:nth-child(3)")
xyz.style.backgroundColor = "gray"


//* ========================================
//*             querySelectorAll()
//* ========================================
// odd ve even var tek ve cıft lerı secmek ıçın

const liste = document.querySelectorAll(".item-list .list")
console.log(liste) //? NodeList

const listee = document.querySelectorAll(".item-list .list(even)")
console.log(listee);

//* querySelectorAll bir nodelist dondurur. Nodelist dahili olarak forEach metodunu barindirir. Ama istenirse spread veya Array.from() ile yine Array'e donusum yapilabilir.
liste.forEach((li) => console.log(li.innerText))
