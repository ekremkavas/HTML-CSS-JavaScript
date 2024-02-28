const p1=document.querySelector("#ekrem")
const p2=document.querySelector("#emir")

const score1= document.getElementById("player1")
const score2= document.getElementById("player2")

const reset = document.querySelector("#reset")
const x= document.querySelector("#input")

let playerOne=prompt("player ismi")
let playerTwo=prompt("player ismi")

p1.textContent=`+1 to ${playerOne}`
p2.textContent=`+1 to ${playerTwo}`

p1.onclick = ()=>{
  console.log(typeof(x));
    if(Number(score1.textContent)<Number(x.value)){
    score1.textContent++
    if(Number(score1.textContent)===Number(x.value)){
        p1.disabled=true
        p2.disabled=true
        alert(`Win***${playerOne}`)
     }
}
}


p2.onclick = ()=>{
 console.log(Number(x.value));
     if(Number(score2.textContent)<x.value){
     score2.textContent++
     if(Number(score2.textContent)===Number(x.value)){
        p1.disabled=true
        p2.disabled=true
        alert(`Win***${playerTwo}`)
     }
 }
 }

 
 reset.addEventListener("click",()=>{
    score1.textContent="0"
    score2.textContent="0"
    x.value=""
    x.focus()
    p2.disabled=false
    p1.removeAttribute ("disabled")
 })