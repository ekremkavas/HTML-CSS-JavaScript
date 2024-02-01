let string = "Merhaba";
console.log(string.length); // Çıktı: 7

// length, Bu özellik, bir dizenin veya bir dizi gibi belirli bir veri yapısının içindeki elemanların sayısını belirtir.

//************************************** */
let str = "Merhaba";
console.log(str.charAt(0)); // Çıktı: M
console.log(str.charAt(3)); // Çıktı: h
console.log(str.charAt(6)); // Çıktı: a
console.log(str.charAt(10)); // Çıktı: (boş dize, çünkü 10. indeks dışında bir değer)

// dize içindeki herhangi bir karaktere erişmek için kullanışlıdır. İndeks, 0'dan başlar ve dize uzunluğunun bir eksiğine kadar gider. 

//************************************************* */
let metin = "Şuan Claruswayda eğitim almaktayım"

let harf =prompt("Harf giriniz")
// let sonuc = bul(harf)


function bul(harf){
    let toplam = 0
    for(let i = 0; i<metin.length; i++){ 
        if(metin.charAt(i) === harf){
            toplam += 1
        }
    }
    console.log("Harf sayısı", + toplam);
}

bul("a")
bul("e")

//****************************************** */
// Mükemmel Sayı Uygulaması
// 6 - 28- 496
// 6 = 1,2,3,6 = 12 = 6*2
// 28 = 1,2,4,7,14,28 = 56 = 28*2

isPerfect Number (5);

function isPerfect Number (number) {
     let toplam = 0;
    for(let i =2; i<=number/2; i++){
        if (number%i==0){
             toplam+=i;
        }
    }

toplam+=1+number;

if (toplam==number*2) {
     console.log("Mükemmel Sayıdır...");
}else{
     console.log("Mükemmel Sayı Değildir..");
}
}

//******************************************** */
convertDecimalToBinary (25);
function convertDecimalToBinary (number) {
    let binary ="";
    while(true){
        binary+=(number%2).toString();
        number-Math.floor(number/2);
        if(number==1){
            //Artık bölmek yok döngüden cıkacagız.
            binary+=1;
            break;
        }
    }
    let result = reverse (binary);
    console.log("Sonuç : " + result);
}

function reverse (binary) {
    let reverseBinary = "";
    for(let i = binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}


//*************************************** */

//Binary To Decimal Conversion (İkilik sayıdan 10 luk sayıya çevirmek)
let binary = "10110010101";

function convertBinaryToDecimal (binary){
    let toplam =0;
    let ust = 0;

    for(let i=binary.length-1; i>=0; i--){
        if (Number(binary.charAt(i)) !=0){
            toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        }
        ust++;
    }
    console.log("Sonuç:" + toplam);
}

convertBinaryToDecimal(binary);