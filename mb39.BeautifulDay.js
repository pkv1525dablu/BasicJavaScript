    function num(i,j,k){
        let count=0;
        for(let x=i;x<j;x++){
            let y=String(x).split('').reverse().join('');
            console.log(y)
            if(Math.abs((x-y) % k == 0)){
                count++;
            }
            //   if(Number.isInteger(result)){
            //   }
        }
        return count;
    }
    console.log(num(20,24,6))



  