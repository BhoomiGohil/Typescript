// JavaScript Types....
// Primitives:
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// undefined : typeof instance === "undefined"

// Structural Types:
// Object : typeof instance === "object"
// Function : typeof instance === "function"

// Structural Root Primitive:
// null : typeof instance === "object"

// Benefits of TypeScript
// challenges:
// - give the screen's innerHTML a string
// - change the two input values to numbers

export {};

const button = document.querySelector(".button");
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
const screen = document.querySelector(".screen");

function addNumbers(a: number, b: number) {
  screen!.innerHTML = (a + b).toString();
}

button!.addEventListener("click", () =>
  addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
