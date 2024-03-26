"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  username: "js",
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  username: "jd",
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  username: "stw",
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  username: "ss",
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

function displayMovement(movements, sort = false) {
  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = "";
  mov.forEach((item, index) => {
    const type = item > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${item} $</div>
        </div>
 `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}
// const createUserName = function (acc) {
//   acc.username = acc.owner
//     .toLowerCase()
//     .split(" ")
//     .map((cv) => cv[0])
//     .join("");
// };

const ErotoUSD = 1.1;

const ClcDisplaySummary = function (movements) {
  const income = movements
    .filter((cv, idx) => cv > 0)
    .map((cv, idx, arr) => cv * ErotoUSD)
    .reduce((acc, cv) => acc + cv);
  labelSumIn.textContent = `${Math.trunc(income)}$`;

  const OutCome = movements
    .filter((cv, idx) => cv < 0)
    .map((cv, idx, arr) => cv * ErotoUSD)
    .reduce((acc, cv, i, arr) => acc - cv, 0);
  labelSumOut.textContent = `${(OutCome).toFixed()}$`;

  const interest = movements
    .filter((cv, idx) => cv > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((interest) => interest > 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${Math.trunc(interest)}$`;
};
// createUserName(account1);

// displayMovement(account1.movements);

// UpdateUI
const UpdateUI = function (acc) {
  displayMovement(acc.movements);

  //  display balance
  Calbalance(acc);

  //  display summery
  ClcDisplaySummary(acc.movements);
};

// <----------login details----------->
let CurrentUser;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  CurrentUser = accounts.find((cv) => cv.username === inputLoginUsername.value);
  if (CurrentUser?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = ` Welcome back ${
      CurrentUser.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;
    //  clear input field
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // UpdateUI
    UpdateUI(CurrentUser);
  }
});
//  calculating balance
const Calbalance = function (acc) {
  CurrentUser.balance = acc.movements.reduce((acc, cv) => acc + cv, 0);
  labelBalance.innerHTML = `${(CurrentUser.balance).toFixed(2)}$`;
};

//  transfar money

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiver = accounts.find((cv) => cv.username === inputTransferTo.value);
  if (
    amount < CurrentUser.balance &&
    amount > 0 &&
    receiver &&
    receiver?.username !== CurrentUser.username
  ) {
    CurrentUser.movements.push(-amount);
    receiver.movements.push(amount);

    // UpdateUI
    UpdateUI(CurrentUser);

    inputTransferTo.value = inputTransferAmount.value = "";
  }
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === CurrentUser.username &&
    Number(inputClosePin.value) === CurrentUser.pin
  ) {
    const index = accounts.findIndex(
      (ac) => ac.username === CurrentUser.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `welcome`;
  }
  inputCloseUsername.value = inputClosePin.value = "";
  inputLoginPin.blur();
});

// load detail
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && CurrentUser.balance >= amount * 0.1) {
    CurrentUser.movements.push(amount);
    //  UpdateUI
    UpdateUI(CurrentUser);
  }
});

//  Sort method
const Sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovement(CurrentUser.movements, !Sorted);
  Sorted = !Sorted;
});
