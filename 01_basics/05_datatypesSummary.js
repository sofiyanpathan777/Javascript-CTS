//Primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100 //Number
const scoreValue = 100.3 //Number
const isLoggedIn = false //Boolean 
const outsideTemp = null // null
const userEmail = undefined // Undefined
const id = Symbol("123") //Symbol
const anotherId = Symbol("123");
//note id value can be same but its not equal.

//const BigNumber = 122354642343453n //BigInt

//Reference (Non Premitive)

//3 Types: Array, Objects, Functions.
const heros = ["govinda", "nagarjun", "Shaktiman"];
//Arrays

let myObj = {
    name: "sofiyan",
    age: 22,
}

const myFunction = function(){
   // console.log("Hello world");
}
console.log(typeof outsideTemp);

/**
 * @reference https://262.ecma-international.org/5.1/#sec-11.4.3
 * | Type of val                           | Result                                                                    |
 * |---------------------------------------|---------------------------------------------------------------------------|
 * | Undefined                             | "undefined"                                                               |
 * | Null                                  | "object"                                                                  |
 * | Boolean                               | "boolean"                                                                 |
 * | Number                                | "number"                                                                  |
 * | String                                | "string"                                                                  |
 * | Object (native and does not implement)| "object"                                                                  |
 * | Object                     ==         | "function"                                                                |
 * | Object                     ==         | Implementation-defined (not undefined, boolean, number, or string)        |
 */

 //************************************************************************************************************************

 // Stack (Primitive) , Heap (Non Primitive)

 