/* ternary de ? koşul yapısıdır bir şart sonrası değil mi sorusu gibi ? nın sol tarafı yani koşul true ise ? dan sonra gelen kısım çalışır eğer false ise : sağındaki ifade çalışır */


/* tek satırlık işlemler için uygulamak uygunudr 2 koşullu varsa bunu yap yosa bunu gibi */
const age = 13

const sonuc = age <=14 ? "cocuk" : "cocuk değil"
console.log(sonuc);



const calismaSuresi = 10
let maas = 3000

// ternary bir değişken tanımlayarak değer aktarmak
 maas = calismaSuresi >= 10 ? (maas = maas *1.5): maas
 console.log("Alacağınız maaş ", maas);