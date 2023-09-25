const course = {
    cname: 'js',
    cprice: '999',
    cinstructor: 'hitesh'
}
// console.log(course['cname']);
// Destructuring
const {cinstructor:instructor} = course 
console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = 'apple')

