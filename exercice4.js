console.log("=== COMPARAISONS AVEC == ET === ===\n");

let compteurDifferences = 0;

let resultat1 = (0 == "");
let resultatStrict1 = (0 === "");
if (resultat1 !== resultatStrict1) compteurDifferences++;
console.log("0 == \"\" -> " + resultat1 + "    |   0 === \"\" -> " + resultatStrict1);

let resultat2 = (0 == "0");
let resultatStrict2 = (0 === "0");
if (resultat2 !== resultatStrict2) compteurDifferences++;
console.log("0 == \"0\" -> " + resultat2 + "    |   0 === \"0\" -> " + resultatStrict2);

let resultat3 = (0 == false);
let resultatStrict3 = (0 === false);
if (resultat3 !== resultatStrict3) compteurDifferences++;
console.log("0 == false -> " + resultat3 + "    |   0 === false -> " + resultatStrict3);

let resultat4 = ("" == false);
let resultatStrict4 = ("" === false);
if (resultat4 !== resultatStrict4) compteurDifferences++;
console.log("\"\" == false -> " + resultat4 + "    |   \"\" === false -> " + resultatStrict4);

let resultat5 = (null == undefined);
let resultatStrict5 = (null === undefined);
if (resultat5 !== resultatStrict5) compteurDifferences++;
console.log("null == undefined -> " + resultat5 + "    |   null === undefined -> " + resultatStrict5);

let resultat6 = (null == false);
let resultatStrict6 = (null === false);
if (resultat6 !== resultatStrict6) compteurDifferences++;
console.log("null == false -> " + resultat6 + "    |   null === false -> " + resultatStrict6);

let resultat7 = (NaN == NaN);
let resultatStrict7 = (NaN === NaN);
if (resultat7 !== resultatStrict7) compteurDifferences++;
console.log("NaN == NaN -> " + resultat7 + "    |   NaN === NaN -> " + resultatStrict7);

let resultat8 = (1 == "1");
let resultatStrict8 = (1 === "1");
if (resultat8 !== resultatStrict8) compteurDifferences++;
console.log("1 == \"1\" -> " + resultat8 + "    |   1 === \"1\" -> " + resultatStrict8);

let resultat9 = (" \t\n " == 0);
let resultatStrict9 = (" \t\n " === 0);
if (resultat9 !== resultatStrict9) compteurDifferences++;
console.log("\" \\t\\n \" == 0 -> " + resultat9 + "    |   \" \\t\\n \" === 0 -> " + resultatStrict9);

console.log("\n---");
console.log("\n" + compteurDifferences + " paire(s) où == et === donnent des résultats différents");