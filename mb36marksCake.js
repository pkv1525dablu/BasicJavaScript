  function num(arr){
    arr.sort((a,b)=>(b-a));
    let tab=[]
    let sum=0;
    for (let i in arr){
     tab.push(Math.pow(2,i)*(arr[i]));
    }
    for(let i in tab){
        sum=sum+tab[i];
    }
    return sum;
  }
  console.log(num([7,4,9,6]))