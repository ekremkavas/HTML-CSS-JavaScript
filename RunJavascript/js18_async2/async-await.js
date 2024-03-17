//*=================================================
//*               ASYNC-AWAIT
//*=================================================

//!AWAİT yapsını kullanmamız için mecburen ASYNC  bir fonksiyonun içersinde olmamız gerekiyor
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const getNews = async () => {
  //   https://newsapi.org/v2/top-headlines?country=tr&apiKey=ccdd9fe450ef48d480be0d234470aa1c&category=technology

  const BASE_URL = `https://newsapi.org/v2/`
  const API_KEY = `ccdd9fe450ef48d480be0d234470aa1c`
  const queryString = `top-headlines?country=us&category=technology`
  const URL = `${BASE_URL}${queryString}&apiKey=${API_KEY}`

  try {
    const res = await fetch(URL) //await koymazsak isteğin bitip bitmemesine bakmaz anlık olarak hemen çalıştırmaya çalışır

    //? Error handing hatayı yakalama
    if (!res.ok) {
      throw new Error(`${res.status}`)
    }
    const data = await res.json() //verıyı jasonlaştıdık
    dipslayNews(data.articles) //verının artıcle ulastık
  } catch (error) {
    const newsArticle = document.getElementById("news")
    newsArticle.innerHTML = `
        <img src="./img/404.png" alt="" />
    `
  }//hatayı ekrana 404 resmıyle basmak ıcın
}

const dipslayNews = (news) => {
  const newsArticle = document.getElementById("news")
  const defaultImage = "./img/404.png"

  news.forEach(({ urlToImage, url, content, title }) => {
    newsArticle.innerHTML += `
        <div class="card col-sm-6 col-md-4 col-lg-3"> 
            <img src="${
              urlToImage || defaultImage
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${content || "No Content"}</p>
                <a href="${url}" target="_blank" class="btn btn-primary">Detail</a>
            </div>
        </div>
    `
  }) //bootsrap kart yapısı kopyaladık yukarıda
}

getNews()
