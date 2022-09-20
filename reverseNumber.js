function integer(n,m){     // rev num bwt 21 to 24 
    
    let tab=[];
    for(let i=n;i<=m;i++){
     tab.push (String(i).split('').reverse().join(''));
    }
    return tab;
}
console.log(integer(21,24))  // 21,22,23,24  
//  m2
// rev num using method;
function num(arr) {
    let tab = parseInt(String(arr).split("").reverse().join(""));
    return tab;
  }
  console.log(num(876));
// m3

function reverseNumber(number) {
  var revNumber = 0;
  let tab = [];
  while (number > 0) {
    revNumber = number % 10;
    number = parseInt(number / 10);
   // console.log(number)
    tab.push(revNumber); //   overwite se batch ne ke liye;
  }
  return tab;
}
console.log(reverseNumber(876));


