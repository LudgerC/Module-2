import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let var1 = 11;
let var2 = "11";

if(var1 == var2)
{
    console.log("Variable zijn gelijk!")
}
else 
{
    console.log("Variable zijn niet gelijk!")
}

/*Uitleg van het taak: 
"==" kan een string met een nummer vergelijken, 
maar "===" kan alleen hetzelfde type variabelen vergelijken, 
dus een string met een string en een nummer met een nummer. */