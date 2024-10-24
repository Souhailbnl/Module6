let punten = c

let som = 0;
let aantal = 0;

for (let i = 0; i < punten.length; i++) {
    som += punten[i];
    aantal++;
}

let gemiddelde = som / aantal;
console.log("Gemiddelde score:" + gemiddelde);