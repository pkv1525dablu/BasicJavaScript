function pick(a) {

  let num = Array(a.length).fill(0);
  let max = 0;

  // get the frequency of num
  for (let i = 0; i < a.length; i++) {
   num[a[i]]++;
  }
  for (let i = 0; i < a.length-1; i++) {
     max= Math.max(( num[i]+num[i + 1]),max)    // length always  take -1 
  }
  return max;
}
console.log(pick([1, 2, 2, 2, 2, 1, 1]));


 ///   m2
function pick(a) {
  // Write your code here
  let num = Array(a.length).fill(0);
  let maxx = 0;
  // get the frequency of num
  for (let i = 0; i < a.length; i++) {
    num[a[i]]++;
  }
  for (let i = 0; i < a.length - 1; i++) {
    let firstElement = num[i];
    let secondElement = num[i + 1];
    if (firstElement + secondElement > maxx) {
      maxx = firstElement + secondElement;
    }        
  }
  return maxx;
}
console.log(pick([1, 2, 2, 2, 2, 1, 1]));
