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
// if (resturent.openingHour && resturent.openingHour.mon)
//   console.log(resturent.openingHour.mon.open);

// use of Optional chaining

// console.log(resturent.openingHour.sun?.open)
// console.log(resturent.openingHour?.mon?.open)

// example
// for(const day of days){
//  const open = resturent.openingHour[day]?.open ?? "closed"
//  console.log(`${day} we are at ${open}`)
// }

// method
console.log(resturent.order?.("pizza", "tea") ?? "method not exist");
console.log(resturent.orderpizza?.("pizza", "tea") ?? "method not exist");

// Array
const user = [{ name: 0, email: "urao545454" }];

// without optional chaining

// if (user.length > 0) console.log(user[0].name);
// else console.log("user arry empty");

// optional chaining
console.log(user[0]?.name || "user array empty");
console.log(user[0]?.name ?? "user array empty");
