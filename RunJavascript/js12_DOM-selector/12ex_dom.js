//1-butonu html den al
//2-butonu dinle
//3-tıklanırsa 
//4-artır yada azalt


const artirButon = document.querySelector(".arttir")
// console.log(artirButon);
const azaltButon = document.querySelector(".azalt")
console.log(azaltButon);
const rakam = document.querySelector("#numara")
console.log(rakam);

let sayac = 0;

artirButon.addEventListener("click", () => {
    // console.log("click artır çalışıyor", );
    sayac++
    rakam.innerHTML=`${sayac}`
})
//!arrow funcıon ıcıne yazılan (e) event anlamında event yazar ekrana basarsan nelerını kullanabılırsın gorursun artirButon.addEventListener("click", (event) => {
//     console.log("click artır çalışıyor",event.target );
// })