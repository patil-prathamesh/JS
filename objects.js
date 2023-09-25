const mySym = Symbol('key1')

const jsuser = {
    name:'prthmsh',
    age:19,
    [mySym]: 'mykey1',
    location:'kalamboli',
    email:'psp@gmail.com',
    isLoggedIn:false,
    lastLoginDays: ['monday','saturday']
}
console.log(jsuser['name']);
console.log(jsuser[mySym]);
jsuser.email = 'nsp@openAi'
console.log(jsuser);
//Object.freeze(jsuser)//cannot change object value
jsuser.greeting = function() {
    console.log('Hello JS user.');
}
jsuser.greeting2 = function() {
    console.log(`Hello JS user, ${this.email}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());