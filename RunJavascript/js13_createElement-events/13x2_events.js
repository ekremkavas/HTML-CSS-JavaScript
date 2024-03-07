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