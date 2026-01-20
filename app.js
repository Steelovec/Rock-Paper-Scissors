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
    prompt("What will you choose: ")
}