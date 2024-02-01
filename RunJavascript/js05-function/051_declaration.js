//! 1-Function Decleration

//! PARAMETRESİZ  VE DEĞER DÖNDÜRMEYEN(VOİD) METOT TANIMLAMAK


//BASİC METOD TANIMI

    //* yazdırın içi paremetre kısmı burası


function yazdir(){

    //kodları buraya yaz tanımlamak ıstedıgın
  
    console.log("Cenkeri"); // metodu hazırladık consola cıktı vermez 
}
yazdir(); // tanımladıgım metodu calıstırmak ıstıyorum


//****************************************** */

function mod() {
    console.log(10 % 4);
}

mod();

//********************************************* */


//! PARAMETRELİ 

// function selamVer(cohort, ders) {
//   console.log(`Merhaba ${cohort} - ${ders} `)
// }

// selamVer("Cohort16", "Javascript")
// selamVer("Cohort15", "CSS")

// //? Ornek

// function topla(s1, s2) {
//   console.log("Toplam:", s1 + s2)
// }

// const num1 = +prompt("S1:")
// const num2 = +prompt("S2:")
// topla(num2, num1)

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
