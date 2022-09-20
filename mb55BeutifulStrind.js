function num(s){
    let count=0;
    for(let i=1;i<s.length-1;i++){
        if(s[i-1]==0 && s[i]==1 && s[i+1]){
                     count++;
                     s[i+1]=1;
        }
    }
    return count;
}
console.log(num('101011001'));