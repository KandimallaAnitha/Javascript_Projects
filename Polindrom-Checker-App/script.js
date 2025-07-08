

function ispalindrom(str){

    const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr);

    const reversedstr = cleanstr.split('').reverse().join('');
    console.log(reversedstr);

return cleanstr ==reversedstr;
}


function palindromchecker(){

    const inputtext = document.getElementById("inputtext");
    const result = document.getElementById("result");

    if(ispalindrom(inputtext.value)){
        result.textContent = `"${inputtext.value}" is a palindrome`;
    }else{
        result.textContent = `"${inputtext.value}" is  not a palindrome`;
    }

    result.classList.add('fadeIn');
    inputtext.value = "";
}


document.getElementById('checkbtn').addEventListener("click",palindromchecker);