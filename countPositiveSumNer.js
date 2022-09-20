function countPositivesSumNegatives(input) {
    let count=0;
    let  neg=0;
    for(let i=0;i<input.length;i++){
       if(input[i]>0){
           count++;
       }
        if (input[i]<0) {
           neg=neg+input[i];
       }
    }
    return [count,neg];
 }
  console.log(countPositivesSumNegatives([1,2,3,4,-8,-10,-12,-6]))
