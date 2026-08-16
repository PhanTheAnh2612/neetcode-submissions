class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const len = arr.length;
        if (len === 0) {
            return [];
        }
        for (let i = 0; i < len - 1; i++) {
            const max = Math.max(...arr.slice(i + 1));
            arr[i] = max;
        }

        arr[len - 1] = -1;
        return arr;
    }
}
