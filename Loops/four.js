const arr = [1,2,3,4,5,6,7,8,9,10]
const myTotal = arr.reduce( (acc,val) => (acc+val),3)// 58
console.log(myTotal);

const arr2 = arr.filter( (val) => {
    return val%2!=0                 // [ 1, 3, 5, 7, 9 ]
})
console.log(arr2);

const arr3 = arr.map( (val) => {
    return val+3                // [ 4,  5,  6,  7,  8, 9, 10, 11, 12, 13 ]
})
console.log(arr3);