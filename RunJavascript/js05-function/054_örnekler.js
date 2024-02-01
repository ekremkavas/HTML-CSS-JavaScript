let metin = "Şuan Claruswayda eğitim almaktayım"

let harf =prompt("Harf giriniz")
// let sonuc = bul(harf)


function bul(harf){
    let toplam = 0
    for(let i = 0; i<metin.length; i++){
        if(metin.charAt(i) === harf){
            toplam += 1
        }
    }
    return toplam;
}
let sonuc = bul(harf)
alert("harf sayısı " + sonuc)
