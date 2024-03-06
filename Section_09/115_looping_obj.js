const days = ["Sat", "sun", "mon", "tues", "wednes", "thirs", "fri"];
const resturent = {
  name: "Classico Italino",
  categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
  startermenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["Pizza", "pasta", "Risotto"],
  openingHour: {
    [days[0]]: {
      open: 10,
      close: 9,
    },
    [days[3]]: {
      open: 12,
      close: 9,
    },
    [days[2]]: {
      open: 12,
      close: 9,
    },
  },
  order(...items) {
    return items;
  },
};

const properties = Object.keys(resturent.openingHour)

let openStr = `we are open on ${properties.length} days:`

for(let day of properties){
   openStr += ` ${day},`
}

//  properties value 

// const value = Object.values(resturent.openingHour);
// console.log(value)

//  entire object

const entries = Object.entries(resturent.openingHour);
// console.log(entries)

for(const [key, {open,close}] of entries){
    console.log(`on ${key} we open at ${open} and close at ${close}`)
}

