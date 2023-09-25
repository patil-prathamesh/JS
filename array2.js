const marvel_heros = ['spiderman','ironman','thor']
const dc_heros = ['superman','flash','batman']
//concat
const all_heros = [...marvel_heros,...dc_heros]  // spread operator
console.log(all_heros);
const another_array = [1,2,[3,4,5],[6,7,[2,3,['h','y']]]]
console.log(another_array.flat(3));
console.log(Array.isArray('prthmsh'));//false
console.log(Array.from('prthmsh'));
/*[
    'p', 'r', 't',
    'h', 'm', 's',
    'h'
  ]
*/
console.log(Array.from({name:'prthmsh'})); //key wise array or value wise

let n1 = 100
let n2 = 200
let n3 = 500
console.log(Array.of(n1,n2,n3));//[ 100, 200, 500 ]