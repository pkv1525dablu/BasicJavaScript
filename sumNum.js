function avgNum(num){
    let sum=0;
    for(let i in num){
       sum=sum+num[i]
          console.log(sum);
    }
}
               avgNum([2,4,8]);   // ans = 2 6 14
//
function avgNum(num){
     let sum=0;
     for(let i in num){
        sum=sum+num[i]
        
     }
      return sum;
}
console.log(avgNum([2,4,8]))  //  ans = 14