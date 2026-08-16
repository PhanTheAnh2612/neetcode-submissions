class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        const result = new Array(2 * len);
        for (let i = 0; i < len; i++) {
            const val = nums[i];
            [result[i], result[i + len]] = [val, val];
        }
        return result;
    }
}
