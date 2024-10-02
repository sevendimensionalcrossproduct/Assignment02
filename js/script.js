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
    document.write("<p>Hola mundo</p>");
} else if (language === "de"){
    document.write("<p>Hallo Welt</p>");
} else if (language === "fr"){
    document.write("<p>Bonjour le monde</p>");
} else {
    document.write("<p>Hello world</p>");
}
*/

//The "Coin Flip" Game
/*
let coinFlip = Math.round(Math.random());
let choice = parseInt(prompt(`Select "Heads or Tails":\nEnter "0" for "Heads"\nEnter "1" for "Tails"`));

if (choice !== 0 && choice !== 1){
    document.write("Invalid input")
} else {
    if(coinFlip === 0){
        if (coinFlip === choice){
            document.write("<p>The flip was heads and you chose heads...you win!</p>");
        } else if (coinFlip !== choice){
            document.write("<p>The flip was heads but you chose tails...you lose!</p>");
        }
    } else if (coinFlip === 1) {
        if (coinFlip !== choice){
            document.write("<p>The flip was tails but you chose heads...you lose!</p>");
        } else if (coinFlip === choice){
            document.write("<p>The flip was tails and you chose tails...you win!</p>");
        }
    }
}
*/
