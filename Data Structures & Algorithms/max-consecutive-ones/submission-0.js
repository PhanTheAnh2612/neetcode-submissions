class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let result = 0;
        let count = 0;
        for (let num of nums) {
            count = num === 1 ? count + 1 : 0;
            result = Math.max(result, count);
        }
        return result;
    }
}
