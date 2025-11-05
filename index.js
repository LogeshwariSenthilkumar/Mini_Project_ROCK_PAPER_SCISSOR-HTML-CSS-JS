const choices=["rock","paper","scissor"];
const resulttext=document.getElementById("resulttext");
const  playertext=document.getElementById("playertext");
const  computertext=document.getElementById("computertext");
const playscore=document.getElementById("play");
const computerscore=document.getElementById("computer");
let playscores=0;
let computerscores=0;
function playGame(playerchoice){
 const computerchoice=choices[Math.floor(Math.random()*3)];
 let result="";
 if(playerchoice===computerchoice){
    result="IT'S TIE";
 }
 else{
    switch (playerchoice) {
        case "rock":
            result=(computerchoice==="scissors")?"YOU WIN!":"YOU LOSE!";
            break;
        case "paper":
            result=(computerchoice==="rock")?"YOU WIN!":"YOU LOSE!";
            break;
         case "scissor":
            result=(computerchoice==="paper")?"YOU WIN!":"YOU LOSE!";
            break;
    }
 }
 resulttext.textContent=result;
 playertext.textContent=`PLAYER: ${playerchoice}`;
  computertext.textContent=`COMPUTER: ${computerchoice}`;

  resulttext.classList.remove("greentext","redtext");
  switch (result) {
    case "YOU WIN!":
        playscores++;
        resulttext.classList.add("greentext");
          playscore.textContent=playscores;
        break;
    case "YOU LOSE!":
        computerscores++;
        resulttext.classList.add("redtext");
        computerscore.textContent=computerscores;
        break;
  
  }
}