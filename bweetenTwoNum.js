function findMultiples(integer, limit) {
    let arr = [];
    for (i = integer; i <= limit; i++) {
      if (i % integer == 0) {
        arr.push(i);
      }
    }
    return arr;
  }
    console.log(findMultiples(2,10));
  