const accountId = 123;
let name = 'prthmsh'
let roll = 132
let state;
console.table([accountId,name,roll,state])

//conversion
//Number() Boolean() String()
let nem = ""
let num = Boolean(nem) //false
console.log(num);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}
let userTwo = userOne;
userTwo.upi = "no";
console.log(userOne.upi);
