var numTrees = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
  
};
//To solve this problem, we can use dynamic programming. Let dp[i] be the number of structurally unique BST's that can be formed using i nodes. We can compute dp[i] using the following recurrence relation:


// dp[0] = 1
// dp[1] = 1
// dp[i] = sum(dp[j] * dp[i - j - 1]), for j = 0 to i - 1
// The base cases are dp[0] = 1 and dp[1] = 1, because there is only one way to form a BST with 0 or 1 node. For larger i, we can choose any node from 1 to i as the root node. If we choose node j as the root, then the left subtree will have j nodes, and the right subtree will have i - j - 1 nodes. The total number of unique BSTs that can be formed with i nodes is the sum of the number of unique BSTs that can be formed with j nodes (left subtree) and the number of unique BSTs that can be formed with i - j - 1 nodes (right subtree). We need to sum over all possible choices of j from 0 to i - 1.




// We initialize the dp array with 0s, and set the base cases dp[0] = 1 and dp[1] = 1. Then we iterate from 2 to n, and compute dp[i] using the recurrence relation. Finally, we return dp[n], which is the answer to the problem.
