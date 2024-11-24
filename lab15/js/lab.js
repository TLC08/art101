// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 25.11.2024
// License: Public Domain
// Purpose: Experiment with jQuery and AJAX.

// Description: This JavaScript/jQuery script sends an API request to get data from a URL.

// Constants

// Functions

// AJAX function for Yes/No API
// Thanks to ChatGPT
$("#activate").click(function () {
  // Clear previous output for Yes/No only
  $("#yesno-output").html(""); // This clears the Yes/No output div

  // Make the API call
  $.ajax({
    url: "https://yesno.wtf/api",
    method: "GET",
    success: function (response) {
      // Create a new div for the Yes/No output
      const outputDiv = `<div class="output">
                           <p>Answer: ${response.answer}</p>
                           <img src="${response.image}" alt="${response.answer} gif">
                         </div>`;
      // Replace the content inside the Yes/No output container
      $("#yesno-output").html(outputDiv);
    },
    error: function (error) {
      console.error("Error:", error);
      $("#yesno-output").html(
        "<p class='error'>An error occurred. Please try again later.</p>"
      );
    },
  });
});

// AJAX function for NASA's Picture of the Day API
// Thanks to ChatGPT
$("#picture").click(function () {
  // Clear previous output for NASA only
  $("#nasa-output").html(""); // This clears the NASA output div

  $.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=E2CvRMXlB4cSsFogNXLwqKwxZZZXiW6Iu8TOxTF8", // Replace with your API key
    method: "GET",
    success: function (response) {
      // Create the output div
      const outputDiv = `
          <div class="output">
            <h3>${response.title}</h3>
            <p>${response.explanation}</p>
        `;

      // Check if the URL is for an image or a video
      let mediaContent = "";
      if (response.media_type === "image") {
        // If it's an image, show it
        mediaContent = `<img src="${response.url}" alt="NASA's Picture of the Day" />`;
      } else if (response.media_type === "video") {
        // If it's a video, show it
        mediaContent = `<iframe width="560" height="315" src="${response.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      }

      // Complete the output
      const finalOutput = outputDiv + mediaContent + "</div>";

      // Replace the content inside the NASA output container
      $("#nasa-output").html(finalOutput);
    },
    error: function (error) {
      console.error("Error:", error);
      $("#nasa-output").html(
        "<p class='error'>An error occurred. Please try again later.</p>"
      );
    },
  });
});
