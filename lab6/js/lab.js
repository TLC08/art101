// File: lab.js
// Author: Kimberly Estrada & Trevor Chee <kestrada9@ucsc.edu> <tlchee@ucsc.edu>
// Date: 24.10.2024
// Purpose: Experiment with Arrays and Objects

// Description:

// Define Variables
let myTransport = ["Toyota Corolla SE", "bus"];

let myMainRide = {
  make: "Toyota",
  model: "Corolla SE",
  color: "Pearl White",
  year: 2023,
  age: function () {
    return 2024 - this.year;
  },
};

//Output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>");
document.writeln(
  "My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, "\t"),
  "</pre>"
);
