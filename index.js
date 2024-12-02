// this will give a rand num between 1-6
// use floor because i dont want the decimal part
//let randNum = Math.floor(Math.random() * 6) + 1;


//const min = 50;
//const max = 100;
//let randNum = Math.floor(Math.random() * (max - min)) + min;

const Btn = document.getElementById("Btn");
const label = document.getElementById("MyLabel");

const min = 1;
const max = 6;

let randNum;

Btn.onclick = function(){
    randNum = Math.floor(Math.random() * max) + min;
    label.textContent = randNum;
}