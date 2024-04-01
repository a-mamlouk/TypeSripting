// On définit un type représentant un objet dont les clés
// sont des chaînes de caractères (n'importe lesquelles)
// et les valeurs sont des nombres
type CollectionOfNumbers = Record<string, number>;
const stats: CollectionOfNumbers = {
    age: 45,
    life: 100,
    magic: 10,
    whateverTheNameItMustContainANumber: 20,
};
console.log(stats)

// On peut utiliser une union pour n'autoriser que des clés spécifiques
type StatisticNames = 'life' | 'attack' | 'defense';
const stats2: Record<StatisticNames, number> = {
    life: 100,
    attack: 10,
    defense: 20,
};
console.log(stats2)