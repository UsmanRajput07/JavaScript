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
// const createUserName = function (name) {
//   const username = name
//     .toLowerCase()
//     .split(" ")
//     .map((cv) => cv[0])
//     .join("");
// };
// createUserName("Jessica Davis");

const createUserName = function (acc) {
  acc.username = acc.owner
    .toLowerCase()
    .split(" ")
    .map((cv) => cv[0])
    .join("");
};
createUserName(account1);
console.log(account1)
