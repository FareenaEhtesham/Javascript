
let form = document.getElementById("form")
let send = document.getElementById("send")
let reset = document.getElementById("reset")


var user_name = document.getElementById("name")
var user_email = document.getElementById("email")
var user_message = document.getElementById("message")


form.addEventListener("submit" , function(e){
    e.preventDefault()
})



reset.addEventListener("click" , function(){

    user_name.value= '';
    user_email.value = ' ';
    user_message.value =' ';
})


send.addEventListener("click" ,function(e){

    localStorage.setItem("Name:" , user_name.value)
    localStorage.setItem("Email:" ,user_email.value)

    alert("Hey LocalStorage works successfully")

})