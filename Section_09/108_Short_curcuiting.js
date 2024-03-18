console.log(`------------OR-------------`);
console.log(3||"jhon");
console.log("" ||"jhon");
console.log(0|| 4);
console.log(true || 0)
console.log(undefined || null)

console.log("" || undefined || null || 0 || "jhon"|| 4);

const resturent ={
    name: "raj",
}

resturent.cat = 3

const returnvalue = resturent.cat ? resturent.cat : 10;

console.log(returnvalue)
//  alternative of turnary oprerator
const value = resturent.cat || 33

console.log(value)

console.log("-------------- AND------------");
console.log(0 && "jhon");
console.log("jhon" && null && undefined);

// if(resturent.cat){
//     console.log("hlo")
// }
resturent.cat && console.log("hi")