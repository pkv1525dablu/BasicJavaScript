function marsExploration(s) {
 
    let tab = "SOS";
 let count = 0;
 for (let i = 0; i < s.length; i++) {
     if (s[i] != tab[i % 3]){    
      count++;   
     } 
 }
  return count;
}
  console.log(marsExploration("SOSSOT"));

  //
 