window.onload = pcounter;
function ageCalculate(){
   // var d = document.getElementById("agecal").value;
   //
   // var d = new Date();
   // var day = d.getDate();
   // var month = d.getMonth();
   // var year = d.getFullYear();
   // // var day = d.getDate();
   // // var month = d.getMonth();
   // // var year = d.getFullYear();
   //
   // document.getElementById("d1").innerHTML ="This is Day " + day;
   // document.getElementById("d2").innerHTML ="This is Month " + month;
   // document.getElementById("d3").innerHTML ="This is Year " + year;

       //document.getElementById('age').InnerHtml
     // document.getElementById("demo").InnerHtml=4+5;
      //document.write="Hi";
    var birthDate =document.getElementById('br_date').value;

    //if(birthDate==""){
    //  alert("Choose correct birthdate.")
    //}else{
    //  alert(birthDate);
    //  alert(Date());
    var d = new Date(birthDate);

    // document.getElementById("age").innerHTML = d;

    //}

           var mdate = birthDate.toString();
           var yearThen = parseInt(mdate.substring(0,4), 10);
           var monthThen = parseInt(mdate.substring(5,7), 10);
           var dayThen = parseInt(mdate.substring(8,10), 10);

           var today = new Date();
           var birthday = new Date(yearThen, monthThen-1, dayThen);
    //   alert(today.valueOf() + " " + birthday.valueOf());
           var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    //  alert(differenceInMilisecond);

           var year_age = Math.floor(differenceInMilisecond / 31536000000);
           var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

           if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
               alert("Happy B'day!!!");
           }

           var month_age = Math.floor(day_age/30);

           day_age = day_age % 30;

           var tMnt= (month_age + (year_age*12));
           var tDays =(tMnt*30) + day_age;

           if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
               document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
           }
           else {

               document.getElementById("age").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"
               + "<br><br> <b>Age in Days</b> <br/>"
               +  tDays + " days"

               + "<b><br><br>Age in months</b><br> "
               + tMnt + " months " + day_age + " days"

               + "<br><br> <b>Age in Hours</b> <br/>"
               +  tDays*24 + " hours"
       	       + "<br><br> <b>Age in minutes</b> <br/>"
               +  (tDays*24)*60 + " minutes"


               + "<br><br> <b>Age in seconds</b> <br/>"
               +  tDays*24*3600 + " seconds"
               + "<br><br> <b>Age in Millisecond</b> <br/>"
               +  tDays*24*3600*1000 + " miliseconds"


   	           + "<br><br> <b>Heart Beats</b> <br/>"
               + ((tDays*24)*60)*80 + " per minute"
           }
}

 function pcounter(){
   var counter = document.getElementById('cc');
   var count = 0;
   count = count+1;
   count = parseInt(counter.value);
   counter.innerHTML= parseInt(count);
 }
