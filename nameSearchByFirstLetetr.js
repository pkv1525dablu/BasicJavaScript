function getNameStartWithChar(name, startingChar){
    let result=name.find( name =>name[0]===startingChar);

    if(result !=null);{
        return result;
    }
      return null;
}
let name=["piyush","kumar","Verma","piyush"];
let inputChar='p';
console.log(getNameStartWithChar(name,inputChar));