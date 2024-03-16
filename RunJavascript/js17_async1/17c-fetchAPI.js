//*========================================
//*             3 - FETCH API
//*========================================
//network istedği atmamızı sağlar

//! Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//* Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.
//* fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//! bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//?____________________________________________

//fetch("url") bunun ıcındekı API endpoints yanı adresı oluyor
//*Bunu direk fetch("url") böyle yazarsak bu GET isteği olur
//bunu yaptıktan sonra then zıncırlerı ıle verıyı ısleyebılıyorsunuz
//başarısız olursa catch() bloguna gırer
//en son ıstersenız finaly() bitişi bildirebilirsiniz
//ASENKRON yapıdır 2.kuyruga gider (1.si callback-2.si Microtask)
//Biz bazen serverdekı bilgileri cekmek isteriz GET isteği yaparız- CRUD(create-read-uptade-delete)
//Yazma isteği POST-Bazen patch yada push Update işlemi yaparız-DElete isteği atarız
//JSON.strigfy(data) datayı strigleştirir
//Başka bir istek için GET değilde başka istek söyle yapılır
//*           fetch ("url" , {
//*              method : 'POST',
//*              body : JSON.strigfy(data)
//*              header : {'X-auto-token' : 'abd23ft güvenlik şifresi'}
//*            })
//?____________________________________________
//! then() yöntemi, bir Promise'in başarılı olduğunda veya başarısız olduğunda yapılacak işlemleri tanımlamak için kullanılır. Yani, then() yöntemiyle, isteğin sonucu elde edilir ve bu sonuca göre uygun işlemler gerçekleştirilebilir.

//Biz bir istek attığımızda REQUESTS göndermiş oluyoruz o bize RESPONSES döndürüyor
//responsive kabuklu hali res.json da içine bakmış olduk json fonk responsive içimde farklı foksiyonlar barındırıyor
//?_________________________________________

console.log("fetch isteği");

fetch("https://api.github.com/users") //GET İSTEĞİ
  .then((response) => {
    console.log(response); //ham veri 
    //? Fetch api'da hatayi bizim yakalamiz, ok=true or false göre, gerekiyor.
    if (!response.ok) {
      //responsive içerisindeki ok kısmı false ise demek
      throw new Error(`Birşeyler ters gitti ${res.status}`);
    }//burdakı res status hata seklını belıtır ve burdan return eder
    return response.json(); // Ham veririnin jsonlaştırılmış hali
  })
  .then((data) => {
    // console.log(data)
    // userData = data
    // console.log(userData)
    showUser(data);
  })
  .catch((err) => displayError(err)); //BAŞARISIZ OLURSA BU BLOGA GİRER


  //* Yukarıdaki örnekte, fetch() fonksiyonu ile belirtilen URL'ye bir HTTP GET isteği gönderilir. Ardından, then() yöntemiyle, gelen cevap işlenir ve response.ok durumu kontrol edilir. Eğer cevap başarılıysa, JSON verisi alınır ve ikinci then() bloğunda bu veri kullanılır. Eğer cevap başarısızsa, catch() yöntemiyle hata işlenir.


// console.log(userData)

const showUser = (data) => {
  console.log(data);
  const userSection = document.getElementById("users");
  // userSection.innerHTML +=

//?______________________________________________

  //!EKRANA BASMAK İÇİN

  data.forEach((user) => {
    userSection.innerHTML += `
    <h1>${user.login}</h1>
    <img src="${user.avatar_url}" alt="" width="200px" />
    <h3>${user.html_url}</h3>
  `;
  });
};

const displayError = (err) => {
  const userSection = document.getElementById("users");
  userSection.innerHTML = `
  <h2>${err}</h2>
  <img src="./img/404.png" alt="error" />
`;
};
