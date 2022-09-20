function repeatedString(s, n) {
    let countA = 0;
    for (let i = 0; i < s.length; i++) {  // (abc) me kitna 'a'  hai o niklega. 
      if (s[i] == "a") {
        countA++;
      }
    }
  
    // perfect divisible conting of 'a'
    let total = parseInt(n / s.length) * countA;  // ek me etna to total me kitna.
  
    // iterating the array untill remainder of the rest of string
    for (let i = 0; i < n % s.length; i++) {    //  14/3= remainde =2 , remainde element se  a nikale ke liye
      if (s[i] == "a") {   // kyu ki element   s ke under hai.
        total += 1;
      }
    }
    return total;
  }
  console.log(repeatedString("abcd", 7));

// function repeatedString(s, n) {
//     var repeat = Math.round(n / s.length);
//     var remainder = n % s.length;
//     var answer = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] == 'a') {
//             answer += repeat;
//             if (i < remainder)
//                 answer++;
//         }
//     }
//     return answer;
// }

