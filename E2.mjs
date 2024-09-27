import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let minimum = 1;
let maximum = 100;
let getal = parseFloat(await userInput.question("Geef een getal: "));

if( getal >= minimum && getal <= maximum)
{
    console.log("Je getal " + getal + " ligt tussen " + minimum + " en " + maximum)
}
else
{
    console.log("Je getal " + getal + " ligt niet tussen " + minimum + " en " + maximum)
}