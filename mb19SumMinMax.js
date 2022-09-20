function  numb(num){
       num =num.sort((a,b)=>(a-b))
    let sum=0;
   for(let i =0;i<num.length-1;i++){
          sum=sum+num[i];          
   }
   let sum1=0;
    for(let i =1;i<num.length;i++){
      sum1=sum1+num[i];
  }
             return [sum+" "+sum1]
}
console.log(numb([1,2,3,4,5,6])); 