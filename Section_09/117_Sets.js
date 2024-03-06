// --------->Sets<----------
const orderSet = new Set(["pizza", "pasta", "pizza", "risotto", "pasta"]);
console.log(orderSet)

/*
// console.log(new Set("jhon"))
console.log(orderSet.size)
console.log(orderSet.add("momos"))
console.log(orderSet.has("pasta"))
console.log(orderSet.has("chowmin"))
// console.log(orderSet[])
console.log(orderSet.add("pasta"))
console.log(orderSet.add("pasta"))
console.log(orderSet.size)
*/

// console.log(orderSet.delete("pasta"))
// console.log(orderSet)
// console.log(orderSet.clear())

// for(const order of orderSet){
//     console.log(order)
// }

const Staff = ["waiter", "chef", "manager", "waiter", "chef"]

// const uniquestaff = new Set(Staff);

// console.log(new Set(["waiter", "chef", "manager", "waiter", "chef"]))
const uniquevalue = new Set(Staff)
const uniquearray = [...new Set(Staff)]

console.log(uniquevalue)
console.log(uniquearray)
console.log(new Set("usmmaaannn").size)