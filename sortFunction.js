function numSort(num){
    return num.sort(nlsort);
    }
    function nlsort(a,b){
        return(a-b);
    }
    console.log(numSort([10,2,3,4,6,8,22]))
    //  m2
    function numSort(num){
        return num.sort((a,b)=>(a-b));
    
    }
    console.log(numSort([1,2,4,8,6,7,2])); 