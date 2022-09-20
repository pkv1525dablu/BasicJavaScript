function solve(year){
    if (year == 1918){
        return "26.09.1918";
    }
    else if  (((year <= 1917) && (year%4 == 0)) || ((year%400 == 0) || ((year%4 ==0) && (year%100 != 0)))){
        return "12.09." + year;      // any year.
    }
    else{
        return "13.09." + year;
}  
}
console.log(solve(100 ));
//   but not all condition pass
function solve(year){
        if(year==1918){
            return '26.09.1918';
        } else if ((year%4==0)  || (year%400==0)){
            return '12.09.'+year;
    }      else {
        return '13.09.'+year;
    }
}       
console.log(solve(1220));