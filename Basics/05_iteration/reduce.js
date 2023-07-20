// reduce 
// working:-initial value is 0,but first time accumulator have also initial value after when accumulator will take second value that time he will take whatever sum we have   like 0+1=1 now 1 is acc value like it will check
const arr= [1,2,3]
const myTotal = arr.reduce( function(acc,curr) {
    console.log(`acc:${acc} and  currval: ${curr}`);
    return acc+ curr
},0)
console.log(myTotal)
const sumarr =arr.reduce((accumulator, currentValue) => accumulator + currentValue,0)
console.log(sumarr);

const shoppingcart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const  priceofpay = shoppingcart.reduce((acc,curr) =>acc+curr.price,0)
console.log(priceofpay)