// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 31.10.2024
// License: Public Domain
// Purpose: Experiment with anonymous functions and callbacks

// Description:

// Constants
let myArray = [2, 3, 5, 7, 9, 11, 12, 16, 18];

let alteredArray = myArray.map(multiplyTwo);

let isGreaterOrEqual20 = alteredArray.map(function (x) {
  return x >= 20;
});

// Functions
// multipleTwo is a function that multiplies numbers by 2
function multiplyTwo(x) {
  let results = x * 2;
  return results;
}

function main() {
  console.log("Main function started.");
  console.log("Taking an array and multiplying each of its elements by 2.");
  console.log("Original Array: ", myArray);
  console.log("Altered Array: ", myArray.map(multiplyTwo));
  console.log("Is each element in the Altered Array >= 20?");
  console.log(
    "Well let's check... Checking if each element is >= 20: ",
    isGreaterOrEqual20
  );
}

// let's get this party started
main();
