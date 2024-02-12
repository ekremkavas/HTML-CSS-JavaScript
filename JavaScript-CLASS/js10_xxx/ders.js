

/ -------OBJECT {}-----/


// data structure'dır --> veri yapısıdır,veri saklama yeridir.
 let ogrencilerİsim =["ahmet","ismet","saffet"]
 let ogrencilerSoyisim=["yılmaz","can","baki"]
 let ogrenciAdres = ["kadıköy","şeebinkarahisar","seferihisar"] //aslında bakıldığında tek başına array yeterli değil.bunları ayrı ayrı yapmak gerek ve mesel aahmetin bütün verilerine ulaşmak da aynı şekilde ayrı ayrı istemek zorunda kalabiliriz.bu şekilde verileir toplamak zor.
//  !NOTTT!!!  Karmaşık ve lişkili verilerin arraylarda saklanması ve erişimi zordur.
// obje içinde indisleme yok key ve valudan ulaşacağız.
// key-value (pair)
// property-value
// 1-) object literal yöntemiyle bir obje oluşturacağız
const kişi ={
    isim:"ahmet",soyisim:"yılmaz",kimlikNo:"14257589645",doğumTarihi:"01.01.1989",maas: 70000
}
// 1 -)okuma . notasyonu-->obje adı.key
console.log(kişi.isim);
// 2-)[] square bracet notasyonu
console.log(kişi["kimlikNo"]);

