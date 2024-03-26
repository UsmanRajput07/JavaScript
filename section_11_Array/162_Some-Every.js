const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// In includes method we can't set a Specific condition
console.log(movements.includes(-400));

// example 2 set Specific condition
console.log(movements.some((cv) => cv > 0));

//  Every Method
console.log(movements.every((cv) => cv > 0));

//  Separate callback
const deposit = (mov) => mov > 0;
console.log("Separate callback");
console.log(movements.every(deposit));
console.log(movements.some(deposit));
console.log(movements.filter(deposit));
