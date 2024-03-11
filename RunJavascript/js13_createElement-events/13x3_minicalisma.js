console.log("EVENTÇALIŞMA");

const getBtn = document.getElementById("button");
//buton yakalandı
console.log(getBtn);


getBtn.addEventListener("click", () => {
    //buton uzerıne geldıgınde dınleme yapıldı
    console.log("butona tıklandı");
    const inputdegeri = document.querySelector("#searchText").value;
    //ınput ıcergı yakalandı
    console.log("ınput ıcıne yazılan değer  = ",inputdegeri);
    //consolda hep kontrol et aşama aşama yakaladın mı dıye
    //ınputa bırseyler yazıp tıklandı console ıle kontrol edıldı
})