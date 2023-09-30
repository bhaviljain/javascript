const accountID = 131
let accountEmail ="bhavil@gmail.c om"
var accountPassword ="1234"
accountCity ="Mumbai"
//accountID=2 cannot change constant value
accountEmail= "haha.com"
accountPassword ="1231"
accountCity="bangalore"
let accountState

console.log(accountID);
/*
prefer not to use var coz of issue in block scope and functional scope
*/
console.table([accountEmail,accountID,accountPassword,accountCity,accountState]);
