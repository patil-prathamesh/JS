const myObject = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    kt : 'Kotlin'
}
for (const key in myObject) {
    console.log(myObject[key]);
}

let arr = ['1', '2','3']
// for (const key in arr) {
//     console.log(arr[key]);
// }

arr.forEach((item,index,arr) => {
    console.log(item,index,arr);
})
// function printMe(val) {
//     console.log(val);
// }
// arr.forEach(printMe)

const myCoding = [
    {
        name: 'js',
        exe:'.js'
    },
    {
        name: 'java',
        exe:'.java'
    },
    {
        name: 'python',
        exe:'.py'
    }
]
myCoding.forEach((item)=> {
    console.log(item.exe);
})