function theLoveLetterMystery(s) {
    let count=0;
         for(let i=0;i<s.length;i++){
               a=s[i];
               b=s[s.length-1-i];             //   abcd- abcc-abcb-abca-abba== 4 step
             if(a<b){
                 let tab = Math.abs(a.charCodeAt() - b.charCodeAt());
                 count += tab;
             }
         }
 return count;
}
console.log(theLoveLetterMystery("abcd"));