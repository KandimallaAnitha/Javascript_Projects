function calculatelove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name1").value.trim();
    if(name1===""|| name2===""){
        alert("Please enter both names.");
    }else{
        const lovepercentage = Math.floor(Math.random()* 101);

        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} s love percentage:${lovepercentage}`;

        if(lovepercentage < 30){
            result.innerHTML +="<br> Not a Great Match. Keeping Looling!"
        }
        else if(lovepercentage >= 30 && lovepercentage < 70){
            result.innerHTML +="<br> There is potential.Give it a try!"
        }
        else{
            result.innerHTML += "<br> Great Match Love is in the Air!"
        }
    }
}