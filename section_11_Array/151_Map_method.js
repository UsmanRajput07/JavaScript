const movements = [100, 200, 450, -22, 300, -650, -134, 55];
const doller = 78;

const newMapArr = movements.map((cv, idx) => {
  return cv * doller;
});
console.log(movements);
console.log(newMapArr);

//  using forEach method
// let EachMethod = []
//  for(let h of movements )  EachMethod.push(h * doller)
//  console.log(EachMethod)

const newstr = movements.map((cv, idx) => {
  return `movement ${idx + 1} you ${cv > 0 ? "deposit" : "withdraw"} : ${cv}`;
});
console.log(newstr);
