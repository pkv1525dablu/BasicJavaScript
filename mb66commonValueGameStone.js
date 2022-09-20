function num(arr){
     let comb=arr.join('');
      // console.log(new Set(comb))
       let unique=[...new Set(comb)];   //  [...]  ye use islye kiye hai taki array ke form me result aaye
      // console.log(unique)
      let result = [];
      for(let i in unique) {
        let tab = arr.every(b=>b.includes(unique[i]))
        if(tab == true) {
            result.push(unique[i]);
        }
      }
      
         return result;
}
console.log(num(['abcd', 'abdef', 'abhui']))