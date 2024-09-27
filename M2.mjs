// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let berekeningSymbool = await userInput.question('welke berekening wil je doen? (+ , - ,* ,/');
let getal = parseFloat ( await userInput.question('geef getal 1 :'));
let getal1 = parseFloat ( await userInput.question('geef getal 2 :'));

let uitkomst = ""

switch(berekeningSymbool){
    case "+":
            console.log(getal + "+" + getal1)
            uitkomst = getal + getal1;
            console.log(uitkomst)
        break;

        case "-":
            console.log(getal + "-" + getal1)
            uitkomst = getal - getal1;
            console.log(uitkomst)
        break;

        case "":
            console.log(getal + "" + getal1)
            uitkomst = getal * getal1;
            console.log(uitkomst)
        break;

        case "/":
            console.log(getal + "/" + getal1)
            uitkomst = getal / getal1;
            console.log(uitkomst)
        break;
}