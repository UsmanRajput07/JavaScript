const ErotoUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const AllDeposit = movements
  .filter((cv, idx) => cv > 0)
  .map((cv, idx, arr) => cv * ErotoUSD)
  .reduce((acc, cv) => acc + cv, 0);

  console.log(AllDeposit)