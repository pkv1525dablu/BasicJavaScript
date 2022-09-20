function isPalindrome(s) {
    return s == s.split("").reverse().join("");
}

console.log(isPalindrome('12345')); 

//
function isPalindrome(s) {
   for(let i=0;i<s.length/2;i++){
       if(s[i]!=s[s.length-1-i]){           // s[i]=  1st num,  s[s.length-1-i]= last num
             return "not a pelindrom"
       } else{
           return "pelindrom"
       }
   }
}
console.log(isPalindrome('chahc')); 