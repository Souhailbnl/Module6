import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { clear } from 'node:console';
const userInput = readline.createInterface({input, output});

let studentenLijst = [];
let naam;

while (true) {

naam = await userInput.question('Voer een nieuwe naam in :');

if (naam == 'S') {
  break;
}
studentenLijst.push(naam);
}

console.log("Studenten die uitgenodigd zijn om de cursus Programming Fundementals te volgen: ")

for (let i = 0; i < studentenLijst.length; i++) {

    console.log(studentenLijst[i])   
}

process.exit();