"use strict";
// If you hover on helloWorld and see dialog box that called inference.
let helloWorld = "Hello World"; // Inference
//Object
const user = {
    name: "Hayes",
    id: 0,
};
// Class
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("Murphy", 1);
function deleteUser(user) {
    // Use User Inteface for parameter
    // ...
}
function getAdminUser() {
    // Use User Inteface for function return
    //...
    const user3 = { name: "Bhoomi", id: 1 };
    return user3;
}
// Union on parameters
function getLength(obj) {
    return obj.length;
}
// Typeof
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
const object = backpack.get();
const object3 = backpack2.add(24);
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
const color = { hex: "#187ABF" };
// logPoint(color); // hex is not available in Point interface
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
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
const user4 = {
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
// function greet(person, date) {
//   // Parameter 'person' & 'date' implicitly has an 'any' type.
//   console.log(`Hello ${person}, today is ${date}`);
// }
// greet("Brendan"); // Expected 2 arguments, but got 1.
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Brendan", new Date());
