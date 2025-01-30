const mycheckbox=document.getElementById("mycheckbox");
const visa=document.getElementById("visa");
const master=document.getElementById("master");
const pay=document.getElementById("pay");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const payment=document.getElementById("payment");
mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent="you are subscribed";
    }
    else{
        subresult.textContent="you are not subscribed";
    }
    if(visa.checked){
        payment.textContent="you are paying for visa";
    }
    else if(master.checked){
        payment.textContent="you are paying for master";
    }
    else if(pay.checked){
        payment.textContent="you are paying for pay";
    }
    else{
        payment.textContent="you must select a payment method";
    }
}