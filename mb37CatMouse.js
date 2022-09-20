function cat(x,y,z){     // x=catA   , y=catB, z=mouse C
      let aPos=Math.abs(x-z);
      let bPos=Math.abs(y-z);
       console .log(aPos);
      if (aPos>bPos){
             return('Cat B');
      }   else if(bPos>aPos){
               return ('Cat A')
               
      }    else  {
               return  'Mouse C' 
      }
}
console.log(cat(1,3,2))