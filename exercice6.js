let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

console.log("Partie A — Opérateur ?? (nullish coalescing)\n");

console.log("nom ?? \"valeur par défaut\" -> " + (nom ?? "valeur par défaut"));
console.log("age ?? \"valeur par défaut\" -> " + (age ?? "valeur par défaut"));
console.log("ville ?? \"valeur par défaut\" -> " + (ville ?? "valeur par défaut"));
console.log("score ?? \"valeur par défaut\" -> " + (score ?? "valeur par défaut"));
console.log("actif ?? \"valeur par défaut\" -> " + (actif ?? "valeur par défaut"));

console.log("\nPartie B — Opérateur || (logical OR)\n");

console.log("nom || \"valeur par défaut\" -> " + (nom || "valeur par défaut"));
console.log("age || \"valeur par défaut\" -> " + (age || "valeur par défaut"));
console.log("ville || \"valeur par défaut\" -> " + (ville || "valeur par défaut"));
console.log("score || \"valeur par défaut\" -> " + (score || "valeur par défaut"));
console.log("actif || \"valeur par défaut\" -> " + (actif || "valeur par défaut"));

console.log("\nPartie C — Comparaison des résultats\n");

let resultatNom = (nom ?? "valeur par défaut") === (nom || "valeur par défaut") ? "même résultat" : "résultat différent";
let resultatAge = (age ?? "valeur par défaut") === (age || "valeur par défaut") ? "même résultat" : "résultat différent";
let resultatVille = (ville ?? "valeur par défaut") === (ville || "valeur par défaut") ? "même résultat" : "résultat différent";
let resultatScore = (score ?? "valeur par défaut") === (score || "valeur par défaut") ? "même résultat" : "résultat différent";
let resultatActif = (actif ?? "valeur par défaut") === (actif || "valeur par défaut") ? "même résultat" : "résultat différent";

console.log("nom   : ?? et || -> " + resultatNom);
console.log("age   : ?? et || -> " + resultatAge);
console.log("ville : ?? et || -> " + resultatVille);
console.log("score : ?? et || -> " + resultatScore);
console.log("actif : ?? et || -> " + resultatActif);