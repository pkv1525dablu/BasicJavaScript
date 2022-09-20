function getN(arr){
	for(let i=0;i<=arr.length;i++){
		for(let j=i+1;j<=arr.length;j++){
			   sum= arr[i]+arr[j];
			     if(sum==0){
					   return [arr[i],arr[j]];
				 }
	}
}
   }
   console.log(getN([-4,4,3,-3]))