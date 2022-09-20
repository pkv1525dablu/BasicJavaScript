// function getNum(num){
// let arr={};
//     for(let i in num){
//             arr[num[i]]= ++arr[num[i]] || 1;
//     }
//     return arr ;
// }
// console.log(getNum([2,2,4,4,8,6,6,3]));    //   { '2': 2, '3': 1, '4': 2, '6': 2, '8': 1 }
// console.log(getNum("hello piyush"));    //   { h: 2, e: 1, l: 2, o: 1, ' ': 1, p: 1, i: 1, y: 1, u: 1, s: 1 }
// // //
function sockMerchant( ar) {
    let obj = { };
    let pairs = 0;

 //for (let i=0;i<=ar.length-1;i++) {
        for (let i in ar) {

    obj[ar[i]] = obj[ar[i]] + 1 || 1;

      if (obj[ar[i]] % 2 === 0) {
        pairs += 1;
      }
    }
  return pairs ;                                              // ans= { '3': 2, '10': 4, '20': 2 }
  }
console.log(sockMerchant([10,10,20,20,10,3,10]) )

//
// function getNum(num) {
//   //  count duplicate number
//   let arr = {};
//   let count = 0;

//   for (let i in num) {

//     if (arr[num[i]]) {
//       arr[num[i]]++;
//     } else {
//       arr[num[i]] = 1;
//        }
//       // arr[num[i]] = arr[num[i]] ++  || 1;
    
//       if (arr[num[i]] % 2 == 0) {
//         count++;
//       }
//     }
//     return count;
//     //return arr;
//   }
// console.log(getNum([2, 2, 2, 4, 4, 8, 8, 5, 5, 2]));
