
const numbers =[ 1 ,3, 5, 7, 9]
var sum= 0 


numbers.forEach( (items , index ) =>{

    sum+= items
    // console.log(items)
    console.log("numbers[" + index + "] = " + items)
})

console.log(sum)

