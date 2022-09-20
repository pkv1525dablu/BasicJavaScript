function sumArray(array) {
    array.sort((a,b)=>(a-b));
       // return array[1];
       let sum=0;
       for(i=0;i<array.length;i++){
         sum=sum+array[i];
       }
      sum2=sum- (Math.max(...array)+Math.min(...array)) ;    
                              //(array[0]+array[array.length-1]);          
           //return sum;
       return sum2;
 
      // array[array.length-1];    
   }
 
      console.log(sumArray([2,4,1,8])) ;