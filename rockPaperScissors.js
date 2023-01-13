// const selects = ["Rock","Paper","Scissor"];
// let playerSelection = prompt("Rock|Paper|Scissor");
// let scorePlayer = 0;
// let scoreComputer = 0;
// let computerSelection = selects[Math.floor(Math.random()*selects.length)];
// const playRound = (playerSelection, computerSelection ) =>{
//     if (playerSelection.toUpperCase()=="ROCK" && computerSelection.toUpperCase() =="SCISSOR"
//     || playerSelection.toUpperCase()=="PAPER" && computerSelection.toUpperCase() =="ROCK"
//     || playerSelection.toUpperCase()=="SCISSOR" && computerSelection.toUpperCase() =="PAPER"){
//         console.log("You win!" )
//         return 1;
//     } else if(playerSelection.toUpperCase() == computerSelection.toUpperCase()){
//         console.log("Tie!")
//         return 0;
//     } else{
//         console.log("You lose!")
//         return -1;
//     }
// }
// const score = () =>{
//         let round = playRound(playerSelection, computerSelection);
//         if(round==1){
//             scorePlayer+=1;
//         } else if(round==-1){
//             scoreComputer+=1;
//         }
//     return console.log("scorePlayer: "+ scorePlayer
//                         + " - scoreComputer: "+ scoreComputer );
// }

// score();

const selects = ["Rock","Paper","Scissor"];
let computerSelection = selects[Math.floor(Math.random()*selects.length)];
let scorePlayer = 0;
let scoreComputer = 0;
let playerSelection;

function playerSelect(select){
    computerSelection = selects[Math.floor(Math.random()*selects.length)];
    playerSelection = select;
    if (playerSelection.toUpperCase()=="ROCK" && computerSelection.toUpperCase() =="SCISSOR"
    || playerSelection.toUpperCase()=="PAPER" && computerSelection.toUpperCase() =="ROCK"
    || playerSelection.toUpperCase()=="SCISSOR" && computerSelection.toUpperCase() =="PAPER"){
        console.log("You win!" )
    
        scorePlayer+=1;
        document.getElementById("score__player").innerHTML=scorePlayer;
        document.getElementById("res").innerHTML="You win!";
    } else if(playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        console.log("Tie!")
        document.getElementById("res").innerHTML="Tie!";
    } else{
        console.log("You lose!")
        scoreComputer+=1;
        document.getElementById("score__com").innerHTML=scoreComputer;
        document.getElementById("res").innerHTML="You lose!";
    }
}
