//Area of circle

const Pi = 3.14;
const Radius = 5;
const AreaOfCircle = Pi * Radius ** 2;
console.log(AreaOfCircle);

//Area of circle 2

const Radius2 = 7;
const AreaOfCircle2 = Pi * Radius2 ** 2;
console.log(AreaOfCircle2);

function AreaOfCircle3(Radius3: number): number {
  return Pi * Radius3 ** 2;
}

const Result3 = AreaOfCircle3(10);
console.log(Result3);
