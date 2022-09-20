function getMoneySpent(keyboards, drives, b) {
  let tab = [];
  for (let i in keyboards) {
    let sum = 0;
    for (let j in drives) {
      sum = keyboards[i] + drives[j];
      tab.push(sum);
    }  
  }
  let result = -1;
  for (let i in tab) {
    if (tab[i] <= b) {
      result = Math.max(tab[i], result);
    }
  }
  return result;
}
console.log(getMoneySpent([2, 6], [2, 4, 6], [10]));

//    sum of two list , A= 2,6   & b=2,4,6       

function getMoneySpent(keyboards, drives, b) {
  let tab = [];
  for (let i in keyboards) {
    let sum = 0;
    for (let j in drives) {
      sum = keyboards[i] + drives[j];
      tab.push(sum);
    }  
  }

  return tab;
}
console.log(getMoneySpent([2, 6], [2, 4, 6], [10]));