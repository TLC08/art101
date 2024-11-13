// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 14.11.2024
// License: Public Domain
// Purpose: Create a function that depends on conditionals.

// Description: This JavaScript/jQuery script takes a value from the input field and sorts you into one of the four Hogwarts houses.

// Functions

// Takes the length of a string, divides it by 4, and returns an object.
// function sortingHat(str) {
//   const length = str.length;
//   const mod = length % 4;
//   if (mod == 0) {
//     house = "Gryffindor";
//     description =
//       "Values bravery, chivalry, and helping others. Gryffindors are daring, courageous, and determined.";
//   } else if (mod == 1) {
//     house = "Ravenclaw";
//     description =
//       "Values intelligence, knowledge, planning ahead, and wit. Ravenclaws are known for being eccentric, and many of the great wizarding inventors and innovators came from this house.";
//   } else if (mod == 2) {
//     house = "Slytherin";
//     description =
//       "Values ambition, cunningness, heritage, and resourcefulness. Slytherins are proud, ambitious, and cunning.";
//   } else if (mod == 3) {
//     house = "Hufflepuff";
//     description =
//       "Values hard work, patience, loyalty, and fair play. Hufflepuffs are dedicated, patient, and loyal.";
//   }
//   return { house, description };
// }

// // click listener for button
// $("#button").click(function () {
//   // get value of input field
//   const name = $("#input").val();

//   // Check if input is empty
//   if (!name.trim()) {
//     // .trim() removes any leading/trailing whitespace
//     // If empty, return early and show an error or do nothing
//     alert("Please input something.");
//     return; // Prevents further code execution if the input is empty
//   }

//   // A variable to store the result of sortingHat()
//   const result = sortingHat(name);

//   let outputHtml = `
//     <div class="user-output">
//         <h3>The Sorting Hat has sorted you into: ${result.house}</h3>
//         <p>Description: ${result.description}</p>
//     </div>`;

//   // Clear the previous output before appending new content
//   $(".user-output").remove(); // This removes all previously inserted .user-output divs

//   // append a new div to our output div
//   $("#output p").last().after(outputHtml);
// });

// Refactored version of code using an array
housesArray = [
  {
    house: "Gryffindor",
    description:
      "Values bravery, chivalry, and helping others. Gryffindors are daring, courageous, and determined.",
  },
  {
    house: "Ravenclaw",
    description:
      "Values intelligence, knowledge, planning ahead, and wit. Ravenclaws are known for being eccentric, and many of the great wizarding inventors and innovators came from this house.",
  },
  {
    house: "Slytherin",
    description:
      "Values ambition, cunningness, heritage, and resourcefulness. Slytherins are proud, ambitious, and cunning.",
  },
  {
    house: "Hufflepuff",
    description:
      "Values hard work, patience, loyalty, and fair play. Hufflepuffs are dedicated, patient, and loyal.",
  },
];

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  const index = str.length % 4;
  return housesArray[index];
}

// click listener for button
$("#button").click(function () {
  // get value of input field
  const name = $("#input").val();

  // Check if input is empty
  if (!name.trim()) {
    // .trim() removes any leading/trailing whitespace
    // If empty, return early and show an error or do nothing
    alert("Please input something.");
    return; // Prevents further code execution if the input is empty
  }

  // A variable to store the result of sortingHat()
  const result = sortingHat(name);

  let outputHtml = `
    <div class="user-output">
        <h3>The Sorting Hat has sorted you into: ${result.house}</h3>
        <p>Description: ${result.description}</p>
    </div>`;

  // Clear the previous output before appending new content
  $(".user-output").remove(); // This removes all previously inserted .user-output divs

  // append a new div to our output div
  $("#output p").last().after(outputHtml);
});
