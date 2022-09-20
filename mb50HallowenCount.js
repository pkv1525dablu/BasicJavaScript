function howManyGames(p, d, m, s) {
  let sum = 0,
    count = 0;
  while (true) {
    sum = sum + (p <= m ? m : p);
    if (sum > s) {
      break;
    }
    p -= d;
    count++;
    // console.log(sum);
  }
  return count;
}
console.log(howManyGames(20, 3, 6, 80));
// //
