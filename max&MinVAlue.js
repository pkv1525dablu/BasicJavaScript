
function revNum(name){

    return Math.min(...name)           //    min= 2
}
console.log(revNum([10,2,4,5,80,7,6,20]))

//
function revNum(name){
    return Math.max(...name)    //   max= 80
 }
 console.log(revNum([10,2,4,5,80,7,6,20]))
//

//
let str=[1,12,5,4,8,6];
 num1=str.sort((a,b)=>(a-b));
  console.log(num1 [0])                       //   min=1
  console.log(num1 [num1.length-1])   //max= 12
  
  let str1="piyush";
  console.log(str1[0])    // p
  console.log(str1[1])   // i
  //
  let str2=[1,2,4,6,8,6];
  console.log(str2[0])   // 1
  console.log(str2[1])   //  2


  //
  let num= 245687;
  arr=parseInt(String(num).split('').sort().join(''));
  console.log(arr);
