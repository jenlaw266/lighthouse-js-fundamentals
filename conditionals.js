//example 1

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");




//example 2
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



//example 3
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}



//example 4
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}




//example 5 
if (!raining) {
  console.log("Leave your umbrella at home!");
}





//whichSchool
/*Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
*/
const whichSchool  = function (age) {
  if (age < 13){
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else{
    return "Lighthouse Labs";
  }
}
  console.log(whichSchool(18)); 