function twoStrings(s1, s2) {
  let obj1 = {};
  for (let i in s1) {
    obj1[s1[i]] = ++obj1[s1[i]] || 1;
  }
  let obj2 = {};
  for (let i in s2) {
    obj2[s2[i]] = ++obj2[s2[i]] || 1;
  }
  
  for (let i in obj1) {

    if (obj2[i] != null) {   // ket ko match karege.
      return "yes";
    }
  }
  return "NO";
}

console.log(twoStrings("hello", "world"));
//

// function num(s1, s2) {
//   let shortStr;
//   let longStr;

//   if (s1.length > s2.length) {
//     longStr = s1;
//     shortStr = s2;
//   } else {
//     longStr = s2;
//     shortStr = s1;
//   }
//   for (let i = 0; i < shortStr.length; i++) {
//     if (longStr.indexOf(shortStr[i]) !== -1) {
//       return "YES";
//     }
//   }
//   return "NO";
// }
// console.log(num("hello", "abos"));
