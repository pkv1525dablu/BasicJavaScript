// function num(n){
//   for(let i=1;i<=n;i++){
//     console.log( Array(i).fill('#').join("").padStart(n)) ;
//   }
// }
// num([4]);

// function staircase(n) {
//     for (let i = n;i>=1;i--) {

//       const line = Array(i) .fill("#").join("").padStart(n);  ///
//       console.log(line);
//     }
//   }
//   console.log(staircase(4));
// //

// //
function staircase(n) {
  var line = "";
  for (let i = 1; i <= n; i++) {
     ///     padStart
    console.log( Array(i) .fill("*").join("").padEnd(n));
  }
 }
staircase([4]);
// //
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   num = "";
//   for (let j = 1; j <= n - i; j++) {
//     num += " ";
//   }
//   for (let j = 1; j <= i; j++) {
//     num += "4";
//   }

//   console.log(num);
// }

// function staircase(n) {
// for(let i=1;i<=n;i++){
//     let row = "";
//      for( let j=1;j<=n-i;j++){
//             row += " ";              // space print
//      }
//     for( let j=1;j<=i;j++){
//            // row += "#";
//             row += j ;

//     }
//         console.log(row);
//      }
// }
// staircase(3);

// //
// function repStr(n,m){
//     let str='';
//     for(i=0;i<n;i++){
//       str=str+m;
//     }
//     return str;
//   }
//   console.log(repStr(5,"*"));
