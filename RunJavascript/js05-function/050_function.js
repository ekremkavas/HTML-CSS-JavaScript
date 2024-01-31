
//1-Function Decleration ile Tanımlama'da fomksiyonun yerinin önemi yok nereye yazarsanız orda çağırır

function Cenkeri(){
    console.log("Ben 5 yaşındayım");
}
//invoke (call)
Cenkeri(); 


// 2-Parametreli Function

function selamVer(mesaj){
    console.log(`Merhaba ${mesaj}`);
}
selamVer("Esat")
selamVer("Ekrem")

function topla(s1, s2){
    console.log("toplam :", s1 + s2);
}

topla(7,5)

