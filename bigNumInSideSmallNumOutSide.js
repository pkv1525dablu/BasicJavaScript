function bigNumInSideSmallNumOutSide(a,b){
    return (a.length >b.length) ? b+a+b:  a+b+a;
  }
  console.log(bigNumInSideSmallNumOutSide("222","11"))
  
  //
  function bigNumInSideSmallNumOutSide(a,b){
   if(a.length> b.length){
    return  b+a+b;
   } else {
        return a+b+a;
   }
  }
  console.log(bigNumInSideSmallNumOutSide("222","11"))
  