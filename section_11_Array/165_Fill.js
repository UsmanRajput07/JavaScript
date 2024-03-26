console.log([1,2,3,4,5,78,])
console.log(new Array(1,2,3,4,5,6,7,8,9))

const x = new Array(7)
// console.log(x)

// fill entire array to 1 item
x.fill(1)
//  specifay the the start index to fill 2  parameter
x.fill(2,3,5)

// console.log(x)


// Array from method
const z = Array.from({length:10}, ()=> 2)
console.log(z)

const counting = Array.from({length:7}, (_, i)=> i+1)
console.log(counting)

