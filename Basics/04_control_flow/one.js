//if or else
let temperature =45;
if(temperature <= 40){
    console.log("temerature is less than 40");
}
else {
    console.log("more than 40")
}
//<,>,<=,>=,==,!=,===, !==
// ===:-we aare checking value and also type with help of this operator
//==:-only checking value
// e.g of scope :-block  scope ko hum globally declare nhi kr skte.
const score =200
if(score > 100) {
    let power ="fly"
    console.log(`User power : ${power}`)
}
//console.log(`User power: ${power}`); error why we can't declare inside scope globally.
//nested if and else
const balance =1000
if(balance< 500){
    console.log("less than 500");
}
else if(balance<750)
    {
    console.log("less than 750");
    }
   else {
    console.log("more than and equal to 1000");
}
// &&:-all condition should be true. ||:-if one condition out of all conditions is true than the statement is true.
const userLoggedIn =true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && loggedInFromEmail ){
    console.log("Allow to buy course");
    };
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}

