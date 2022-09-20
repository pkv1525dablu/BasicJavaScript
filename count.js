function getNum(num){
    let found=[  ];
    for(let i in num){
      
       found[num[i]]= ++found[num[i]] || 1 ;    // count  each element how many times  
    }
    return found;
   }
   console.log(getNum("hello world"))

//
  
// function getCount(str){
//     let count=0;
//     for(i=0;i<str.length;i++){
//         if(str[i]=='o'){             // it count only given value ans= 2
//             count++;
//         }
      
//     }
//     return count;
// }
// console.log(getCount("hello world"))
//

// function getCount(str){
//     let count=0;
//     for(i=0;i<str.length;i++){
//         if(str[i]){             // it count allvalue  ans= 11
//             count++;
//         }
      
//     }
//     return count;
// }
// console.log(getCount("hello world"))