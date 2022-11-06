/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let lengthEl = document.getElementById("length-el").querySelector("p")
let volumeEl = document.getElementById("volume-el").querySelector("p")
let massEl = document.getElementById("mass-el").querySelector("p")


const convertBtn = document.getElementById("convert-btn")

convertBtn.onclick = function() {
    const inputEl = document.getElementById("number-input").value
    lengthEl.textContent =     `${inputEl} meters = ${(inputEl * 3.281).toFixed(3)} feet | ${inputEl} feet = ${(inputEl / 3.281).toFixed(3)} meters`
    volumeEl.textContent =     `${inputEl} liters = ${(inputEl * 0.264).toFixed(3)} gallons | ${inputEl} gallons = ${(inputEl / 0.264).toFixed(3)} liters`
    massEl.textContent  =      `${inputEl} kilogram = ${(inputEl * 2.204).toFixed(3)} pounds | ${inputEl} pound = ${(inputEl / 2.204).toFixed(3)} kilons`

}