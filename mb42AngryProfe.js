function num(n,k){
    let count=0;
      for(let i in n){
              if(n[i]<=0){
                count++;
                if(count>=k){
                      return "NO"
                }
              }       
            }
              return 'YES'
}
     console.log(num([0, -1, 2, 1],2))