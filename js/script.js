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
language = prompt("Select language code: \nSpanish: es\nGerman: de\nEnglish: en\nFrench: fr");
if (language === "es"){
    document.write("<p>Hola mundo</p>");
} else if (language === "de"){
    document.write("<p>Hallo Welt</p>");
} else if (language === "fr"){
    document.write("<p>Bonjour le monde</p>");
} else {
    document.write("<p>Hello world</p>");
}
