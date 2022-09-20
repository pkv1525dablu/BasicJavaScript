function num(arr){
    let tab={};
    for(let i in arr){
        if(tab[arr[i]]==null){
            tab[arr[i]]=[i];      //   position dalege   i ke pass positin hai;
        }  else{
                let existing=tab[arr[i]];
                existing.push(i);
                tab[arr[i]]=existing;
        }
    }
   // console.log(tab)                ans=     { '2': [ '2' ], '6': [ '1', '3' ], '8': [ '0', '4' ] }
    return tab;
}
console.log(num([8, 6, 2, 6, 8]));