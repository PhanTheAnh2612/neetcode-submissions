class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length || !s || !t) return false; 
        const map = new Map();
        for (let i of s) {
            if (map.has(i)) {
                map.set(i, map.get(i) + 1);
            } else {
                map.set(i, 1);
            }
        }
        for (let i of t) {
            if (map.has(i)) {
                const newVal = map.get(i) - 1;
                if (!newVal) {
                    map.delete(i);
                } else {
                    map.set(i, map.get(i) - 1);
                }
            } else {
                return false;
            }
        }
        return map.size === 0;
    }
}
