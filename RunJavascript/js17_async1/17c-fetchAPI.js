//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")

// let userData = ""
fetch("https://api.github.com/users") //GET İSTEĞİ
  .then((res) => {
    console.log(res)
    //? Fetch api'da hatayi bizim yakalamiz gerekiyor.
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`)
    }
    return res.json()
  })
  .then((data) => {
    // console.log(data)
    // userData = data
    // console.log(userData)
    showUser(data)
  })
  .catch((err) => document.write(err))

// console.log(userData)

const showUser = (data) => {
  console.log(data)
  const userSection = document.getElementById("users")
// userSection.innerHTML += 
}
