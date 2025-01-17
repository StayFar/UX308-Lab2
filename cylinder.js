// This program *calculates* **volume** of **cylinder**

// Declare variables for diameter and height
var diameter = 15; // Replace with the diameter in meters
var height = 3;    // Replace with the height in meters

// Calculate the radius
var radius = diameter / 2;

// Calculate the volume of the cylinder: π * r² * h
var volume = Math.PI * Math.pow(radius, 2) * height;

// Output the result
console.log("The volume of the cylinder is " + volume.toFixed(2) + " cubic meters.");

  