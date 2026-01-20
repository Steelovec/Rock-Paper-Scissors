function getRandomInt(max){
    return Math.floor(Math.random() * max)
};

const gen = getRandomInt(3);

if(gen == 1){
    console.log("Rock")
}
else if(gen == 2){
    console.log("Paper")
}
else{
    console.log("Scrissors")
}

console.log(gen);