const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultelement=document.getElementById("resultelement");
let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if(age>=100){
        resultelement.textContent='you are too old to enter this site';
    }
    else if(age==0){
        resultelement.textContent='you can not enter you were just born';
    }
    else if(age>=18){
        resultelement.textContent='you are  enough to enter this site';
    }
    else if(age<0){
        resultelement.textContent='your age can not be below 0';
    }
    else{
        resultelement.textContent='you must be 18+ to enter this site';
    }
}