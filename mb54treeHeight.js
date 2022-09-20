function num(n){
    let height=1;
   
    for(let i=1;i<=n;i++){
        if (i%2==0){
            height ++;
        }
        else{
          height=2*height;
        }
           }
           return height;
  }
  console.log(num(0))
  console.log(num(1))
  console.log(num(4))
  console.log(num(5))