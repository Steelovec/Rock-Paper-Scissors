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


function getHumanChoice(){
    const answer = prompt("What will you choose: ")
    const answerToLowerCase = answer.toLowerCase()

    if(answerToLowerCase == "rock" ){
        return "Rock"
    } else if(answerToLowerCase == "paper" ){
        return "Paper"
    } else if(answerToLowerCase == "scissors" ){
        return "Scissors"
    } 
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return;
    }

    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame()

console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);

function playGame(){
    const human1 = getHumanChoice();
    const computer1 = getComputerChoice();
    playRound(human1, computer1);

    const human2 = getHumanChoice();
    const computer2 = getComputerChoice();
    playRound(human2, computer2);

    const human3 = getHumanChoice();
    const computer3 = getComputerChoice();
    playRound(human3, computer3);

    const human4 = getHumanChoice();
    const computer4 = getComputerChoice();
    playRound(human4, computer4);

    const human5 = getHumanChoice();
    const computer5 = getComputerChoice();
    playRound(human5, computer5);

    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game is a tie!");
    }
}