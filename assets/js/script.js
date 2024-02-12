console.log("BMI Calculator App");

//Equation to calculate BMI from height in feet/inches and weight in lbs
//BMI = [weight(lb) / height(in)^2] * 703

function calculateBMI() {
    const f = document.getElementById("feet-input");
    const feet = parseInt(f.value);
    const i = document.getElementById("inches-input");
    const inches = parseInt(i.value);
    const w = document.getElementById("weight-input");
    const weight = parseInt(w.value);
    const feetInInches = parseInt(feet * 12);
    const inchHeight = (feetInInches + inches);
    console.log(feet + " feet " + inches + " inches tall")
    console.log(weight + " lbs");
    const weightBMI = ((weight * 703) / (inchHeight * inchHeight));
    console.log("Your BMI is " + weightBMI);
    document.getElementById('calculated-bmi').value = JSON.stringify(weightBMI);
};