

let sayac = 1;
while (true) {
    console.log(sayac);
    if (sayac==7){
        break; 
    }
    sayac++;
}

//  1'den 5'e kadar olan sayıları ekrana yazdıralım
sayi = 1
while sayi <= 5:
    print(sayi)
    sayi += 1

// # Kullanıcı "exit" kelimesini girinceye kadar giriş al
giris = ""
while giris != "exit":
    giris = input("Kelime girin veya 'exit' yazarak çıkın: ")
    print("Girilen kelime:", giris)
print("Program sonlandırıldı.")


// # 1 ile 10 arasındaki çift sayıları ekrana yazdır
sayi = 1
while sayi <= 10:
    if sayi % 2 == 0:
        print(sayi)
    sayi += 1



// *************************************************

// let sayix = +prompt("0-100 arasinda bir sayi griniz:");
// while (sayix < 0 || sayix > 100) {
//   console.log("Girlen sayi 0-100 arasında olmalıdır");
//   sayix + prompt("0-100 arasinda bir sayi griniz:");
// }
// console.log("Girilen sayi:", sayix);



/*
import random

# Rastgele bir sayı seçelim
hedef_sayi = random.randint(1, 100)
tahmin = 0

# Kullanıcı doğru tahmin edene kadar devam edelim
while tahmin != hedef_sayi:
    tahmin = int(input("1 ile 100 arasında bir sayı tahmin edin: "))
    if tahmin < hedef_sayi:
        print("Daha yüksek bir sayı deneyin.")
    elif tahmin > hedef_sayi:
        print("Daha düşük bir sayı deneyin.")
    else:
        print("Tebrikler, doğru tahmin ettiniz!")
        break

// *******************************************************