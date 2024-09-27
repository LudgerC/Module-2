import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let score = 0; 

let antwoord1 = await userInput.question("Welcom bij de quiz! Beantwoord de volgende 5 vragen:\nVraag 1: Wat is de hoofdstad van Frankrijk?\nJouw antwoord: ")
if(antwoord1 == "Parijs")
{
    console.log("Goed antwoord!")
    score++;
}
else 
{
    console.log("Fout antwoord!\nHet juiste antwoord is: Parijs")
}
let antwoord2 = parseFloat(await userInput.question("Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?\nJouw antwoord: "))
if(antwoord2 == 8)
{
    console.log("Goed antwoord!")
    score++;
}
else 
{
    console.log("Fout antwoord!\nHet juiste antwoord is: 8")
}
let antwoord3 = await userInput.question("Vraag 3: Wat is het grootste zoogdier ter wereld?\nJouw antwoord: ")
if(antwoord3 == "Blauwe vinvis")
{
    console.log("Goed antwoord!")
    score++;
}
else 
{
    console.log("Fout antwoord!\nHet juiste antwoord is: Blauwe vinvis")
}
let antwoord4 = await userInput.question("Vraag 4: Wie schreef het toneelstuk 'Romeo en Julia'?\nJouw antwoord: ")
if(antwoord4 == "Shakespeare")
{
    console.log("Goed antwoord!")
    score++;
}
else 
{
    console.log("Fout antwoord!\nHet juiste antwoord is: Shakespeare")
}
let antwoord5 = parseFloat(await userInput.question("Vraag 5: Hoeveel poten heeft een spin?\nJouw antwoord: "))
if(antwoord5 == 8)
{
    console.log("Goed antwoord!")
    score++;
}
else 
{
    console.log("Fout antwoord!\nHet juiste antwoord is: 8")
}

console.log("Je hebt " + score + " van de 5 vragen juist beantwoord")