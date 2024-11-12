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

// Creates an anagram
// Thanks to ChatGPT
function createAnagram(str) {
  // Split the string into an array of characters
  const characters = str.split("");

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]]; // Swap characters
  }

  // Join the characters back into a string and return
  return characters.join("");
}

//

// click listener for button
$("#submit").click(function () {
  // get value of input field
  const userName = $("#user-name").val();

  // Check if input is empty
  if (!userName.trim()) {
    // .trim() removes any leading/trailing whitespace
    // If empty, return early and show an error or do nothing
    alert("Please enter a name.");
    return; // Prevents further code execution if the input is empty
  }

  // now let's sort it
  let userNameSorted = sortString(userName);

  // now let's create an anagram
  let userNameAnagram = createAnagram(userName);

  let outputHtml = `
    <div class="user-output">
        <p>Sorted Name: ${userNameSorted}</p>
        <p>Anagram: ${userNameAnagram}</p>
    </div>`;

  // Clear the previous output before appending new content
  $(".user-output").remove(); // This removes all previously inserted .user-output divs

  // append a new div to our output div
  $("#output p").last().after(outputHtml);
});

// Glitch Effect
// Thanks to ChatGPT
let glitchInterval = null; // Initialize with null to check if it's already running

function startGlitch() {
  // Check if glitchInterval is already running
  if (glitchInterval) return;

  const elements = document.querySelectorAll("h1, body, p");

  glitchInterval = setInterval(() => {
    elements.forEach((element) => {
      const effects = [
        "glitch-color",
        "glitch-shift",
        "glitch-pixelate",
        "glitch-rgb-split",
        "glitch-invert",
      ];
      effects.forEach((effect) => {
        if (Math.random() > 0.5) {
          element.classList.toggle(effect);
        } else {
          element.classList.remove(effect);
        }
      });
    });
  }, 500);

  // Additional effect: Toggle the scanline overlay on/off every 1.5 seconds
  const scanline = document.querySelector(".scanline-overlay");
  scanline.style.opacity = 0.3;
  setInterval(() => {
    scanline.style.opacity = Math.random() > 0.5 ? 0.3 : 0;
  }, 1500);
}

function stopGlitch() {
  if (glitchInterval) {
    clearInterval(glitchInterval);
    glitchInterval = null; // Reset to allow startGlitch to run again
  }

  const elements = document.querySelectorAll("h1, body, p");

  elements.forEach((element) => {
    element.classList.remove(
      "glitch-color",
      "glitch-shift",
      "glitch-pixelate",
      "glitch-rgb-split",
      "glitch-invert"
    );
  });

  const scanline = document.querySelector(".scanline-overlay");
  scanline.style.opacity = 0.3;
}

document.getElementById("startGlitch").addEventListener("click", startGlitch);
document.getElementById("stopGlitch").addEventListener("click", stopGlitch);

// let's get this party started
main();