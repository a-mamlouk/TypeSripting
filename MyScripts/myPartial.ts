type Character = {
    // Toutes les propriétés sont requises (elles n'ont pas le signe "?")
    name: string;
    life: number;
    attack: number;
    defense: number;
};
const myCharacter: Partial<Character> = {
    // On ne fournit que le nom, pas le reste des propriétés.
    // On n'a pas d'erreur car "Partial" rend
    // toutes les propriétés optionnelles.
    name: 'Mario',
};
console.log(myCharacter.name)