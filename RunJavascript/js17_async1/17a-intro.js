
//!Senkron işlemler sırayla gerçekleştirilirken
//*Asenkron işlemler görevlerin bağımsız olarak ve aynı anda gerçekleşmesine izin verir,arka planda çalışan işinizi engellenemeyen yardımcı API lar

//*=============================================
//*        1- Senkron-Asenkron Programlama
//*============================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.
//?Js aslında asenkron bir değildir yardımcı API sayesınde destekler
//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* ------------------------------------------------

//! SENKRON KOD

// const gecikme = (sure) => {
//   //? uzun süren bir kodu simüle ettik
//   const basla = new Date().getTime()
//   while (new Date().getTime() < basla + sure) {}
// }

// console.log("Senkron")
// alert("Blocking")
//? Senkron calismada bir komut cok uzun sürerse uygulamayı bloklar.
// console.time("timer")
// gecikme(2000)
// console.timeEnd("timer")

// console.log("FS16")

//* -----------------------------------------------


//! ASENKRON KOD

//*(setTimeout()) - Belirli sure sonraya zaman kurar,ve sonra çalışır

//zamana baglı her yerde setTimeout kullanılabılır mesela 5 sn sonra reklam cıksın gıbı
const timeoutID = setTimeout(() => { //sonra burası-4
  console.log("Timeout1 doldu");
}, 2000);
//?2000ms sonra komutları çalıştırıyor çalıştır demek

setTimeout(() => {
  console.log("Timeout2 doldu");
}, 1000); //daha sonra burası-3

console.log("Start"); //önce burası calıştı-1

setTimeout(() => { //en son burası 4 u sıfırladı bacground sıfırladı ekrana gelmedı
  clearTimeout(timeoutID);
}, 500);

console.log("Uygulama bitti"); //sonra burası-2



//! Asenkron (setInterval, clearInterval) - Periyodik bir aralik belirler
//asenkron kodların sıralı bir akışı yoktur yazdıgınız durumuna göre calısır
//? setInterval periodik aralıklarla timeout oluşturur
//!------------------------------------------------
// Her 1 saniyede bir "Merhaba dünya!" yazdıran basit bir setInterval örneği

let sayac = 0 //* burda sayac sayamaya devam eder  bu setinteval işlemleri bacground oldugu için eger if dışarı yazılırsa sıfırlamaz
const saydir =setInterval( () => { 
  console.log(++sayac);
  if (sayac >= 8) {
  clearInterval(saydir)
}
},1000)

//!--------------------------------------------------




setInterval(function() {
  console.log("Merhaba dünya!");
  }, 1000);

  //? Her 1 saniyede bir sayacı arttıran ve 5'e ulaştığında interval'i temizleyen örnek
let count = 0; // Başlangıç sayısı

function increaseCount() {
  count++; // Sayacı arttır
  console.log("Sayac:", count);

  if (count >= 5) {
    clearInterval(intervalID); // Sayac 5'e ulaştığında interval'i temizle
    console.log("Interval durduruldu.");
  }
}

// 1 saniyede bir increaseCount fonksiyonunu çağıran interval
const intervalID = setInterval(increaseCount, 1000);

//-----------------------------------------------------



//! Callback Hell (nested ve birbirine bagli callback'ler)

//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi"); //? veri isteği (req)
  setTimeout(() => {
    console.log("Sarah: Hello"); //? res geliyor
    setTimeout(() => {
      console.log("John: How Are you?"); //? veri gonder
      setTimeout(() => {
        console.log("Sarah:Fine and you?"); //?gondermeye baslaniyor
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? TARIHCE GELİŞİM
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise (Custom async kod yazmak için elverişli- Advance)
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
