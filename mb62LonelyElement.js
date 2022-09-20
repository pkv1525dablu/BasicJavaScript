function num(a) {
                 let tab={}
                 for(let i in a){
                  tab[a[i]] =++ tab[a[i]]  || 1
                    }
                    for(let i in tab){
                        if(tab[i]==1){
                            return i;
                        }
                }
                rerurn ;
            }
                console.log(num([1,2,3,4,4,2,3,3]));