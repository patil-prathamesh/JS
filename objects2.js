const tinderUser = new Object()//singleton object
console.log(tinderUser);
tinderUser.id = '123abc'
tinderUser.name = 'sammy'
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: 'a@.com',
    fullname: {
        fname:'prthmsh',
        mname: 'sanjay',
        lname: 'patil'
    },
    email: 'a@.com',
}
console.log(regularUser);
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
let obj3 = {...obj1,...obj2}
// obj3 = Object.assign({},obj1,obj2)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(Object.keys(obj3));//[ '1', '2', '3', '4' ]
console.log(Object.values(obj3));//[ 'a', 'b', 'c', 'd' ]