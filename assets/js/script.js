console.log("Hello World");

//Equation to calculate BMI from height in feet/inches and weight in lbs
//BMI = [weight(lb) / height(in)^2] * 703

//Logic below shows how a variable or function would calculate BMI using JS.

/*var feet = 5;
var inches = 7;
var inchHeight = (feet * 12) + inches;
var pounds = 175;
var weightBMI = (pounds * 703) / (inchHeight * inchHeight)
console.log(weightBMI);*/

function calculateBMI() {
    const f = document.getElementById("feet-input");
    const feet = parseInt(f.value);
    const i = document.getElementById("inches-input");
    const inches = parseInt(i.value);
    const w = document.getElementById("weight-input");
    const weight = parseInt(w.value);
    const feetInInches = parseInt(feet * 12);
    const inchHeight = (feetInInches + inches);
    console.log(inchHeight + " inches tall");
    console.log(weight + " lbs");
};