'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const displayMovement = function (movements){
    containerMovements.innerHTML = "";
    movements.forEach(function(mov , i){
    const type = mov > 0 ? "deposite" : "withdrawal"

        const html =`
        <div class="movements__row">
        <div class="movements__type 
        movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}$</div>
        </div>
        `
        containerMovements.insertAdjacentHTML('afterbegin', html) //displayMovements ko add kiya page par, aur hardcoded data ko nikal diya line 69
    })
}



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



//***********use to rs conversion
const RstoUsd = 82.99;
// const movementsUSD = movements.map(function(mov){
// return mov * RstoUsd
// })
const movementsUSD = movements.map(mov=> //much easier way with callback
   mov * RstoUsd
    )

console.log(movements);
console.log(movementsUSD);
////////////////////////

//*********how much deposit or withdraw
const movementsDescription= movements.map((mov ,i)=>
`movements ${i+1}: you ${mov > 0 ? " deposited" : " withdrawn"} ${Math.abs(mov)}`
)
console.log(movementsDescription);
/////////////////////////

//*********Username
const createUsername = function(accs){
    accs.forEach(function(acc){
   acc.username = acc.owner
   
     })

  }
  createUsername(accounts)
  console.log(accounts);

  //***********change the UI
let CurrentAccount;
btnLogin.addEventListener("click", function(e){
e.preventDefault();
CurrentAccount = accounts.find(
  acc => acc.username === inputLoginUsername.value
)
console.log(CurrentAccount);
if(CurrentAccount?.pin === Number(inputLoginPin.value)){
  labelWelcome.textContent = `Welcome
   ${CurrentAccount.owner.split(' ')[0]}!`
   inputLoginUsername.value = inputLoginPin.value = " ";
   inputLoginPin.blur()
   displayMovement(CurrentAccount.movements)
   calcDisplayBlances(CurrentAccount)
   calcDisplaySummary(CurrentAccount)
   calcDisplayOut(CurrentAccount)
   interest(CurrentAccount)

}
})

//***********Filtering withdraws and Deposit
const deposit = movements.filter(function(mov){
return mov > 0;
})
const withdraw = movements.filter(function(mov){
return mov < 0;
})
console.log(deposit, withdraw);


//**********Blance total karo */
const calcDisplayBlances = function(accts){
  accts.balance = accts.movements.reduce((acc , mov)=>
     acc + mov,0)

     labelBalance.textContent = `${accts.balance} $`
}
// calcDisplayBlances(account1.movements)

const max = movements.reduce((acc , mov)=>{
  if(acc > mov)
  return acc;
else return mov
},movements[0]) //jab bhi max ya min find kar rhe ho 0 mat likhna , array ka [0]th index lena
console.log(max);


//*********total deposite jitna hua hain */
const totalDepositeRs = movements.
filter(mov=> mov > 0)
.map((mov ,i,arr)=> mov * RstoUsd)
.reduce((acc,mov)=>acc  + mov, 0);
console.log(totalDepositeRs);

//*******total incoming money       //accts - access to accounts //*
const calcDisplaySummary = function(accts){
  const income = accts.movements.filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}$`
}
// calcDisplaySummary(account1.movements)


//*******total outgoing money
const calcDisplayOut = function(accts){
  const Out = accts.movements.filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(Out)}$`
}
// calcDisplayOut(account1.movements)

//*******total interest
const interest  = function (accts) {
  const interests =  accts.movements.filter(mov => mov > 0)
  .map(deposit => (deposit * accts.interestRate ) / 100)
  .filter((int , i)=>{ //yeh filter isliye lagaya jab kisi deposite ka interest 1$ se zyada hoga
   return int >= 1
  })
  .reduce((acc, int) => acc + int,0)
  labelSumInterest.textContent = `${interests}$`
}
// interest(account1.movements)



//******find particular user */
const firstWithdraw = movements.find(mov=>mov < 0)
console.log(firstWithdraw);
//the find method return the first element in the array. and does not alters the array neither return the new array 

const name = accounts.find(acc => acc.owner === "Jessica Davis")
console.log(name);


btnTransfer.addEventListener("click", function(e) {
  e.preventDefault();
 const amount = Number(inputTransferAmount.value)
 const reciverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
 
 console.log(amount , reciverAcc);
 if(amount > 0 && reciverAcc && reciverAcc?.username !== CurrentAccount.username && CurrentAccount.balance >= amount)
 {
  CurrentAccount.movements.push(-amount);
  reciverAcc.movements.push(amount);
  displayMovement(CurrentAccount.movements)
  calcDisplayBlances(CurrentAccount)
  calcDisplaySummary(CurrentAccount)
  calcDisplayOut(CurrentAccount)
  interest(CurrentAccount)
 }
 inputTransferAmount.value = inputTransferTo.value = " ";
})
  

//  Jonas Schmedtmann
 // Jessica Davis    ///////////////////////////