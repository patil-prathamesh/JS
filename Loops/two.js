//for of

const arr = [1,3,2,6,4]
for (let num of arr) {
    console.log(num);
}

const str = 'hello world'
for(let char of str) {
    console.log(`${char}`);
}

//Map
const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr' , 'France')
// console.log(map);
for (const [key,value] of map) {
    console.log(`${key} ${value}`);
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
for (const [key,value] of myObj) {
    console.log(`${key} ${value}`); //error
}