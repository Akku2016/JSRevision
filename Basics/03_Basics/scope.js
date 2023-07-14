//Global and local scope
//{} curly brance ek scope h
//var or let ki value differnt h 
var a=300;
let b=30;
if(true){
    let b=10;
    var a=24;
    console.log('INNER:',a,b);// focus with var how value is coming.var is having bug because is is behaving differently.
}
console.log(a,b);

// nested Function
function One() {
    const username="Hitesh"
    function Two() {
        const website = "youtube"
        console.log(username);
    }
    Two()
    //console.log(website); we can't use like this
}
One()

//this and arrow function
//THis:it says about current context
const user ={
    username:"akansha",
    price:999,
    welcomeMessage:function(){
       console.log(`${this.username} , welcome to website`);// here this means it says about current context
    }
}
console.log(this);// here this is refering empty object
user.welcomeMessage();

//or
function chai() {
    let username="ram"
    console.log(this.username);// answer is undefined because this is work inside the object not inside the function
}
//chai()

/****  how to use function for  foreach
const myArray =[3,5,7,8,2]
myArray.forEach(() => {})****/

//IIFE(Immediately Invoked function expression)
/****why we are using IIFE ist thing "function"immediately execute krna ho" .2nd thing :-global scope se hume pollution nhi chaiye.****/

(function chai(){
    //named IIFE
    console.log("DB connected");
})();// if we need to give semicolon otherwise it will come error
((name) => {
    console.log("DB connected to")
})("hitesh")