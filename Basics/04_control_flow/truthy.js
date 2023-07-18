//truthy and falsy value
//truthy value
//"0",'false'," ", [],{},function(){}
//falsy value
// false,0,-0,bigInt,0n,"",null,undefined,NAN
const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// how we can check the array it is empty or not
if(userEmail.length ===0){
    console.log("Array is Empty");
}
// how we can check the object it is empty or not
let emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) :null undefined
 let val1,val2;
 val1=5??10
 val2=null??17
 console.log(val1);
 console.log(val2);

 // terniary Operator
// condition ? true :false
 const iceTeaPrice = 100;
 iceTeaPrice<80 ? console.log("less than 80") : console.log("more than 80");