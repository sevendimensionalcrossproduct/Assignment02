//Larger or Smaller?
/*
let firstNumber = Number(prompt("Select a number"));
let secondNumber = Number(prompt("Select a second number"));

if (isNaN(firstNumber) || isNaN(secondNumber)){
    document.write(`Please enter two valid numbers.`)
}
else if (firstNumber === secondNumber){
    document.write(`<p>Both numbers are equal.</p>`);
} else if (firstNumber > secondNumber){
    document.write(`<p>${firstNumber} is larger.`);
} else {
    document.write(`<p>${secondNumber} is larger.`);
}
*/

//The Word Translator
/*
let language = prompt("Select language code: \nSpanish: es\nGerman: de\nEnglish: en\nFrench: fr");
if (language === "es"){
    console.log("Hola mundo");
} else if (language === "de"){
    console.log("Hallo Welt");
} else if (language === "fr"){
    console.log("Bonjour le monde");
} else {
    console.log("Hello world");
}
*/

//The "Coin Flip" Game
/*
let coinFlip = Math.round(Math.random());
let choice = parseInt(prompt(`Select "Heads or Tails":\nEnter "0" for "Heads"\nEnter "1" for "Tails"`));

if (choice !== 0 && choice !== 1){
    alert("Invalid input")
} else {
    if(coinFlip === 0){
        if (coinFlip === choice){
            alert("The flip was heads and you chose heads...you win!");
        } else if (coinFlip !== choice){
            alert("The flip was heads but you chose tails...you lose!");
        }
    } else if (coinFlip === 1) {
        if (coinFlip !== choice){
            alert("The flip was tails but you chose heads...you lose!");
        } else if (coinFlip === choice){
            alert("The flip was tails and you chose tails...you win!");
        }
    }
}
*/

let grade = Number(prompt("Enter your grade:"));
if (grade > 100 || grade < 1){
    console.log("Invalid grade. Please enter a number in the correct range (1-100)");
} else {
    if (grade < 60) {
        console.log("You received an F");
    } else if (grade >= 60 && grade < 70) {
        console.log("You received a D");
    } else if (grade >= 70 && grade < 80){
        console.log("You received a C");
    } else if (grade >= 80 && grade < 90){
        console.log("You received a B");
    } else if (grade >= 90 && grade <= 100) {
        console.log("You received an A");
    }
}
