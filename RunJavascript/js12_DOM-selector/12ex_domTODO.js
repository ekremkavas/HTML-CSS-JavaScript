//add butonuna tıklanıp tıklanmadıgını kontrol et
//tıklandıgında ınputun ıcerıgını al
//bir tane todo item elementi olustur
//git bunu dom un ıcersıne koy

const addTaskButton = document.querySelector(".addTask");
console.log(addTaskButton);

const todoInput = document.querySelector(".todoInput");
console.log(todoInput);

const addTask = () =>{
    // console.log("test");
    console.log(todoInput.value);
    if(todoInput.value===""){
        alert("lutfen ekle butonunu doldurarak tıklayın")
    }else{
        //
}

addTaskButton.addEventListener("click", addTask)
//clıkc eventı ıle addTask function olusturduk ust kısmında fonksıyon calısıyormu denedık