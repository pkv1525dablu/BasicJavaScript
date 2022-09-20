//  shift left side;
function circularArrayRotation(a) {

   for(let j=1;j<=2;j++){    //    kitna bar rotate kara na hai
    let tab = a[0];
      for (let i = 1; i < a.length ; i++) {
         a[i-1] = a[i];
  }
  a[a.length - 1] = tab;
}
//console.log(a)-
  return a;
}
console.log(circularArrayRotation([1, 2, 3, 4]));

// //     shift right side
// function circularArrayRotation(a,k,queries) {
    
//     for(let j=0;j<k;j++){
//       let tab =  a[a.length - 1];
//     for (let i =0;i<a.length-1;i++) {
//         a [ a.length-1-i ]=a[ a.length-2-i];
//     }
//     a[0] = tab;
//     }

//     return a;
  
//   }
//   console.log(circularArrayRotation([3,4,5],2));
