//*========================================
//*             3 - FETCH API
//*========================================
//!network istedği atmamızı sağlar

//! Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.


//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

// let userData = ""
fetch("https://api.github.com/users") //GET İSTEĞİ
  .then((res) => {
    console.log(res);
    //? Fetch api'da hatayi bizim yakalamiz gerekiyor.
    if (!res.ok) {
      //responsive içerisindeki ok kısmı false ise demek
      throw new Error(`Something went wrong ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    // console.log(data)
    // userData = data
    // console.log(userData)
    showUser(data);
  })
  .catch((err) => displayError(err)); //BAŞARISIZ OLURSA BU BLOGA GİRER

// console.log(userData)

const showUser = (data) => {
  console.log(data);
  const userSection = document.getElementById("users");
  // userSection.innerHTML +=
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
