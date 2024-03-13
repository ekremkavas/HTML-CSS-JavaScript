


console.log("ilk konsol çalıştı");
//burayı okudu -1-

function getUser(){
    console.log("getUser konsolu çalıştı");
   //buraya kadar okudu -2-
    setTimeout( () =>{
        console.log("setTimout içindeki konsol çalıştı");

        return{username: "mehmet"}
    }, 2000);
    //setTimeout dışında birsey return(dönmediği için burayı okumuyor sırada) undefined okudu bir değer retur etseydık okuyacaktı -3-
}

const user = getUser();
console.log(user);
console.log("ikinci konsol çalıştı");
//setTimeout bulmadı burayı okudu -4-