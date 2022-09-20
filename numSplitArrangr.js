function descendingOrder(n){
    //  return parseInt(String(n).split('').sort().reverse().join(''))
      return parseInt(n.toString().split('').sort().join(''))
  }
  console.log(descendingOrder(54263));  
  //
  // let str=[1,12,5,4,8,6];
//  num1=str.sort((a,b)=>(a-b));
//   console.log(num1 [0])
//   console.log(num1 [num1.length-1])  
  //
//   let str="piyush";
//   console.log(str[0])
//   console.log(str[1])
  //
  let num= 245687;
  arr=parseInt(String(num).split('').sort().join(''));
  console.log(arr);
