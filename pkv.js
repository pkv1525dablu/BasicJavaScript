function  num(n,m){
     let tab=[];
     let i,j;
         for( i=n;i<=m;i++){
               for( j=2;j<=i;j++){
                   if(i%j==0){
                    break;
                   }
               }
                      if(i==j){
                            tab.push(j);
                      }
         } 
      return tab;
}
        console.log(num([piyush]))