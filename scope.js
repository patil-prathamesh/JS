let a = 100
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(a);

function one () {
    const username = 'prthmsh'
    function two () {
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

//console.log(addTwo(9));  error
const addTwo = function(val) {
    return val+2;
}
console.log(addTwo(4));
