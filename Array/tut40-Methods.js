//  methods of  Arrays
const names = ["jhon", "Raja", "rohan"]

// Add element in end of the array 
// this method return new array lenght

 const len = names.push("Sahil")
console.log(names, len)

// Add element in start of the array 
// this method return new array lenght

const size = names.unshift("Aniket")
console.log(names, size)

// remove element end of the arry
// this method return remove element

const removeele = names.pop();
console.log(names, removeele);

// remove element start of the arry
// this method return remove element

// const remove = names.shift();
// console.log(names, remove)


console.log(names.indexOf("Raja"))

console.log(names.includes("Aniket"))
console.log(names.includes("Sahil"))
console.log(names.includes("jhon"))

