// Une fonction qui retourne simplement ce qu'elle reçoit en paramètre
function returnParameter<T>(x: T): T {
    return x;
}
// Ceci fonctionne, c'est ce que nous avons vu jusque-là
const a = returnParameter<number>(1);
// Mais puisque le type "T" est utilisé pour typer le paramètre "x",
// il n'est pas nécessaire de le préciser en appelant la fonction.
// Avec la ligne ci-dessous, TypeScript devine tout seul que "T" est "number" !
const a2 = returnParameter(1);
console.log(a)