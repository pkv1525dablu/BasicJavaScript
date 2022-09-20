
function superReducedString(s) {
    // Write your code here

var arr = s.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            arr.splice(i, 2);
            i=-1;
        }
    }
    if (arr.length === 0) {
        return ('Empty String');
    } else {
     return  (arr.join(''));
    }

}
  console.log(superReducedString('aaabccddd'))
//console.log(superReducedString('aaaabbccdddd'))
