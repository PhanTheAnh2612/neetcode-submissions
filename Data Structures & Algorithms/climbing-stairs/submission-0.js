class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 2) return 1;
        return this.climbStairs(n - 1) + this.climbStairs(n - 2); 
    }
}
