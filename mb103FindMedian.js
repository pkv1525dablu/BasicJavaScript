function findMedian(arr) {
    // for(let i in arr){
      let s=arr.sort((a,b)=>(a-b))
         let result=Math.floor(s.length/2);
                 let tab= arr[result]
     
 return tab;
 
 }
 console.log(findMedian([2,3,5,4,6,7,8]))