function hurdel(num,k){     //  k = power of person in unit
    num.sort((a,b)=>(b-a)); 
    let result="";
    for(let i in num){   //  height of herdal
    if(k>=num[0]){
                   return 0; //  console.log ('0');
    } 
     else if (k<num[0]) {
            result=((num[0]-k));
    }
}
    return result;
  }
  console.log( hurdel ([1,2,6,4],5));