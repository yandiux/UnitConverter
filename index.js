const unitInformation = document.getElementById("quantity");
const conversionButton = document.getElementById("conver-btn");

const lengthDiv = document.getElementById("length");
const volumeDiv = document.getElementById("volume");
const massDiv = document.getElementById("mass");

const oneFoot = 0.3048; // 1 foot = 0.3048 meters
const oneMeter = 3.281; // 1 meter = 3.281 feet

conversionButton.addEventListener("click", function () {
  // Retrieve the input value
  let unit = unitInformation.value;

  // Clear previous results before adding a new one (optional)
  lengthDiv.innerHTML = "";

  // Unit calculation
  lengthDiv.innerHTML += `
    <p>${unit} meters = ${(unit * oneMeter).toFixed(2)} feet | 
       ${unit} feet = ${(unit * oneFoot).toFixed(2)} meters</p>
  `;
});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
