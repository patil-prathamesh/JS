function calculateCartPrice(...n1) {//rest operator
    return n1;
}
console.log(calculateCartPrice(2,3,'nikhil'))


function sayMyName () {
    console.log('Prthmsh');
}
sayMyName();
function addTwoNumbers(n1,n2) { //parameters
    return n1+n2;
}
let sum = addTwoNumbers(3,7);//arguments
console.log(`Sum is: ${sum}`);
function loginUserMessage(username = 'aa') { // default value
    return `${username} just logged in...`
}
console.log(loginUserMessage());