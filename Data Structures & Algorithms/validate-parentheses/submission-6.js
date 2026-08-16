class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length < 2) {
            return false;
        }
        const pairMap = {
            '}': '{',
            ')': '(',
            ']': '['
        };
        const stack = [];
        for (let c of s) {
            switch (c) {
                case '(':
                case '[':
                case '{': {
                    stack.push(c);
                    break;
                }
                default: {
                    const parenthese = pairMap[c];
                    const topVal = stack.pop();
                    if (topVal !== parenthese) {
                        return false;
                    }
                }
            }
        }
        return stack.length === 0;
    }
}
