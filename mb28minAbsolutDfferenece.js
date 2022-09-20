function minDiff(num) {            // minimum difference
  num.sort((a, b) => a - b);
  let result = Number.MAX_VALUE;

  for (let i = 0; i < num.length - 1; i++) {
    let diff = Math.abs(num[i] - num[i + 1]);
    if (result > diff) {
      result = diff;
    } if(diff==0){  
    return 0;
    }
  }
  return result;
}
console.log(minDiff([1, 2, 6]));

//     //   max diffrece
function maxDiff(num) {
    num.sort((a, b) => a - b);
    let result = Number.MIN_VALUE;
  
    for (let i = 0; i < num.length - 1; i++) {
       result =Math.max(Math.abs(num[i] - num[i + 1]),result);
     
      if(result==0){  
      return 0;
      }
    }
    return result;
  }
  console.log(maxDiff([1, 2, 6]));

