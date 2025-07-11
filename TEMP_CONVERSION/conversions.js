const textbox=document.getElementById("textbox");
const toforen=document.getElementById("toforen");
const tocels=document.getElementById("tocels");
const result=document.getElementById("result");
const which=document.getElementById("which");
let temp;

function convert(){
    if(toforen.checked){
        temp=Number(textbox.value);
        temp=temp * 9/5 + 32;
        which.innerText="YOU ARE SELECTING CELSIUS ➡️ FOHRENHEIT";
        result.textContent=temp.toFixed(1) + "^F";
    }
    else if(tocels.checked){
        temp=Number(textbox.value);
        temp=(temp - 32) * (5/9) ;
        which.innerText="YOU ARE SELECTING FOHRENHEIT ➡️ CELSIUS";
        result.textContent=temp.toFixed(1) + "^C";
    }
    else{
        which.innerText="SELECT A UNIT";
    }
}