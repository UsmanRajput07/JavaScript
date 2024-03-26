const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1
const AllDepositsum = accounts
  .flatMap((cv) => cv.movements)
  .filter((cv) => cv > 0)
  .reduce((acc, cv) => acc + cv, 0);
console.log(AllDepositsum);

// 2
// const numDeposit1000 = accounts.flatMap((cv)=> cv.movements).filter((cv)=> cv>1000).length
// console.log(numDeposit1000)
const numDeposit1000 = accounts
  .flatMap((cv) => cv.movements)
  .reduce((acc, cv) => (cv > 1000 ? acc + 1 : acc), 0);
console.log(numDeposit1000);

// 3 create brand new object using reduce

const newObj = accounts
  .flatMap((cv) => cv.movements)
  .reduce(
    (sums, cv) => {
      //   cv > 0 ? (sums.deposit += cv) : (sums.withdrawal += cv);
      sums[cv > 0 ? "deposit" : "withdrawal"] += cv;
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(newObj);

// 4
const ConvertTitle = function (title) {
  const excepction = ["a", "an", "am", "the", "but", "or", "on", "in", "with"];

  const titlecase = title
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return excepction.includes(word)
        ? word
        : word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  return titlecase;
};
console.log(ConvertTitle("Hlo HOW are YOu"));
console.log(ConvertTitle("i Am Fine What About You"));
