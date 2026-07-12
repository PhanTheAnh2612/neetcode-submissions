class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.recur(0, n);
    }
    recur(step, n) {
        if (step === n) return 1;
        if (step > n) return 0;
        return this.recur(step + 1, n) + this.recur(step + 2, n);
    }
}
