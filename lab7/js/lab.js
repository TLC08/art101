// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 28.10.2024
// License: Public Domain
// Purpose: Experiment with functions

// Description: Takes a user's name and does things like sorting and randomizing the letters.

// Functions
// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName(userName) {
  return userName.split("").sort().join("");
  console.log(sortUserName(userName));
}

// shuffleArray - take an array and shuffle the contents
// Thanks to Wes Modes: https://wmodes.github.io/art101/lab7/js/lab7.js & https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Given a string, return string in Title Case
// Thanks to Wes Modes: https://wmodes.github.io/art101/lab7/js/lab7.js & https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// randomizeName - a function that takes user input and randomizes the letters of their name
function randomizeName(userName) {
  // convert userName string to an array
  let nameArray = userName.toLowerCase().split("");
  console.log("nameArray =", nameArray);
  // shuffle array with our shuffle function
  let shuffledArray = shuffleArray(nameArray);
  console.log("shuffledArray =", shuffledArray);
  let shuffledString = shuffledArray.join("");
  // shift to Title Case (like a name)
  let newName = toTitleCase(shuffledString);
  return newName;
}

// sortUserNameIgnoreCase - a function that sorts uppercase and lowercase letters of the user's name together
// Thanks to ChatGPT
function sortUserNameIgnoreCase(userName) {
  // Convert the string into an array of characters
  let charArray = userName.split("");
  // Sort the array using a custom comparison function
  charArray.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  // Join the sorted array back into a string
  return charArray.join("");
}

// main - a function that outputs the sorted and randomized names
// Thanks to Wes Modes: https://wmodes.github.io/art101/lab7/js/lab7.js & ChatGPT
function main() {
  console.log("Main function started.");

  // Prompt the user for their name
  let userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  if (!userName) {
    alert("No name provided!");
    return; // Exit if no name was given
  }

  // Get the output element by its ID
  let outputDiv = document.getElementById("outputjs");

  // Set a CSS variable with the length of the user's name
  outputDiv.style.setProperty("--textlen", userName.length);

  // Call sorting functions and display results
  let sortedName = sortUserName(userName);
  outputDiv.innerHTML += "Here's your sorted name: " + sortedName + "<br><br>";

  let sortedUpperLower = sortUserNameIgnoreCase(userName);
  outputDiv.innerHTML +=
    "Here's your sorted name that ignores case: " +
    sortedUpperLower +
    "<br><br>";

  let randomName = randomizeName(userName);
  outputDiv.innerHTML +=
    "And oh hey, I fixed your name into an anagram.<br>Your new one is to the right.";
  outputDiv.innerHTML += "<div class='name'>" + randomName + "</div>";
}

// Calls the main function
main();
