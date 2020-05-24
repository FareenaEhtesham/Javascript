
var a = document.form.username;
var email = document.form.email
var password = document.form.password
var phNo = document.form.telephone;
var slug = document.form.slug;

//userName
a.addEventListener("keypress" , function(){

    var v = /[a-zA-Z\d]{5,12}/;

    if(v.test(a.value)){

        document.getElementById("s1").textContent=" "
    }

    else{

        document.getElementById("s1").textContent="The name must be of 5 to 12 characters"
    }
})

//Email
email.addEventListener("keypress" , function(){

    var v= /^([a-zA-Z\d\.-_])+@([a-zA-Z\d-])+\.([a-z]{2,5})(\.[a-z]{2,5})?$/

    if(v.test(email.value)){

        document.getElementById("s2").textContent=" "
    }

    else{

        document.getElementById("s2").textContent="Invalid pattern"
    }

    
})

//Password

password.addEventListener("keypress" , function(){

    var v=/^[\w@-]{8,20}$/; // this contain upper and lower case alphabets ,digits and hyphen
                      // which summarize to \w but additionally we want "@" and "-"  

    if(v.test(password.value)){

        document.getElementById("s5").textContent=" "
    }

    else{

        document.getElementById("s5").textContent="SOmething went wrong"
    }

    
})

//phoneNumber
phNo.addEventListener("keypress" , function(){

    var v=/^[0-4]+-\d{7}$/;

    if(v.test(phNo.value)){

        document.getElementById("s3").textContent=" "
    }

    else{

        document.getElementById("s3").textContent="Invalid pattern"
    }


})

//slug
slug.addEventListener("keypress" , function(){

    var v=/^[a-z\d@-]{8,20}$/;

    if(v.test(slug.value)){

        document.getElementById("s4").textContent=" "
    }

    else{

        document.getElementById("s4").textContent="Invalid pattern"
    }

})