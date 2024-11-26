// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 2.12.2024
// License: Public Domain
// Purpose: Experiment with processing JSON from an API.

// Description: This JavaScript/jQuery script fetches the latest XKCD comic automatically when the page loads/cycle through the XKCD comic using previous and next buttons.

// Thanks with the help of ChatGPT

// $(document).ready(function () {
// let comicObj;
//   // Fetch the latest XKCD comic automatically when the page loads
//   $.getJSON(
//     "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
//     function (data) {
//       const outputHtml = `
//       <h2>${data.title}</h2>
//       <img src="${data.img}" alt="${data.alt}" />
//       <p>${data.alt}</p>
//     `;
//       $("#output").html(outputHtml); // Display the comic
//     }
//   ).fail(function () {
//     $("#output").html(
//       "<p>Error fetching the comic. Please try again later.</p>"
//     );
//   });
// });

// Thanks with the help of ChatGPT
// Initialize comicObj with the first comic number
let comicObj = {
  num: 1, // Start with comic number 1
};

// Function to fetch the comic and update the page
function getAndPutData(url) {
  $.getJSON(url, function (data) {
    // Update the page with the new comic's data
    $("#comic-title").text(data.title);
    $("#comic-image").attr("src", data.img);
    $("#comic-image").attr("alt", data.alt);
    $("#comic-alt-text").text(data.alt);
  }).fail(function () {
    $("#comic-container").html(
      "<p>Error fetching the comic. Please try again later.</p>"
    );
  });
}

// Function to change the comic (Previous or Next)
function changeComic(direction) {
  // Update the comic number based on the direction (prev or next)
  if (direction === "prev" && comicObj.num > 1) {
    comicObj.num -= 1;
  } else if (direction === "next") {
    comicObj.num += 1;
  }

  // Construct the API URL with the updated comic number
  const url = `https://cors-anywhere.herokuapp.com/https://xkcd.com/${comicObj.num}/info.0.json`;

  // Fetch and display the new comic
  getAndPutData(url);
}

// Load the first comic when the page loads
$(document).ready(function () {
  const firstComicUrl = `https://cors-anywhere.herokuapp.com/https://xkcd.com/${comicObj.num}/info.0.json`;
  getAndPutData(firstComicUrl);
});
