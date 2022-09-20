function  findSmallestInt(args)  {
   
    args.sort((a,b)=>(a-b));
   return (args[args.length-1]);     // dono me se koe ek return karega
   return (args[args]);
}
console.log(findSmallestInt([10,2,30,40]))

///
function  findSmallestInt(args)  {
    return Math.max(...args)
    return Math.min(...args)

}
console.log(findSmallestInt([10,2,30,40]))
