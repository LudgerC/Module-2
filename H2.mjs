import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaartal = parseFloat(await userInput.question("Geef een jaartal: "));

if((jaartal % 4 == 0 && jaartal % 100 !== 0) || (jaartal % 400 == 0))
{
    console.log("Schrikkeljaar, februari heeft 29 dagen")
}
else
{
    console.log("Geen schrikkeljaar, februari heeft 28 dagen")
}