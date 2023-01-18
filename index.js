
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let prevCount = 0;
const names = "Jothi";
const greeting = "Welcome Back, "
const finaldisplay = greeting + names;
function increment(){
    count += 1;  
    countEl.textContent = count;
}

function save(){
    prevCount += count; 
    saveEl.textContent += prevCount + " - ";
    count= 0;
    countEl.textContent = count;
}
