class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};
        for (let i in nums) {
            const remainder = target - nums[i];
            if (`${nums[i]}` in obj) {
                return [+obj[nums[i]], +i];
            } else {
                obj[remainder] = i;
            }
        }
        return [];
    }
}
