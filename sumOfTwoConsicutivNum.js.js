function simpleArraySum(ar) {
  let sum = 0;
  for (i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
       console.log(sum);
  }
 // return sum;
//   // Write your code here
}  
console.log(simpleArraySum([1, 2, 3, 4, 5]));
//

//  sum of 2 consicutive num.   then left 1 num from rigth side
let num = [2, 3, 6, 4, 8, 6];
let sum = 0;
for (let index = 0; index <num.length - 1; index++) {

  for (let i = index; i < index+2; i++) {
       sum=sum+num[i];
  }
  console.log(sum)
}
//
// sum of 3 consicutive num.   then left 2 num from rigth side
let num = [2, 3, 6, 4, 8, 2];
let sum = 0;

for (let index = 0; index < num.length - 2; index++) {
  for (let i = index; i < index + 3; i++) {
    sum = sum + num[i];
  }
  console.log(sum);
}
// //
