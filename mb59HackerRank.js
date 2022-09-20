function hackerrankInString(s) {
    // Write your code here
let tab = "hackerrank";
let matchedIndex = 0;
    for(let i = 0;i < s.length && matchedIndex < tab.length ; i++) {
        if(tab[matchedIndex] == s[i]) {
            matchedIndex ++;
        }
    }
    // Write your code here
    if(matchedIndex == tab.length) {
        return "YES";
    } else {
        return "NO";
    }    
}
  console.log(hackerrankInString('hereiamstackerrank'));