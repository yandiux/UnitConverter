const unitInformation = document.getElementById("quantity");
const conversionButton = document.getElementById("conver-btn");

const lengthDiv = document.getElementById("length");
const volumeDiv = document.getElementById("volume");
const massDiv = document.getElementById("mass");

const oneFoot = 0.3048; // 1 foot = 0.3048 meters
const oneMeter = 3.281; // 1 meter = 3.281 feet
const oneLitter = 3.785; // Corrected variable name
const oneGallon = 3.785;
const mass = 2.205;

let attempts = 0;
const maxAttempts = 1;

// Disable button if input is empty
unitInformation.addEventListener("input", function () {
  conversionButton.disabled = unitInformation.value.trim() === "";
});

conversionButton.addEventListener("click", function () {
  let unit = parseFloat(unitInformation.value); // Convert input to number

  // Validate input
  if (isNaN(unit) || unit <= 0) {
    alert("Please enter a valid number greater than zero.");
    return;
  }

  if (attempts < maxAttempts) {
    // Clear previous results
    lengthDiv.innerHTML = "";
    volumeDiv.innerHTML = "";
    massDiv.innerHTML = "";

    // Unit calculations
    lengthDiv.innerHTML = `
      <p>${unit} meters = ${(unit * oneMeter).toFixed(3)} feet | 
         ${unit} feet = ${(unit * oneFoot).toFixed(3)} meters</p>
    `;

    volumeDiv.innerHTML = `
      <p>${unit} liters = ${(unit / oneLitter).toFixed(3)} gallons | 
         ${unit} gallons = ${(unit * oneGallon).toFixed(3)} liters</p>
    `;

    massDiv.innerHTML = `
      <p>${unit} kilograms = ${(unit * mass).toFixed(3)} pounds | 
         ${unit} pounds = ${(unit / mass).toFixed(3)} kilograms</p>
    `;

    attempts++;
  } else {
    conversionButton.disabled = true;
    lengthDiv.innerHTML =
      volumeDiv.innerHTML =
      massDiv.innerHTML =
        "You have reached the maximum number of attempts, the page will reload.";

    setTimeout(() => {
      location.reload();
    }, 1500);
  }
});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
