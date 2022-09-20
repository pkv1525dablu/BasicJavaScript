
function numberToString(num) {
    return  num.toString();
}
console.log(numberToString(10));
//

let num= 245687;
arr=String(num).split('').sort().map(Number);
console.log(arr);   // ans  [2,4,5,6,7,8]