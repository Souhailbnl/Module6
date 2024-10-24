
let prijzen = [85, 90, 68, 92, 78, 76];

let resultaat;
let korting;


function geefKorting(prijzen) {

    resultaat = prijzen / 100 * 15;
    korting = prijzen - resultaat

    console.log(korting);
    
}

for (let i = 0; i < prijzen.length; i++) {
    
    geefKorting(prijzen[i]);
    
}
