const choices = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let computerscore = 0;
let playerscore  = 0;

function playgame(playerchoice){
     const computerchoice = choices[Math.floor(Math.random()  * 3)];
     let result = "";
     if(computerchoice === playerchoice){
        result = "IT IS A TIE";
     }
     else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "YOU WIN" : "YOU LOSS";
                break;
                case "paper":
                result = (computerchoice === "rock") ? "YOU WIN" : "YOU LOSS";
                break;
        }
     }
     playerdisplay.textContent = `PLAYER: ${playerchoice}`;
     computerchoice.textContent = `COMPUTER: ${computerchoice}`;
     resultdisplay.textContent = result;

     resultdisplay.classList.remove("greentext","redtext");
     switch(result){
        case "YOU WIN":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "YOU LOSS":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;
     }
}