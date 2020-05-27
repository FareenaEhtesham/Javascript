<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date object in JS</title>
</head>
<body>

<script>
    const date =new Date();

    console.log(date);
    console.log(typeof date);


    console.log("Date in String:" ,date.toDateString());
    console.log("Time format" ,date.toTimeString());
    console.log("Local format" ,date.toLocaleString());  

    // methods of date object:

    console.log("Year" ,date.getFullYear());
    console.log("Month" ,date.getMonth());     //in Js array starts from 0 so if month is march it shows 2
    console.log("Date" ,date.getDate());
    console.log("Day" ,date.getDay());
    console.log("Hours" ,date.getHours());
    console.log("MInutes" ,date.getMinutes());
    console.log("Seconds" ,date.getSeconds());

    console.log("Timestamp" ,date.getTime());  // Timestamp
    


    const dateBefore =new Date("Sat March 28 2020  7:30:59");
    console.log(dateBefore);
    console.log("Timestamp" ,dateBefore.getTime());

    console.log("The two different timestamps are", date.getTime(),"and" ,dateBefore.getTime());

    //difference in milliseconds
    const milli_seaconds=date.getTime() - dateBefore.getTime();
    console.log("Remember the difference is in milliseconds", milli_seaconds)


    //Often you see that in website below the posts there is mention "20 days ago" in posts
    //so this is achieved by 

    //difference in minutes
    const min = Math.round(milli_seaconds/1000/60);
    console.log("Difference in minutes" ,min);


    //difference in hours

    const hour =Math.round(min/60);
    console.log("Difference in Hour" ,hour);

    //difference in day
    const days =Math.round(hour/24);
    console.log("Difference in days" ,days);
    console.log("This post is of",days,"days ago");


    const convert_Time_Date =new Date(1585395059000);
    console.log(convert_Time_Date);


</script>
    
</body>
</html>