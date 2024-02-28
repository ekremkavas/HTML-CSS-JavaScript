/ ***********EVENTS****************//
// ! event tanımlamaları ilk yöntem
//? ÖRNEĞİN:    ADD NEW ITEM  başlığının üzerine mouse geldiğinde bir olay istiyorum bir değişiklik istiyorum .MESELA BİR ALERT ÇIKSIN İSTİYORUM.
// selektorler
 const h2 =  document.querySelector(".add-item h2")


//  event tanımlamaları
// *mouse h2 elemntinin üzerine geldiğinde tetiklenir.
h2.onmouseover = function(){
    alert("mouse over")
 }
h2.onmouseover = function(){
    h2.style.color ="red"
 }
// birden fazla özellik için: classlist.add("","")
 h2.onmouseover = function(){
    h2.classList.add ("red","center") //bu şekilde oluyor ama geri düzelmiyor classlarını aldığı gibi kalıyor.
 }
 // mouse ayrıldığında ikinci bir event yazabiliriz. onmouseout
// *arrow function ile yaptık bunu da
h2.onmouseout=()=>{
    h2.classList.remove("red","center")
}
// ?örnek: onload eventi
const body = document.querySelector("body")
body.onload=function(){
    alert("uygulama yüklendi...")
}


// **DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
 // uygulama hemöen yüklendikten sonra inputun fokuslanmasını istiyorum.yani içerik yüklendikten sonra onload olduktan sonra hemen inputa yazab,ileyim.
const myinput = document.getElementById("input")
body.onload=function(){
    myinput.focus()
}
// ?NOT DOMContentLoaded (metin v.b içerikler yüklenince tetiklenir. Resim , link gibi içeriklerin yüklenmesini benklmez)
// body.DOMContentLoaded=function(){
//     myinput.focus()
// }
// ? ÖRNEK: onclick eventi
// butona tıklandığında tetilensin istiyorum
//! selektör (selektörleri artık burda yapacağım hepsini .olması gereken buymuş)
const addButton = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")
// event tanımlama
addButton.onclick = (e)=>{
    // eğer fonksiyonun parantezinin içine e veya event gibi yazarsak clg ile yazdığımızda bu event ile ilgili bir sürü bilgi alabiliriz.
// console.log(e);
// console.log(e.target);
// console.log(e.target.value);
// console.log(e.target.id,e.target.name);
// ?yeni bir li elemnti açacağız
// boş bir eklmeyi engellemk için:
if(!myinput.value.trim()){  //trim() space yapıldığında da ekleme yapmasın bu uyarıyı versin diye yaptık.
    alert("lütfen bir içerik giriniz")
    myinput.focus()
    return
}
const li = document.createElement("li")
li.textContent =myinput.value
ul.appendChild(li)
myinput.value ="" //eklediğimizi silemk için yaptık.
myinput.focus() // fokuslanıyor hemen onun için yaptık
}
// !alternatif yöntem indexte section form yaptık buttonu da submit yaparak bunu kullandık.
// ?form içersindeki submit butonuna her basıldığında bu onsubmit eventi tetiklenir.
// submit eventi otomatik olarak enter tuşunun kullanmını sağlar.
// ?entera basarak tetiklensin,otomatik eklensin.tanımlansın: onsbmit eventi kullanırsak onclick eventene grek kalmıyor.
// yukarda selektor kısmında query selektor ile önce formu çağırdık.submit aslında sayfayı da refressh yapıyor ama biz onu göremiyoruz hızlı yapıyor.biz istersek sayfanın refresh engelleyebiliyoruz. bu otomatik refresh submitin doğaal davranışı
// ! preventDefault davranışı iptal et demek.
form.onsubmit = function(e){
e.preventDefault()  //sabmit işleminin temel davranışlarını iptal eder.(formu silmek sayfayı refresh yapmak gibi)
}
myinput.onkeydown = function(e){ //inputun üzerinde bir tuşa basıldığında bir event tetiklenecek.
    // mesela e tuşuna bastım yine inputa tıklamış gibi oldum.
    console.log(e.code);  //bu ne demek: bana e içindeki bastığım kodu göster diyor yani hangi tuşa bastığımı gösterdi. submit kulanmadan da entera basıp aynı işimizi görebiliyoruz.
}
// ?alternatif yöntem 2
// !yine form yaptığımız kısmı sectiona çevirdik submiti de button yaptık bu yöntemi kullandık.
myinput.onkeydown = function(e){
if(e.code === "Enter"){
    addButton.click()
}
}
// eğer klavyeden girilen enter tuşu ise onclcick çağır yukarda buton için tanımlamıştık.