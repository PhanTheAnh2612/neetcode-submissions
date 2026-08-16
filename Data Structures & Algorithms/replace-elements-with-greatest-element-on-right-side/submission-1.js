class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const len = arr.length;
        const result = new Array(len);
        let rightMax = -1;
        for (let i = len - 1; i >= 0; i--) {
            result[i] = rightMax;
            rightMax = Math.max(rightMax, arr[i]);
        }
        return result;
    }
}
