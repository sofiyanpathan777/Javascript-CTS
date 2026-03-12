const accountId = 14423
let accountEmail = "srp123@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"

accountEmail = "srp1234@gmail.com"
accountPassword = "124445"
accountCity = "Beed"

//accountId = 2 not allowed
//prefer not to use var bcz of issue in block scope and functional scope
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
