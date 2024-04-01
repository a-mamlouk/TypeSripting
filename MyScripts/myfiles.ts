type Shop<itemType> = { 
    name : string
    items : Array<itemType>;
}

type ShopOfNumbers = Shop<number>

type ShopOfStrings = Shop<string>

type ShopOfBooleans = Shop<Boolean>

/**********************/
function sayHello(target: any) { return `Hello ${target.firstName}`; }
sayHello("koul"); // À cause de "any", TypeScript ne remonte aucune erreur ici !