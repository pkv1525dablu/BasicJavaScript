// let num=[1,2.5,4.2,6]
// let count =0;
//   for (let i in num){
// if(Number.isInteger(num[i])){
//     console.log(num[i]) ;               //  print kara hai to=        1,6  ans  
//             count++;            // count karna hai to
// }
//   }
//   console.log(count);         // 2
  //

  function num(arr){
    let tab=[]
  for(let i in arr){
if(Number.isInteger(arr[i])){
    tab.push (arr[i]) ;               //  print kara hai to=        1,6  ans  
             // count karna hai to
}
  }
  return tab;
}
  console.log(num([2,4,4.3])); 