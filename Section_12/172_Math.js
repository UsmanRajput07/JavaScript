// console.log(Math.sqrt(25))

// console.log(25**(1/2))
// console.log(25**(1/3))

// console.log(Math.max(2,3,4,5,711,5,99))
// console.log(Math.max(2,3,4,5,"711px",5,99))

// console.log(Math.min(2,3,4,5,711,5,99))

// console.log(Math.PI * Number.parseFloat("10px") ** 2)

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (max, min) => Math.trunc((Math.random() * (max - min) + 1) + min);

console.log(randomInt(20,10));

// Rounding integers
console.log(Math.round(23.4))
console.log(Math.round(23.9))

console.log(Math.ceil(23.4))
console.log(Math.ceil(23.9))

console.log(Math.floor(23.4))
console.log(Math.floor("23.9"))

console.log(Math.trunc(-23.3))
console.log(Math.floor(-23.3))

// Rounding decimals
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(2))
console.log(+(3.3).toFixed(2))
console.log(+(3.34545).toFixed(2))
