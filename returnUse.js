function num(n,m){
    let tab=[];
    let res=[];
      for(let i=2;i<=4;i++){
          tab= Math.pow(i,2)
             res.push(tab)
             // return res;    // only 1st wala result dega = 4
      }
      return (res)        //  all result     [ 4, 9, 16 ]
}
console.log(num(2,4))