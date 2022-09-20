function timeConversion(s) {
let hour = (a.substring(0, 2));
let minute = (a.substring(3, 5)); 
let second = (a.substring(6, 8));
let duration = a.substring(8, 11);

    function convertHour(hour) {
        if(hour % 24 == 0) {
            return "00";
        }
        else if(hour < 10) {
            return "0"+hour;
        }
        return hour + "";
    }
    
function convertMinuteSecond(minute) {
        if(minute < 10) {
                    return "0"+hour;
        }
        return hour + "";
}

    
    let militaryTime = "";

   let militaryHour = (hour % 12) + (hour / 10) * 12;
        militaryTime += convertHour(militaryHour);
    
    if(duration == "PM") {
     } else if(duration == "AM") {
        
     }
        if(militaryHour % 24 == 0) {
            
        }Z