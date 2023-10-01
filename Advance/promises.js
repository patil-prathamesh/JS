//promise creation
const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log('Asynce task 1 completed..');
        resolve()
    },1000)
})
//promise consume
promiseOne.then(function () {
    console.log('Promise consumed.');
})

////////
new Promise(function(resolve,reject) {
    setTimeout(function(){
        console.log('Async task 2');
    },1000)
}).then(function () {
    console.log('Async task 2 resolved.');
})

///////
const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({username:'chai',email:'.com'})
    },1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:'prthmsh',password:'123'})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})
const username = promiseFour.then((user)=> {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
}).finally(() => console.log('Promise is either resolved or rejected.') )

///////
const promisFive = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username:'JS',password:'123'})
        }
        else {
            reject('ERROR: JS went wrong')
        }
    },1000)
});
async function consumePromisFive() {
    try {
        const response = await promisFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromisFive()

////////

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E: ',error);
    }
}
getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((res) => console.log(res))
.catch((error) => console.log(error))