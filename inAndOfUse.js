
//   using with string    for-in loop
let str="my name joy"
for(let i in str){
    console.log(str[i])
} 
       //      use object    for-in loop
       let obj={ name:'piyush',
                     lang:"english",
                     mob : '8407'
       }
       for (let i in obj){
        console.log(obj[i])  //  
       }

    //
      // using array      for-in loop
let num=['piyush','vks','5','6']
for(let name in num){
      console.log(num[name])
}

// using of 
let num1=['piyush','vks','5','6']
for(let name of num1){
      console.log(name)     // give value    
}
  //
  let num1=['piyush','vks','5','6']
for(let name of num1){
      console.log(name)     ///  give   index 
}