"use Strict";
console.log("arry destructuring");

const resturent = {
  name: "Classico Italino",
  categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
  startermenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// const arr = [2, 3, 5];
// const [a,b,c] = arr
// console.log(a,b,c)

let [first,second] = resturent.categories;
console.log(first, second);

// switching variable;
/*
let temp = first;
first = second;
second = temp;
console.log(first, second)
*/

// [first, second] = [second, first];

// console.log(first, second);

// recieve 2 value from a function

// const [starter, main] = resturent.order(3, 2)
// console.log(starter, main)


// const nested = [2,3,[4,6]];

// const [a,,[b,i]] = nested
// console.log(a,b,i)

// deafault values
const [x=1,y=1,z=1] = [6,4];
// console.log(x,y,z) 