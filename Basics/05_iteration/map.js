//map is returning the value

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const number =myNumbers.map( (val) => val * 10)
console.log(number);
//chaining
// first map result =[2,4,6,8,10,12,14,16,18,20]
//second map result =[4,6,8,10,12,14,16,18,20,22]
//filter value result =[12,14,16,18,20,22]
// working:-firtly first map is working and after reult came then same result pr second map function use hoga aur for result aane ke baad usi result pr filter function use hoga.
const usernumber = myNumbers
                   .map( (newnum) => newnum * 2 )
                   .map( (val) => val + 2)
                   .filter( (select) => select >10)
    console.log(usernumber);               