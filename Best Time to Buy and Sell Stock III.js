function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}


//  so far and the maximum profit we can achieve by selling the stock on each day.

// We can iterate over the prices array and for each day i, we can check if the price of the stock on that day is lower than the minimum price seen so far. If it is, we update the minimum price to the price on that day. If not, we calculate the profit we can achieve by selling the stock on that day (which is the difference between the price on that day and the minimum price seen so far) and update the maximum profit seen so far if the profit is greater than the current maximum profit.
// We initialize minPrice to Infinity and maxProfit to 0. Then we iterate over the prices array and check if the price on each day is lower than the minPrice seen so far. If it is, we update minPrice. Otherwise, we calculate the profit we can achieve by selling the stock on that day (which is the difference between the price on that day and the minPrice seen so far) and update maxProfit if the profit is greater than the current maxProfit. Finally, we return maxProfit, which is the maximum profit we can achieve from the transaction.
