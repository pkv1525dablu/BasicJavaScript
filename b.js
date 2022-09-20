function getNameStartWithChar(names, startingChar) {
    let result = names.find((name) => name[0] === startingChar );
    
    // function findFirsMatchElement(name){
    //     if(name[0] === startingChar) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    //     let result = names.find(findFirsMatchElement);

    if(result != null) {
        return result;
    }
    return null;
}


let names = ["Piyush", "piyush", "rakesh", "Rakesh", "Vikash", "vikash", "rakesh"] ;
let inputChar = 'p';
console.log(getNameStartWithChar(names, inputChar));