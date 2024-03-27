// const timer = setTimeout(
//   (ing1, ing2) =>console.log(`here is your pizza with 🍕🍕 ${ing1} ${ing2}`),3000,
//   "olives", "spinach"
// );
// console.log("waiting....");

const ingredients = ["olives", "spinach"];
const timer = setTimeout(
  (ing1, ing2) => {
    console.log(`here is your pizza with 🍕🍕 ${ing1} ${ing2}`);
  },
  3000,
  ...ingredients
);
console.log("waiting....");

if(ingredients.includes("spinach")) clearTimeout(timer)

setInterval(()=>{
    const now = new Date();
    console.log(now)
}, 1000)