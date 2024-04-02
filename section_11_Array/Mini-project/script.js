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
  locale: "pt-PT", // de-DE
  currency: "EUR",
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2024-03-25T23:36:17.929Z",
    "2024-03-24T10:51:36.790Z",
  ],
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  username: "jd",
  pin: 2222,
  currency: "USD",
  locale: "en-US",
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2024-02-25T18:49:59.371Z",
    "2024-02-26T12:01:20.894Z",
  ],
};

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   username: "stw",
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   username: "ss",
//   pin: 4444,
// };

const accounts = [account1, account2];

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
// function

const formatingDates = (date) => {
  const CalcDayPassed = (Date1, Date2) =>
    Math.round(Math.abs(Date2 - Date1) / (1000 * 60 * 60 * 24));

  const daysPassed = CalcDayPassed(new Date(), date);
  // console.log(daysPassed);
  if (daysPassed === 0) return "today";
  if (daysPassed === 1) return "yesterday";
  if (daysPassed <= 7) return `${daysPassed} days Ago`;
  else {
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const day = `${date.getDate()}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};
//  formated currency
const FormtedCur = function (value, local, currency) {
  return new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);
};

//  implement logout timer
const startLogoutTimer = function () {
  let time = 120;
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get Started`;
      containerApp.style.opacity = 0;
    }
    time--;
  };

  const timer = setInterval(tick, 1000);
  return timer;
};

function displayMovement(acc, sort = false) {
  console.log(acc.movements);
  const mov = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  containerMovements.innerHTML = "";
  mov.forEach((item, index) => {
    const type = item > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[index]);
    const displaydate = formatingDates(date);

    const fromatedMov = FormtedCur(item, acc.locale, acc.currency);

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements__date">${displaydate}</div>
          <div class="movements__value">${fromatedMov}</div>
        </div>
 `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

const ErotoUSD = 1.1;

const ClcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((cv, idx) => cv > 0)
    .map((cv, idx, arr) => cv * ErotoUSD)
    .reduce((acc, cv) => acc + cv);
  labelSumIn.textContent = `${FormtedCur(income, acc.locale, acc.currency)}`;

  const OutCome = acc.movements
    .filter((cv, idx) => cv < 0)
    .map((cv, idx, arr) => cv * ErotoUSD)
    .reduce((acc, cv, i, arr) => acc - cv, 0);
  labelSumOut.textContent = `${FormtedCur(OutCome, acc.locale, acc.currency)}`;

  const interest = acc.movements
    .filter((cv, idx) => cv > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((interest) => interest > 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${FormtedCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};
// createUserName(account1);

// displayMovement(account1.movements);

// UpdateUI

const UpdateUI = function (acc) {
  displayMovement(acc);

  //  display balance
  Calbalance(acc);

  //  display summery
  ClcDisplaySummary(acc);
};

// <----------login details----------->
let CurrentUser, timer;

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

    //  logouttimer

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // UpdateUI
    UpdateUI(CurrentUser);
    const date = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "long",
      month: "long",
      year: "numeric",
      // weekday: "long",
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      CurrentUser.locale,
      options
    ).format(date);
  }
});
//  calculating balance
const Calbalance = function (acc) {
  CurrentUser.balance = acc.movements.reduce((acc, cv) => acc + cv, 0);
  labelBalance.innerHTML = `${FormtedCur(
    CurrentUser.balance,
    CurrentUser.locale,
    CurrentUser.currency
  )}`;
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

    //  Add Date
    receiver.movementsDates.push(new Date());
    CurrentUser.movementsDates.push(new Date());

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
    setTimeout(() => {
      CurrentUser.movementsDates.push(new Date());
      CurrentUser.movements.push(amount);

      //  UpdateUI
      UpdateUI(CurrentUser);
    }, 3000);
    //  add loan date
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
  }
});

//  Sort method
const Sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovement(CurrentUser.movements, !Sorted);
  Sorted = !Sorted;
});
