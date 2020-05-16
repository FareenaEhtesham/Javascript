
//map return a new array numbering is the old array and it return a new array "Change"

console.log("\n\nMapping")

const numbering =[2, 4, 6, 8, 10]
let summation = 0 

// the general syntax of map item is compulsory which denote each and every element of your previous
// array where as index and arr are optional index denote "Index No" of your array where as arr 
// denote complete array

const Example = numbering.map((item , index ,arr) =>{
    
    console.log(item , index , arr)
})
  


const Change = numbering.map( a =>{

    console.log("\n",Math.sqrt(a))

    summation += a

})

console.log("The summation in map is" , summation)


const Multiply = numbering.map((items1 , index1) =>{

    return items1*index1

})

console.log("Multiply" ,Multiply )

// Okay lets make an array of objects
console.log("\nSome more examples")
const accessories= [
    {
    name : 'Laptop',
    price : 70000 ,
    count : 1
    
    },
    
    {
        name : 'Desktop',
        price : 80000,
        count : 2

    },

    {
    name : 'SmartPhone',
    price : 5000,
    count : 1
    }

]

const getAccessories = accessories.map(a =>{

//display info about accessories

    console.log("Name" , a.name , "Price" , a.price , "Counts" , a.count)

//Total price 

    console.log("Total Price: " + a.price * a.count) 
})


//Interesting

console.log("\nConversion of String into Numbers")

const stringNumbers = ['1' ,'2' ,'3' ,'4' ,'5']

const conversion = stringNumbers.map(Number)

console.log(conversion)