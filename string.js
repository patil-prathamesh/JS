let name = 'prthmsh'
let repoCount = 50
// `` string interpolation
console.log(`Hii My name is ${name} and my repo count is ${repoCount}`);
let gameName = new String('Nikhil')
console.log(gameName.charAt(2));
console.log(gameName.__proto__);//prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('l'));
let newstr = gameName.substring(0,gameName.length)
console.log(newstr);
let str = gameName.slice(-2,4)
console.log(str);
let str2 = '  ddd dd  d  d d '
console.log(str2.trimStart()); //removes whitespaces
let url = "https://prthmsh.com/prthmsh%20patil"
console.log(url.replace('%20','-'));
console.log(url.includes('//r'));
console.log(url.split('/'));//[ 'https:', '', 'prthmsh.com', 'prthmsh%20patil' ]