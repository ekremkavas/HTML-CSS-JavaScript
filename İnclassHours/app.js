
// console.log("merhaba")
const getBtn = document.getElementById("button");
// console.log("🚀 ~ getBtn:", getBtn)

// const value = document.querySelector("#searchText").value;
//*inputun o anki değerini yakaladığı için sağlıklı çalışmaz.

const cardsDiv = document.getElementById("cards");
// console.log("🚀 ~ cardsDiv:", cardsDiv)

// https://api.github.com/users/anthonyharold67/followers?per_page=100
const getFollowers = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/followers?per_page=100`
    );

    console.log("🚀 ~ getFollowers ~ response:", response);
    if (response.ok) {
      const data = await response.json();
      console.log("🚀 ~ getFollowers ~ data:", data);
      // forEach & map farkı sorulur
      //* forEach => no return
      //? map => array return
      data.forEach((item) => createElem(item));
    } else {
      throw new Error("Kullanıcı bulunamadı");
    }
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

getBtn.addEventListener("click", () => {
  // console.log("butona tıklandı")
  cardsDiv.innerHTML = "";
  const value = document.querySelector("#searchText").value.trim();
  console.log("🚀 ~ getBtn.addEventListener ~ value:", value);
  if (value) {
    getFollowers(value);
  } else {
    alert("Lütfen bir kullanıcı adı giriniz!");
  }
});







