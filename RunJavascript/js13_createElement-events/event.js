//* ====================================
//*                  EVENTS
//* ====================================

//? elementler üzerinde herhangi birşey olduğunda olan olaylardır js HTML Events w3Sholls da bakabilirsin

//*Tıklama (click): Kullanıcı bir öğeye tıkladığında tetiklenir

//*Yükleme (load): Bir belge veya bir resim tamamen yüklendiğinde tetiklenir.

//*Form gönderme (submit): Bir form gönderildiğinde tetiklenir.

//*Mouse hareketi (mousemove): Kullanıcının faresi üzerinde hareket ettiğinde tetiklenir.

//*Tuş basımı (keypress): Kullanıcı bir tuşa basarak bir öğe seçtiğinde tetiklenir

//*Geçiş (transitionend): Bir CSS geçişi tamamlandığında tetiklenir.

//*Belge yenileme (DOMContentLoaded): Bir HTML belgesi yüklendiğinde ve işlenirken tetiklenir.

// JavaScript ile bu olayları dinleyerek (event listening), kullanıcı etkileşimlerine yanıt verebilir ve dinamik web sayfaları oluşturabilirsiniz. Örneğin, bir butona tıklandığında bir işlevi çağırabilir veya bir form gönderildiğinde verileri işleyebilirsiniz.

// Event listening, JavaScript ile web sayfalarında kullanıcı etkileşimlerini dinlemek ve bu etkileşimlere yanıt vermek için kullanılan bir yöntemdir. Event listening, belirli bir DOM öğesinin (Document Object Model) bir olayı ("event") dinlemesini sağlar ve o olay tetiklendiğinde belirtilen bir işlevin çağrılmasını sağlar. İşte event listening için kullanılan bazı yöntemler:

// addEventListener(): Bu metod, bir DOM öğesine bir olay dinleyicisi ekler. Özellikle modern tarayıcılar tarafından desteklenir ve daha eski metod olan onclick, onmouseover gibi özelliklere tercih edilir. Kullanımı şu şekildedir:

// javascript
// Copy code
// element.addEventListener(event, function, useCapture);
// event: Tetiklenmek istenen olayın adı (örneğin, "click", "mouseover", "submit" gibi).
// function: Olay tetiklendiğinde çağrılacak işlev.
// useCapture (opsiyonel): Boolean bir değerdir ve olayların yakalanma (capture) veya bubbling aşamasında tetiklenip tetiklenmeyeceğini belirler.
// DOM öğesi üzerinde inline event handlers: HTML içinde DOM öğelerinin etkinlikleri için doğrudan on özelliklerini kullanabilirsiniz. Örneğin:

// html
// Copy code
// <button onclick="myFunction()">Click me</button>
// Ancak bu yöntem pek önerilmez, çünkü HTML ve JavaScript kodunun ayrı tutulması genellikle daha iyi bir uygulama yöntemidir.

// element.onclick: DOM öğelerinin bir olayı dinlemek için doğrudan bir on özelliği atanabilir. Ancak bu yöntem de pek tercih edilmez çünkü tek bir dinleyici eklemeye izin verir ve diğer olay dinleyicilerini üzerine yazar.

// javascript
// Copy code
// element.onclick = function() {
// click event handler
// };
// Bu yöntemler, web sayfalarında kullanıcı etkileşimlerini dinlemek ve işlemek için yaygın olarak kullanılır. addEventListener yöntemi genellikle tercih edilir çünkü aynı öğeye birden fazla olay dinleyicisi eklemeye izin verir ve daha esnek bir kullanıma sahiptir.

//! *****************************************

// işte JavaScript'te sık kullanılan bazı olay örnekleri:

// Click Event (Tıklama Olayı): Kullanıcı bir öğeye tıkladığında tetiklenir.

//? javascript

// document.getElementById("myButton").addEventListener("click", function() {
//     console.log("Button clicked!");
// });


// Mouseover Event (Üzerine Gelme Olayı): Fare bir öğenin üzerine geldiğinde tetiklenir.

//? javascript

// document.getElementById("myElement").addEventListener("mouseover", function() {
//     console.log("Mouse over the element!");
// });
// Mouseout Event (Öğenin Üzerinden Ayrılma Olayı): Fare bir öğenin üzerinden ayrıldığında tetiklenir.

//? javascript

// document.getElementById("myElement").addEventListener("mouseout", function() {
//     console.log("Mouse out of the element!");
// });
// Change Event (Değişiklik Olayı): Bir form öğesinin değeri değiştiğinde tetiklenir (input, select, textarea gibi).

// javascript
// Copy code
// document.getElementById("myInput").addEventListener("change", function() {
//     console.log("Input value changed!");
// });
// Submit Event (Gönderme Olayı): Bir form gönderildiğinde tetiklenir.

// javascript
// Copy code
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Sayfanın yenilenmesini engelle
//     console.log("Form submitted!");
// });
// Keypress Event (Tuş Basımı Olayı): Bir tuşa basıldığında tetiklenir.

// javascript
// Copy code
// document.addEventListener("keypress", function(event) {
//     console.log("Key pressed: " + event.key);
// });
// Bu örnekler, web sayfalarında sık kullanılan bazı olayların nasıl dinleneceğini ve işleneceğini göstermektedir. Olaylar, kullanıcı etkileşimlerini algılamak ve web sayfasının davranışını değiştirmek için çok önemlidir.

//! ****************************************
//?KLAVYE EVENTLERİ

//? 1. **keydown**: Bir tuşa basıldığında tetiklenir.Hepsinde çalışr ,harf rakam ,şekil

// document.addEventListener("keydown", run)

// function run{
//   console.log("Bir tuşa basıldı: " + run.key);
// };

//? 2. **keypress**: Bir karakter girildiğinde tetiklenir (bir tuş basıldığında bir karakter oluşturuyorsa).Harf ve rakamları algılar, diğer şekil ve tuşları algılamaz,shift ,ok gibi

// ÖRNEK:
// const cardTitle = document.querySelectorAll(".card-title")[0];

// console.log(input);
// input.addEventListener("keypress" ,run);

// function run(e){
//   console.log(e.target.value);
// }
//inputun ıcındekı degerı okuyabılmemız ıcın target ve value yı kullandık


//? 3. **keyup**: Bir tuş serbest bırakıldığında tetiklenir.Tuştan elini kaldırdığında çalışır

//! *****************************************

// focus: Bir form öğesi (input, textarea, vb.) odaklandığında tetiklenir. Kullanıcı bu öğeye tıkladığında veya klavye üzerinde gezinirken (tab tuşuyla) bu olay tetiklenir.

// blur: Bir form öğesi odaktan çıktığında tetiklenir. Kullanıcı bir form öğesinden başka bir yere tıkladığında veya tab tuşuyla başka bir yere geçtiğinde bu olay tetiklenir.

// copy: Kullanıcı bir metni kopyaladığında (Ctrl+C veya sağ tıklama menüsüyle) tetiklenir. Bu olay, metin seçildiğinde veya kullanıcı kopyala komutunu verdiğinde gerçekleşir.

// paste: Kullanıcı bir metni yapıştırdığında (Ctrl+V veya sağ tıklama menüsüyle) tetiklenir. Bu olay, kullanıcı metin alanına bir metin yapıştırdığında gerçekleşir.

// cut: Kullanıcı bir metni kestiğinde (Ctrl+X veya sağ tıklama menüsüyle) tetiklenir. Bu olay, kullanıcı metin alanında bir metni keserse gerçekleşir.

// select: Kullanıcı bir metni seçtiğinde tetiklenir. Bu olay, kullanıcı bir metin alanında bir metni fareyle veya klavyeyle seçtiğinde gerçekleşir.


//! *****************************************

console.log("****** EVENTS *******")


const yazdir = () => document.write("Hello FS16")
yazdir()

//! Selectorler
const h2 = document.querySelector(".add-item h2")
const body = document.querySelector("body")
const myInput = document.getElementById("input")
const addButton = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")



//! Event tanımlamalari

//? sık kullanılan mouse eventleri
// click: Kullanıcı bir öğeye tıkladığında tetiklenir.

// dblclick: Kullanıcı bir öğeye çift tıkladığında tetiklenir.

// mousedown: Fare düğmesine basıldığında tetiklenir.

// mouseup: Fare düğmesinden el kaldırıldığında tetiklenir.

// mouseover: Fare bir öğenin üzerine geldiğinde tetiklenir.

// mouseout: Fare bir öğenin üzerinden ayrıldığında tetiklenir.
//mouseenter , mouseleave de bak
// mousemove: Fare bir öğenin üzerinde hareket ettiğinde tetiklenir.

// contextmenu: Fare sağ düğmesine tıklandığında tetiklenir (sağ tıklama).

//* mouse h2 elemenitini üzerine geldiğinde tetiklenir
h2.onmouseover = function () {
  //   h2.style.color = "red"
  h2.classList.add("red", "center")
}

//* mouse h2 elemenitinin üzerinden ayrıldığınıda tetiklenir
h2.onmouseout = () => {
  h2.classList.remove("red", "center")
}

//* DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
body.onload = function () {
  myInput.focus()
}
//? DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim, link gibi içeriklerin yüklenmesini beklemez)
// body.DOMContentLoaded = function () {
//     myInput.focus()
// }

addButton.onclick = (e) => {
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)
  //   console.log(e.target.id, e.target.name)
  myInput.focus()

  if (!myInput.value.trim()) {
    alert("Lutfen bir icerik giriniz")
    return
  }

  const li = document.createElement("li")
  li.textContent = myInput.value
  ul.appendChild(li)
  myInput.value = ""
}

//? Form içerisindeki submit butonuna her basildiğinda bu onSubmit event 'i tetiklenir.
//? submit eventi otomatik olarak enter tuşunun kullanımı sağlar.
// form.onsubmit = function (e) {
//   e.preventDefault() //? submit işlemin temel ozelliklerini (formu silmek, sayfayı refresh yapmak gibi) iptal
//  console.log(e.target)

//   myInput.focus()

//   if (!myInput.value.trim()) {
//     alert("Lutfen bir icerik giriniz")
//     return
//   }

//   const li = document.createElement("li")
//   li.textContent = myInput.value
//   ul.appendChild(li)
//   myInput.value = ""
// }

//? input üzerinde klavyeden bir tusa basildiğinda tetiklenir.
myInput.onkeydown = function (e) {
  //   console.log(e.code)
  if (e.code === "Enter") {
    addButton.click()
  }
}
