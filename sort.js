let num=[10,20,2,3,40,4,100,1000]   
    
console.log( num.sort((a,b)=>(a-b)));    /// ascending order
console.log( num.sort((a,b)=>(b-a)));    // desecending order


////      
let numb=[10,20,2,3,40,4,100,1000]   
function valsort(a,b){
    return(a-b)
}
console.log( numb.sort(valsort)) 


