// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 11.11.2024
// License: Public Domain
// Purpose: Experiment with JavaScript Events and Forms

// Description: This JavaScript/jQuery script gets a value from an input field and outputs a modified version.

// Constants 

// Functions

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split("").sort().join("");
}

// click listener for button
$("#submit").click(function(){
});

// get value of input field
const userName = $("#user-name").val();

// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
