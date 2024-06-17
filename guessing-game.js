function guessingGame() {
    const randomNum = Math.floor(Math.random() * 100);
    let toCheck = false;
    let numOfguesses = 0;

    return function (guessNum) {

        if (toCheck) return "The game is over, you already won!";

        if (guessNum < randomNum) {
            numOfguesses++;
            return `${guessNum} is too low!`;
        }

        if (guessNum > randomNum) {
            numOfguesses++;
            return `${guessNum} is too high!`;
        }
        
        if (guessNum === randomNum) {
            numOfguesses++;
            toCheck = true;
            return `You win! You found ${randomNum} in ${numOfguesses} ${numOfguesses > 1? "guesses": "guess"}.`;
        }
    }

}


module.exports = { guessingGame };
