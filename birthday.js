var daysUntilMyBirthday = 60;

while(daysUntilMyBirthday >= 0)
    if(daysUntilMyBirthday > 30){
        console.log(daysUntilMyBirthday + "days left until my birthday. So sad :(");
        daysUntilMyBirthday = daysUntilMyBirthday-1;
    }
    else if(daysUntilMyBirthday >1){
        console.log(daysUntilMyBirthday + "days until my birthday :)");
        daysUntilMyBirthday = daysUntilMyBirthday-1;
    }
   else if(daysUntilMyBirthday ==1){
       console.log(daysUntilMyBirthday + "day until my birthday!!!!");
       daysUntilMyBirthday = daysUntilMyBirthday-1;
    }
    else{
        console.log("Happy Birthday!!");
        daysUntilMyBirthday = daysUntilMyBirthday-1;
   }
