let num = [2, 3, 4, 5, 2, 4, 6, 6, 8]; //  if two element then use  remove duplicate num
let num1 = new Set(num);
console.log(num1);

//

       // m2
let nums = [2, 2, 2, 2, 4, 3, 4, 5, 2, 4, 6, 6, 8,8];      // print duplicate num
nums.sort((a, b) => a - b); 
let ans = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == nums[i + 1]) {                       // print duplicet num 
    if (ans[ans.length - 1] !== nums[i]) { 
      ans.push(nums[i]);
    }
  }
}
console.log(ans);
