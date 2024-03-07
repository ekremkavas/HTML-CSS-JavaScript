

const h2 = document.querySelector(".add-item h2") // class olursa secmek ıcın nokta sart
// console.log(h2);

//! mouseover:
//  Fare bir öğenin üzerine geldiğinde tetiklenir, ancak iç öğeler üzerinde gezinirken de tetiklenir.
h2.onmouseover = function(){
    // alert("mouse over çalıştı")
    h2.classList.add("red" , "bg-warning")
}

//! mouseout: 
// Fare bir öğenin üzerinden çıktığında tetiklenir, ancak iç öğeler üzerinde gezinirken de tetiklenir.
h2.onmouseout = function(){
    h2.classList.remove("bg-warning") // remove ilgili özelliği kaldırır
}

//!onload
//uygulamanın yuklendıkten sonra calısan kısımlarını tetıkleyen event

const body = document.querySelector("body")

body.onload = function(){
    // alert("Onload çalıştı")
    body.classList.add("bg-success")
    //sayfa yuklendıgınde arka plan yesıl olsun
}

const myInput = document.getElementById("input")

body.onload = function(){
    myInput.focus() //ınput alanına focuslansın

}

//!onclick

const addButton =document.getElementById("btn")

// addButton.onclick = function(){
//     alert("ekle tıklandı onclick çalıştı")
// }

// addButton.onclick = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.target.Id);
// } 
// arrow fonkısyon ılede yazılabılır
// target. vs dıyerek ıstedıgınız degerlerede ulasabılırsın consoleden


//** ÖNEMLİ UYGULAMA */ 
//**butona tıklandıgında ınputun ıcındekı degerın lıstemın altına yenı bır li elementı ıle yazmasını ıstıyorum
const ul = document.querySelector("ul")
// li yi ul ye append etmem lazım eklemem ıcın

addButton.onclick = function(){
    const li =document.createElement("li")
    li.textContent = myInput.value
    // console.log(li);
    ul.appendChild(li) 
    //li yı ul ıcınde append ettık
    myInput.value =""
    //yazdıktan sonra ınput alanı kalıyor ınputu boslatmak ıcın yapıyoruz

}
