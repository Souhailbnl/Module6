import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let resultaat;
let teller = 0;


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let getal = parseFloat(await userInput.question('Hoeveel willekeurige getallen wil je genereren? '));

for (let i = 1; i <= getal; i++) {
    
    resultaat = random(1,10)
    console.log("De gegenereerde willekeurige getallen zijn: " + resultaat)

    if (resultaat % 2 == 0) {
        
        teller++;
        
    }
    
}


console.log("Van de gegenereerde getallen zijn er " + teller + " even");


process.exit();
