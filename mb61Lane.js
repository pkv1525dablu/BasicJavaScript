
function serviceLane(n, cases) {
    let  min=Number.MAX_VALUE;
         
      for(let i=cases[0];i<cases[cases.length-1];i++){
           if(n[i]<min){
            min=n[i];
           }
      }
        return min;

}
console.log(serviceLane([2, 3, 1, 2, 3, 2, 3, 3],[3,5]))