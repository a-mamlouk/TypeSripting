/*
//Area of circle

const Pi = 3.14;
const Radius = 5;
const AreaOfCircle = Pi * Radius ** 2;
console.log(AreaOfCircle);

//Area of circle 2

const Radius2 = 7;
const AreaOfCircle2 = Pi * Radius2 ** 2;
console.log(AreaOfCircle2);
*/
function AreaOfCircle(radius: number): number {
  const Area = Math.PI * radius ** 2;
  return Area;
}
function PrintAreaOfCircle(Area: number): void {
  console.log(`The area of the circle is ${Area}`);
}
const Area1 = AreaOfCircle(5);
PrintAreaOfCircle(Area1);
const Area2 = AreaOfCircle(7);
PrintAreaOfCircle(Area2);
