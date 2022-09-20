function num(s,d){
    let count=0;
    
    for(let  i in s){
         let num1=s[i]+d;
         let num2=num1+d;
         if(s.includes(num1) && s.includes(num2)){
                        count++;
    }
}
     return count;
}
console.log(num([1, 2, 4, 5, 7, 8, 10],3))