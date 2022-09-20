function chocBar(s, d, m) {
  let counter = 0;

  for (let index = 0; index <=s.length-m ; index++) {   //   m  esliye use karege ki  compare  ke liye num bache. 
    let continuousSum = 0;
    for (let i = index; i < index + m; i++) {
      continuousSum += s[i];  
    }

    if (continuousSum == d) {
      counter++;
    }
  }
  return counter;
}
console.log(chocBar([1, 2, 3, 1, 2, 2, 1], 3, 2));
