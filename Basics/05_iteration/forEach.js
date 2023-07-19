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
    console.log(item.languageFileName);
})
//index or array ki help se
myobject.forEach( (val,index,arr) =>{
    console.log(val.languageName,index,arr);
})