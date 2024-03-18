
// console.log("merhaba")
const getBtn = document.getElementById("button"); //!ADIM 1
// console.log("🚀 ~ getBtn:", getBtn) yakalayıp yakalamadıgımı clg ıle kontrol edıyorum

// const value = document.querySelector("#searchText").value;
//*inputun o anki değerini yakaladığı için sağlıklı çalışmaz.

const cardsDiv = document.getElementById("cards"); //!ADIM 8
// console.log("🚀 ~ cardsDiv:", cardsDiv)

// https://api.github.com/users/anthonyharold67/followers?per_page=100
const getFollowers = async (username) => { //!ADIM 5
  try {
    const response = await fetch( //!ADIM 6
      `https://api.github.com/users/${username}/followers?per_page=100`
    );

    console.log("🚀 ~ getFollowers ~ response:", response); 
    //!ADIM 7
    if (response.ok) { //res tamamsa datayı okunabılır hale getırmek ıcin json a çevir
      const data = await response.json(); //ne kadar süreceğini bilmiyorum jsonlaştırmak asekron bir ilem o yüzden await unutmamam gerekir
      console.log("🚀 ~ getFollowers ~ data:", data);
      // forEach & map farkı sorulur
      //* forEach => no return
      //? map => array return
      data.forEach((item) => createElem(item));
    } else {
      throw new Error("Kullanıcı bulunamadı");
    } //!console hata olur throw new error yazmazsan hatayı basar ama catch bloguna gırmez 
// forEach deger döndürmez dizi içinde gezinirsiniz - map de değer döner array
    
  } catch (error) {
    console.log(error);
  }
};
const createElem = (user) => {
//   console.log(user);
//   console.log(user.login);
  const { login, html_url, avatar_url } = user;
//   console.log(avatar_url);
  const newElem = `
  <div class="col">
        <div class="card">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${user.login}</h5>
            <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
        </div>
        </div>
    </div>
    `;

    cardsDiv.innerHTML += newElem; 
};

getBtn.addEventListener("click", () => { //!ADIM 2
  // console.log("butona tıklandı")
  cardsDiv.innerHTML = ""; //trim boşluk kırpar
  const value = document.querySelector("#searchText").value.trim(); //!ADIM 3 
  console.log("🚀 ~ getBtn.addEventListener ~ value:", value);
  if (value) { //!ADIM 4
    getFollowers(value);
  } else {
    alert("Lütfen bir kullanıcı adı giriniz!");
  }
});







