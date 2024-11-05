// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 7.11.2024
// License: Public Domain
// Purpose: Experiment with DOM manipulation

// Description: This JavaScript/jQuery script appends new elements to an output div

// Constants

// Functions
function generateRandomText() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function () {
  // get new fake dialogue
  const newText = generateRandomText();

  // append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + "</p></div>");
});

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
