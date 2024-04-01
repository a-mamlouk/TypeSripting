/**********************/
function sayHello(target) { return "Hello ".concat(target.firstName); }
sayHello("koul"); // À cause de "any", TypeScript ne remonte aucune erreur ici !
console.log(sayHello("cookie"))