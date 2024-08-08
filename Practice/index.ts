// If you hover on helloWorld and see dialog box that called inference.
let helloWorld = "Hello World"; // Inference

// interface
interface User {
  name: string;
  id: number;
}

//Object
const user: User = {
  name: "Hayes",
  id: 0,
};

// Class
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount("Murphy", 1);

function deleteUser(user: User) {
  // Use User Inteface for parameter
  // ...
}

function getAdminUser(): User {
  // Use User Inteface for function return
  //...
  const user3 = { name: "Bhoomi", id: 1 };
  return user3;
}

//Unions
type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Union on parameters
function getLength(obj: string | string[]) {
  return obj.length;
}

// Typeof
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

// Generic
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);

declare const backpack2: Backpack<number>;

const object3 = backpack2.add(24);

// Structural Type System

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
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
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

// The Basics

const message = "Hello World!";

// Accessing the property 'toLowerCase'
// on 'message' and then calling it

message.toLowerCase();

// Calling 'message'
// message(); // message is not a function in js / this expression is not callable in ts.

// function fn(x) {
//   return x.flip; // x.flip is not a function
// }

// fn();

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

function greet(person: string, date: Date) {
  // : string and : Date is called type annotations
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());
