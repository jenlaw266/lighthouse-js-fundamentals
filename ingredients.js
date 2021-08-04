const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(ingredients.length>i){
  console.log(ingredients[i])
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let item of ingredients){
  console.log(item);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
//console.log(ingredients.reverse());
for (let j=0;j<ingredients.length; j++){
  console.log(ingredients[ingredients.length-1-j]);
}