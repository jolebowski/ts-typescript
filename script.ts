/**
 * ? Installer tyspcript en local avec la commande
 * ? npm i -g typescript
 * ? Utiliser la commande tsc script.ts pour lancer le typescript et ajouter -w pour voir les modifications en direct
 */
console.log("typescript    ");

type numArray = Array<number>; // number[]

const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);

const l2 = last(["a", "b", "c"]);

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => [x, y];

const v = makeArr(1, "okok");

const v2 = makeArr("ook", true);
