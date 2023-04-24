'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

(function getLogins() {
  accounts.forEach(
    acc =>
      (acc.login = acc.owner
        .toLowerCase()
        .split(' ')
        .reduce((res, cur) => res + cur[0], ''))
  );
  console.log(accounts);
})();

function showUI() {
  containerApp.style.opacity = 100;
  inputLoginPin.value = inputLoginUsername.value = '';
  labelWelcome.textContent = `Welcome ${currentAcc.owner.split(' ')[0]}`;

  showMovements();

  showBalance();
}

function showMovements() {
  const movs = sort
    ? currentAcc.movements.slice().sort((a, b) => a - b)
    : currentAcc.movements;
  containerMovements.textContent = '';
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    containerMovements.insertAdjacentHTML(
      'afterbegin',
      `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
  </div>`
    );
  });
}

function showBalance() {
  labelBalance.textContent =
    currentAcc.movements.reduce((sum, cur) => sum + cur, 0) + '€';
  labelSumIn.textContent =
    currentAcc.movements
      .filter(cur => cur > 0)
      .reduce((sum, cur) => sum + cur, 0) + '€';
  labelSumOut.textContent =
    currentAcc.movements
      .filter(cur => cur < 0)
      .reduce((sum, cur) => sum + cur, 0) *
      -1 +
    '€';
  labelSumInterest.textContent =
    currentAcc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * currentAcc.interestRate) / 100)
      .filter(int => int >= 1)
      .reduce((acc, int) => acc + int, 0) + '€';
}

let currentAcc;
let sort = false;

btnLogin.addEventListener('click', function (event) {
  event.preventDefault();
  currentAcc = accounts.find(acc => acc.login === inputLoginUsername.value);
  if (currentAcc?.pin === Number(inputLoginPin.value)) showUI();
});

btnSort.addEventListener('click', function (event) {
  sort = !sort;
  showMovements();
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const loan = Number(inputLoanAmount.value);
  if (loan > 0 && currentAcc.movements.some(mov => mov >= loan * 0.1)) {
    currentAcc.movements.push(loan);
    showUI();
  }
  inputLoanAmount.value = '';
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const transfer = Number(inputTransferAmount.value);
  const transferTo = accounts.find(acc => acc.login === inputTransferTo.value);

  transferTo?.movements.push(transfer) && currentAcc.movements.push(-transfer);

  inputTransferAmount.value = inputTransferTo.value = '';

  showUI();
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAcc.login &&
    Number(inputClosePin.value) === currentAcc.pin
  ) {
    const idx = accounts.findIndex(acc => acc.login === currentAcc.login);
    accounts.splice(idx, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});