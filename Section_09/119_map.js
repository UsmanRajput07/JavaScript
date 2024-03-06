const question = new Map([
    ["question", "what is the most famous language"],
    [1 ,"c"],
    [2 , "C++"],
    [3, "javascript"],
    ["correct", 3],
    [true, "correct 🏆"],
    [false , "error"],
]);

// console.log(question)

// Convert Object to map
const openingHour =  {
    "thir": {
      open: 10,
      close: 9,
    },
    "fri": {
      open: 12,
      close: 9,
    },
    "sat": {
      open: 12,
      close: 9,
    },
  }

const hourmap = new Map(Object.entries(openingHour))

// quiz app
console.log(question.get("question"))
for(const [key,value] of question){
    if(typeof key === "number"){
    console.log(`Answer ${key}: ${value}`)}
}
// const answer = Number(prompt("enter number"))
const answer = 3;
console.log(question.get(question.get("correct") === answer))

// convert map to array 

console.log([...question])
console.log([...question.keys()])
console.log([...question.values()])