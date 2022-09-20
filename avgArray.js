function find_average(array) {
    return array.length > 0 ? (array.reduce((a, b) =>( a + b))) / array.length : 0;
  }
  console.log(find_average([10, 20, 30]));
  
  ///
  // function find_average(arr) {
  //   return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
  // }
  