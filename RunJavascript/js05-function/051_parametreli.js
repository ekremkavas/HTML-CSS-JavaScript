//! PARAMETRELİ FONKSİYON
//! 2-Function Expression (Fonksiyon İfadesi):


function yazdir(isim,soyisim,){ //metodu tanımladık
    console.log(isim + " " + soyisim);
}
// metodu çağırdık invoke
yazdir("Ekrem", "Kodlama_Kervanı");

// return sayi % 2 === 0 ? "Cift" : "Tek";
// var ve function declaration hoisted , digerleri degil 
//? **************KÜP ALMA*****************

// yukarda da cağırsam gelir (hosted)
function kupAlma(rakam) {
    console.log(rakam * rakam * rakam);
}
kupAlma(6)


//? ***********Yaş KONTROLÜ****************

let yas = Number(prompt("yaşınızı giriniz"));

function  kontrolEt(yas) {
    if (yas > 18){
        console.log("ehliyet sınavına girebilirsiniz");
    }else{
        console.log("ehliyet sınavına girmeye yaşınız uygun değil");
    }
}
kontrolEt(20);