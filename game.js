
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}
function computerChoice() {
    let n = getRandomNum(3)

    switch(n){
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2: 
            return "scissors"
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