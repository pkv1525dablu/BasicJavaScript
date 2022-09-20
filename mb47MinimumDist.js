function num ( arr){
    let tab ={};
    for(let i in arr){
       if(tab[arr[i]]==null){
         tab[arr[i]]=[i];
       } else{
           let existing= tab[arr[i]];
              existing.push(i);
              tab[arr[i]]=existing;       //  { '2': [ '2' ], '6': [ '1', '3' ], '8': [ '0', '4' ] }    
       }
    }
                 let freq={};
                 for(let i in arr){
                          freq[arr[i]]=++ freq[arr[i]]  || 1;   //{ '2': 1, '6': 2, '8': 2 }
                 }
                     let tab2=[];
                     for(let i in freq){
                         if(1<freq[i]){
                             tab2.push(i)                //[ '6', '8' ]
                         }
                     }
                                 if(tab2.length==0){
                                     return -1;
                                 }  

                     let minDist= Number.MAX_VALUE;
                     for(let i of tab2){    ///   6,8 value lena hai. of use karege.
                        let startIndex = parseInt(tab[i][0]); 
                       let endIndex = parseInt(tab[i][tab[i].length - 1]);       

                       let dist = parseInt(endIndex - startIndex);    //  2, 4   // 
               minDist = Math.min(dist, minDist);
                     }            
                                 
                     return minDist;


// console.log(min);
}
console.log(num([8, 6, 2, 6, 8]));
