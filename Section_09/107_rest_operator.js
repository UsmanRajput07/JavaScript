const resturent = {
    name: "Classico Italino",
    categories: ["Italian", "pizzeria", "vegetarian", "Organic"],
    startermenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
    mainMenu: ["Pizza", "pasta", "Risotto"],
    openingHour: {
        thu: {
          open: 10,
          close: 9,
        },
        fri: {
          open: 12,
          close: 9,
        },
    }
}


const arr = [1,3,3,5];
// Spread , beacuse on right side of = 
const Newarr = [...arr, 99, 33];
// Rest ,because on left side of = 
const [a,b, ...others] = Newarr;
console.log(a,b,...others)



const [x,y, ...More]= [...resturent.categories, ...resturent.startermenu]
// console.log(x,y,...More)

// object
const {sat, ...week} = resturent.openingHour
console.log(week)

// function 
const Add = function(...numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    console.log(sum)
}
console.log("Adding function")
Add(2,3,4,56,7)
const num = [2,3,5,6,1] 
Add(...num)