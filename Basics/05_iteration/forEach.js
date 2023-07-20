const coding =["js","ruby","java","python","cpp"]
// callback function like without name
coding.forEach( (codingexample)=> {
    //console.log(codingexample);
})
//object
const myobject = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
    
]
myobject.forEach( (item) =>{
    //console.log(item.languageFileName);
})
//index or array ki help se
myobject.forEach( (val,index,arr) =>{
    //console.log(val.languageName,index,arr);
})

// for each without return
coding.forEach((item)=>{
    //console.log(item);
})
//for each with return
 const newitem = coding.forEach((item)=>console.log(item))
 console.log(newitem);// it is not returning anything(value)
 //with return
 const value =coding.forEach((item)=> {return item})
 console.log(value)//result will show undefined
