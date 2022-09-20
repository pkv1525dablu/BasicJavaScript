function seq(p) {
  let tab = ["hello"]; // any value take
  let result = [];
  for (let i of p) {
    tab.push(i); ///  tab me push karne ke baad =  hello,2,3,1  ( taki numbering 1 se start ho)
  }
  for (let x = 1; x <= p.length; x++) {
    for (let y = 1; y <= p.length; y++) {
      if (tab[tab[y]] == x) {
        result.push(y  );
        break;
      }
    }
  }
  return result;
}
console.log(seq([2, 3, 1]));
