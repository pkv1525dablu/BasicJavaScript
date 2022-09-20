function equalizeArray(arr) {
  let tab = {};
  let maxCount = 0;
  for (let i in arr) {
    tab[arr[i]] = ++tab[arr[i]] || 1; // { '1': 1, '2': 1, '3': 3 }
  }
  for (let i in tab) {     //   
    maxCount = Math.max(i, maxCount);
  }
 return arr.length - maxCount;
}
console.log(equalizeArray([3, 3, 2, 1, 3]));
