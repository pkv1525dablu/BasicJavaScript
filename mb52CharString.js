function num(arr){
    let count=0;
       for(let i=0;i<arr.length-1;i++){
        if(arr[i]==arr[i+1]){
            count++;
        }
       }
       return count;
}
console.log(num('aaaaaa'))  
// m2
function alternatingCharacters(s) {
    let count=0;
      let pre=s[0];
      for(let i=1;i<s.length;i++){
          if(s[i]==pre){
              count++;
          } else{
              pre=s[i];
          }
      }
               return count;
  }
console.log(alternatingCharacters('aaaaaa'))  