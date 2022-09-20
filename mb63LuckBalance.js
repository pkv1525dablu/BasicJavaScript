
function luckBalance(k, contests) {
    let sumOfUnimportantLuck = 0;
    // summing up all non-important
    for(let i = 0; i < contests.length; i++) {
        if(contests[i][1] == 0) {  
            sumOfUnimportantLuck += contests[i][0]; 
        }
    }
    
    let importantLuck = [];    
    // pushing into array up all important
    for(let i = 0; i < contests.length; i++) {
        if(contests[i][1] == 1) {
            importantLuck.push(contests[i][0]);
        }
    }
    importantLuck.sort((a, b) => b - a);

    
    let maximizeLuck = sumOfUnimportantLuck;
    for(let i = 0; i < importantLuck.length; i++) {
        if(i < k) {
           maximizeLuck += importantLuck[i];
        } else {
           maximizeLuck -= importantLuck[i];            
        }
    }
    return maximizeLuck;
    
    
    
    // Write your code here

}