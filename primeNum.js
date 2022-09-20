function num(n){
    let count=0;
      for(let i=1;i<=n;i++){
              if(n%i==0){
                count++;  
              }
                
      }         
              if (count==2){
                     return "prime number";
              }
                return "not prime num"
  }
              console.log(num([19]))

              //       find prime num   given range;
               