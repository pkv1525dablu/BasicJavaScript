function sq(n, m) {
  let count=0;
  for (let i = n; i <= m; i++) {
    if (i == parseInt(Math.sqrt(i)) * parseInt(Math.sqrt(i))) {
      count++;
    }
  }
  return count;
}
console.log(sq(24, 49));

//  m2
 function sq(a,b){
     let  startPt= Math.ceil(Math.sqrt(a));    //  3.1 ceil=4
     let endPt=Math.floor(Math.sqrt(b));    //   7.1 floor=7
        let count=(endPt-startPt)+1;
                   return count;
 }
 console.log(sq(24, 49));

//


