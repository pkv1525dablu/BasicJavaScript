// function bird(arr) {
//   let num = {};
//   for (let i in arr) {
//     num[arr[i]] = ++num[arr[i]] || 1;
//   }

//   let maxx = 0;
//   let type = 0;
//   // find the bird which are maximum
//   for (let i in num) {
//     maxx = Math.max(num[i], maxx);
//     type = i;
//   }
//   for (let i in num) {
//     if (num[i] == maxx) {
//       // jiska  freq jada hai only  ussi ko lenge.    1,2,3
//       if (i < type) {
//         type = i;          //i esliye liye kyu ki i  se key milega  aur hume key print kara na hai
//         }
//        }
//   }
//   return type;
// }
// console.log(bird([1, 2, 3,1,2]));

//   m2

function bird(arr) {
  let num = {};
  for (let i in arr) {
    num[arr[i]] = ++num[arr[i]] || 1;
  }

  console.log(num)

  let maxx = 0;
  let type = 0;
  // find the bird which are maximum
  for (let i in num) {
    maxx = Math.max(num[i], maxx);
    type = i;
  }     
  for (let i in num) {
     if (num[i] == maxx) {
        
      type=Math.min(i,type);  // i esliye liye kyu ki i  se key milega  aur hume key print kara na hai
     }   
  }
//  console.log(type);
  return type;
}
console.log(bird([6,6,8,8,3,]));