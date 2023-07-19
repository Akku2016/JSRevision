// for of and for in
//["","",""]
//[{},{},{}]
//array example
// for of is iterate for array,map,string .not for object.
const arr =[1,2,3,4,5]
const programming=["js","rb","py","java","cpp"]
for(const num of programming) {
    console.log(num);
}

//string example
let str ="Hello guys"
for(const string of str){
    console.log(string);
}
//object example
let objectexample =
    {
        js:"java script",
        Rs:"Ruby"
    }

//for(const example of objectexample){
    //console.log(example);//error it will not work here in "forof"
//}
//map example
const mapexample = new Map()
mapexample.set('IN', "India")
mapexample.set('USA', "United States of America")

for(const [key,value] of mapexample){
    console.log(key ,":-" ,value);
}