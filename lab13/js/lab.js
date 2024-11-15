// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 18.11.2024
// License: Public Domain
// Purpose: Experiment with loops.

// Description: This JavaScript/jQuery script creates a loop function.

// Functions

// Loops through numbers 1 to 200, listing them as you go and will return "Fizz", "Buzz", "Boom", 
// or a combination of the 3 depending on whether or not the number is a multiple of 3, 5, and/or 7 respectively.
// Made with the help of ChatGPT
function fizzBuzzBoom() {
  const resultsContainer = $("#output"); // Get the results container
  let columnCount = 0; // Counter to keep track of when to start a new column
  let columnContainer; // Variable to store column div
  
  for (let i = 0; i <= 200; i++) {
    let message = `${i}: `;
    
    // Create a variable to build the message based on multiples of 3, 5, and 7
    let fizzMessage = "";

    if (i % 3 === 0) {
      fizzMessage += "Fizz";
    }
    if (i % 5 === 0) {
      fizzMessage += "Buzz";
    }
    if (i % 7 === 0) {
      fizzMessage += "Boom";
    }
    
    if (fizzMessage) {
      message += fizzMessage + "!"; // Add "!" only once if there are multiples
    } else {
      message += ""; // If no multiples found, default message
    }
    
    // If it's the first item or we need to start a new column (every 17 items)
    if (columnCount % 17 == 0) {
      // Create a new column div and append it to results container
      columnContainer = $('<div class="column"></div>');
      resultsContainer.append(columnContainer); // Append the column to the container
    }

    //Append the message into the correct column
    columnContainer.append('<p>' + message + '</p>');
    
    columnCount++; // Increment the counter to track the number of results
  }

  // Clear any floeated elements after the columns
  resultsContainer.append('<div class="clearfix"></div>');
}

// Call the function to populate the results when the page loads
$(document).ready(function() {
  fizzBuzzBoom();
});
