function rob(nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  const dp = new Array(n).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i-1], nums[i] + dp[i-2]);
  }
  return dp[n-1];
}




























This problem can be solved using dynamic programming. We can define a state variable dp[i] to represent the maximum amount of money we can rob up to the ith house. There are two possible scenarios:

We don't rob the ith house, in which case the maximum amount of money we can rob is dp[i-1].
We rob the ith house, in which case the maximum amount of money we can rob is nums[i] + dp[i-2]. The reason we use dp[i-2] is because we cannot rob the (i-1)th house, as it is adjacent to the ith house.
We can then use the following recurrence relation to calculate dp[i]:

dp[i] = max(dp[i-1], nums[i] + dp[i-2])

The base cases are dp[0] = 0 and dp[1] = nums[0].

At the end, the maximum amount of money we can rob without alerting the police will be dp[n], where n is the length of the nums array.
