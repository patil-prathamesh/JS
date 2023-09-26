//this only works in object not in function
const user = {
    username : 'prthmsh',
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user['username'] = 'patil'
// user.welcomeMessage()
// console.log(this);
// function chai() {
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username = 'prthmsh'
//     console.log(this);
// }
// chai()
const addTwo = (n1,n2) => {
    return n1+n2
}
// const addthree = (n1,n2,n3) => (n1+n2+n3)
const addthree = (n1,n2,n3) => ({name:'prthmsh'})

console.log(addthree(3,1,3));
