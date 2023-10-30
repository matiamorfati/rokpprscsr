
let userScore = 0;
let computerScore = 0;


const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const computerChoice_div = document.getElementById("enemy");
const outcome_div = document.getElementById("winner");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function showComputerChoice(computerChoice) {
    switch(computerChoice) {
        case 'r':
            computerChoice_div.innerHTML = "rock";
            break;
        case 'p':
            computerChoice_div.innerHTML = "paper";
            break;       
        case 's':
            computerChoice_div.innerHTML = "scissors";
            break;
    }
}

function outcomeConversion(choice) {
    if(choice === "r") return "Rock";
    if(choice === "p") return "Paper";
    if(choice === "s") return "Scissors";
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    outcome_div.innerHTML = outcomeConversion(userChoice) + " beats " + outcomeConversion(computerChoice) + ". You win!";
}


function fail(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    outcome_div.innerHTML = outcomeConversion(computerChoice) + " beats " + outcomeConversion(userChoice) + ". You fail."
}


function tie(userChoice, computerChoice) {
outcome_div.innerHTML = outcomeConversion(userChoice) + " with the " + outcomeConversion(computerChoice) + "? It can only be a tie!"
}


function game(userChoice) {
    

    const computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);


    switch(userChoice + computerChoice){

        
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            fail(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;

    }

}

function main() {
   
rock_button.addEventListener('click', function() {
    game("r");
})

paper_button.addEventListener('click', function() {
    game("p");
})

scissors_button.addEventListener('click', function() {
    game("s");
})

}

main();








































/* 
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function computerChoice() {
    let n = getRandomNum(3)

    switch(n){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2: 
            return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {

    console.log("\nYou chose " + playerChoice)
    console.log("Computer chose " + computerChoice)

    if(playerChoice == computerChoice) 
    return "It's a tie!"

    else if(playerChoice == "rock" && computerChoice == "scissors")
    return "You win! rock beats scissors "

    else if( playerChoice == "rock" && computerChoice == "paper")
    return "You lose :( paper beats rock"

    else if(playerChoice == "scissors" && computerChoice == "paper")
    return "You win! scissors cut paper"

    else if(playerChoice == "scissors" && computerChoice == "rock")
    return "You lose :( rock beats scissors "

    else if(playerChoice == "paper" && computerChoice == "rock")
    return "You win! paper beats rock"

    else if(playerChoice == "paper" && computerChoice == "scissors")
    return "you lose :< scissors cut paper"

}


function game(player, computer){    
    console.log(playRound(player, computer))
}

for(let i = 0; i < 5; i++){
    let player = prompt("rock, paper, scissors?")
    let computer = computerChoice()
    game(player, computer)
}
*/