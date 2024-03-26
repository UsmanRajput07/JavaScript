const owners = ["jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
// console.log(movements.sort())

// Assinding Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   else if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);
// Decending Order
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   else if (b > a) return 1;
// });
movements.sort((a, b) => b - a);

console.log(movements);
