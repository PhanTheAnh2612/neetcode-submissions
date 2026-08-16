class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        if (len === 0) {
            return [];
        }
        return [].concat(nums, nums);
    }
}
