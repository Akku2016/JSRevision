//function with object and array
function addTwoNumber(num1,num2){
    console.log(num1+num2);
}
addTwoNumber(3,4);
//or
function addnumber(num3,num4){
    return num3+num4
}
const result = addnumber(5,6);
console.log("Result is :", result)
// if we are not giving the return and we are giving value then result will be undefined.for e.g
function addnumber(num3,num4){
    console.log(num3+num4);
}
const result1 = addnumber(5,6);
console.log("Result is :", result1)
//backtic with function
function loginUserMessage(username){
    return `'${username}' just logged In`
}
console.log(loginUserMessage("Ram"));
// username is not valid 
function loginUserMessages(username){
    if(!username)//userame===undefined
    {
        console.log("plz enter the user name");
        return
    }
    return `'${username}' just logged In`
}
console.log(loginUserMessages());
//how to use function in object 
const user={
    name:"akansha",
    age:32
}

function handleObject(anyobject){
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`);
}
handleObject(user);
//or
handleObject({
    name:'ram',
    age:45
})

//function with array
const newArray =[200,400,600,7,]
function returnarray(getArray){
    return getArray[1]
}

console.log(returnarray(newArray));