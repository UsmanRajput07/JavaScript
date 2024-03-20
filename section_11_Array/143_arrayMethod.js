const arr = ["1", "2", "3", "4", "5", "6"];

// <---------- Slice ----------->
//  slice method can't change the original arr

// console.log(arr.slice(1))
// console.log(arr.slice(0))
// console.log(arr.slice(3,5))
// console.log(arr.slice(-2))
// console.log(arr.slice(-4))
//  to create a copy of original arr
const newArr = arr.slice();
// console.log(newArr)
//   or
const newarr = [...newArr];
// console.log(newarr)

// <------------ Splice ----------->
//  the splice method mutate the original array
console.log(newArr);
console.log(newArr.splice(1, 2));
// console.log(newArr);
const delteitem = newArr.splice(2, 1);
// console.log(delteitem)

// REVERSE
// this method is mutate th original array
const alp = ["a", "b", "c", "d", "e"];
const newAlp = ["j", "i", "h", "g", "f"];
// console.log(newAlp.reverse())
// console.log(newAlp)

// Concat method

const fullAlphabat = alp.concat(newAlp.reverse());
console.log(fullAlphabat);

// join 
console.log(fullAlphabat.join("-"))

// console.log(fullAlphabat)
