//object literals
// symbol using
const mysym = Symbol("key1");
const user = {
    name:"akansha",
    age:32,
    [mysym]:"mykey1",
    location:"jaipur"
}
// acessing the object with two ways
console.log(user.age);
//2nd ways 
console.log(user["age"])
//update the object
user.age ="31";
// we wrote freeze after that we can't 
 //update the value
 //Object.freeze(age);
 
console.log(user[mysym]);
/* constuctor or singleton object*/
const amazonuser =new Object();// this is singleton object
//Nested object 

const name ={
    email:"abc@gmail.com",
    username :{
           usefulname:{
            firstname:"grtf",
            lastname:"fg",
           }
    }
}
console.log(name);
console.log(name.username.usefulname.firstname);
//combine object with assign and spread operator
const obj1={1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 ={5:'e', 6:'f'}

//with assign
const obj4=Object.assign({},obj1,obj2,obj3);
console.log(obj4);
// with spread
const obj5 ={...obj1,...obj2,...obj3}
console.log(obj5);
//for using database 
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
//object destructure
const {location:lc} = user;
console.log(lc);