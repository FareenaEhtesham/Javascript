<html>
    <head>
        <title>Practice </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    </head>
    <body>
        <label>Username</label>
        <input type="text">
             <br/><br/>
        <label>Password</label>
        <input id="myPassword" type="password">
        <span  onclick="clickMe()">
        <i style="display: none;" id="eyeOpen" class="fa fa-eye"></i>
        <i id="eyeClose" class="fa fa-eye-slash"></i>
    </span>
               <br/><br/>
        <button>Click Here</button>
        



        <script>

function clickMe(){
    var x= document.getElementById("myPassword");
    var y= document.getElementById("eyeOpen");
    var z= document.getElementById("eyeClose");


    if(x.type === 'password'){
        x.type = 'text';
        y.style.display ="block";
        z.style.display="none";

    }

    else{
        x.type  = 'password';
        y.style.display ="none";
        z.style.display="block";

    }

    

}
        </script>
    </body>
</html>