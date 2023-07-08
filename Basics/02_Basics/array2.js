// isarray,of,,from etc
const home ={
    0:'villa',
    1:'twobhk',
    2:'threebhk',
    length:3
}
const newhomedata=  Array.isArray(home);
console.log(newhomedata);
const newfromdata = Array.from(home);
console.log(newfromdata);

 
const newofdata = Array.of(1,2,3,"four",true);
console.log(newofdata);