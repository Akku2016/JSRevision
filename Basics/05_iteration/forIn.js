//for in 
const myobject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for(const key in myobject){
   // console.log(`${key} shorcut is for ${myobject[key]}`)
}

//array example
const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    //console.log(key);//but if you will write in for of value is coming but here only coming key.that' why we are using for array "forof" loop
    //if you want to come value in your code you can use like this
    //console.log(programming[key]);
}
//map
const mapexample = new Map()
mapexample.set('IN', "India")
mapexample.set('USA', "United States of America")

for(const [key,value] in mapexample){
    console.log(key);//nothing will show we can't use map here
}