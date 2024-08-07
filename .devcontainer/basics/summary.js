// Premitive datatypes

// 7 types : String, Number, Boolean, Null, 
// Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const IsLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('12345')
const anotherId = Symbol('12345');

// console.log(id === anotherId);

const bigNumber = 233544465463423n

// Dynamically typed language

// Reference (Non Premitive)

// Array, Objects, Functions
const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
  name: "Priyank",
    age: 23,
}
console.log(heros)

console.log(myObj);

function myFunction() {
    console.log("Hello world");
}
// myFunction();
console.log(typeof bigNumber);