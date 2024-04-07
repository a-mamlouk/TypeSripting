const Age = 30;
if (Age >= 18) {
  console.log("you can drive, be careful");
}
let a = 1;
let b = 2;
if (a != b) {
  console.log(true);
}
if (1 == "1") {
  console.log(true); // true ??? wtf its a string !!
}
if (1 === "1") {
  console.log(true); // true ??? wtf its a string !!
}

let score = 90;
if (score >= 90) {
  console.log("You got an A, congrats!");
} else {
  console.log("Your Asian parents are not proud of you");
}
let temp = 0;
if (temp > 50) {
  console.log("You are Fried !");
} else if (temp > 40) {
  console.log("It's hot outside");
} else if (temp > 30) {
  console.log("It's Spring outside");
} else if (temp > 20) {
  console.log("Bring a jacket");
} else if (temp > 10) {
  console.log("Are you wearing a coat ?");
} else {
  console.log("It's freezing outside");
}

// challenge
const OrderStatus: "pending" | "shipped" | "delivered" = "pending";
if (OrderStatus === "pending") {
  console.log("Your order is pending");
} else if (OrderStatus === "shipped") {
  console.log("Your order is arriving soon ...");
} else {
  console.log("Your order is delivered");
}
