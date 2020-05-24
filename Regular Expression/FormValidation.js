var a=document.myform.firstname;
a.addEventListener("keypress",validation);

var b=document.myform.phno;
b.addEventListener("keypress",validatePhno);


var d=document.myform.email;
d.addEventListener("keypress",validateEmail);

var c=document.myform.password;
c.addEventListener("keypress",validatepassword);


function validation(){
    var e=/^([^0-9]*)$/;

    if(e.test(a.value)){
        document.getElementById("s1").textContent=" ";
    }
    else{
        document.getElementById("s1").textContent="Donot Enter any number";
    }
}

function validatePhno(){

    var e=/^[0-4]+-[0-9]{7}$/;
    if(e.test(b.value)){
        document.getElementById("s2").textContent=" ";
    }
    else{
        document.getElementById("s2").textContent="Remember the pattern";
    }

}




function validatepassword(){

    var e= /^\w{7,}$/ //use carrot and beginning symbols b/c i donot want to recognize after the gap

    if(e.test(c.value)){
        document.getElementById("s3").textContent=" ";
    }
    else{
        document.getElementById("s3").textContent="Weak password";
    }

}

function validateEmail(){

    var e=/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+\.com$/;
    if(e.test(d.value)){
        document.getElementById("s4").textContent=" ";
    }
    else{
        document.getElementById("s4").textContent="Remeber pattern";
    }

}