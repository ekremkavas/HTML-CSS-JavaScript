//* =================================================
//*                2- Promises
//* =================================================

//? Promise(Bir obje , newdate neyse promise böyle bir obje js kullanılan), asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, 
//*reject ise basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//! Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.


//****************************************************** */ 
console.log("Promise")
//?atacağım promise isteği başarlı bittiğinde resolve çalışacak
//?atacağım promise isteği başarsız bittiğinde reject çalışacak


// Basit bir Promise örneği
const promiseExample = new Promise((resolve, reject) => {
  // Asenkron bir işlem simüle edelim, örneğin 1 saniye sonra bir sonuç dönecek
  setTimeout(() => {
    // Rastgele bir sayı üretelim
    const randomNumber = Math.random();

    // Sayı 0.5'ten büyükse, işlem başarılı olmuştur
    if (randomNumber > 0.5) {
      resolve("İşlem başarılı!");
    } else {
      // Sayı 0.5'ten küçükse, işlem başarısız olmuştur
      reject("İşlem başarısız!");
    }
  }, 1000); // 1 saniye sonra işlem tamamlanacak
});

// Promise tamamlandığında ne yapılacağını belirleyelim
promiseExample.then((result) => {
  console.log("Promise başarılı:", result);
}).catch((error) => {
  console.error("Promise hatası:", error);
});






const request = new Promise((resolve, reject) => {
  const data = { name: "Can", surname: "Canan" } //? mock data

  const success = Math.floor(Math.random() * 5) //? 0 1 2 3 4

  if (success) {
    resolve(data)
  } else {
    reject("Something went wrong")
  }
})

request
  .then((res) => {
    //? basarili durumlari islemek icin then() metotlari kullanilr.
    console.log(res)
    return res
  })
  .then((data) => console.log(data.name)) //? zincirleme olarak kullanmak mümkündür. Ancak verinin bir sonraki then'e aktarilmasi gereklidir.
  .catch((err) => document.write(err)) //? hatayı handle etmek için catch kullanılr.

  //basarılı da bıtse basarısızz da bıtse calıstırmak ıstedıgın kod varsa bunu fınaly ıle basarbılırsın
  .finally(() => console.log("finally blogu her zaman calisir.")) //? baglatiyi sonlandirma
