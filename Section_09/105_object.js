//  Object Destructuring
const resturent = {
  name: "Classico Italino",
  categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
  startermenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.startermenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHour: {
    thu: {
      open: 10,
      close: 9,
    },
    fri: {
      open: 12,
      close: 9,
    },
  },
  OderDelevery: function ({ time, mainIndex, starterIndex, location }) {
    console.log(
      `the order of ${location} is paleced  at ${time} the meal is ${this.startermenu[starterIndex]}, and mainmenu ${this.mainMenu[mainIndex]}`
    );
  },
};

  // const {name:resturentName,openingHour:hour, menu=[] } = resturent;
  // console.log(resturentName,hour, menu)

//  Given default value

// const {menu =[], startermenu:starter = []} = resturent
// console.log(menu, starter)

//mutating variables

// let a = 111, b = 888;
// const obj = {a:10, b:20, c:4};
// ({a,b} = obj)
// console.log(a,b)


// Nested Object

const {fri:{open, close}} = resturent.openingHour
console.log(open,close)

resturent.OderDelevery({
  starterIndex: 2,
  mainIndex: 0,
  time: "10:34",
  location: "saharanpur",
});
