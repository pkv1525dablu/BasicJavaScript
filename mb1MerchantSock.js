function num(arr) {
    let obj = {};
    let count = 0;
    
    for (let i in arr) {
      obj[arr[i]] =++obj[arr[i]] || 1;
      
      if (obj[arr[i]] % 2 === 0) {
        count++;
      }
  }
  console.log(obj);
    return count;
  }
  
  console.log(num([10, 20, 20, 10, 10, 30, 50, 10, 20]));
  