//şimsek simgesini tıkla gey yazan yerın yanına urlapi yapıştır send dedıgınde alta haberlerı ceker (thunderclınt uygulması)
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Veri alınamadı:', error);
    }
  }
  
  fetchData();

//! _________________________________________________

async function fetchDataWithErrorHandling() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('API yanıt vermedi.');
      }
      const data = await response.json();
      console.log('Veri:', data);
    } catch (error) {
      console.error('Hata:', error.message);
    }
  }
  
  fetchDataWithErrorHandling();

 //! ________________________________________________

 async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Hata:', error);
    }
  }
  
  fetchData();

  //! ________________________________________________
 
  async function fetchDataWithErrorHandling() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/999');
      if (!response.ok) {
        throw new Error('Veri bulunamadı.');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Hata:', error.message);
    }
  }
  
  fetchDataWithErrorHandling();
  
 //! ________________________________________________

const getİstekYeni = async () => {
  //!parça parça yazımı best practices o yüzden yazdık
  //*   https://newsapi.org/v2/top-headlines?country=tr&apiKey=ccdd9fe450ef48d480be0d234470aa1c&category=technology
  //TEK PARÇA HALİNDE YUKARIDAKİ

  const BASE_URL = `https://newsapi.org/v2/`;
  //büyük harfle yazım sabit değişmeyecek anlmına gelir
  const API_KEY = `ccdd9fe450ef48d480be0d234470aa1c`;
  const queryString = `top-headlines?country=us&category=technology`;
  const URL = `${BASE_URL}${queryString}&apiKey=${API_KEY}`;

  const res = await fetch(URL);

  console.log(res);

  try {
    const data = await res.json(); //response değerini JSON laştırdık
    console.log(data); //datayıokuduk
    console.log(data.articles); // içindekı artıcle eriştik
  } catch (error) {
    console.log(error); //HATA başılacak
  }
};

getİstekYeni();



  