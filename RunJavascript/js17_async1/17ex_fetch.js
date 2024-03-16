//* fetch() fonksiyonu, belirtilen URL'ye bir HTTP isteği yapar ve bir Promise döndürür. Bu Promise, isteğin tamamlanmasıyla birlikte sonuçlanır ve isteğin sonucunu temsil eden bir Response nesnesiyle çözülür. then() yöntemi, bir Promise'in başarılı olduğunda veya başarısız olduğunda yapılacak işlemleri tanımlamak için kullanılır. Yani, then() yöntemiyle, isteğin sonucu elde edilir ve bu sonuca göre uygun işlemler gerçekleştirilebilir.

fetch('https://api.example.com/data')
  .then(response => {
    // Response işleme
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON verisini al
  })
  .then(data => {
    // JSON verisini kullanma
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

//!   fetch() fonksiyonu
//*   Yukarıdaki örnekte, fetch() fonksiyonu ile belirtilen URL'ye bir HTTP GET isteği gönderilir. Ardından, then() yöntemiyle, gelen cevap işlenir ve response.ok durumu kontrol edilir. Eğer cevap başarılıysa, JSON verisi alınır ve ikinci then() bloğunda bu veri kullanılır. Eğer cevap başarısızsa, catch() yöntemiyle hata işlenir


//! catch() yöntemi, 
// bir Promise zincirinin herhangi bir noktasında oluşan bir hatayı ele almak için kullanılır. Bir Promise zinciri boyunca hata oluştuğunda, zincirdeki sonraki then() zinciri atlanır ve zincir catch() bloğuna geçer. Bu, hata işleme ve kullanıcıya hatayı bildirme açısından oldukça kullanışlıdır.

fetch('https://api.example.com/data')
  .then(response => {
    // Response işleme
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // JSON verisini al
  })
  .then(data => {
    // JSON verisini kullanma
    console.log(data);
  })
  .catch(error => {
    // Hata işleme
    console.error('There was a problem with the fetch operation:', error);
    // Kullanıcıya hata mesajını göster
    alert('There was a problem fetching the data. Please try again later.');
  });

//   Yukarıdaki örnekte, catch() yöntemi ile hata durumu ele alınır ve konsola bir hata mesajı yazdırılır. Ayrıca, kullanıcıya da bir hata iletişim kutusu (alert) gösterilir. Bu sayede, kullanıcılar bir hata durumunda bilgilendirilir ve gereken işlemler yapılabilir.






