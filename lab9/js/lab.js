// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 4.11.2024
// License: Public Domain
// Purpose: Experiment with jQuery

// Description:

// jQuery
//  add button to challenge section
// $("#challenge").append("<button id='button-challenge'>Make Special</button>");
//  add a click listener for the challenge button
// $("#button-challenge").click(function () {
//   add (or subtract) the "special class to the section"
//   $("#challenge").toggleClass("special");
// });

//  add button to problems section
// $("#problems").append("<button id='button-problems'>Make Special</button>");
//  add a click listener for the problems button
// $("#button-problems").click(function () {
//   add (or subtract) the "special class to the section"
//   $("#problems").toggleClass("special");
// });

//  add button to reflection section
// $("#reflection").append("<button id='button-reflection'>Make Special</button>");
//  add a click listener for the results button
// $("#button-reflection").click(function () {
//   add (or subtract) the "special class to the section"
//   $("#reflection").toggleClass("special");
// });

//  add button to results section
// $("#results").append("<button id='button-results'>Make Special</button>");
//  add a click listener for the results button
// $("#button-results").click(function () {
//   add (or subtract) the "special class to the section"
//   $("#results").toggleClass("special");
// });

// Task X
// add a button to the challenge, problems, reflection, and results sections
$(".special-section").append(
  "<button class='special-button'>Make Special</button>"
);
$(".special-button").click(function () {
  // add (or subtract) the "special class to the section"
  $(this).parent().toggleClass("special");
});

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
