//sayfayı refresh ettıgımızde bilgileri tutuyor_LOCAL STORAGE JSON STRING-JSON PARS
//ana sayfayı/windows) kapattıgımızda-session stroge

console.log("başlıyoruz");

//!SELECTÖRLER

const ekleBtn = document.getElementById("ekle-btn")
// console.log(ekleBtn); adım 1 
const gelirInput = document.getElementById("gelir-input")
// console.log(gelirInput); adım 2
const ekleFormu = document.getElementById("ekle-formu") //adım 8


//!VARİABLES

let gelirler = 0 //ADIM 3

//?EKLE FORMU

ekleFormu.addEventListener("submit", (event) =>{ //ADIM 4
    // Adım-9 click yerıne submit yazdık 
    //ekleBtn yerıne de ekleFormu yazdık
    event.preventDefault() //aDIM 6
    gelirler=gelirler + Number(gelirInput.value) //adım 5
    console.log(gelirler);
    //*formun default özellıgı submittir gönderir ve yenıler(sıfırlar)bu html de form elementı ıcınde oldugu ıcın default ozellıgını engellememız lazım e.preventDefault() bunu yapar
    //HTML TARAFINDAN gelen verı strıng olarak algılanır 100 ve 250 eklemeye calıstıgında concanatet(birleştirme ) yapar 100250 yazar
    //*ekle formunu ıncelı orda type number mın max degerlerı verılmıs
    //?gelirInput.value = "" //ADIM7 vazgectık
    //Value degerı sıfırladık bu value yakalamaya tekde uygun ama komple formun her bırınde ugrasmamamk ıcın FORMUN RESET özellıgını kullanacagız
    ekleFormu.reset()
})

//ADIM 10
//kaybolmasın dıye localstorge iletelim bunu, sonra ekrana basalımm