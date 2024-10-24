function zoekNaamInLijst(namenlijst, naam) {
    return namenlijst.indexOf(naam);
}

let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];
let resultaat = zoekNaamInLijst(namen, "Nuria");
console.log(resultaat);