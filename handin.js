//* Exercise 1, What to wear

const clothesToWear = function dressForWeather(t) {

    if (t < 10) {
        return ("It's cold today! Wear a big jacket and long pants")

    } else if (t >= 10 && t < 20){
        return ("Today is warm. Wear a shirt and shorts")

    } else if (t >= 20) {
        return("It's very hot today. Just wear shorts, and remember sunscreen")
    }
}
console.log(clothesToWear(25));





//*Exercise 2, Dice game
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const diceRoll = parseInt(prompt("How many times do you want to roll the dice?"), 10);

function rollTheDice() {
    const results = [];

    for (let i = 0; i < diceRoll; i++) {
        const rollResult = getRandomInt(1, 6);
        results.push(rollResult);
        console.log(rollResult);

        if (rollResult === 6) {
            console.log("You just hit 6!");
        }
    }
    return results;
}
rollTheDice(diceRoll);




//* Part two

const diceRoller = (numberOfDiceRolls) => {
    let allSixes = true

    for(let i = 0; i < numberOfDiceRolls; i++) {
        const rollResult = Math.floor(Math.random() * 6) + 1

        if (rollResult !== 6) {
            allSixes = false
        }
        if (rollResult === 6 && !allSixes) {
            console.log("You just hit 6!");
            return; // Exit the loop early if not all rolls are 6
        }
    }

    if (allSixes) {
        console.log("Jackpot 🎉");
    }
};

diceRoller(4);






//* Exercise 3. Build a sentiment analyzer

function analyzeWords(text) {
    const wordScore = {
        'super': 1,
        'awesome': 1,
        'happy': 1,
        'bad': -1,
        'unhappy': -1
    };

    const words = text.toLowerCase().split(" ");

    let positiveWords = 0;
    let negativeWords = 0;
    let totalScore = 0;


    words.forEach(word => {
        if (wordScore.hasOwnProperty(word)) {
            totalScore += wordScore[word];

            if (wordScore[word] === 1) {
                positiveWords++;

            } else if (wordScore[word] === -1) {
                negativeWords++;
            }
        }
    });

    return {
        positiveWords,
        negativeWords,
        totalScore
    };
}

const text = 'I am mega super awesome happy and not bad unhappy';
const result = analyzeWords(text);
console.log(result);



