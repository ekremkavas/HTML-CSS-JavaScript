

// ? yeni bir li elementi oluşturp doma eklmek istiyorum bunu js ile yapmak istiyorum
//? 1-YENİ BİR Lİ ELEMENTİ OLUŞTUR.
const newLi = document.createElement("li")
console.log(newLi); //
// ? 2-EĞER TEXT TABANLI BİR ELEMENT İSE TEXT DÜĞÜMÜNÜ OLUŞTUR.
const textLi = document.createTextNode("Go") 
// ?3-OLUŞTURULAN TEXT DÜĞÜMÜNÜ YENİ ELEMNTE BAĞLA (APPEND)
// ! önce new li ye bağlamamız lazım oluşturduğumuz texti.
newLi.appendChild(textLi) 
// ? 4- YENİ OLUŞTURULAN ELEMNETİ DOM TREEYE EKLE.
// ! en son doma bağlayacağız:

document.querySelector("ul").appendChild(newLi) 

// ? ÖRNEK: 2. BİR Lİ OLUŞTURALIM
const newLi2 = document.createElement("li");
newLi2.textContent = "C++";
const html = document.querySelector("ul li:nth-child(1)")
html.after(newLi2)
// ! MDN den baktık: element.before()  veya elemnet.after() bu şekilde önüne ve sonuna istediğimiz elemnti veya virgülle istediğimniz kadar element ekleyebiliriz.
// ? reactın önüne newli yi ekle yaptık
// element.before() veya elemnt.after() ile bir elementin önüne veya devamına eklemk mümkündür.
const react = document.querySelector("ul li:nth-child(4)")
react.before(newLi)  //bu şekilde go reactın önüne eklenmi,ş oldu.
// **********  Id ,Class gibi özellikleri atama   ************//
// ilgili elementlere ilgili attributleri verebiliriz.2 yöntem var:
// ?1- elemnt.attribute = "yeni değer"
// YAZMA
newLi.className = "list center bold red" //burda da birden fazla class verebiliriz.
newLi2.id = "new-li"
// newLi.type = "button"
newLi.name = "list"
// OKUMA
console.log(newLi.className);
// ? 2- satAttribute() bu methodla (atr ,değer) , getAtribute("atr")
// YAZMA
newLi2.setAttribute("class", "list ")
// !birden fazla class verebiliriz. yeni bir style.css oluşturduk orda red classı oluşturup burda da veridk.
newLi2.setAttribute("class", "list red bold")//kırmıxı rengini aldı
// OKUMA
console.log(newLi2.getAttribute("class"));
// bootstrapta da yapabiliriz.bootstarpta linki alıp html de head kısmına yapıştırdık.
newLi2.setAttribute("class", "list text-success bg-warning")
newLi.className = "text-success bg-danger"
// ?3- classList.add("","") eskiyi silmez üzerine eklker
newLi2.classList.add("border", "border-success", "border-5")
// !bunu silebiliyoruz da classlist.remove("","")
newLi2.classList.remove("bold", "border")
// ! içinde şu class bulunur mu bulunmaz mı bunu da sorgulayabilirz. dönüşü true veya false olur yani boolen nbir değer.classList.contains("")
console.log(newLi2.classList.contains("red"));
console.log(newLi2.classList.contains("text-success"));
// ? newli nin classlistlerine bak ve değiştir.varsa değiştirir. yoksa ekler. element.classlist.toggle("")
newLi.classList.toggle("center")
newLi2.classList.toggle("bold") //bold classı yoktu onu ekledi
// ********** YENİ BİR ELEMENT OLUŞTURMA (innerHTML) İLE ---- İLKEL YÖNTEM -GÜVENSİZ YÖNTEM------********//
// ?YENİ BİR İNPUT VE BUTTON EKLEMEYE ÇALIŞALIM BUNLAR DA BİR DİVİN İÇİNDE OLACAKLAR.ÖNCELİKLE NEYİN DEVAMINA EKLEYECEĞİZ ONA KARAR VERECEĞİZ. HTML SAYFASINDAKİ SON SECTİONDAN SONRA DİV İÇİNDE İNPUT VE BUTTON OLUŞTURMAK İSTiyoruz.o yüzden main seçtik.ama main seçince var olanlar silindi . bundan dolayoı inner.html den sonra += yaptık yani bundan önceki main gitmesin devamna eklensin.
// bu yöntemle sanki bir html kodu yazar gibi yapabiliriz.
document.querySelector("main").innerHTML += `
<div  class="d-flex gap-2">
<input type="text"  />
<button class="btn btn-danger">submit</button>
</div>
<div class="card mt-4 " style="width: 18rem;">
  <img src="https://cdn.pixabay.com/photo/2023/10/13/08/32/bird-8312424_640.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>