
document.getElementById("increment").addEventListener("click",incrementcounter);

document.getElementById("decrement").addEventListener("click",decrementcounter);

document.getElementById("result").addEventListener("click",resetcounter);

let counterdisplay = document.getElementById("counterdisplay");
let countervalue = 0;


function updatecounterdisplay(){
    counterdisplay.textContent = countervalue;
}


function incrementcounter(){
    countervalue++;
    updatecounterdisplay();

}

function decrementcounter(){
    if(countervalue>0){
        countervalue--;
        updatecounterdisplay();
    }


}

function resetcounter(){
    countervalue = 0;
    updatecounterdisplay();
}