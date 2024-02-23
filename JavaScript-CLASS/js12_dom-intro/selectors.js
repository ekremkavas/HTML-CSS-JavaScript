


console.log("***** SELECTORS *****")

document.title = "FS16 🚧"

// document objesıyle baslangız sayfa ısmımı değiştirdim




//*===========================================
//*            getElementById()
//*===========================================
// Bir HTML elementini İd göre secmenizi sağlar

// getElementById() metodu, belirtilen bir ID'ye sahip olan bir HTML elementini seçmek için kullanılan bir DOM yöntemidir. Bu metodun kullanımı oldukça yaygındır ve genellikle belirli bir elemente erişmek veya onunla etkileşimde bulunmak için kullanılır.

console.log(document.getElementById("add-new-item"))

//** getElementById*******/ 

//id'si add-new-item olan elementi secer
const headerText = document.getElementById("add-new-item")
console.log(headerText)

// secilen elementin style propertysini manipule ettik
//? her sey key-value şeklinde yazılır.
// yukarda add-new-item i headerText e atadık
headerText.style.color = "blue"
headerText.style.backgroundColor = "yellow"
headerText.style.border = "2px solid red"
//! NOTE: property 'ler de kebap-case değil camelCase notasyonu kullanılır.

//? NOTE
// headerText.style = "font-family: tahoma; font-size: 30px" //? CSS vari erişim

//** */ id'si btn olan elementi secer
const addBtn = document.getElementById("btn")
console.log(addBtn)

//** */ HTML elementlerininin İçerikleri okuma ve değiştirme
//?----------------------------------------
const htmlLi = document.getElementById("html-li")
console.log(htmlLi);
// seçip seçmediğimizi anlmak için console yazdırmakta fayda var
htmlLi.style.color = "red"

//bir text elementinin içeriği aşağıdaki attribute'ler ile degisitirlebilir.

//***** textContent, innerText, innerHTML******

console.log(htmlLi.textContent)
htmlLi.textContent = "HTML5"
htmlLi.textContent = "<h2>HTML5</h2>"

document.getElementById("js-li").innerText = "JS"
document.getElementById("js-li").innerText = "<h2>JS</h2>"

document.getElementById("react-li").innerHTML = "React JS"
document.getElementById("react-li").innerHTML =
  "<h2 style='color: blue'>REACT JS</h2>"

// innerHTML içinde HTML kodu varsa çalıştırır lakin textContent, innerText çalıştırmaz

//?! input'ların degerinin (Value ile)okunması/yazılması

const myInput = document.getElementById("input")
console.log(myInput.value)
//input olduğu için direk okunamaz value sı vardır value uzerınden okunur.İnputun ıcınde başlangıc degerı olursa gorursun

addBtn.value = "SUBMIT"




//*===========================================
//*         getElementsByTagName()
//*===========================================

// Belirli bir etikete sahip tüm elementleri seçmek ve onlarla işlem yapmak için kullanılır. 
//Örneğin, tüm <li> elementlerini seçip stil eklemek veya içeriklerini değiştirmek gibi.

const allLi = document.getElementsByTagName("li")

console.log(allLi) //? HTML Collection
// Array benzıyor ama degıl cunku bu yapı Js ıcınde bır yapı degıl DOM un kendı olusturdugu yapısı

// getElementsByTagName() yöntemi, belirli bir HTML belgesinde belirtilen etikete (tag) sahip tüm elementleri seçmek için kullanılan bir DOM yöntemidir. Bu yöntem, bir etikete sahip olan tüm elementleri bir HTMLCollection nesnesi olarak döndürür

// getElementsByTagName() yöntemi, belirtilen etikete sahip tüm elementleri döndürür. Ancak, döndürülen HTMLCollection canlı bir koleksiyondur, yani belirli bir anda elde edilen elementlerin bir listesidir. Yani, belirli bir etikete sahip yeni elementler eklenirse veya mevcut elementler kaldırılırsa, HTMLCollection otomatik olarak güncellenir.
// Döndürülen HTMLCollection, bir diziyi andırır, ancak tam olarak bir dizi değildir. Bunun anlamı, bazı dizi özelliklerinin (örneğin, forEach(), map(), filter() gibi) doğrudan uygulanamayacağıdır.

//?HTML collection'daki her bir elemente indisleme ile erişilebilir.
console.log(allLi[1].textContent)
allLi[2].textContent = "JS-React"

//? Tplu bir şekilde erişim için for yapıları kullanılabilir.
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
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

// getElementsByClassName() yöntemi, belirli bir HTML belgesinde belirtilen bir sınıfa sahip tüm elementleri seçmek için kullanılan bir DOM yöntemidir. Bu yöntem, bir sınıfa sahip olan tüm elementleri bir HTMLCollection nesnesi olarak döndürür

const myList = document.getElementsByClassName("list")
console.log(myList) 
// list class'ındakılerı getırır
//? HTML Collection

// Kullanım Senaryoları:
// Belirli bir sınıfa sahip tüm elementleri seçmek ve onlarla işlem yapmak için kullanılır. Örneğin, belirli bir sınıfa sahip olan tüm elementlerin stillerini değiştirmek veya içeriklerini güncellemek gibi.

myList[0].innerText = "HTML Dersleri"

//? Ornek
document.getElementsByClassName("item-list")[0].style.color = "hotpink"






//* ========================================
//*              querySelector()
//* ========================================

// ! Query Selector ile id, tag, class seçilebilir
.
// querySelector() yöntemi, CSS seçicileri kullanarak belirli bir HTML belgesinde bir veya daha fazla elementi seçmek için kullanılan bir DOM yöntemidir. Bu yöntem, belirtilen CSS seçicisine uyan ilk elementi döndürür. 
//! Eğer hiçbir element bulunamazsa "null" döner. bu secici akısta gördügü ilk elementi secer.

//? Dikkat Edilmesi Gerekenler:

// querySelector() yöntemi, CSS seçicilerini kullanarak elementleri seçmek için kullanılır. Bu, id, sınıf, etiket, nitelik seçicileri gibi çeşitli CSS seçici türlerini kullanmanıza olanak tanır.
// Yöntem, belirtilen CSS seçicisine uyan ilk elementi seçer. Eğer birden fazla element seçmek istiyorsanız querySelectorAll() yöntemini kullanabilirsiniz.
// Seçici, CSS seçici diline uygun olmalıdır. Örneğin, "#myDiv" bir id seçicisi, ".content" bir sınıf seçicisi, "p" bir etiket seçicisi gibi.

//? Kullanım Senaryoları:

// Belirli bir CSS seçiciye uyan ilk elementi seçmek için kullanılır. Örneğin, belirli bir id'ye sahip bir elementi veya belirli bir sınıfa sahip olan bir elementi seçmek için kullanılabilir.
// Tek bir element seçmek için kullanılır ve querySelectorAll() metodu kullanılmadan daha spesifik bir seçim yapılmasını sağlar.

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
//*              querySelectorAll()
//* ========================================

//querySelectorAll() yöntemi, CSS seçicileri kullanarak belirli bir HTML belgesinde tüm uygun elementleri seçmek için kullanılan bir DOM yöntemidir. Bu yöntem, belirtilen CSS seçicisine uyan tüm elementleri NodeList nesnesi olarak döndürür

const liste = document.querySelectorAll(".item-list .list")
console.log(liste) //? NodeList

//* querySelectorAll bir nodelist dondurur. Nodelist dahili olarak forEach metodunu barindirir. Ama istenirse spread veya Array.from() ile yine Array'e donusum yapilabilir.
liste.forEach((li) => console.log(li.innerText))

//? Dikkat Edilmesi Gerekenler:

// querySelectorAll() yöntemi, CSS seçicilerini kullanarak elementleri seçmek için kullanılır. Bu, id, sınıf, etiket, nitelik seçicileri gibi çeşitli CSS seçici türlerini kullanmanıza olanak tanır.
// Yöntem, belirtilen CSS seçicisine uyan tüm elementleri seçer ve NodeList olarak döndürür. Bu NodeList, bir dizi benzeri bir nesnedir, ancak tam olarak bir dizi değildir ve bazı dizi özelliklerini (örneğin, forEach(), map(), filter() gibi) doğrudan uygulanamaz. Ancak, dizi gibi davranmak için NodeList nesnesini bir diziye dönüştürmek mümkündür.


//? Kullanım Senaryoları:

// Belirli bir CSS seçiciye uyan tüm elementleri seçmek için kullanılır. Örneğin, belirli bir sınıfa sahip olan tüm elementleri veya belirli bir etikete sahip olan tüm elementleri seçmek için kullanılabilir.
// Birden fazla elementi seçmek ve her biriyle toplu işlemler yapmak için kullanılır. Örneğin, tüm seçilen elementlerin stillerini değiştirmek veya içeriklerini güncellemek gibi.