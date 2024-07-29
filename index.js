/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


//create variables
let inputNumber = document.getElementById("input");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-output");
let volumeEl = document.getElementById("volume-output");
let massEl = document.getElementById("mass-output")

//conversion

const meterToFeet = 3.281;
const feetToMeter = 0.304;
const literToGallon = 0.264;
const gallonToLiter = 3.78;
const kiloToPound = 2.204;
const poundToKilo = 0.453; 

//onclick of convert button calculate using the input button
convertBtn.addEventListener("click", function () {
    let baseValue = inputNumber.value;
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`;
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`;
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(3)} kilos`;
})