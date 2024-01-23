/* koşul (trueise) &&  (burayı çalıştırır , sağ tarafını) yoksa diğer sağ tarafı umursamaz(ignore eder) aşağıdaki kod bloguna geçer ,  tek bır durum varsa bunu kullanmak mantıklı*/


//! && OPERATÖRÜ (true ise yanındak i ifadeyi çalıştır)
let salary = 18000
let year = 24

year >= 10 && (salary = salary *1.5)

console.log("salary", salary);

//! || OPARATÖRÜ (false ise yanındak i ifadeyi çalıştır)

const sene = 18
let result = "ahmet"

sene >= 18 || (result = "cocuk")
console.log(result);