function num(arr) {
    let lower = [];
    let equal = [];
    let higher = [];
    let pivote = arr[0];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivote) {
        lower.push(arr[i]);
      } else if (arr[i] == pivote) {
        equal.push(arr[i]);
      } else {
        higher.push(arr[i]);
      }
    }
    for (let i in lower) {
      result.push(lower[i]);
    }
    for (let i of equal) {
      result.push(i);
    }
    for (let i of higher) {
      result.push(i);
    }
    return result;
  }
  console.log(num([4, 5, 3, 7, 2]));
  