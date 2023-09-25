let arr = [1,2,3]
console.log(arr);
arr.push('prthmsh')
arr.push('nikhil')
console.log(arr);//[ 1, 2, 3, 'prthmsh' ]
console.log(arr.pop());
arr.unshift('patil')
console.log(arr);//[ 'patil', 1, 2, 3, 'prthmsh' ]
console.log(arr.shift());//patil
let newarr = arr.join()//array to string
console.log(typeof newarr);
let myArr = [0,1,2,3,4,5]
console.log('A ',myArr);
let myn1 = myArr.slice(1,4) // last index is not included
console.log(myn1);
console.log('B ',myArr);
let myn2 = myArr.splice(1,4) // updates original array & last index is included
console.log(myn2);
console.log(myArr);