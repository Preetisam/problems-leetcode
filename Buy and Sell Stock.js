function maxProfit(prices) {
  const n = prices.length;
  const leftProfit = new Array(n).fill(0);
  const rightProfit = new Array(n).fill(0);

  let minPrice = Infinity;
  let maxLeftProfit = 0;
  for (let i = 0; i < n; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxLeftProfit = Math.max(maxLeftProfit, prices[i] - minPrice);
    leftProfit[i] = maxLeftProfit;
  }

  let maxPrice = -Infinity;
  let maxRightProfit = 0;
  for (let i = n - 1; i >= 0; i--) {
    maxPrice = Math.max(maxPrice, prices[i]);
    maxRightProfit = Math.max(maxRightProfit, maxPrice - prices[i]);
    rightProfit[i] = maxRightProfit;
  }

  let maxProfit = 0;
  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, leftProfit[i] + rightProfit[i]);
  }

  return maxProfit;
}
// To solve this problem, we can use dynamic programming. We can use two arrays leftProfit and rightProfit to store the maximum profit we can achieve by making at most one transaction on the left and right sides of each day respectively.

// We can first iterate over the prices array from left to right, and for each day i, we can calculate the maximum profit we can achieve by making at most one transaction on the left side of that day. We can keep track of the minimum price seen so far and the maximum profit we can achieve by selling the stock on each day. We can store the maximum profit in the leftProfit array for each day.

// Similarly, we can iterate over the prices array from right to left, and for each day i, we can calculate the maximum profit we can achieve by making at most one transaction on the right side of that day. We can keep track of the maximum price seen so far and the maximum profit we can achieve by buying the stock on each day. We can store the maximum profit in the rightProfit array for each day.

// Finally, we can iterate over the prices array and calculate the maximum profit we can achieve by making at most two transactions. For each day i, we can add the maximum profit we can achieve by making at most one transaction on the left side of that day (which is leftProfit[i]) and the maximum profit we can achieve by making at most one transaction on the right side of that day (which is rightProfit[i]). We can keep track of the maximum of these sums as we iterate over the array
// We initialize two arrays leftProfit and rightProfit with 0s, and we iterate over the prices array from left to right and right to left to fill these arrays with the maximum profit we can achieve by making at most one transaction on the left and right sides of each day respectively. Finally, we iterate over the prices array and calculate the maximum profit we can achieve by making at most two transactions by adding the maximum profit we can achieve by making at most one transaction on the left and right sides of each day. We keep track of the maximum of these sums as we iterate over the array, and return the maximum profit..
