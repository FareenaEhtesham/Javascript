
//store Data

//set item me first value= key ,second value = Value
localStorage.setItem("name" , "Fareena")
localStorage.setItem("age" , 20)

//get data

let name = localStorage.getItem("name")
console.log("Name : " , name)

let age = localStorage.getItem("age")
console.log("Age :" ,age)

//Update

localStorage.setItem("name" ,"maira")
localStorage.age =20;

name = localStorage.getItem("name")
age = localStorage.getItem("age")

console.log("Updated ONe:" , name)
console.log("Updated Age:",age)



// Delete data from Storage

localStorage.removeItem("name") //To remove only 1 item 
localStorage.clear()            //To remove all the data from localStorage
name = localStorage.getItem("name")
age = localStorage.getItem("age")
console.log(name , age)


//Only give the key it automatically remove from local storage




/*Every value set in LocalStorage in the form of STRING

In this, First of all we set name and age then retrieve it ,then we update after update if we 
get it it will show us the UPDATED NAME AND AGE*/


