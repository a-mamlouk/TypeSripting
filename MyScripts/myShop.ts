type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
};
type Pet = Character;

type Hero = Character & {
    pet?: Pet;
};

type Shop1 = {
    name: string;
    owner: Character; // Le même "Character" qu'on a vu au chapitre précédent
    items: Array<unknown>;
};
type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
};
type Armory = Shop1 & {
    items: Array<Equipment>;
};
type PetShop = Shop1 & {
    items: Array<Pet>; // Le même "Pet" qu'on a vu au chapitre précédent
};
type Potion = {
    name: string
    life: number
}
type Apothecary = Shop1 & {
    items: Array<Potion>; // On admet qu'on a défini le type "Potion"
};