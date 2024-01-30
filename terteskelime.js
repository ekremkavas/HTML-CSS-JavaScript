function reverseWordsWithoutArray(sentence) {
    //Burada ters çevrilmiş cümle olacak
    let reversedSentence = "";
    //geçici bir kelime tanımlıyoruz, mevcut kelimenin ters hali olacak
    let word = "";
    //Cümlenin karakterlerini tersten başlayarak döngüyle yaz
    for(let i = sentence.length -1; i >= 0 ; i--) {
      // Eğer boşluk karakteri bulunursa veya cümlenin başına gelirse
      if(sentence[i] === " " || i === 0 ) {
        // Kelimeyi ters haliyle sonuna ekle
        if(i === 0) {
          word += sentence[i]; // ilk kelimenin ilk karakterini ekle
        }
        //Kelimenin karakterlerini ters sırayla sonuca ekle
        for (let j = word.length - 1; j >= 0; j--) {
          reversedSentence += word[j];
        }
        // eğer son kelime değilse, bir boşluk ekle
        if( i !== 0 ) {
          reversedSentence += " ";
        }
        //geçici kelimeyi sıfırla
        word = "";
      } else {
        // Geçici kelimeyi oluştur
        word += sentence[i];
      }
    }
    return reversedSentence;
  }

  const inputSentence = " Hello world";
  const reversedSentence = reverseWordsWithoutArray(inputSentence);
  console.log(reversedSentence);

