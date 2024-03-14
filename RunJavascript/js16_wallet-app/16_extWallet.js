//sayfayı refresh ettıgımızde bilgileri tutuyor_LOCAL STORAGE JSON STRING-JSON PARS
//ana sayfayı/windows) kapattıgımızda-session stroge

console.log("başlıyoruz");

//!SELECTÖRLER

const ekleBtn = document.getElementById("ekle-btn");
// console.log(ekleBtn); adım 1
const gelirInput = document.getElementById("gelir-input");
// console.log(gelirInput); adım 2
const ekleFormu = document.getElementById("ekle-formu"); //adım 8
const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")
//adım 11 3alanı sectık


//!VARİABLES

let gelirler = 0; //ADIM 3







//! EVENT LİSTENER

window.addEventListener("load", () =>{
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    gelirinizTd.textContent = gelirler
})
//adım 13 Sayfa yenılendıgınde localstrogeden getıten ıle gelırlerı getır




ekleFormu.addEventListener("submit", (event) => {
  //ADIM 4
  // Adım-9 click yerıne submit yazdık
  //ekleBtn yerıne de ekleFormu yazdık
  event.preventDefault(); //aDIM 6
  gelirler = gelirler + Number(gelirInput.value); //adım 5
  console.log(gelirler);
  //*formun default özellıgı submittir gönderir ve yenıler(sıfırlar)bu html de form elementı ıcınde oldugu ıcın default ozellıgını engellememız lazım e.preventDefault() bunu yapar
  //HTML TARAFINDAN gelen verı strıng olarak algılanır 100 ve 250 eklemeye calıstıgında concanatet(birleştirme ) yapar 100250 yazar
  //*ekle formunu ıncelı orda type number mın max degerlerı verılmıs
  //?gelirInput.value = "" //ADIM7 vazgectık
  //Value degerı sıfırladık bu value yakalamaya tekde uygun ama komple formun her bırınde ugrasmamamk ıcın FORMUN RESET özellıgını kullanacagız
  ekleFormu.reset();
  //ADIM 10
  //kaybolmasın dıye localstorge iletelim bunu, sonra ekrana basalımm

  localStorage.setItem("gelirler", gelirler);
  //hangi isimde göndermek istiyorsun ,neyi göndermek istiyorsun

//   ADIM 12 
gelirinizTd.textContent = gelirler //doma bastık

});



//!HARCAMA FORMU
// adım 14
const harcamaFormu = document.getElementById("harcama-formu")
console.log(harcamaFormu);
const tarihInput = document.getElementById("tarih") 
const miktarInput = document.getElementById("miktar") 
const harcamaAlaniInput = document.getElementById("harcama-alani")

const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

//adım 15 form oldugu ıcın submit le dinleyecegız

harcamaFormu.addEventListener("submit",(e) =>{
    e.preventDefault()
    //bu harcama formu cesıtlı degerlerden olustugu ıcın obje olarak tutmak mantıklı
    const yeniHarcama = {
        tarih : tarihInput.value,
        miktar : miktarInput.value,
        harcamaSebebi : harcamaAlaniInput.value,
        id : new Date().getTime //gettime 1970 den gerı sayarak mılı sn ler ıd uretır
    }
    console.log(yeniHarcama);
    harcamaListesi.push(yeniHarcama)
    localStorage.setItem("harcamalar",JSON.stringify(harcamaListesi))
    //adım 16 localstroge objelerı tutamaz o yuzden strınglestırmek lazım harcamalar locale yazıldı sıra doma yazmakta



    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()
    //valueAsDate tarih seklınde olan bır ınputu yakalar new date o gunku tarıhı standart ınput alanına koyar

} )

//!harcamayiDomaYaz


const harcamayiDomaYaz = ({id, miktar, tarih, alan}) =>{

    // const {id, miktar, tarih, alan} = yeniHarcama
    // console.log(id, miktar, tarih, alan)
 
    //! 1. yöntem (Eski ve güvenlik açığı nedeniyle kullanılmaması gereken)
    // harcamaBody.innerHTML += `
    //     <tr>
    //         <td>${tarih}</td>
    //         <td>${alan}</td>
    //         <td>${miktar}</td>
    //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    //     </tr>
    
    // `
    //^ innerHTML kullandığımızda aşağıdaki kodları harcama alanına yazarsak istemediğimiz şekilde bir tablo düzeni ile karşılaşırız.
    //^ <h2>Hello World!</h2><p>Have a nice day!</p>
    //^ <img src="https://5.imimg.com/data5/VK/EK/UG/SELLER-101818061/danger-signs-500x500.jpg">

    //! 2. yöntem
    const tr = document.createElement("tr")

    const appendTd = (content)=>{
        const td = document.createElement("td")
        td.textContent = content;
        return td
    }

    const createLastTd = () =>{
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id = id
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button"
        td.appendChild(iElement)
        return td


    }

    tr.append(
        appendTd(tarih), //tarih td si
        appendTd(alan), //alan td si
        appendTd(miktar), //miktar td si
        createLastTd() // Çöp kutusu ve id yi ekler
    )
    
    harcamaBody.append(tr) //& son girileni alta ekler
    // harcamaBody.prepend(tr) //& son girileni öne ekler
    
}

//& hesaplaVeGuncelle

const hesaplaVeGuncelle = ()=>{

    const giderler = harcamaListesi.reduce(
        (toplam, harcama) => toplam + Number(harcama.miktar),0
    )

    // console.log(giderler)

    giderinizTd.textContent = giderler
    gelirinizTd.textContent = gelirler
    kalanTd.textContent = gelirler - giderler
}



harcamaBody.addEventListener("click",(e)=>{
    // console.log(e.target.classList.contains("fa-trash-can"))

    if (e.target.classList.contains("fa-trash-can")) {
//contaıns ıcerıyorsa demek cop kutusu resmı fa-trash-can
        e.target.parentElement.parentElement.remove()
        const id = e.target.id 
        harcamaListesi = harcamaListesi.filter((harcama)=> harcama.id != id)
        // console.log(harcamaListesi)
        localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
        
    }

    
})

temizleBtn.addEventListener("click",()=>{
    if (confirm("Tüm veriler silinecek. Devam etmek istiyor musun?")) {
        harcamaListesi = []
        gelirler = 0
        harcamaBody.innerHTML = ""
        // localStorage.clear() // Tüm localstorage i siler
        localStorage.removeItem("gelirler") 
        localStorage.removeItem("harcamalar") 
        hesaplaVeGuncelle()
        
    }
})
