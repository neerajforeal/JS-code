const accountId = 144523;
let accountEmail = "neeraj@gmail.com";
var accountPassword = "123";
accountCity = "Delhi";
let accountState;

// accountId = 2; not allowed

accountEmail = "hc@hc.com";
accountPassword = "3919873";
accountCity = "Mumbai";

/*
prefer not to use var
var is function scoped
let and const are block scoped
*/

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
