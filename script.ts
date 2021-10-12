let value: number // Ts number
console.log(value); /// undefined 

let value1: undefined; 
console.log(value1); // undefined 

// let value2:null; 
// console.log(value2); // undefined 

// Dans le cas d'un undefined qu'on attribue a une variable 
// on est toujours undefined pareil lorsqu'il sagit de null 

let value2:null = null; 
console.log(value2); // null 

let value3:string | number; 
value3 = null;
value3 = undefined;
console.log(value3);

/**
 * ! INFORMATION : il faut activer dans le fichier 
 * ! tsconfig --strickNullChecks si on souhaite que le type de value3 
 * ! soit bien respecter ou sinon remplacer par unknow ou any 
 */
