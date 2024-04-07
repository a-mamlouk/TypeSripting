// AND &&
const Age = 18;
const HasId = true;
const CanDrink = Age >= 21 && HasId;
console.log(CanDrink);
const cannotDrink = !CanDrink;
console.log(cannotDrink);

let score = 75;
const HasPassed = score >= 50;
const HasBonus = score >= 80;
const ExtraBonus = (score >= 90 && HasBonus) || score === 100;
console.log(HasPassed, HasBonus, ExtraBonus);

//OR ||

const HasMilk = false;
const HasSugar = false;
const HasCereal = true;
const CanHaveBreakfast = HasMilk && (HasSugar || HasCereal);
console.log(CanHaveBreakfast);

// ---

const Gift: null | string = "bus";
const NewGift = Gift || undefined;
console.log(NewGift);

const Gift2: null | string = "";
const NewGift2 = Gift2 ?? "";
console.log(NewGift2);
