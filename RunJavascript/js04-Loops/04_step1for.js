// ********************STEP_1*********

//! for (başlangıç; koşul; artış/değişim) {
// Döngü içinde gerçekleştirilecek işlemler
//!   }

//? Koşul sağlanana kadar döngü devam eder
// let i let index kısaltması

const user =[
    {id : 0, names : "mehmet", age : 25}  
    {id : 1, names : "ahmet", age : 35}  
    {id : 3, names : "ahmet", age : 45}  
   
]
for(let index = 0; index < user.length ; index++){
    console.log(user[index]);
}

const kırktanKucukler =[]
for(let index = 0; index < user.length ; index++){
    if(user[index].age < 40){
        kırktanKucukler.push(user[index].name)
    }
}

console.log(kırktanKucukler);


// *************5 e kadar yazdırma***********
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }


// *************çift sayıları yazdırma**********
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
//   }
  
// ******************************************

// for(let i = 1; i <= 10; i++){
//     if(i == 3){
//     console.log('en sevdiğim rakam :'+i);
//     continue;
//     }
//     if(i == 6){
//         console.log('en sevdiğim rakam :'+i);
//         break;
//     }

//     console.log(i);
// }

// *************************************
// console.log("pratik isim yazdırma");
// for(let i = 1; i <= 7 ; i++){
//     if(i % 2 == 1){
//         console.log("Ekrem");
//     }else{
//         console.log("Cenkeri");
//     }
// }
    // ****************************

    const adSoyad = ["ali", "veli" ,"deli"]
    console.log(adSoyad.length);

    for(let i =0; i < adSoyad.length; i++){
        console.log(adSoyad[i]);
    }