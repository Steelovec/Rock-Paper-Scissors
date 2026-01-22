function getRandomInt(){
    return Math.floor(Math.random() * 3)
};

function getComputerChoice(){
    const gen = getRandomInt();

    if (gen === 1) {
        return "Rock"
    } else if (gen === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())


function getHumanChoice(){
    const answer = prompt("What will you choose: ")
    
    if(answer == "rock" ){
        return "Rock"
    } else if(answer == "paper" ){
        return "Paper"
    } else if(answer == "scissors" ){
        return "Scissors"
    } 
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if(humanChoice == "Rock" && computerChoice == "Paper"){
        return "Human won!"
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)