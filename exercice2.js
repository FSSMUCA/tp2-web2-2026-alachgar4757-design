
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let valeur = valeurs[i];
    let valeurString = String(valeur);

    let type = valeur ? "truthy" : "falsy";
    
    if (valeurString === "") {
        console.log("(chaine vide) -> " + type);
    } else {
        console.log(valeurString + " -> " + type);
    }
}