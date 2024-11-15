// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 18.11.2024
// License: Public Domain
// Purpose: Experiment with loops.

// Description: This JavaScript/jQuery script creates a loop function.

// Constants

const maxFactors = 4;

// Functions

// Get the values from the webpage and write them in an object
// This expects to have input fields with ids num0, text0, num1, text1, etc
// Returns an object that looks like this:
// {3: "Fizz", 5: "Buzz", 7: "Boom"}
// Made with the help of Wes Modes
function getFactorObj() {
  const factorObj = {};
  for (let factor = 0; factor < maxFactors; factor++) {
    let numId = "num" + factor;
    let textId = "text" + factor;
    let numValue = $("#" + numId).val();
    let textValue = $("#" + textId).val();
    console.log(factor + ") num:", numValue, "text:", textValue);
    // if either value is blank, don't use it
    if (numValue && textValue) {
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}

// Loops over the numbers and outputs the number and matching text for factors
// Made with the help of Wes Modes and ChatGPT
function fizzBuzzBoom(maxNums, factorObj) {
  for (let i = 0; i <= maxNums; i++) {
    // Creates a variable to build the message based on multiples of the factors
    let message = `${i}: `;

    // Iterates over all of the output numbers
    for (let factor in factorObj) {
      // Checks to see if this num is a multiple of factor
      if (i % factor == 0) {
        // If yes, than add the text to the message
        message += factorObj[factor];
      }
    }
    if (message !== `${i}: `) {
      // If the message doesn't strictly equal `${i}: `
      message += "!"; // Add "!" only once if there are multiples
    }
    // Appends number and output
    $("#output").append("<p>" + message + "</p>");
  }
}

function reportError(str) {
  $("#output").append("<div class='error'>" + str + "</div");
}

// A button to run the program
$("#button").click(function () {
  let max = $("#max").val();
  if (!max) {
    reportError("You must provide a maximum");
    return;
  }
  // Calls the getFactorObj() function and assigns it to a variable
  let factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
    reportError("You must provide at least one factor and text");
    return;
  }
  // Calls the fizzBuzzBoom() function
  fizzBuzzBoom(max, factorObj);
});
