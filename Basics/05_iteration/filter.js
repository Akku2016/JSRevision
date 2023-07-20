// filter is returning only true value or return the value
const mynums =[1,2,3,4,5,6,7,8,9,10]
const newNums = mynums.filter((val) => val>4)
console.log(newNums);
// function declare with curly braces with return keyword this is madatory when we are returning the value in curly braces
const newval = mynums.filter( (nums) =>{
    return nums>5
})
console.log(newval);
// for e.g empty array with push
const value =[]
mynums.filter( (nums) =>{
    if(nums>5) {
        value.push(nums)
    } 
})
console.log(value);

const books =[
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]
// user wants only books
const userbooks = books.filter( (bk) => {
     return bk.genre === "History"
})

//console.log(userbooks)
const userbook = books.filter( (bk) => {
   return bk.edition < 2016 && bk.genre === 'History'
})
console.log(userbook)