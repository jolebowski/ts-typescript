var value; // Ts number
console.log(value); /// undefined 
var value1;
console.log(value1); // undefined 
// let value2:null; 
// console.log(value2); // undefined 
// Dans le cas d'un undefined qu'on attribue a une variable 
// on a toujours undefined même lorsqu'il s'agit de null 
var value2 = null;
console.log(value2); // null 
var value3;
value3 = null;
value3 = undefined;
console.log(value3);
/**
 * ! INFORMATION : il faut activer dans le fichier
 * ! tsconfig --strickNullChecks si on souhaite que le type de value3
 * ! soit bien respecter
 * ! Remplacer par unknow ou any si on souhaite que value3 soit valider par TS
 */
