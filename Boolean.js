console.log(10>20);
console.log(10>2);

//
let value=[10,20,30,4,null,undefined,40,"hot"];
console.log(value.length);    /// length given direct = 8

console.log(value.filter(Boolean));   //// give ansewer remove  null,undefined=  10,20,30,4,,40,,"hot"
console.log(value.filter(Boolean).length);   // after filter give ans=6

// m3
var a = [1, 2, 'b', 0, {}, '', NaN, 3, undefined, null, 5];

var b = a.filter(Boolean).length; // [1, 2, "b", {}, 3, 5];
  console.log(b)