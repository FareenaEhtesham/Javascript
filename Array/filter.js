console.log("\n\nFilter Method ")
//it also return new array

const numbers_Values = [1,2,3,4,5,6,7,8,9,10]


const newArray = numbers_Values.filter(function Odd(value){

    return value % 2 != 0
})


console.log("Odd values are:" + newArray)



const person =[

    {name : 'fareena',
    age :19
    },

     
    {name : 'maira',
    age :15
    },

     
    {name : 'ALi',
    age :9
    }
];

const Filtering = person.filter( a => a.age >= 18)

console.log(Filtering)


console.log("\n\nRepetition")

// The indexOf() method returns the position of the "first occurrence" of a specified value in a string.

// This method returns -1 if the value to search for never occurs.

const repeated_Num = [1,3,5,5,6,1,9,1 , 2]

const repeated = repeated_Num.filter((item , index , arr)=>{

        // if( arr.indexOf(item) === index){

        //     console.log(arr[index])
        // }

        // else{

        //     console.log("")
        // }

        return arr.indexOf(item) === index

})

console.log(repeated)



