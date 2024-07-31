// JavaScript Types....
// Primitives:
// Boolean : typeof instance === "boolean"
// Number : typeof instance === "number"
// String : typeof instance === "string"
// BigInt : typeof instance === "bigint"
// Symbol : typeof instance === "symbol"
// undefined : typeof instance === "undefined"
var button = document.querySelector(".button");
var firstInput = document.querySelector("#first-input");
var secondInput = document.querySelector("#second-input");
var screen = document.querySelector(".screen");
function addNumbers(a, b) {
    screen.innerHTML = (a + b).toString();
}
button.addEventListener("click", function () {
    return addNumbers(parseInt(firstInput.value), parseInt(secondInput.value));
});
export {};
