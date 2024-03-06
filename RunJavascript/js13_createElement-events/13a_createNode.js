

console.log("**** CREATE NODE ****")

//! js tarafından yeni bir element oluşturmak istiyorsak İKİ ALTERNATİFİMİZ VAR:

// 1- innerhtml --> az güvenlikli

// 2.Sİ AŞAĞIDAKİ DÖRT YÖNTEM:



//! 1- yeni bir li elementi olustur
const newLi = document.createElement("li")
// createElement içine oluşturacağımız elementin etiketi yazılır divse div  

//**burda yeni li elemnti oluşturduk ama içeriği boş, hiç bir yere bağlı değil yani doma bağlı değil bağımsız.içeriğinde bilgi de yok . şimdi buna bir de text oluşturalım:
//document.createElement("html elemnti ismi mesala --> "div" dersek bu bize bir div oluşturr, "a","section" vs. bunları belirterek istediğimiz elementi oluşturabiliriz.)--> domda tanımlanmış methot .bir element oluşturabiliyoruz.
// ama bu yeterli değil. o element oluştuktan sonra o elemnt bir yazı elemntiyse h1 gibi p gibi div section gibi yani içersinde textnode olan (first child)

// console.log(newLi);



//! 2- Eger text tabanlı bir element ise text dugumunu olustur
const textLi = document.createTextNode("Python")

//*içerik oluşturdk ama hala göremiyoruz. çünkü hala bir yere bağlı değil.
// bu textNode newli ye bağlammaız lazım bunun için 3.adaım appendChild yapacağız



//! 3- Olusturulan text dugumunu yeni elemente bagla (append)
newLi.appendChild(textLi)
//*oluştu içerik ama bu Tree(DOM) ile deilişkindirilmesi lazım ona da bağlayalım

// console.log(newLi);


//!4- Yeni olusan elementi DOM tree'ye ekle.
document.querySelector("ul").appendChild(newLi)

// document.querySelector("body").appendChild(newLi) // eklendi consoleda elemnt kısmına baktığımızda eklendiğini gördük ama en son akış  neredeyse oraya ekledi body seçtiğimniz için.

//  UL'NİN SONUNA EKLMEK İSTİYORUZ. O YÜZDEN BODY YERİNE UL YAZACAĞIZ.ul yazan yerde body vardı , öyle olunca yalnıs tree e ekledı
// artık ulnin en sonunda go görmüş oluyoruz.






// ************************************************

//?**** 2. bir li olusturalım

const newLi2 = document.createElement("li")
newLi2.textContent = "C++"
// console.log(newLi2);

// ! MDN den baktık: element.before()  veya elemnet.after() bu şekilde önüne ve sonuna istediğimiz elemnti veya virgülle istediğimniz kadar element ekleyebiliriz.

// element.before() veya elemnt.after() ile bir elementin önüne veya devamına eklemek mümkündür.

// ? reactın önüne newli yi ekle yaptık

const react = document.querySelector("ul li:nth-child(4)")
react.before(newLi2, newLi)

// ****************************************************





//!-- ID, CLASS GIBI OZELLIKLERI ATAMA ---

//! 1- element.attribute = "yeni deger"

//* yazma
//burda da birden fazla class verebiliriz.
newLi.className = "list bold text-success bg-warning"
newLi.id = "new-li"
newLi.name = "list"

//* okuma
console.log(newLi.className)

//! 2- setAttribute(atr,"deger") getAttrbute("atr")

// setAttribute yazar getAttribute okur
newLi2.setAttribute("class", "list red bold")

console.log(newLi2.getAttribute("id"))
console.log(newLi2.getAttribute("class"))


//! 3- Yontem (classList)
newLi.classList.add("border", "border-danger", "border-3")

newLi.classList.remove("bold", "text-success")

console.log(newLi2.classList.contains("red"))

newLi.classList.toggle("red")
newLi2.classList.toggle("red")



//** - YENI BIR ELEMENT OLUSTURMA (InnerHTML)--****
// ?YENİ BİR İNPUT VE BUTTON EKLEMEYE ÇALIŞALIM BUNLAR DA BİR DİVİN İÇİNDE OLACAKLAR.ÖNCELİKLE NEYİN DEVAMINA EKLEYECEĞİZ ONA KARAR VERECEĞİZ. HTML SAYFASINDAKİ SON SECTİONDAN SONRA DİV İÇİNDE İNPUT VE BUTTON OLUŞTURMAK İSTiyoruz.o yüzden main seçtik.ama main seçince var olanlar silindi . bundan dolayoı inner.html den sonra += yaptık yani bundan önceki main gitmesin devamna eklensin.
// bu yöntemle sanki bir html kodu yazar gibi yapabiliriz.
document.querySelector("main").innerHTML += `
    <div class="d-flex gap-2">
        <input type="text" class="form-control"/>
        <button class="btn btn-danger">Submit</button>
    </div>

    <div class="card mt-4" style="width: 13rem;">
        <img src='https://images.pexels.com/photos/19789774/pexels-photo-19789774/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=300' class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`
