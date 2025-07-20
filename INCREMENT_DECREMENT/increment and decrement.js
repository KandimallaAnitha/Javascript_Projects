const decrementbtn=document.getElementById("decrement");
const resetbtn=document.getElementById("reset");
const incrementbtn=document.getElementById("increment");
const countlebel=document.getElementById("countlab");
let count=0;
incrementbtn.onclick=function(){
    count++;
    countlebel.textContent=count;
}
decrementbtn.onclick=function(){
    count--;
    countlebel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlebel.textContent=count;
}