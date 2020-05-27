<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Library</title>
</head>
<body>
    


    <script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>


    <script>

            const now =new Date();
            console.log(now)

            console.log(dateFns.isToday(now));  //it returns boolean
        // YYYY => year,
        //MMMM => full month
        //Do   => Date
        //dddd => Day

            console.log("Year",dateFns.format(now ,"YYYY"));
            console.log("Date:",dateFns.format(now ,"Do/MMMM/YYYY/dddd"));
            console.log("Date" ,now.getDate());


            console.log("Minutes:",dateFns.format(now ,"m"));

            //assume you published your post on date below
            const date_before =new Date("February 27 2020");
            console.log(dateFns.distanceInWords(now ,date_before,{addSuffix:true}));

    </script>
</body>
</html>