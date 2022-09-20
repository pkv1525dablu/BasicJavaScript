function getn(num){
    let count=0;
    for(let  i  in num){
        if( num[i]==4){
            count ++;
        }
    }
    return count;
}  
console.log(getn([2,2,4,4,5,4,5,6,8]))
//