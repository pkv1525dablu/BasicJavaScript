function pageCount(n, p) {
  let frontF = Math.floor(p / 2);
  let backF = Math.floor((n / 2) - frontF);
  let result = Math.min(frontF, backF);      //   nearest  stape  so we use  p 
  return result;
}
console.log(pageCount(10, 5));        //  n= total page number   && p=  we have to reach that page.
//  
