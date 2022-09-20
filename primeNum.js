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
                //  function num(n,m){
                //        let tab=[];
                //        let i,j;
                //        for( i =n;i<=m;i++){
                //            for( j=2;j<=i;j++){
                //            if(i%j==0){
                //             break;
                //            }
                //        }
                //          if(i==j){
                //             tab.push(j);
                //          }
                                
                //  }
                //   return tab;
                // }
                //     console.log(num(10,20));