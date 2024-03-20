const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cv) => {
  return acc + cv;
}, 0);
console.log(balance);

// <-------- Check max value----------->

const balnce = movements.reduce((acc,cv)=>{
  if(acc > cv) return acc
  else {
    return cv
  }
})
console.log(balnce)