const randomNumberGenerator = function randomNumberGenerator(){
    let result = 0;
    result = Math.random()*100;
    return Math.round(result);
}
 

const lottery = function lottery(numbers){
    if (numbers == 88){
        return `Congrats you won! Your number was ${numbers}`;
    }
    else {
        return `Your number was ${numbers}. Better luck next time!`
    }
}

console.log(lottery(randomNumberGenerator())); 
