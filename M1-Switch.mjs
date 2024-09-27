import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuze = parseFloat(await userInput.question ("Geef je keuze in: \n1.Red Hot Chilli Peppers\n2.AC/DC\n3.Netsky\n4.De Strangers\n\nGeef je keuze in: "));

switch(keuze)
{
    case 1:
        console.log("Je koos voor " + '"' + "Red Hot Chilli Peppers" + '"')
        console.log("Ze zijn de artist achter de hit: Otherside ")
    break;

    case 2:
        console.log("Je koos voor " + '"' + "AC/DC" + '"')
        console.log("Ze zijn de artist achter de hit: Thunderstruck")
    break;

    case 3:
        console.log("Je koos voor " + '"' + "Netsky" + '"')
        console.log("Ze zijn de artist achter de hit: We Can Only Live Today")
    break;

    case 4:
        console.log("Je koos voor " + '"' + "Mijne blauwe geschelpte" + '"')
        console.log("Ze zijn de artist achter de hit: ")
    break;

    default: 
        console.log("Ongeldige keuze!")
    break;


}