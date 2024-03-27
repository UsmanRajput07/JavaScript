const now = new Date();
// console.log(now)
// console.log(new Date("march 28, 2024"))

console.log(new Date(2024,2,19,15,23,5));

console.log(new Date(0))
console.log(new Date(3*24*60*60*1000))

// working with dates
const Future = new Date(2024, 2, 28, 15, 23)
console.log(Future)
console.log(Future.getFullYear())
console.log(Future.getMonth())
console.log(Future.getDay())
console.log(Future.getHours())
console.log(Future.getMinutes())
console.log(Future.getSeconds())
console.log(Future.toISOString())

console.log(Date.now())
console.log(new Date(1711452354481))

Future.setFullYear(2025)
console.log(Future)