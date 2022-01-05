/**
 * ? Installer tyspcript en local avec la commande
 * ? npm i -g typescript
 * ? Utiliser la commande tsc script.ts pour lancer le typescript et ajouter -w pour voir les modifications en direct
 */
console.log("typescript    ");
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var l2 = last(["a", "b", "c"]);
var makeArr = function (x, y) { return [x, y]; };
var v = makeArr(1, "okok");
var v2 = makeArr("ook", true);
