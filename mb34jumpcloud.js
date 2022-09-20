function num(c, k) {
    let tab = [];
  
    for (let i = 0; i != 0 || tab.length == 0; i = (i + k) % c.length) {
      // i+=2 means alternater  mover
  
      if (c[i] == 0) {
        tab.push(1);
      } else {
        tab.push(3);
      }
    }
    let sum = 0;
    for (let i in tab) {
      sum = sum + tab[i];
    }
    return 100 - sum;
  }
  console.log(num([0, 0, 1, 0,0,1,1,0], 2));
  
  