function recSum(nums) {
    if (nums.length === 1 ) {
        return nums[0];
    }
    if (nums.length === 0 ) {
        return 0;
    }
    return nums[0] + recSum(nums.slice(1,nums.length));
}
console.log(recSum([1,2,3]))
function rSigma(n) {
    if(n<=0) return 0
    n = Math.floor(n)
    if (n == 1) return 1;
    return n + rSigma(n - 1);
}
  console.log(rSigma(-5))