const days = ["Sat", "sun", "mon", "tues", "wednes", "thirs", "fri"]
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
};

const menu = [...resturent.mainMenu, ...resturent.startermenu];

// for of loop

// for(const items of menu.entries()) {
//     console.log(`${items[0]+1}: ${items[1]}`)
// }

for(const [index, items] of menu.entries()) {
    console.log(`${index+1}: ${items}`)
}


