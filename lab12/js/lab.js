// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 14.11.2024
// License: Public Domain
// Purpose: Create a function that depends on conditionals.

// Description: This JavaScript/jQuery script gets a value from an input field and outputs a modified version.

// Constants

// Functions

// Takes the length of a string, divides it by 4, and returns an object.
function sortingHat(str) {
const length = str.length;
console.log("Length of your string: " + length);
const mod = length % 4;
console.log("Length of your string divided by 4: " + mod);
if (mod == 0) {
  house = "Gryffindor";
  description = "Values bravery, loyalty, and chivalry, and is represented by a lion."
} else if (mod == 1) {
  house = "Ravenclaw";
  description = "Values intelligence, creativity, and wit, and is associated with air and gas."
} else if (mod == 2) {
  house = "Slytherin";
  description = "Values kindness, hard work, and patience, and is associated with earth and solid. Hufflepuffs are known for being humble and loyal friends. The badger is the symbol of this house."
} else {
  house = "Hufflepuff";
  description = "Values ambition, cunning, and resourcefulness, and is associated with water and liquid. Many Slytherins became death eaters during Voldemort's uprising."
};
console.log("Your house is: " + house)
return {house, description};
};

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
  };

  let outputHtml = `
  <div class="user-output">
      <p>Sorted Name: ${userNameSorted}</p>
      <p>Anagram: ${userNameAnagram}</p>
  </div>`;
  const result = sortingHat(name);

  $("#output").last().after('<div class="text"><h3>' + 'The Sorting Hat has sorted you into ' + result.house + '.</h3></div>');
})

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
