const x: null | number = 18;
const y: null | number = null;
if (!x) {
  console.log("x is null"); // x is null , true
}
if (y === null) {
  console.log("y is null"); // x is null , true
}
console.log(x > 10 && x < 20);
console.log(x > 10 || x < 20);

/*  =======================  */

const HasMilk = false;
const HasBread = true;
const CanHaveBreakfast = HasMilk && HasBread;
console.log(CanHaveBreakfast);
const ShouldHaveBreakfast = HasMilk || HasBread;
console.log(ShouldHaveBreakfast);
