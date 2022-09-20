function difference(arr, n) {
  // Initialize sums of diagonals
  let d1 = 0, d2 = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {

      if (i == j) {             // finding sum of primary diagonal
        d1 += arr[i][j];
      }
      if (i == n -1- j){    // finding sum of secondary diagonal
         d2 += arr[i][j];
    }
  }
   
}
return Math.abs(d1 - d2);  // // Absolute difference of the sums
}
console.log(
  difference(
    [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ],3));

    

