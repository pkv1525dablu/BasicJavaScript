function countNum(arr) {
    let neg = 0;
    let pos = 0;
    let zero = 0;
  
    for (let i in arr) {
      if (arr[i] > 0) {
        pos++;
      }
     else  if (arr[i] < 0) {
        neg++;
      }
      else {
        zero++;
      }
    }
    // return [pos,neg,zero]
  
    let a =(pos / arr.length).toFixed(6);
    let b = (neg / arr.length).toFixed(6);
    let c = (zero / arr.length).toFixed(6);
    return [a, b, c];
  }
  //console.log(countNum([8, 1, 2, 3, -1, -2, -3, 0, 0]));
  let result = countNum([8, 1, 2, 3, -1, -2, -3, 0, 0]);
  for (let i of result) {
    console.log(i);
}
// countNum([8, 1, 2, 3, -1, -2, -3, 0, 0]).forEach((result) => {
//       console.log(result)
//   })
  
  
  
  