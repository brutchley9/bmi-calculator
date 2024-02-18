console.log("BMI Calculator App");

var calculateButton = document.getElementById("calculate-button");
var bmiValue = document.getElementById("calculated-bmi");
var f = document.getElementById("feet-input");
var i = document.getElementById("inches-input");
var w = document.getElementById("weight-input");

//Equation to calculate BMI from height in feet/inches and weight in lbs
//BMI = [weight(lb) / height(in)^2] * 703

function calculateBMI() {

    var feet = parseInt(f.value);
    var inches = parseInt(i.value);
    var weight = parseInt(w.value);
    var feetInInches = parseInt(feet * 12);
    var inchHeight = (feetInInches + inches);
    var weightBMI = ((weight * 703) / (inchHeight * inchHeight));
    //var bmiNumber = weightBMI.value;

    console.log(feet + " feet " + inches + " inches tall")
    console.log(weight + " lbs");

    /*if (bmiValue.innerText === "null") {
        console.log("error");
    } else {
        console.log("Your BMI is " + weightBMI);
        document.getElementById('calculated-bmi').value = JSON.stringify(weightBMI);
    };*/
    
    console.log("Your BMI is " + weightBMI);
    document.getElementById('calculated-bmi').value = JSON.stringify(weightBMI);

};

w.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        calculateButton.click();
    };
});










function sum(a, b) {
    return a + b;
};

module.exports = { sum, calculateBMI };