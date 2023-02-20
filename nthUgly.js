var nthUglyNumber = function(n) {
    let f1 = 0, f2 = 0 , f3 = 0,dp=[1]
    for(let i=1;i<n;i++){
        let min = Math.min(dp[f1]*2,dp[f2]*3,dp[f3]*5)
        if(min == dp[f1]*2) f1++
        if(min == dp[f2]*3) f2++
        if(min == dp[f3]*5) f3++
        dp[i] = min
    }
    return dp[n-1]
};


// The function nthUglyNumber takes an integer n as input, and returns the nth ugly number.

// The function initializes three pointers f1, f2, and f3, which keep track of the indices of the last ugly number that was multiplied by 2, 3, and 5, respectively. It also initializes an array dp to store the first n ugly numbers, with dp[0] set to 1.

// It then iterates from 1 to n-1, generating the ith ugly number by taking the minimum value of dp[f1] * 2, dp[f2] * 3, and dp[f3] * 5. It then updates the pointers f1, f2, and f3 to point to the next index in the dp array that will be multiplied by 2, 3, and 5, respectively. Finally, it adds the new ugly number to the dp array.

// Once the loop is finished, the function returns the last element of the dp array, which is the nth ugly number.

// The time complexity of this solution is O(n), since it iterates over n values to generate the first n ugly numbers. The space complexity is also O(n), since it uses an array of size n to store the first n ugly numbers.
