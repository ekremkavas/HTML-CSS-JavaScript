//! rest operatörü (rest parameter) JavaScript'te ES6 ile tanıtılan bir özelliktir. Bu operatör, bir fonksiyona geçilen argümanların geri kalanını tek bir dizi olarak toplar. 

//Rest operatörü üç nokta üst üste (...) şeklinde ifade edilir. Genellikle üç nokta ile ifade edilen bu operatörün adı "rest"tir, çünkü geri kalan tüm argümanları toplar.Mutlaka yazılan parantezın ııcnde en sonda olması lazım , mantık olarak gerı kalanları aldıgı ıcın en sonda olması lazım

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Çıktı: 15
  
  // Bu örnekte, sum fonksiyonu için parametre olarak ...numbers kullanılmıştır. Bu, fonksiyona geçilen tüm argümanları numbers adlı bir diziye toplar. Ardından bu dizi içindeki tüm sayıları toplayarak bir toplam değeri döndürür.

  const araclar = ["alfa romeo", "volswogen", "fiat", "renault"]
  const[arac1, arac2, ...geriyekalan] = araclar
  console.log(geriyekalan);