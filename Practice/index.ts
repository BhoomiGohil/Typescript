const message = "Hello World!";

// Accessing the property 'toLowerCase'
// on 'message' and then calling it

message.toLowerCase();

// Calling 'message'
// message(); // message is not a function in js / this expression is not callable in ts.

// function fn(x) {
//   return x.flip(20); // x.flip is not a function
// }

// fn(4);

const user = {
  name: "Bhoomi",
  age: 26,
};

// user.location; // returns undefined in js / Property 'location' does not exist on type '{ name: string; age: number; }' in ts.

const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowerCase();
// announcement.toLocalLowerCase(); // Property 'toLocalLowerCase' does not exist on type '"Hello World!"'. Did you mean 'toLocaleLowerCase'?

// We probably meant to write this...
announcement.toLocaleLowerCase();

function flipCoin() {
  // Meant to be Math.random()
  // return Math.random < 0.5; // Operator '<' cannot be applied to types '() => number' and 'number'.
}

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  //..
}
// else if (value === "b") {
//   // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
//   // Oops, unreachable
// }

// Greets the world.
console.log("Hello world!");

// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}`);
}

greet("Brendan", Date()); // Expected 2 arguments, but got 1.
