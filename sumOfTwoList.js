// function num(a, b) {
//   let tab = [];
//   let sum = 0;
//   for (let i in a) { 
    
//     for (let j in b) {
//       sum = a[i] + b[j];
//     }
//   }
//   return sum;         //  over wriet hokar only last wala sum return karega (2+3=5)
// }
// console.log(num([1, 2], [1, 2, 3]));
//   m2
// function num(a, b) {
//     let tab = [];
//     let sum = 0;
//     for (let i in a) {
      
//       for (let j in b) {
//         sum = a[i] + b[j];
//           tab.push(sum);
//       }
//     }
//     return tab;         //     ek ek sum kar ke disply karega =[ 2, 3, 4, 3, 4, 5 ]
//   }
//   console.log(num([1, 2], [1, 2, 3]));

// m2    sum

function num(a, b) {
    let tab = [];
    let sum = 0;
    for (let i in a) {
      
      for (let j in b) {
        sum = a[i] + b[j];
          tab.push(sum);
      }
    }
    let sum2=0;
    for (let i in tab){
        sum2=sum2+tab[i];
    } 
      return sum2;       //           ans = 21  
  }
  console.log(num([1, 2], [1, 2, 3]));
