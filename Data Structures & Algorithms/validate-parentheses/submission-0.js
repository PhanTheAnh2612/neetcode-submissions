class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        const pair = {
            ')': '(',
            '}': '{',
            ']': '[',
        };
        for (const c of s) {
            switch (c) {
            case '{':
            case '[':
            case '(': {
                arr.push(c);
                break;
            }
            case ')':
            case '}':
            case ']': {
                const openBracket = arr.at(-1);
                if (openBracket !== pair[c]) {
                    return false;
                } else {
                    arr.pop();
                }
            }
            default: break;
            }
        }
        return arr.length === 0;
    }
}
